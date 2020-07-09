# (C) Copyright (2018,2020) Hewlett Packard Enterprise Development LP
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in
# all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
# THE SOFTWARE.
###

from subprocess import CalledProcessError
from ansible.constants import DEFAULT_VAULT_ID_MATCH
from ansible.parsing.vault import VaultLib
from ansible.parsing.vault import VaultSecret

import shutil
import subprocess
import threading
from redfish_object import RedfishObject
from time import sleep
import requests
import os
import json
from datetime import datetime
from datetime import timedelta
from getpass import getpass

from esxi_operations import *
from rhel_operations import *
from ilo_operations import *
from image_operations import *

max_threads_for_deployment = 10
os_deployment_semaphores = threading.Semaphore(value=max_threads_for_deployment)

def os_orchestrator(servers, config, kickstart_files): 
    """This function is the orchestrator which initiates the OS deployment functions
    
    Arguments:
        servers {list}               -- server details as per the input_files/servers.json
        config {dictionary}          -- Web server and OS details as per the input_files/config.json
        kickstart_files {dictionary} -- dictionary mapping for kickstart files with respective roles
    """

    print("Validating prerequisites for OS deployment")
    
    worker_status = False
    if(config["OS_type"] == "rhel7"):
        for server in servers:
            if server["Server_Role"] == "worker":
                worker_status = True
                break
    
    prerequisites_status = validate_prerequisites(config["OS_type"], config["HTTP_server_base_url"], 
                                                config["OS_image_name"], kickstart_files, worker_status)
    if (prerequisites_status):
        print("Prerequisites validation is complete")
        os_deployment(servers, config["OS_type"], kickstart_files)
    else:
        print("OS deployment failed due to missing prerequisites")


def os_deployment(servers, os_type, kickstart_files):
    """This function is to initiate threads for deploying operating system on each of the servers provided in the input file
    
    Arguments:
        servers {list}                  -- server details as per the input_file/server_details.json
        os_type {string}                -- Type of the operating system 
        kickstart_files {dictionary}    -- dictionary mapping for kickstart files with respective roles
    """
    threads = []
    for server in servers:
        server_thread = threading.Thread(target=image_deployment, args=(
            servers, server['Server_serial_number'], os_type, kickstart_files))
        server_thread.start()
        threads.append(server_thread)
    for thread in threads:
        thread.join()


def image_deployment(servers, server_serial_number, os_type, kickstart_files):
    """Primary function that triggers OS deployment for each of the server hardware. 
    This function handles end to end operations and triggers functions necessary for OS deployment. 
    
    Arguments:
        servers {list}               -- server details as per the input_file/server_details.json
        server_serial_number         -- server serial number on which OS deployment is to be initated
        os_type {string}             -- type of the operating system
        kickstart_files {dictionary} -- dictionary mapping for kickstart files with respective roles
    
    Returns:
        Boolean -- returns True on successful OS deployment, returns False on failure of OS deployment
    """
    os_deployment_semaphores.acquire()

    server_roles = ["master", "worker"]
    for server in servers:
        if server['Server_serial_number'] == server_serial_number:
            break

    # Create a REDFISH object
    redfish_obj = create_redfish_object(server)
    if redfish_obj == False:
        print("Error in creating Redfish object for server {}".format(server_serial_number))
        print("OS deployment failed for server {}".format(server_serial_number))
        return False

    server_model =  get_server_model(redfish_obj)
    if "Gen10" not in server_model:
        print("Failure : Server with serial number {} is not supported for this solution".format(server['Server_serial_number']))
        return

    if os_type == "rhel7":
        if(server["Server_Role"] in server_roles):
            kickstart_filename = os_type + "_" + server["Server_Role"]
            custom_iso_created = create_custom_iso_image_redhat(os_type, server, config, kickstart_files[kickstart_filename])
        else:
            print("Unsupported server role")
            return False

    elif os_type == "esxi67":
        custom_iso_created = create_custom_iso_image_esxi(os_type, server, config, kickstart_files[os_type])

    else:
        print("Unsupported OS type. Supported OS types are rhel7 and esxi67")
        return False

    print("Starting OS installation for server: " + server_serial_number)

    custom_image_path = get_custom_image_path(config["HTTP_file_path"], os_type, server_serial_number)
    custom_image_url = get_custom_image_url(config["HTTP_server_base_url"], os_type, server_serial_number)
    custom_kickstart_path = get_custom_kickstart_path(config["HTTP_file_path"], os_type, server_serial_number)

    custom_iso_present = is_iso_file_present(custom_image_url)
    if(custom_iso_created and custom_iso_present):
        # Unmount the previous ISO and mount the custom ISO image
        unmount_virtual_media_iso(redfish_obj)
        mount_virtual_media_iso(redfish_obj, custom_image_url, True)
        power_staus = get_post_state(redfish_obj)
        if power_staus == "PowerOff":
            change_server_power_state(redfish_obj, server_serial_number, power_state="On")
        else:
            change_server_power_state(redfish_obj, server_serial_number, power_state="ForceRestart")

        is_complete = wait_for_os_deployment_to_complete(redfish_obj, server['Server_serial_number'])

        #umount ISO once OS deployment is complete
        unmount_virtual_media_iso(redfish_obj)
        
        # Delete custom ISO image and Kickstart files
        print("Deleting custom image for server {}".format(server_serial_number))
        delete_file(custom_image_path)    
        print("Deleting custom kickstart file for server {}".format(server_serial_number))            
        delete_file(custom_kickstart_path)

        # Logout of iLO 
        print("Logging out of iLO for server {}".format(server_serial_number))
        redfish_obj.redfish_client.logout()
        os_deployment_semaphores.release()

        if is_complete:
            print("OS installation is complete for server {}".format(server_serial_number))
            return True
        else:
            print("OS installation failed on server {}".format(server_serial_number))
            return False
    else:
        print("Error in fetching custom image for server {}".format(server_serial_number))
        return False


def validate_prerequisites(os_type, http_url, image_name, kickstart_files, worker_status):
    """This is the function to vaidate prerequisites essential for the OS deployment such as base kickstart file and base ISO image
    
    Arguments:
        os_type {string}             -- Type of linux operating system (currently supports RHEL)
        http_url {string}            -- HTTP base URL of the installer machine
        image_name {string}          -- Name of the OS image
        kickstart_files {dictionary} -- Dictionary maping kickstart files with server roles
        worker_status {bool}         -- Status of the worker node. True if worker node is present, False if worker node is absent   
    
    Returns:
        boolean -- Returns True if all the prerequisites are met. Returns False if any of the prerequisite is missing
    """
    if(os_type == "rhel7"):
        role = "master"
        kickstart_filename = os_type + "_" + role
        if not os.path.isfile(kickstart_files[kickstart_filename]):
            print("Base kickstart file is not present for {} installation".format(os_type))
            return False

        if (worker_status == True): 
            role = "worker"
            kickstart_filename = os_type + "_" + role
            if not os.path.isfile(kickstart_files[kickstart_filename]):
                print("Base kickstart file for worker nodes is not present for {} installation".format(os_type))
                return False

    elif(os_type == "esxi67"):
        if not os.path.isfile(kickstart_files[os_type]):
            print("Base kickstart file is not present for {} installation".format(os_type))
            return False
    else:
        print("Unsupported OS type. Supported OS Types are rhel7, ESXI67")
        return False

    iso_image_state = is_iso_image(image_name)
    if not iso_image_state:
        print("File type {} is not supported for iso image. Please provide ISO file for the ISO image name along with the extension".format(image_name))    

    image_url = http_url + image_name
    file_presence = is_iso_file_present(image_url)
    if not file_presence:
        print("ISO file is not present in the given http location. Please check the http location and then try again.")
        return False

    return True

if __name__ == '__main__':
    
    # Opening input files
    kickstart_files = {
    "rhel7_master"             :   "kickstart_files/ks_rhel7.cfg",
    "rhel7_worker"             :   "kickstart_files/ks_rhel7_worker.cfg",
    "esxi67"                   :   "kickstart_files/ks_esxi67.cfg"
    }

    config_path = 'input_files/config.json'
    servers_path = 'input_files/server_details.json'

    # Chckign if input files exist or not
    if os.path.exists(config_path) and os.path.exists(servers_path):
        # Enter decryption key to decrypt input files
        key = getpass("Enter Key:")
        try:
            config_vault = VaultLib([(DEFAULT_VAULT_ID_MATCH, VaultSecret(key.encode('utf-8')))])
            # Opening config file 
            configuration_file = open(config_path)
            # Decrypting config.json file
            config = json.loads(config_vault.decrypt(configuration_file.read()))
            server_vault = VaultLib([(DEFAULT_VAULT_ID_MATCH, VaultSecret(key.encode('utf-8')))])
            # Opening server details file 
            server_input_file = open(servers_path)
            # Decrypting server_details.json file
            servers = json.loads(server_vault.decrypt(server_input_file.read()))

        except Exception as e:
            print("Error occured while opening input encrypted configuration file {} ".format(e))
    else:
        print("Input files not found.")
        exit(0)

    os_orchestrator(servers, config, kickstart_files)

    #Closing open file
    configuration_file.close()
    server_input_file.close()


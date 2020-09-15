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

from subprocess import CalledProcessError
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

from ilo_operations import *
from image_operations import *

def create_custom_iso_image_sles(os_type, server, config, kickstart_file):
    """This is the primary function is to create a custom SLES ISO image for each of the server. 
    It triggers the functions to create custom kickstart files, mounts the sles OS image to the installer machine, 
    copies the contents, updates the custom autoyast file location and rebundles it into a custom sles image for each of the server. 
    
    Arguments:
        os_type {string}                      -- Type of operating system (currently supports sles15)
        server {string}                       -- Custom configurations for a particular server as per the input_files/server_details.json
        config {string}                       -- web server and OS details as per the input_files/config.json
        kickstart_file {string}               -- Path of the base kickstart file for SLES operating system

    Returns:
        Boolean -- returns True upon successful creation of custom os image, return False on failure of creation of custom os image
    """
    try:
        if os_type == "sles15":
            sles_iso_filename = config["OS_image_name"]
            if not os.path.isfile(kickstart_file):
                print("AutoYaST file is not present for sles installation")
                return False   	
        else:
            print("Installation OS type {} is not supported".format(os_type))
            return False
        destination_folder = config["HTTP_file_path"]

        print("Creating modified installation file for sles Installation")
        image_url = config["HTTP_server_base_url"] + sles_iso_filename
        file_presence = is_iso_file_present(image_url)
        if not file_presence:
            print("ISO file is not present in the given http location. Please check the http location and then try again.")
            return False

        val = is_iso_image(sles_iso_filename)
        if val:
            if os_type == "sles15":
                base_iso_image_path = config["HTTP_file_path"]
                filepath = base_iso_image_path + sles_iso_filename
                server_serial_number = server["Server_serial_number"]

                temppath = "/tmp/" + "slesmount_" + server_serial_number + "/"
                mount_path = "/tmp/" + "slesorig_" + server_serial_number

                autoyast_filepath = temppath + "autoinst.xml"

                mount_proc_id = mount_iso_image(filepath, mount_path)
                if mount_proc_id == 0:
                    print("Successfully mounted the image {}".format(sles_iso_filename))
                else:
                    print("Attempting to unmount the previously mounted image")
                    umount_id = unmount_iso_image(mount_path)
                    mount_proc_id = mount_iso_image(filepath, mount_path)
                    if mount_proc_id == 0:
                        print("Successfully unmounted the previously mounted image")                
                    else:
                        print("Failed to mount the image {}".format(sles_iso_filename))
                        return False

                copy_iso_contents(mount_path, temppath)
                autoyast_status  = create_autoyast_file_for_sles(autoyast_filepath, kickstart_file, server)

                if(autoyast_status and os.path.isfile(autoyast_filepath)):
                    update_ks_file_location_sles_iso_efi(temppath + "EFI/BOOT/", server_serial_number, config["HTTP_server_base_url"], os_type)
                    update_ks_file_location_sles_iso_legacy(temppath + "boot/x86_64/loader/", server_serial_number, config["HTTP_server_base_url"], os_type)
                    
                    destination_filename = get_custom_image_name(os_type, server_serial_number) 
                    
                    recreate_iso_proc_id = rebuild_iso_sles_image(temppath, destination_folder, destination_filename)
                    if recreate_iso_proc_id.returncode == 0:
                        print("Successfully re-created the iso image for server {} after modifying the content".format(server_serial_number))
                        status = True
                    else:
                        print("Error in recreating the iso image for server {} after modifying the content".format(server_serial_number))
                        status = False
                                    
                    umount_proc_id = unmount_iso_image(mount_path)
                    if umount_proc_id == 0:
                        print("Successfully unmounted the iso image")
                    else:
                        print("Error in unmounting the iso image")                

                    delete_temp_folder(temppath)
                    return status
                else:
                    print("Error in fetching custom kickstart file {}".format(kickstart_file))
                    return status
        else:
            print("File type is not supported")
            return False
        return True
    except IOError as ioer:
        print("I/O error occurred while creating custom kickstart file {}".format(ioer))
        return False
    except Exception as er:
        print("Error occurred while creating custom SLES ISO image {}".format(er))
        return False

def create_autoyast_file_for_sles(filepath, autoyast_file, server_data):
    """This function is to create custom kickstart file for Red Hat Enterprise Linux nodes
    
    Arguments:
        filepath {string}        -- custom kickstart file path
        kickstart_file {string}  -- base kickstart file path
        server_data {dictionary} -- Custom configurations for a particular server as per the input_files/server_details.json
    """
    try:
        with open(filepath, "w") as file_write:
            with open(autoyast_file, 'r') as ayfile:
                autoyast_file_contents_for_sles = ayfile.read()
            file_write.write(autoyast_file_contents_for_sles.format(server = server_data))
        file_write.close()
        print("Successfully created kickstart file for server {} ".format(server_data["Server_serial_number"]) )
        return True
    except IOError as ioer:
        print("I/O error occurred while creating custom kickstart file {}".format(ioer))
        return False
    except Exception as er:
        print("Error occurred in creating custom kickstart file {}".format(er))
        return False

def update_ks_file_location_sles_iso_efi(temppath, server_serial_number, http_url, os_type):
    """This function is to update the autoyast control file location in the /EFI/BOOT/grub.cfg file within the sles OS ISO file.
    
    Arguments:
        temppath {string}             -- Path to the custom ISO image file
        server_serial_number {string} -- server serial number
        http_url {string}             -- HTTP server base URL
        os_type {string}              -- Type of operating system (currently supports sles15)        
    """
    boot_filename = temppath + "grub.cfg"
    new_data = ""
    try:
        with open(boot_filename, "r") as file_read:
            for line in file_read.readlines():
                if "linuxefi" in line:
                    line = line.replace("linuxefi /boot/x86_64/loader/linux", "linuxefi /boot/x86_64/loader/linux autoyast=default")
                if "timeout" in line:
                    line = line.replace("60", "6")
                new_data = new_data + line
        file_read.close()
        inst_mode = "instmode=cd\n"
        new_data = inst_mode + new_data
        with open(boot_filename, "w") as file_write:
            file_write.write(new_data)
        file_write.close()
    except IOError as ioer:
        print("I/O error occurred while modifying the iso img file {}".format(ioer))
    except Exception as er:
        print("Error occurred in modifying the image {}".format(er))


def update_ks_file_location_sles_iso_legacy(temppath, server_serial_number, http_url, os_type):
    """This function is to update the autoyast control file location in the /isolinux/isolinux.cfg file within the sles OS ISO file.
    
    Arguments:
        temppath {string}             -- Path to the custom ISO image file
        server_serial_number {string} -- Server serial number
        http_url {string}             -- HTTP server base URL
        os_type {string}              -- Type of the OS
    """
    boot_filename = temppath + "isolinux.cfg"
    new_data = ""
    try:
        with open(boot_filename, "r") as file_read:
            for line in file_read.readlines():
                if "initrd=initrd" in line:
                    line = line.replace("append initrd=initrd", "append initrd=initrd autoyast=default")
                if "default harddisk" in line:
                    line = line.replace("default harddisk", "default linux")
                new_data = new_data + line
        file_read.close()
        inst_mode = "instmode=cd\n"
        new_data = inst_mode + new_data
        with open(boot_filename, "w") as file_write:
            file_write.write(new_data)
        file_write.close()
    except IOError as ioer:
        print("I/O error occurred while modifying the iso img file: {}".format(ioer))
    except Exception as er:
        print("Error occurred in modifying the image {}".format(er))


def rebuild_iso_sles_image(temppath, custom_iso_path, iso_filename):
    """
    This function is to rebuild an ISO image after customization

    Arguments:
        temppath {string}           -- Path to the custom ISO image contents which needs to rebuilt
        custom_iso_path {string}    -- Path to store the resultant ISO image
        iso_filename {string}       -- Name for the resultant ISO image
    """
    try:
        create_dir_exist(custom_iso_path)

        custom_iso_name = custom_iso_path + iso_filename
        args = ["mksusecd", "--create", custom_iso_name, temppath]
        proc = execute_linux_command(args)
        return proc
    except CalledProcessError as subprcer:
        print("Subprocess error occurred while rebuilding custom iso image {}".format(subprcer))
    except Exception as er:
        print("Error while rebuilding custom iso image {}".format(er))


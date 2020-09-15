# (C) Copyright 2020 Hewlett Packard Enterprise Development LP
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

from ansible.constants import DEFAULT_VAULT_ID_MATCH
from ansible.parsing.vault import VaultLib
from ansible.parsing.vault import VaultSecret
from getpass import getpass

from time import sleep
import requests
import json
import os

from pprint import pprint
from hpOneView.oneview_client import OneViewClient
from hpOneView.exceptions import HPOneViewException

def validate_inputs(security_configurations):
    """This function validated the input configurations to secure HPE Synergy Composer powered by HPE OneView
    Args:
        security_configurations (dictionary): It consists of the input configurations for securing HPE Synergy Composer 
    Returns:
        Bool: Returns True if the inputs are as expected, return False if the inputs are not as expected
    """
    try:
        security_controls = security_configurations.keys()
        for security_control in security_controls:
            # Checks if the input configurations belong acceptable values
            if ((security_control != "CryptographicMode") and (security_configurations[security_control] not in [True, False])):
                print("Invalid input for {}. Permitted inputs for the service is true or false".format(security_control))
                return False
            
            if ((security_control == "CryptographicMode") and 
                        (security_configurations[security_control] not in ["Legacy", "FIPS", "CNSA"])):
                print("Invalid input for {}. Permitted inputs for the service is Legacy, FIPS, CNSA".format(security_control))
                return False

        print("Composer security input configurations are successfully validated.")
        return True

    except Exception as exception:
        print("Failure: Invalid inputs. Please ensure the inputs are provided in the right format. {}".format(exception))
        return False  


def oneview_object(config):
    """This function generates HPE OneView Object
    Args:
        config (dictionary): It consists of HPE OneView IP address, credentials of user with infrastructure administrative priviliges and X API version
    Returns:
        Bool: Returns True upon successful creation of OneView object, return False on failure to create a OneView object
    """
    try:
        oneview_client = OneViewClient(config)
        print("OneView object successfully created")

    except Exception as exception:
        print("Failure: Unable to create OneView object with the given IP address and credentials \n{}".format(exception))
        return False
    
    return oneview_client


def get_session_id(oneview_client):
    """This function generates a Session ID which is further used to make the REST API calls to HPE OneView
    Args:
        oneview_client (object): HPE OneView object generated previously in the oneview_object function
    Returns:
        Session ID
    """
    try:
        session_id = oneview_client.connection.get_session_id()           
        # print("session ID: " + session_id)

    except Exception as exception:
        print("Failure: Unable to get the session ID for the session \n{}".format(exception))
        return False    
    
    return session_id


def get_header(oneview_client, oneview_x_api_version):
    """This function generates header which is further used to make the REST API calls to HPE OneView
    Args:
        oneview_client (object): HPE OneView object generated previously in the oneview_object function
        oneview_x_api_version (string): HPE OneView's X API version, for OneView 5.2, X API version is 1600
    Returns:
        Header / Bool: Returns header upon successful creation of header, return False on failure to create a header
    """
    try:
        session_id = get_session_id(oneview_client)
        headers = {
        "auth" : session_id,
        'X-API-Version' : oneview_x_api_version,
        'Content-Type': 'application/json'
        }
        print("OneView API request headers successfully generated")
        print("")

    except Exception as exception:
        print("Failure: Unable to generate the header for API requests \n{}".format(exception))
        return False    
    
    return headers


def get_url(oneview_client, end_points, key):
    """This function generates URL for the given HPE OneView REST API
    Args:
        oneview_client (object): HPE OneView object generated previously in the oneview_object function
        end_points (dictionary): Dictionary of HPE OneView security control and thier corresponding HPE OneView API endpoint
        key (string): HPE OneView security control
    Returns:
        URL / Bool: Returns URL upon successful creation of header, return False on failure to create a header
    """
    try: 
        if key not in end_points.keys():
            print("URL could not be found for the given service {}.".format(key))
            return False
        else:
            url = oneview_client.connection.make_url(end_points[key])
            return url

    except Exception as exception:
        print("Failure: Unable to generate the URL for the given service {} \n{}".format(key, exception))
        return False  


def get_data(oneview_client, url, headers, security_control):
    """This function is used to make the GET requests to HPE OneView
    Args:
        oneview_client (object): HPE OneView object generated previously in the oneview_object function
        url (string): URL to make HPE OneView REST API calls
        headers (dictionary): Headers to make HPE OneView REST API calls
        security_control (string): HPE Syergy OneView Security control
    Returns:
        Body / Bool: Returns body upon successful GET request call, return False on failure to make the GET call
    """
    try:
        response,body = oneview_client.connection.do_http('get', url, "", headers)
        if response.code in [200, 201, 202]:
            # Print("Successfully retrieved configurations of {}".format(security_control))
            # Actual data is printed at the receiving end.
            pass
        elif (security_control == "ServiceConsoleAccess"):
            # GET operation not supported for this control. Hence ignoring
            pass
        else:
            print("Failed: Unable to retrieve configurations of {}.\n{}".format(security_control, body))
        return body
    except Exception as exception:
        print("Failure: Unable to get the configuration for the given service {}".format(exception))
        return False      


def set_data(oneview_client, url, headers, url_body, security_control):
    """This function is used to make the PUT requests to HPE OneView
    Args:
        oneview_client (object): HPE OneView object generated previously in the oneview_object function
        url (string): URL to make HPE OneView REST API calls
        headers (dictionary): Headers to make HPE OneView REST API calls
        url_body (dictionary): PUT request body for the REST API calls
        security_control (string): HPE Syergy OneView Security control
    Returns:
        Bool: Returns False on failure to make the update / PUT call
    """

    try:
        response,body = oneview_client.connection.do_http('put', url, json.dumps(url_body), headers)
        if response.code in [200, 201, 202]:
            print("Successfully updated {} as per input configurations\n".format(security_control))
        else:
            print("Failed: Unable to update {}.\n{}\n".format(security_control, body))

    except Exception as exception:
        print("Failure: Unable to update the configuration for the given service {}".format(exception))
        return False  


def print_security_config(current_state):
    """This function prints the current state of the security configurations of HPE Synergy Composer
    Args:
        current_state (dictionary): It consists of the current state of the security configurations of HPE Synergy Composer
    Returns:
        Boolean: Returns False if an exception has occurred
    """
    security_controls = current_state.keys()
    print_data = {}
    try:
        for security_control in security_controls:   
            if (security_control == "allowSshAccess"):
                print_data["allowSshAccess"] = current_state[security_control]["allowSshAccess"]

            elif (security_control == "GlobalSettings"):
                print_data["technicianEnabled"] = current_state[security_control]["technicianEnabled"]
                print_data["enforceComplexPasswordEnabled"] = current_state[security_control]["enforceComplexPasswordEnabled"]

            elif (security_control == "CryptographicMode"):
                print_data["Cryptographic Mode"] = current_state[security_control]["modeName"]

            elif (security_control == "ServiceConsoleAccess"):
                # GET operation not supported, hence ignoring for this option.
                pass
            else:
                print("Warning: Unexpected Key {} found, hence ignoring".format(security_control))

        pprint(print_data)

    except Exception as exception:
        print("Failure: Unable to print the current state {}".format(exception))
        return False

def security_orchestrator(oneview_client, oneview_header, security_configurations, api_endpoints):
    """This function is the orchestrator which orchestrates the sequence of functions to update the necessary security controls in HPE Synergy Composer
    Args:
        oneview_client (object): HPE OneView object generated previously in the oneview_object function
        oneview_header (dictionary): Headers to make HPE OneView REST API calls
        security_configurations (dictionary): It consists of the input configurations for securing HPE Synergy Composer 
        api_endpoints (dictionary): Dictionary of HPE OneView security control and thier corresponding HPE OneView API endpoint
    """

    try:
        urls = {}
        current_state = {}
        
        # Retrieve security controls
        security_controls = api_endpoints.keys()

        # Retrieving current state for each of the security control
        for control in security_controls:
            urls[control] = get_url(oneview_client, api_endpoints, control)
            current_state[control] = get_data(oneview_client, urls[control], oneview_header, control) 

        # Print current state
        print("Composer Security State before applying the input configurations")
        print_security_config(current_state)
        print("")

        # Print input configurations
        print("Composer Security State to be updated as per the input configuration")
        pprint(security_configurations)
        print("")

        # Ensuring changes are notified and accepted before proceeding further
        input("Press enter to confirm the changes. By pressing enter you confirm that you understand the implications and agree for the state to be updated: ")
        print("")

        # Performing updates to each of the security control as per the input configuration
        for control in security_controls:
            url = urls[control]

            if (control == "allowSshAccess"):
                if (current_state[control]["allowSshAccess"] == security_configurations[control]):
                    print("The current state of {} is the desired state as per the composer security input configurations\n".format(control))
                else:
                    current_state[control]["allowSshAccess"] = security_configurations[control]
                    print("Updating the state of {} to {} per the composer security input configurations".format(control, security_configurations[control]))
                    set_data(oneview_client, url, oneview_header, current_state[control], control)

            elif (control == "GlobalSettings"):
                if (current_state[control]["technicianEnabled"] == security_configurations["technicianEnabled"]):
                    print("The current state of {} - {} is the desired state as per the composer security input configurations".format(control, "technicianEnabled"))
                else:
                    print("Updating the state of {} - {} to {} per the composer security input configurations".format(control, "Hardware Setup Access", security_configurations["technicianEnabled"]))
                    current_state[control]["technicianEnabled"] = security_configurations["technicianEnabled"]

                if (current_state[control]["enforceComplexPasswordEnabled"] == security_configurations["enforceComplexPasswordEnabled"]):
                    print("The current state of {} - {} is the desired state as per the composer security input configurations".format(control, "Enforce Complex Password"))
                else:
                    print("Updating the state of {} - {} to {} per the composer security input configurations".format(control, "Enforce Complex Password", security_configurations["enforceComplexPasswordEnabled"]))
                    current_state[control]["enforceComplexPasswordEnabled"] = security_configurations["enforceComplexPasswordEnabled"]                             
                
                set_data(oneview_client, url, oneview_header, current_state[control], control)
                            
            elif (control == "ServiceConsoleAccess"):
                # GET operation not supported, hence ignoring for this option.
                set_data(oneview_client, url, oneview_header, security_configurations[control], control)

            elif (control == "CryptographicMode"):
                if (current_state[control]["modeName"].lower() == security_configurations[control].lower()):
                    print("The current state of {} is the desired state as per the composer security input configurations".format(control))
                else:
                    print("Updating the state of {} to {} per the composer security input configurations".format(control, security_configurations[control]))
                    print("This operation requires a reboot and approximately takes around 40 mins once the request is initiated.")
                    input("Press enter to confirm the changes. By pressing enter you confirm that you understand the implications and agree for the state to be updated: ")
                    print("")
                    cyrptographic_mode_body = {"modeName": security_configurations[control], "currentMode": True}
                    set_data(oneview_client, url, oneview_header, cyrptographic_mode_body, control) 

            else:
                print("Warning: Unexpected Key {} found, hence ignoring".format(control))
        
        updated_state = {}

        # Retrieving current state after the update
        for control in security_controls:
            urls[control] = get_url(oneview_client, api_endpoints, control)
            updated_state[control] = get_data(oneview_client, urls[control], oneview_header, control) 
        
        # Print the updated state
        print("")
        print("Composer Security State after applying the input configurations")
        print_security_config(updated_state)

    except Exception as exception:
        print("Failure: Unable to update the configuration for the given service {}".format(exception))
        return False  

if __name__ == '__main__':

    oneview_credentials_file_path = 'input_files/config.json'
    composer_security_configuration_file_path = 'input_files/composer_security_config.json'

    # Checking if input files exist or not
    if not os.path.exists(oneview_credentials_file_path):
        print("Failed: Input file with OneView credentials is not found. Please ensure the file is available within the input_files directory")
        exit(0)

    if not os.path.exists(composer_security_configuration_file_path):
        print("Failed: Input file with Composer security configurations is not found. Please ensure the file is available within the input_files directory")
        exit(0)

    try:
        # Reading Composer Security Configurations from the input file
        composer_security_configuration_file = open(composer_security_configuration_file_path, encoding='utf-8') 
        security_configurations = json.load(composer_security_configuration_file) 

        # oneview_credentials_file = open(oneview_credentials_file_path, encoding='utf-8') 
        # oneview_config = json.load(oneview_credentials_file) 

        # Reading OneView configurations from the input file
        key = getpass("Enter the key to decrypt OneView credentials file : ")
        oneview_credentials_key = VaultLib([(DEFAULT_VAULT_ID_MATCH, VaultSecret(key.encode('utf-8')))])
        oneview_credentials_file = open(oneview_credentials_file_path)
        oneview_config = json.loads(oneview_credentials_key.decrypt(oneview_credentials_file.read()))

        # Validating input Composer Security Configurations 
        inputs_state = validate_inputs(security_configurations)
        if not inputs_state:
            print("Failed: Input format is invalid.")
            exit(0)

        # Defining HPE OneView API endpoints
        api_endpoints = {
                "allowSshAccess": "/rest/appliance/ssh-access",
                "GlobalSettings": "/rest/logindomains/global-settings",
                "ServiceConsoleAccess": "/rest/appliance/settings/enableServiceAccess",
                "CryptographicMode":  "/rest/security-standards/modes/current-mode"
            }

        # Using username/password for authentication.
        config = {
                    "ip": oneview_config["oneview_ip"],
                    "credentials": {
                        "userName": oneview_config["oneview_username"],
                        "password": oneview_config["oneview_password"]
                    }
                }

        # Creating and validating the creation of HPE OneView client
        oneview_client = oneview_object(config)
        if not oneview_client:
            exit(0)
        oneview_headers = get_header(oneview_client, oneview_config["oneview_x_api_version"])
        if not oneview_headers:
            exit(0)
            
        # Triggering the configuration of composer security featues as per the input configurations
        security_orchestrator(oneview_client, oneview_headers, security_configurations, api_endpoints)

    except Exception as e:
        print("Unexpected error occurred while executing the composer security scripts {} ".format(e))

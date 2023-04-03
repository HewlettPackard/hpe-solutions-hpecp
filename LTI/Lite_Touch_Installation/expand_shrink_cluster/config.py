###
##### Copyright 2021 Hewlett Packard Enterprise Development LP
#####
##### Licensed under the Apache License, Version 2.0 (the "License");
##### You may not use this file except in compliance with the License.
##### You may obtain a copy of the License at
#####
##### http://www.apache.org/licenses/LICENSE-2.0
#####
##### Unless required by applicable law or agreed to in writing, software
##### distributed under the License is distributed on an "AS IS" BASIS,
##### WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
##### See the License for the specific language governing permissions and
##### limitations under the License.
#######
##


import json
from ansible.constants import DEFAULT_VAULT_ID_MATCH
from ansible.parsing.vault import VaultLib
from ansible.parsing.vault import VaultSecret
from getpass import getpass

class Config(object):
    """
    This Config class is a configuration file which will converts user input values 
    into programmatical variables usage.
    """
    def __init__(self):
        """
        This constructor function provides variables from the input files.
        """
        # Retrieving secret variables from config_secrets.json file
        encrypted_file = open("config_secrets.json")
        key = getpass("Enter key for encrypted variables:")

        # Configuring key and decrypting encrypted variables
        config_vault = VaultLib([(DEFAULT_VAULT_ID_MATCH, VaultSecret(key.encode('utf-8')))])
        config = json.loads(config_vault.decrypt(encrypted_file.read()))

        # Closing opened encrypted file 
        encrypted_file.close()

        #Retrieving variables from user_input.json file
        with open ("user_input.json", "r") as json_fp:
            input_json_data = json.load(json_fp)

        self.username = config["CONSOLE_USERNAME"]
        self.password = config["CONSOLE_PASSWORD"]

        self.controller_IP = input_json_data["CONTROLLER_IP"]
        self.cluster_name = input_json_data["CLUSTER_NAME"]
        self.expand_shrink = input_json_data["EXPAND_OR_SHRINK"]
        self.host_ips = input_json_data["HOST_IP's"]
        self.host_role = input_json_data["HOST_ROLE"]
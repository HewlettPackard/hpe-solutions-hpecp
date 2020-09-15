###
##### Copyright 2020 Hewlett Packard Enterprise Development LP
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

class VaultJSONParser(object):

    def __init__(self, json_file, vault_key):
        try:
            self.json_file = json_file
            self.data = {}
            self.key = vault_key
        except:
            print("Unexpected error:", sys.exc_info()[0])
            raise
    
    def parse_dict_or_list(self, key, d):
        """
        This function parses the nested dictionary or list for the required 
        values
        """
        try:
            if isinstance(d, list):
                for sub_dict in d:
                    if key in sub_dict:
                        return sub_dict[key]
                return None
            else:
                if key in d:
                    return d[key]
                else:
                    None
        except:
            print("Unexpected error:", sys.exc_info()[0])
            raise

    def make_query(self, query_list):
        """
        This function queries the nested dictionary for the required key(s)
        """
        try:
            working_level = self.data
            for item in query_list:
                working_level = self.parse_dict_or_list(item, working_level)
                if working_level == None:
                    return None
        except:
            print("Unexpected error:", sys.exc_info()[0])
            raise
        return working_level

    def load_json(self):
        """
        This function loads the json file
        """
        try:
            # Retriving secret variables from config_secrets.json file
            encrypted_file = open(self.json_file)
            vault_pass = self.key
            # Configuring key and decrypting encrypted variables
            config_vault = VaultLib([(DEFAULT_VAULT_ID_MATCH, VaultSecret(vault_pass.encode('utf-8')))])
            self.data = json.loads(config_vault.decrypt(encrypted_file.read()))

            # Closing opened encrypted file 
            encrypted_file.close() 
        except:
            print("Unexpected error:", sys.exc_info()[0])
            raise
    
    def all_data(self):
        """
        This function returns all the data in the json 
        """
        try:
            self.load_json()
        except:
            print("Unexpected error:", sys.exc_info()[0])
            raise
        return self.data

    def query(self, query_string):
        """
        This function finds the value of the json key by loading and reading 
        the json file
        """
        try:
            self.load_json()
            result = self.make_query(query_string.split('/'))
        except:
            print("Unexpected error:", sys.exc_info()[0])
            raise
        return result

    def dict_query(self, query_string):
        """
        This function finds the value of the json key from the dictionary object
        """
        try:
            self.data = self.json_file
            result = self.make_query(query_string.split('/'))
        except:
            print("Unexpected error:", sys.exc_info()[0])
            raise
        return result

class JSONParser(object):

    def __init__(self, json_file):
        try:
            self.json_file = json_file
            self.data = {}
        except:
            print("Unexpected error:", sys.exc_info()[0])
            raise

    def parse_dict_or_list(self, key, d):
        """
        This function parses the nested dictionary or list for the required 
        values
        """
        try:
            if isinstance(d, list):
                for sub_dict in d:
                    if key in sub_dict:
                        return sub_dict[key]
                return None
            else:
                if key in d:
                    return d[key]
                else:
                    None
        except:
            print("Unexpected error:", sys.exc_info()[0])
            raise

    def make_query(self, query_list):
        """
        This function queries the nested dictionary for the required key(s)
        """
        try:
            working_level = self.data
            for item in query_list:
                working_level = self.parse_dict_or_list(item, working_level)
                if working_level == None:
                    return None
        except:
            print("Unexpected error:", sys.exc_info()[0])
            raise
        return working_level

    def load_json(self):
        """
        This function loads the json file
        """
        try:
            with open(self.json_file) as data_file:
                self.data = json.load(data_file)
        except:
            print("Unexpected error:", sys.exc_info()[0])
            raise
    
    def query(self, query_string):
        """
        This function finds the value of the json key by loading and reading 
        the json file
        """
        try:
            self.load_json()
            result = self.make_query(query_string.split('/'))
        except:
            print("Unexpected error:", sys.exc_info()[0])
            raise
        return result
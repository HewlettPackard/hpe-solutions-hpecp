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


#!/usr/bin/env python
"""
This script expands or shrinks an existing HPECP cluster as per the user requirements.
"""
import json
import requests
import config
import sys
import time

def get_details(uri, header):
    """
    Function to make GET API calls
    Returns:
    GET call body is returned if call is successfull
    Else returns the status code of the error
    """
    try:
        get_response = requests.get(uri, verify=False, headers=header)
        if get_response.status_code == 200:
            get_response = json.loads(get_response.text)
            return get_response

        elif get_response.status_code != 200:
            print("The status code is: " + str(get_response.status_code))
            print("Could Not Make the Get Call, Please Check Details, Exiting Program")
            sys.exit(1)
    except requests.ConnectionError as req_err:
        print("get_details: The exception '{}' occured during connection".format(req_err))
        sys.exit(1)
    except Exception as run_err:
        print("get_details: The exception '{}' has occured".format(run_err))
        sys.exit(1)

def get_cluster_id(session_ID, var_config):
    try:
        header = {
                "X-BDS-SESSION" : session_ID
            }        
        uri = "http://" + var_config.controller_IP + ":8080/api/v2/k8scluster"
        cluster_details = get_details(uri, header)
        flag = 1
        for cluster in cluster_details['_embedded']['k8sclusters']:
            if cluster['label']['name'] == var_config.cluster_name:
                flag = 0
                cluster_id = cluster['_links']['self']['href']
        if flag != 0:
            print("Could not find the required cluster, please provide te right cluster name in the input file.")
            sys.exit(1)
        #print(cluster_id)
        return(cluster_id)
    except Exception as run_err:
        print("get_cluster_id(): The exception '{}' has occured while getting cluster ID".format(run_err))  
        sys.exit(1)  


def get_host_uri(session_ID, var_config):
    try:
        header = {
                "X-BDS-SESSION" : session_ID
            }        
        uri = "http://" + var_config.controller_IP + ":8080/api/v2/worker/k8shost"
        host_details = get_details(uri, header)
        host_uri=[]
        status=[]
        for ip in var_config.host_ips:
            for host in host_details['_embedded']['k8shosts']:
                if host['ipaddr'] == ip:
                    host_uri.append(host['_links']['self']['href'])
                    status.append(host['status'])
        if len(host_uri) == 0:
            print("Could not Retrieve required host information: Check input host IP address.")
            sys.exit(1)
        flag =0
        for id,item in enumerate(status):
            if item != 'ready' and var_config.expand_shrink =="expand":
                flag=1
                print(" The host " +str(id+1) + " is not in the required 'ready' state to be added, please wait for host to be ready or change the host")
            if item != 'configured' and var_config.expand_shrink =="shrink":
                flag=1
                print(" The host " +str(id+1) + " is not in the required 'confifured' state to be removed, please ensure host is a part of the cluster or change the host")
        if flag == 1:
            sys.exit(1)
        #print(host_uri)
        return(host_uri)
    except Exception as run_err:
        print("get_host_uri(): The exception '{}' has occured while getting host URI".format(run_err))   
        sys.exit(1) 


def get_session(var_config):
    """
    Get session ID for use in subsequent API calls

    Returns:
    Session-ID
    """
    try:
        header = {
                "Content-Type" : "application/json"
            }        
        uri = "http://" + var_config.controller_IP + ":8080/api/v1/login"
        payload = {
              "name" : var_config.username,
              "password": var_config.password
        }

        response = requests.post(uri, json=payload, verify=False, headers=header)
        if response.status_code == 201:
            print("Successfully Logged In")
            return(response.headers['Location'])
        elif response.status_code != 201:
            print("Could Not Login, Please Check Credentials, Exiting Program")
            sys.exit(1)
    except Exception as run_err:
        print("get_session(): The exception '{}' has occured while getting session ID".format(run_err)) 
        print("Could Not Login, Please Check Controller IP address, Exiting Program")
        sys.exit(1)   

def expand_shrink(session_ID, var_config, host_uri, cluster_id):
    try:
        header = {
                "X-BDS-SESSION" : session_ID
            }        
        uri = "http://" + var_config.controller_IP + ":8080" + cluster_id + "/change_task"
        config = []
        host = {}
        if var_config.expand_shrink == 'expand':
            k8shosts = "add_k8shosts_config"
            for node, role in zip (host_uri, var_config.host_role):
                host["node"] = node
                if role == "master" or "worker":
                    host["role"] = role
                else:
                    print("Enter the right roles for the hosts")
                    sys.exit(1)
                config.append(host)
                host = {}
        elif var_config.expand_shrink == 'shrink':
            k8shosts = "remove_k8shosts"
            for node in host_uri:
                config.append(node)
        else:
            print("Enter right cluster operation in input file")
            sys.exit(1)
        #print(config)
        #print(k8shosts)
        payload = {
            "change_spec": {
                k8shosts: config
            },
            "operation": "reconfigure",
            "reason": ""
        }
        #print(payload)
        response = requests.post(uri, json=payload, verify=False, headers=header)
        #print(response.status_code)

        if response.status_code == 204:
            print("Started cluster operation")
        elif response.status_code != 204:
            print("Could not complete cluster expand/shrink operation")
        uri = "http://" + var_config.controller_IP + ":8080" + cluster_id 
        timeout = 600
        timeout_start = time.time()
        print("Waiting for cluster status to become Ready...")
        while time.time() < timeout_start + timeout:
            cluster_details = get_details(uri, header)
            if cluster_details["status"] =="ready":
                break

    except Exception as run_err:
        print("expand_shrink(): The exception '{}' has occured while expanding/shrinking cluster".format(run_err)) 
        print("Could not complete cluster expand/shrink operation")
        sys.exit(1)  

#main function
def main():
    """
    Main Function
    """
    # Creating a generic object for Config class 
    print("Gathering Input Variables...")
    var_config = config.Config()
    print("\n")

    print("Getting Session ID...")
    session_ID = get_session(var_config)
    print("\n")

    print("Getting required Host URI's...")
    host_uri= get_host_uri(session_ID, var_config)
    print("\n")

    print("Acquiring cluster ID...")
    cluster_id = get_cluster_id(session_ID, var_config)
    print("\n")

    print("Performing cluster modification...")
    expand_shrink(session_ID, var_config, host_uri, cluster_id)
    print("\n")

    print("Cluster has been Modified")


main()

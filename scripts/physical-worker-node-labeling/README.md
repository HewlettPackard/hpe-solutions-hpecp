# Physical Worker Node Labelling in HPE Ezmeral Container Platform 5.1.

### Description

- This repository contains Python scripts to automate the process of fetching the hardware properties from the physical worker nodes and labeling the node with those properties.

- Node labels can be targeted for deployments using node selectors which can be set at a pod level. 

- Nodes can be labelled for the following properties:
  - **Overall Health Status of the node:** If current status of all "BIOS, Fans, Temperature Sensors, Battery, Processor, Memory, Network and Storage" is ok, node health status is "Ok" else "Degraded"

  - **Overall Security Status of the node:** If the current status of the following BIOS configuration (which are important for the security) is as expected then security status of the node is "Ok" else "degraded":
    - "secure boot status (enabled), asset tag (locked), UEFI Shell Script Verification (enabled), UEFI Shell Startup (disabled), Processor AES (enabled)"

  - **Custom labeling:** User defined labels (key, value) is assigned to desired physical worker node.

### Prerequisites
 
 - Ansible engine with Ansible 2.9.x and Python  3.6.x

 - HPE Ezmeral Container Platform 5.1 is up and running. 

 - The HPE Ezmeral Container Platform 5.1 must have physical worker node(s) to use the "Node labeling" functionality.

 - Ensure there is connectivity to the iLO IP's of the physical node servers (ping the iLO's and check if they are reachable, because the script needs to talk to the iLO to retrieve information of the servers)
 
 - The scripts under this repository need to be run from the installer machine with the Python Virtual Environment setup as mentioned in the Installer Machine section of the Deployment Guide.
 
 - Ensure that the "kubectl" tool is available in the path along with the "kubeconfig" file of the cluster in $HOME/.kube/ directory (eg /root/.kube/config)

 - The kubeconfig file can be obtained in two ways:
   - From the HPE Container Platform GUI - > Navigate to the Clusters section -> Download Admin Kubeconfig from the options available on the cluster.
   - Copying the config file from the master node from the $HOME/.kube/ location on to the installer machine.

 - Ensure that the kubeconfig file is named as 'config' and placed in the $HOME/.kube/ location( eg. /root/.kube/config) of the installer machine.

 - Python module "proliantutils" is required
   - "proliantutils" is a set of utility libraries for interfacing and managing various components (like iLO) for HPE Proliant Servers.
	 
   - Use the following command to install proliantutils
    ```
    > pip3 install proliantutils==2.9.2
    ```
  
   - Verify the version of proliantutils
    ```
    > pip3 freeze | grep proliantutils
    ```
     
   - Output:
    ```
	proliantutils==2.9.2
	  ```
 
 - Install the "sushy" python library. In case "sushy" module is already installed, please make sure its version is 3.0.0
   - Use the following command to install sushy module. 
	```
    > pip3 install sushy==3.0.0
    ```
  
   - Verify the version of proliantutils
    ```
    > pip freeze | grep sushy
    ```
     
   - Output:
    ```
	sushy==3.0.0
	```
 **NOTE** 
 Master nodes have kubectl tool and kubeconfig file by default, hence the scripts can also be run from the master nodes after setting up the python environment, installing the required modules and setting up the repositories.


### Input Files
 - The Scripts for HPE Ezmeral Container Platform 5.1 Physical Worker Node labeling are available under BASE_DIR/scripts/physical_worker_node_labeling/

**NOTE** BASE_DIR is defined and set in installer machine section of the deployment guide. 

 - It is mandatory to update all the inputs  files with appropriate values before running the scripts available in this repository.
	
- Input file name: hosts.json
	1. This file is an inventory of host details
	2. This file contains sensitive information like iLO IP and credentials, Worker IP and labels, so data inside this file is encrypted.
	3. To edit this vault file use the following command and provide the default "ansible vault" password ('changeme').
    ```
    > ansible-vault edit hosts.json
    ```
		
	4. For each of the physical worker node that is part of HPE Ezmeral Container Platform cluster the user needs to provide the following information: 
	```	
	 "host_fqdn": "replace_with_physical_worker_node_fqdn",
     "ilo_ip": "replace_with_ilo_ip_of_physical_worker_node",
     "username": "replace_with_ilo_username",
     "password": "replace_with_ilo_password",
     "custom_label_required": "replace_with_No_or_Yes",
     "label_name": "replace_with_desired_label_key",
     "label_val": "replace_with_desired_label_value"
    ```
		
	**Note** Information inside hosts.json is available in a nested JSON format, which means user can add any number of physical worker node by creating the sections as "server1, server2, server3, ...servern" and can also add any number of "custom labels" as "label1, label2, label3 and labeln". Please refer to "hosts.json" to understand this nested JSON structure.
	
- Input file name: config.json
	1. Provide the path information about "kubeconfig" command
	2. **kubeconfig_path:** In this key user need to specify the path of kubeconfig and this path is used by kubectl tool command at runtime
    ```
	> "kubeconfig_path": "replace_with_path_of_hpecp_kubeconfig",
	```
##### How to Use

- From the installer machine, execute the following commands in the python virtual environment as a non root user.
    ```
    > cd BASE_DIR/platform/physical_worker_node_labeling/
    > python physical_node_labeling.py
    ```
	**NOTE** BASE_DIR is defined and set in installer machine section in deployment guide
	
	Next the user will be prompted to enter the ansible vault password/key. This credential is the default "ansible vault" password that is 'changeme'.
    ```
	# Enter key for encrypted variables:
	```

- Output of above command will prompt following options
  ```
	1: Get the physical worker node details that user wishes to configure.

	2: Get current health status of the physical worker node

	3: Get security parameters of the physical worker node

	4: Label the physical worker with health status

	5: Label the physical worker with security status

	6: Custom labels

	7: Display current labels on the node

	8: Quit

  Enter the choice number:
  ```

- If user selects option 1 then they will see all the information available with the hosts.json file

- If user selects option 2, then aggregated health status of the physical worker nodes will be shown to the user as:
  ```
  > {'worker1.hpecp.twentynet.local': 'OK', 'worker2.hpecp.twentynet.local': 'OK'}
  ```

- If user selects option 3, then this playbook will show the aggregated security status of the physical worker node as:
  ```
  > {'worker1.hpecp.twentynet.local': 'OK', 'worker2.hpecp.twentynet.local': 'Degraded'}
  ```

- If user selects option 4, then the physical worker node will be labelled with its respective "aggregated health status" as given by option 2:

- If user selects option 5, then the physical worker node will be labelled with its respective "aggregated security status" as given by option 3:

- If user selects option 6, then the physical worker node will be labelled with the custom labels defined by user in the hosts.json file
  Note: Custom labels will be applied on if user has selected "yes" or "no" in the json file for "custom_labels"

- If user selects option 7, then all the labels like security, health and custom labels along with default labels for each of the physical worker node will be shown.

- If user selects option 8, Node labeling utility will exit.



### Summary

These scripts have been tested on HPE Ezmeral Container Platform 5.1 with the following configuration parameters:

- Worker nodes are running SLESOS as the operating system

- Installer VM OS Version: CentOS 7.6

- Python: 3.6.9 

- proliantutils: 2.9.2

- sushy: 3.0.0
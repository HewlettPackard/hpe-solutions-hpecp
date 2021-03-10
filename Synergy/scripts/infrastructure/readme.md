**# HPE Container Platform on HPE Synergy**

**## Overview**

This folder consists of ansible playbooks developed to automate the tasks such as uploading firmware baseline iso package to OneView, creating server profile template & server profiles in HPE OneView. These playbooks are meant to be used in conjunction with the deployment guide for ***\*HPE Container Platform on HPE Synergy\****

**## Prerequisites**

\- Ansible engine with Ansible 2.9.x and Python 3.6.x. Refer to [Installer Machine](https://hewlettpackard.github.io/hpe-solutions-hpecp/5.2-Synergy/Solution-Deployment/Host-Configuration.html#installer-machine) section to set up the required python and ansible environment.

\- ***\*Python module for HPE OneView\****: hpOneView is the Python SDK for the OneView API that allows you to manage OneView functionalities. Download the python repository at https://github.com/HewlettPackard/oneview-python.

\- ***\*Ansible module for HPE OneView\****: OneView-ansible is the Ansible Module for HPE OneView which utilizes the python SDK to enable infrastructure as a code. Download the repository at https://github.com/HewlettPackard/oneview-ansible/.

\- ***\*Ansible configuration file\****: By default,the **forks** parameter in **Ansible** is limited to 5, please increase the value to number of hosts that are getting configured using this playbook.

For more information on running the playbooks, see Installer machine section in the deployment guide at:

https://hewlettpackard.github.io/hpe-solutions-hpecp/

**## Software requirements** 

| Software            | Version |

| ------------------------------- | ------- |

| HPE OneView           | 5.2   |

| CentOS  | 7.6  |



**## Usage**

\- Execute the following command to switch to infrastructure directory.

```
# cd $BASE_DIR/infrastructure
```

**NOTE** 

1) BASE_DIR is defined and set in [installer machine](https://hewlettpackard.github.io/hpe-solutions-hpecp/5.2-Synergy/Solution-Deployment/Host-Configuration.html#installer-machine) section in deployment guide.
2) Run ```which python3``` command to get the ansible_python interpreter value. Assign this value to ansible_python_interpreter variable in input.yml. 

\- It is mandatory to update all the input files (inputs.yml, hosts, secret.yml, fw_version_inputs.yml) with appropriate values before running any playbooks available in this repository.

\- Update the inventory(hosts), ansible vault(secret.yml), variable file(input.yml) and firmware version variable file (fw_version_inputs.yml) with the appropriate values.

 \- Input file name: hosts

1. This file is an inventory of host details.

2. Variables from "hosts" that are required by playbooks under "infrastructure" directory are listed here:

  ```
 # [server_profile_template] 
 # [server_profile]
  ```
  
**NOTE** 

- It's recommended to use the same server type (ex:type="SY 480 Gen10 1",type="SY 480 Gen10 2",..) for server profile template and assign the same server type to the server profile.

- To use multiple server types, create server profile template for each server type and assign it to the same server type to server profile.
  
  \- Input file name: secret.yml


1. This is an ansible vault file. 

**NOTE**

Default password for Ansible Vault files is changeme.

1. Variables from "secret.yml" that are required by playbooks under "infrastructure" directory are listed here:

```
# oneview_ip: x.x.x.x 

# oneview_username: username

# oneview_password: password

# oneview_api_version: 1600
```

 \- Input file name: inputs.yml


1. Variables from "inputs.yml" that are required by playbooks under "infrastructure" directory are listed here:

```
# enclosure_group: <Enclosure group name as per OneView> 

# deployment_network_name: <Deployment network name as per OneView>

# hcpnodes_template_name: <Custom name for hcpnodes_SPT>

# gw_template_name: <Custom name for gw_SPT>

# fw_bundle_path: <Firmware Bundle file path>  #Comment this parameter to deploy the server profiles without firmware.

# fw_bundle_file_name: <Firmware file name with extension>  #Comment this parameter to deploy the server profiles without firmware.

# managefw: true  #Change this parameter to false for deploy the server profiles without firmware. 

```
**Note:**

If the firmware is already available in the composer and there is no requirement of a new firmware then the following changes need to be made:

- Comment the "fw_bundle_path", "fw_bundle_file_name" parameters
- Set the "managefw" parameter as false


\- Input file name: fw_version_inputs.yml



1. This file contains the version information of the firmware that should be updated on the server hardware. Ignore this file in the event firmware is not managed via server profile.

2. Variables from "fw_version_inputs.yml" that are required by playbooks under "infrastructure" directory are listed here:

```
# innovationengine: < INNOVATION_ENGINE_VERSION >

# systemrombios: < SYSTEM_ROM_VERSION >

# serverplatformservices: < SERVER_PLATFORM_SERVICES >

# powermanagementcontroller: < POWER_MANAGEMENT_CONTROLLER >

# ilo5: < iLO_5_VERSION >
```

 
**## Details of playbook**

**Using firmware bundle:** 

\- Execute the following command to upload the firmware bundle to OneView.

```
 # ansible-playbook -i hosts playbooks/upload_firmware_bundle.yml --ask-vault-pass
```

\- Execute the following command to create and deploy the Server Profile template along with Firmware bundle.

```
 # ansible-playbook -i hosts playbooks/server_profile_template_fw.yml --ask-vault-pass
```

\- Execute the following command to create and deploy Server Profile, update the firmware on Synergy Compute Module and validate the firmware versions.

```
 # ansible-playbook -i hosts playbooks/server_profile_fw.yml --ask-vault-pass
```

**Without using Firmware bundle:**

\- Execute the following command to create and deploy the Server Profile template with managed Firmware manually.

```
 # ansible-playbook -i hosts playbooks/server_profile_template.yml --ask-vault-pass
```

\- Synergy compute module will manage firmware manually.Using the server template, server profile will be assigned to each compute module.Execute the following command to carry out this action.

```
 # ansible-playbook -i hosts playbooks/server_profile_fw.yml --ask-vault-pass
```





 
# Preparing SLES 15 hosts for HPECP installation

## Prerequisites 
- Centos 7 Installer machine with the following configurations is essential.
1. Enable Python3 and Ansible Environment as mentioned in [Installer machine](https://hewlettpackard.github.io/hpe-solutions-hpecp/5.3-DL/Solution-Deployment/Host-Configuration.html#installer-machine) section of deployment guide.
2. Passwordless SSH is configured to target hosts from the installer machine. Steps for configuring passwordless SSH is as follows:
  - Execute the following command on installer machine to generate a new SSH key pair.
    ```
     # ssh-keygen
    ```
     **Note**
  * To generate a SSH key pair of specific algorithm or specific key size as per user requirements, use the following command.

    ```
     # ssh-keygen -t <algorithm> -b <keysize>
    ```    
 
## Input Files

1. This script contains one input reg_detail.yaml which needs to be updated with required regestration details and sles modules.

  1. Open reg_detail.yaml present in "$BASE_DIR/prepare_hpecp_hosts" folder with the following command and enter the details listed below.
   
	  Command to edit reg_details.yaml

      ```
      # ansible-vault edit reg_details.yaml
      ```
	  
	  **Note**
     * Default password for Ansible Vault file reg_details.yaml is "changeme".
   
	  1. Mode :- There are two modes of server registration, RMT and User Email.
       Permissible values are 1 (For registering the SUSE server to RMT) and 2 (For registering the SUSE server using Email)
    
      Mode 1 : Registration using RMT server.
      Update the reg_details.yaml with the following inputs
      1. RMT_URL: RMT server ip address.

      Mode 2 : Registration using User Email Id and RegCode.
      Update the reg_details.yaml with the following inputs
      1. Email :- User Email-id which will be used for server registration.
      2. base_code :- Registration code which will be used for server registration.
      3. caas_code :- Registration code for caas module.
      4. ha_code:- Registration code for ha module.

		
      **Note** 
       * Email and Reg_codes are applicable only for Mode 2 else leave blank.
			
	    2. sles_packages : sles modules which will be installed separated by comma.
		3. Zypper_packages : zypper packages which will be installed separated by comma.

  	  
  4. Example values for the reg_details.yaml is as follows.
	
      ```
      ---
      #Mode 1 for RMT Registration and Mode 2 for User Registration
      

      Mode: 2
      
      Email: jim.***@***.com
      base_code: 8BAB9EC****
      caas_code: 21E02******
      ha_code: 87D73*****
      
      RMT_URL: http://20.**.**.**/

      sles_packages: [sle-module-public-cloud/15.2/x86_64,sle-module-legacy/15.2/x86_64,sle-module-python2/15.2/x86_64,sle-module-containers/15.2/x86_64,sle-module-basesystem/15.2/x86_64,sle-module-desktop-applications/15.2/x86_64]
      
      zypper_packages: [iputils,bind-utils,autofs,libcgroup1,kernel-default-devel,gcc-c++,perl,pciutils,rsyslog,firewalld]
      
      ```
**Note** 
  * Don't modify the sles_packages and zypper_packages as these packages are required for HPECP implementation.Any changes made to this section may impact the installation. 


## Installation
1. Enable Python3 and Ansible Environment as mentioned in [Installer machine](https://hewlettpackard.github.io/hpe-solutions-hpecp/5.3-DL/Solution-Deployment/Host-Configuration.html#installer-machine) section of deployment guide.
2. Change the current working directory to "prepare_hpecp_hosts" using the following command
  ```
   # cd $BASE_DIR/prepare_hpecp_hosts
  ```
  **Note**
  * BASE_DIR is defined and set in [Installer machine](https://hewlettpackard.github.io/hpe-solutions-hpecp/5.3-DL/Solution-Deployment/Host-Configuration.html#installer-machine) section in deployment guide.
  
   
3. Execute the copy.sh script to copy the ssh keys to the SLES hosts.

  ```
	#sh copy.sh

  ```
      
	  *User needs to enter the sles hosts password at the prompt.

  
**Note**
   * By default, the forks parameter in Ansible is limited to 5. Update the Ansible configuration to increase the value to number of hosts that are getting configured using this playbook by executing the following command.
  
  ```
       # export ANSIBLE_FORKS=<number_of_hosts_present_in_the_ansible_inventory_file>
  ```

4. Execute the playbook using the following command.
  ```
    # ansible-playbook -i inventory prepare_host.yml --ask-vault-pass 

  ```
**Note**
	
	* The inventory file is being generated during the OS deployment script execution based on the inputs provided in server_detail.json.In case the prepare host script needs to be executed on other servers, the inventory file present in $BASE_DIR/prepare_hpecp_hosts can be updated manually with the corresponding server details.
	
	* During the playbook execution, while installing the packageHub Module it might throw an error in the first attempt. This is a known issue from SUSE and is being taken care by re-installing the module, link for reference https://www.suse.com/support/kb/doc/?id=000019505
  
	* In case the script fails while checking the internet connection from the hosts, kindly cross verify the internet from the hosts and then re-run the script.

	* While checking the apparmor service the error is expected as it verifies the apparmor service status on the hosts and if it is running, it will stop and disable the same.
	
	

  

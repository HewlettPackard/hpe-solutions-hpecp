## Lite touch Installation of HPERE Platform using Ansible playbook through RESTAPI Based deployment

### Overview 

Usage of Ansible playbooks to deploy the HPE Ezmeral Runtime Enterprise is automated and eliminates manual intervention. Ansible playbooks provides the following functionalities for the installation user to deploy HPE Ezmeral Runtime Enterprise.

-   Install the SLES OS on bare metal servers
  
-   Prepare the hosts for HPERE implementation.

-   Setup docker-registry to deploy ere through air-gapped environment
  
-   Install the controller node.

-   Add gateway nodes, delete gateway nodes or enable gateway HA.

-   Add and delete EPIC worker nodes.

-   Enable or disable controller high availability.

-   Add or remove hosts on the Kubernetes.

-   Create or delete Kubernetes cluster.

-   Create or delete tenants.


# Prerequisites 

   
### Installer Machine Prerequisite

 Centos 7 [Installer machine](https://hewlettpackard.github.io/hpe-solutions-hpere/5.6-DL/Solution-Deployment/Host-Configuration.html) with the following configurations is essential to initiate the OS deployment process.
   1. At least 600 GB disk space (especially in the "/" partition), 4 CPU cores and 16GB RAM.
   2. 1 network interface with static IP address configured on same network as the management plane of the bare-metal servers and has access to internet.
   3. Ansible 2.9.x and python 3.x and above should be installed. Please refer to the [Installer machine](https://hewlettpackard.github.io/hpe-solutions-hpecp/5.6-DL/Solution-Deployment/Host-Configuration.html#installer-machine) section of the deployment guide 
            
   4. Setup the installer machine to configure the nginx, development tools and other python packages required for LTI installation.
      Navigate to the directory, $BASE_DIR/ERE_RestAPI_Based_Deployment/playbooks/roles/os_deployment/tasks and run the below command. 

        ```
         sh setup.sh
        
        ```
    
     **NOTE**
     * While the script is running if it is not able to clone the mksusecd repo and  gets failed, kindly re-run the script and ensure the repo is cloned successfully.
         

   5. OS ISO image is present in the HTTP file path within the installer machine.

      **NOTE**
      * SLES ISO should be present under /usr/share/nginx/html/
  
   6. Ensure that SELinux status is disabled.

   7. SSH Key pair should be there on the installer machine, if not kindly generate a new SSH key pair using the below command.

        ```
          ssh-keygen 
        ```
      **NOTE**  
      Ensure that in the known hosts file of installer machine, the entries of HPERE host should not be present.

   8. The script downloads the hpere bin file from the S3 bucket or the bin file can be downloaded the from the url and placed locally to root directory on the controller machine.The same needs to be updated in the vars.yml file.


### HPERE Nodes Prerequisite
   
   1. Minimum five (5) nodes with two raw disks are required for normal HPERE deployment.
      
      **NOTE**
      sda :- for os installation
      sdb :- for docker storage
      The node which will be used for gateway can just have the OS (sda) disks.
      Ensure that the sdb disk is not in use and is available to be used as docker storage.In case the disk is already in use kindly do a cleanup of the disks before initiating the HPERE deployment script.    

   2. HPERE Nodes Configuration Details.
      * 2 network interface for the production network 
      * 1 local drive to be used as the boot device
      * Boot mode is set to UEFI
      * Boot order - Hard disk
      * Secure Boot - disabled 
  
  **Note**
   1. Generic settings done as part of kickstart file for SLES OS Deployment are as follows. It is recommended that the user reviews and modifies the control file (autoinst.xml file) to suit their requirements.
      
      * Minimal Installation
      * Language - en_US
      * Keyboard & layout - US
      * Partition
      * /boot/efi ,fstype="vfat" ,size=500MiB
      * root , size = 150G
      * srv , size = 100G
      * swap , size = 62.96G
      * var , size = 120G
      * home , size = 25G
      
   
   **Note**
   * Specified Partitions are inline with HPERE implementation and it is advised not to make changes to this.
   
   * timezone - America/NewYork
   
   * NIC teaming is performed with devices as specified in Bonding_Interface field of vars.yml,server section of the input file. It is further assigned with the Host_IP, Netmask, Domain as defined in the  input file.
	
	* Signature handling(accepting file without checksum, with non trusted gpg key, unsigned file etc) is disabled by default to avoid any pop-ups and warnings and have an unattended installation.These properties can be modified according to the requirements in control file/autoinst.xml.
		
```
      <accept_file_without_checksum config:type="boolean">true</accept_file_without_checksum>
      <accept_non_trusted_gpg_key config:type="boolean">true</accept_non_trusted_gpg_key>
      <accept_unknown_gpg_key config:type="boolean">true</accept_unknown_gpg_key>
      <accept_unsigned_file config:type="boolean">true</accept_unsigned_file>
      <accept_verification_failed config:type="boolean">false</accept_verification_failed>
      <import_gpg_key config:type="boolean">true</import_gpg_key>
```  

### Input files

-   Update the values in *vars.yml* according to your environment.

-   Navigate to the base directory $BASE_DIR/ERE_RestAPI_Based_Deployment and Use following command to edit *vars.yml* file

**NOTE** The value for the constant "$BASE_DIR" referred to is /opt/hpe/solutions/hpecp/hpe-solutions-hpecp/LTI/

```
	ansible-vault edit group_vars/all/vars.yml 
```
- The hosts file is being generated in the backend during the OS deployment process.User can edit the hosts file if required according to their requirement.
  
  ```
   vi $BASE_DIR/ERE_RestAPI_Based_Deployment/hosts
  ```

**NOTE**

Sample vars.yml can be found in the following path ```group_vars/all/vars.sample``` along with description of each input variable.


### Installation

1. HPE Ezmeral Runtime Enterprise can be deployed by running ```site.yml``` or by running individual playbooks. Each playbook description can be found further in this document

Run the below command to execute the Lite Touch Installation.

   ```
	  ansible-playbook -i hosts site.yml  --ask-vault-pass

   ```
In case if user want to deploy through individual playbooks. Sequence of playbooks to be followed are:

   ```
      ansible-playbook -i hosts playbooks/os_deployment.yml --ask-vault-pass
      ansible-playbook -i hosts playbooks/prepare_hosts.yml --ask-vault-pass
      ansible-playbook -i hosts playbooks/download-tools.yml --ask-vault-pass 
      ansible-playbook -i hosts playbooks/controller.yml --ask-vault-pass
      ansible-playbook -i hosts playbooks/gateway-add.yml --ask-vault-pass  
      ansible-playbook -i hosts playbooks/epic-workers-add.yml --ask-vault-pass 
      ansible-playbook -i hosts playbooks/controller-ha.yml --ask-vault-pass
      ansible-playbook -i hosts playbooks/k8s-add-hosts.yml --ask-vault-pass
      ansible-playbook -i hosts playbooks/k8s-create-cluster.yml --ask-vault-pass
      ansible-playbook -i hosts playbooks/k8s-create-tenant.yml --ask-vault-pass 
   ```
**NOTE**

In case if there is no requirement of controller ha, user can skip ```playbooks/controller-ha.yml``` by commenting the same in site.yml.

### Playbook description

**site.yml**

- This playbook contains the script to deploy HPE Ezmeral Runtime Enterprise starting from the OS_deployment until tenant configuration. 


**OS_deployment.yml**

- This playbook contains the scripts to deploy SLES_OS on bare metal servers.


**Prepare_hosts.yml**

- This playbook contains the script to prepare the hosts for HPERE deployment.


**download-tools.yml**

- This playbook downloads the below tools under ```/usr/local/bin``` in the installer machine and provides executable permissions.

	* jq
	  
**NOTE**

In case of facing any issues while running download-tools.yml playbook, Download tools manually from the following links, place it under 
``` /usr/local/bin ``` and change executable permissions.
 
- jq (https://github.com/stedolan/jq/releases/download/jq-1.6/jq-linux64)

Update {{ kubectl_cli_version }} with the version which user want to download. Please make sure the version is compatible with the the version which HPERE supports. Recommended to use 1.17.13.


**controller.yml**

- This playbook contains the script to deploy controller and also configuring the controller based on the configuaration details provided in the vars.yml file and also provide ip details in hosts inventory file.

**gateway-add.yml**

- This playbook contains the script to add gateways. User can add multiple gateways by providing ip and host information in vars.yml file and also provide ip details in hosts inventory file.

**epic-workers-add.yml**

- This playbook contains the script to add epic worker nodes. Provide epic worker details in vars.yml and also in hosts inventory file.

**controller-ha.yml**

- This playbook contains the script to enable controller ha. User need to provide virtual ip with FQDN in vars.yml file to configure controller ha. Please make sure virtual ip details present in DNS entries.

- User need to run ``` playbooks/epic-workers-add.yml``` playbook first to add required epic worker nodes. And then run ``` playbooks/controller-ha.yml``` playbook. 

**k8-add-hosts.yml**

- This playbook contains the script to add k8 nodes. Provide k8 nodes information in vars.yml and hosts file.

**k8s-create-cluster.yml**

- This playbook contains the script to create cluster. Provide cluster details in vars.yml

**k8s-create-tenant.yml**

- This playbook contains the script to create tenant. Provide tenant details in vars.yml. 
            

### Uninstall information 

Run below playbook to erase build on controller node.
      
```
	ansible-playbook -i hosts playbooks/uninstall-bds.yml --ask-vault-pass
```

### Other Playbooks

Run the following command to disable controller ha.

```
	ansible-playbook -i hosts playbooks/disable-controller-ha.yml --ask-vault-pass
```

Run the following command to delete epic workers.
 
```
	ansible-playbook -i hosts playbooks/epic-workers-delete.yml --ask-vault-pass
```
**NOTE**
    - If platform **High Availability** is enabled, then the user cannot delete the Controller, Shadow Controller or Arbiter host from the ERE. 
    - You must have **at least four (4) epic Worker Hosts** (including the HA epic worker hosts) in order to decommission the datanodes.
    - If HA is not enabled, then the user can delete the epic workers as usual.
    - For more information see <http://docs.bluedata.com/51_decommissioning-deleting-an-epic-worker>

Run the following command to delete k8s hosts.

```
	ansible-playbook -i hosts playbooks/k8s-delete-hosts.yml --ask-vault-pass
```

Run the following command to delete the tenant.

```
	ansible-playbook -i hosts playbooks/k8s-delete-tenant.yml --ask-vault-pass
```

Run the following command to delete the cluster

```
	ansible-playbook -i hosts playbooks/k8s-delete-cluster.yml --ask-vault-pass
```

Run the following command to delete gateway.
 
```
	ansible-playbook -i hosts playbooks/gateway-delete.yml --ask-vault-pass
```

# ERE deployment through air-gapped environment

If user want ERE deployment through airgap mode then perform below steps:

- To setup docker registry update the details under airgap section in vars.yml and run below command to setup docker registry (registry server).

   ```
      ansible-playbook -i hosts playbooks/setup_docker_registry.yml --ask-vault-pass
   ```
**setup_docker_registry.yml**

- This playbook contains the script to create,configure docker registry and also copy all required docker images based on the configuaration details provided in the vars.yml file. 

**NOTE**

1. User can utilize installer as docker-registry server and run above playbook on installer itself.

2. Incase of timeout,retries and connection errors while copying docker images to docker registry re run the playbook again since copying images takes more time than expected.
   or
copy all images using hpe utility tool to docker-registry server manually(incase if copying images is failing due to large size), Please check below commands and url to copy images manually to docker registry.

```
hpe-airgap-util --release <ere-release-number> --required --copy --dest_url <docker-registry-server>:5000
hpe-airgap-util --release <ere-release-number> --optional --copy --dest_url <docker-registry-server>:5000
```

- hpeutility url(https://support.hpe.com/hpesc/public/docDisplay?docId=a00ecp55hen_us&page=reference/deploying-the-platform/phase-4/using-the-air-gap-utility-script.html)

Update {{ ere-release-number }} and {{ docker-registry-server }} with the version and registry server which user want to copy images and run above commands on server where you are configured registry server.

- After docker-registry setup is ready run the playbooks shown in installation block above, follow same process which will deploy ERE through airgap environment.







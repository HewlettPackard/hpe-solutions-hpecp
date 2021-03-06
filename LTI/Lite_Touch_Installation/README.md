## Lite touch Installation of HPECP Platform using Ansible playbook

### Overview 

Usage of Ansible playbooks to deploy the HPE Ezmeral Container Platform is automated and eliminates manual intervention. Ansible playbooks provides the following functionalities for the installation user to deploy HPE Ezmeral Container Platform.

-   Install the SLES OS on bare metal servers
  
-   Prepare the hosts for HPECP implementation.
  
-   Install the controller node.

-   Add gateway nodes, delete gateway nodes or enable gateway HA.

-   Add and delete EPIC worker nodes.

-   Enable or disable controller high availability.

-   Add or remove hosts on the Kubernetes.

-   Create or delete Kubernetes cluster.

-   Create or delete tenants.


# Prerequisites 

   
### Installer Machine Prerequisite

 Centos 7 [Installer machine](https://hewlettpackard.github.io/hpe-solutions-hpecp/5.2-Synergy/Solution-Deployment/Host-Configuration.html#installer-machine) with the following configurations is essential to initiate the OS deployment process.
   1. At least 600 GB disk space (especially in the "/" partition), 4 CPU cores and 16GB RAM.
   2. 1 network interface with static IP address configured on same network as the management plane of the bare-metal servers and has access to internet.
   3. Ansible 2.9.x and python 3.x and above should be installed. Please refer to the [Installer machine](https://hewlettpackard.github.io/hpe-solutions-hpecp/5.2-Synergy/Solution-Deployment/Host-Configuration.html#installer-machine section of the deployment guide 
            
   4. Setup the installer machine to configure the nginx, development tools and other python packages required for LTI installation.
      Navigate to the directory, $BASE_DIR/Lite_Touch_Installation/playbooks/roles/os_deployment/tasks and run the below command. 

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
      Ensure that in the known hosts file of installer machine, the entries of HPECP host should not be present.

   8. The script downloads the hpecp bin file from the S3 bucket or the bin file can be downloaded the from the url and placed locally on the installer machine.The same needs to be updated in the vars.yml file.

### HPECP Nodes Prerequisite
   
   1. Minimum five (5) nodes with two raw disks are required for normal HPECP deployment.
      
      **NOTE**
      sda :- for os installation
      sdb :- for docker storage
      The node which will be used for gateway can just have the OS (sda) disks.
      Ensure that the sdb disk is not in use and is available to be used as docker storage.In case the disk is already in use kindly do a cleanup of the disks before initiating the HPECP deployment script.    

   2. HPECP Nodes Configuration Details.
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
      * var , size = 100G
      * home , size = 25G
      
   
   **Note**
   * Specified Partitions are inline with HPECP implementation and it is advised not to make changes to this.
   
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

-   Navigate to the base directory $BASE_DIR/Lite_Touch_Installation and Use following command to edit *vars.yml* file

**NOTE** The value for the constant "$BASE_DIR" referred to is /opt/hpe/solutions/hpecp/hpe-solutions-hpecp/LTI/


```
	ansible-vault edit group_vars/all/vars.yml 
```
- The hosts file is being generated in the backend during the OS deployment process.User can  edit the hosts file if required according to their requirement.
  
  ```
   vi $BASE_DIR/Lite_Touch_Installation/hosts
  ```

**NOTE**

Sample vars.yml can be found in the following path ```group_vars/all/vars.sample``` along with description of each input variable.


### Installation

1. HPE Ezmeral Container Platform can be deployed by running ```site.yml``` or by running individual playbooks. Each playbook description can be found     further in this document

Run the below command to execute the Lite Touch Installation.

   ```
	  ansible-playbook  site.yml  --ask-vault-pass
   ```
In case if user want to deploy through individual playbooks. Sequence of playbooks to be followed are:

   ```
      ansible-playbook  playbooks/os_deployment.yml --ask-vault-pass
      ansible-playbook  playbooks/prepare_hosts.yml --ask-vault-pass
      ansible-playbook  playbooks/download-tools.yml --ask-vault-pass 
      ansible-playbook  playbooks/controller.yml --ask-vault-pass
      ansible-playbook  playbooks/gateway-add.yml --ask-vault-pass 
      ansible-playbook  playbooks/epic-workers-add.yml --ask-vault-pass 
      ansible-playbook  playbooks/controller-ha.yml --ask-vault-pass 
      ansible-playbook  playbooks/k8s-add-hosts.yml --ask-vault-pass
      ansible-playbook  playbooks/k8s-create-cluster.yml --ask-vault-pass
      ansible-playbook  playbooks/k8s-create-tenant.yml --ask-vault-pass 
   ```
**NOTE**

In case if there is no requirement of controller ha, user can skip ```playbooks/controller-ha.yml``` by commenting the same in site.yml.

### Playbook description

**site.yml**

- This playbook contains the script to deploy HPE Ezmeral Container platform starting from the OS_deployment until tenant configuration. 


**OS_deployment.yml**

- This playbook contains the scripts to deploy SLES_OS on bare metal servers.


**Prepare_hosts.yml**

- This playbook contains the script to prepare the hosts for HPECP deployment.


**download-tools.yml**

- This playbook downloads the below tools under ```/usr/local/bin``` in the installer machine and provides executable permissions.

	* epicctl  
	* kubectl 
	* kubectl-hpecp plugin
	* jq

	  
**NOTE**

In case of facing any issues while running download-tools.yml playbook, Download tools manually from the following links, place it under 
``` /usr/local/bin ``` and change executable permissions.
 
- epicctl (https://my-epicctl.s3-us-west-2.amazonaws.com/epicctl)
- kubectl (https://storage.googleapis.com/kubernetes-release/release/{{ kubectl_cli_version }}/bin/linux/amd64/kubectl)
- kubectl-hpecp plugin (https://bluedata-releases.s3.amazonaws.com/kubectl-epic/3.2/162/linux/kubectl-hpecp)
- jq (https://github.com/stedolan/jq/releases/download/jq-1.6/jq-linux64)

Update {{ kubectl_cli_version }} with the version which user want to download. Please make sure the version is compatible with the the version which HPECP supports. Recommended to use 1.17.5.


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
	ansible-playbook  playbooks/uninstall-bds.yml --ask-vault-pass
```

### Other Playbooks

Run the following command to disable controller ha.

```
	ansible-playbook  playbooks/disable-controller-ha.yml --ask-vault-pass
```

Run the following command to delete epic workers.
 
```
	ansible-playbook  playbooks/epic-workers-delete.yml --ask-vault-pass
```
**NOTE**
    - If platform **High Availability** is enabled, then the user cannot delete the Controller, Shadow Controller or Arbiter host from the Container Platform. 
    - You must have **at least four (4) epic Worker Hosts** (including the HA epic worker hosts) in order to decommission the datanodes.
    - If HA is not enabled, then the user can delete the epic workers as usual.
    - For more information see <http://docs.bluedata.com/51_decommissioning-deleting-an-epic-worker>

Run the following command to delete k8s hosts.

```
	ansible-playbook  playbooks/k8s-delete-hosts.yml --ask-vault-pass
```

Run the following command to delete the tenant.

```
	ansible-playbook  playbooks/k8s-delete-tenant.yml --ask-vault-pass
```

Run the following command to delete the cluster

```
	ansible-playbook  playbooks/k8s-delete-cluster.yml --ask-vault-pass
```

Run the following command to delete gateway.
 
```
	ansible-playbook  playbooks/gateway-delete.yml --ask-vault-pass
```








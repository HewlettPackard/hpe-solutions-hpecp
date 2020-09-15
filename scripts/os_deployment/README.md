# OS Deployment

This folder consists of scripts to deploy operating system over bare-metal servers using virtual media.

## Prerequisites 
 Centos 7 Installer machine with the following configurations is essential to initiate the OS deployment process.
   1. At least 500 GB disk space (especially in the "/" partition), 4 CPU cores and 8GB RAM.
   2. 1 network interface with static IP address configured on same network as the management plane of the bare-metal servers and has access to internet.
   3. Python 3.6 or above is present and latest version associated pip is present.
   4. Ansible 2.9 should be installed
   5. OS ISO image is present in the HTTP file path within the installer machine.
   6. Ensure that SELinux status is disabled.
  
   SUSE hosts
   * 2 network interface for the production network 
   * 1 local drive to be used as the boot device
   * Boot mode is set to UEFI
   * Boot order - Hard disk
   * Secure Boot - disabled 
 
## Installation

1. Enable Python3 and Ansible Environment as mentioned in "Installer machine" section of deployment guide.

2. Setup the installer machine.
   ```
   # sh setup.sh
   ``` 
		
   **Note**
      * While copying the code from Windows to linux hosts ,there might be leading spaces and tabs in the script because of the different OS version.Kindly run the below command to fix any unwanted space,tabs error.

      ```
      # sed -i 's/\r$//' <path>/setup.sh 

      ```
   **Note**
     * While the script is running if it is not able to clone the mksusecd repo and  gets failed ,kindly re-run the script and ensure the repo is cloned successfully.
		
   
3. There are 2 input files config.json and server_details.json, both of which needs to be updated with values for all the variables present within them.
   1. Open config.json file with the following command and add the details of web server and operating system to be installed.
      
      Default password for Ansible Vault file "config.json" is changeme.

      Command to edit config.json

      ```
      # ansible-vault edit config.json
      ```
      Example values for the input configuration is as follows
      ```
      {
         "HTTP_server_base_url"  :   "http://10.0.x.x/",
         "HTTP_file_path"        :   "/usr/share/nginx/html/",
         "OS_type"               :   "sles15",
         "OS_image_name"         :   "<os_iso_image_name_with_extension>"
      }
      ```
   **Note**
      * Acceptable values for "OS_type" variable is  "sles15" for SUSE 15 SP1.

   2. Open server_details.json with the following command and add the details of servers on which operating system is to be installed.

      Command to edit server_details.json

      Default password for Ansible Vault files "server_details.json"  is changeme.

      ```
      # ansible-vault edit server_details.json
      ```
           
      Example values for the input configuration for deploying SLES 15 SP1 is as follows.

   **Note** 
      * It is recommended to provide a complex password for the "Host_Password" variable.

      ```
      [{
         "Server_serial_number"  : "MXxxxxxDP",
         "ILO_Address"           : "10.0.x.x",
         "ILO_Username"          : "<username_of_the_admin_privileges_account>",
         "ILO_Password"          : "<password_of_the_admin_privileges_account>",
         "Hostname"              : "sles01.twentynet.local",
         "Host_Username"         : "root",
         "Host_Password"         : "Password",
         "Bonding_Interface1"    : "eth*",
         "Bonding_Interface2"    : "eth*",
         "Host_IP"               : "20.x.x.x",
         "Host_Netmask"          : "255.x.x.x",
         "Host_Gateway"          : "20.x.x.x",
         "Host_DNS"              : "20.x.x.x",
         "Host_Search"           : "twentynet.local",
         "GPU_Host"              : "yes"
      },
      {
         "Server_serial_number"  : "MXxxxxxDQ",
         "ILO_Address"           : "10.0.x.x",
         "ILO_Username"          : "<username_of_the_admin_privileges_account>",
         "ILO_Password"          : "<password_of_the_admin_privileges_account>",
         "Hostname"              : "sles02.twentynet.local",
         "Host_Username"         : "root",
         "Host_Password"         : "Password",
         "Bonding_Interface1"    : "eth*",
         "Bonding_Interface2"    : "eth*",
         "Host_IP"               : "20.0.x.x",
         "Host_Netmask"          : "255.x.x.x",
         "Host_Gateway"          : "20.x.x.x",
         "Host_DNS"              : "20.x.x.x",
         "Host_Search"           : "twentynet.local",
         "GPU_Host"              : "No"
      }]
	 
      ```
	  
**Note**

   1. Server Serial numbers are the identification for the servers on which the OS is going to be installed.
   
   2. For Bonding_Interface1 and Bonding_Interface2 , enter the physical nic ports which will be used for NIC Teaming.
   (For synergy servers the bonding interface will be eth0 and eth1 respectively,For apollo servers kindly check the network adaptors and assign the interfaces accordingly)

   3. Acceptable values for "GPU_Host" variable is "yes" for host which has GPU cards and "No" for hosts which do not have GPU cards.

     

1. Executing the script to deploy operating system.
   ```
   # python3 deploy_os.py
   ```

**Note**
1. Generic settings done as part of kickstart file for SLES are as follows. It is recommended that the user reviews and modifies the control file (autoinst.xml file) to suit their requirements.
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
   
   * NIC teaming is performed with devices as specified in Bonding_Interface field of input_files/server_details.json input file. It is further assigned with the Host_IP ,Netmask,Domain as defined in the input_files/server_details.json input file.
   
	* Signature handling(accepting file without checksum, with non trusted gpg key, unsigned file etc) is disabled by default to avoid any pop-ups and warnings and have an unattended installation.These properties can be modified according to the requirements in control file/autoinst.xml.
		
```
      <accept_file_without_checksum config:type="boolean">true</accept_file_without_checksum>
      <accept_non_trusted_gpg_key config:type="boolean">true</accept_non_trusted_gpg_key>
      <accept_unknown_gpg_key config:type="boolean">true</accept_unknown_gpg_key>
      <accept_unsigned_file config:type="boolean">true</accept_unsigned_file>
      <accept_verification_failed config:type="boolean">false</accept_verification_failed>
      <import_gpg_key config:type="boolean">true</import_gpg_key>

```
 

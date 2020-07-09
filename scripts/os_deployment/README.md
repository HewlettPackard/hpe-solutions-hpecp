# OS Deployment

This folder consists of scripts to deploy operating system over bare-metal servers using virtual media.

## Prerequisites 
- RHEL 7.6 Installer machine with the following configurations is essential to initiate the OS deployment process.
    1. At least 200 GB disk space (especially in the "/" partition), 4 CPU cores and 8GB RAM.
    2. Registered to Red Hat Subscription Manager with a valid repository.
    3. 1 network interface with static IP address configured on same network as the management plane of the bare-metal servers and has access to internet.
    4. Python 3.6 or above is present and latest version associated pip is present.
    5. Ansible 2.9 should be installed
    6. OS ISO image is present in the HTTP file path within the installer machine.
  
- DHCP service exisits on the management and production network to provides IP address leases on the corresponding network. 
- HPE Synergy servers with server profiles configurations for operating system and corresponding role is listed as follows: 
     RHEL Controller/Master nodes 
     * 2 network interfaces for the production network 
     * 1 local drive to be used as the boot device
     * Boot mode is set to UEFI
     * Boot order - Hard disk
     * Secure Boot - disabled

     RHEL Gateway Load Balancer nodes 
     * 2 network interfaces for the production network 
     * 1 local drive to be used as the boot device
     * Boot mode is set to UEFI
     * Boot order - Hard disk
     * Secure Boot - disabled

     RHEL Worker nodes
     * 2 network interfaces for the production network 
     * 2 network interfaces - 1 each for iSCSI A and iSCSI B networks for communication with storage array
     * 1 local drive to be used as the boot device
     * Boot mode is set to UEFI
     * Boot order - Hard disk
     * Secure Boot - disabled

     ESXi hosts
     * 2 network interfaces for the production network 
     * 2 network interfaces - 1 each for iSCSI A and iSCSI B networks for communication with storage array
     * 1 local drive to be used as the boot device
     * Boot mode is set to UEFI
     * Boot order - Hard disk
     * Secure Boot - disabled
- For each of the servers, iLO account with administrative priviliges is required to ensure successful deployment of the operating system.

## Installation

1. Enable Python3 and Ansible Environment as mentioned in "Installer machine" section of deployment guide.
2. Setup the installer machine.
   ```
   # sh setup.sh
   ```

3. There are 2 input files config.json and server_details.json, both of which needs to be updated with values for all the variables present within them.
   1. Open config.json file with the following command and add the details of web server and operating system to be installed.

      Command to edit config.json

      ```
      # ansible-vault edit config.json
      ```
      Example values for the input configuration is as follows
      ```
      {
         "HTTP_server_base_url"  :   "http://10.0.x.x/",
         "HTTP_file_path"        :   "/usr/share/nginx/html/",
         "OS_type"               :   "<esxi67_or_rhel7>",
         "OS_image_name"         :   "<os_iso_image_name_with_extension>"
      }
      ```
      Note: 
      * Acceptable values for "OS_type" variable is "rhel7" for RHEL 7.7 and "esxi67" for ESXi 6.7.

   2. Open server_details.json with the following command and add the details of servers on which operating system is to be installed.

      Command to edit server_details.json

      ```
      # ansible-vault edit server_details.json
      ```
      Note:
      Default password for Ansible Vault files "server_details.json" and "config.json" is changeme.

      Example values for the input configuration for deploying RHEL 7.7 is as follows.
      Note:
      * It is essential to provide a hashed password for the “Host_Password” field in the server_details.json input file in case of RHEL installation. Execute the following command with the choice of password to generate an MD5 hash and provide its output to the “Host_Password” field. Execute the following command to generate MD5 hashed password. 
      ```
      # openssl passwd -1 <Password>
      ```
      * Acceptable values for "Server_Role" variable is "master" for RHEL controller node/RHEL master node/RHEL gateway load balancer nodes and "worker" for RHEL worker node. 
      ```
      [{
            "Server_serial_number"  : "MXxxxxxDN",
            "ILO_Address"           : "10.x.x.x",
            "ILO_Username"          : "<username_of_the_admin_priviliges_account>",
            "ILO_Password"          : "<password_of_the_admin_priviliges_account>",
            "Hostname"              : "master01.twentynet.local",
            "Host_IP"               : "20.x.x.x",
            "Host_Username"         : "root",
            "Host_Password"         : "<hashed_value_of_complex_password>",
            "Host_Netmask"          : "255.x.x.x",
            "Host_Gateway"          : "20.x.x.x",
            "Host_DNS"              : "20.x.x.x",
            "Server_Role"           : "master"
      },
      {
            "Server_serial_number"  : "MXxxxxxDN",
            "ILO_Address"           : "10.x.x.x",
            "ILO_Username"          : "username",
            "ILO_Password"          : "password",
            "Hostname"              : "worker01.twentynet.local",
            "Host_IP"               : "20.x.x.x",
            "Host_Username"         : "root",
            "Host_Password"         : "<hashed_value_of_complex_password>",
            "Host_Netmask"          : "255.x.x.x",
            "Host_Gateway"          : "20.x.x.x",
            "Host_DNS"              : "20.x.x.x",
            "Server_Role"           : "worker",
            "Additional_Networks"   : [{
               "IP"                : "30.0.x.x",
               "Netmask"           : "255.255.x.x"
            },
            {
               "IP"                : "40.0.x.x",
               "Netmask"           : "255.255.x.x"
            }]
      }]
      ```
      Example values for the input configuration for deploying ESXi 6.7 is as follows.
      Note: 
      * "Server_Role" and "Additional_Networks" variables can be ignored for VMware ESXi deployment.
      * It is recommended to provide a complex password for the "Host_Password" variable.
      ```
      [{
         "Server_serial_number"  : "MXxxxxxDP",
         "ILO_Address"           : "10.0.x.x",
         "ILO_Username"          : "username",
         "ILO_Password"          : "password",
         "Hostname"              : "vsphere01.twentynet.local",
         "Host_IP"               : "20.x.x.x",
         "Host_Username"         : "root",
         "Host_Password"         : "Password",
         "Host_Netmask"          : "255.x.x.x",
         "Host_Gateway"          : "20.x.x.x",
         "Host_DNS"              : "20.x.x.x"
      },
      {
         "Server_serial_number"  : "MXxxxxxDQ",
         "ILO_Address"           : "10.0.x.x",
         "ILO_Username"          : "username",
         "ILO_Password"          : "password",
         "Hostname"              : "vsphere02.twentynet.local",
         "Host_IP"               : "20.0.x.x",
         "Host_Username"         : "root",
         "Host_Password"         : "Password",
         "Host_Netmask"          : "255.x.x.x",
         "Host_Gateway"          : "20.x.x.x",
         "Host_DNS"              : "20.x.x.x"
      }]
      ```

4. Executing the script to deploy operating system.
   ```
   # python3 deploy_os.py
   ```

Note
1. Generic settings done as part of kickstart file for RHEL are as follows. It is recommended that the user reviews and modifies the kickstart files(kickstart_files/ks_rhel7.cfg and kickstart_files/ks_rhel7_worker.cfg) to suit their requirements.
   * Graphical installation
   * Language - en_US
   * Keyboard & layout - US
   * System service chronyd disabled
   * timezone - Asia/Kolkata
   * Bootloader config
       * bootloader location=mbr
       * clearpart --all --initlabel
       * ignoredisk --only-use=sda
       * part swap --asprimary --fstype="swap" --size=77263
       * part /boot --fstype xfs --size=300
       * part /boot/efi --fstype="vfat" --size=1024
       * part / --size=500 --grow
   * NIC teaming is perfomed with devices ens3f0 and ens3f1. It is assigned with the Host_IP defined in the input_files/server_details.json input file.
   * For the worker nodes, devices ens3f4 and ens3f5 are assigned with iSCSI_A IP address and iSCSI_B IP address respectively which is defined in the input_files/server_details.json file.

2. Generic settings done as part of kickstart file for ESXi are as follows. It is recommended that the user reviews and modifies the kickstart file (kickstart_files/ks_esxi67.cfg) to suit their requirements.
   * Accept EULA
   * clearpart --alldrives --overwritevmfs
   * install --firstdisk --overwritevmfs
   * %firstboot --interpreter=busybox
   * 1 standard switch vswitch0 is created with uplinks vmnic0 and vmnic1. it is assigned with the Host_IP defined in the input_files/server_details.json input file.
   * NIC teaming is performed with vmnic0 being the active uplink and vmnic1 being the standby uplink.
   * NIC failover policy is set to --failback yes --failure-detection link --load-balancing mac --notify-switches yes.
# Preparing RHEL 7.7 hosts for HPECP installation

This folder consists of scripts to prepare RHEL 7.7 hosts for HPECP installation. 

## Prerequisites 
RHEL 7.6 Installer machine with the following configurations is essential.
1. Enable Python3 and Ansible Environment as mentioned in "Installer machine" section of deployment guide.
2. Passwordless SSH is configured to target hosts from the installer machine. Steps for configuring passwordless SSH is as follows:
   - Execute the following command on installer machine to generate a new SSH key pair.
     ```
     # ssh-keygen
     ```
     Note
        To generate a SSH key pair of specific algorithm or specific key size as per user requirements, use the following command.
        ```
        # ssh-keygen -t <algorithm> -b <keysize>
        ```
   - Execute the following command on the installer machine for each of target hosts and provide the password for the root user on that target host.
     ```
     # ssh-copy-id root@<target_host_ip_address_or_fully_qualified_domain_name>
     ```

## Description 
This automation script configures the following on the hosts on which HPECP is to be installed:
- Register the host to Red Hat Subscription Manager(RHSM) if not already registered.
- Enable repos "rhel-7-server-optional-rpms", "rhel-7-server-extras-rpms" and "rhel-ha-for-rhel-7-server-rpms".
- Set the RHEL OS release to 7.7 and perform an update.
- The behaviour of Yum plugin is set to notifications only in the /etc/yum/pluginconf.d/search-disabled-repos.conf file.
- Disable firewall and set SELinux to permissive mode
- The ARP settings in the /etc/sysctl.conf configuration file for arp_announce and arp_ignore is set to 0 to facilitate the use of local target IP address configured on any interface and reply for any local target IP address, configured on any interface
- The SSHD service allows the Controller host to communicate directly with Worker hosts via password-less SSH when adding the Worker hosts to the HPE Container Platform deployment. This script updates the following fields in /etc/ssh/sshd_config file:
  - PubkeyAuthentication=yes
  - AuthorizedKeysFile=.ssh/authorized_keys
  - PermitRootLogin=yes
- Downloading yum repos - bluedata-bdmgmt-.el7 bluedata-troubleshoot-.el7 bluedata-webui-.el7 bluedata-datatap-.el7 bluedata-bdconfig-.el7 openvswitch-2.5.2-1.el7 yum-utils sos python-requests python-requests-kerberos python-argparse python-boto python-urllib3 policycoreutils-python python-dateutil ceph-common httpd mod_ssl mod_wsgi django chrony bind-utils bc lvm2 parted autofs rpcbind libcgroup-tools psmisc nfs-utils python-ipaddr python-iniparse patch curl wget openssh-clients python-setuptools createrepo openldap-clients docker selinux-policy python-devel python-cffi python-virtualenv python-dateutil libxml2-devel libxslt-devel openssl-devel device-mapper-persistent-data dnsmasq haproxy socat
- Reboot the server once all the above tasks are completed

For more information on the configuring requirements for HPCP nodes, refer to the documentation at http://docs.bluedata.com/50_operating-system-requirements and http://docs.bluedata.com/50_configuration-requirements

## Installation
1. Enable Python3 and Ansible Environment as mentioned in "Installer machine" section of deployment guide.
2. Change the current working directory to "prepare_hpecp_hosts" using the following command
   ```
   # cd BASE_DIR/prepare_hpecp_hosts
   ```
  Note: BASE_DIR is defined and set in "Installer machine" section in deployment guide.

3. Update the input file hosts and provide the IP addresses of the hosts which needs to be configured with the prerequisites for HPECP installation.
    ```
    vi hosts
    ```
    Example values for the hosts file is as follows.
    ```
    [hpecp_nodes]
    # HPECP controller nodes
    20.0.x.x
    20.0.x.x
    20.0.x.x

    # HPECP gateway nodes
    20.0.x.x
    20.0.x.x    

    # HPECP worker nodes
    20.0.x.x
    20.0.x.x
    20.0.x.x
    20.0.x.x
    20.0.x.x
    20.0.x.x    
    ```
4. Update the secret.yml ansible vault file using the following command to provide the Red Hat Subscription Manager credentials. 
    ```
    ansible-vault edit secret.yml
    ```
    Example values for the secret.yml file is as follows.
    ```
    rhsub_password: "<redhat_subscription_manager_password>"
    rhsub_username: "<redhat_subscription_manager_username>"
    ```

    Note: By default the forks parameter in Ansible is a very limited to 5. Update the Ansible configuration to increase the value to number of hosts that are getting configured using this playbook by executing the following command.
      ```
      # export ANSIBLE_FORKS=<number_of_hosts_present_in_the_ansible_inventory_file>
      ```

5. Execute the playbook using the following command.
    ```
    # ansible-playbook -i hosts prepare_host.yml --ask-vault-pass
    ```

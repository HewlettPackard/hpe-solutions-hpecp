## AUTOMATING DNS ENTRIES USING ANSIBLE  ##

NOTE:
-----
1. This playbook is currently working for TWENTYNET DNS server (20.1.1.254)
2. This code works with root user
3. As of the code works for creating "A" records in TWENTYNET DNS server (20.1.1.254)

VERSIONS:-
--------
The following versions are used during developing the ansible code
      Ansible = 2.9
      Python  = 3.6.x

PRE-REQUISITES:-
--------------
1. Python virtual environment (please refer [Installer section](https://hewlettpackard.github.io/hpe-solutions-hpecp/5.2-Synergy/Solution-Deployment/Host-Configuration.html#installer-machine) for creating python virtual environment in the Deployment Guide)

2. Ansible must be running

STEPS:-
-----
On The Ansible Controller 

1. Enable python virtual environment

2. Execute the following commands

   #yum install -y python-pip pywinrm

3. Based on your python version execute pywinrm

   #pip3 install pywinrm    ---> python3

   #pip install pywinrm     ---> python2

4. Navigate to the "dns" directory

   #cd Dns

5. Ping the twentynet dns server by firing below command

   #ansible all -i hosts -m win_ping

   NOTE: After executing above command, If user see any errors then that means DNS server is not pingable. Please cross verify the network connectiviy on installer machine. 

6. Install the following command

   #ansible-galaxy collection install community.windows

7. Update vars.yml with required details like ip address, hostname & sub domain

8. The following playbook creates record in forward lookup zone & reverse lookup zone

   #ansible-playbook -i hosts main.yml -vvv

9. To Delete the records

   #ansible-playbook -i hosts del.yml -vvv

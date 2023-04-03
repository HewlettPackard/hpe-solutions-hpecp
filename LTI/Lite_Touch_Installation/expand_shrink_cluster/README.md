# EXPANDING AND SHRINKING OF A COMPUTE CLUSTER IN ERE

This README describes the process required to expand or shrink an existing compute cluster with the help of automation scripts.

## PREREQUISITES

1. Refer to [Installer Machine](https://hewlettpackard.github.io/hpe-solutions-hpecp/5.6-DL/Solution-Deployment/Host-Configuration.html#installer-machine) section to set up the required python and ansible environment.

2. Python module 'requests'.

3. The hosts to be added or removed from the cluster must be in the available list of HOSTS.

4. An existing compute cluster.

5. Ansible must be installed


## PROCEDURE

- Enter the console username and password in the *config_secrets.json* file
  > ansible-vault edit config_secrets.json

- Enter the config details in the *user_input.json* file
  > vi user_input.json

- Run the ansible playbook
  > ansible-playbook expand_shrink.yml

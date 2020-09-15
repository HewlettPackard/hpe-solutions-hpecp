## Deploying HPE Ezmeral Container Platform using Ansible playbook

### Overview 

Usage of Ansible playbooks to deploy the HPE Ezmeral Container Platform is automated and eliminates manual intervention. Ansible playbooks provides the following functionalities for the installation user to deploy HPE Ezmeral Container Platform.

-   Install the controller node

-   Add gateway nodes, delete gateway nodes or enable gateway HA

-   Add and delete EPIC worker nodes

-   Enable or disable controller high availability

-   Add or remove hosts on the Kubernetes

-   Create or delete Kubernetes cluster

-   Create or delete tenants


### Prerequisites

-   Linux machine with Ansible 2.9.x and python 3.x as mentioned in "Installer machine" section of deployment guide.

-   Minimum five (5) nodes with SLES 15 SP1 (nodes can be VMs or bare metal).

-   Obtain the URL of the HPE Ezmeral Container Platform bundle (using S3 bucket) and download the bin file on installer and provide the executable permissions.


### Input files

-   Update the values in *vars.yml* and *hosts inventory file* according to your environment.

-   Use following command to edit *vars.yml* file


```
	ansible-vault edit group_vars/all/vars.yml 
```


### Sample input files

Sample hosts inventory file looks like:

```

	[local]
	localhost            ansible_connection=local ansible_python_interpreter=/opt/hpe/solutions/hpecp/hpcp_venv/bin/python

	[allnodes]
	controller-node           ansible_host=20.x.x.x
	worker-node-1             ansible_host=20.x.x.x
	worker-node-2             ansible_host=20.x.x.x
	worker-node-3             ansible_host=20.x.x.x
	gateway-node-1            ansible_host=20.x.x.x
	gateway-node-2            ansible_host=20.x.x.x
	epic-worker-1             ansible_host=20.x.x.x
	epic-worker-2             ansible_host=20.x.x.x

	[controller]
	controller-node           ansible_host=20.x.x.x

	[k8sclusternodes]
	worker-node-1             ansible_host=20.x.x.x
	worker-node-2             ansible_host=20.x.x.x
	worker-node-3             ansible_host=20.x.x.x

	[gateway]
	gateway-node-1            ansible_host=20.x.x.x
	gateway-node-2            ansible_host=20.x.x.x

	[epicworkers]
	epic-worker-1             ansible_host=20.x.x.x
	epic-worker-2             ansible_host=20.x.x.x
```

**NOTE**

Get ansible_python_interpreter value by running ```which python3``` command and assign this value to ansible_connection variable. 

Sample vars.yml can be found in the following path ```group_vars/all/vars.sample``` along with description of each input variable.

### Details of Playbook

HPE Ezmeral Container Platform can be deployed by running ```site.yml``` or by running individual playbooks. Each playbook description can be found further in this document

To build complete setup:

```
	ansible-playbook -i hosts site.yml  --ask-vault-pass
```
In case if user want to deploy through individual playbooks. Sequence of playbooks to be followed are:

```
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

In case if there is no requirement of controller ha, user can skip ```playbooks/controller-ha.yml```

### Playbook description

**site.yml**

- This playbook contains the script to deploy HPE Ezmeral Container platform starting from the controller until tenant configuration. 


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

### Playbooks Description

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
    - If platform **High Availability** is enabled, then the user cannot delete the Controller, Shadow Controller or Arbiter host from the Container Platform. 
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
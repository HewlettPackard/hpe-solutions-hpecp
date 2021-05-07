# Nimble Integration with Kubernetes Cluster.

This folder consists of scripts to integrate existing kubernetes cluster with HPE-Nimble Storage,

## Prerequisite.

 1. kubernetes version on the cluster : 1.18
 2. Ansible should be installed
 3. Python 3 should be installed
 4. HPECP cluster with minimum of 1 master and 2 worker nodes.

## steps 

**NOTE**
This script should be executed on master node. In case if the cluster has multiple master nodes, execute the script on any one of the master node. 

1. Generate the ssh keys using the command. 
   
	```
	 # ssh-keygen
	``` 
		
2. Copy the ssh-keys using the command.
    
	```
		# ssh-copy-id <master's node ip>
	```	

		
3. Navigate to the $BASE_DIR/Nimble-hpecp and edit the custom-secret.yaml file to enter the Nimble Credentials.


	```
	 # vi Custom-Secret.yaml 
    ```
	
	**Note** 
	* Kindly enter the Nimble ip address in "backend" field and Nimble credentials in "username" and "password" field.
	* After the successful completion of the script, "Custom-Secret.yaml" file will get deleted.
     
	 Example value of Custom-Secret.yaml

	```
	  apiVersion: v1
	  kind: Secret
 	  metadata:
  	  name: custom-secret
      namespace: hpecp
      stringData:
      serviceName: nimble-csp-svc
      servicePort: "8080"
      backend: <Nimble Ip>
      username: <Nimble username>
      password: <Nimble Password>

	```
	   
4.  Update the Drivers_details.yaml file with the Worker_Node, Nimble and CSI_Drivers URL.

	Example value of Drivers_details.yaml.
	 
	```
	 Worker_node: https://raw.githubusercontent.com/hpe-storage/co-deployments/master/yaml/csi-driver/v1.3.0/hpe-linux-config.yaml

     Nimble: https://raw.githubusercontent.com/hpe-storage/co-deployments/master/yaml/csi-driver/v1.3.0/nimble-csp.yaml

     CSI_Drivers: https://raw.githubusercontent.com/hpe-storage/co-deployments/master/yaml/csi-driver/v1.3.0/hpe-csi-k8s-1.18.yaml
	  
    ```
	 For the latest Urls kindly refer the link https://scod.hpedev.io/csi_driver/deployment.html#advanced_install 
		
5.  Edit the hosts file and enter the master node ip address or fqdn.

	```
	 vi hosts

	```

6.  Run the ansible playbook using the below command.
  
    ```
	 # ansible-playbook -i hosts Nimble.yaml
    ```
    **Note**
	* Kindly monitor the script execution and for any failure check the log file, "/tmp/my-pod.log" and then re-run the script.


# Encryption Configuration.

1. The secret consisting the credentials for Nimble are encrypted with base64 encryption.

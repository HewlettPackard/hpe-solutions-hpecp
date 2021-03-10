###
## Copyright (2021) Hewlett Packard Enterprise Development LP
##
## Licensed under the Apache License, Version 2.0 (the "License");
## You may not use this file except in compliance with the License.
## You may obtain a copy of the License at
##
## http://www.apache.org/licenses/LICENSE-2.0
##
## Unless required by applicable law or agreed to in writing, software
## distributed under the License is distributed on an "AS IS" BASIS,
## WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
## See the License for the specific language governing permissions and
## limitations under the License.
####

import yaml,json,os,subprocess,sys

servers = json.loads(sys.argv[1])

## variables to be used for creating dictionary with individual NodeRole and HostIP

server_list = {}
clusternodes = {}
controller = {}
gateway = {}
epicworker = {}  

## string variable to be used for the individual noderoles
server_string = ""
scontroller = ""
sclusternode = "" 
sgateway = ""
sepicworker  = ""
hosts = ""     

# Creating a dictionary with key as noderole and value as the HostIp
for elements in servers:
    server_list[elements['NodeRole'].lower()] = elements['Host_IP']
    hosts = hosts + elements['Hostname'] + " " + "GPU_Host=" + elements['GPU_Host'] + "\n"
        

for name,ip in server_list.items():
    if "clusternode" in name:
        clusternodes[name] = ip
    elif "controller" in name:
        controller[name] = ip
    elif "gateway" in name:
        gateway[name] = ip
    elif "epicworker" in name:
        epicworker[name] = ip
    else:
        print("kindly check the node role value in server file")

# getting the python interpreter

r=subprocess.getoutput('which python3')

# checking whether the file exists from before and deleting the same if it is there.
try:
    os.remove('../hosts')
except OSError:
    pass
with open('../hosts','a') as sample:

# inventory file for prepare_host
    sample.write("[sles_os]" + "\n")
    sample.write(hosts)

# inventory file for epictl
    sample.write("\n")
    sample.write("[controller]" + "\n" )
    for index,ip in enumerate(controller.values()):
        index+=1
        scontroller = scontroller + "controller-node-" + str(index) + "    " + "ansible_host=" + ip + "\n"
    sample.write(scontroller)

    sample.write("\n")
    sample.write("[K8sclusternodes]" + "\n" )
    for index,ip in enumerate(clusternodes.values()):
        index+=1
        sclusternode = sclusternode + "worker-node-" + str(index) + "    " + "ansible_host=" + ip + "\n"       
    sample.write(sclusternode)


    sample.write("\n")
    sample.write("[gateway]" + "\n" )
    for index,ip in enumerate(gateway.values()):
        index+=1
        sgateway = sgateway + "gateway-node-" + str(index) + "    " + "ansible_host=" + ip + "\n"        
    sample.write(sgateway)
    
    sample.write("\n")
    sample.write("[epicworker]" + "\n" )
    for index,ip in enumerate(epicworker.values()):
        index+=1
        sepicworker = sepicworker + "epicworker-node-" + str(index) + "    " + "ansible_host=" + ip + "\n"
    sample.write(sepicworker)

# writing the python interpreter    
    sample.write("\n")
    sample.write("[local]" + "\n")
    sample.write("localhost" + "    " + "ansible_connection=local ansible_python_interpreter=" + r)
    sample.write("\n")

    sample.write("\n")
    sample.write("[allnodes]" + "\n" )
    server_string = scontroller + sclusternode + sgateway + sepicworker
    sample.write(server_string)    


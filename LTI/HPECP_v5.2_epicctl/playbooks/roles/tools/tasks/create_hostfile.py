import yaml,json,os,subprocess
from ansible_vault import Vault
vault = Vault('changeme')
data = vault.load(open('/root/new/hcp_epicctl_deployment/group_vars/all/vars.yml').read())

servers= data['servers']

l = {}
k = {}
c = {}
g = {}
e = {}
h = ""

for elements in servers:
    l[elements['NodeRole'].lower()] = elements['Host_IP']
    h = h + elements['Hostname'] + " " + "GPU_Host=" + elements['GPU_Host'] + "\n"
        

for name,ip in l.items():
    if "clusternode" in name:
        k[name] = ip
    elif "controller" in name:
        c[name] = ip
    elif "gateway" in name:
        g[name] = ip
    elif "epicworker" in name:
        e[name] = ip
    else:
        print("kindly check the node role value in server file")



r=subprocess.getoutput('which python3')
try:
    os.remove('/root/new/hcp_epicctl_deployment/hosts')
except OSError:
    pass
with open('/root/new/hcp_epicctl_deployment/hosts','a') as sample:

# inventory file for prepare_host
    sample.write("[sles_os]" + "\n")
    sample.write(h)
# inventory file for epictl
    sample.write("\n")
    sample.write("[controller]" + "\n" )
    for index,ip in enumerate(c.values()):
        index+=1
        sample.write("controller-node" +  "    " + "ansible_host=" + ip)
        sample.write("\n")

    sample.write("\n")
    sample.write("[K8sclusternodes]" + "\n" )
    for index,ip in enumerate(k.values()):
        index+=1
        sample.write("worker-node-" + str(index) + "    " + "ansible_host=" + ip)
        sample.write("\n")


    sample.write("\n")
    sample.write("[gateway]" + "\n" )
    for index,ip in enumerate(g.values()):
        index+=1
        sample.write("gateway-node-" + str(index) + "    " + "ansible_host=" + ip)
        sample.write("\n")
    
    sample.write("\n")
    sample.write("[epicworker]" + "\n" )
    for index,ip in enumerate(e.values()):
        index+=1
        sample.write("epicworker-node-" + str(index) + "    " + "ansible_host=" + ip)
        sample.write("\n")
    
    sample.write("\n")
    sample.write("[local]" + "\n")
    sample.write("localhost" + "    " + "ansible_connection=local ansible_python_interpreter=" + r)
    sample.write("\n")

    sample.write("\n")
    sample.write("[allnodes]" + "\n" )
    for index,ip in enumerate(c.values()):
        index+=1
        sample.write("controller-node" +  "    " + "ansible_host=" + ip)
        sample.write("\n")
    
    
    for index,ip in enumerate(k.values()):
        index+=1
        sample.write("worker-node-" + str(index) + "    " + "ansible_host=" + ip)
        sample.write("\n")
    
    
    for index,ip in enumerate(g.values()):
        index+=1
        sample.write("gateway-node-" + str(index) + "    " + "ansible_host=" + ip)
        sample.write("\n")
    
    
    for index,ip in enumerate(e.values()):
        index+=1
        sample.write("epicworker-node-" + str(index) + "    " + "ansible_host=" + ip)
        sample.write("\n")
    
#    for index,ip 
            

        
#print(l)
#print(m)
#print(w)

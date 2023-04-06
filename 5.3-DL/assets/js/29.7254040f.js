(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{475:function(t,s,a){t.exports=a.p+"assets/img/SD-DO-1.907fea54.png"},553:function(t,s,a){"use strict";a.r(s);var e=a(45),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"deploying-operating-system-on-bare-metal-nodes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deploying-operating-system-on-bare-metal-nodes"}},[t._v("#")]),t._v(" Deploying operating system on bare-metal nodes")]),t._v(" "),e("p",[e("img",{attrs:{src:a(475),alt:""}})]),t._v(" "),e("p",[e("strong",[t._v("Figure 13:")]),t._v(" High Level Flow diagram of the OS Deployment Process")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("PREREQUISITES")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Centos 7 "),e("RouterLink",{attrs:{to:"/Solution-Deployment/host-configuration.html#installer-machine"}},[t._v("Installer machine")]),t._v(" with the following configurations is essential to initiate the OS deployment process.")],1),t._v(" "),e("ol",[e("li",[e("p",[t._v('At least 1.5TB disk space (especially in the "/" partition), 8 CPU cores and 32GB RAM.')])]),t._v(" "),e("li",[e("p",[t._v("1 network interface with static IP address configured on same network as the management plane of the bare-metal servers and has access to internet.")])]),t._v(" "),e("li",[e("p",[t._v("Python 3.6 or above is present and latest version associated pip is present.")])]),t._v(" "),e("li",[e("p",[t._v("Ansible 2.9 should be installed")])]),t._v(" "),e("li",[e("p",[t._v("OS ISO image is present in the HTTP file path within the installer machine.")])]),t._v(" "),e("li",[e("p",[t._v("Ensure that SELinux status is disabled.")])])])])])]),t._v(" "),e("h2",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Enable Python3 and Ansible Environment as mentioned in "),e("RouterLink",{attrs:{to:"/Solution-Deployment/host-configuration.html#installer-machine"}},[t._v("Installer machine")]),t._v(" section of deployment guide.")],1)]),t._v(" "),e("li",[e("p",[t._v("Setup the installer machine.")])])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" setup.sh\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[t._v("Execute "),e("code",[t._v("setup.sh")]),t._v(' script to install requirements for os deployment. Script expects the installer machine OS type, Please enter "rhel7" if the installer machine OS type is RHEL or "centos7" if the installer machine OS type is CentOS.')])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),e("p",[t._v("Run the below command to fix any unwanted space, tabs error.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" -i "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'s/r$//'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("path"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/setup.sh\n")])])])]),t._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[t._v("There are 2 input files config.json and server_details.json, both of which needs to be updated with values for all the variables present within them.")])]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Open "),e("strong",[t._v("config.json")]),t._v(" file with the following command and add the details of web server and operating system to be installed.")]),t._v(" "),e("ul",[e("li",[t._v('Default password for Ansible Vault file "config.json" is '),e("strong",[t._v("changeme")]),t._v(".")])])]),t._v(" "),e("li",[e("p",[t._v("Command to edit config.json")])])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("   "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ansible-vault edit config.json\n")])])]),e("ul",[e("li",[t._v("Example values for the input configuration is as follows")])]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"HTTP_server_base_url"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://10.0.x.x/"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"HTTP_file_path"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/usr/share/nginx/html/"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"OS_type"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sles15"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"OS_image_name"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<os_iso_image_name_with_extension>"')]),t._v("  \n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),e("p",[t._v('Acceptable values for "OS_type" variable is "sles15" for SUSE 15 SP2.')])]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Open "),e("strong",[t._v("server_details.json")]),t._v(" with the following command and add the details of servers on which operating system is to be installed.")])]),t._v(" "),e("li",[e("p",[t._v("Command to edit server_details.json")])]),t._v(" "),e("li",[e("p",[t._v('Default password for Ansible Vault files "server_details.json" is '),e("strong",[t._v("changeme")]),t._v(".")])])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ansible-vault edit server_details.json\n")])])]),e("ul",[e("li",[t._v("Example values for the input configuration for deploying SLES 15 SP2 is as follows.")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),e("p",[t._v('It is recommended to provide a complex password for the "Host_Password" variable.')])]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[t._v("    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Server_serial_number"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MXxxxxxDP"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ILO_Address"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"10.0.x.x"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ILO_Username"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"username"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ILO_Password"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"password"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Hostname"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sles01.twentynet.local"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Bonding_Interface1"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eth*"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Bonding_Interface2"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eth*"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Host_IP"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"20.x.x.x"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Host_Username"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"root"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Host_Password"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Password"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Host_Netmask"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"255.x.x.x"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Host_Gateway"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"20.x.x.x"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Host_DNS"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"20.x.x.x"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Host_Search"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"twentynet.local"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"GPU_Host"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"yes"')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Server_serial_number"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MXxxxxxDQ"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ILO_Address"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"10.0.x.x"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ILO_Username"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"username"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ILO_Password"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"password"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Hostname"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sles02.twentynet.local"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Bonding_Interface1"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eth*"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Bonding_Interface2"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eth*"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Host_IP"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"20.0.x.x"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Host_Username"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"root"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Host_Password"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Password"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Host_Netmask"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"255.x.x.x"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Host_Gateway"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"20.x.x.x"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Host_DNS"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"20.x.x.x"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Host_Search"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"twentynet.local"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"GPU_Host"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"No"')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),e("p",[t._v('Acceptable values for "GPU_Host" variable is "yes" for host which has GPU cards and "No" for hosts which do not have GPU cards.')])]),t._v(" "),e("ol",{attrs:{start:"5"}},[e("li",[t._v("Executing the script to deploy operating system.")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" python3 deploy_os.py\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),e("p",[t._v("Generic settings done as part of kickstart file for SLES are as follows. It is recommended that the user reviews and modifies the kickstart files (autoinst.xml file) to suit their requirements.")]),t._v(" "),e("ul",[e("li",[t._v("Minimal Installation")]),t._v(" "),e("li",[t._v("Language - en_US")]),t._v(" "),e("li",[t._v("Keyboard & layout - US")]),t._v(" "),e("li",[t._v("Partition")]),t._v(" "),e("li",[t._v('/boot/efi ,fstype="vfat" ,size=500MiB')]),t._v(" "),e("li",[t._v("root, size = 150G")]),t._v(" "),e("li",[t._v("srv , size = 100G")]),t._v(" "),e("li",[t._v("swap, size = 62.96G")]),t._v(" "),e("li",[t._v("var, size = 100G")]),t._v(" "),e("li",[t._v("home, size = 25G"),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),e("p",[t._v("Specified Partitions are inline with HPECP implementation and is advised not to make changes to this.")])])]),t._v(" "),e("li",[t._v("timezone - America/NewYork")]),t._v(" "),e("li",[t._v("NIC teaming is performed with devices as specified in Bonding_Interface field of input_files/server_details.json input file. It is further assigned with the Host_IP, Netmask,Domain as defined in the input_files/server_details.json input file.\n"),e("ul",[e("li",[t._v("Signature handling (accepting file without checksum, with non-trusted gpg key, unsigned file etc) is disabled by default to avoid any pop-ups and warnings and have an unattended installation. These properties can be modified according to the requirements in kickstart_files/autoinst.xml.")])])])]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("accept_file_without_checksum")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("config:")]),t._v("type")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("boolean"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("true"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("accept_file_without_checksum")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n+ "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("accept_non_trusted_gpg_key")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("config:")]),t._v("type")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("boolean"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("true"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("accept_non_trusted_gpg_key")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n+ "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("accept_unknown_gpg_key")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("config:")]),t._v("type")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("boolean"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("true"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("accept_unknown_gpg_key")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n+ "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("accept_unsigned_file")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("config:")]),t._v("type")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("boolean"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("true"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("accept_unsigned_file")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n+ "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("accept_verification_failed")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("config:")]),t._v("type")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("boolean"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("false"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("accept_verification_failed")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n+ "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("import_gpg_key")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("config:")]),t._v("type")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("boolean"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("true"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("import_gpg_key")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])])}),[],!1,null,null,null);s.default=n.exports}}]);
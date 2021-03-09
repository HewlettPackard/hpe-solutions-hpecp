(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{479:function(t,s,a){t.exports=a.p+"assets/img/SD-DO-1.907fea54.png"},567:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"deploying-operating-system-on-bare-metal-nodes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#deploying-operating-system-on-bare-metal-nodes"}},[t._v("#")]),t._v(" Deploying operating system on bare-metal nodes")]),t._v(" "),n("p",[n("img",{attrs:{src:a(479),alt:""}}),t._v(" "),n("strong",[t._v("Figure 14.")]),t._v(" High Level Flow diagram of the OS Deployment Process")]),t._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("PREREQUISITES")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("Centos 7 "),n("a",{attrs:{href:"#installer-machine"}},[t._v("Installer machine")]),t._v(" with the following\nconfigurations is essential to initiate the OS deployment process.")]),t._v(" "),n("ol",[n("li",[n("p",[t._v('At least 200 GB disk space (especially in the "/" partition), 4\nCPU cores and 8GB RAM.')])]),t._v(" "),n("li",[n("p",[t._v("1 network interface with static IP address configured on same\nnetwork as the management plane of the bare-metal servers and has access\nto internet.")])]),t._v(" "),n("li",[n("p",[t._v("Python 3.6 or above is present and latest version associated pip is\npresent.")])]),t._v(" "),n("li",[n("p",[t._v("Ansible 2.9 should be installed")])]),t._v(" "),n("li",[n("p",[t._v("OS ISO image is present in the HTTP file path within the installer\nmachine.")])]),t._v(" "),n("li",[n("p",[t._v("Ensure that SELinux status is disabled.")])])])]),t._v(" "),n("li",[n("p",[t._v("SUSE hosts")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("2 network interfaces for the production network")])]),t._v(" "),n("li",[n("p",[t._v("1 local drive to be used as the boot device")])]),t._v(" "),n("li",[n("p",[t._v("Boot mode is set to UEFI")])]),t._v(" "),n("li",[n("p",[t._v("Boot order - Hard disk")])]),t._v(" "),n("li",[n("p",[t._v("Secure Boot - disabled")])])])])])]),t._v(" "),n("h2",{attrs:{id:"installation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),n("ol",[n("li",[n("p",[t._v('Enable Python3 and Ansible Environment as mentioned in "Installer\nmachine" section of deployment guide.')])]),t._v(" "),n("li",[n("p",[t._v("Setup the installer machine.")])])]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" setup.sh\n")])])]),n("ol",{attrs:{start:"3"}},[n("li",[t._v("Execute "),n("code",[t._v("setup.sh")]),t._v(' script to install requirements for os deployment. Script expects the installer machine OS type, Please enter "rhel7" if the installer machine OS type is RHEL or "centos7" if the installer machine OS type is Cent OS.')])]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),n("p",[t._v("Run the below command to fix any unwanted space, tabs error.")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" -i "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'s/r$//'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("path"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/setup.sh\n")])])])]),t._v(" "),n("ol",{attrs:{start:"4"}},[n("li",[n("p",[t._v("There are 2 input files config.json and server_details.json, both of\nwhich needs to be updated with values for all the variables present\nwithin them.")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("Open "),n("strong",[t._v("config.json")]),t._v(" file with the following command and add the details\nof web server and operating system to be installed.")])]),t._v(" "),n("li",[n("p",[t._v('Default password for Ansible Vault file "config.json" is changeme.')])]),t._v(" "),n("li",[n("p",[t._v("Command to edit config.json")])])]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ansible-vault edit config.json\n")])])]),n("ul",[n("li",[t._v("Example values for the input configuration is as follows")])]),t._v(" "),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"HTTP_server_base_url"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://10.0.x.x/"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"HTTP_file_path"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/usr/share/nginx/html/"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"OS_type"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sles15"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"OS_image_name"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<os_iso_image_name_with_extension>"')]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),n("p",[t._v('Acceptable values for "OS_type" variable is "sles15" for SUSE 15\nSP2.')])]),t._v(" "),n("ul",[n("li",[n("p",[t._v("Open "),n("strong",[t._v("server_details.json")]),t._v(" with the following command and add the\ndetails of servers on which operating system is to be installed.")])]),t._v(" "),n("li",[n("p",[t._v("Command to edit server_details.json")])]),t._v(" "),n("li",[n("p",[t._v('Default password for Ansible Vault files "server_details.json" is\nchangeme.')])])]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ansible-vault edit server_details.json\n")])])]),n("ul",[n("li",[t._v("Example values for the input configuration for deploying SLES 15 SP2 is\nas follows.")])]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),n("p",[t._v('It is recommended to provide a complex password for the\n"Host_Password" variable.')])]),t._v(" "),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Server_serial_number"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MXxxxxxDP"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ILO_Address"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"10.0.x.x"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ILO_Username"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"username"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ILO_Password"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"password"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Hostname"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sles01.twentynet.local"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Bonding_Interface1"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eth*"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Bonding_Interface2"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eth*"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Host_IP"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"20.x.x.x"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Host_Username"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"root"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Host_Password"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Password"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Host_Netmask"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"255.x.x.x"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Host_Gateway"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"20.x.x.x"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Host_DNS"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"20.x.x.x"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Host_Search"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"twentynet.local"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"GPU_Host"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"yes"')]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Server_serial_number"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MXxxxxxDQ"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ILO_Address"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"10.0.x.x"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ILO_Username"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"username"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ILO_Password"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"password"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Hostname"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sles02.twentynet.local"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Bonding_Interface1"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eth*"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Bonding_Interface2"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eth*"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Host_IP"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"20.0.x.x"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Host_Username"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"root"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Host_Password"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Password"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Host_Netmask"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"255.x.x.x"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Host_Gateway"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"20.x.x.x"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Host_DNS"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"20.x.x.x"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Host_Search"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"twentynet.local"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"GPU_Host"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"No"')]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),n("p",[t._v("For synergy servers the bonding interface will be eth0 and eth1\nrespectively.")])]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),n("p",[t._v('NOTE: Acceptable values for "GPU_Host" variable is "yes" for host\nwhich has GPU cards and "No" for hosts which do not have GPU cards.')])])]),t._v(" "),n("li",[n("p",[t._v("Executing the script to deploy operating system.")])])]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" python3 deploy_os.py\n")])])]),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),n("p",[t._v("Generic settings done as part of kickstart file for SLES are as\nfollows. It is recommended that the user reviews and modifies the\nkickstart files (autoinst.xml file) to suit their requirements.")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("Minimal Installation")])]),t._v(" "),n("li",[n("p",[t._v("Language - en_US")])]),t._v(" "),n("li",[n("p",[t._v("Keyboard & layout - US")])]),t._v(" "),n("li",[n("p",[t._v("Partition")])]),t._v(" "),n("li",[n("p",[t._v('/boot/efi ,fstype="vfat" ,size=500MiB')])]),t._v(" "),n("li",[n("p",[t._v("root, size = 150G")])]),t._v(" "),n("li",[n("p",[t._v("srv , size = 100G")])]),t._v(" "),n("li",[n("p",[t._v("swap, size = 62.96G")])]),t._v(" "),n("li",[n("p",[t._v("var, size = 100G")])]),t._v(" "),n("li",[n("p",[t._v("home, size = 25G")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),n("p",[t._v("Specified Partitions are inline with HPECP implementation and is\nadvised not to make changes to this.")])])]),t._v(" "),n("li",[n("p",[t._v("timezone - America/NewYork")])]),t._v(" "),n("li",[n("p",[t._v("NIC teaming is performed with devices as specified in\nBonding_Interface field of input_files/server_details.json input file.\nIt is further assigned with the Host_IP, Netmask,Domain as defined in\nthe input_files/server_details.json input file.")])]),t._v(" "),n("li",[n("p",[t._v("Signature handling (accepting file without checksum, with non-trusted\ngpg key, unsigned file etc) is disabled by default to avoid any pop-ups\nand warnings and have an unattended installation. These properties can\nbe modified according to the requirements in\nkickstart_files/autoinst.xml.")])])]),t._v(" "),n("div",{staticClass:"language-xml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("accept_file_without_checksum")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("config:")]),t._v("type")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("boolean"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("true"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("accept_file_without_checksum")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n+ "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("accept_non_trusted_gpg_key")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("config:")]),t._v("type")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("boolean"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("true"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("accept_non_trusted_gpg_key")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n+ "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("accept_unknown_gpg_key")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("config:")]),t._v("type")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("boolean"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("true"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("accept_unknown_gpg_key")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n+ "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("accept_unsigned_file")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("config:")]),t._v("type")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("boolean"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("true"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("accept_unsigned_file")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n+ "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("accept_verification_failed")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("config:")]),t._v("type")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("boolean"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("false"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("accept_verification_failed")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n+ "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("import_gpg_key")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("config:")]),t._v("type")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("boolean"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("true"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("import_gpg_key")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);
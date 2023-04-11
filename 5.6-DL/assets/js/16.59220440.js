(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{241:function(e,a,s){e.exports=s.p+"assets/img/figure11.19d77189.png"},343:function(e,a,s){e.exports=s.p+"assets/img/figure12.38b22073.png"},418:function(e,a,s){"use strict";s.r(a);var t=s(14),n=Object(t.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"automated-hpe-ezmeral-runtime-enterprise-deployment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#automated-hpe-ezmeral-runtime-enterprise-deployment"}},[e._v("#")]),e._v(" Automated HPE Ezmeral Runtime Enterprise deployment")]),e._v(" "),a("p",[e._v("Usage of Ansible playbooks to deploy the HPE Ezmeral Runtime Enterprise is automated and eliminates manual intervention. Ansible playbooks provides the following functionalities for the installation user to deploy HPE Ezmeral Runtime Enterprise.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Install the SLES OS on bare metal servers")])]),e._v(" "),a("li",[a("p",[e._v("Prepare the hosts for HPERE implementation")])]),e._v(" "),a("li",[a("p",[e._v("Setup docker-registry to deploy ere through air-gapped environment")])]),e._v(" "),a("li",[a("p",[e._v("Install the controller nodes")])]),e._v(" "),a("li",[a("p",[e._v("Add gateway nodes, delete gateway nodes or enable gateway HA")])]),e._v(" "),a("li",[a("p",[e._v("Add and delete Shadow & Arbiter Controller")])]),e._v(" "),a("li",[a("p",[e._v("Enable and Disable controller HA")])]),e._v(" "),a("li",[a("p",[e._v("Add or remove hosts on the Kubernetes cluster")])]),e._v(" "),a("li",[a("p",[e._v("Create and delete Kubernetes cluster")])]),e._v(" "),a("li",[a("p",[e._v("Create and delete tenants")])])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Prerequisites")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Centos 7 or RHEL "),a("RouterLink",{attrs:{to:"/Solution-Deployment/Host-Configuration.html#installer-machine"}},[e._v("Installer machine")]),e._v(" with the following configurations is essential to initiate the OS deployment process.")],1),e._v(" "),a("ol",[a("li",[e._v("At least 600 GB disk space (especially in the “/” partition), 4 CPU cores and 8GB RAM.")]),e._v(" "),a("li",[e._v("1 network interface with static IP address configured on same network as the management plane of the bare-metal servers and has access to internet.")]),e._v(" "),a("li",[e._v("Python 3.6 or above is present and latest version associated pip is present.")]),e._v(" "),a("li",[e._v("Ansible 2.9 should be installed")]),e._v(" "),a("li",[e._v("OS ISO image is present in the HTTP file path within the installer machine.")]),e._v(" "),a("li",[e._v("Ensure that SELinux status is disabled.")])])]),e._v(" "),a("li",[a("p",[e._v("Minimum five (5) nodes with SLES 15 SP3 or CentOS 7.6 or higher version or RHEL (nodes can be VMs or BareMetal).")])]),e._v(" "),a("li",[a("p",[e._v("Playbooks are used to download the tools (jq). They should be placed in /usr/local/bin.")])]),e._v(" "),a("li",[a("p",[e._v("Obtain the URL of the HPE Ezmeral Runtime Enterprise bundle (using s3 bucket).")])])])]),e._v(" "),a("p",[a("img",{attrs:{src:s(241),alt:""}})]),e._v(" "),a("p",[a("strong",[e._v("Figure 11.")]),e._v(" Workflow diagram for Automated HPE Ezmeral Runtime Enterprise deployment")]),e._v(" "),a("h2",{attrs:{id:"automated-deployment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#automated-deployment"}},[e._v("#")]),e._v(" Automated Deployment")]),e._v(" "),a("ul",[a("li",[e._v("Update the values in "),a("em",[e._v("vars.yml")]),e._v(" and "),a("em",[e._v("hosts inventory file")]),e._v(" according to your environment.")])]),e._v(" "),a("h3",{attrs:{id:"input-file-changes-for-deploying-operating-system-on-bare-metal-nodes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#input-file-changes-for-deploying-operating-system-on-bare-metal-nodes"}},[e._v("#")]),e._v(" Input file changes for deploying operating system on bare-metal nodes")]),e._v(" "),a("p",[a("img",{attrs:{src:s(343),alt:""}})]),e._v(" "),a("p",[a("strong",[e._v("Figure 12:")]),e._v(" High Level Flow diagram of the OS Deployment Process")]),e._v(" "),a("h3",{attrs:{id:"suse-hosts-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#suse-hosts-configuration"}},[e._v("#")]),e._v(" SUSE hosts Configuration")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("* 2 network interfaces for the production network\n\n* 1 local drive to be used as the boot device\n\n* Boot mode is set to UEFI\n\n* Boot order – Hard disk\n\n* Secure Boot – disabled\n")])])]),a("p",[e._v("The vars.yml file contains config and server section, both of which needs to be updated with values for all the variables present within them.")]),e._v(" "),a("p",[e._v("a. Edit config section in vars.yml file present in “$BASE_DIR/Lite_Touch_Installation/group_vars/all/” folder with the following command and add the details of web server and operating system to be installed.\nDefault password for Ansible Vault file “vars.yml” is "),a("strong",[e._v("changeme")]),e._v(".")]),e._v(" "),a("p",[e._v("Command to edit vars.yml")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ansible-vault edit vars.yml\n")])])]),a("p",[e._v("b. Example values for the input configuration is as follows")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n“HTTP_server_base_url” "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" “http://10.0.x.x/”,\n“HTTP_file_path” "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" “/usr/share/nginx/html/”,\n“OS_type” "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" “sles15”,\n“OS_image_name” "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" “"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("os_iso_image_name_with_extension"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("”\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),a("p",[e._v("Acceptable values for “OS_type” variable is “sles15” for SUSE 15 SP3.")])]),e._v(" "),a("p",[e._v("c. Edit server section in vars.yml file present in “$BASE_DIR/Lite_Touch_Installation/group_vars/all/” folder\nExample values for the input configuration for deploying SLES 15 SP3 is as follows.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("ul",[a("li",[e._v("It is recommended to provide a complex password for the “Host_Password” variable.")])])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        “Server_serial_number” "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" “MXxxxxxDP”,\n        “ILO_Address” "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" “10.0.x.x”,\n        “ILO_Username” "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" “username”,\n        “ILO_Password” "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" “password”,\n        “Hostname” "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" “sles01.twentynet.local”,\n        “NodeRole” "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" “controller”,\n        “Bonding_Interface1” "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" “eth*”,\n        “Bonding_Interface2” "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" “eth*”,\n        “Host_IP” "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" “20.x.x.x”,\n        “Host_Username” "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" “root”,\n        “Host_Password” "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" “Password”,\n        “Host_Netmask” "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" “255.x.x.x”,\n        “Host_Prefix” "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" “8”,\n        “Host_Gateway” "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" “20.x.x.x”,\n        “Host_DNS” "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" “20.x.x.x”,\n        “Host_Search” "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" “twentynet.local”,\n        “GPU_Host” "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" “yes”\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(",\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        “Server_serial_number” "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" “MXxxxxxDQ”,\n        “ILO_Address” "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" “10.0.x.x”,\n        “ILO_Username” "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" “username”,\n        “ILO_Password” "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" “password”,\n        “Hostname” "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" “sles02.twentynet.local”,\n        “NodeRole” "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" “gateway”,\n        “Bonding_Interface1” "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" “eth*”,\n        “Bonding_Interface2” "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" “eth*”,\n        “Host_IP” "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" “20.0.x.x”,\n        “Host_Username” "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" “root”,\n        “Host_Password” "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" “Password”,\n        “Host_Netmask” "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" “255.x.x.x”,\n        “Host_Prefix” "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" “8”,\n        “Host_Gateway” "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" “20.x.x.x”,\n        “Host_DNS” "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" “20.x.x.x”,\n        “Host_Search” "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" “twentynet.local”,\n        “GPU_Host” "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" “No”\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),a("p",[e._v("Acceptable values for “GPU_Host” variable is “yes” for host which has GPU cards and “No” for hosts which do not have GPU cards.")]),e._v(" "),a("p",[e._v("Generic settings done as part of kickstart file for SLES are as follows. It is recommended that the user reviews and modifies the kickstart files (autoinst.xml file) to suit their requirements.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Minimal Installation")])]),e._v(" "),a("li",[a("p",[e._v("Language – en_US")])]),e._v(" "),a("li",[a("p",[e._v("Keyboard & layout – US")])]),e._v(" "),a("li",[a("p",[e._v("Partition")])]),e._v(" "),a("li",[a("p",[e._v("/boot/efi ,fstype=”vfat” ,size=500MiB")])]),e._v(" "),a("li",[a("p",[e._v("root, size = 150G")])]),e._v(" "),a("li",[a("p",[e._v("srv , size = 100G")])]),e._v(" "),a("li",[a("p",[e._v("swap, size = 62.96G")])]),e._v(" "),a("li",[a("p",[e._v("var, size = 100G")])]),e._v(" "),a("li",[a("p",[e._v("home, size = 25G")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),a("p",[e._v("Specified Partitions are inline with HPERE implementation and is advised not to make changes to this.")])])]),e._v(" "),a("li",[a("p",[e._v("timezone – America/NewYork")])]),e._v(" "),a("li",[a("p",[e._v("NIC teaming is performed with devices as specified in Bonding_Interface field of vars.yml, server section of the input file.\nIt is further assigned with the Host_IP, Netmask, Domain as defined in the input file.")]),e._v(" "),a("ul",[a("li",[e._v("Signature handling (accepting file without checksum, with non-trusted gpg key, unsigned file etc) is disabled by default to avoid any pop-ups and warnings and have an unattended installation. These properties can be modified according to the requirements in kickstart_files/autoinst.xml.")])])])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("accept_file_without_checksum\nconfig:type"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("”boolean”"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("true"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("/accept_file_without_checksum"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n\n+ "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("accept_non_trusted_gpg_key\nconfig:type"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("”boolean”"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("true"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("/accept_non_trusted_gpg_key"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n\n+ "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("accept_unknown_gpg_key\nconfig:type"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("”boolean”"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("true"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("/accept_unknown_gpg_key"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n\n+ "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("accept_unsigned_file\nconfig:type"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("”boolean”"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("true"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("/accept_unsigned_file"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n\n+ "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("accept_verification_failed\nconfig:type"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("”boolean”"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("false"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("/accept_verification_failed"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n\n+ "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("import_gpg_key\nconfig:type"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("”boolean”"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("true"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("/import_gpg_key"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])])]),e._v(" "),a("h3",{attrs:{id:"input-file-changes-to-prepare-sles-15-hosts-for-hpere-installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#input-file-changes-to-prepare-sles-15-hosts-for-hpere-installation"}},[e._v("#")]),e._v(" Input file changes to prepare SLES 15 hosts for HPERE installation")]),e._v(" "),a("ul",[a("li",[e._v("Update vars.yml file with required detail for registration.")])]),e._v(" "),a("p",[e._v("Edit vars.yml present in “$BASE_DIR/Lite_Touch_Installation/group_vars/all/” folder with the following command and enter the details listed below.\nCommand to edit vars.yml")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ansible-vault edit vars.yml\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("Default password for Ansible Vault file vars.yml is “changeme”.")])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Mode: There are two modes of registering the server to registration server, RMT and User Email. Permissible values are 1 (For registering the SUSE server to RMT) and 2 (For registering the SUSE server using Email)")])]),e._v(" "),a("li",[a("p",[e._v("Mode 1: Registration using RMT server.")]),e._v(" "),a("ul",[a("li",[e._v("Update the Mode:1 section in vars.yml with the following inputs\n"),a("ol",[a("li",[e._v("RMT_URL: RMT server ip address.")])])])])]),e._v(" "),a("li",[a("p",[e._v("Mode 2: Registration using User Email Id and RegCode")]),e._v(" "),a("ul",[a("li",[e._v("Update the Mode:2 section in vars.yml with the following inputs\n"),a("ol",[a("li",[e._v("email: User Email-id which will be used for server registration.")]),e._v(" "),a("li",[e._v("base_code:- Registration code which will be used for server registration.")]),e._v(" "),a("li",[e._v("caas_code:- Registration code for caas module.")]),e._v(" "),a("li",[e._v("ha_code:- Registration code for ha module.")])])])])])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Note:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("1.  Email and Reg_codes are applicable only for Mode 2 else leave blank.\n2.  sles_packages: sles modules which will be installed separated by comma.\n3.  Zypper_packages: 27zypper packages which will be installed separated by comma.\n")])])])]),e._v(" "),a("ul",[a("li",[e._v("Example values for the registration details in vars.yml are as follows.")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#Mode 1 for RMT Registration and Mode 2 for User Registration")]),e._v("\n\nMode: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("\nEmail: jim. ***@***.com\nbase_code: 8BAB9EC****\ncaas_code: 21E02******\nha_code: 87D73*****\nRMT_URL: http://20.**.**.**\n\nsles_packages: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("sle-module-public-cloud/15.6.0/x86_64,\nsle-module-legacy/15.6.0/x86_64, sle-module-python2/15.6.0/x86_64,\nsle-module-containers/15.6.0/x86_64,\nsle-module-basesystem/15.6.0/x86_64,\nsle-module-desktop-applications/15.6.0/x86_64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n\nzypper_packages: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("iputils, bind-utils, autofs, libcgroup1,kernel-default-devel,gcc-c++,perl,pciutils,rsyslog,firewalld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Note:")]),e._v(" "),a("p",[e._v("Don’t modify the sles_packages and zypper_pacakges as these packages are required for HPERE implementation changes made to this section may impact the installation.")]),e._v(" "),a("p",[e._v("During the playbook execution, while installing the packageHub Module it might throw an error in the first attempt. This is a known issue from SUSE and is being taken care by re-installing the module.")]),e._v(" "),a("p",[e._v("Link for reference "),a("a",{attrs:{href:"https://www.suse.com/support/kb/doc/?id=000019505",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.suse.com/support/kb/doc/?id=000019505"),a("OutboundLink")],1)]),e._v(" "),a("ul",[a("li",[e._v("In case the script fails while checking the internet connection from the hosts, kindly cross verify the internet from the hosts and then re-run the script.")]),e._v(" "),a("li",[e._v("While checking the apparomor service the error is expected as it verifies the apparmor service status on the hosts and if it running, it will stop and disable the same.")])])]),e._v(" "),a("h3",{attrs:{id:"automated-ere-deployment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#automated-ere-deployment"}},[e._v("#")]),e._v(" Automated ERE Deployment")]),e._v(" "),a("ul",[a("li",[e._v("Use following command to edit "),a("em",[e._v("vars.yml")]),e._v(" file. The vars.yml file contains the configuration environment variables and host inventory includes the host ip addresses.")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$BASE_DIR")]),e._v("/Lite_Touch_Installation/\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ansible-vault edit group_vars/all/vars.yml\n")])])]),a("p",[e._v("HPERE can be deployed by running "),a("code",[e._v("site.yml")]),e._v(" or by running individual playbooks. Each playbook description can be found further in this document.")]),e._v(" "),a("ul",[a("li",[e._v("To build complete setup:")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ansible-playbook "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts site.yml --ask-vault-pass\n")])])]),a("ul",[a("li",[e._v("In case if user want to deploy through individual playbooks. Sequence of playbooks to be followed are:")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ansible-playbook "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/os_deployment.yml –ask-vault-pass\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ansible-playbook "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/prepare_hosts.yml –ask-vault-pass\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ansible-playbook "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/download-tools.yml –ask-vault-pass\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ansible-playbook "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/controller.yml –ask-vault-pass\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ansible-playbook "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/gateway-add.yml –ask-vault-pass\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ansible-playbook "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/shadow-arbiter-add.yml –ask-vault-pass\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ansible-playbook "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/controller-ha.yml –ask-vault-pass\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ansible-playbook "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/k8s-add-hosts.yml –ask-vault-pass\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ansible-playbook "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/k8s-create-cluster.yml –ask-vault-pass\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ansible-playbook "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/k8s-create-tenant.yml –ask-vault-pass\n")])])]),a("p",[a("strong",[e._v("Playbooks Details:")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("site.yml")])])]),e._v(" "),a("p",[e._v("This playbook contains the script to deploy HPE Ezmeral Runtime Enterprise starting from the OS_deployment until tenant configuration.")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("OS_deployment.yml")])])]),e._v(" "),a("p",[e._v("This playbook contains the scripts to deploy SLES_OS on bare metal servers.")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Prepare_hosts.yml")])])]),e._v(" "),a("p",[e._v("This playbook contains the script to prepare the hosts for HPERE deployment.")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Download-tools.yml")])])]),e._v(" "),a("p",[e._v("This playbook downloads the jq under "),a("code",[e._v("/usr/local/bin")]),e._v(" in the installer machine and provides executable permissions.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),a("p",[e._v("In case of facing any issues while running download-tools.yml playbook,Download tools manually from the following links, place it under "),a("code",[e._v("/usr/local/bin")]),e._v(" and change executable permissions.")]),e._v(" "),a("ul",[a("li",[e._v("jq (https://github.com/stedolan/jq/releases/download/jq-1.6/jq-linux64)")])])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("controller.yml")])])]),e._v(" "),a("p",[e._v("This playbook contains the script to deploy controller and configuring the controller based on the configuaration details provided in the vars.yml file.")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Gateway-add.yml")])])]),e._v(" "),a("p",[e._v("This playbook contains the script to add gateways. User can add multiple gateways by providing ip and host information in vars.yml file.")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Shadow-arbiter-add.yml")])])]),e._v(" "),a("p",[e._v("This playbook contains the script to add arbiter and shadow controller nodes. Provide arbiter and shadow  details in vars.yml.")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Controller-ha.yml")])])]),e._v(" "),a("p",[e._v("This playbook contains the script to enable controller ha. Users need to provide virtual ip with FQDN in vars.yml file to configure controller ha. Please make sure virtual ip details present in DNS entries.")]),e._v(" "),a("p",[e._v("Users need to run "),a("code",[e._v("playbooks/shadow-arbiter-add.yml")]),e._v(" playbook first to add required arbiter and cshadow controller nodes. And then run playbooks/controller-ha.yml playbook.")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("K8s-add-hosts.yml")])])]),e._v(" "),a("p",[e._v("This playbook contains the script to add k8 nodes and Data Fabric nodes. Provide k8 nodes information in vars.yml file.")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("K8s-create-cluster.yml")])])]),e._v(" "),a("p",[e._v("This playbook contains the script to create ubernetes cluster and DataFabric cluster. Provide cluster details in vars.yml file.")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("k8s-create-tenant.yml")])])]),e._v(" "),a("p",[e._v("This playbook contains the script to create tenant. Provide tenant details in vars.yml file.")]),e._v(" "),a("p",[a("strong",[e._v("Uninstall Information:")])]),e._v(" "),a("p",[e._v("If user want to uninstall HPE Ezmeral Runtime Enterprise and start a fresh installation, use the following playbook.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ansible-playbook "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/uninstall-bds.yml –ask-vault-pass \n")])])]),a("p",[a("strong",[e._v("Other Playbooks:")])]),e._v(" "),a("p",[e._v("Run the following command to disable controller ha.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ansible-playbook "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/disable-controller-ha.yml –ask-vault-pass \n")])])]),a("p",[e._v("Run the following command to delete arbiter and shadow controller nodes.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ansible-playbook "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/shadow-arbiter-delete.yml –ask-vault-pass \n")])])]),a("p",[e._v("Run the following command to delete k8 nodes.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ansible-playbook "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/k8s-delete-hosts.yml –ask-vault-pass \n")])])]),a("p",[e._v("Run the following command to delete the tenant.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ansible-playbook "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/k8s-delete-tenant.yml –ask-vault-pass \n")])])]),a("p",[e._v("Run the following command to delete the cluster")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ansible-playbook "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/k8s-cluster-delete.yml –ask-vault-pass \n")])])]),a("p",[e._v("Run the following command to delete gateway.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ansible-playbook playbooks/gateway-delete.yml –ask-vault-pass\n")])])]),a("h2",{attrs:{id:"ere-deployment-through-air-gapped-environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ere-deployment-through-air-gapped-environment"}},[e._v("#")]),e._v(" ERE deployment through air-gapped environment")]),e._v(" "),a("p",[e._v("If user want ERE deployment through airgap mode, then perform below steps:")]),e._v(" "),a("ul",[a("li",[e._v("To setup docker registry update the details under airgap section in vars.yml and run below command to setup docker registry (registry server).")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ansible-playbook "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/setup_docker_registry.yml –ask-vault-pass \n")])])]),a("p",[a("strong",[e._v("setup_docker_registry.yml")])]),e._v(" "),a("p",[e._v("This playbook contains the script to create, configure docker registry and copy all required docker images based on the configuaration details provided in the vars.yml file.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("NOTE:")]),e._v(" "),a("p",[e._v("Above individual docker-registry playbook setup docker-registry once registry is up user can run site.yml for complete ere deployment through airgap mode.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ansible-playbook "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts site.yml --ask-vault-pass\n")])])]),a("p",[e._v('For more information check read.me file under "ERE deployment through air-gapped environment" in git repo '),a("a",{attrs:{href:"https://github.com/HewlettPackard/hpe-solutions-hpecp/blob/master/LTI/Lite_Touch_Installation/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/HewlettPackard/hpe-solutions-hpecp/blob/master/LTI/Lite_Touch_Installation/README.md"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("For detailed steps, see the HPE Ezmeral Runtime Enterprise on HPE DL325 & DL385 Deployment guide available at,\n"),a("a",{attrs:{href:"https://hewlettpackard.github.io/hpe-solutions-hpecp/5.6-DL/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://hewlettpackard.github.io/hpe-solutions-hpecp/5.6-DL/"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{424:function(t,e,s){"use strict";s.r(e);var a=s(14),n=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"preparing-installer-machine"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#preparing-installer-machine"}},[t._v("#")]),t._v(" Preparing Installer Machine")]),t._v(" "),e("p",[t._v("This section outlines the steps to configure the automation environment and utilizes the automation environment to install SLES 15 SP3 operating system on each of the hosts and to deploy ERE 5.6.1.")]),t._v(" "),e("h3",{attrs:{id:"preparing-the-execution-environment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#preparing-the-execution-environment"}},[t._v("#")]),t._v(" Preparing the execution environment")]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("This section provides a detailed overview and steps to configure the components deployed for this solution.")]),t._v(" "),e("h3",{attrs:{id:"installer-machine"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installer-machine"}},[t._v("#")]),t._v(" Installer machine")]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("This document assumes that a server running Centos 7 with the following configuration exists within the deployment environment and is accessible to the installation user to be used in an installer machine.")]),t._v(" "),e("ol",[e("li",[t._v("At least 1.5 TB of free disk space (especially in the “/” partition), 8 CPU cores and 32 GB RAM.")]),t._v(" "),e("li",[t._v("One (1) network interface with static IP address configured on same network as the management plane of the bare-metal servers and has access to internet.")])]),t._v(" "),e("p",[t._v("In this solution, a virtual machine is used to act as an installer machine and the same host is utilized as an Ansible Engine host.")]),t._v(" "),e("h4",{attrs:{id:"setup-the-prerequisites"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setup-the-prerequisites"}},[t._v("#")]),t._v(" Setup the prerequisites")]),t._v(" "),e("p",[t._v("Login to the installer VM and perform the following steps:")]),t._v(" "),e("ol",[e("li",[t._v("Use the following commands to install and enable Python 3.6.x.")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" yum "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" centos-release-scl\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" yum "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" rh-python36\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" scl "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" rh-python36 "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[t._v("Use the following commands to create and activate a Python3 virtual environment for deploying this solution.")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" python3 "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" venv "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("virtual_environment_name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("virtual_environment_name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/bin/activate\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[t._v("Use the following command to install Ansible 2.9.")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" python3 "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" pip "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ansible")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.9")]),t._v(".0\n")])])]),e("ol",{attrs:{start:"4"}},[e("li",[e("p",[t._v("Disable SELinux")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Edit the /etc/selinux/config file and set the SELINUX to disabled")])]),t._v(" "),e("li",[e("p",[t._v("Reboot the server")])]),t._v(" "),e("li",[e("p",[t._v("Verify the SELinux status by running the following command:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" sestatus\n")])])])])])]),t._v(" "),e("li",[e("p",[t._v("Execute the following commands in the Ansible Engine to download the repositories.")])])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" –p /opt/hpe/solutions/hpecp/\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /opt/hpe/solutions/hpecp/\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" yum "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" –y "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/HewlettPackard/hpe-solutions-hpecp.git\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),e("ul",[e("li",[t._v("The value for the constant “BASE_DIR” referred to in this deployment guide is /opt/hpe/solutions/hpecp/hpe-solutions-hpecp/LTI/")]),t._v(" "),e("li",[t._v("This solution utilizes the Service Pack for ProLiant (SPP)/firmware bundle ISO image to enable an unattended update of firmware on the servers. Hence, ensure this image is available on the installer machine. Solution utilizes the ISO image of SLES 15 SP3 to enable an unattended installation of SLES on the servers. Hence, ensure this image is also available on the installer machine.")])])]),t._v(" "),e("ol",{attrs:{start:"6"}},[e("li",[t._v("Execute "),e("strong",[t._v("setup.sh")]),t._v(' script to install requirements for os deployment. Script expects the installer machine OS type, Please enter "rhel7" if the installer machine OS type is RHEL or "centos7" if the installer machine OS type is CentOS.')])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$BASE_DIR")]),t._v("/Lite_Touch_Installation/playbooks/roles/os_deployment/tasks\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" setup.sh\n")])])]),e("p",[t._v("Enter the installer machine OS. (“rhel7” for RHEL OS and “centos7” for Centos OS)")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),e("p",[t._v("Run the below command to fix any unwanted space, tabs error.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-i")]),t._v(" ‘s/r$//’ "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("path"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/setup.sh\n")])])])]),t._v(" "),e("h4",{attrs:{id:"ansible-inventory-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ansible-inventory-file"}},[t._v("#")]),t._v(" Ansible inventory file")]),t._v(" "),e("p",[t._v("The files that are cloned from the GitHub site include a sample inventory file. The installation user should review this file (located on the installer VM at $"),e("em",[t._v("BASE_DIR/Lite_Touch_Installation/hosts")]),t._v(") and ensure that the information within the file accurately reflects the information in their\nenvironment.")]),t._v(" "),e("p",[t._v("Use an editor such as vi or nano to edit the inventory file.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$BASE_DIR")]),t._v("/Lite_Touch_Installation/hosts\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),e("p",[t._v("The values provided in the variable files, inventory files, figures, and tables in this document are intended to be used for reference purpose. It is expected that the installation user updates them to suit the local environment.")]),t._v(" "),e("p",[t._v("By default, the forks parameter in Ansible is limited to 5. Execute the following command to update the Ansible configuration to increase the value of number of hosts that are getting configured using this playbook.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ANSIBLE_FORKS")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("number_of_hosts_present_in_the_ansible_inventory_file"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])]),t._v(" "),e("h4",{attrs:{id:"ansible-vault"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ansible-vault"}},[t._v("#")]),t._v(" Ansible vault")]),t._v(" "),e("p",[t._v("A preconfigured Ansible vault file ("),e("em",[t._v("vars.yml")]),t._v(") is provided as a part of this solution, which consists of sensitive information to support the host and virtual machine deployment.")]),t._v(" "),e("p",[t._v("Run the following commands on the installer VM to edit the vault to match the installation environment.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ansible-vault edit "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$BASE_DIR")]),t._v("/Lite_Touch_Installation/group_vars/all/vars.yml\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),e("p",[t._v("The default password for the Ansible vault file is "),e("em",[e("strong",[t._v("changeme")])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);
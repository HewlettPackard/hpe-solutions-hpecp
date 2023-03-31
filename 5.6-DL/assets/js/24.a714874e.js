(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{346:function(e,a,s){e.exports=s.p+"assets/img/figure12.04333f08.png"},422:function(e,a,s){"use strict";s.r(a);var t=s(14),o=Object(t.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"automated-hpe-ezmeral-runtime-enterprise-deployment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#automated-hpe-ezmeral-runtime-enterprise-deployment"}},[e._v("#")]),e._v(" Automated HPE Ezmeral Runtime Enterprise deployment")]),e._v(" "),a("p",[e._v("Usage of Ansible playbooks to deploy the HPE Ezmeral Runtime Enterprise is automated and eliminates manual intervention. Ansible playbooks provides the following functionalities for the installation user to deploy HPE Ezmeral Runtime Enterprise.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Install the SLES OS on bare metal servers")])]),e._v(" "),a("li",[a("p",[e._v("Prepare the hosts for HPERE implementation")])]),e._v(" "),a("li",[a("p",[e._v("Setup docker-registry to deploy ere through air-gapped environment")])]),e._v(" "),a("li",[a("p",[e._v("Install the controller nodes")])]),e._v(" "),a("li",[a("p",[e._v("Add gateway nodes, delete gateway nodes or enable gateway HA")])]),e._v(" "),a("li",[a("p",[e._v("Add and delete EPIC worker nodes.")])]),e._v(" "),a("li",[a("p",[e._v("Enable and Disable controller HA")])]),e._v(" "),a("li",[a("p",[e._v("Add or remove hosts on the Kubernetes cluster")])]),e._v(" "),a("li",[a("p",[e._v("Create and delete Kubernetes cluster")])]),e._v(" "),a("li",[a("p",[e._v("Create and delete tenants")])])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Prerequisites")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Any Ansible Linux machine with Ansible 2.9.x and python 3.x.")])]),e._v(" "),a("li",[a("p",[e._v("Minimum five (5) nodes with SLES 15 SP3 or CentOS 7.6 or higher version or RHEL (nodes can be VMs or BareMetal).")])]),e._v(" "),a("li",[a("p",[e._v("Playbooks are used to download the tools (jq). They should be placed in /usr/local/bin.")])]),e._v(" "),a("li",[a("p",[e._v("Obtain the URL of the HPE Ezmeral Runtime Enterprise bundle (using s3 bucket).")])])])]),e._v(" "),a("p",[a("img",{attrs:{src:s(346),alt:""}})]),e._v(" "),a("p",[e._v("Figure 12. Workflow diagram for Automated HPE Ezmeral Runtime Enterprise deployment")]),e._v(" "),a("h2",{attrs:{id:"automated-deployment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#automated-deployment"}},[e._v("#")]),e._v(" Automated Deployment")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Update the values in "),a("em",[e._v("vars.yml")]),e._v(" and "),a("em",[e._v("hosts inventory file")]),e._v(" according to your environment.")])]),e._v(" "),a("li",[a("p",[e._v("Use following command to edit "),a("em",[e._v("vars.yml")]),e._v(" file. The vars.yml file contains the configuration environment variables and host inventory includes the host ip addresses.")])])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$BASE_DIR")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ansible-vault edit group_vars/all/vars.yml\n")])])]),a("p",[e._v("HPERE can be deployed by running "),a("code",[e._v("site.yml")]),e._v(" or by running individual playbooks. Each playbook description can be found further in this document.")]),e._v(" "),a("ul",[a("li",[e._v("To build complete setup:")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ansible-playbook "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts site.yml --ask-vault-pass\n")])])]),a("ul",[a("li",[e._v("In case if user want to deploy through individual playbooks. Sequence of playbooks to be followed are:")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ansible-playbook "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/os_deployment.yml –ask-vault-pass\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ansible-playbook "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/prepare_hosts.yml –ask-vault-pass\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ansible-playbook "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/download-tools.yml –ask-vault-pass\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ansible-playbook "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/controller.yml –ask-vault-pass\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ansible-playbook "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/gateway-add.yml –ask-vault-pass\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ansible-playbook "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/epic-workers-add.yml –ask-vault-pass\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ansible-playbook "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/controller-ha.yml –ask-vault-pass\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ansible-playbook "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/k8s-add-hosts.yml –ask-vault-pass\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ansible-playbook "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/k8s-create-cluster.yml –ask-vault-pass\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ansible-playbook "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/k8s-create-tenant.yml –ask-vault-pass\n")])])]),a("p",[a("strong",[e._v("Playbooks Details:")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("site.yml")])])]),e._v(" "),a("p",[e._v("This playbook contains the script to deploy HPE Ezmeral Runtime Enterprise starting from the OS_deployment until tenant configuration.")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("OS_deployment.yml")])])]),e._v(" "),a("p",[e._v("This playbook contains the scripts to deploy SLES_OS on bare metal servers.")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Prepare_hosts.yml")])])]),e._v(" "),a("p",[e._v("This playbook contains the script to prepare the hosts for HPERE deployment.")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Download-tools.yml")])])]),e._v(" "),a("p",[e._v("This playbook downloads the jq under "),a("code",[e._v("/usr/local/bin")]),e._v(" in the installer machine and provides executable permissions.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),a("p",[e._v("In case of facing any issues while running download-tools.yml playbook,Download tools manually from the following links, place it under "),a("code",[e._v("/usr/local/bin")]),e._v(" and change executable permissions.")]),e._v(" "),a("ul",[a("li",[e._v("jq (https://github.com/stedolan/jq/releases/download/jq-1.6/jq-linux64)")])])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("controller.yml")])])]),e._v(" "),a("p",[e._v("This playbook contains the script to deploy controller and configuring the controller based on the configuaration details provided in the vars.yml file.")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Gateway-add.yml")])])]),e._v(" "),a("p",[e._v("This playbook contains the script to add gateways. User can add multiple gateways by providing ip and host information in vars.yml file.")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Epic-workers-add.yml")])])]),e._v(" "),a("p",[e._v("This playbook contains the script to add epic worker nodes. Provide epic worker details in vars.yml.")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Controller-ha.yml")])])]),e._v(" "),a("p",[e._v("This playbook contains the script to enable controller ha. Users need to provide virtual ip with FQDN in vars.yml file to configure controller ha. Please make sure virtual ip details present in DNS entries.")]),e._v(" "),a("p",[e._v("Users need to run "),a("code",[e._v("playbooks/epic-workers-add.yml")]),e._v(" playbook first to add required epic worker nodes. And then run playbooks/controller-ha.yml playbook.")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("K8s-add-hosts.yml")])])]),e._v(" "),a("p",[e._v("This playbook contains the script to add k8 nodes and Data Fabric nodes. Provide k8 nodes information in vars.yml file.")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("K8s-create-cluster.yml")])])]),e._v(" "),a("p",[e._v("This playbook contains the script to create ubernetes cluster and DataFabric cluster. Provide cluster details in vars.yml file.")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("k8s-create-tenant.yml")])])]),e._v(" "),a("p",[e._v("This playbook contains the script to create tenant. Provide tenant details in vars.yml file.")]),e._v(" "),a("p",[a("strong",[e._v("Uninstall Information:")])]),e._v(" "),a("p",[e._v("If user want to uninstall HPE Ezmeral Runtime Enterprise and start a fresh installation, use the following playbook.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ansible-playbook "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/uninstall-bds.yml –ask-vault-pass \n")])])]),a("p",[a("strong",[e._v("Other Playbooks:")])]),e._v(" "),a("p",[e._v("Run the following command to disable controller ha.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ansible-playbook "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/disable-controller-ha.yml –ask-vault-pass \n")])])]),a("p",[e._v("Run the following command to delete epic workers.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ansible-playbook "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/epic-workers-delete.yml –ask-vault-pass \n")])])]),a("p",[e._v("Run the following command to delete k8 nodes.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ansible-playbook "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/k8s-delete-hosts.yml –ask-vault-pass \n")])])]),a("p",[e._v("Run the following command to delete the tenant.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ansible-playbook "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/k8s-delete-tenant.yml –ask-vault-pass \n")])])]),a("p",[e._v("Run the following command to delete the cluster")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ansible-playbook "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/k8s-cluster-delete.yml –ask-vault-pass \n")])])]),a("p",[e._v("Run the following command to delete gateway.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ansible-playbook playbooks/gateway-delete.yml –ask-vault-pass\n")])])]),a("h2",{attrs:{id:"ere-deployment-through-air-gapped-environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ere-deployment-through-air-gapped-environment"}},[e._v("#")]),e._v(" ERE deployment through air-gapped environment")]),e._v(" "),a("p",[e._v("If user want ERE deployment through airgap mode, then perform below steps:")]),e._v(" "),a("ul",[a("li",[e._v("To setup docker registry update the details under airgap section in vars.yml and run below command to setup docker registry (registry server).")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ansible-playbook "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" hosts playbooks/setup_docker_registry.yml –ask-vault-pass \n")])])]),a("p",[a("strong",[e._v("setup_docker_registry.yml")])]),e._v(" "),a("p",[e._v("This playbook contains the script to create, configure docker registry and copy all required docker images based on the configuaration details provided in the vars.yml file.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("NOTE:")]),e._v(" "),a("p",[e._v("After docker-registry setup is ready run the playbooks starts from controller installation shown in steps above which will deploy ERE through airgap environment.")]),e._v(" "),a("p",[e._v('For more information check read.me file under "ERE deployment through air-gapped environment" in git repo '),a("a",{attrs:{href:"https://github.com/HewlettPackard/hpe-solutions-hpecp/blob/master/LTI/ERE_RestAPI_Based_Deployment/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/HewlettPackard/hpe-solutions-hpecp/blob/master/LTI/ERE_RestAPI_Based_Deployment/README.md"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("For detailed steps, see the HPE Ezmeral Runtime Enterprise on HPE DL325 & DL385 Deployment guide available at,\n"),a("a",{attrs:{href:"https://hewlettpackard.github.io/hpe-solutions-hpecp/5.6.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://hewlettpackard.github.io/hpe-solutions-hpecp/5.6.0/"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=o.exports}}]);
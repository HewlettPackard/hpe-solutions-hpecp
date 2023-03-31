(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{276:function(a,t,e){a.exports=e.p+"assets/img/figure61.5a7cc6b9.png"},277:function(a,t,e){a.exports=e.p+"assets/img/figure62.ee4cc2f9.png"},278:function(a,t,e){a.exports=e.p+"assets/img/figure63.d1175dc0.png"},279:function(a,t,e){a.exports=e.p+"assets/img/figure64.c84aff27.png"},280:function(a,t,e){a.exports=e.p+"assets/img/figure65.506f1db1.png"},281:function(a,t,e){a.exports=e.p+"assets/img/figure66.bec53249.png"},282:function(a,t,e){a.exports=e.p+"assets/img/figure67.0bb65cc9.png"},408:function(a,t,e){"use strict";e.r(t);var s=e(14),r=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"integrating-external-ezmeral-datafabric-with-ezmeral-runtime-enterprise-5-6-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#integrating-external-ezmeral-datafabric-with-ezmeral-runtime-enterprise-5-6-0"}},[a._v("#")]),a._v(" Integrating External Ezmeral DataFabric with Ezmeral Runtime Enterprise 5.6.0")]),a._v(" "),t("p",[a._v("HPE EXternal Ezmeral data fabric deployed on 5x HPE ProLiant DL385 Gen11 Servers. The HPE Ezmeral Runtime Enterprise out of the box supports the installation and configuration of the persistent data fabric for AI and analytics and K8s workload. This persistent volume is provided by HPE Ezmeral DataFabric which is a distributed file and object store that manages both structured and unstructured data. It is designed to store data at an Exabyte scale, support trillions of files, and combine analytics and operations into a single platform. It supports industry-standard protocols and APIs, including POSIX, NFS, S3, and HDFS.")]),a._v(" "),t("h3",{attrs:{id:"external-data-fabric-installation-and-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#external-data-fabric-installation-and-configuration"}},[a._v("#")]),a._v(" External Data Fabric installation and configuration")]),a._v(" "),t("p",[t("strong",[a._v("1, Host Configuration")])]),a._v(" "),t("p",[a._v("we need to follow all the steps at this location "),t("strong",[a._v("Installing Core and Ecosystem Components (hpe.com)")]),a._v(" post OS installation. OS installation can be done using the same steps used in os installation section.")]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("Pre-requisites")]),a._v(" "),t("p",[a._v("OS installation automation can be done by following below link  “"),t("RouterLink",{attrs:{to:"/Solution-Deployment/Operating-system-deployment.html#installation"}},[a._v("Deploying operating system on bare-metal nodes")]),a._v("”\nor\nPerform steps below manually which are pre-requisites")],1),a._v(" "),t("ul",[t("li",[a._v("Set the hostnames")]),a._v(" "),t("li",[a._v("Set the DNS")]),a._v(" "),t("li",[a._v("Set the resolv.conf")]),a._v(" "),t("li",[a._v("Set the etc hosts")]),a._v(" "),t("li",[a._v("Set the time sync across nodes")]),a._v(" "),t("li",[a._v("Check the raw disk, should not have any partitions")]),a._v(" "),t("li",[a._v("Set the password less ssh (ssh-keygen, ssh-copy-id -i ~/.ssh/id_rsa.pub remote-host)")]),a._v(" "),t("li",[a._v("Apply packages")]),a._v(" "),t("li",[a._v("Regiter servers using the valid suse subscription"),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("SUSEConnect "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-r")]),a._v(" ******** "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" example@xyz.com "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#Base June 2022")]),a._v("\nSUSEConnect "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" sle-module-basesystem/15.3/x86_64\nSUSEConnect "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" sle-module-containers/15.3/x86_64\nSUSEConnect "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" PackageHub/15.3/x86_64\nSUSEConnect "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" sle-module-legacy/15.3/x86_64\nSUSEConnect "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" sle-module-python2/15.3/x86_64\nSUSEConnect "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" sle-module-public-cloud/15.3/x86_64\nSUSEConnect "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" sle-module-desktop-applications/15.3/x86_64\nSUSEConnect "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" sle-module-desktop-applications/15.3/x86_64\nSUSEConnect "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" sle-module-python2/15.3/x86_64\nSUSEConnect "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" sle-module-development-tools/15.3/x86_64\n")])])])])])]),a._v(" "),t("ul",[t("li",[a._v("Install Java 11 zypper install java-11-openjdk-11.0.9.0-3.48.1")]),a._v(" "),t("li",[a._v("easy_install pip")]),a._v(" "),t("li",[a._v("Install python zypper in python-2.7.18")]),a._v(" "),t("li",[a._v("zypper in java-11-openjdk-devel")]),a._v(" "),t("li",[a._v("zypper install -y python3-devel python3-setuptools")]),a._v(" "),t("li",[a._v("Disable firewall and apparmor\n"),t("ul",[t("li",[a._v("systemctl stop apparmor")]),a._v(" "),t("li",[a._v("systemctl stop firewalld")])])]),a._v(" "),t("li",[a._v("Create a user named mapr on all the nodes\n"),t("ul",[t("li",[a._v("groupadd -g 5000 mapr")]),a._v(" "),t("li",[a._v("useradd mapr -u 5000 -g 5000 -m -s /bin/bash")]),a._v(" "),t("li",[a._v("usermod -aG wheel mapr")]),a._v(" "),t("li",[a._v("passwd mapr")]),a._v(" "),t("li",[a._v("visudo and comment the below line\n"),t("ul",[t("li",[a._v("Defaults targetpw # ask for the password of the target user i.e. root")])])])])])]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("Note")]),a._v(" "),t("p",[a._v("The password should be same on all the nodes as later it will be used for EDF installation by mapr-installer-cli")])]),a._v(" "),t("h3",{attrs:{id:"preparing-installer-node-for-mapr-installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#preparing-installer-node-for-mapr-installation"}},[a._v("#")]),a._v(" "),t("strong",[a._v("Preparing installer node for mapr installation")])]),a._v(" "),t("p",[a._v("Follow the steps mentioned in "),t("a",{attrs:{href:"https://docs.datafabric.hpe.com/70/MapRInstaller.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://docs.datafabric.hpe.com/70/MapRInstaller.html"),t("OutboundLink")],1),a._v(".")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("Download the installer bits on to installer server ("),t("a",{attrs:{href:"https://mapr.com/download/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://mapr.com/download/"),t("OutboundLink")],1),a._v(") and run the file")]),a._v(" "),t("p",[a._v("Or")]),a._v(" "),t("p",[a._v("wget "),t("a",{attrs:{href:"https://package.mapr.hpe.com/releases/installer/mapr-setup.sh",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://package.mapr.hpe.com/releases/installer/mapr-setup.sh"),t("OutboundLink")],1),a._v(" -P /tmp")])]),a._v(" "),t("li",[t("p",[a._v("chmod +x /tmp/mapr-setup.sh")])]),a._v(" "),t("li",[t("p",[a._v("./mapr-setup.sh -y\nYou will receive the url ("),t("a",{attrs:{href:"https://abc.domainname:9443",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://abc.domainname:9443"),t("OutboundLink")],1),a._v(") to access mapr installer UI. To login use "),t("strong",[a._v("Username mapr and password")]),a._v(" mapr configured previously.")])]),a._v(" "),t("li",[t("p",[a._v("Perform the following steps to change the location of the temporary directory used by Java processes using java.io.tmpdir variable:")])]),a._v(" "),t("li",[t("p",[a._v("Create a custom tmp directory for mapr and set its permission similar to /tmp.")])])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" /opt/mapr/tmp\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("777")]),a._v(" /opt/mapr/tmp\n")])])]),t("ul",[t("li",[a._v("Set the custom tmp directory as java.io.tmpdir")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("JDK_JAVA_OPTIONS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-Djava.io.tmpdir=/opt/mapr/tmp"')]),a._v("\n")])])]),t("ul",[t("li",[t("strong",[a._v("Start the Installer")]),a._v(". Open the Installer URL:")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("https://"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("Installer Node hostname/IPaddress"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(":9443\n")])])]),t("ul",[t("li",[t("p",[a._v("You are prompted to log in as the cluster administrator user that you configured while running the mapr-setup.sh script.\nCredentials: mapr/mapr")]),a._v(" "),t("p",[t("img",{attrs:{src:e(276),alt:""}})]),a._v(" "),t("p",[a._v("Figure 61. Sign in Dashboard")]),a._v(" "),t("p",[t("img",{attrs:{src:e(277),alt:""}})]),a._v(" "),t("p",[a._v("Figure 62. Dashboard page")])]),a._v(" "),t("li",[t("p",[a._v("Check the mapr & MEP version.\n"),t("img",{attrs:{src:e(278),alt:""}})]),a._v(" "),t("p",[a._v("Figure 63. Mapr & MEP Version information")])]),a._v(" "),t("li",[t("p",[a._v("MapR Control System (MCS): Click on cldb node list to login MCS, below is the cldb node list.\n"),t("img",{attrs:{src:e(279),alt:""}})]),a._v(" "),t("p",[a._v("Figure 64. Nodes information")])]),a._v(" "),t("li",[t("p",[a._v("Services:")]),a._v(" "),t("p",[t("img",{attrs:{src:e(280),alt:""}})]),a._v(" "),t("p",[a._v("Figure 65. Services information")])]),a._v(" "),t("li",[t("p",[a._v("Adding license is mandatory for date fabric services to functional.")])]),a._v(" "),t("li",[t("p",[a._v("Click on get free trail license and proceed with providing login HPE account credentials and Cluster ID. Then download the license and upload it here.\n"),t("img",{attrs:{src:e(281),alt:""}})]),a._v(" "),t("p",[a._v("Figure 66. License information")])])]),a._v(" "),t("h3",{attrs:{id:"ezmeral-external-data-fabric-integration-with-hpe-ezmeral-runtime-enterprise-5-6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ezmeral-external-data-fabric-integration-with-hpe-ezmeral-runtime-enterprise-5-6"}},[a._v("#")]),a._v(" Ezmeral External Data Fabric Integration with HPE Ezmeral Runtime Enterprise 5.6")]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("Pre-requisites")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("::: tip NOTE\nPlease read the complete procedure before you start this registration process.\n")])])]),t("ul",[t("li",[t("p",[a._v("The HPE Ezmeral Runtime Enterprise deployment must not have configured tenant storage.")])]),a._v(" "),t("li",[t("p",[a._v("When deploying the Data Fabric on Bare Metal cluster:")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("Keep the UID for the mapr user at the default of 5000.")])]),a._v(" "),t("li",[t("p",[a._v("Keep the GID for the mapr group at the default of 5000.")])])])]),a._v(" "),t("li",[t("p",[a._v("The Data Fabric (DF) cluster on Bare Metal must be a SECURE cluster.")])]),a._v(" "),t("li",[t("p",[a._v("From HPE Ezmeral Runtime Enterprise 5.6 Primary controller")]),a._v(" "),t("ul",[t("li",[a._v("Verify the directory /opt/bluedata/tmp/ext-bm-mapr exist. If not create a directory.")])])])])]),a._v(" "),t("h4",{attrs:{id:"procedure"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#procedure"}},[a._v("#")]),a._v(" Procedure")]),a._v(" "),t("p",[a._v("After Data Fabric registration is completed, the configuration will look as follows:")]),a._v(" "),t("p",[t("img",{attrs:{src:e(282),alt:""}})]),a._v(" "),t("p",[a._v("Figure 67. Data fabric")]),a._v(" "),t("p",[t("strong",[a._v("Registration Steps:")])]),a._v(" "),t("ul",[t("li",[a._v("Log in as mapr user, to a CLDB node of an HPE Ezmeral Data Fabric on Bare Metal cluster, and:")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("working-dir-on-bm-df"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("ul",[t("li",[a._v("On the Primary Controller of HPE Ezmeral Runtime Enterprise installation, do the following:")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("scp")]),a._v(" /opt/bluedata/common-install/scripts/mapr/gen-external-secrets.sh mapr@"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("cldb_node_ip_address"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(":"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("working-dir-on-bm-df"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("/\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("scp")]),a._v(" /opt/bluedata/common-install/scripts/mapr/prepare-bm-tenants.sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" mapr@"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("cldb_node_ip_address"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(":"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("working-dir-on-bm-df"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("/\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" /opt/bluedata/tmp/ext-bm-mapr/\n")])])]),t("ul",[t("li",[a._v("Create a user-defined manifest for the procedure:\n"),t("ul",[t("li",[a._v("If you are not specifying any keys (i.e. to generate default values for all keys):")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("touch")]),a._v(" /opt/bluedata/tmp/ext-bm-mapr/ext-dftenant-manifest.user-defined\n")])])]),t("ul",[t("li",[a._v("Else, specify the following parameters:")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("EOF"),t("span",{pre:!0,attrs:{class:"token bash punctuation"}},[a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" /opt/bluedata/tmp/ext-bm-mapr/ext-dftenant-manifest.user-defined ")]),a._v('\nEXT_MAPR_MOUNT_DIR="/<user_specified_directory_in_mount_path_for_volumes>"\nTENANT_VOLUME_NAME_TAG="<user_defined_tag_to_be_included_in_tenant_volume_names>"\nEOF')]),a._v("\n")])])])]),a._v(" "),t("li",[a._v("On the CLDB node of the HPE Ezmeral Data Fabric on BareMetal cluster:")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("working-path-on-bm-df"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("/\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" ./prepare-bm-tenants.sh\n")])])]),t("ul",[t("li",[t("p",[a._v("On the Primary Controller of HPE Ezmeral Runtime Enterprise:")]),a._v(" "),t("ul",[t("li",[a._v("Move or remove any existing “bm-info-*.tar” from /opt/bluedata/tmp/ext-bm-mapr/")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("scp")]),a._v(" bm-info-*.tar root@"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("**controller_node_ip_address**"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("/opt/bluedata/tmp/ext-bm-mapr/\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /opt/bluedata/tmp/ext-bm-mapr/\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("LOG_FILE_PATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("./"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("**log_file_name**"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("/opt/bluedata/bundles/hpe-cp-*/startscript.sh "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--action")]),a._v(" ext-bm-df-registration\n")])])])]),a._v(" "),t("li",[t("p",[a._v("When prompted, enter the Platform Administrator username and password. HPE Ezmeral Runtime Enterprise uses this information for REST API access to its management module.")])])]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("NOTE")]),a._v(" "),t("p",[a._v("The ext-bm-df-registration action validates the contents of bm-info-<8_byte_uuid>.tar, and finalizes the ext-dftenant-manifest. The following keys-values will be automatically added to the manifest:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CLDB_LIST")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"<comma-separated;FQDN_or_IP_address_for_each_CLDB_node>"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CLDB_PORT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"<port_number_for_CLDB_service>"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("SECURE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"<true_or_false>"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Default is "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CLUSTER_NAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"<name_of_DataFabric_cluster>"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("REST_URL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"<REST_server_hostname:port>"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("or space-delimited list of "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("REST_server_hostname:port"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" values"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("TICKET_FILE_LOCATION")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"<path_to_service_ticket_for_HCP_admin>"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("SSL_TRUSTSTORE_LOCATION")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"<path_to_ssl_truststore>"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("EXT_SECRETS_FILE_LOCATION")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"<path_to_external_secrets_file>"')]),a._v("\n")])])])]),a._v(" "),t("h3",{attrs:{id:"validation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#validation"}},[a._v("#")]),a._v(" "),t("strong",[a._v("Validation:")])]),a._v(" "),t("p",[a._v("To confirm that the Registration is completed, check the following:")]),a._v(" "),t("ul",[t("li",[a._v("On the HPE Ezmeral Runtime Enterprise, view the Kubernetes and EPIC Dashboards, and ensure that the POSIX Client and Mount Path services on all hosts are in normal state.")])]),a._v(" "),t("h3",{attrs:{id:"reference-links"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reference-links"}},[a._v("#")]),a._v(" Reference Links")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("Below is the reference for Integration Reference\n"),t("a",{attrs:{href:"https://docs.containerplatform.hpe.com/56/reference/hpe-ezmeral-data-fabric-admini/registering_baremetal_storage_5.4.3_and_higher_multiple_instance.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("HPE Ezmeral Runtime Enterprise 5.6 Documentation | HPE Support"),t("OutboundLink")],1)])]),a._v(" "),t("li",[t("p",[a._v("Below is the reference link for EDF cluster creation\n"),t("a",{attrs:{href:"https://docs.datafabric.hpe.com/70/AdvancedInstallation/c_install_prerequisites.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Installer Prerequisites and Guidelines (hpe.com)"),t("OutboundLink")],1)])])])])}),[],!1,null,null,null);t.default=r.exports}}]);
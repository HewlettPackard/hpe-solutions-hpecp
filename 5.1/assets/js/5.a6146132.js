(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{349:function(e,t,s){e.exports=s.p+"assets/img/Table10.dc7a51c5.png"},350:function(e,t,s){e.exports=s.p+"assets/img/Figure52.a3396082.png"},351:function(e,t,s){e.exports=s.p+"assets/img/Figure53.3a8598e8.png"},352:function(e,t,s){e.exports=s.p+"assets/img/Figure54.410e8e01.png"},353:function(e,t,s){e.exports=s.p+"assets/img/Figure55.6822fbc7.png"},354:function(e,t,s){e.exports=s.p+"assets/img/Figure56.a1f96567.png"},355:function(e,t,s){e.exports=s.p+"assets/img/Figure57.f8e7f457.png"},356:function(e,t,s){e.exports=s.p+"assets/img/Figure58.1b94814d.png"},357:function(e,t,s){e.exports=s.p+"assets/img/Figure59.52e19e84.png"},358:function(e,t,s){e.exports=s.p+"assets/img/Figure60.660d9b67.png"},359:function(e,t,s){e.exports=s.p+"assets/img/Figure61.fa188f04.png"},360:function(e,t,s){e.exports=s.p+"assets/img/Figure62.3ddd7e85.png"},428:function(e,t,s){"use strict";s.r(t);var a=s(42),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"hpe-ezmeral-container-platform-role-based-access-control"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hpe-ezmeral-container-platform-role-based-access-control"}},[e._v("#")]),e._v(" HPE Ezmeral Container Platform - Role-Based Access Control")]),e._v(" "),a("p",[e._v("Role-based access control (RBAC), also known as role-based security, is a framework that restricts system access. It does so, by setting permissions and privileges to enable access to authorized users. Most organizations use role-based access control to provide their employees with varying levels of access based on their roles and responsibilities. This protects sensitive data and ensures employees can only access information and perform actions they need to do their duties.")]),e._v(" "),a("h2",{attrs:{id:"users-and-roles-in-hpe-ezmeral-container-platform"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#users-and-roles-in-hpe-ezmeral-container-platform"}},[e._v("#")]),e._v(" Users and Roles in HPE Ezmeral Container Platform")]),e._v(" "),a("p",[e._v("The HPE Ezmeral Container Platform provides multi-tenant hybrid cloud platform. This multi-tenant platform is based on Role-based access control. Some of the user- and tenant-related considerations to be resolved when planning/maintaining your deployment include:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Tenants: The number of tenants and the function(s) each tenant performs will determine how many users with the Tenant Administrator role will be needed and, by extension, the number of users with the Tenant Member role will be needed for each tenant. The reverse is also true, since the number and functions of users needing to run jobs can influence how you define tenants. For example, different levels of confidentiality may mandate separate tenants.")])]),e._v(" "),a("li",[a("p",[e._v("Job functions: The specific work performed by a given user will directly impact the role they receive. For example, a small organization may designate a single user as the Tenant Administrator for multiple tenants, while a large organization may designate multiple Tenant Administrators per tenant.")])]),e._v(" "),a("li",[a("p",[e._v("Security clearances: You may need to restrict access to information based on a user's security clearance. This can impact both the tenant(s) a user has access to and the role configured for that user within a given tenant.")])])]),e._v(" "),a("p",[e._v("The following table lists the role specific acronyms that is used within HPE Ezmeral Container Platform:")]),e._v(" "),a("p",[e._v("Table 10. HPE Ezmeral Container Platform roles and specific acronyms")]),e._v(" "),a("p",[a("img",{attrs:{src:s(349),alt:""}})]),e._v(" "),a("h2",{attrs:{id:"user-management"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#user-management"}},[e._v("#")]),e._v(" User Management:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Only Platform/Site Administrator will have access to the User Management. Platform/Site adminstroator will have access to add users, delete, assigning roles, and tenants. User Management panel looks like as shown in Figure 52. User Management panel has two tabs (Users and Sessions). Users displays information about username, assigned tenants, authentication type and actions which can performed for the user.")])]),e._v(" "),a("li",[a("p",[e._v("Users can be added/deleted by clicking on Add User/Delete button in the top right corner as shown in the Figure 52.")])])]),e._v(" "),a("p",[a("img",{attrs:{src:s(350),alt:""}})]),e._v(" "),a("p",[a("strong",[e._v("Figure 52.")]),e._v(" User Management dashboard")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Once the user is created, Users details can be found under Users tab. Edit the user to assign tenant/admin and roles. One user can be assigned to multiple tenants.")])]),e._v(" "),a("li",[a("p",[e._v("Figure 53 shows how to assign tenants and roles to the users.")])])]),e._v(" "),a("p",[a("img",{attrs:{src:s(351),alt:""}})]),e._v(" "),a("p",[a("strong",[e._v("Figure 53.")]),e._v(" Users Assignment")]),e._v(" "),a("ul",[a("li",[e._v("Each user must have access to at least one tenant. By default HPE Ezmeral Container Platform provide support for two roles ("),a("strong",[e._v("admin")]),e._v(" and "),a("strong",[e._v("member")]),e._v("). Users created with admin role has full rights to the associate tenant/project/cluster whereas users created with member role has limited access to the associate tenant.")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),a("p",[e._v("In this document only Kubernetes users has been created. EPIC user details are not available.")])]),e._v(" "),a("ul",[a("li",[e._v("Users who are logged in as Kubernetes cluster admin and Kubernetes tenant admin can revoke the access and no longer will not have access to the tenant.")])]),e._v(" "),a("p",[a("img",{attrs:{src:s(352),alt:""}})]),e._v(" "),a("p",[a("strong",[e._v("Figure 54.")]),e._v(" kube_tenant tenant accessible by two users kube_tenadmin and kube_member")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("As part of invitation, following users has been created")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Kubernetes Member Dashboard screen (see Dashboard - Kubernetes Member)")])]),e._v(" "),a("li",[a("p",[e._v("Kubernetes Cluster Administrator Dashboard screen (see Dashboard - Kubernetes Cluster Administrator)")])]),e._v(" "),a("li",[a("p",[e._v("Kubernetes Tenant Administrator Dashboard screen (see Dashboard - Kubernetes Tenant Administrator)")])])])])]),e._v(" "),a("h2",{attrs:{id:"kubernetes-web-terminal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-web-terminal"}},[e._v("#")]),e._v(" Kubernetes Web Terminal")]),e._v(" "),a("p",[e._v("HPE Container Platform allows Kubernetes users to access the Kubernetes Web Terminal that includes the HPE Kubectl plug-in, Helm, and access to the Kubernetes tenant FS mounts. The Web Terminal is a KubeDirector application, that is, a stateful Kubernetes set.")]),e._v(" "),a("p",[e._v("To access the Web Terminal:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Log in to HPE Ezmeral Container Platform, and then navigate to the appropriate Kubernetes cluster or tenant according to your credentials and role (Member, Tenant Administrator, or Cluster Administrator.)")])]),e._v(" "),a("li",[a("p",[e._v("Click the green "),a("strong",[e._v("Initialize")]),e._v(" button that appears at the bottom of most Kubernetes screens within HPE Ezmeral Container Platform.")]),e._v(" "),a("ul",[a("li",[e._v("The screen will say Waiting for terminal to be ready. This process will take a few minutes if this is the first time you are accessing the Web Terminal because HPE Ezmeral Container Platform must launch a new webterm service pod using the default MapR-based storage.")])])]),e._v(" "),a("li",[a("p",[e._v("Once the Web Terminal is ready, click the "),a("strong",[e._v("Launch")]),e._v(" icon (plus sign) to launch the terminal window.")])])]),e._v(" "),a("p",[e._v("HPE Ezmeral Container Platform pre-installs kubectl in the Web Terminal environment and also configures the appropriate kubeconfig. This config behaves in the same way as a locally downloaded config, as described in the Role Privileges, below, and in Managing a Kubernetes Cluster via Local Kubectl. You should never need to manually refresh/recreate the config.")]),e._v(" "),a("h2",{attrs:{id:"kubernetes-cluster-administrator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-cluster-administrator"}},[e._v("#")]),e._v(" Kubernetes Cluster Administrator")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("HPE Ezmeral Container Platform users who are logged into a Kubernetes tenant with the Cluster Administrator role can access the Kubernetes Tenant Administrator "),a("strong",[e._v("Dashboard")]),e._v(" screen by selecting "),a("strong",[e._v("Dashboard")]),e._v(" in the main menu.")])]),e._v(" "),a("li",[a("p",[e._v("The top of this screen has three buttons that allows you to download the plugins that you need to access Kubernetes pods within a cluster as shown in Figure 55. The buttons are:")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("HPE Kubectl Plugin:")]),e._v(" Downloads the HPE installer for the kubectl command line tool for controlling a Kubernetes cluster. User will need to install this application.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Kubectl:")]),e._v(" Downloads the generic installed for the kubectl command line tool for controlling a Kubernetes cluster. User will need to install this application")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Kubeconfig:")]),e._v(" Downloads the kubeconfig file that configures access to Kubernetes when used in conjunction with either the kubectl command line tool or other clients.")])])])])]),e._v(" "),a("p",[a("img",{attrs:{src:s(353),alt:""}})]),e._v(" "),a("p",[a("strong",[e._v("Figure 55.")]),e._v(" Kubernetes Cluster Administrator logged in into Kubernetes tenant")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Kubernetes Cluste Administrator have access to the following tabs.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Dashboard (User has access to usage and monitoring tabs)")])]),e._v(" "),a("li",[a("p",[e._v("Cluster (Display cluster information. More details can be found further in this section)")])]),e._v(" "),a("li",[a("p",[e._v("Tenants (Display tenant information)")])]),e._v(" "),a("li",[a("p",[e._v("Users (Display information about the user. User can revoke the access)")])])])]),e._v(" "),a("li",[a("p",[e._v("Once user clicks on cluster tab, user will see the following tabs.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Hosts info (Display hosts , role, status details)")])]),e._v(" "),a("li",[a("p",[e._v("Load (Display CPU metrics and memory usage)")])]),e._v(" "),a("li",[a("p",[e._v("Service Status (Display status of services like BD Agent, Disk pressure, Kube proxy, Kubelet, Network, Kube API Server, Kube Controller, Kube Scheduler, FileServer and Mountpoint)")])]),e._v(" "),a("li",[a("p",[e._v("Alerts")])])])]),e._v(" "),a("li",[a("p",[e._v("When the user logs in as a Kubernetes Cluster Administrator- the cluster panel, load panel and user information is as shown in Figure 56, Figure 57 and Figure 58 respectively.")])])]),e._v(" "),a("p",[a("img",{attrs:{src:s(354),alt:""}}),e._v(" "),a("strong",[e._v("Figure 56.")]),e._v(" Cluster panel when user logged in as Kubernetes cluster administrator")]),e._v(" "),a("p",[a("img",{attrs:{src:s(355),alt:""}}),e._v(" "),a("strong",[e._v("Figure 57.")]),e._v(" Load panel when user logged in as Kubernetes cluster administrator")]),e._v(" "),a("p",[a("img",{attrs:{src:s(356),alt:""}}),e._v(" "),a("strong",[e._v("Figure 58.")]),e._v(" Users information")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),a("p",[e._v("If the User has a Platform Administrator role or a Kubernetes Cluster Administrator role in the current cluster, then that user will receive system-masters privileges regardless of any explicit tenant role assignments that user may also have.")])]),e._v(" "),a("h2",{attrs:{id:"kubernetes-tenant-administrator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-tenant-administrator"}},[e._v("#")]),e._v(" Kubernetes Tenant Administrator")]),e._v(" "),a("ul",[a("li",[e._v("HPE Ezmeral Container Platform users who are logged into a Kubernetes tenant with the Tenant Administrator role can access the Kubernetes Tenant Administrator "),a("strong",[e._v("Dashboard")]),e._v(" screen by selecting "),a("strong",[e._v("Dashboard")]),e._v(" in the main menu as show in Figure 59.")])]),e._v(" "),a("p",[a("img",{attrs:{src:s(357),alt:""}})]),e._v(" "),a("p",[a("strong",[e._v("Figure 59.")]),e._v(" User logged in as Kubernetes Tenant Administrator")]),e._v(" "),a("p",[e._v("Kuberenets Tenant Administrator will have access to the following tabs.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Dashboard")])]),e._v(" "),a("li",[a("p",[e._v("DataTaps")])]),e._v(" "),a("li",[a("p",[e._v("FsMounts")])]),e._v(" "),a("li",[a("p",[e._v("Applications")])]),e._v(" "),a("li",[a("p",[e._v("Users")])])]),e._v(" "),a("p",[e._v("When the user logs in as a Kubernetes Tenant Administrator- the DataTaps panel and FsMounts panel is as shown in Figure 60 and Figure 61 respectively.")]),e._v(" "),a("p",[a("img",{attrs:{src:s(358),alt:""}}),e._v(" "),a("strong",[e._v("Figure60.")]),e._v(" DataTaps panel when user logged in as Kubernetes Tenant Administrator")]),e._v(" "),a("p",[a("img",{attrs:{src:s(359),alt:""}}),e._v(" "),a("strong",[e._v("Figure61.")]),e._v(" FsMounts panel when user logged in as Kubernetes Tenant Administrator")]),e._v(" "),a("h2",{attrs:{id:"kubernetes-member"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-member"}},[e._v("#")]),e._v(" Kubernetes Member")]),e._v(" "),a("p",[e._v("HPE Ezmeral Container Platform users who are logged into a Kubernetes tenant with the Member role can access the Kubernetes Member "),a("strong",[e._v("Dashboard")]),e._v(" screen by selecting "),a("strong",[e._v("Dashboard")]),e._v(" in the main menu")]),e._v(" "),a("p",[e._v("Kubernetes Member will see the following information on Dashboard.")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("CPU Usage Percent:")]),e._v(" Percentage of available CPU resources in use.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("CPU Use Nanocores:")]),e._v(" Number of CPU cores in use, in 1/1000ths of a core.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("CPU Pod Limit Percent:")]),e._v(" Percentage of maximum number of pods that are currently running inside the current cluster.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Node Memory Usage Percent:")]),e._v(" Percentage of available memory being used.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Memory Usage in Bytes:")]),e._v(" Bytes of memory being used.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Memory Limit Percent:")]),e._v(" Percentage of memory limit being used.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Network Rx in Bytes:")]),e._v(" Bytes received over the network.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Network Tx in Bytes:")]),e._v(" Bytes transmitted over the network.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("GPU Utilization (percent):")]),e._v(" If GPUs are present, displays aggregate GPU utilization in percent.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("GPU Memory Usage:")]),e._v(" If GPUs are present, displays aggregate GPU memory usage in percent.")])]),e._v(" "),a("li",[a("p",[e._v("Kubernetes Member has access to the following tabs as shown in Figure 62.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Dashboard")])]),e._v(" "),a("li",[a("p",[e._v("DataTaps")])]),e._v(" "),a("li",[a("p",[e._v("FsMounts")])]),e._v(" "),a("li",[a("p",[e._v("Applications")])])])])]),e._v(" "),a("p",[a("img",{attrs:{src:s(360),alt:""}})]),e._v(" "),a("p",[a("strong",[e._v("Figure 62.")]),e._v(" User who logins as Kubernetes Member")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("By default Kuberenets member would have limited access to the assigned tenant. For example, user cannot get information about resources like secrets, roles, and role bindings. Admin user can grant full access to Kubernetes member. Admin can do this by executing following command.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" kubectl edit hpecptenants.hpecp.hpe.com -n "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("name_space"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])])])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),a("p",[e._v("Site admin/Platform Administrator can add the resources/grant access to the member user associated with specific tenants using following command.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" kubectl describe ns kube-tenant\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" Kubectl edit --n hpecp hpecptenant hpecp-tenant-7\n")])])])]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Updating the tenant quotas of cpu, gpu, memory from cli will not reflect in the HPECP UI. Hence we need to change these quotas in the UI only.")])]),e._v(" "),a("li",[a("p",[e._v("Only the platform administrator can create roles. not any other users.")])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);
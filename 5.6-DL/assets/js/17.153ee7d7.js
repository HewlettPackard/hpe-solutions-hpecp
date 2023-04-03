(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{275:function(e,s,t){e.exports=t.p+"assets/img/figure125.0ff7e5a0.png"},407:function(e,s,t){"use strict";t.r(s);var a=t(14),r=Object(a.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"expand-and-shrink-cluster"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#expand-and-shrink-cluster"}},[e._v("#")]),e._v(" Expand and Shrink Cluster")]),e._v(" "),s("p",[e._v("Expanding a Kubernetes cluster adds more resources and High Availability to your cluster for example expanding from 1 K8s master host to 3 k8s masters hosts adds High Availability protection to the Kubernetes cluster. Shrinking a Kubernetes cluster is also preferred when an existing cluster resource are needed for use elsewhere to manage effective usage of on-demand resources.")]),e._v(" "),s("p",[e._v("In HPE Ezmeral Runtime Enterprise 5.6.0 you expand and shrink your Internal Kubernetes Clusters and not the imported clusters that are managed by the platform. In the RA we an automated approach to expand or shrink your exiting Kubernetes cluster. The high-level flow of the automated process is as follows:")]),e._v(" "),s("p",[e._v("Below Figure shows the high-level flow of the Cluster Modification Functionality.")]),e._v(" "),s("p",[s("img",{attrs:{src:t(275),alt:""}})]),e._v(" "),s("h3",{attrs:{id:"pre-requisites"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisites"}},[e._v("#")]),e._v(" Pre-Requisites")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Refer to Installer Machine section to set up the required python and ansible environment.")])]),e._v(" "),s("li",[s("p",[e._v("Python module 'requests'.")])]),e._v(" "),s("li",[s("p",[e._v("The hosts to be added or removed from the cluster must be in the available list of HOSTS.")])]),e._v(" "),s("li",[s("p",[e._v("An existing compute clusters.")])])]),e._v(" "),s("h3",{attrs:{id:"procedure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#procedure"}},[e._v("#")]),e._v(" Procedure")]),e._v(" "),s("ul",[s("li",[e._v("Enter the console username and password in the "),s("em",[e._v("config_secrets.json")]),e._v(" file")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ansible-vault edit config_secrets.json\n")])])]),s("ul",[s("li",[e._v("Enter the config details in the "),s("em",[e._v("user_input.json")]),e._v(" file")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("vi")]),e._v(" user_input.json\n")])])]),s("ul",[s("li",[e._v("Run the python script "),s("em",[e._v("expand_shrink.py")])])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" python expand_shrink.py\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);
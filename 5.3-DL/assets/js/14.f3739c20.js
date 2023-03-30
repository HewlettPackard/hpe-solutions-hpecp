(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{364:function(t,s,a){t.exports=a.p+"assets/img/AF-Nimble1.a4fe3b69.png"},365:function(t,s,a){t.exports=a.p+"assets/img/AF-Nimble2.b4ecf712.png"},366:function(t,s,a){t.exports=a.p+"assets/img/AF-Nimble3.16d21fde.png"},535:function(t,s,a){"use strict";a.r(s);var e=a(45),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"deploying-hpe-csi-driver-for-nimble-storage-on-hpecp-container-platform-5-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deploying-hpe-csi-driver-for-nimble-storage-on-hpecp-container-platform-5-3"}},[t._v("#")]),t._v(" Deploying HPE CSI Driver for Nimble Storage on HPECP Container Platform 5.3")]),t._v(" "),e("p",[t._v("Prior to Container Storage Integration (CSI), Kubernetes provided in-tree plugins to support volume. This posed a problem as storage vendors had to align to the Kubernetes release process to fix a bug or to release new features. This also means every storage vendor had their own process to present volume to Kubernetes.")]),t._v(" "),e("p",[t._v("CSI was developed as a standard for exposing block and file storage systems to containerized workloads on Container Orchestrator Systems (COS) like Kubernetes. Container Storage Interface (CSI) is an initiative to unify the storage interface of COS combined with storage vendors. This means, implementing a single CSI for a storage vendor is guaranteed to work with all COS. With the introduction of CSI, there is a clear benefit for the COS and storage vendors. Due to its well-defined interfaces, it also helps developers and future COS to easily implement and test CSI. Volume plugins served the storage needs for container workloads in case of Kubernetes, before CSI existed.")]),t._v(" "),e("p",[t._v("The HPE CSI Driver is a multi-vendor and multi-backend driver where each implementation has a Container Storage Provider (CSP). The HPE CSI Driver for Kubernetes uses CSP to perform data management operations on storage resources such as searching for a logical unit number (lun) and so on. Using the CSP specification, the HPE CSI Driver allows any vendor or project to develop its own CSP, which makes it very easy for third- parties to integrate their storage solution into Kubernetes as all the intricacies are taken care of by the HPE CSI Driver. This document contains details on how to configure the HPE CSI Driver storage for Nimble on an existing HPECP Container Platform 5.3.")]),t._v(" "),e("h3",{attrs:{id:"configuring-csi-driver"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuring-csi-driver"}},[t._v("#")]),t._v(" Configuring CSI Driver")]),t._v(" "),e("p",[t._v("Prior to configuring the HPE CSI driver, the following prerequisites needs to be met.")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("Pre-requisites")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("HPECP Container Platform 5.3 must be successfully deployed.")])]),t._v(" "),e("li",[e("p",[t._v("Additional iSCSI network interfaces must be configured on Kubernetes Comupte Cluster (physical and virtual)")])])])]),t._v(" "),e("h4",{attrs:{id:"installing-csi-drivers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installing-csi-drivers"}},[t._v("#")]),t._v(" Installing CSI Drivers")]),t._v(" "),e("p",[t._v("These object configuration files are common for version of Kubernetes.")]),t._v(" "),e("p",[t._v("Worker node IO settings:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" kubectl create -f "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("https://raw.githubusercontent.com/hpe-storage/co-deployments/master/yaml/csi-driver/v1.3.0/hpe-linux-config.yaml"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),e("p",[t._v("Container Storage Provider:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" kubectl create -f "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("https://raw.githubusercontent.com/hpe-storage/co-deployments/master/yaml/csi-driver/v1.3.0/nimble-csp.yaml"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),e("p",[t._v("Kubernetes 1.18")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" kubectl create -f "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("https://raw.githubusercontent.com/hpe-storage/co-deployments/master/yaml/csi-driver/v1.3.0/hpe-csi-k8s-1.18.yaml"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),e("h4",{attrs:{id:"add-a-hpe-storage-backend"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#add-a-hpe-storage-backend"}},[t._v("#")]),t._v(" Add a HPE storage backend")]),t._v(" "),e("p",[t._v("Once the CSI driver is deployed, two additional objects needs to be created to get started with dynamic provisioning of persistent storage, a Secret and a StorageClass.")]),t._v(" "),e("h4",{attrs:{id:"secret-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#secret-parameters"}},[t._v("#")]),t._v(" Secret parameters")]),t._v(" "),e("p",[t._v("All parameters are mandatory and described below.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Parameter")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("serviceName")]),t._v(" "),e("td",[t._v('This hostname or IP address where the Container Storage Provider (CSP) is running, usually a Kubernetes Service, such as "nimble-csp-svc" or "primera3par-csp-svc"')])]),t._v(" "),e("tr",[e("td",[t._v("servicePort")]),t._v(" "),e("td",[t._v("This is port the serviceName is listening to.")])]),t._v(" "),e("tr",[e("td",[t._v("Backend")]),t._v(" "),e("td",[t._v("This is the management hostname or IP address of the actual backend storage system, such as a Nimble or 3PAR array.")])]),t._v(" "),e("tr",[e("td",[t._v("Username")]),t._v(" "),e("td",[t._v("Backend storage system username with the correct privileges to perform storage management.")])]),t._v(" "),e("tr",[e("td",[t._v("Password")]),t._v(" "),e("td",[t._v("Backend storage system password.")])])])]),t._v(" "),e("h4",{attrs:{id:"create-the-secret"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-the-secret"}},[t._v("#")]),t._v(" Create the secret")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" custom-secret.yaml\n")])])]),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Secret\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" custom"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("secret\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" kube"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("system\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("stringData")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("serviceName")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nimble"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("csp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("svc\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("servicePort")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8080"')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("backend")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10.x.x.x\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" xxxxx\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" xxxxx\n")])])]),e("p",[t._v("create the secret using kubectl")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" kubectl create -f custom-secret.yaml\n")])])]),e("p",[t._v('We can see the secret in the "kube-system" Namespace')]),t._v(" "),e("p",[e("img",{attrs:{src:a(364),alt:""}})]),t._v(" "),e("h4",{attrs:{id:"create-the-storageclass-with-the-custom-secret"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-the-storageclass-with-the-custom-secret"}},[t._v("#")]),t._v(" Create the StorageClass with the custom Secret")]),t._v(" "),e("p",[t._v('To use the new Secret "custom-secret", create a new StorageClass using the Secret and the necessary StorageClass parameters.')]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" StorageClass.yaml\n")])])]),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" storage.k8s.io/v1\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" StorageClass\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hpe"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("custom\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("provisioner")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" csi.hpe.com\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("parameters")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("csi.storage.k8s.io/fstype")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" xfs\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("csi.storage.k8s.io/controller-expand-secret-name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" custom"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("secret\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("csi.storage.k8s.io/controller-expand-secret-namespace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" kube"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("system\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("csi.storage.k8s.io/controller-publish-secret-name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" custom"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("secret\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("csi.storage.k8s.io/controller-publish-secret-namespace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" kube"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("system\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("csi.storage.k8s.io/node-publish-secret-name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" custom"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("secret\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("csi.storage.k8s.io/node-publish-secret-namespace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" kube"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("system\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("csi.storage.k8s.io/node-stage-secret-name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" custom"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("secret\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("csi.storage.k8s.io/node-stage-secret-namespace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" kube"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("system\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("csi.storage.k8s.io/provisioner-secret-name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" custom"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("secret\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("csi.storage.k8s.io/provisioner-secret-namespace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" kube"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("system\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("description")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(' "Volume created by using a custom Secret with the HPE CSI\nDriver for Kubernetes"\n\n'),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("reclaimPolicy")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Delete\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("allowVolumeExpansion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n")])])]),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" kubectl create -f StorageClass.yaml\n")])])]),e("p",[e("img",{attrs:{src:a(365),alt:""}})]),t._v(" "),e("h4",{attrs:{id:"create-the-persistentvolumeclaim"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-the-persistentvolumeclaim"}},[t._v("#")]),t._v(" Create the PersistentVolumeClaim")]),t._v(" "),e("p",[t._v("Create a PersistentVolumeClaim. This object declaration ensures a PersistentVolume is created and provisioned.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" PersistentVolumeClaim.yaml\n")])])]),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" PersistentVolumeClaim\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" my"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("first"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pvc\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("accessModes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ReadWriteOnce\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("resources")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("requests")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("storage")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 32Gi\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("storageClassName")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hpe"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("custom\n")])])]),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" kubectl create -f **PersistentVolumeClaim.yaml\n")])])]),e("p",[e("img",{attrs:{src:a(366),alt:""}})]),t._v(" "),e("h4",{attrs:{id:"create-the-pods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-the-pods"}},[t._v("#")]),t._v(" Create the Pods")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" Pods.yaml\n")])])]),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Pod\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" my"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pod\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containers")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pod"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("datelog"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("command")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bin/sh"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("args")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-c"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(' "while true; do date '),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(' /data/mydata.txt; sleep 1;\ndone"'),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumeMounts")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" export1\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mountPath")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /data\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pod"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("datelog"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" debian\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("command")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bin/sh"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("args")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-c"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"while true; do date >> /data/mydata.txt; sleep 1; done"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumeMounts")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" export1\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mountPath")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /data\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" export1\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("persistentVolumeClaim")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("claimName")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" my"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("first"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pvc\n")])])]),e("p",[t._v("Once the pods are deployed we can list the running pods.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Kubectl get pods\n")])])]),e("p",[t._v("These pods will be using the above created pv's for their data storage which reside on HPE Nimble Storage in the backend.")])])}),[],!1,null,null,null);s.default=n.exports}}]);
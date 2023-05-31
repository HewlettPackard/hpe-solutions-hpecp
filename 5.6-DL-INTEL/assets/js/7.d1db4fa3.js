(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{311:function(e,t,o){e.exports=o.p+"assets/img/figure117.7bf4ad29.png"},312:function(e,t,o){e.exports=o.p+"assets/img/figure118.0bef1e7c.png"},313:function(e,t,o){e.exports=o.p+"assets/img/figure119.6bf6fdd4.png"},314:function(e,t,o){e.exports=o.p+"assets/img/figure120.4a80ea6a.png"},315:function(e,t,o){e.exports=o.p+"assets/img/figure121.56ca8675.png"},316:function(e,t,o){e.exports=o.p+"assets/img/figure122.8e5c5f24.png"},317:function(e,t,o){e.exports=o.p+"assets/img/figure123.e297daae.png"},318:function(e,t,o){e.exports=o.p+"assets/img/figure124.905bca24.png"},412:function(e,t,o){"use strict";o.r(t);var s=o(14),r=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"install-and-configure-velero"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-and-configure-velero"}},[e._v("#")]),e._v(" Install and Configure Velero")]),e._v(" "),t("h3",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),t("p",[e._v("Velero is an open-source tool to safely back up, recover, and migrate Kubernetes clusters and persistent volumes. It works both on premises and in a public cloud. Velero consists of a server process running as a deployment in your Kubernetes cluster and a command-line interface (CLI). Velero uses the Kubernetes API to capture the state of cluster resources and to restore them when necessary. Backups can capture subsets of the cluster’s resources, filtering by namespace, resource type, and/or label selector, providing a high degree of flexibility around what’s backed up and restored.")]),e._v(" "),t("h3",{attrs:{id:"installation-process"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation-process"}},[e._v("#")]),e._v(" Installation Process")]),e._v(" "),t("p",[t("strong",[e._v("Installing the Velero Client on K8’s master node:")])]),e._v(" "),t("ol",[t("li",[e._v("Download the velero tar.gz release from ("),t("a",{attrs:{href:"https://github.com/vmware-tanzu/velero/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/vmware-tanzu/velero/releases"),t("OutboundLink")],1),e._v(") on K8’s master node")])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("master: "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" https://"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<<")]),e._v("link_copy_from_release_page"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">>")]),e._v("\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[e._v("Once the download complete, extract the tarball using tar")])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("master: "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("tar")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-xvzf")]),e._v(" velero-v1.10.2-rc.1-linux-amd64.tar.gz\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[e._v("The K8’s master should now contain the extracted velero-v1.10.2-rc.1-linux-amd64.tar.gz move the velero executable out of the temporary directory and add it to your PATH")])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("master: "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("mv")]),e._v(" velero-v1.10.2-rc.1-linux-amd64/velero /usr/local/bin/velero\n")])])]),t("p",[t("strong",[e._v("Get AWS access key ID and secret access key:")])]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Open the IAM console at "),t("a",{attrs:{href:"https://console.aws.amazon.com/iam/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://console.aws.amazon.com/iam/"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[e._v("On the navigation menu, choose Users.")])]),e._v(" "),t("li",[t("p",[e._v("Choose your IAM username (not the check box).")])]),e._v(" "),t("li",[t("p",[e._v("Open the Security credentials tab, and then choose Create access key.")])]),e._v(" "),t("li",[t("p",[e._v("To see the new access key, choose Show. Your credentials resemble\nthe following:")]),e._v(" "),t("ul",[t("li",[e._v("Access key ID: xxxxxxxxxxxxxx")]),e._v(" "),t("li",[e._v("Secret access key: xxxxxxxxxxxxxx")])])]),e._v(" "),t("li",[t("p",[e._v("To download the key pair, choose Download .csv file. Store the .csv file with keys in a secure location.")])])]),e._v(" "),t("p",[t("strong",[e._v("Create AWS S3 bucket to take backup & restore:")])]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Sign into the AWS Management Console and open the Amazon S3 console at "),t("a",{attrs:{href:"https://console.aws.amazon.com/s3/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://console.aws.amazon.com/s3/"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[e._v("Choose Create bucket.")]),e._v(" "),t("p",[e._v("The Create bucket wizard opens.")])]),e._v(" "),t("li",[t("p",[e._v("In Region, choose the AWS Region where you want the bucket to reside.")])]),e._v(" "),t("li",[t("p",[e._v("Choose Create bucket.")])]),e._v(" "),t("li",[t("p",[e._v("After creating bucket, the image looks like below.")])])]),e._v(" "),t("p",[t("img",{attrs:{src:o(311),alt:""}})]),e._v(" "),t("ol",{attrs:{start:"6"}},[t("li",[e._v("Now user have the access_key_id & secret key from aws. create the cloud-credentials file in below format.")])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("master: "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("vi")]),e._v(" cloud-credentials\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("default"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("aws_access_key_id")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("xxxxxxxxxxxxxxxx\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("aws_secret_access_key")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("xxxxxxxxxxxxxxxxxx\n")])])]),t("p",[t("strong",[e._v("Installing the Velero Server")]),e._v("\nonce you are ready with the appropriate bucket and backup location settings, it is time to install Velero. Run the following command, substituting your values where required:")]),e._v(" "),t("p",[t("strong",[e._v("Example:")])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("master: "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" velero "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--provider")]),e._v(" aws "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--plugins")]),e._v(" velero/velero-plugin-for-aws:v1.5.0 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--bucket")]),e._v(" velerobucket10 --secret-file ./cloud-credentials --backup-location-config "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("region")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("ap-south-1 --snapshot-location-config "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("region")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("ap-south-1\n")])])]),t("p",[e._v("You should see the following output:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("CustomResourceDefinition/backups.velero.io: attempting to create resource\nCustomResourceDefinition/backups.velero.io: attempting to create resource client\nCustomResourceDefinition/backups.velero.io: created\nCustomResourceDefinition/backupstoragelocations.velero.io: attempting to create resource\nCustomResourceDefinition/backupstoragelocations.velero.io: attempting to create resource client\nCustomResourceDefinition/backupstoragelocations.velero.io: created\nCustomResourceDefinition/deletebackuprequests.velero.io: attempting to create resource\nCustomResourceDefinition/deletebackuprequests.velero.io: attempting to create resource client\nCustomResourceDefinition/deletebackuprequests.velero.io: created\nCustomResourceDefinition/downloadrequests.velero.io: attempting to create resource\nCustomResourceDefinition/downloadrequests.velero.io: attempting to create resource client\nCustomResourceDefinition/downloadrequests.velero.io: created\nCustomResourceDefinition/podvolumebackups.velero.io: attempting to create resource\nCustomResourceDefinition/podvolumebackups.velero.io: attempting to create resource client\nCustomResourceDefinition/podvolumebackups.velero.io: created\nCustomResourceDefinition/podvolumerestores.velero.io: attempting to create resource\nCustomResourceDefinition/podvolumerestores.velero.io: attempting to create resource client\nCustomResourceDefinition/podvolumerestores.velero.io: created\nCustomResourceDefinition/resticrepositories.velero.io: attempting to create resource\nCustomResourceDefinition/resticrepositories.velero.io: attempting to create resource client\nCustomResourceDefinition/resticrepositories.velero.io: created\nCustomResourceDefinition/restores.velero.io: attempting to create resource\nCustomResourceDefinition/restores.velero.io: attempting to create resource client\nCustomResourceDefinition/restores.velero.io: created\nCustomResourceDefinition/schedules.velero.io: attempting to create resource\nCustomResourceDefinition/schedules.velero.io: attempting to create resource client\nCustomResourceDefinition/schedules.velero.io: created\nCustomResourceDefinition/serverstatusrequests.velero.io: attempting to create resource\nCustomResourceDefinition/serverstatusrequests.velero.io: attempting to create resource client\nCustomResourceDefinition/serverstatusrequests.velero.io: created\nCustomResourceDefinition/volumesnapshotlocations.velero.io: attempting to create resource\nCustomResourceDefinition/volumesnapshotlocations.velero.io: attempting to create resource client\nCustomResourceDefinition/volumesnapshotlocations.velero.io: created\nWaiting "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" resources to be ready "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" cluster"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\nNamespace/velero: attempting to create resource\nNamespace/velero: attempting to create resource client\nNamespace/velero: created\nClusterRoleBinding/velero: attempting to create resource\nClusterRoleBinding/velero: attempting to create resource client\nClusterRoleBinding/velero: created\nServiceAccount/velero: attempting to create resource\nServiceAccount/velero: attempting to create resource client\nServiceAccount/velero: created\nSecret/cloud-credentials: attempting to create resource\nSecret/cloud-credentials: attempting to create resource client\nSecret/cloud-credentials: created\nBackupStorageLocation/default: attempting to create resource\nBackupStorageLocation/default: attempting to create resource client\nBackupStorageLocation/default: created\nVolumeSnapshotLocation/default: attempting to create resource\nVolumeSnapshotLocation/default: attempting to create resource client\nVolumeSnapshotLocation/default: created\nDeployment/velero: attempting to create resource\nDeployment/velero: attempting to create resource client\nDeployment/velero: created\nVelero is installed"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v(" ⛵ Use "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'kubectl logs deployment/velero -n velero'")]),e._v(" to view the status.\n")])])]),t("p",[e._v("Once the deployment is ready you can be able to see the status using below cmd")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("master: "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" oc get po "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-n")]),e._v(" velero\nNAME READY STATUS RESTARTS AGE\nvelero-798b86bf47-2s68n "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1 Running "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" 36s\n")])])]),t("h3",{attrs:{id:"backup-and-restore"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#backup-and-restore"}},[e._v("#")]),e._v(" Backup and restore")]),e._v(" "),t("p",[e._v("Follow below steps to backup and restore:")]),e._v(" "),t("p",[e._v("To install wordpress application follow the below link")]),e._v(" "),t("p",[e._v("Example: "),t("a",{attrs:{href:"https://kubernetes.io/docs/tutorials/stateful-application/mysql-wordpress-persistent-volume/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Deploying WordPress and MySQL with Persistent Volumes | Kubernetes"),t("OutboundLink")],1)]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Below figure shows wordpress app resources under project wordpress\n"),t("img",{attrs:{src:o(312),alt:""}})])]),e._v(" "),t("li",[t("p",[e._v("Run the following command to take backup\n"),t("img",{attrs:{src:o(313),alt:""}})])]),e._v(" "),t("li",[t("p",[e._v("Run below command to get available backups in Velero\n"),t("img",{attrs:{src:o(314),alt:""}})])])]),e._v(" "),t("p",[e._v("Also, user can check from AWS S3 bucket\n"),t("img",{attrs:{src:o(315),alt:""}})]),e._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[t("p",[e._v("Now user can Delete the wordpress application and can restore from AWS S3bucket . Run the below command to restore the backup in Velero.\n"),t("img",{attrs:{src:o(316),alt:""}})])]),e._v(" "),t("li",[t("p",[e._v("Run the below command to list the restore.\n"),t("img",{attrs:{src:o(317),alt:""}})])])]),e._v(" "),t("p",[t("strong",[e._v("Verification:")]),e._v("\nVerify wordpress resources restored or not.\n"),t("img",{attrs:{src:o(318),alt:""}})])])}),[],!1,null,null,null);t.default=r.exports}}]);
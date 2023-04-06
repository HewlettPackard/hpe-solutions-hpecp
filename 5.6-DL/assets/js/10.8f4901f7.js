(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{288:function(a,e,t){a.exports=t.p+"assets/img/figure126.8586ca72.png"},289:function(a,e,t){a.exports=t.p+"assets/img/figure127.2ecd275c.png"},290:function(a,e,t){a.exports=t.p+"assets/img/figure128.951588ba.png"},409:function(a,e,t){"use strict";t.r(e);var s=t(14),n=Object(s.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"external-load-balancing-using-nginx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#external-load-balancing-using-nginx"}},[a._v("#")]),a._v(" External Load Balancing using NGINX")]),a._v(" "),e("p",[a._v("Following steps are to deploy NGINX load balancer on preconfigured HPECP cluster with HA.")]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("Prerequisite")]),a._v(" "),e("ul",[e("li",[a._v("HPECP Controller setup and Gateway with HA")])])]),a._v(" "),e("h3",{attrs:{id:"deployment-process"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deployment-process"}},[a._v("#")]),a._v(" Deployment Process")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("Install nginx on the separate VM with CentOS 7")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" yum –y "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" nginx\n")])])])]),a._v(" "),e("li",[e("p",[a._v("Create a "),e("em",[a._v("load-balancer.conf")]),a._v(" file in the following path :- "),e("em",[a._v("/etc/nginx/conf.d:")])])])]),a._v(" "),e("p",[a._v("Sample load-balancer configuration file")]),a._v(" "),e("p",[e("img",{attrs:{src:t(288),alt:""}})]),a._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[e("p",[a._v("Change the permissions for the load*-balancer.conf* file.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" 0777 /etc/nginx/conf.d/load-balancer.conf\n")])])])]),a._v(" "),e("li",[e("p",[a._v("If you have trouble loading the page, check firewall is not blocking your connection. For example: on CentOS 7 the default firewall rules do not allow HTTP traffic, enable it with the commands below.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" firewall-cmd –add-service"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("http –permanent\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" firewall-cmd "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--reload")]),a._v("\n")])])])]),a._v(" "),e("li",[e("p",[a._v("Comment out the existing server information details in the "),e("em",[a._v("/etc/nginx/nginx.conf")]),a._v(" file as shown below.\n"),e("img",{attrs:{src:t(289),alt:""}})])]),a._v(" "),e("li",[e("p",[a._v("Restart and enable nginx service:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" systemctl "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" nginx.service\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" systemctl restart nginx.service\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" systemctl status nginx.service\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("NOTE")]),a._v(" "),e("p",[e("strong",[a._v("NGINX service should be Active and running.")])])])]),a._v(" "),e("li",[e("p",[a._v("Navigate to the NGINX configured IP on browser and HPECP gateway page should come up:\n"),e("img",{attrs:{src:t(290),alt:""}})])]),a._v(" "),e("li",[e("p",[a._v("Logs can be checked in following path CLI "),e("em",[a._v("/var/log/nginx")]),a._v(" on nginx server.")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);
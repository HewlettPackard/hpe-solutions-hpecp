(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{345:function(t,e,a){t.exports=a.p+"assets/img/figure6.a946e53f.png"},421:function(t,e,a){"use strict";a.r(e);var r=a(14),s=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"physical-environment-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#physical-environment-configuration"}},[t._v("#")]),t._v(" Physical Environment Configuration")]),t._v(" "),e("p",[t._v("This section outlines the steps to be performed to configure the physical environment used in this solution.")]),t._v(" "),e("h3",{attrs:{id:"switching-and-cabling"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#switching-and-cabling"}},[t._v("#")]),t._v(" Switching and cabling")]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("Figure 6 describes the cabling configuration of nineteen (16) HPE ProLiant DL Gen11 Servers as well as the HPE Aruba 8325-32C BF switches and Aruba VSX, that takes advantage of the ArubaOS-CX modern architecture and delivers best in class high availability within the context of this solution.")]),t._v(" "),e("p",[e("img",{attrs:{src:a(345),alt:""}})]),t._v(" "),e("p",[t._v("Figure 6. Frame and switch cabling within the solution")]),t._v(" "),e("p",[t._v("Table 5 explains the cabling of the Virtual Connect interconnect modules to the HPE Aruba 8325-32C switching.")]),t._v(" "),e("p",[e("strong",[t._v("Table 5.")]),t._v(" Network used in this solution.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Network Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("VLAN Number")]),t._v(" "),e("th",[t._v("Purpose")]),t._v(" "),e("th",[t._v("Requested Bandwidth(Gb)")]),t._v(" "),e("th",[t._v("Maximum Bandwidth(Gb)")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("DataCenter_Network")]),t._v(" "),e("td",[t._v("Ethernet")]),t._v(" "),e("td",[t._v("2193")]),t._v(" "),e("td",[t._v("Production Application,authentication and other user networks")]),t._v(" "),e("td",[t._v("2.5")]),t._v(" "),e("td",[t._v("100")])]),t._v(" "),e("tr",[e("td",[t._v("Management_Network")]),t._v(" "),e("td",[t._v("Ethernet")]),t._v(" "),e("td",[t._v("1193")]),t._v(" "),e("td",[t._v("iLO, ESXi management and other management networks")]),t._v(" "),e("td",[t._v("2.5")]),t._v(" "),e("td",[t._v("100")])]),t._v(" "),e("tr",[e("td",[t._v("iSCSI_Network(optional)")]),t._v(" "),e("td",[t._v("Ethernet")]),t._v(" "),e("td",[t._v("3193")]),t._v(" "),e("td",[t._v("HPE Nimble Storage Arrays Connectivity")]),t._v(" "),e("td",[t._v("2.5")]),t._v(" "),e("td",[t._v("100")])])])]),t._v(" "),e("h3",{attrs:{id:"physical-cabling"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#physical-cabling"}},[t._v("#")]),t._v(" Physical cabling")]),t._v(" "),e("p",[t._v("Table 6 represents mapping of source ports to ports on the HPE Aruba 8325-32C switches.")]),t._v(" "),e("p",[e("strong",[t._v("Table 6.")]),t._v(" HPE Aruba port map")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Uplink Set")]),t._v(" "),e("th",[t._v("DL Source")]),t._v(" "),e("th",[t._v("Switch Destination")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Datacenter_Network")]),t._v(" "),e("td",[t._v("Enclosure 1 Port Q3")]),t._v(" "),e("td",[t._v("Interface1/1/1")])]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",[t._v("Enclosure 1 Port Q4")]),t._v(" "),e("td",[t._v("Interface1/1/2")])]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",[t._v("Enclosure 2 Port Q3")]),t._v(" "),e("td",[t._v("Interface1/1/3")])]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",[t._v("Enclosure 2 Port Q4")]),t._v(" "),e("td",[t._v("Interface1/1/4")])])])]),t._v(" "),e("p",[t._v("Hewlett Packard Enterprise recommends that the installation user logs on to the switch, post-configuration and provide a description for each of these ports.")]),t._v(" "),e("h3",{attrs:{id:"network-definition"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#network-definition"}},[t._v("#")]),t._v(" Network definition")]),t._v(" "),e("p",[t._v("There are multiple networks defined at the switch layer in this solution:")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Management Network –")]),t._v(" This network facilitates the management of hardware and software interfaced by IT.")]),t._v(" "),e("li",[e("strong",[t._v("Data Center Network")]),t._v(" – This network carries traffic from the overlay network used by the pods to external consumers of pod deployed services.")])]),t._v(" "),e("h3",{attrs:{id:"configure-vlan"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configure-vlan"}},[t._v("#")]),t._v(" Configure VLAN")]),t._v(" "),e("p",[t._v("This section details the steps required to configure a VLAN.")]),t._v(" "),e("ol",[e("li",[t._v("To add these networks to the switch, logon to the switch console over SSH and run the following commands.")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" sys\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" vlan "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1193")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2193")]),t._v("\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[t._v("For each of these VLANs, perform the following steps.")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" interface vlan-interface "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("####")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" name VLAN Name per table above\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" description Add text that describes the purpose of the VLAN\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" quit\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),e("p",[t._v("Hewlett Packard Enterprise strongly recommends configuring a dummy VLAN on the switches and assign unused ports to that VLAN.")])]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[t._v('The switches should be configured with a bridge aggregation group (BAGG) for the different links to the HPE DL Server connections. To configure the BAGG and ports as described in "Table 5" above, run the following commands.')])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" interface Bridge-Aggregation111\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" link-aggregation mode dynamic\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" description "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("FrameNameU3"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("0")]),t._v(">")]),t._v("-ICM\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" quit\n\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" interface range name "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("FrameNameU3"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("0")]),t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-ICM")]),t._v(" interface Bridge-Aggregation111\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" quit\n    \n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" interface range HundredGigE "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("/1/1 to HundredGigE "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("/1/2 HundredGigE "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("/1/1 to HundredGigE "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("/1/2\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" port link-aggregation group "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("111")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" quit\n    \n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" interface range name "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("FrameNameU3"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("0")]),t._v(">")]),t._v("-ICM\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" port link-type trunk\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" undo port trunk permit vlan "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" port trunk permit vlan "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1193")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2193")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" quit\n")])])]),e("ol",{attrs:{start:"4"}},[e("li",[t._v("After the configuration of the switches is complete, save the state and apply it by typing "),e("strong",[t._v("save")]),t._v(" and follow the resulting prompts.")])])])}),[],!1,null,null,null);e.default=s.exports}}]);
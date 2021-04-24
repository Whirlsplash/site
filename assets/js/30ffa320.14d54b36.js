(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{121:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),l=s(n),u=r,m=l["".concat(c,".").concat(u)]||l[u]||b[u]||i;return n?o.a.createElement(m,a(a({ref:t},p),{},{components:n})):o.a.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=u;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var p=2;p<i;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),i=(n(0),n(121)),c={title:"netPacket"},a={unversionedId:"worlds-jar/net-worlds/network/netpacket",id:"worlds-jar/net-worlds/network/netpacket",isDocsHomePage:!1,title:"netPacket",description:"Imports",source:"@site/docs/worlds-jar/net-worlds/network/netpacket.md",slug:"/worlds-jar/net-worlds/network/netpacket",permalink:"/docs/worlds-jar/net-worlds/network/netpacket",editUrl:"https://github.com/whirlsplash/site/edit/master/website/docs/worlds-jar/net-worlds/network/netpacket.md",version:"current",sidebar:"docs",previous:{title:"netConst",permalink:"/docs/worlds-jar/net-worlds/network/netconst"}},d=[{value:"Imports",id:"imports",children:[]},{value:"Class Type",id:"class-type",children:[]},{value:"Fields",id:"fields",children:[{value:"<code>protected ObjID _objID</code>",id:"protected-objid-_objid",children:[]},{value:"<code>protected int _commandType</code>",id:"protected-int-_commandtype",children:[]}]},{value:"Constructors",id:"constructors",children:[]},{value:"Methods",id:"methods",children:[{value:"<code>public int msgID()</code>",id:"public-int-msgid",children:[]},{value:"<code>int packetSize()</code>",id:"int-packetsize",children:[]},{value:"<code>public String toString(WorldServer serv</code>)",id:"public-string-tostringworldserver-serv",children:[]},{value:"<code>void send(</code>ServerOutputStream<code> o) throws IOException</code>",id:"void-sendserveroutputstream-o-throws-ioexception",children:[]}]}],p={toc:d};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"imports"},"Imports"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"NET.worlds.console.StatNetMUNode")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"java.io.IOException"))),Object(i.b)("h2",{id:"class-type"},"Class Type"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"abstract")),Object(i.b)("h2",{id:"fields"},"Fields"),Object(i.b)("h3",{id:"protected-objid-_objid"},Object(i.b)("inlineCode",{parentName:"h3"},"protected ObjID _objID")),Object(i.b)("h3",{id:"protected-int-_commandtype"},Object(i.b)("inlineCode",{parentName:"h3"},"protected int _commandType")),Object(i.b)("h2",{id:"constructors"},"Constructors"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"public netPacket(ObjID id, int cmd) {\n    if (id != null) {\n        this._objID = id;\n    } else {\n        this._objID = new ObjID(1);\n    }\n    this._commandType = cmd;\n}\n\npublic netPacket() {\n    this._objID = new ObjID(1);\n}\n")),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"public-int-msgid"},Object(i.b)("inlineCode",{parentName:"h3"},"public int msgID()")),Object(i.b)("p",null,"Returns ",Object(i.b)("a",{parentName:"p",href:"#protected-int-_commandtype"},Object(i.b)("inlineCode",{parentName:"a"},"this._commandType")),"."),Object(i.b)("h3",{id:"int-packetsize"},Object(i.b)("inlineCode",{parentName:"h3"},"int packetSize()")),Object(i.b)("p",null,"Returns ",Object(i.b)("inlineCode",{parentName:"p"},"2 + "),Object(i.b)("a",{parentName:"p",href:"#protected-objid-_objid"},Object(i.b)("inlineCode",{parentName:"a"},"this._objID")),Object(i.b)("inlineCode",{parentName:"p"},".packetSize()")),Object(i.b)("h3",{id:"public-string-tostringworldserver-serv"},Object(i.b)("inlineCode",{parentName:"h3"},"public String toString(WorldServer serv"),")"),Object(i.b)("p",null,"Returns ",Object(i.b)("inlineCode",{parentName:"p"},"new Integer("),Object(i.b)("a",{parentName:"p",href:"#protected-int-_commandtype"},Object(i.b)("inlineCode",{parentName:"a"},"this._commandType")),Object(i.b)("inlineCode",{parentName:"p"},").toString()")),Object(i.b)("h3",{id:"void-sendserveroutputstream-o-throws-ioexception"},Object(i.b)("inlineCode",{parentName:"h3"},"void send("),Object(i.b)("a",{parentName:"h3",href:"./serveroutputstream"},Object(i.b)("inlineCode",{parentName:"a"},"ServerOutputStream")),Object(i.b)("inlineCode",{parentName:"h3"}," o) throws IOException")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"int packetsize = packetSize();\nif (packetsize >= 256 && o.getVersion() <= 24)\n    throw new PacketTooLargeException();\nStatNetMUNode netStat = StatNetMUNode.getNode();\nnetStat.addBytesSent(packetsize);\nnetStat.addPacketsSent(1);\nassert this._commandType > 0;\nif (packetsize >= 128 && o.getVersion() > 24) {\n    o.writeByte(128 + packetsize / 256);\n    o.writeByte(packetsize & 0xFF);\n} else {\n    o.writeByte(packetsize);\n}\nthis._objID.send(o);\no.writeByte(this._commandType);\n}\n")))}s.isMDXComponent=!0}}]);
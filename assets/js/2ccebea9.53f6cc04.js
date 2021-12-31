(self.webpackChunksite=self.webpackChunksite||[]).push([[1926],{4137:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=d(r),h=i,b=p["".concat(s,".").concat(h)]||p[h]||u[h]||o;return r?n.createElement(b,l(l({ref:t},c),{},{components:r})):n.createElement(b,l({ref:t},c))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var d=2;d<o;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},919:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return a},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var n=r(2122),i=r(9756),o=(r(7294),r(4137)),l={title:"ObjId"},a=void 0,s={unversionedId:"worlds-jar/net-worlds/network/objid",id:"worlds-jar/net-worlds/network/objid",isDocsHomePage:!1,title:"ObjId",description:"Imports",source:"@site/docs/worlds-jar/net-worlds/network/objid.md",sourceDirName:"worlds-jar/net-worlds/network",slug:"/worlds-jar/net-worlds/network/objid",permalink:"/docs/worlds-jar/net-worlds/network/objid",editUrl:"https://github.com/whirlsplash/site/edit/master/website/docs/worlds-jar/net-worlds/network/objid.md",version:"current",frontMatter:{title:"ObjId"},sidebar:"docs",previous:{title:"UserServer",permalink:"/docs/worldserver-protocol/userserver"},next:{title:"ServerOutputStream",permalink:"/docs/worlds-jar/net-worlds/network/serveroutputstream"}},d=[{value:"Imports",id:"imports",children:[]},{value:"Fields",id:"fields",children:[{value:"<code>private int _shortObjID</code>",id:"private-int-_shortobjid",children:[]},{value:"<code>private String _longObjID</code>",id:"private-string-_longobjid",children:[]}]},{value:"Constructors",id:"constructors",children:[]},{value:"Methods",id:"methods",children:[{value:"<code>public int shortID()</code>",id:"public-int-shortid",children:[]},{value:"<code>public int longID()</code>",id:"public-int-longid",children:[]},{value:"<code>void parseNetData(ServerInputStream o) throws IOException</code>",id:"void-parsenetdataserverinputstream-o-throws-ioexception",children:[]},{value:"<code>public String toString(WorldServer serv)</code>",id:"public-string-tostringworldserver-serv",children:[]},{value:"<code>public String toString()</code>",id:"public-string-tostring",children:[]}]}],c={toc:d};function u(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"imports"},"Imports"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"java.io.IOException"))),(0,o.kt)("h2",{id:"fields"},"Fields"),(0,o.kt)("h3",{id:"private-int-_shortobjid"},(0,o.kt)("inlineCode",{parentName:"h3"},"private int _shortObjID")),(0,o.kt)("h3",{id:"private-string-_longobjid"},(0,o.kt)("inlineCode",{parentName:"h3"},"private String _longObjID")),(0,o.kt)("h2",{id:"constructors"},"Constructors"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public ObjID(int id) {\n    this._shortObjID = id;\n    this._longObjID = null;\n}\n\npublic ObjID(String id) {\n    this._shortObjID = 0;\n    if (id.startsWith("!"))\n        id = id.substring(1);\n    this._longObjID = id;\n}\n\npublic ObjID() {\n    this._shortObjID = 0;\n    this._longObjID = null;\n}\n')),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"public-int-shortid"},(0,o.kt)("inlineCode",{parentName:"h3"},"public int shortID()")),(0,o.kt)("p",null,"Returns ",(0,o.kt)("a",{parentName:"p",href:"#private-int-_shortobjid"},(0,o.kt)("inlineCode",{parentName:"a"},"this._shortObjID")),"."),(0,o.kt)("h3",{id:"public-int-longid"},(0,o.kt)("inlineCode",{parentName:"h3"},"public int longID()")),(0,o.kt)("p",null,"Returns ",(0,o.kt)("a",{parentName:"p",href:"#private-string-_longobjid"},(0,o.kt)("inlineCode",{parentName:"a"},"this._longObjID")),"."),(0,o.kt)("h3",{id:"void-parsenetdataserverinputstream-o-throws-ioexception"},(0,o.kt)("inlineCode",{parentName:"h3"},"void parseNetData(ServerInputStream o) throws IOException")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"if (this._longObjID != null) {\n    o.writeByte(0);\n    o.writeUTF(this._longObjID);\n} else {\n    assert this._shortObjID == 1 || this._shortObjID >= 253;\n    o.writeByte(this._shortObjID);\n} \n")),(0,o.kt)("p",null,"TLDR; Returns the correct field?"),(0,o.kt)("h3",{id:"public-string-tostringworldserver-serv"},(0,o.kt)("inlineCode",{parentName:"h3"},"public String toString(WorldServer serv)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'if (this._longObjID != null)\n    return this._longObjID;\n    \nreturn String.valueOf(Integer.toString(this._shortObjID)) +\n    "[" + serv.getLongID(this) + "]";\n')),(0,o.kt)("h3",{id:"public-string-tostring"},(0,o.kt)("inlineCode",{parentName:"h3"},"public String toString()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'if (this._longObjID != null)\n    return this._longObjID;\n\nreturn "[#" + Integer.toString(this._shortObjID) + "]";\n')))}u.isMDXComponent=!0}}]);
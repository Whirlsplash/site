(self.webpackChunksite=self.webpackChunksite||[]).push([[6403],{4137:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return v}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),v=r,f=d["".concat(s,".").concat(v)]||d[v]||p[v]||o;return n?i.createElement(f,a(a({ref:t},c),{},{components:n})):i.createElement(f,a({ref:t},c))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1272:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var i=n(2122),r=n(9756),o=(n(7294),n(4137)),a={title:"ServerOutputStream"},l=void 0,s={unversionedId:"worlds-jar/net-worlds/network/serveroutputstream",id:"worlds-jar/net-worlds/network/serveroutputstream",isDocsHomePage:!1,title:"ServerOutputStream",description:"Imports",source:"@site/docs/worlds-jar/net-worlds/network/serveroutputstream.md",sourceDirName:"worlds-jar/net-worlds/network",slug:"/worlds-jar/net-worlds/network/serveroutputstream",permalink:"/docs/worlds-jar/net-worlds/network/serveroutputstream",editUrl:"https://github.com/whirlsplash/site/edit/master/website/docs/worlds-jar/net-worlds/network/serveroutputstream.md",version:"current",frontMatter:{title:"ServerOutputStream"},sidebar:"docs",previous:{title:"ObjId",permalink:"/docs/worlds-jar/net-worlds/network/objid"},next:{title:"netConst",permalink:"/docs/worlds-jar/net-worlds/network/netconst"}},u=[{value:"Imports",id:"imports",children:[]},{value:"Extends",id:"extends",children:[]},{value:"Fields",id:"fields",children:[{value:"<code>private int _version</code>",id:"private-int-_version",children:[]}]},{value:"Constructors",id:"constructors",children:[]},{value:"Methods",id:"methods",children:[{value:"<code>public void setVersion(int vers)</code>",id:"public-void-setversionint-vers",children:[]},{value:"<code>public int getVersion()</code>",id:"public-int-getversion",children:[]},{value:"<code>public final void write(int b) throws IOException</code>",id:"public-final-void-writeint-b-throws-ioexception",children:[]},{value:"<code>public final void write(byte[] b, int off, len) throws IOException</code>",id:"public-final-void-writebyte-b-int-off-len-throws-ioexception",children:[]},{value:"<code>public final void writeByte(int v) throws IOException</code>",id:"public-final-void-writebyteint-v-throws-ioexception",children:[]},{value:"<code>public final void writeShort(int v) throws IOException</code>",id:"public-final-void-writeshortint-v-throws-ioexception",children:[]},{value:"<code>public final void writeInt(int v) throws IOException</code>",id:"public-final-void-writeintint-v-throws-ioexception",children:[]},{value:"<code>public static int utfLength(String str)</code>",id:"public-static-int-utflengthstring-str",children:[]},{value:"<code>public final void writeUTF(String str) throws IOException</code>",id:"public-final-void-writeutfstring-str-throws-ioexception",children:[]},{value:"Resources",id:"resources",children:[]}]}],c={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"imports"},"Imports"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"java.io.FilterOutputStream")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"java.io.IOException")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"java.io.OutputStream"))),(0,o.kt)("h2",{id:"extends"},"Extends"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/7/docs/api/java/io/FilterOutputStream.html"},"FilterOutputStream")),(0,o.kt)("h2",{id:"fields"},"Fields"),(0,o.kt)("h3",{id:"private-int-_version"},(0,o.kt)("inlineCode",{parentName:"h3"},"private int _version")),(0,o.kt)("p",null,"Purpose is to be determined."),(0,o.kt)("h2",{id:"constructors"},"Constructors"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public ServerOutputStream(OutputStream o) {\n    super(o);\n    setVersion(24);\n}\n\npublic ServerOutputStream(OutputStream o, int vers) {\n    super(o);\n    setVersion(vers);\n}\n")),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"public-void-setversionint-vers"},(0,o.kt)("inlineCode",{parentName:"h3"},"public void setVersion(int vers)")),(0,o.kt)("p",null,"Sets ",(0,o.kt)("a",{parentName:"p",href:"#private-int-_version"},(0,o.kt)("inlineCode",{parentName:"a"},"this._version"))," to ",(0,o.kt)("inlineCode",{parentName:"p"},"vers"),"."),(0,o.kt)("h3",{id:"public-int-getversion"},(0,o.kt)("inlineCode",{parentName:"h3"},"public int getVersion()")),(0,o.kt)("p",null,"Returns ",(0,o.kt)("a",{parentName:"p",href:"#private-int-_version"},(0,o.kt)("inlineCode",{parentName:"a"},"this._version")),"."),(0,o.kt)("h3",{id:"public-final-void-writeint-b-throws-ioexception"},(0,o.kt)("inlineCode",{parentName:"h3"},"public final void write(int b) throws IOException")),(0,o.kt)("p",null,"Writes the singular byte; ",(0,o.kt)("inlineCode",{parentName:"p"},"b")," to the output stream."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"this.out.write(b);\n")),(0,o.kt)("h3",{id:"public-final-void-writebyte-b-int-off-len-throws-ioexception"},(0,o.kt)("inlineCode",{parentName:"h3"},"public final void write(byte[] b, int off, len) throws IOException")),(0,o.kt)("p",null,"Writes ",(0,o.kt)("inlineCode",{parentName:"p"},"len")," bytes from the specified byte array starting at the offset; ",(0,o.kt)("inlineCode",{parentName:"p"},"off")," to the output stream."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"this.out.write(b, off, len);\n")),(0,o.kt)("h3",{id:"public-final-void-writebyteint-v-throws-ioexception"},(0,o.kt)("inlineCode",{parentName:"h3"},"public final void writeByte(int v) throws IOException")),(0,o.kt)("p",null,"Clone of ",(0,o.kt)("a",{parentName:"p",href:"#public-final-void-writeint-b-throws-ioexception"},(0,o.kt)("inlineCode",{parentName:"a"},"write(int b)")),"."),(0,o.kt)("h3",{id:"public-final-void-writeshortint-v-throws-ioexception"},(0,o.kt)("inlineCode",{parentName:"h3"},"public final void writeShort(int v) throws IOException")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"OutputStream out = this.out;\nout.write(v >>> 8 & 0xFF);\nout.write(v >>> 0 & 0xFF);\n")),(0,o.kt)("h3",{id:"public-final-void-writeintint-v-throws-ioexception"},(0,o.kt)("inlineCode",{parentName:"h3"},"public final void writeInt(int v) throws IOException")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"OutputStream out = this.out;\nout.write(v >>> 24 & 0xFF);\nout.write(v >>> 16 & 0xFF);\nout.write(v >>> 8 & 0xFF);\nout.write(v >>> 0 & 0xFF);\n")),(0,o.kt)("h3",{id:"public-static-int-utflengthstring-str"},(0,o.kt)("inlineCode",{parentName:"h3"},"public static int utfLength(String str)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"int strlen = str.length();\nint utflen = 0;\nfor (int i = 0; i < strlen; i++) {\n    int c = str.charAt(i);\n    if (c >= 1 && c <= 127) {\n        utflen++;\n    } else if (c > 2047) {\n        utflen += 3;\n    } else {\n        utflen += 2;\n    }\n}\nreturn utflen;\n")),(0,o.kt)("h3",{id:"public-final-void-writeutfstring-str-throws-ioexception"},(0,o.kt)("inlineCode",{parentName:"h3"},"public final void writeUTF(String str) throws IOException")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"OutputStream out = this.out;\nint strlen = str.length();\nint utflen = utfLength(str);\nassert utflen < 256;\nout.write(utflen >>> 0 & 0xFF);\nfor (int i = 0; i < strlen; i++) {\n    int c = str.charAt(i);\n    if (c >= 1 && c <= 127) {\n        out.write(c);\n    } else if (c > 2047) {\n        out.write(0xE0 | c >> 12 & 0xF);\n        out.write(0x80 | c >> 6 & 0x3F);\n        out.write(0x80 | c >> 0 & 0x3F);\n    } else {\n        out.write(0xC0 | c >> 6 & 0x1F);\n        out.write(0x80 | c >> 0 & 0x3F);\n    }\n} \n")),(0,o.kt)("h3",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/7/docs/api/java/io/FilterOutputStream.html"},"https://docs.oracle.com/javase/7/docs/api/java/io/FilterOutputStream.html"))))}p.isMDXComponent=!0}}]);
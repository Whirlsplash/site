(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{112:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return v}));var i=n(0),r=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=i,v=p["".concat(a,".").concat(d)]||p[d]||b[d]||o;return n?r.a.createElement(v,c(c({ref:t},s),{},{components:n})):r.a.createElement(v,c({ref:t},s))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var i=n(3),r=n(7),o=(n(0),n(112)),a={title:"ServerOutputStream"},c={unversionedId:"worlds-jar/net-worlds/network/serveroutputstream",id:"worlds-jar/net-worlds/network/serveroutputstream",isDocsHomePage:!1,title:"ServerOutputStream",description:"Imports",source:"@site/docs/worlds-jar/net-worlds/network/serveroutputstream.md",slug:"/worlds-jar/net-worlds/network/serveroutputstream",permalink:"/docs/worlds-jar/net-worlds/network/serveroutputstream",editUrl:"https://github.com/whirlsplash/site/edit/master/website/docs/worlds-jar/net-worlds/network/serveroutputstream.md",version:"current",sidebar:"docs",previous:{title:"ObjId",permalink:"/docs/worlds-jar/net-worlds/network/objid"},next:{title:"netConst",permalink:"/docs/worlds-jar/net-worlds/network/netconst"}},l=[{value:"Imports",id:"imports",children:[]},{value:"Extends",id:"extends",children:[]},{value:"Fields",id:"fields",children:[{value:"<code>private int _version</code>",id:"private-int-_version",children:[]}]},{value:"Constructors",id:"constructors",children:[]},{value:"Methods",id:"methods",children:[{value:"<code>public void setVersion(int vers)</code>",id:"public-void-setversionint-vers",children:[]},{value:"<code>public int getVersion()</code>",id:"public-int-getversion",children:[]},{value:"<code>public final void write(int b) throws IOException</code>",id:"public-final-void-writeint-b-throws-ioexception",children:[]},{value:"<code>public final void write(byte[] b, int off, len) throws IOException</code>",id:"public-final-void-writebyte-b-int-off-len-throws-ioexception",children:[]},{value:"<code>public final void writeByte(int v) throws IOException</code>",id:"public-final-void-writebyteint-v-throws-ioexception",children:[]},{value:"<code>public final void writeShort(int v) throws IOException</code>",id:"public-final-void-writeshortint-v-throws-ioexception",children:[]},{value:"<code>public final void writeInt(int v) throws IOException</code>",id:"public-final-void-writeintint-v-throws-ioexception",children:[]},{value:"<code>public static int utfLength(String str)</code>",id:"public-static-int-utflengthstring-str",children:[]},{value:"<code>public final void writeUTF(String str) throws IOException</code>",id:"public-final-void-writeutfstring-str-throws-ioexception",children:[]},{value:"Resources",id:"resources",children:[]}]}],s={toc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"imports"},"Imports"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"java.io.FilterOutputStream")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"java.io.IOException")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"java.io.OutputStream"))),Object(o.b)("h2",{id:"extends"},"Extends"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://docs.oracle.com/javase/7/docs/api/java/io/FilterOutputStream.html"},"FilterOutputStream")),Object(o.b)("h2",{id:"fields"},"Fields"),Object(o.b)("h3",{id:"private-int-_version"},Object(o.b)("inlineCode",{parentName:"h3"},"private int _version")),Object(o.b)("p",null,"Purpose is to be determined."),Object(o.b)("h2",{id:"constructors"},"Constructors"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"public ServerOutputStream(OutputStream o) {\n    super(o);\n    setVersion(24);\n}\n\npublic ServerOutputStream(OutputStream o, int vers) {\n    super(o);\n    setVersion(vers);\n}\n")),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("h3",{id:"public-void-setversionint-vers"},Object(o.b)("inlineCode",{parentName:"h3"},"public void setVersion(int vers)")),Object(o.b)("p",null,"Sets ",Object(o.b)("a",{parentName:"p",href:"#private-int-_version"},Object(o.b)("inlineCode",{parentName:"a"},"this._version"))," to ",Object(o.b)("inlineCode",{parentName:"p"},"vers"),"."),Object(o.b)("h3",{id:"public-int-getversion"},Object(o.b)("inlineCode",{parentName:"h3"},"public int getVersion()")),Object(o.b)("p",null,"Returns ",Object(o.b)("a",{parentName:"p",href:"#private-int-_version"},Object(o.b)("inlineCode",{parentName:"a"},"this._version")),"."),Object(o.b)("h3",{id:"public-final-void-writeint-b-throws-ioexception"},Object(o.b)("inlineCode",{parentName:"h3"},"public final void write(int b) throws IOException")),Object(o.b)("p",null,"Writes the singular byte; ",Object(o.b)("inlineCode",{parentName:"p"},"b")," to the output stream."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"this.out.write(b);\n")),Object(o.b)("h3",{id:"public-final-void-writebyte-b-int-off-len-throws-ioexception"},Object(o.b)("inlineCode",{parentName:"h3"},"public final void write(byte[] b, int off, len) throws IOException")),Object(o.b)("p",null,"Writes ",Object(o.b)("inlineCode",{parentName:"p"},"len")," bytes from the specified byte array starting at the offset; ",Object(o.b)("inlineCode",{parentName:"p"},"off")," to the output stream."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"this.out.write(b, off, len);\n")),Object(o.b)("h3",{id:"public-final-void-writebyteint-v-throws-ioexception"},Object(o.b)("inlineCode",{parentName:"h3"},"public final void writeByte(int v) throws IOException")),Object(o.b)("p",null,"Clone of ",Object(o.b)("a",{parentName:"p",href:"#public-final-void-writeint-b-throws-ioexception"},Object(o.b)("inlineCode",{parentName:"a"},"write(int b)")),"."),Object(o.b)("h3",{id:"public-final-void-writeshortint-v-throws-ioexception"},Object(o.b)("inlineCode",{parentName:"h3"},"public final void writeShort(int v) throws IOException")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"OutputStream out = this.out;\nout.write(v >>> 8 & 0xFF);\nout.write(v >>> 0 & 0xFF);\n")),Object(o.b)("h3",{id:"public-final-void-writeintint-v-throws-ioexception"},Object(o.b)("inlineCode",{parentName:"h3"},"public final void writeInt(int v) throws IOException")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"OutputStream out = this.out;\nout.write(v >>> 24 & 0xFF);\nout.write(v >>> 16 & 0xFF);\nout.write(v >>> 8 & 0xFF);\nout.write(v >>> 0 & 0xFF);\n")),Object(o.b)("h3",{id:"public-static-int-utflengthstring-str"},Object(o.b)("inlineCode",{parentName:"h3"},"public static int utfLength(String str)")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"int strlen = str.length();\nint utflen = 0;\nfor (int i = 0; i < strlen; i++) {\n    int c = str.charAt(i);\n    if (c >= 1 && c <= 127) {\n        utflen++;\n    } else if (c > 2047) {\n        utflen += 3;\n    } else {\n        utflen += 2;\n    }\n}\nreturn utflen;\n")),Object(o.b)("h3",{id:"public-final-void-writeutfstring-str-throws-ioexception"},Object(o.b)("inlineCode",{parentName:"h3"},"public final void writeUTF(String str) throws IOException")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"OutputStream out = this.out;\nint strlen = str.length();\nint utflen = utfLength(str);\nassert utflen < 256;\nout.write(utflen >>> 0 & 0xFF);\nfor (int i = 0; i < strlen; i++) {\n    int c = str.charAt(i);\n    if (c >= 1 && c <= 127) {\n        out.write(c);\n    } else if (c > 2047) {\n        out.write(0xE0 | c >> 12 & 0xF);\n        out.write(0x80 | c >> 6 & 0x3F);\n        out.write(0x80 | c >> 0 & 0x3F);\n    } else {\n        out.write(0xC0 | c >> 6 & 0x1F);\n        out.write(0x80 | c >> 0 & 0x3F);\n    }\n} \n")),Object(o.b)("h3",{id:"resources"},"Resources"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://docs.oracle.com/javase/7/docs/api/java/io/FilterOutputStream.html"},"https://docs.oracle.com/javase/7/docs/api/java/io/FilterOutputStream.html"))))}u.isMDXComponent=!0}}]);
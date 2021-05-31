(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{123:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return f}));var o=t(0),n=t.n(o);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=n.a.createContext({}),u=function(e){var r=n.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=u(e.components);return n.a.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},m=n.a.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(t),m=o,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return t?n.a.createElement(f,s(s({ref:r},l),{},{components:t})):n.a.createElement(f,s({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},72:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return s})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return l})),t.d(r,"default",(function(){return p}));var o=t(3),n=t(7),a=(t(0),t(123)),i=["components"],s={title:"RoomServer"},c={unversionedId:"worldserver-protocol/roomserver",id:"worldserver-protocol/roomserver",isDocsHomePage:!1,title:"RoomServer",description:"The following information is directly quoted from the GammaDocs.",source:"@site/docs/worldserver-protocol/roomserver.md",sourceDirName:"worldserver-protocol",slug:"/worldserver-protocol/roomserver",permalink:"/docs/worldserver-protocol/roomserver",editUrl:"https://github.com/whirlsplash/site/edit/master/website/docs/worldserver-protocol/roomserver.md",version:"current",frontMatter:{title:"RoomServer"},sidebar:"docs",previous:{title:"Network Constants",permalink:"/docs/worldserver-protocol/network-constants"},next:{title:"UserServer",permalink:"/docs/worldserver-protocol/userserver"}},l=[],u={toc:l};function p(e){var r=e.components,t=Object(n.a)(e,i);return Object(a.b)("wrapper",Object(o.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The following information is directly quoted from the ",Object(a.b)("a",{parentName:"p",href:"http://dev.worlds.net/private/GammaDocs/Dev_Kit_Intro.html"},"GammaDocs"),"."),Object(a.b)("p",null,"The RoomServer can operate in stand-alone mode to handle an entire\nworld when no user authentication is required. For larger worlds, or when user authentication and\nregistration are required, multiple RoomServers can be used in conjunction with a UserServer. If\nshared state (shared objects) is desired, the RoomServer must run in conjunction with an Oracle\ndatabase that will store persistent room data. The RoomServer performs the following tasks:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Listens on a given port to connections by clients."),Object(a.b)("li",{parentName:"ul"},"Establishes and maintains TCP/IP client connections (when used in conjunction with a UserServer,\nUserServer will establish the first TCP/IP connection with a client and then redirect users to the RoomServers)."),Object(a.b)("li",{parentName:"ul"},"Subscribes clients to any room the RoomServer is servicing"),Object(a.b)("li",{parentName:"ul"},"Processes client's avatar locations and properties."),Object(a.b)("li",{parentName:"ul"},"Disseminates and provides client locations and properties information to other clients in the\nvicinity. Performs crowd control calculations that determine how avatars are seen and heard by others."),Object(a.b)("li",{parentName:"ul"},"Handles and distributes chat text, whispers and broadcast text. Whispers and other messages\ntargeted at users not on that RoomServer are forwarded to the UserServer for routing."),Object(a.b)("li",{parentName:"ul"},"Acts as a database client for a properties database to query or modify Room properties, if any.\nThis includes accessing properties for any shared state or shared objects found in rooms.")))}p.isMDXComponent=!0}}]);
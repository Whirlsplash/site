(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{123:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=i.a.createContext({}),c=function(e){var t=i.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),h=n,f=u["".concat(a,".").concat(h)]||u[h]||b[h]||o;return r?i.a.createElement(f,s(s({ref:t},p),{},{components:r})):i.a.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var p=2;p<o;p++)a[p]=r[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},87:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(3),i=r(7),o=(r(0),r(123)),a=["components"],s={slug:"progress-is-progress",title:"Progress is Progress",author:"Fuwn",author_title:"Whirlsplash Core Team",author_url:"https://github.com/fuwn",author_image_url:"https://avatars.githubusercontent.com/u/50817549?v=4",tags:["status","info"]},l={permalink:"/blog/progress-is-progress",editUrl:"https://github.com/whirlsplash/site/edit/master/website/blog/blog/2021-04-21-progress-is-progress.md",source:"@site/blog/2021-04-21-progress-is-progress.md",title:"Progress is Progress",description:"A lot has happened since the last blog post.",date:"2021-04-21T00:00:00.000Z",formattedDate:"April 21, 2021",tags:[{label:"status",permalink:"/blog/tags/status"},{label:"info",permalink:"/blog/tags/info"}],readingTime:1.28,truncated:!1,nextItem:{title:"The State of Whirl",permalink:"/blog/the-state-of-whirl"}},p=[{value:"What has happened",id:"what-has-happened",children:[]},{value:"Issues that remain",id:"issues-that-remain",children:[]},{value:"But does it work ?",id:"but-does-it-work-",children:[]},{value:"Plan (s) going on",id:"plan-s-going-on",children:[]}],c={toc:p};function u(e){var t=e.components,r=Object(i.a)(e,a);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A lot has happened since the ",Object(o.b)("a",{parentName:"p",href:"/blog/the-state-of-whirl"},"last blog post"),"."),Object(o.b)("h2",{id:"what-has-happened"},"What has happened"),Object(o.b)("p",null,"For starters, the Go rewrite which was previously mentioned has been scraped for now. A complete\nrewrite has been performed ",Object(o.b)("em",{parentName:"p"},"once again")," in ",Object(o.b)("a",{parentName:"p",href:"https://www.rust-lang.org/"},"Rust")," -- the original plan."),Object(o.b)("p",null,"I will soon be publishing the current (rewrite) source of Whirl within the\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/Whirlsplash/whirl"},"official GitHub repository")," as new development branch."),Object(o.b)("h2",{id:"issues-that-remain"},"Issues that remain"),Object(o.b)("p",null,"There are still few issues which are present such as a known issue where the client is not properly\ntransferred over to the Hub (RoomServer) when it is finished communicating with the Distributor\n(AutoServer). This issue is only apparent about 50% of the time but it is still of high priority.\nYou can find it's corresponding GitHub issue ",Object(o.b)("a",{parentName:"p",href:"https://github.com/whirlsplash/whirl/issues/2"},"here"),"."),Object(o.b)("h2",{id:"but-does-it-work-"},"But does it work ?"),Object(o.b)("p",null,"Despite these setbacks, issues, et cetera, the implementation is functional as you can see in the\nimage below."),Object(o.b)("img",{src:"/img/blog/2021-04-21-progress-is-progress/ss-client-connected-to-server.png",alt:"Client connected to server",width:"100%"}),Object(o.b)("p",null,"The Distributor (AutoServer) is close to 95% functionality (compared to the official servers), where\nas the Hub (RoomServer) is estimated to be at ~5 - ~10% functionality."),Object(o.b)("h2",{id:"plan-s-going-on"},"Plan (s) going on"),Object(o.b)("p",null,"In the following weeks, focus will be aimed at (priority as follows);"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Fixing the Distributor to Hub transfer ",Object(o.b)("a",{parentName:"p",href:"https://github.com/whirlsplash/whirl/issues/2"},"issue"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Implementing more of the Hub's known features"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"No specifics, features will be implemented as I see fit and will be based mostly off of their\npriority in the functionality of the Hub (RoomServer)."),Object(o.b)("p",{parentName:"li"},'E.g., is "a" needed for "b" to work? is "c" important right now?'))))))}u.isMDXComponent=!0}}]);
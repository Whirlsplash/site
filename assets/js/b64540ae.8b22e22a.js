(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{106:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(123)),u=["components"],i={title:"Getting Started",slug:"/"},s={unversionedId:"tutorial/getting-started",id:"tutorial/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Step 1: Generate a new Docusaurus site",source:"@site/docs/tutorial/getting-started.md",sourceDirName:"tutorial",slug:"/",permalink:"/docs/",editUrl:"https://github.com/whirlsplash/site/edit/master/website/docs/tutorial/getting-started.md",version:"current",frontMatter:{title:"Getting Started",slug:"/"}},c=[{value:"Step 1: Generate a new Docusaurus site",id:"step-1-generate-a-new-docusaurus-site",children:[]},{value:"Step 2: Start your Docusaurus site",id:"step-2-start-your-docusaurus-site",children:[]},{value:"That&#39;s it!",id:"thats-it",children:[]}],l={toc:c};function p(e){var t=e.components,r=Object(a.a)(e,u);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"step-1-generate-a-new-docusaurus-site"},"Step 1: Generate a new Docusaurus site"),Object(o.b)("p",null,"If you haven't already, generate a new Docusaurus site using the classic template:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"npx @docusaurus/init@latest init my-website classic\n")),Object(o.b)("h2",{id:"step-2-start-your-docusaurus-site"},"Step 2: Start your Docusaurus site"),Object(o.b)("p",null,"Run the development server in the newly created ",Object(o.b)("inlineCode",{parentName:"p"},"my-website")," folder:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"cd my-website\n\nnpx docusaurus start\n")),Object(o.b)("p",null,"Open ",Object(o.b)("inlineCode",{parentName:"p"},"docs/getting-started.md")," and edit some lines. The site reloads automatically and display your changes."),Object(o.b)("h2",{id:"thats-it"},"That's it!"),Object(o.b)("p",null,"Congratulations! You've successfully run and modified your Docusaurus project."))}p.isMDXComponent=!0},123:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(r),b=n,f=p["".concat(u,".").concat(b)]||p[b]||d[b]||o;return r?a.a.createElement(f,i(i({ref:t},c),{},{components:r})):a.a.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,u=new Array(o);u[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,u[1]=i;for(var c=2;c<o;c++)u[c]=r[c];return a.a.createElement.apply(null,u)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);
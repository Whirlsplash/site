(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{123:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),s=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||o;return a?n.a.createElement(m,i(i({ref:t},p),{},{components:a})):n.a.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=a[p];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return u}));var r=a(3),n=a(7),o=(a(0),a(123)),c=["components"],i={title:"Create a Page"},l={unversionedId:"tutorial/create-a-page",id:"tutorial/create-a-page",isDocsHomePage:!1,title:"Create a Page",description:"Any React or Markdown file created under src/pages directory is converted into a website page:",source:"@site/docs/tutorial/create-a-page.md",sourceDirName:"tutorial",slug:"/tutorial/create-a-page",permalink:"/docs/tutorial/create-a-page",editUrl:"https://github.com/whirlsplash/site/edit/master/website/docs/tutorial/create-a-page.md",version:"current",frontMatter:{title:"Create a Page"}},p=[{value:"Create a React Page",id:"create-a-react-page",children:[]},{value:"Create a Markdown Page",id:"create-a-markdown-page",children:[]}],s={toc:p};function u(e){var t=e.components,a=Object(n.a)(e,c);return Object(o.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Any React or Markdown file created under ",Object(o.b)("inlineCode",{parentName:"p"},"src/pages")," directory is converted into a website page:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"src/pages/index.js")," -> ",Object(o.b)("inlineCode",{parentName:"li"},"localhost:3000/")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"src/pages/foo.md")," -> ",Object(o.b)("inlineCode",{parentName:"li"},"localhost:3000/foo")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"src/pages/foo/bar.js")," -> ",Object(o.b)("inlineCode",{parentName:"li"},"localhost:3000/foo/bar"))),Object(o.b)("h2",{id:"create-a-react-page"},"Create a React Page"),Object(o.b)("p",null,"Create a file at ",Object(o.b)("inlineCode",{parentName:"p"},"src/pages/my-react-page.js"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/pages/my-react-page.js"',title:'"src/pages/my-react-page.js"'},"import React from 'react';\nimport Layout from '@theme/Layout';\n\nfunction HelloWorld() {\n  return (\n    <Layout>\n      <h1>My React page</h1>\n      <p>This is a React page</p>\n    </Layout>\n  );\n}\n")),Object(o.b)("p",null,"A new page is now available at ",Object(o.b)("inlineCode",{parentName:"p"},"http://localhost:3000/my-react-page"),"."),Object(o.b)("h2",{id:"create-a-markdown-page"},"Create a Markdown Page"),Object(o.b)("p",null,"Create a file at ",Object(o.b)("inlineCode",{parentName:"p"},"src/pages/my-markdown-page.md"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-mdx",metastring:'title="src/pages/my-markdown-page.md"',title:'"src/pages/my-markdown-page.md"'},"---\ntitle: My Markdown page\n---\n\n# My Markdown page\n\nThis is a Markdown page\n")),Object(o.b)("p",null,"A new page is now available at ",Object(o.b)("inlineCode",{parentName:"p"},"http://localhost:3000/my-markdown-page"),"."))}u.isMDXComponent=!0}}]);
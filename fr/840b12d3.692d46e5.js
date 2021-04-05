(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{179:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),a=(r(0),r(266)),c={title:"Imports Racines"},i={unversionedId:"cookbook/root-imports",id:"cookbook/root-imports",isDocsHomePage:!1,title:"Imports Racines",description:"`typescript",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/cookbook/root-imports.md",slug:"/cookbook/root-imports",permalink:"/fr/docs/cookbook/root-imports",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/i18n/fr/docusaurus-plugin-content-docs/current/cookbook/root-imports.md",version:"current",sidebar:"someSidebar",previous:{title:"ExpressJS",permalink:"/fr/docs/cookbook/expressjs"},next:{title:"Limiter les Requ\xeates R\xe9p\xe9t\xe9es",permalink:"/fr/docs/cookbook/limit-repeated-requests"}},p=[],s={toc:p};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"// Relative import\nimport { User } from '../../entities';\n\n// Root import\nimport { User } from 'app/entities';\n")),Object(a.b)("p",null,"FoalTS build does not resolve root imports by default. You must install the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/module-alias"}),"module-alias")," package if you want to use them. Here's how to configure the library with Foal:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"npm install module-alias\n")),Object(a.b)("p",null,"Specify the directory from which root imports should be resolved during compilation."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"tsconfig.json")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "compilerOptions": {\n    "baseUrl": "src",\n    ...\n  }\n}\n')),Object(a.b)("p",null,"Specify the directory from which root imports should be resolved at runtime."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"package.json")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  ...\n   "_moduleDirectories": ["./build"]\n}\n')),Object(a.b)("p",null,"Then register the loader at the top of the file ",Object(a.b)("inlineCode",{parentName:"p"},"src/index.ts"),"."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"src/index.ts")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import 'module-alias/register';\n\n// ...\n")),Object(a.b)("p",null,"If you use shell scripts, the loader must also be registered at the top of each one."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"src/scripts/create-user.ts (example)")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import 'module-alias/register';\n\n// ...\n")))}l.isMDXComponent=!0},266:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,d=u["".concat(c,".").concat(m)]||u[m]||b[m]||a;return r?o.a.createElement(d,i(i({ref:t},s),{},{components:r})):o.a.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);
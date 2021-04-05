(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{157:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),a=(r(0),r(266)),s={title:"Limitar las Solicitudes Repetidas"},i={unversionedId:"cookbook/limit-repeated-requests",id:"cookbook/limit-repeated-requests",isDocsHomePage:!1,title:"Limitar las Solicitudes Repetidas",description:"To avoid brute force attacks or overloading your application, you can set up a rate limiter to limit the number of requests a user can send to your application.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/cookbook/limit-repeated-requests.md",slug:"/cookbook/limit-repeated-requests",permalink:"/es/docs/cookbook/limit-repeated-requests",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/i18n/es/docusaurus-plugin-content-docs/current/cookbook/limit-repeated-requests.md",version:"current",sidebar:"someSidebar",previous:{title:"Root Imports",permalink:"/es/docs/cookbook/root-imports"},next:{title:"Base 64 URL",permalink:"/es/docs/cookbook/base64url"}},c=[{value:"Basic Example",id:"basic-example",children:[]},{value:"Usage with CORS",id:"usage-with-cors",children:[]}],p={toc:c};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"To avoid brute force attacks or overloading your application, you can set up a rate limiter to limit the number of requests a user can send to your application."),Object(a.b)("h2",{id:"basic-example"},"Basic Example"),Object(a.b)("p",null,"Foal does not provide a built-in utility for this, but you can use the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/nfriedly/express-rate-limit"}),"express-rate-limit")," package to handle it."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"npm install express express-rate-limit\n")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"src/index.ts")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"// std\nimport * as http from 'http';\n\n// 3p\nimport { Config, createApp, displayServerURL } from '@foal/core';\nimport * as express from 'express';\nimport * as rateLimit from 'express-rate-limit';\n\n// App\nimport { AppController } from './app/app.controller';\n\nasync function main() {\n  const expressApp = express();\n  expressApp.use(rateLimit({\n    // Limit each IP to 100 requests per windowMs\n    max: 100,\n    // 15 minutes\n    windowMs: 15 * 60 * 1000,\n    handler (req, res, next) {\n      // Set default FoalTS headers to the response of limited requests\n      res.removeHeader('X-Powered-By');\n      res.setHeader('X-Content-Type-Options', 'nosniff');\n      res.setHeader('X-Frame-Options', 'SAMEORIGIN');\n      res.setHeader('X-XSS-Protection', '1; mode=block');\n      res.setHeader('Strict-Transport-Security', 'max-age=15552000; includeSubDomains');\n      \n      // Send the response with the default statusCode and message from rateLimit\n      res.status(this.statusCode || 429).send(this.message);\n    }\n  }));\n    \n  const app = await createApp(AppController, { expressInstance: expressApp });\n    \n  const httpServer = http.createServer(app);\n  const port = Config.get('port', 'number', 3001);\n  httpServer.listen(port, () => displayServerURL(port));\n}\n\nmain()\n  .catch(err => { console.error(err.stack); process.exit(1); });\n")),Object(a.b)("h2",{id:"usage-with-cors"},"Usage with CORS"),Object(a.b)("p",null,"In case your application needs to allow CORS requests, you can also update your ",Object(a.b)("inlineCode",{parentName:"p"},"index.ts")," as follows."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"expressApp.use(rateLimit({\n  max: 100,\n  windowMs: 15 * 60 * 1000,\n  handler (req, res, next) {\n    res.removeHeader('X-Powered-By');\n    res.setHeader('X-Content-Type-Options', 'nosniff');\n    res.setHeader('X-Frame-Options', 'SAMEORIGIN');\n    res.setHeader('X-XSS-Protection', '1; mode=block');\n    res.setHeader('Strict-Transport-Security', 'max-age=15552000; includeSubDomains');\n\n    // Set CORS headers\n    res.setHeader('Access-Control-Allow-Origin', '*');\n    if (req.method === 'OPTIONS') {\n      // You may want to allow other headers depending on what you need (Authorization, etc).\n      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');\n      res.setHeader('Access-Control-Allow-Methods', 'HEAD, GET, POST, PUT, PATCH, DELETE');\n    }\n\n    res.status(this.statusCode || 429).send(this.message);\n  }\n}));\n")))}l.isMDXComponent=!0},266:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,b=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return r?o.a.createElement(b,i(i({ref:t},p),{},{components:r})):o.a.createElement(b,i({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);
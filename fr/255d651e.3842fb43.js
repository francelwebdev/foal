(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{111:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var i=n(3),r=n(7),a=(n(0),n(266)),o={title:"Initialisation"},c={unversionedId:"architecture/initialization",id:"architecture/initialization",isDocsHomePage:!1,title:"Initialisation",description:"In many situations, we need to initialize the application (i.e perform certain actions) before listening to incoming HTTP requests. This is the case, for example, if you need to establish a connection to the database.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/architecture/initialization.md",slug:"/architecture/initialization",permalink:"/fr/docs/architecture/initialization",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/i18n/fr/docusaurus-plugin-content-docs/current/architecture/initialization.md",version:"current",sidebar:"someSidebar",previous:{title:"Hooks",permalink:"/fr/docs/architecture/hooks"},next:{title:"Gestion des Erreurs",permalink:"/fr/docs/architecture/error-handling"}},l=[{value:"Initializing the Application",id:"initializing-the-application",children:[]},{value:"Initializing a Service",id:"initializing-a-service",children:[]},{value:"Best Practices",id:"best-practices",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In many situations, we need to initialize the application (i.e perform certain actions) before listening to incoming HTTP requests. This is the case, for example, if you need to establish a connection to the database."),Object(a.b)("p",null,"There are two ways to achieve this in FoalTS."),Object(a.b)("h2",{id:"initializing-the-application"},"Initializing the Application"),Object(a.b)("p",null,"The first approach is to add an ",Object(a.b)("inlineCode",{parentName:"p"},"init")," method to the root controller class which will be called before the application is fully created. This method can be synchronous or asynchronous."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Example 1")),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-typescript"}),"import { dependency } from '@foal/core';\n\nimport { ServiceA } from '../services';\n\nexport class AppController {\n\n  @dependency\n  serviceA: ServiceA;\n\n  async init() {\n    await this.serviceA.doSomething();\n  }\n\n}\n")),Object(a.b)("h2",{id:"initializing-a-service"},"Initializing a Service"),Object(a.b)("p",null,"The second approach is to add a ",Object(a.b)("inlineCode",{parentName:"p"},"boot")," method in your services. This method can be synchronous or asynchronous."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Example")),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-typescript"}),"export class ServiceA {\n\n  async boot() {\n    await doSomething();\n  }\n\n}\n")),Object(a.b)("p",null,"Boot methods are executed before ",Object(a.b)("inlineCode",{parentName:"p"},"AppController.init")," gets called."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"If you manually inject services to your service manager and you want their ",Object(a.b)("inlineCode",{parentName:"p"},"boot")," methods to be called, you must specify this in the ",Object(a.b)("inlineCode",{parentName:"p"},"set")," method options."),Object(a.b)("pre",{parentName:"blockquote"},Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-typescript"}),"const serviceManager = new ServiceManager();\nserviceManager.set(ServiceA, myServiceInstance, { boot: true });\n"))),Object(a.b)("h2",{id:"best-practices"},"Best Practices"),Object(a.b)("p",null,"If your initialization consists of several asynchronous tasks, you may want to perform them in ",Object(a.b)("em",{parentName:"p"},"parallel"),". This will reduce the initialization time, which has an impact if you use a serverless architecture."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-typescript"}),"export class AppController {\n\n  async init() {\n    // Don't do\n    await createConnection();\n    await createAnotherConnection();\n\n    // Do\n    await Promise.all([\n      createConnection(),\n      createAnotherConnection()\n    ])\n  }\n\n}\n")))}p.isMDXComponent=!0},266:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||a;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
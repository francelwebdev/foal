(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{156:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(7),o=(n(0),n(266)),a={title:"Linting et Style de Code",sidebar_label:"Linting & Style de Code"},c={unversionedId:"development-environment/linting-and-code-style",id:"development-environment/linting-and-code-style",isDocsHomePage:!1,title:"Linting et Style de Code",description:"A linter is a tool that analizes source code to flag programming errors, bugs, stylistic errors, and suspicious constructs. In particular, it helps teams to keep the code consistent between their members.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/development-environment/linting-and-code-style.md",slug:"/development-environment/linting-and-code-style",permalink:"/fr/docs/development-environment/linting-and-code-style",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/i18n/fr/docusaurus-plugin-content-docs/current/development-environment/linting-and-code-style.md",version:"current",sidebar_label:"Linting & Style de Code",sidebar:"someSidebar",previous:{title:"G\xe9n\xe9ration de Code",permalink:"/fr/docs/development-environment/code-generation"},next:{title:"Visual Studio Code",permalink:"/fr/docs/development-environment/vscode"}},l=[{value:"ESLint &amp; TypeScript",id:"eslint--typescript",children:[]},{value:"Configuration with VSCode",id:"configuration-with-vscode",children:[]},{value:"Adding New Rules",id:"adding-new-rules",children:[]},{value:"Migrating from TSLint",id:"migrating-from-tslint",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A linter is a tool that analizes source code to flag programming errors, bugs, stylistic errors, and suspicious constructs. In particular, it helps teams to keep the code consistent between their members."),Object(o.b)("p",null,"For example, with ESLint, the rule ",Object(o.b)("inlineCode",{parentName:"p"},"@typescript-eslint/quotes: single")," enforces the use of single quotes throughout the code."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"// Valid\nconst foo = 'bar';\n// Invalid\nconst foo = \"bar\";\n")),Object(o.b)("h2",{id:"eslint--typescript"},"ESLint & TypeScript"),Object(o.b)("p",null,"FoalTS offers a pre-configuration for the linter ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://eslint.org/"}),"ESLint"),". It is the most commonly used in the JavaScript ecosystem and can work with TypeScript through the ",Object(o.b)("inlineCode",{parentName:"p"},"@typescript-eslint/parser")," and ",Object(o.b)("inlineCode",{parentName:"p"},"@typescript-eslint/eslint-plugin")," packages."),Object(o.b)("p",null,"You can run the linting with this command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npm run lint\n")),Object(o.b)("p",null,"And if the linting issues can be automatically fixed, you can also fix them with this command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npm run lint:fix\n")),Object(o.b)("h2",{id:"configuration-with-vscode"},"Configuration with VSCode"),Object(o.b)("p",null,"Instructions to configure VSCode with ESLint and TypeScript can be found ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/fr/docs/development-environment/vscode"}),"here"),"."),Object(o.b)("h2",{id:"adding-new-rules"},"Adding New Rules"),Object(o.b)("p",null,"The rules are specified in the ",Object(o.b)("inlineCode",{parentName:"p"},".eslintrc")," configuration file located at the root of the project."),Object(o.b)("p",null,"The list of available JavaScript rules can be found on the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://eslint.org/docs/rules/"}),"ESLint website"),". Some of them are compatible with TypeScript. Others are not and you will need to find equivalents ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules"}),"here"),"."),Object(o.b)("h2",{id:"migrating-from-tslint"},"Migrating from TSLint"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://palantir.github.io/tslint/"}),"TSLint")," is a TypeScript linter that was previously used by FoalTS but has since been ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://medium.com/palantir/tslint-in-2019-1a144c2317a9"}),"deprecated"),". This is why new versions of the framework use ESLint."),Object(o.b)("p",null,"In order to migrate from TSLint to ESLint, you can refer to this ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/ROADMAP.md"}),"page"),". It lists all TSLint rules along side rules from the ESLint ecosystem that are identical or similar."))}p.isMDXComponent=!0},266:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,m=u["".concat(a,".").concat(b)]||u[b]||d[b]||o;return n?i.a.createElement(m,c(c({ref:t},s),{},{components:n})):i.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),i=(n(0),n(266)),o={title:"Create Models & Queries"},c={unversionedId:"databases/create-models-and-queries",id:"databases/create-models-and-queries",isDocsHomePage:!1,title:"Create Models & Queries",description:"`shell",source:"@site/docs/databases/create-models-and-queries.md",slug:"/databases/create-models-and-queries",permalink:"/docs/databases/create-models-and-queries",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/databases/create-models-and-queries.md",version:"current",sidebar:"someSidebar",previous:{title:"TypeORM",permalink:"/docs/databases/typeorm"},next:{title:"Generate & Run Migrations",permalink:"/docs/databases/generate-and-run-migrations"}},s=[{value:"Entities",id:"entities",children:[]},{value:"Using Entities",id:"using-entities",children:[]},{value:"Queries",id:"queries",children:[]}],u={toc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"foal generate entity my-entity\n")),Object(i.b)("h2",{id:"entities"},"Entities"),Object(i.b)("p",null,"Simple models are called ",Object(i.b)("em",{parentName:"p"},"entities")," in TypeORM. You can generate one with the above command."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Example:")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class Product extends BaseEntity {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column()\n  name: string;\n\n  @Column()\n  price: number;\n\n}\n\n")),Object(i.b)("p",null,"The class ",Object(i.b)("inlineCode",{parentName:"p"},"Product")," represents the database table and its instances represent the table rows."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"In FoalTS, entity files should always be named with the extension ",Object(i.b)("inlineCode",{parentName:"p"},".entity.ts"),". This way the CLI can find the entities when automatically generating migrations.")),Object(i.b)("h2",{id:"using-entities"},"Using Entities"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"const product = new Product();\nproduct.name = 'chair';\nproduct.price = 60;\nawait product.save();\n\nconst products = await Product.find();\n// find by id:\nconst firstProduct = await Product.findOne(1);\nconst chair = await Product.findOne({ name: 'chair' });\n\nawait chair.remove();\n")),Object(i.b)("h2",{id:"queries"},"Queries"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"const firstProduct = await Product\n  .createQueryBuilder('product')\n  .where('product.id = :id', { id: 1 })\n  .getOne();\n")))}l.isMDXComponent=!0},266:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),b=r,m=d["".concat(o,".").concat(b)]||d[b]||p[b]||i;return n?a.a.createElement(m,c(c({ref:t},u),{},{components:n})):a.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);
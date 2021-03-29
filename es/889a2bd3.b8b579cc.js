(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{172:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var o=n(3),r=n(7),a=(n(0),n(266)),s={title:"Hooks"},c={unversionedId:"architecture/hooks",id:"architecture/hooks",isDocsHomePage:!1,title:"Hooks",description:"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available here. The old documentation can be found here.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/architecture/hooks.md",slug:"/architecture/hooks",permalink:"/es/docs/architecture/hooks",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/i18n/es/docusaurus-plugin-content-docs/current/architecture/hooks.md",version:"current",sidebar:"someSidebar",previous:{title:"Servicios e Inyecci\xf3n de Dependencias",permalink:"/es/docs/architecture/services-and-dependency-injection"},next:{title:"Inicializaci\xf3n",permalink:"/es/docs/architecture/initialization"}},i=[{value:"Description",id:"description",children:[]},{value:"Built-in Hooks",id:"built-in-hooks",children:[]},{value:"Use",id:"use",children:[]},{value:"Build Custom Hooks",id:"build-custom-hooks",children:[{value:"Executing Logic After the Controller Method",id:"executing-logic-after-the-controller-method",children:[]}]},{value:"Grouping Several Hooks into One",id:"grouping-several-hooks-into-one",children:[]},{value:"Testing Hooks",id:"testing-hooks",children:[{value:"Testing Hook Post Functions",id:"testing-hook-post-functions",children:[]},{value:"Testing Hooks that Use <code>this</code>",id:"testing-hooks-that-use-this",children:[]},{value:"Mocking services",id:"mocking-services",children:[]}]},{value:"Hook factories",id:"hook-factories",children:[]},{value:"Forward Data Between Hooks",id:"forward-data-between-hooks",children:[]}],l={toc:i};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/es/docs/upgrade-to-v2/README"}),"here"),". The old documentation can be found ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://foalts.org/docs/1.x/"}),"here"),".")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"foal generate hook my-hook\n")),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"Hooks are decorators that execute extra logic before and/or after the execution of a controller method."),Object(a.b)("p",null,"They are particulary useful in these scenarios:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"authentication & access control"),Object(a.b)("li",{parentName:"ul"},"request validation & sanitization"),Object(a.b)("li",{parentName:"ul"},"logging")),Object(a.b)("p",null,"They improve code readability and make unit testing easier."),Object(a.b)("h2",{id:"built-in-hooks"},"Built-in Hooks"),Object(a.b)("p",null,"Foal provides a number of hooks to handle the most common scenarios."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ValidateBody"),", ",Object(a.b)("inlineCode",{parentName:"li"},"ValidateHeader"),", ",Object(a.b)("inlineCode",{parentName:"li"},"ValidatePathParam"),", ",Object(a.b)("inlineCode",{parentName:"li"},"ValidateCookie")," and ",Object(a.b)("inlineCode",{parentName:"li"},"ValidateQueryParam")," validate the format of the incoming HTTP requests (see ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"/es/docs/common/validation-and-sanitization"}),"Validation"),")."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Log")," displays information on the request (see ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"/es/docs/common/logging-and-debugging"}),"Logging & Debugging"),")."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"JWTRequired"),", ",Object(a.b)("inlineCode",{parentName:"li"},"JWTOptional"),", ",Object(a.b)("inlineCode",{parentName:"li"},"UseSessions")," authenticate the user by filling the ",Object(a.b)("inlineCode",{parentName:"li"},"ctx.user")," property."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"PermissionRequired")," restricts the route access to certain users.")),Object(a.b)("h2",{id:"use"},"Use"),Object(a.b)("p",null,"A hook can decorate a controller method or the controller itself. If it decorates the controller then it applies to all its methods and sub-controllers."),Object(a.b)("p",null,"In the below example, ",Object(a.b)("inlineCode",{parentName:"p"},"JWTRequired")," applies to ",Object(a.b)("inlineCode",{parentName:"p"},"listProducts")," and ",Object(a.b)("inlineCode",{parentName:"p"},"addProduct"),"."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Example:")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import {\n  Context, Get, HttpResponseCreated, HttpResponseOK, Post, ValidateBody\n} from '@foal/core';\nimport { JWTRequired } from '@foal/jwt';\n\n@JWTRequired()\nclass AppController {\n  private products = [\n    { name: 'Hoover' }\n  ];\n\n  @Get('/products')\n  listProducts() {\n    return new HttpResponseOK(this.products);\n  }\n\n  @Post('/products')\n  @ValidateBody({\n    additionalProperties: false,\n    properties: {\n      name: { type: 'string' }\n    },\n    required: [ 'name' ],\n    type: 'object',\n  })\n  addProduct(ctx: Context) {\n    this.products.push(ctx.request.body);\n    return new HttpResponseCreated();\n  }\n\n}\n")),Object(a.b)("p",null,"If the user makes a POST request to ",Object(a.b)("inlineCode",{parentName:"p"},"/products")," whereas she/he is not authenticated, then the server will respond with a 400 error and the ",Object(a.b)("inlineCode",{parentName:"p"},"ValidateBody")," hook and ",Object(a.b)("inlineCode",{parentName:"p"},"addProduct")," method won't be executed."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"If you need to apply a hook globally, you just have to make it decorate the root controller: ",Object(a.b)("inlineCode",{parentName:"p"},"AppController"),"."),Object(a.b)("pre",{parentName:"blockquote"},Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"@Log('Request body:', { body: true })\nexport class AppController {\n // ...\n}\n"))),Object(a.b)("h2",{id:"build-custom-hooks"},"Build Custom Hooks"),Object(a.b)("p",null,"In addition to the hooks provided by FoalTS, you can also create your own."),Object(a.b)("p",null,"A hook is made of a small function, synchronous or asynchronous, that is executed before the controller method."),Object(a.b)("p",null,"To create one, you need to call the ",Object(a.b)("inlineCode",{parentName:"p"},"Hook")," function."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Example:")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { Get, Hook, HttpResponseOK } from '@foal/core';\n\nclass MyController {\n\n  @Get('/')\n  @Hook(() => {\n    console.log('Receiving GET / request...');\n  })\n  index() {\n    return new HttpResponseOK('Hello world!');\n  }\n\n}\n")),Object(a.b)("p",null,"The hook function can take two parameters: the ",Object(a.b)("inlineCode",{parentName:"p"},"Context")," object and the service manager. The ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/es/docs/architecture/controllers"}),"Context object")," is specific to the request and gives you information on it. The service manager lets you access any service through its ",Object(a.b)("inlineCode",{parentName:"p"},"get")," method."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Example:")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { Get, Hook, HttpResponseOK } from '@foal/core';\n\nclass Logger {\n  log(message: string) {\n    console.log(`${new Date()} - ${message}`);\n  }\n}\n\nclass MyController {\n\n  @Get('/')\n  @Hook((ctx, services) => {\n    const logger = services.get(Logger);\n    logger.log('IP: ' + ctx.request.ip);\n  })\n  index() {\n    return new HttpResponseOK('Hello world!');\n  }\n\n}\n")),Object(a.b)("p",null,"A hook function can return an ",Object(a.b)("inlineCode",{parentName:"p"},"HttpResponse")," object. If so, the remaining hooks and the controller method are not executed and the object is used to render the HTTP response."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Example:")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { Context, Hook, HttpResponseBadRequest, HttpResponseOK, Post } from '@foal/core';\n\nclass MyController {\n\n  @Post('/')\n  @Hook((ctx: Context) => {\n    if (typeof ctx.request.body.name !== 'string') {\n      return new HttpResponseBadRequest();\n    }\n  })\n  index() {\n    return new HttpResponseOK('Hello world!');\n  }\n\n}\n")),Object(a.b)("p",null,"You can also have access to the controller instance through the ",Object(a.b)("inlineCode",{parentName:"p"},"this")," keyword."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Example")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { getAjvInstance, Hook, HttpResponseBadRequest, HttpResponseOK, Post } from '@foal/core';\n\nclass MyController {\n\n  schema = {\n    properties: {\n      price: { type: 'number' }\n    },\n    type: 'object',\n  };\n\n  @Post('/')\n  @Hook(function (this: MyController, ctx, services) {\n    const ajv = getAjvInstance();\n    const requestBody = ctx.request.body;\n    if (!ajv.validate(this.schema, requestBody)) {\n      return new HttpResponseBadRequest(ajv.errors);\n    }\n  })\n  index() {\n    return new HttpResponseOK('Hello world!');\n  }\n\n}\n")),Object(a.b)("h3",{id:"executing-logic-after-the-controller-method"},"Executing Logic After the Controller Method"),Object(a.b)("p",null,"A hook can also be used to execute extra logic after the controller method. To do so, you can return a ",Object(a.b)("em",{parentName:"p"},"hook post function")," inside the hook. This function will be executed after the controller method. It takes exactly one parameter: the ",Object(a.b)("inlineCode",{parentName:"p"},"HttpResponse")," object returned by the controller."),Object(a.b)("p",null,"The below example shows how to add a custom cookie to the response returned by the controller."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { Get, Hook, HttpResponseOK } from '@foal/core';\n\nclass MyController {\n\n  @Get('/')\n  @Hook(() => response => {\n    response.setCookie('X-CSRF-TOKEN', 'xxx');\n  })\n  index() {\n    return new HttpResponseOK('Hello world!');\n  }\n\n}\n")),Object(a.b)("p",null,"This example shows how to execute logic both before and after the controller method."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { Get, Hook, HttpResponseOK } from '@foal/core';\n\nclass MyController {\n\n  @Get('/')\n  @Hook(() => {\n    const time = process.hrtime();\n\n    return () => {\n      const seconds = process.hrtime(time)[0];\n      console.log(`Executed in ${seconds} seconds`);\n    };\n  })\n  index() {\n    return new HttpResponseOK('Hello world!');\n  }\n\n}\n")),Object(a.b)("h2",{id:"grouping-several-hooks-into-one"},"Grouping Several Hooks into One"),Object(a.b)("p",null,"In case you need to group several hooks together, the ",Object(a.b)("inlineCode",{parentName:"p"},"MergeHooks")," function can be used to do this."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { Get, HttpResponseOK, MergeHooks, ValidateCookie, ValidateHeader } from '@foal/core';\n\n// Before\n\nclass MyController {\n  @Get('/products')\n  @ValidateHeader('Authorization')\n  @ValidateCookie('foo')\n  readProducts() {\n    return new HttpResponseOK();\n  }\n}\n\n// After\n\nfunction ValidateAll() {\n  return MergeHooks(\n    ValidateHeader('Authorization'),\n    ValidateCookie('foo')\n  );\n}\n\nclass MyController {\n  @Get('/products')\n  @ValidateAll()\n  readProducts() {\n    return new HttpResponseOK();\n  }\n}\n")),Object(a.b)("h2",{id:"testing-hooks"},"Testing Hooks"),Object(a.b)("p",null,"Hooks can be tested thanks to the utility ",Object(a.b)("inlineCode",{parentName:"p"},"getHookFunction")," (or ",Object(a.b)("inlineCode",{parentName:"p"},"getHookFunctions")," if the hook was made from several functions)."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"// validate-body.hook.ts\nimport { Hook, HttpResponseBadRequest } from '@foal/core';\n\nexport function ValidateBody() {\n  return Hook(ctx => {\n    if (typeof ctx.request.body.name !== 'string') {\n      return new HttpResponseBadRequest();\n    }\n  });\n}\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"// validate-body.hook.spec.ts\nimport {\n  Context, getHookFunction,\n  isHttpResponseBadRequest, ServiceManager\n} from '@foal/core';\nimport { ValidateBody } from './validate-body.hook';\n\nit('ValidateBody', () => {\n  const ctx = new Context({\n    // fake request object\n    body: { name: 3 }\n  });\n  const hook = getHookFunction(ValidateBody());\n  \n  const response = hook(ctx, new ServiceManager());\n\n  if (!isHttpResponseBadRequest(response)) {\n    throw new Error('The hook should return an HttpResponseBadRequest object.');\n  }\n});\n")),Object(a.b)("h3",{id:"testing-hook-post-functions"},"Testing Hook Post Functions"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"// add-xxx-header.hook.ts\nimport { Hook } from '@foal/core';\n\nexport function AddXXXHeader() {\n  return Hook(ctx => response => {\n    response.setHeader('XXX', 'YYY');\n  });\n}\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"// add-xxx-header.hook.spec.ts\nimport { strictEqual } from 'assert';\nimport {\n  Context, getHookFunction, HttpResponseOK,\n  isHttpResponse, ServiceManager\n} from '@foal/core';\nimport { AddXXXHeader } from './add-xxx-header.hook';\n\nit('AddXXXHeader', async () => {\n  const ctx = new Context({});\n  const hook = getHookFunction(AddXXXHeader());\n  \n  const postHookFunction = await hook(ctx, new ServiceManager());\n  if (postHookFunction === undefined || isHttpResponse(postHookFunction)) {\n    throw new Error('The hook should return a post hook function');\n  }\n\n  const response = new HttpResponseOK();\n  await postHookFunction(response);\n\n  strictEqual(response.getHeader('XXX'), 'YYY');\n});\n")),Object(a.b)("h3",{id:"testing-hooks-that-use-this"},"Testing Hooks that Use ",Object(a.b)("inlineCode",{parentName:"h3"},"this")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"// validate-param-type.hook.ts\nimport { Context, Hook, HttpResponseBadRequest } from '@foal/core';\n\nexport function ValidateParamType() {\n  return Hook(function(this: any, ctx: Context) {\n    if (typeof ctx.request.params.id !== this.paramType) {\n      return new HttpResponseBadRequest();\n    }\n  });\n}\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"// validate-param-type.hook.spec.ts\nimport { Context, getHookFunction, HttpResponseBadRequest } from '@foal/core';\nimport { ValidateParamType } from './validate-param-type';\n\nit('ValidateParamType', () => {\n  const ctx = new Context({\n    // fake request object\n    params: { id: 'xxx' }\n  });\n  const controller = {\n    paramType: 'number'\n  };\n  const hook = getHookFunction(ValidateParamType()).bind(controller);\n\n  const response = hook(ctx, new ServiceManager());\n\n  if (!isHttpResponseBadRequest(response)) {\n    throw new Error('The hook should return an HttpResponseBadRequest object.');\n  }\n});\n")),Object(a.b)("h3",{id:"mocking-services"},"Mocking services"),Object(a.b)("p",null,"You can mock services by using the ",Object(a.b)("inlineCode",{parentName:"p"},"set")," method of the service manager."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Example:")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"// authenticate.hook.ts\nimport { Hook } from '@foal/core';\n\nexport class UserService {\n  private users: any = {\n    eh4sb: { id: 1, name: 'John' },\n    kadu5: { id: 2, name: 'Mary' }\n  };\n\n  getUser(key: string) {\n    return this.users[key];\n  }\n}\n\nexport const authenticate = Hook((ctx, services) => {\n  const users = services.get(UserService);\n  ctx.user = users.getUser(ctx.request.params.key);\n});\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"// authenticate.hook.spec.ts\nimport { strictEqual } from 'assert';\nimport { Context, getHookFunction, ServiceManager } from '@foal/core';\nimport { authenticate, UserService } from './authenticate.hook';\n\nit('authenticate', () => {\n  const hook = getHookFunction(authenticate);\n\n  const user = { id: 3, name: 'Bob' };\n\n  new Context({ params: { key: 'xxx' }});\n  const services = new ServiceManager();\n  services.set(UserService, {\n    getUser() {\n      return user;\n    }\n  })\n  \n  hook(ctx, services);\n\n  strictEqual(ctx.user, user);\n});\n")),Object(a.b)("h2",{id:"hook-factories"},"Hook factories"),Object(a.b)("p",null,"Usually, we don't create hooks directly but with hook factories. Thus it is easier to customize the hook behavior on each route."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Example:")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { Get, Hook, HttpResponseOK } from '@foal/core';\n\nfunction Log(msg: string) {\n  return Hook(() => { console.log(msg); });\n}\n\nclass MyController {\n  @Get('/route1')\n  @Log('Receiving a GET /route1 request...')\n  route1() {\n    return new HttpResponseOK('Hello world!');\n  }\n\n  @Get('/route2')\n  @Log('Receiving a GET /route2 request...')\n  route2() {\n    return new HttpResponseOK('Hello world!');\n  }\n}\n")),Object(a.b)("h2",{id:"forward-data-between-hooks"},"Forward Data Between Hooks"),Object(a.b)("p",null,"If you need to transfer data from one hook to another or to the controller method, you can use the ",Object(a.b)("inlineCode",{parentName:"p"},"state")," property of the ",Object(a.b)("inlineCode",{parentName:"p"},"Context")," object to do so."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { Context, Get, Hook, HttpResponseOK, UserRequired } from '@foal/core';\nimport { Org } from '../entities';\n\nfunction AddOrgToContext() {\n  return Hook(async ctx => {\n    if (ctx.user) {\n      ctx.state.org = await Org.findOneOrFail(ctx.user.orgId);\n    }\n  })\n}\n\nexport class ApiController {\n\n  @Get('/org-name')\n  @UserRequired()\n  @AddOrgToContext()\n  readOrgName(ctx: Context) {\n    return new HttpResponseOK(ctx.state.org.name);\n  }\n\n}\n")),Object(a.b)("p",null,"If needed, you can also define an interface for your state and pass it as type argument to the context."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"interface State {\n  org: Org;\n}\n\nexport class ApiController {\n  // ...\n  readOrgName(ctx: Context<any, any, State>) {\n    // ...\n  }\n}\n")))}p.isMDXComponent=!0},266:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),b=o,m=u["".concat(s,".").concat(b)]||u[b]||d[b]||a;return n?r.a.createElement(m,c(c({ref:t},l),{},{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var l=2;l<a;l++)s[l]=n[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);
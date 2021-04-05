(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{126:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(266)),o={title:"Autenticaci\xf3n Social"},c={unversionedId:"authentication-and-access-control/social-auth",id:"authentication-and-access-control/social-auth",isDocsHomePage:!1,title:"Autenticaci\xf3n Social",description:"FoalTS social authentication is based on OAuth2 protocol. To set up social authentication with Foal, you first need to register your application to the social provider you chose (Google, Facebook, etc). This can be done through its website.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/authentication-and-access-control/social-auth.md",slug:"/authentication-and-access-control/social-auth",permalink:"/es/docs/authentication-and-access-control/social-auth",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/i18n/es/docusaurus-plugin-content-docs/current/authentication-and-access-control/social-auth.md",version:"current",sidebar:"someSidebar",previous:{title:"Autenticaci\xf3n con JWT",permalink:"/es/docs/authentication-and-access-control/jwt"},next:{title:"Administradores & Roles",permalink:"/es/docs/authentication-and-access-control/administrators-and-roles"}},l=[{value:"Configuration",id:"configuration",children:[]},{value:"Social Providers",id:"social-providers",children:[{value:"Google",id:"google",children:[]},{value:"Facebook",id:"facebook",children:[]},{value:"Github",id:"github",children:[]},{value:"LinkedIn",id:"linkedin",children:[]}]},{value:"Sign In and Sign Up Example",id:"sign-in-and-sign-up-example",children:[]},{value:"Custom Provider",id:"custom-provider",children:[]}],b={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"FoalTS social authentication is based on OAuth2 protocol. To set up social authentication with Foal, you first need to register your application to the social provider you chose (Google, Facebook, etc). This can be done through its website."),Object(i.b)("p",null,"Usually your are required to provide:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"an ",Object(i.b)("em",{parentName:"li"},"application name"),","),Object(i.b)("li",{parentName:"ul"},"a ",Object(i.b)("em",{parentName:"li"},"logo"),","),Object(i.b)("li",{parentName:"ul"},"and ",Object(i.b)("em",{parentName:"li"},"redirect URIs")," where the social provider should redirect the users after successful authentication (ex: ",Object(i.b)("inlineCode",{parentName:"li"},"http://localhost:3001/signin/google/callback"),", ",Object(i.b)("inlineCode",{parentName:"li"},"https://example.com/signin/facebook/callback"),")")),Object(i.b)("p",null,"Once done, you should receive:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"a ",Object(i.b)("em",{parentName:"li"},"client ID")," that is public and identifies your application,"),Object(i.b)("li",{parentName:"ul"},"and a ",Object(i.b)("em",{parentName:"li"},"client secret")," that must not be revealed and can therefore only be used on the backend side.")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"You must obtain a ",Object(i.b)("em",{parentName:"p"},"client secret"),". If you do not have one, it means you probably chose the wrong option at some point.")),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"First install the appropriate package."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"npm install @foal/social\n")),Object(i.b)("p",null,"Then, you will need to provide your client ID, client secret and your redirect URIs to Foal. This can be done through the usual ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/es/docs/deployment-and-environments/configuration"}),"configuration files"),"."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"default.yml")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"settings:\n  social:\n    google:\n      clientId: xxx\n      redirectUri: 'http://localhost:3001/signin/google/callback'\n")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"production.yml")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"settings:\n  social:\n    cookie:\n      secure: true # In production, your website should use HTTPS.\n    google:\n      redirectUri: 'https://example.com/signin/google/callback' # Your redirect URI in production\n")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},".env")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"SETTINGS_SOCIAL_GOOGLE_CLIENT_SECRET=yyy\n")),Object(i.b)("h2",{id:"social-providers"},"Social Providers"),Object(i.b)("p",null,"Authentication is managed by ",Object(i.b)("em",{parentName:"p"},"social providers"),". These are services whose methods can be called within a controller to build a social login."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"// 3p\nimport {\n  Context,\n  dependency,\n  Get,\n  HttpResponseRedirect,\n} from '@foal/core';\nimport { GoogleProvider } from '@foal/social';\n\nimport { User } from '../entities';\n\nexport class AuthController {\n  @dependency\n  google: GoogleProvider;\n\n  @Get('/signin/google')\n  redirectToGoogle() {\n    // Your \"Login In with Google\" button should point to this route.\n    // The user will be redirected to Google auth page.\n    return this.google.redirect();\n  }\n\n  @Get('/signin/google/callback')\n  async handleGoogleRedirection(ctx: Context) {\n    // Once the user gives their permission to login with Google, the provider\n    // will redirect the user to this route. This route must match the redirect URI.\n    const { userInfo, tokens } = await this.google.getUserInfo(ctx);\n\n    // Do something with the user information AND/OR the access token.\n    // If you only need the access token, you can call the \"getTokens\" method.\n\n    // The method usually ends with a HttpResponseRedirect object as returned value.\n  }\n\n}\n")),Object(i.b)("p",null,"You can also override the scopes in the ",Object(i.b)("inlineCode",{parentName:"p"},"redirect")," method:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"return this.google.redirect({ scopes: [ 'email' ] });\n")),Object(i.b)("p",null,"Additional parameters can passed to the ",Object(i.b)("inlineCode",{parentName:"p"},"redirect")," and ",Object(i.b)("inlineCode",{parentName:"p"},"getUserInfo")," methods depending on the provider."),Object(i.b)("h3",{id:"google"},"Google"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Service name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default scopes"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Available scopes"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"GoogleProvider")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"openid"),", ",Object(i.b)("inlineCode",{parentName:"td"},"profile"),", ",Object(i.b)("inlineCode",{parentName:"td"},"email")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"https://developers.google.com/identity/protocols/googlescopes"}),"Google scopes"))))),Object(i.b)("h4",{id:"register-an-oauth-application"},"Register an OAuth application"),Object(i.b)("p",null,"Visit the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://console.developers.google.com/apis/credentials"}),"Google API Console")," to obtain a client ID and a client secret."),Object(i.b)("h4",{id:"redirection-parameters"},"Redirection parameters"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"redirect")," method of the ",Object(i.b)("inlineCode",{parentName:"p"},"GoogleProvider")," accepts additional parameters. These parameters and their description are listed ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.google.com/identity/protocols/OpenIDConnect#authenticationuriparameters"}),"here")," and are all optional."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Example")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"this.google.redirect({ /* ... */ }, {\n  access_type: 'offline'\n})\n")),Object(i.b)("h3",{id:"facebook"},"Facebook"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Service name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default scopes"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Available scopes"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"FacebookProvider")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"email")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"https://developers.facebook.com/docs/facebook-login/permissions/"}),"Facebook permissions"))))),Object(i.b)("h4",{id:"register-an-oauth-application-1"},"Register an OAuth application"),Object(i.b)("p",null,"Visit ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.facebook.com/"}),"Facebook's developper website")," to create an application and obtain a client ID and a client secret."),Object(i.b)("h4",{id:"redirection-parameters-1"},"Redirection parameters"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"redirect")," method of the ",Object(i.b)("inlineCode",{parentName:"p"},"FacebookProvider")," accepts an additional ",Object(i.b)("inlineCode",{parentName:"p"},"auth_type")," parameter which is optional."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Example")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"this.facebook.redirect({ /* ... */ }, {\n  auth_type: 'rerequest'\n});\n")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"auth_type")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"'rerequest'")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"If a user has already declined a permission, the Facebook Login Dialog box will no longer ask for this permission. The ",Object(i.b)("inlineCode",{parentName:"td"},"auth_type")," parameter explicity tells Facebook to ask the user again for the denied permission.")))),Object(i.b)("h4",{id:"user-info-parameters"},"User info parameters"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"getUserInfo")," and ",Object(i.b)("inlineCode",{parentName:"p"},"getUserInfoFromTokens")," methods of the ",Object(i.b)("inlineCode",{parentName:"p"},"FacebookProvider")," accept an additional ",Object(i.b)("inlineCode",{parentName:"p"},"fields")," parameter which is optional."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Example")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const { userInfo } = await this.facebook.getUserInfo(ctx, {\n  fields: [ 'email' ]\n})\n")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"fields")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"string[]")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"List of fields that the returned user info object should contain. These fields may or may not be available depending on the permissions (",Object(i.b)("inlineCode",{parentName:"td"},"scopes"),") that were requested with the ",Object(i.b)("inlineCode",{parentName:"td"},"redirect")," method. Default: ",Object(i.b)("inlineCode",{parentName:"td"},"['id', 'name', 'email']."))))),Object(i.b)("h3",{id:"github"},"Github"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Service name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default scopes"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Available scopes"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"GithubProvider")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"none"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes"}),"Github scopes"))))),Object(i.b)("h4",{id:"register-an-oauth-application-2"},"Register an OAuth application"),Object(i.b)("p",null,"Visit ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/settings/applications/new"}),"this page")," to create an application and obtain a client ID and a client secret."),Object(i.b)("p",null,"Additional documentation on Github's redirect URLs can be found ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#redirect-urls"}),"here"),"."),Object(i.b)("h4",{id:"redirection-parameters-2"},"Redirection parameters"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"redirect")," method of the ",Object(i.b)("inlineCode",{parentName:"p"},"GithubProvider")," accepts additional parameters. These parameters and their description are listed below and are all optional."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Example")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"this.github.redirect({ /* ... */ }, {\n  allow_signup: false\n})\n")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"login")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Suggests a specific account to use for signing in and authorizing the app.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"allow_signup")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"boolean")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Whether or not unauthenticated users will be offered an option to sign up for GitHub during the OAuth flow. The default is ",Object(i.b)("inlineCode",{parentName:"td"},"true"),". Use ",Object(i.b)("inlineCode",{parentName:"td"},"false")," in the case that a policy prohibits signups.")))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("em",{parentName:"p"},"Source: ",Object(i.b)("a",Object(a.a)({parentName:"em"},{href:"https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#parameters"}),"https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#parameters")))),Object(i.b)("h3",{id:"linkedin"},"LinkedIn"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Service name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default scopes"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Available scopes\xa0"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"LinkedInProvider")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"r_liteprofile")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"https://docs.microsoft.com/en-us/linkedin/shared/integrations/people/profile-api"}),"API documentation"))))),Object(i.b)("h4",{id:"register-an-oauth-application-3"},"Register an OAuth application"),Object(i.b)("p",null,"Visit ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.linkedin.com/developers/apps/new"}),"this page")," to create an application and obtain a client ID and a client secret."),Object(i.b)("h4",{id:"user-info-parameters-1"},"User info parameters"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"getUserInfo")," and ",Object(i.b)("inlineCode",{parentName:"p"},"getUserInfoFromTokens")," methods of the ",Object(i.b)("inlineCode",{parentName:"p"},"LinkedInProvider")," accept an additional ",Object(i.b)("inlineCode",{parentName:"p"},"projection")," parameter which is optional."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Example")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const { userInfo } = await this.linkedin.getUserInfo(ctx, {\n  fields: [ 'id', 'firstName' ]\n})\n")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"fields")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"string[]")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"List of fields that the returned user info object should contain. Additional documentation on ",Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"https://developer.linkedin.com/docs/guide/v2/concepts/projections"}),"field projections"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"projection")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"LinkedIn projection parameter.")))),Object(i.b)("h2",{id:"sign-in-and-sign-up-example"},"Sign In and Sign Up Example"),Object(i.b)("p",null,"This example shows how to implement a sign in and sign up flow with sessions and a TypeORM ",Object(i.b)("inlineCode",{parentName:"p"},"User")," entity."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"user.entity.ts")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class User {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column({ unique: true })\n  email: string;\n\n}\n")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"auth.controller.ts")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"// 3p\nimport {\n  Context,\n  dependency,\n  Get,\n  HttpResponseRedirect,\n  Store,\n  UseSessions,\n} from '@foal/core';\nimport { GoogleProvider } from '@foal/social';\n\nimport { User } from '../entities';\n\nexport class AuthController {\n  @dependency\n  google: GoogleProvider;\n\n  @dependency\n  store: Store;\n\n  @Get('/signin/google')\n  redirectToGoogle() {\n    return this.google.redirect();\n  }\n\n  @Get('/signin/google/callback')\n  @UseSessions({\n    cookie: true,\n  })\n  async handleGoogleRedirection(ctx: Context) {\n    const { userInfo } = await this.google.getUserInfo(ctx);\n\n    let user = await User.findOne({ email: userInfo.email });\n\n    if (!user) {\n      // If the user has not already signed up, then add them to the database.\n      user = new User();\n      user.email = userInfo.email;\n      await user.save();\n    }\n\n    ctx.session.setUser(user);\n\n    return new HttpResponseRedirect('/');\n  }\n\n}\n")),Object(i.b)("h2",{id:"custom-provider"},"Custom Provider"),Object(i.b)("p",null,"If necessary, you can also implement your own provider. This one must inherit the abstract class ",Object(i.b)("inlineCode",{parentName:"p"},"AbstractProvider"),"."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Example")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"// 3p\nimport { AbstractProvider, SocialTokens } from '@foal/core';\n\nexport interface GithubAuthParameter {\n  // ...\n}\n\nexport interface GithubUserInfoParameter {\n  // ...\n}\n\nexport class GithubProvider extends AbstractProvider<GithubAuthParameter, GithubUserInfoParameter> {\n\n  protected configPaths = {\n    clientId: 'social.github.clientId',\n    clientSecret: 'social.github.clientSecret',\n    redirectUri: 'social.github.redirectUri',\n  };\n\n  protected authEndpoint = '...';\n  protected tokenEndpoint = '...';\n  protected userInfoEndpoint = '...'; // Optional. Depending on the provider.\n\n  protected defaultScopes: string[] = [ 'email' ]; // Optional\n\n  async getUserInfoFromTokens(tokens: SocialTokens, params?: GithubUserInfoParameter) {\n    // ...\n  }\n\n} \n")))}p.isMDXComponent=!0},266:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(n),u=a,m=s["".concat(o,".").concat(u)]||s[u]||d[u]||i;return n?r.a.createElement(m,c(c({ref:t},b),{},{components:n})):r.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var b=2;b<i;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{255:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a(3),l=a(7),r=(a(0),a(266)),i=a(270),o=a(271),c={title:"Upload and Download Files",sidebar_label:"Upload & Download Files"},b={unversionedId:"file-system/upload-and-download-files",id:"file-system/upload-and-download-files",isDocsHomePage:!1,title:"Upload and Download Files",description:"Files can be uploaded and downloaded using FoalTS file system. It allows you to use different types of file storage such as the local file system or cloud storage.",source:"@site/docs/file-system/upload-and-download-files.md",slug:"/file-system/upload-and-download-files",permalink:"/docs/file-system/upload-and-download-files",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/file-system/upload-and-download-files.md",version:"current",sidebar_label:"Upload & Download Files",sidebar:"someSidebar",previous:{title:"Local and Cloud Storage",permalink:"/docs/file-system/local-and-cloud-storage"},next:{title:"Build and Start the App",permalink:"/docs/development-environment/build-and-start-the-app"}},s=[{value:"Configuration",id:"configuration",children:[]},{value:"File Uploads",id:"file-uploads",children:[{value:"Using Buffers",id:"using-buffers",children:[]},{value:"Using Local or Cloud Storage (streaming)",id:"using-local-or-cloud-storage-streaming",children:[]},{value:"Accessing File Metadata",id:"accessing-file-metadata",children:[]},{value:"Adding Fields",id:"adding-fields",children:[]},{value:"Specifying File Limits",id:"specifying-file-limits",children:[]}]},{value:"File Downloads",id:"file-downloads",children:[]},{value:"Usage with a Database",id:"usage-with-a-database",children:[]},{value:"Static Files",id:"static-files",children:[{value:"Static directory",id:"static-directory",children:[]},{value:"Virtual prefix path",id:"virtual-prefix-path",children:[]}]}],p={toc:s};function d(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Files can be uploaded and downloaded using ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/file-system/local-and-cloud-storage"}),"FoalTS file system"),". It allows you to use different types of file storage such as the local file system or cloud storage."),Object(r.b)("h2",{id:"configuration"},"Configuration"),Object(r.b)("p",null,"First install the package."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"npm install @foal/storage\n")),Object(r.b)("p",null,"Then specify in your configuration the file storage to be used and its settings. In this example, we will use the local file system with the ",Object(r.b)("inlineCode",{parentName:"p"},"uploaded")," directory (you must create it at the root of your project)."),Object(r.b)(i.a,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"yaml",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"settings:\n  disk:\n    driver: 'local'\n    local:\n      directory: 'uploaded'\n"))),Object(r.b)(o.a,{value:"json",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "settings": {\n    "disk": {\n      "driver": "local",\n      "local": {\n        "directory": "uploaded"\n      }\n    }\n  }\n}\n'))),Object(r.b)(o.a,{value:"js",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'module.exports = {\n  settings: {\n    disk: {\n      driver: "local",\n      local: {\n        directory: "uploaded"\n      }\n    }\n  }\n}\n')))),Object(r.b)("h2",{id:"file-uploads"},"File Uploads"),Object(r.b)("p",null,"Files can be uploaded using ",Object(r.b)("inlineCode",{parentName:"p"},"multipart/form-data")," requests. The ",Object(r.b)("inlineCode",{parentName:"p"},"@ValidateMultipartFormDataBody")," hook parses the request body, validates the submitted fields and files and save them in streaming to your local or Cloud storage. It also provides the ability to create file buffers if you wish."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"The ",Object(r.b)("inlineCode",{parentName:"p"},"enctype")," of your requests must be of type ",Object(r.b)("inlineCode",{parentName:"p"},"multipart/form-data"),". If needed, you can use a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/FormData"}),"FormData")," object for this.")),Object(r.b)("h3",{id:"using-buffers"},"Using Buffers"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { Context, Post } from '@foal/core';\nimport { ValidateMultipartFormDataBody } from '@foal/storage';\n\nexport class UserController {\n\n  @Post('/profile')\n  @ValidateMultipartFormDataBody({\n    files: {\n      profile: { required: true },\n      images: { required: false, multiple: true }\n    }\n  })\n  uploadProfilePhoto(ctx: Context) {\n    const { buffer } = ctx.request.body.files.profile;\n    const files = ctx.request.body.files.images;\n    for (const file of files) {\n      // Do something with file.buffer\n    }\n  }\n\n}\n")),Object(r.b)("p",null,"The names of the file fields must be provided in the ",Object(r.b)("inlineCode",{parentName:"p"},"files")," parameter of the hook. Uploaded files which are not listed here are simply ignored."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"required")," parameter tells the hook if it should return a ",Object(r.b)("inlineCode",{parentName:"p"},"400 - BAD REQUEST")," error if no file has been uploaded for the given field. In this case, the controller method is not executed."),Object(r.b)("p",null,"When the upload is successful, the request body object is set with the buffer files."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value of ",Object(r.b)("inlineCode",{parentName:"th"},"multiple")),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Files uploaded"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value in the request object"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"false")," (default)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"None"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"null"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"At least one"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A buffer")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"true")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"None"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"An empty array")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"At least one"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"An array of buffers")))),Object(r.b)("h3",{id:"using-local-or-cloud-storage-streaming"},"Using Local or Cloud Storage (streaming)"),Object(r.b)("p",null,"Instead of using buffers, you can also choose to save directly the file to your local or Cloud storage. To do this, you need to add the name of the target directory in your hook options. The value returned in the ",Object(r.b)("inlineCode",{parentName:"p"},"ctx")," is an object containing the relative path of the file."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"With the previous configuration, this path is relative to the ",Object(r.b)("inlineCode",{parentName:"p"},"uploaded")," directory. Note that must create the ",Object(r.b)("inlineCode",{parentName:"p"},"uploaded/images")," and ",Object(r.b)("inlineCode",{parentName:"p"},"uploaded/images/profiles")," directories before you can upload a file.")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { Context, Post } from '@foal/core';\nimport { ValidateMultipartFormDataBody } from '@foal/storage';\n\nexport class UserController {\n\n  @Post('/profile')\n  @ValidateMultipartFormDataBody({\n    files: {\n      profile: { required: true, saveTo: 'images/profiles' }\n    }\n  })\n  uploadProfilePhoto(ctx: Context) {\n    const { path } = ctx.request.body.files.profile;\n    // images/profiles/GxunLNJu3RXI9l7C7cQlBvXFQ+iqdxSRJmsR4TU+0Fo=.png\n  }\n\n}\n")),Object(r.b)("h3",{id:"accessing-file-metadata"},"Accessing File Metadata"),Object(r.b)("p",null,"When uploading files, the browser sends additional metadata. This can be accessed in the controller method."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"const file = ctx.request.body.files.profile;\n// file.mimeType, ...\n")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Property name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"encoding")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Encoding type of the file")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"filename")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"string\\|undefined")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Name of the file on the user's computer")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"mimeType")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Mime type of the file")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"path")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Path where the file has been saved. If the ",Object(r.b)("inlineCode",{parentName:"td"},"saveTo")," option was not provided, the value is an empty string.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"buffer")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Buffer")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Buffer containing the entire file. If the ",Object(r.b)("inlineCode",{parentName:"td"},"saveTo")," option was provided, the value is an empty buffer.")))),Object(r.b)("h3",{id:"adding-fields"},"Adding Fields"),Object(r.b)("p",null,"Multipart requests can also contain non-binary fields such as a string. These fields are validated and parsed by the hook."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { Context, Post } from '@foal/core';\nimport { ValidateMultipartFormDataBody } from '@foal/storage';\n\nexport class UserController {\n\n  @Post('/profile')\n  @ValidateMultipartFormDataBody({\n    fields: {\n      description: { type: 'string' }\n    },\n    files: {\n      profile: { required: true }\n    }\n  })\n  uploadProfilePhoto(ctx: Context) {\n    const { path } = ctx.request.body.files.profile;\n    // images/profiles/GxunLNJu3RXI9l7C7cQlBvXFQ+iqdxSRJmsR4TU+0Fo=.png\n    const { description } = ctx.request.body.fields;\n  }\n\n}\n")),Object(r.b)("h3",{id:"specifying-file-limits"},"Specifying File Limits"),Object(r.b)("p",null,"Optional settings can be provided in the configuration to limit the size or number of files uploaded."),Object(r.b)(i.a,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"yaml",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"settings:\n  multipartRequests:\n    fileSizeLimit: 1024\n    fileNumberLimit: 4\n"))),Object(r.b)(o.a,{value:"json",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "settings": {\n    "multipartRequests": {\n      "fileSizeLimit": 1024,\n      "fileNumberLimit": 4,\n    }\n  }\n}\n'))),Object(r.b)(o.a,{value:"js",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"module.exports = {\n  settings: {\n    multipartRequests: {\n      fileSizeLimit: 1024,\n      fileNumberLimit: 4,\n    }\n  }\n}\n")))),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Setting"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"fileSizeLimit"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The maximum file size (in bytes).")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"fileNumberLimit"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The maximum number of files (useful for ",Object(r.b)("inlineCode",{parentName:"td"},"multiple")," file fields).")))),Object(r.b)("h2",{id:"file-downloads"},"File Downloads"),Object(r.b)("p",null,"Files can be downloaded using the method ",Object(r.b)("inlineCode",{parentName:"p"},"createHttpResponse")," of the ",Object(r.b)("inlineCode",{parentName:"p"},"Disk")," service. The returned object is optimized for downloading a (large) file in streaming."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { dependency, Get } from '@foal/core';\nimport { Disk } from '@foal/storage';\n\nclass ApiController {\n\n  @dependency\n  disk: Disk;\n\n  @Get('/download')\n  download() {\n    return this.disk.createHttpResponse('avatars/foo.jpg');\n  }\n\n  @Get('/download2')\n  download() {\n    return this.disk.createHttpResponse('avatars/foo.jpg', {\n      forceDownload: true,\n      filename: 'avatar.jpg'\n    });\n  }\n\n}\n")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Option"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"forceDownload"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"It indicates whether the response should include the ",Object(r.b)("inlineCode",{parentName:"td"},"Content-Disposition: attachment")," header. If this is the case, browsers will not attempt to display the returned file (e.g. with the browser's PDF viewer) and will download the file directly.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"filename"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Default name proposed by the browser when saving the file. If it is not specified, FoalTS extracts the name from the path (",Object(r.b)("inlineCode",{parentName:"td"},"foo.jpg")," in the example).")))),Object(r.b)("h2",{id:"usage-with-a-database"},"Usage with a Database"),Object(r.b)("p",null,"This example shows how to attach a profile picture to a user and how to retrieve and update it."),Object(r.b)("p",null,"Create a new directory ",Object(r.b)("inlineCode",{parentName:"p"},"uploaded/images/profiles")," at the root of your project."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"user.entity.ts")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import {\n  BaseEntity, Column, Entity, PrimaryGeneratedColumn\n} from 'typeorm';\n\n@Entity()\nexport class User extends BaseEntity {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column()\n  profile: string;\n\n}\n")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"app.controller.ts")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { Context, dependency, Get, HttpResponseNotFound, HttpResponseRedirect, HttpResponseOK, Post, render } from '@foal/core';\nimport { Disk, ValidateMultipartFormDataBody } from '@foal/storage';\n\nimport { User } from './entities';\n\n// @JWTRequired OR @UseSessions\n// OR a custom hook that sets Context.user.\nexport class AppController {\n\n  @dependency\n  disk: Disk;\n\n  @Post('/profile')\n  @ValidateMultipartFormDataBody({\n    files: {\n      profile: { required: true, saveTo: 'images/profiles' }\n    }\n  })\n  async uploadProfilePicture(ctx: Context<User>) {\n    const user = ctx.user;\n    if (user.profile) {\n      await this.disk.delete(user.profile);\n    }\n\n    user.profile = ctx.request.body.files.profile.path;\n    await user.save();\n\n    return new HttpResponseRedirect('/');\n  }\n\n  @Get('/profile')\n  async downloadProfilePicture(ctx: Context<User>) {\n    const { profile } = ctx.user;\n\n    if (!profile) {\n      return new HttpResponseNotFound();\n    }\n\n    return this.disk.createHttpResponse(profile);\n  }\n\n  @Get('/')\n  index() {\n    return render('./templates/index.html');\n  }\n\n}\n")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"templates/index.html")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html>\n<body>\n  <img src="/profile">\n  \x3c!-- The enctype "multipart/form-data" is required. --\x3e\n  <form action="/profile" method="post" enctype="multipart/form-data">\n      <input type="file" name="profile">\n      <input type="submit" value="Upload image" name="submit">\n  </form>\n</body>\n</html>\n')),Object(r.b)("h2",{id:"static-files"},"Static Files"),Object(r.b)("p",null,"Static files, such as HTML, CSS, images, and JavaScript, are served by default from the ",Object(r.b)("inlineCode",{parentName:"p"},"public")," directory."),Object(r.b)("h3",{id:"static-directory"},"Static directory"),Object(r.b)("p",null,"If necessary, this directory can be modified using the configuration key ",Object(r.b)("inlineCode",{parentName:"p"},"settings.staticPath"),"."),Object(r.b)(i.a,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"yaml",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"settings:\n  staticPath: assets\n"))),Object(r.b)(o.a,{value:"json",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "settings": {\n    "staticPath": "assets"\n  }\n}\n'))),Object(r.b)(o.a,{value:"js",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'module.exports = {\n  settings: {\n    staticPath: "assets"\n  }\n}\n')))),Object(r.b)("h3",{id:"virtual-prefix-path"},"Virtual prefix path"),Object(r.b)("p",null,"In case you need to add a virtual prefix path to your static files, you can do so with the ",Object(r.b)("inlineCode",{parentName:"p"},"staticPathPrefix")," configuration key."),Object(r.b)(i.a,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"yaml",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"settings:\n  staticPathPrefix: /static\n"))),Object(r.b)(o.a,{value:"json",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "settings": {\n    "staticPathPrefix": "/static"\n  }\n}\n'))),Object(r.b)(o.a,{value:"js",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'module.exports = {\n  settings: {\n    staticPathPrefix: "/static"\n  }\n}\n')))),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Example"),"\n| Static file | URL path with no prefix | URL path with the prefix ",Object(r.b)("inlineCode",{parentName:"p"},"/static "),"|\n| --- | --- | --- |\n| index.html | ",Object(r.b)("inlineCode",{parentName:"p"},"/")," and ",Object(r.b)("inlineCode",{parentName:"p"},"/index.html")," | ",Object(r.b)("inlineCode",{parentName:"p"},"/static")," and ",Object(r.b)("inlineCode",{parentName:"p"},"/static/index.html")," |\n| styles.css | ",Object(r.b)("inlineCode",{parentName:"p"},"/styles.css")," | ",Object(r.b)("inlineCode",{parentName:"p"},"/static/styles.css")," |\n| app.js | ",Object(r.b)("inlineCode",{parentName:"p"},"/app.js")," | ",Object(r.b)("inlineCode",{parentName:"p"},"/static/app.js")," |"))}d.isMDXComponent=!0},266:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),l=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var b=l.a.createContext({}),s=function(e){var t=l.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return l.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},u=l.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(a),u=n,m=p["".concat(i,".").concat(u)]||p[u]||d[u]||r;return a?l.a.createElement(m,o(o({ref:t},b),{},{components:a})):l.a.createElement(m,o({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var b=2;b<r;b++)i[b]=a[b];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},267:function(e,t,a){"use strict";function n(e){var t,a,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(l&&(l+=" "),l+=a);else for(t in e)e[t]&&(l&&(l+=" "),l+=t);return l}t.a=function(){for(var e,t,a=0,l="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(l&&(l+=" "),l+=t);return l}},268:function(e,t,a){"use strict";var n=a(0),l=a(269);t.a=function(){var e=Object(n.useContext)(l.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},269:function(e,t,a){"use strict";var n=a(0),l=Object(n.createContext)(void 0);t.a=l},270:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(268),i=a(267),o=a(56),c=a.n(o),b=37,s=39;t.a=function(e){var t=e.lazy,a=e.block,o=e.defaultValue,p=e.values,d=e.groupId,u=e.className,m=Object(r.a)(),f=m.tabGroupChoices,j=m.setTabGroupChoices,O=Object(n.useState)(o),h=O[0],g=O[1],y=n.Children.toArray(e.children);if(null!=d){var N=f[d];null!=N&&N!==h&&p.some((function(e){return e.value===N}))&&g(N)}var v=function(e){g(e),null!=d&&j(d,e)},x=[];return l.a.createElement("div",null,l.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":a},u)},p.map((function(e){var t=e.value,a=e.label;return l.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case s:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e)},onFocus:function(){return v(t)},onClick:function(){v(t)}},a)}))),t?Object(n.cloneElement)(y.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):l.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},271:function(e,t,a){"use strict";var n=a(3),l=a(0),r=a.n(l);t.a=function(e){var t=e.children,a=e.hidden,l=e.className;return r.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:l}),t)}}}]);
(self.webpackChunkguzzle=self.webpackChunkguzzle||[]).push([[7392],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),c=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=c(a),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(f,i(i({ref:e},p),{},{components:a})):n.createElement(f,i({ref:e},p))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2459:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var n=a(2122),r=a(9756),o=(a(7294),a(3905)),i=["components"],l={id:"snowflake",title:"Snowflake"},s={unversionedId:"how_to_guides/datastores/snowflake",id:"how_to_guides/datastores/snowflake",isDocsHomePage:!1,title:"Snowflake",description:"Snowflake is a cloud computing solution that enables data storage, processing, analytic solutions, etc.",source:"@site/docs/how_to_guides/datastores/Snowflake.md",sourceDirName:"how_to_guides/datastores",slug:"/how_to_guides/datastores/snowflake",permalink:"/docs/how_to_guides/datastores/snowflake",editUrl:"https://github.com/ja-guzzle/docs/blob/master/docs/how_to_guides/datastores/Snowflake.md",version:"current",frontMatter:{id:"snowflake",title:"Snowflake"},sidebar:"sideBar",previous:{title:"Azure Synapse Analytics Native",permalink:"/docs/how_to_guides/datastores/azure_synapse_analytics_native"},next:{title:"Constraints Check",permalink:"/docs/how_to_guides/governance/constraint_checks"}},c=[{value:"Steps to create Datastore for Snowflake",id:"steps-to-create-datastore-for-snowflake",children:[]}],p={toc:c};function d(t){var e=t.components,l=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,l,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.snowflake.com/en/"},"Snowflake")," is a cloud computing solution that enables data storage, processing, analytic solutions, etc."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Currently, this datastore is only supported in Ingestion Activity and only supported in Azure databricks."))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Currently this connector support 36 hours time limit, so if your guzzle job is likely to take 36 hours or more, there are chances that the job will fail."))),(0,o.kt)("h2",{id:"steps-to-create-datastore-for-snowflake"},"Steps to create Datastore for Snowflake"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on the action button (",(0,o.kt)("img",{alt:"image alt text",src:a(933).Z}),") from the ",(0,o.kt)("strong",{parentName:"p"},"Datastores "),"section in Left Navigation and select Snowflake connector. Alternatively, the user can launch from ",(0,o.kt)("strong",{parentName:"p"},"Create New Datastore "),"link in the Activity authoring UI or Copy Data tool.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter the Datastore name for the new datastore and click Ok")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Update the connection name or leave the default. You can refer to ",(0,o.kt)("a",{parentName:"p",href:"../connection_and_environment/connection_and_environment"},"Connection and Environments ")," for more details")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter the connection details properties as described below:"))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"URL"),(0,o.kt)("td",{parentName:"tr",align:null},"Specifies the hostname for your account ",(0,o.kt)("inlineCode",{parentName:"td"},"account_identifier.snowflakecomputing.com")),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Warehouse"),(0,o.kt)("td",{parentName:"tr",align:null},"The name of default virtual warehouse."),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Database"),(0,o.kt)("td",{parentName:"tr",align:null},"The name of database."),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Default Schema"),(0,o.kt)("td",{parentName:"tr",align:null},"The name of default schema, if guzzle user-specified database object name without schema name then this schema will be used otherwise specified schema name will be used."),(0,o.kt)("td",{parentName:"tr",align:null},"No")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Authentication"),(0,o.kt)("td",{parentName:"tr",align:null},"Authentication method for how guzzle will connect to snowflake, right now guzzle only support basic authentication."),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Username"),(0,o.kt)("td",{parentName:"tr",align:null},"Login name for the Snowflake user."),(0,o.kt)("td",{parentName:"tr",align:null},"Yes, if basic authentication is selected")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Password"),(0,o.kt)("td",{parentName:"tr",align:null},"Password for the Snowflake user."),(0,o.kt)("td",{parentName:"tr",align:null},"Yes, if basic authentication is selected")))),(0,o.kt)("a",{href:"https://guzzle.justanalytics.com/img/docs/how-to-guides/datastores/snowflake_datastore_example.png",target:"_self"},(0,o.kt)("img",{width:"825",src:"/img/docs/how-to-guides/datastores/snowflake_datastore_example.png"})))}d.isMDXComponent=!0},933:function(t,e){"use strict";e.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAfCAYAAACPvW/2AAAAqUlEQVR4XmNIXXPn/2DAMMDw9tPX/4MBwx0U1Lf1/2DAow4ihEcdRAiPOogQHnUQITzqIEKYJAf1bDn3/9D1p/9ffvz2f8XxW2AxEH3l8VswRhYDqQGpBelBNwcfJslB+64+hmsAAZDYozef4XwQG9lQEADpQTcHH4aBoemgQRdl9MCjDiKERx1ECI86iBAedRAhPOogQnjwOgi9jz1QGO4g9FGIgcIwAAAAjDQ1GVtclgAAAABJRU5ErkJggg=="}}]);
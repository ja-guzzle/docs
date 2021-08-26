(self.webpackChunkguzzle=self.webpackChunkguzzle||[]).push([[5956],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return u},kt:function(){return m}});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=r.createContext({}),c=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},u=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=c(a),m=n,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return a?r.createElement(f,l(l({ref:e},u),{},{components:a})):r.createElement(f,l({ref:e},u))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:n,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4105:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var r=a(2122),n=a(9756),o=(a(7294),a(3905)),l=["components"],i={id:"azure_data_factory",title:"Azure Data Factory"},s={unversionedId:"how_to_guides/datastores/azure_data_factory",id:"how_to_guides/datastores/azure_data_factory",isDocsHomePage:!1,title:"Azure Data Factory",description:"Azure Data Factory is the platform that solves such data scenarios. It is the cloud-based ETL and data integration service that allows you to create data-driven workflows for orchestrating data movement and transforming data at scale.",source:"@site/docs/how_to_guides/datastores/Azure Data Factory.md",sourceDirName:"how_to_guides/datastores",slug:"/how_to_guides/datastores/azure_data_factory",permalink:"/docs/how_to_guides/datastores/azure_data_factory",editUrl:"https://github.com/ja-guzzle/docs/blob/master/docs/how_to_guides/datastores/Azure Data Factory.md",version:"current",frontMatter:{id:"azure_data_factory",title:"Azure Data Factory"},sidebar:"sideBar",previous:{title:"Amazon S3",permalink:"/docs/how_to_guides/datastores/amazon_s3"},next:{title:"Azure Data Lake Storage Gen2",permalink:"/docs/how_to_guides/datastores/adls_gen2"}},c=[{value:"Steps to create Datastore for Azure Data Factory",id:"steps-to-create-datastore-for-azure-data-factory",children:[]},{value:"Interface for ADF datastore",id:"interface-for-adf-datastore",children:[]}],u={toc:c};function p(t){var e=t.components,i=(0,n.Z)(t,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/data-factory/"},"Azure Data Factory")," is the platform that solves such data scenarios. It is the cloud-based ETL and data integration service that allows you to create data-driven workflows for orchestrating data movement and transforming data at scale."),(0,o.kt)("p",null,"Guzzle only supports ADF as an External job. "),(0,o.kt)("h2",{id:"steps-to-create-datastore-for-azure-data-factory"},"Steps to create Datastore for Azure Data Factory"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on the action button (",(0,o.kt)("img",{alt:"image alt text",src:a(5745).Z}),") from the ",(0,o.kt)("strong",{parentName:"p"},"Datastores "),"section in Left Navigation and select ",(0,o.kt)("strong",{parentName:"p"},"Azure Data Factory "),"connector. Alternatively users can launch from ",(0,o.kt)("strong",{parentName:"p"},"Create New Datastore "),"link in Activity authoring UI.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter the Datastore name for the new datastore and click Ok")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Update the connection name or leave the default. You can refer to ",(0,o.kt)("a",{parentName:"p",href:"https://guzzle.justanalytics.com/docs/how_to_guides/connection_and_environment/connection_and_environment"},"Connection and Environments ")," for more details")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter the additional properties for the ADF as described below:"))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Credential Type"),(0,o.kt)("td",{parentName:"tr",align:null},"Authentication type to use when connecting to ADF.",(0,o.kt)("br",null)," Following mechanisms are supported:",(0,o.kt)("br",null),(0,o.kt)("br",null),"Service principal : To use Service principal which to access selected container or folder in the storage account. Follow the steps at Register your application with an Azure AD tenant to create Application Registration and capture following information like Application (client) ID, Client secret, and Directory (Tenant) ID.",(0,o.kt)("br",null),(0,o.kt)("br",null)," Also ensure following permission:",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"As source:")," Grant Execute permission for all parent folders, along with Read permission for the files to copy. Alternatively, in Access control (IAM), grant at least the Storage Blob Data Reader role at container or storage account level.",(0,o.kt)("br",null)," ",(0,o.kt)("strong",{parentName:"td"},"As sink(target):")," Grant Execute permission for all parents folders, along with Write permission for the sink folders. Alternatively, in Access control (IAM), grant at least the Storage Blob Data Contributor role at container or storage account level."),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Client ID"),(0,o.kt)("td",{parentName:"tr",align:null},"Service principal\u2019s client id"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Client Secret"),(0,o.kt)("td",{parentName:"tr",align:null},"Service principal secret. ",(0,o.kt)("br",null)," For specify the secret following mechanisms are supported:",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Manual :")," You have to put plain secret in the field.",(0,o.kt)("br",null)," ",(0,o.kt)("strong",{parentName:"td"},"Azure Key Vault :")," To use azure key vault users have to specify the key vault name and secret name of the secure Azure key vault instance."),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Tenant ID"),(0,o.kt)("td",{parentName:"tr",align:null},"Directory ID of the service principal"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Subscription ID"),(0,o.kt)("td",{parentName:"tr",align:null},"Users Azure subscription ID"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Resource Group Name"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify the resource group name under which created Azure Data Factory Instance"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Factory Name"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify the name of Data Factory"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Save the Datastore config. Optionally you can also Test the connection. ")),(0,o.kt)("h2",{id:"interface-for-adf-datastore"},"Interface for ADF datastore"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image alt text",src:a(1721).Z})))}p.isMDXComponent=!0},1721:function(t,e,a){"use strict";e.Z=a.p+"assets/images/ADF_1-cec1bf30f5f287668cf5b99ffd6d4509.jpg"},5745:function(t,e){"use strict";e.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAfCAIAAAAA3/ihAAAAA3NCSVQICAjb4U/gAAAA5UlEQVRIiWNMXXOHgfZgVrAyAwMD49tPX+lgmRAvFwMDA0vqnAN0sGxtoRcDAwMTHWyCg1HLRi0btWyYWcaCR85KTdJMWVxdSnD/tSerjt8Os1TVkRFmYGC48uQthOuoJXPz2ftTd18eu/WcGMvw+cxIUdRWQ0qMjzPcQpWBgcFKVVJbRkhbRshKVZKBgSHcQlWMj9NWQ8pIUZRInw2aYDx3/zULExMkGBkYGI7dfq7zHRqMDAwMK0/chgTjufuvibSMMahvK8UuJgxGq5hRy0YtG7VsSFlG37Z+xS6i6j0KAaQXAwBAp0CiDoMpLQAAAABJRU5ErkJggg=="}}]);
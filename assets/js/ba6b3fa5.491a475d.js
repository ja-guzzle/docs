(self.webpackChunkguzzle=self.webpackChunkguzzle||[]).push([[2648],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?a.createElement(f,i(i({ref:t},u),{},{components:r})):a.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2139:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var a=r(2122),n=r(9756),o=(r(7294),r(3905)),i=["components"],s={},l={unversionedId:"How to guides/Datastores/Azure SQL",id:"How to guides/Datastores/Azure SQL",isDocsHomePage:!1,title:"Azure SQL",description:"Azure SQL is a cloud native and fully managed database management system (DBMS) from Azure, running the latest stable version of SQL Server Database. Guzzle leverages Apache Spark connector: SQL Server & Azure SQL which is a high performance connector to read and write from Azure SQL and SQL Server.",source:"@site/docs/How to guides/Datastores/Azure SQL.md",sourceDirName:"How to guides/Datastores",slug:"/How to guides/Datastores/Azure SQL",permalink:"/docs/docs/How to guides/Datastores/Azure SQL",editUrl:"https://github.com/ja-guzzle/docs/blob/master/docs/How to guides/Datastores/Azure SQL.md",version:"current",frontMatter:{},sidebar:"sideBar",previous:{title:"Azure Data Lake Storage Gen2",permalink:"/docs/docs/How to guides/Datastores/Azure Data Lake Storage Gen2"},next:{title:"Databricks File System",permalink:"/docs/docs/How to guides/Datastores/Databricks File System"}},c=[{value:"Steps to create Datastore  for Azure SQL",id:"steps-to-create-datastore--for-azure-sql",children:[]},{value:"Known Limitation",id:"known-limitation",children:[]}],u={toc:c};function p(e){var t=e.components,s=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Azure SQL is a cloud native and fully managed database management system (DBMS) from Azure, running the latest stable version of SQL Server Database. Guzzle leverages ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/sql/connect/spark/connector?view=sql-server-ver15"},"Apache Spark connector: SQL Server & Azure SQL")," which is a high performance connector to read and write from Azure SQL and SQL Server. "),(0,o.kt)("p",null,"The connector can be used for SQL databases, on-premises or in the cloud (both Azure SQL and SQL Server Managed Instance), as an input data source or output data sink for Spark jobs."),(0,o.kt)("h2",{id:"steps-to-create-datastore--for-azure-sql"},"Steps to create Datastore  for Azure SQL"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click on the action button (",(0,o.kt)("img",{alt:"image alt text",src:r(5745).Z}),") from the ",(0,o.kt)("strong",{parentName:"li"},"Datastores "),"section in Left Navigation and select ",(0,o.kt)("strong",{parentName:"li"},"Azure SQL "),"connector. Alternatively user can launch from ",(0,o.kt)("strong",{parentName:"li"},"Create New Datastore "),"link in Activity authoring UI or Copy Data tool")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter the Datastore name for the new datastore and click Ok")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Update the connection name or leave the default. You can refer to ",(0,o.kt)("a",{parentName:"p",href:"http://http"},"Connection and Environments ")," for more details")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter the connection details properties as described below:"))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Property"),(0,o.kt)("td",{parentName:"tr",align:null},"Description"),(0,o.kt)("td",{parentName:"tr",align:null},"Required")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Database URL"),(0,o.kt)("td",{parentName:"tr",align:null},"JDBC URL for connecting to SQL server."),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  Database URL - you can find URL from Azure portal it will be in this form jdbc:sqlserver://:1433;database=;user=;password=;encrypt=true;trustServerCertificate=false;hostNameInCertificate=*.database.windows.net;loginTimeout=30;\n")),(0,o.kt)("p",null,"Example: jdbc:sqlserver://< sql server name >.\nThe URL can optionally contain database name, user name and other connection properties.|Yes|\n|Database|Database name of the  SQL Server (this property can be skipped if its specified as part of Database URL)|yes|\n|Username|User name of SQL server|yes|\n|Password|Password of SQL server|yes|"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image alt text",src:r(8870).Z})),(0,o.kt)("h2",{id:"known-limitation"},"Known Limitation"),(0,o.kt)("p",null,"--"))}p.isMDXComponent=!0},5745:function(e,t){"use strict";t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAfCAIAAAAA3/ihAAAAA3NCSVQICAjb4U/gAAAA5UlEQVRIiWNMXXOHgfZgVrAyAwMD49tPX+lgmRAvFwMDA0vqnAN0sGxtoRcDAwMTHWyCg1HLRi0btWyYWcaCR85KTdJMWVxdSnD/tSerjt8Os1TVkRFmYGC48uQthOuoJXPz2ftTd18eu/WcGMvw+cxIUdRWQ0qMjzPcQpWBgcFKVVJbRkhbRshKVZKBgSHcQlWMj9NWQ8pIUZRInw2aYDx3/zULExMkGBkYGI7dfq7zHRqMDAwMK0/chgTjufuvibSMMahvK8UuJgxGq5hRy0YtG7VsSFlG37Z+xS6i6j0KAaQXAwBAp0CiDoMpLQAAAABJRU5ErkJggg=="},8870:function(e,t,r){"use strict";t.Z=r.p+"assets/images/azure_sql_1-1baafde01f11b4c26e3a69d9b37b76ef.gif"}}]);
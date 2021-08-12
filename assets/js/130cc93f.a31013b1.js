(self.webpackChunkguzzle=self.webpackChunkguzzle||[]).push([[292],{3905:function(t,e,l){"use strict";l.d(e,{Zo:function(){return s},kt:function(){return p}});var n=l(7294);function r(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function a(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function u(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?a(Object(l),!0).forEach((function(e){r(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function o(t,e){if(null==t)return{};var l,n,r=function(t,e){if(null==t)return{};var l,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||(r[l]=t[l]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(r[l]=t[l])}return r}var i=n.createContext({}),d=function(t){var e=n.useContext(i),l=e;return t&&(l="function"==typeof t?t(e):u(u({},e),t)),l},s=function(t){var e=d(t.components);return n.createElement(i.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var l=t.components,r=t.mdxType,a=t.originalType,i=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),c=d(l),p=r,m=c["".concat(i,".").concat(p)]||c[p]||k[p]||a;return l?n.createElement(m,u(u({ref:e},s),{},{components:l})):n.createElement(m,u({ref:e},s))}));function p(t,e){var l=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=l.length,u=new Array(a);u[0]=c;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o.mdxType="string"==typeof t?t:r,u[1]=o;for(var d=2;d<a;d++)u[d]=l[d];return n.createElement.apply(null,u)}return n.createElement.apply(null,l)}c.displayName="MDXCreateElement"},3717:function(t,e,l){"use strict";l.r(e),l.d(e,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return d},default:function(){return k}});var n=l(2122),r=l(9756),a=(l(7294),l(3905)),u=["components"],o={},i={unversionedId:"How to guides/Datastores/Datastore overview",id:"How to guides/Datastores/Datastore overview",isDocsHomePage:!1,title:"Datastore overview",description:"Datastore in Guzzle represents either on premise or cloud data service which can either act as source or sink (target) for Guzzle activities. A datastore can either be cloud files services like S3, Azure Blob, DBFS or databases like  Azure SQL, MySQL or apps which are accessible via Rest API.",source:"@site/docs/How to guides/Datastores/Datastore overview.md",sourceDirName:"How to guides/Datastores",slug:"/How to guides/Datastores/Datastore overview",permalink:"/docs/docs/How to guides/Datastores/Datastore overview",editUrl:"https://github.com/ja-guzzle/docs/blob/master/docs/How to guides/Datastores/Datastore overview.md",version:"current",frontMatter:{},sidebar:"sideBar",previous:{title:"Databricks File System",permalink:"/docs/docs/How to guides/Datastores/Databricks File System"},next:{title:"Delta Lake",permalink:"/docs/docs/How to guides/Datastores/Delta Lake"}},d=[{value:"Supported Datastores",id:"supported-datastores",children:[]},{value:"Support for External activity",id:"support-for-external-activity",children:[]},{value:"Supported File Format",id:"supported-file-format",children:[]}],s={toc:d};function k(t){var e=t.components,l=(0,r.Z)(t,u);return(0,a.kt)("wrapper",(0,n.Z)({},s,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Datastore in Guzzle represents either on premise or cloud data service which can either act as source or sink (target) for Guzzle ",(0,a.kt)("strong",{parentName:"p"},"activities"),". A datastore can either be cloud files services like S3, Azure Blob, DBFS or databases like  Azure SQL, MySQL or apps which are accessible via Rest API."),(0,a.kt)("p",null,"Additionally Guzzle supports datastore to run external activities like procedure, Azure Data Facotry pipeline or notebook. "),(0,a.kt)("h2",{id:"supported-datastores"},"Supported Datastores"),(0,a.kt)("p",null,"Guzzle broadly supports three types of datastores: File, Database and API. Below matrix provides supported Datastores - across different activity types and Computes"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null),(0,a.kt)("td",null),(0,a.kt)("td",null,"Computes"),(0,a.kt)("td",null),(0,a.kt)("td",null),(0,a.kt)("td",null,"Activities"),(0,a.kt)("td",null),(0,a.kt)("td",null),(0,a.kt)("td",null),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Category"),(0,a.kt)("td",null,"Connector"),(0,a.kt)("td",null,"Databricks"),(0,a.kt)("td",null,"Apache Spark (on Yarn)"),(0,a.kt)("td",null,"Apache Spark (on Local mode)"),(0,a.kt)("td",null,"Ingestion (source/target)"),(0,a.kt)("td",null,"Processing (source/target)"),(0,a.kt)("td",null,"Reconciliation (source/target)"),(0,a.kt)("td",null,"Constraint Checks"),(0,a.kt)("td",null,"Housekeeping")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"File"),(0,a.kt)("td",null,"DBFS"),(0,a.kt)("td",null,"\u2713"),(0,a.kt)("td",null),(0,a.kt)("td",null),(0,a.kt)("td",null,"\u2713/\u2713"),(0,a.kt)("td",null),(0,a.kt)("td",null),(0,a.kt)("td",null),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null),(0,a.kt)("td",null,"ADLS Gen2"),(0,a.kt)("td",null,"\u2713"),(0,a.kt)("td",null),(0,a.kt)("td",null),(0,a.kt)("td",null,"\u2713/\u2713"),(0,a.kt)("td",null),(0,a.kt)("td",null),(0,a.kt)("td",null),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null),(0,a.kt)("td",null,"Server file system"),(0,a.kt)("td",null,"\u2713"),(0,a.kt)("td",null,"\u2713"),(0,a.kt)("td",null,"\u2713"),(0,a.kt)("td",null,"\u2713/\u2713"),(0,a.kt)("td",null),(0,a.kt)("td",null),(0,a.kt)("td",null),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null),(0,a.kt)("td",null,"HDFS"),(0,a.kt)("td",null,"\u2713"),(0,a.kt)("td",null,"\u2713"),(0,a.kt)("td",null,"\u2713"),(0,a.kt)("td",null,"\u2713/\u2713"),(0,a.kt)("td",null),(0,a.kt)("td",null),(0,a.kt)("td",null),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null),(0,a.kt)("td",null,"AWS S3"),(0,a.kt)("td",null,"\u2713"),(0,a.kt)("td",null,"\u2713"),(0,a.kt)("td",null,"\u2713"),(0,a.kt)("td",null,"\u2713/\u2713"),(0,a.kt)("td",null),(0,a.kt)("td",null),(0,a.kt)("td",null),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Database"),(0,a.kt)("td",null,"Delta"),(0,a.kt)("td",null,"\u2713"),(0,a.kt)("td",null),(0,a.kt)("td",null),(0,a.kt)("td",null,"\u2713/\u2713"),(0,a.kt)("td",null,"\u2713/\u2713"),(0,a.kt)("td",null,"\u2713/\u2713"),(0,a.kt)("td",null,"\u2713"),(0,a.kt)("td",null,"\u2713")),(0,a.kt)("tr",null,(0,a.kt)("td",null),(0,a.kt)("td",null,"Hive"),(0,a.kt)("td",null,"\u2713"),(0,a.kt)("td",null,"\u2713"),(0,a.kt)("td",null,"\u2713"),(0,a.kt)("td",null,"\u2713/\u2713"),(0,a.kt)("td",null,"\u2713/\u2713"),(0,a.kt)("td",null,"\u2713/\u2713"),(0,a.kt)("td",null,"\u2713"),(0,a.kt)("td",null,"\u2713")),(0,a.kt)("tr",null,(0,a.kt)("td",null),(0,a.kt)("td",null,"Azure SQL"),(0,a.kt)("td",null,"\u2713"),(0,a.kt)("td",null,"\u2713"),(0,a.kt)("td",null,"\u2713"),(0,a.kt)("td",null,"\u2713/\u2713"),(0,a.kt)("td",null),(0,a.kt)("td",null),(0,a.kt)("td",null),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null),(0,a.kt)("td",null,"Azure Synapse"),(0,a.kt)("td",null,"\u2713"),(0,a.kt)("td",null),(0,a.kt)("td",null),(0,a.kt)("td",null,"\u2713/\u2713"),(0,a.kt)("td",null),(0,a.kt)("td",null),(0,a.kt)("td",null),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null),(0,a.kt)("td",null,"JDBC"),(0,a.kt)("td",null,"\u2713"),(0,a.kt)("td",null,"\u2713"),(0,a.kt)("td",null,"\u2713"),(0,a.kt)("td",null,"\u2713/\u2713"),(0,a.kt)("td",null,"\u2713/\u2713"),(0,a.kt)("td",null,"\u2713/\u2713"),(0,a.kt)("td",null,"\u2713"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"API"),(0,a.kt)("td",null,"Rest API"),(0,a.kt)("td",null,"\u2713"),(0,a.kt)("td",null,"\u2713"),(0,a.kt)("td",null,"\u2713"),(0,a.kt)("td",null,"\u2713/\u2212"),(0,a.kt)("td",null),(0,a.kt)("td",null),(0,a.kt)("td",null),(0,a.kt)("td",null))),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol"},"The JDBC connector is a generic connector that lets you connect to any database that supports the JDBC interface. "),(0,a.kt)("li",{parentName:"ol"},"Rest API connector allows you to connect any API or cloud application which provides REST API interface ")))),(0,a.kt)("h2",{id:"support-for-external-activity"},"Support for External activity"),(0,a.kt)("p",null,"Guzzle supports running external procedures, scripts, notebook and pipelines on remote systems and data services. This is supported via External activity in Guzzle. The supported connectors for calling external activities are below:"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"Connector"),(0,a.kt)("td",null,"Remark")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Databricks"),(0,a.kt)("td",null,"To call Notebook, Databricks jar  or Python task")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Azure Data Factory (ADF)"),(0,a.kt)("td",null,"To call ADF pipeline")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"JDBC"),(0,a.kt)("td",null,"To trigger stored procedure or run a JDBC datastore"))),(0,a.kt)("h2",{id:"supported-file-format"},"Supported File Format"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Delimited format")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Fixed length files")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Text files (using Grok or Regex)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"JSON format")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"XML format")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Excel format")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"ORC format")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Avro format")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Parquet format"))))}k.isMDXComponent=!0}}]);
(self.webpackChunkguzzle=self.webpackChunkguzzle||[]).push([[9655],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,f=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7818:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i=["components"],l={},s={unversionedId:"How to guides/Ingest data/Working with Databases- Azure SQL",id:"How to guides/Ingest data/Working with Databases- Azure SQL",isDocsHomePage:!1,title:"Working with Databases- Azure SQL",description:"Azure SQL is a family of managed, secure, and intelligent products that use the SQL Server database engine in the Azure cloud. Azure SQL is built upon the familiar SQL Server engine, so you can migrate applications with ease and continue to use the tools, languages, and resources you're familiar with.",source:"@site/docs/How to guides/Ingest data/Working with Databases- Azure SQL.md",sourceDirName:"How to guides/Ingest data",slug:"/How to guides/Ingest data/Working with Databases- Azure SQL",permalink:"/docs/docs/How to guides/Ingest data/Working with Databases- Azure SQL",editUrl:"https://github.com/ja-guzzle/docs/blob/master/docs/How to guides/Ingest data/Working with Databases- Azure SQL.md",version:"current",frontMatter:{},sidebar:"sideBar",previous:{title:"Working with Big Data",permalink:"/docs/docs/How to guides/Ingest data/Working with Big Data"},next:{title:"Working with Databases- Azure Synapse Analytics",permalink:"/docs/docs/How to guides/Ingest data/Working with Databases- Azure Synapse Analytics"}},u=[{value:"Azure SQL as a Source",id:"azure-sql-as-a-source",children:[]},{value:"Azure SQL as a Target or Reject",id:"azure-sql-as-a-target-or-reject",children:[]}],c={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Azure SQL is a family of managed, secure, and intelligent products that use the SQL Server database engine in the Azure cloud. Azure SQL is built upon the familiar SQL Server engine, so you can migrate applications with ease and continue to use the tools, languages, and resources you're familiar with."),(0,o.kt)("h2",{id:"azure-sql-as-a-source"},"Azure SQL as a Source"),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"Property "),(0,o.kt)("td",null,"Description"),(0,o.kt)("td",null,"Default Value"),(0,o.kt)("td",null,"Required")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Table + Filter"),(0,o.kt)("td",null,"Specify the table from where to read data. The table can contain schema or even database name. If you select Table as input, data flow fetches all the data from the table specified in the dataset. Example: customerdb.[dbo].[customer] [customer]  (default schema name dbo will be assumed) [dbo].[customer] (database name shall be as per Datastore config)",(0,o.kt)("p",null,"Also when the Table option is selected, you can also specify the Filter which needs to be included when querying data from synapse. The filter can be used to select only a part of the table. We may basically enter a condition and only the part of the table that satisfies the condition will be seen in the Target Section.")),(0,o.kt)("td",null,"None"),(0,o.kt)("td",null,"Yes.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"SQL"),(0,o.kt)("td",null,"Specify the SQL query which will be run as-is on the source. "),(0,o.kt)("td",null),(0,o.kt)("td",null))),(0,o.kt)("h2",{id:"azure-sql-as-a-target-or-reject"},"Azure SQL as a Target or Reject"),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"Property "),(0,o.kt)("td",null,"Description"),(0,o.kt)("td",null,"Default Value"),(0,o.kt)("td",null,"Required")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Table"),(0,o.kt)("td",null,"This is used to specify the Target Table we would like to create based on our Source. "),(0,o.kt)("td",null,"None"),(0,o.kt)("td",null,"Yes")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Operation"),(0,o.kt)("td",null,"Provides two options that determines whether the content of source or reject data is expected to be - append: To append the existing data in the given Azure SQL table. overwrite:This will do an overwrite of data for a subset of partitions that are present in the source. The entire Data in the Azure SQL server will be overwritten."),(0,o.kt)("td",null,"append"),(0,o.kt)("td",null,"Yes")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Reliability Level"),(0,o.kt)("td",null,"Allowed Values include BEST_EFFORT and NO_DUPLICATES. NO_DUPLICATES implements a reliable insert in executor restart scenarios. It also ensures higher reliability and availability of Data. BEST_EFFORT is a De-duplication mechanism. It seeks to minimize the number of duplicates in our Data. This means if there is the same piece of Data more than 1 time in a row BEST_EFFORT de-duplicates these instances and will only retain only one of these occurrences.  However, it does guarantee an absence of duplicates.  "),(0,o.kt)("td",null,"BEST_EFFORT"),(0,o.kt)("td",null,"Yes")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Isolation Level"),(0,o.kt)("td",null,"Specifies the transaction locking behavior for the SQL source. The allowed values are: ReadCommitted, ReadUncommitted, RepeatableRead and Serializable. If not specified, the database's default isolation level is used. Refer to this doc for more details."),(0,o.kt)("td",null,"READ_COMMITTED"),(0,o.kt)("td",null,"Yes")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Batch Size"),(0,o.kt)("td",null,"We can use this to specify how many rows are being written in each batch. Larger batch sizes may improve memory optimization. Allowed values are Integers."),(0,o.kt)("td",null,"2500"),(0,o.kt)("td",null,"Yes")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Bulk Copy Timeout"),(0,o.kt)("td",null,"This property specifies the wait time for the insert operation for each batch to complete before time runs out."),(0,o.kt)("td",null,"600"),(0,o.kt)("td",null,"Yes"))))}d.isMDXComponent=!0}}]);
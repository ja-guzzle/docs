(self.webpackChunkguzzle=self.webpackChunkguzzle||[]).push([[9237],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return m}});var o=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||n;return a?o.createElement(f,i(i({ref:t},c),{},{components:a})):o.createElement(f,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<n;u++)i[u]=a[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7319:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var o=a(2122),r=a(9756),n=(a(7294),a(3905)),i=["components"],l={id:"ingest_data_from_delta_to_adls",title:"Ingest Data From Delta table to Azure Data Lake Storage"},s={unversionedId:"Tutorials/ingest_data_from_delta_to_adls",id:"Tutorials/ingest_data_from_delta_to_adls",isDocsHomePage:!1,title:"Ingest Data From Delta table to Azure Data Lake Storage",description:"Ingest Data from Delta Table to Azure Data Lake Storage (ADLS Gen2)",source:"@site/docs/Tutorials/Ingest Data from Delta to ADLS.md",sourceDirName:"Tutorials",slug:"/Tutorials/ingest_data_from_delta_to_adls",permalink:"/docs/Tutorials/ingest_data_from_delta_to_adls",editUrl:"https://github.com/ja-guzzle/docs/blob/master/docs/Tutorials/Ingest Data from Delta to ADLS.md",version:"current",frontMatter:{id:"ingest_data_from_delta_to_adls",title:"Ingest Data From Delta table to Azure Data Lake Storage"},sidebar:"sideBar",previous:{title:"Ingest Data from REST Api to JDBC Database",permalink:"/docs/Tutorials/ingest_data_from_rest_api_to_jdbc"},next:{title:"Connection and Environment",permalink:"/docs/how_to_guides/connection_and_environment/connection_and_environment"}},u=[{value:"In this tutorial we cover",id:"in-this-tutorial-we-cover",children:[]},{value:"Pre-Requisites",id:"pre-requisites",children:[]},{value:"Load Dataset from Blob Storage to the Guzzle Platform through its Source Section",id:"load-dataset-from-blob-storage-to-the-guzzle-platform-through-its-source-section",children:[]},{value:"Loading or configuring the Source Dataset to a Target Dataset or Table",id:"loading-or-configuring-the-source-dataset-to-a-target-dataset-or-table",children:[]}],c={toc:u};function p(e){var t=e.components,l=(0,r.Z)(e,i);return(0,n.kt)("wrapper",(0,o.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Ingest Data from Delta Table to Azure Data Lake Storage (ADLS Gen2)"),(0,n.kt)("p",null,"This tutorial will be covering an end to end use-case of loading data from a Delta Table to ADLS Gen2.  It will be using Guzzle\u2019s ingestion activity which allows to move data from any source dataset to a target dataset applying various validations, transformations and rejections."),(0,n.kt)("h2",{id:"in-this-tutorial-we-cover"},"In this tutorial we cover"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Pre-Requisites.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Load Dataset from Delta table to the Guzzle Platform through its Source Section.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Loading or configuring the Source Dataset to a Target Dataset or Table."))),(0,n.kt)("h2",{id:"pre-requisites"},"Pre-Requisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Since we use Guzzle as our Data Engineering Workbench for movement and transformation we must ensure it is set up and configured properly. Guzzle supports both on-premise and cloud deployment.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Ensure that the file is saved in an available Source Location. This is essential as the Data will be ingested from the Delta table.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Ensure that the Target Location is available in order to prevent any errors after the Data has been Transformed and Validated.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Guzzle should be configured to support Azure Databricks and MYSQL. This is essential as we will be using an ADLS in this tutorial. It will also help in exploiting all of Guzzle\u2019s Features."))),(0,n.kt)("h2",{id:"load-dataset-from-blob-storage-to-the-guzzle-platform-through-its-source-section"},"Load Dataset from Blob Storage to the Guzzle Platform through its Source Section"),(0,n.kt)("p",null,"The first step in the Ingestion Process would be to deal with the Source Section of Guzzle. Guzzle\u2019s Source Section provides many features including specifying the file names, location of the file and the file format."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the Datastore option choose the Dataset you would like Guzzle to work on. Ensure that the Dataset is there in the Delta table before choosing it and select the datastore Delta table.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Users can choose any option like table or sql.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"If the user chooses Table option then give the table name from where you want to fetch data.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"If the user chooses SQL option then give sql query to fetch data from table.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"User can also Configure Pre and Post SQL, Watermark, Configure columns restriction and Configure table dependency."))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image alt text",src:a(3210).Z})),(0,n.kt)("p",null,"As seen above we have chosen the table option and table name is users. The option to Preview Data can also be seen in the Top Right Corner."),(0,n.kt)("p",null,"After previewing the data can be seen.\n",(0,n.kt)("img",{alt:"image alt text",src:a(7862).Z})),(0,n.kt)("h2",{id:"loading-or-configuring-the-source-dataset-to-a-target-dataset-or-table"},"Loading or configuring the Source Dataset to a Target Dataset or Table"),(0,n.kt)("p",null,"We now have to load the Source Dataset to a Target Dataset or Table. Guzzle provides many different Datastores from Local Files, Delta Tables and MySQL. It allows configuring a Target Partition Scheme."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the Datastore option choose the Target you would like to configure the Source Dataset to according to your requirement. Here we choose the ADLS Datastore as we are ingesting Data into an ADLS Storage account.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"We can also give formats for files like csv,json,xml..")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"We can now give any name to the Target File. We can again Sample the Data through the Sample Data or Preview Data option given in the top right corner."))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image alt text",src:a(4440).Z})),(0,n.kt)("p",null,"Here we have chosen ADLS as our Datastore and assigned the name users to our file name."))}p.isMDXComponent=!0},3210:function(e,t,a){"use strict";t.Z=a.p+"assets/images/ingest_from_delta_to_adls_1-70c6b65ee589f583cf19737b6b6ce98e.jpg"},7862:function(e,t,a){"use strict";t.Z=a.p+"assets/images/ingest_from_delta_to_adls_2-0e5782f224a8fbd9caddddafa3675c3d.jpg"},4440:function(e,t,a){"use strict";t.Z=a.p+"assets/images/ingest_from_delta_to_adls_3-19fba43f8cd24e8d88d8eb43d4c3fc2e.jpg"}}]);
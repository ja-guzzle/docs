(self.webpackChunkguzzle=self.webpackChunkguzzle||[]).push([[3274],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2649:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var n=a(2122),r=a(9756),o=(a(7294),a(3905)),i=["components"],l={},s={unversionedId:"How to guides/Computes/Azure Databricks",id:"How to guides/Computes/Azure Databricks",isDocsHomePage:!1,title:"Azure Databricks",description:"Guzzle supports Computing environments on the Azure Cloud. In Guzzle azure cloud setup, we can use databricks to execute our workloads. This article helps in using Azure Databricks as a computing environment in Guzzle.",source:"@site/docs/How to guides/Computes/Azure Databricks.md",sourceDirName:"How to guides/Computes",slug:"/How to guides/Computes/Azure Databricks",permalink:"/docs/How to guides/Computes/Azure Databricks",editUrl:"https://github.com/ja-guzzle/docs/blob/master/docs/How to guides/Computes/Azure Databricks.md",version:"current",frontMatter:{},sidebar:"sideBar",previous:{title:"Copy Data Tool",permalink:"/docs/How to guides/Author/Copy Data Tool"},next:{title:"Local Spark",permalink:"/docs/How to guides/Computes/Local Spark"}},u=[{value:"Use of Azure Databricks as a computing environment",id:"use-of-azure-databricks-as-a-computing-environment",children:[]},{value:"Setup Databricks Workspace",id:"setup-databricks-workspace",children:[]},{value:"how to setup external metastore",id:"how-to-setup-external-metastore",children:[]}],c={toc:u};function p(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Guzzle supports Computing environments on the Azure Cloud. In Guzzle azure cloud setup, we can use databricks to execute our workloads. This article helps in using Azure Databricks as a computing environment in Guzzle."),(0,o.kt)("h2",{id:"use-of-azure-databricks-as-a-computing-environment"},"Use of Azure Databricks as a computing environment"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Cluster Type"),(0,o.kt)("td",{parentName:"tr",align:null},"There are 3 types of Databricks clusters available in Guzzle:",(0,o.kt)("br",null),(0,o.kt)("br",null),"Data Engineering :\xa0Data Engineering cluster is recommended for automated workloads. It is recommended to use it for your BAU data loads.",(0,o.kt)("br",null),(0,o.kt)("br",null),"Data Analytics : Data Analytics cluster is recommended for interactive queries along with concurrent user support. This cluster type is configurable in Guzzle and it can also execute the workloads, but it is not recommended to use it for your BAU data loads. Data Analytics cluster is costlier than Data Engineering cluster for per DBU usage and meant for interactive queries through Databricks notebook in a shared environment where multiple people have to collaborate as a team.",(0,o.kt)("br",null),(0,o.kt)("br",null),"Data Engineering Light : Data Engineering Light cluster is even cheaper than Data Engineering cluster for per DBU usage. Once you select this type, rest all the other configuration for this cluster type would be the same as the Data Engineering cluster. Note that, Data Engineering Light provides a runtime option for jobs that don\u2019t need the advanced performance, reliability, or autoscaling benefits provided by the more capable Databricks Data Engineering cluster offering."),(0,o.kt)("td",{parentName:"tr",align:null},"Data Engineering")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"API URL"),(0,o.kt)("td",{parentName:"tr",align:null},"It is used to specify the URL of the Databricks environment which will be used with Guzzle. We can specify the Azure region accordingly based on the region of the Databricks workspace."),(0,o.kt)("td",{parentName:"tr",align:null},"None")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"API Token"),(0,o.kt)("td",{parentName:"tr",align:null},"It is used to specify the API Token for our Databricks Environment. API token is required for Guzzle to authenticate to Azure Databricks. API token needs to be generated from the databricks workspace."),(0,o.kt)("td",{parentName:"tr",align:null},"None")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"DBFS Guzzle Directory"),(0,o.kt)("td",{parentName:"tr",align:null},"It is used to specify the Guzzle mount directory location where guzzle job configs, jars and all bin relies in the Databricks."),(0,o.kt)("td",{parentName:"tr",align:null},"None")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Cluster Id (Applicable for Data Analytics cluster)"),(0,o.kt)("td",{parentName:"tr",align:null},"It is used to specify the name of the Cluster we have created in the Databricks Environment. A job cluster is created in Databricks with this name.",(0,o.kt)("br",null),"Guzzle will show available clusters once a valid API key is provided",(0,o.kt)("br",null),"UI will show cluster name, but it stores cluster id in the underlying yml file"),(0,o.kt)("td",{parentName:"tr",align:null},"None")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Configure Retry Options"),(0,o.kt)("td",{parentName:"tr",align:null},"basically is the retry which we do if Guzzle is not able to successfully submit the job (possibly due to issues like unavalabilty of cloud resources or error in control plane)"),(0,o.kt)("td",{parentName:"tr",align:null},"None")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Spark Version (Only in Data Engineering and Data Engineering Light)"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify the Spark Version we have used in creating our cluster in the databricks environment.",(0,o.kt)("br",null),"These drop downs are populated once valid API keys and URLs are provided."),(0,o.kt)("td",{parentName:"tr",align:null},"None")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Enable Cluster Pool"),(0,o.kt)("td",{parentName:"tr",align:null},"Used to specify To attach a cluster to a pool."),(0,o.kt)("td",{parentName:"tr",align:null},"False")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Instance Pool Id"),(0,o.kt)("td",{parentName:"tr",align:null},"select the pool from the drop-down when you configure the cluster. Available pools are listed at the top of each drop-down list. You can use the same pool or different pools for the driver node and worker nodes."),(0,o.kt)("td",{parentName:"tr",align:null},"None")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Driver Node Type (Only in Data Engineering and Data Engineering Light)"),(0,o.kt)("td",{parentName:"tr",align:null},"It is used to specify the type of driver we would like to use as our Driver Node."),(0,o.kt)("td",{parentName:"tr",align:null},"None")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Worker Node Type (Only in Data Engineering and Data Engineering Light)"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify the workers we would like to use in our databricks environment"),(0,o.kt)("td",{parentName:"tr",align:null},"None")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Enable AutoScaling"),(0,o.kt)("td",{parentName:"tr",align:null},"A cluster that automatically scales between the minimum and maximum number of nodes, based on load."),(0,o.kt)("td",{parentName:"tr",align:null},"False")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Customize Spark Config"),(0,o.kt)("td",{parentName:"tr",align:null},"Used to specify additional spark config options ",(0,o.kt)("br",null),"Ex: conf : spark.sql.broadcastTimeout ",(0,o.kt)("br",null),"value : 5000"),(0,o.kt)("td",{parentName:"tr",align:null},"None")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Customize Environment Variables"),(0,o.kt)("td",{parentName:"tr",align:null},"Used to specify environment variables to use in spark computes",(0,o.kt)("br",null),"Ex: Variable : GuzzleHome",(0,o.kt)("br",null),"Value    : /mnt/guzzle/guzzle"),(0,o.kt)("td",{parentName:"tr",align:null},"None")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Init Script"),(0,o.kt)("td",{parentName:"tr",align:null},"Cluster-scoped init scripts are init scripts defined in a cluster configuration.",(0,o.kt)("br",null),"You can put init scripts in a DBFS or ADLS directory accessible by a cluster. And give the location to that script in guzzle spark computes"),(0,o.kt)("td",{parentName:"tr",align:null},"None")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Custom Cluster Tags"),(0,o.kt)("td",{parentName:"tr",align:null},"You apply tags to your Cluster. Each tag consists of a name and a value pair"),(0,o.kt)("td",{parentName:"tr",align:null},"None")))),(0,o.kt)("p",null,"For sensitive spark configuration, one should use Databricks secrets instead of using plain values as they will be visible in the configure. This could be a storage account access key."),(0,o.kt)("h2",{id:"setup-databricks-workspace"},"Setup Databricks Workspace"),(0,o.kt)("p",null,"Once you enter all necessary fields, the user has to set up the workspace on databricks through click on setup workspace from the tab bar."),(0,o.kt)("p",null,"On click of setup workspace guzzle will create a notebook known as setup-guzzle.scala in the Databricks workspace."),(0,o.kt)("p",null,"In the notebook guzzle programmatically mount shared storage in the databricks environment."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"}," Interface for Azure Databricks compute for custer type : Data Engineering and Data Engineering Light. ")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"imaeg alt text",src:a(6133).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"}," Interface for Azure Databricks compute for custer type : Data Analytics. ")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"imaeg alt text",src:a(2586).Z})),(0,o.kt)("h2",{id:"how-to-setup-external-metastore"},"how to setup external metastore"),(0,o.kt)("p",null,"One can use init script or spark configs. More details of can be found here"),(0,o.kt)("p",null,"A typical set of spark configuration when using Azure SQL server are external metastore are:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"spark.hadoop.javax.jdo.option.ConnectionDriverName \n\ncom.microsoft.sqlserver.jdbc.SQLServerDriver\n\nspark.hadoop.javax.jdo.option.ConnectionURL jdbc:sqlserver://<Azure sql server>.database.windows.net:1433;database=<DB NAME>;encrypt=true;trustServerCertificate=false;hostNameInCertificate=*.database.windows.net;loginTimeout=30;\n\nspark.databricks.delta.preview.enabled true\n\nspark.hadoop.javax.jdo.option.ConnectionUserName <USERNAME>;\n\ndatanucleus.fixedDatastore false\n\nspark.hadoop.javax.jdo.option.ConnectionPassword {{secrets/<scope name>/<scret name for password>}}\n\nspark.sql.sources.partitionOverwriteMode DYNAMIC datanucleus.autoCreateSchema true\n\nspark.sql.hive.metastore.jars &lt;LOCATION WHERE JARS ARE AVAILABLE. built is not supported. /databricks/hive-v1_2/*?\n\nspark.sql.hive.metastore.version 1.2.1\n")))}p.isMDXComponent=!0},2586:function(e,t,a){"use strict";t.Z=a.p+"assets/images/azure_databricks_2-a69a24aec7bc27bc12c738c936656cc6.jpg"},6133:function(e,t,a){"use strict";t.Z=a.p+"assets/images/azuredatabricks_1-1351db561363266906c8605d0dc08bff.jpg"}}]);
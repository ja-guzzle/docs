(self.webpackChunkguzzle=self.webpackChunkguzzle||[]).push([[1479],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return u},kt:function(){return p}});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=r.createContext({}),d=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},u=function(t){var e=d(t.components);return r.createElement(s.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),c=d(a),p=n,m=c["".concat(s,".").concat(p)]||c[p]||g[p]||i;return a?r.createElement(m,l(l({ref:e},u),{},{components:a})):r.createElement(m,l({ref:e},u))}));function p(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:n,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8108:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d},default:function(){return g}});var r=a(2122),n=a(9756),i=(a(7294),a(3905)),l=["components"],o={id:"working_with_big_data",title:"Working with Big Data"},s={unversionedId:"how_to_guides/ingest_data/working_with_big_data",id:"how_to_guides/ingest_data/working_with_big_data",isDocsHomePage:!1,title:"Working with Big Data",description:"This article outlines how to work with Big Data file formats namely: Parquet, Avro and ORC in Guzzle\u2019s Ingestion activity. Guzzle supports these file formats for source and target in Ingestion activity.",source:"@site/docs/how_to_guides/ingest_data/Working with Big Data.md",sourceDirName:"how_to_guides/ingest_data",slug:"/how_to_guides/ingest_data/working_with_big_data",permalink:"/docs/how_to_guides/ingest_data/working_with_big_data",editUrl:"https://github.com/ja-guzzle/docs/blob/master/docs/how_to_guides/ingest_data/Working with Big Data.md",version:"current",frontMatter:{id:"working_with_big_data",title:"Working with Big Data"},sidebar:"sideBar",previous:{title:"Working with Fixed Length Files",permalink:"/docs/how_to_guides/ingest_data/working_with_fixed_length_files"},next:{title:"Working with Multiple Files",permalink:"/docs/how_to_guides/ingest_data/working_with_multiple_files"}},d=[{value:"Big Data File Formats as a Source",id:"big-data-file-formats-as-a-source",children:[]},{value:"Interface for Big Data format",id:"interface-for-big-data-format",children:[]},{value:"Big Data File Format as Target and Target section",id:"big-data-file-format-as-target-and-target-section",children:[]},{value:"The Interface for the Big Data Formats is",id:"the-interface-for-the-big-data-formats-is",children:[]}],u={toc:d};function g(t){var e=t.components,o=(0,n.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This article outlines how to work with Big Data file formats namely: Parquet, Avro and ORC in Guzzle\u2019s Ingestion activity. Guzzle supports these file formats for source and target in Ingestion activity."),(0,i.kt)("h2",{id:"big-data-file-formats-as-a-source"},"Big Data File Formats as a Source"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Character Set"),(0,i.kt)("td",{parentName:"tr",align:null},"It refers to the Set of Characters used to Read/Write test files. Allowed Values include: UTF-8, UTF-16 etc."),(0,i.kt)("td",{parentName:"tr",align:null},"UTF-8"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"File Pattern"),(0,i.kt)("td",{parentName:"tr",align:null},"This is the file name pattern to find matching files in the data store. Refer to Working with Multiple Files for more details on defining the patter Example: customer/data/*.orc"),(0,i.kt)("td",{parentName:"tr",align:null},"None"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Configure processed path"),(0,i.kt)("td",{parentName:"tr",align:null},"The Configure Processed Paths feature allows the user to specify the directory and Guzzle moves the Data into that directory. When creating a processed file path Guzzle creates 3 subfolders: processed, rejected and partial.",(0,i.kt)("br",null)," For more information click ",(0,i.kt)("a",{parentName:"td",href:"https://guzzle.justanalytics.com/docs/how_to_guides/ingest_data/moving_processed_files"},"here"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"NULL"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Configure control file settings"),(0,i.kt)("td",{parentName:"tr",align:null},"The Configure Control File feature cross check whether a file is valid or not. It compares the number of records in the original file and the control file extension. Guzzle provides the Configure Control File feature for all local file formats including Delimited, JSON, XML, Excel and Fixed Length Files.",(0,i.kt)("br",null)," For more information click ",(0,i.kt)("a",{parentName:"td",href:"https://guzzle.justanalytics.com/docs/how_to_guides/ingest_data/configure_control_file"},"here"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"NULL"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Partial Load"),(0,i.kt)("td",{parentName:"tr",align:null},"Specify partial loading of files."),(0,i.kt)("td",{parentName:"tr",align:null},"False"),(0,i.kt)("td",{parentName:"tr",align:null},"No")))),(0,i.kt)("h2",{id:"interface-for-big-data-format"},"Interface for Big Data format"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image alt text",src:a(453).Z})),(0,i.kt)("h2",{id:"big-data-file-format-as-target-and-target-section"},"Big Data File Format as Target and Target section"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Character Set"),(0,i.kt)("td",{parentName:"tr",align:null},"It refers to the Set of Characters used to Read/Write test files. Allowed Values include: UTF-8, UTF-16 etc."),(0,i.kt)("td",{parentName:"tr",align:null},"UTF-8"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Path"),(0,i.kt)("td",{parentName:"tr",align:null},"File path where user want to store data"),(0,i.kt)("td",{parentName:"tr",align:null},"None"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Compression"),(0,i.kt)("td",{parentName:"tr",align:null},"This is used to specify the compression codec used by the file when writing to Parquet, Orc and Avro Files respectively. When reading from Big Data files, Guzzle determines the compression code based on the file metadata. Supported types include Snappy, Brotli, Lzo etc."),(0,i.kt)("td",{parentName:"tr",align:null},"Snappy"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Generate Single File"),(0,i.kt)("td",{parentName:"tr",align:null},"For generating single file on given path."),(0,i.kt)("td",{parentName:"tr",align:null},"False"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Preserve Hierarchy"),(0,i.kt)("td",{parentName:"tr",align:null},"this option is selected when user have to maintain same hierarchy as source file has."),(0,i.kt)("td",{parentName:"tr",align:null},"False"),(0,i.kt)("td",{parentName:"tr",align:null},"No")))),(0,i.kt)("h2",{id:"the-interface-for-the-big-data-formats-is"},"The Interface for the Big Data Formats is"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image alt text",src:a(310).Z})),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'As this files has binary type data we can see data in table form by clicking on "Sample Data" which is present on right side on the corner of UI.'))))}g.isMDXComponent=!0},453:function(t,e,a){"use strict";e.Z=a.p+"assets/images/big_data_1-23dabf420838417fa63c49d8e6bb2329.jpg"},310:function(t,e,a){"use strict";e.Z=a.p+"assets/images/bigdatafileformat-d1f598a7bcef062e19ff0c6fda97f80e.png"}}]);
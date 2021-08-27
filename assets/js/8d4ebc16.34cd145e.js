(self.webpackChunkguzzle=self.webpackChunkguzzle||[]).push([[4417],{3905:function(e,t,i){"use strict";i.d(t,{Zo:function(){return u},kt:function(){return c}});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(i),c=a,h=p["".concat(s,".").concat(c)]||p[c]||m[c]||r;return i?n.createElement(h,l(l({ref:t},u),{},{components:i})):n.createElement(h,l({ref:t},u))}));function c(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,l=new Array(r);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<r;d++)l[d]=i[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},4058:function(e,t,i){"use strict";i.r(t),i.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d},default:function(){return m}});var n=i(2122),a=i(9756),r=(i(7294),i(3905)),l=["components"],o={id:"working_with_delimited_files",title:"Working with Delimited Files"},s={unversionedId:"how_to_guides/ingest_data/working_with_delimited_files",id:"how_to_guides/ingest_data/working_with_delimited_files",isDocsHomePage:!1,title:"Working with Delimited Files",description:"A Delimited Text File is a method of representing a Table of Data in a text file using characters to indicate a Structure of Columns and Rows. Common types of Delimited Text Files include Comma Separated Values (CSV) and Tab Separated Values (TSV).",source:"@site/docs/how_to_guides/ingest_data/Working with Delimited Files.md",sourceDirName:"how_to_guides/ingest_data",slug:"/how_to_guides/ingest_data/working_with_delimited_files",permalink:"/docs/how_to_guides/ingest_data/working_with_delimited_files",editUrl:"https://github.com/ja-guzzle/docs/blob/master/docs/how_to_guides/ingest_data/Working with Delimited Files.md",version:"current",frontMatter:{id:"working_with_delimited_files",title:"Working with Delimited Files"},sidebar:"sideBar",previous:{title:"Parameters",permalink:"/docs/how_to_guides/parameters/Parameters"},next:{title:"Working with JSON Files",permalink:"/docs/how_to_guides/ingest_data/working_with_json_files"}},d=[{value:"Delimited Text File Properties in Guzzle",id:"delimited-text-file-properties-in-guzzle",children:[]},{value:"The Interface for the Delimited File Format is",id:"the-interface-for-the-delimited-file-format-is",children:[]},{value:"Column Mapping in Delimited Files",id:"column-mapping-in-delimited-files",children:[]},{value:"Before Column Mapping:",id:"before-column-mapping",children:[]},{value:"After Column Mapping:",id:"after-column-mapping",children:[]}],u={toc:d};function m(e){var t=e.components,o=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A Delimited Text File is a method of representing a Table of Data in a text file using characters to indicate a Structure of Columns and Rows. Common types of Delimited Text Files include Comma Separated Values (CSV) and Tab Separated Values (TSV)."),(0,r.kt)("p",null,"Delimited file support in Guzzle provides extensive features to specify file format details and many other properties which make it easier to work with our Data. This article outlines how to work with Delimited files for source and target in Ingestion activity.  "),(0,r.kt)("h2",{id:"delimited-text-file-properties-in-guzzle"},"Delimited Text File Properties in Guzzle"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Character Set"),(0,r.kt)("td",{parentName:"tr",align:null},"It refers to the Set of Characters used to Read/Write test files. Allowed Values include: UTF-8, UTF-16 etc."),(0,r.kt)("td",{parentName:"tr",align:null},"UTF-8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Column Delimiter"),(0,r.kt)("td",{parentName:"tr",align:null},"The Characters used to separate columns in a file."),(0,r.kt)("td",{parentName:"tr",align:null},",")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Quote Delimiter"),(0,r.kt)("td",{parentName:"tr",align:null},"The single character to quote column values if it contains column delimiter or new line (or row delimiter)"),(0,r.kt)("td",{parentName:"tr",align:null},'"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Escape Character"),(0,r.kt)("td",{parentName:"tr",align:null},'The single character to escape quotes inside a quoted value. Essentially if the \u201cQuote Delimiter" is also part of column value the same can be escaped using this'),(0,r.kt)("td",{parentName:"tr",align:null},"\\")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Trim Whitespace"),(0,r.kt)("td",{parentName:"tr",align:null},"You may choose to Trim Whitespaces on any one end or both ends of the Characters. This will be applied to all the columns irrespective of their values or data type.",(0,r.kt)("br",null)," It includes four options like",(0,r.kt)("br",null)," 1. none -> no trimming whitespace.",(0,r.kt)("br",null),"2. both -> remove whitespace on both side.",(0,r.kt)("br",null),"3.leading -> remove whitespace on front of the data.",(0,r.kt)("br",null),"4. trailing -> remove whitespace at the end of data."),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Contains Headers"),(0,r.kt)("td",{parentName:"tr",align:null},"Choose whether to include headings for columns."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Infer Schema"),(0,r.kt)("td",{parentName:"tr",align:null},"Choose whether to apply a schema."),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("h2",{id:"the-interface-for-the-delimited-file-format-is"},"The Interface for the Delimited File Format is"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image alt text",src:i(1060).Z})),(0,r.kt)("h2",{id:"column-mapping-in-delimited-files"},"Column Mapping in Delimited Files"),(0,r.kt)("p",null,"We can also add Column Mapping to specify how to map columns in the source file. This is applicable for files which are having headers or without header. The functionality is meant to achieve either or both of the following item:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Reduce the number of columns to be read")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Map the columns to a new field name"))),(0,r.kt)("p",null,'All we need to do is add the Column Name and the Index we would like to Map the Column to.\nExample : In example "first_name" is indexed with 4th column which is "gender" and "age" is indexed with 1st column which is "id". '),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image alt text",src:i(7001).Z})),(0,r.kt)("h2",{id:"before-column-mapping"},"Before Column Mapping:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image alt text",src:i(438).Z})),(0,r.kt)("h2",{id:"after-column-mapping"},"After Column Mapping:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image alt text",src:i(2883).Z})),(0,r.kt)("p",null,"In target :\nProperties on target is same as mentioned for source, but two more properties are added which is "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Generate Single file : this option is selected when you want to generate single file in target path."),(0,r.kt)("li",{parentName:"ol"},"Preserve Hierarchy : this option is selected when you have to maintain same hierarchy as source file has.")))}m.isMDXComponent=!0},1060:function(e,t,i){"use strict";t.Z=i.p+"assets/images/delimited1-07c0be3ba6ae177f4415916e3ffe8495.png"},7001:function(e,t,i){"use strict";t.Z=i.p+"assets/images/delimited2-d24d87657de9ad5e103fa86113cd9083.png"},438:function(e,t,i){"use strict";t.Z=i.p+"assets/images/delimited3-8c5e9d9dae5be53bb8404a781b377c5a.png"},2883:function(e,t,i){"use strict";t.Z=i.p+"assets/images/delimited4-f53fd4041ac179d4fd694ade2bd39325.png"}}]);
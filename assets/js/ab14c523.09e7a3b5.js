(self.webpackChunkguzzle=self.webpackChunkguzzle||[]).push([[4909],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(g,l(l({ref:e},u),{},{components:n})):r.createElement(g,l({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7457:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),l=["components"],o={id:"api_settings",title:"Api Settings"},s={unversionedId:"how_to_guides/administration/environment_config/api_settings",id:"how_to_guides/administration/environment_config/api_settings",isDocsHomePage:!1,title:"Api Settings",description:"Using API settings service, Guzzle can pass the API URL of guzzle and, the keyvault and secret name of passphrase to the remote cluster.",source:"@site/docs/how_to_guides/administration/environment_config/Api Settings.md",sourceDirName:"how_to_guides/administration/environment_config",slug:"/how_to_guides/administration/environment_config/api_settings",permalink:"/docs/how_to_guides/administration/environment_config/api_settings",editUrl:"https://github.com/ja-guzzle/docs/blob/master/docs/how_to_guides/administration/environment_config/Api Settings.md",version:"current",frontMatter:{id:"api_settings",title:"Api Settings"},sidebar:"sideBar",previous:{title:"Azure Monitor",permalink:"/docs/how_to_guides/administration/environment_config/azure_monitor"},next:{title:"Author",permalink:"/docs/how_to_guides/author/author"}},p=[{value:"Setup API Settings",id:"setup-api-settings",children:[]},{value:"Properties to set up Api Settings",id:"properties-to-set-up-api-settings",children:[{value:"Interface of Api Settings page",id:"interface-of-api-settings-page",children:[]}]}],u={toc:p};function c(t){var e=t.components,n=(0,a.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Using API settings service, Guzzle can pass the API URL of guzzle and, the keyvault and secret name of passphrase to the remote cluster.\nUsing this passphrase, Guzzle is decrypting the encrypted temporary API token to access guzzle API's, and it is also used to decrypt the credentials of datastore."),(0,i.kt)("h2",{id:"setup-api-settings"},"Setup API Settings"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to the ",(0,i.kt)("strong",{parentName:"p"},"Manage")," menu from the top navigation bar")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Navigate to Environment Config -> Api Settings")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enter following configuration details:"))),(0,i.kt)("h2",{id:"properties-to-set-up-api-settings"},"Properties to set up Api Settings"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"URL"),(0,i.kt)("td",{parentName:"tr",align:null},"Specify the API URL of Guzzle"),(0,i.kt)("td",{parentName:"tr",align:null},"NULL"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Key vault name"),(0,i.kt)("td",{parentName:"tr",align:null},"Specify the key vault name in which passphrase value is stored"),(0,i.kt)("td",{parentName:"tr",align:null},"NULL"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Secret name"),(0,i.kt)("td",{parentName:"tr",align:null},"Specify the secret name in which passphrase value is stored"),(0,i.kt)("td",{parentName:"tr",align:null},"NULL"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Username for scheduled job"),(0,i.kt)("td",{parentName:"tr",align:null},"Select username for scheduled job"),(0,i.kt)("td",{parentName:"tr",align:null},"Active username"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Api key expiry time(Milliseconds)"),(0,i.kt)("td",{parentName:"tr",align:null},"Specify internal api key expiration time"),(0,i.kt)("td",{parentName:"tr",align:null},"43200000"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Update"),(0,i.kt)("td",{parentName:"tr",align:null},"This button will update Api settings configs into guzzle-api.yml file"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Sync passphrase"),(0,i.kt)("td",{parentName:"tr",align:null},"On clicking this button, passphrase from Guzzle VM will be synced to provided keyvault and secret name"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Cancel"),(0,i.kt)("td",{parentName:"tr",align:null},"To cancel the updated values in property"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("p",null,"On clicking save button all this properties will be saved on guzzle-api.yml file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'api:\n  url: "https://XXXXX.com"\n  kv_passphrase:\n    keyvault_name: "XXXXX"\n    secret: "XXXX"\n  schedule_user_id: 1\n  api_key_expiry_time: 43200000\n')),(0,i.kt)("h3",{id:"interface-of-api-settings-page"},"Interface of Api Settings page"),(0,i.kt)("a",{href:"https://guzzle.justanalytics.com/img/docs/how-to-guides/administrator/environment-config/api_settings_0.png",target:"_self"},(0,i.kt)("img",{src:"/img/docs/how-to-guides/administrator/environment-config/api_settings_0.png"})))}c.isMDXComponent=!0}}]);
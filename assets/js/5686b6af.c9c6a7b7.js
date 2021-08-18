(self.webpackChunkguzzle=self.webpackChunkguzzle||[]).push([[4283],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return f}});var i=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(a),f=r,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||n;return a?i.createElement(m,s(s({ref:t},u),{},{components:a})):i.createElement(m,s({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,s=new Array(n);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<n;c++)s[c]=a[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3092:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var i=a(2122),r=a(9756),n=(a(7294),a(3905)),s=["components"],o={},l={unversionedId:"introduction/Deploying Guzzle on Microsoft Azure",id:"introduction/Deploying Guzzle on Microsoft Azure",isDocsHomePage:!1,title:"Deploying Guzzle on Microsoft Azure",description:"Guzzle software gets deployed on a virtual machine using the pre-built image on the Microsoft Azure cloud. You can deploy Guzzle on an existing VNet or a new Virtual network. You can apply standard",source:"@site/docs/introduction/Deploying Guzzle on Microsoft Azure.md",sourceDirName:"introduction",slug:"/introduction/Deploying Guzzle on Microsoft Azure",permalink:"/docs/introduction/Deploying Guzzle on Microsoft Azure",editUrl:"https://github.com/ja-guzzle/docs/blob/master/docs/introduction/Deploying Guzzle on Microsoft Azure.md",version:"current",frontMatter:{},sidebar:"sideBar",previous:{title:"What is Guzzle",permalink:"/docs/introduction/What is Guzzle"},next:{title:"Repository database",permalink:"/docs/How to guides/Administration/Environment config/Repository database"}},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Deployment of Guzzle Virtual Machine",id:"deployment-of-guzzle-virtual-machine",children:[]},{value:"How do I use Guzzle?",id:"how-do-i-use-guzzle",children:[]},{value:"How do I log into the virtual machine instance?",id:"how-do-i-log-into-the-virtual-machine-instance",children:[]},{value:"What is installed by default?",id:"what-is-installed-by-default",children:[]},{value:"How do I install JDBC drivers and other third party libraries?",id:"how-do-i-install-jdbc-drivers-and-other-third-party-libraries",children:[]}],u={toc:c};function d(e){var t=e.components,o=(0,r.Z)(e,s);return(0,n.kt)("wrapper",(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Guzzle software gets deployed on a virtual machine using the pre-built image on the Microsoft Azure cloud. You can deploy Guzzle on an existing VNet or a new Virtual network. You can apply standard "),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"You need an Azure account to proceed. You will be billed only for the virtual machine instance. The Guzzle image itself is free. "),(0,n.kt)("h2",{id:"deployment-of-guzzle-virtual-machine"},"Deployment of Guzzle Virtual Machine"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create Guzzle virtual machine using the Azure Marketplace offer")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open the Guzzle page on Azure marketplace ",(0,n.kt)("a",{parentName:"li",href:"https://portal.azure.com/#blade/Microsoft_Azure_Marketplace/GalleryItemDetailsBladeNopdl/product/%7B%22displayName%22%3A%22Guzzle%3A%20Data%20Integration%20workbench%20for%20Databricks%22%2C%22itemDisplayName%22%3A%22Guzzle%3A%20Data%20Integration%20workbench%20for%20Databricks%22%2C%22id%22%3A%22justanalytics.guzzle-databricks%22%2C%22bigId%22%3A%22DZH318Z0D0GW%22%2C%22offerId%22%3A%22guzzle-databricks%22%2C%22publisherId%22%3A%22justanalytics%22%2C%22publisherDisplayName%22%3A%22JUST%20ANALYTICS%20PTE%20LTD%22%2C%22summary%22%3A%22Easily%20develop%20robust%20data%20pipelines%20for%20your%20analytics%20use%20cases%20and%20run%20them%20on%20Databricks%22%2C%22longSummary%22%3A%22Just%20Analytics%20Guzzle%2C%20is%20a%20cloud-based%20data%20integration%20workbench%20that%20automates%20the%20movement%20and%20transformation%20of%20data.%20It%20allows%20to%20quickly%20create%2C%20deploy%2C%20and%20monitor%20data%20ingestion%2C%20processing%2C%20reconciliation%2C%20data%20quality%20and%20house-keeping%20jobs%22%2C%22description%22%3A%22Just%20Analytics%20Guzzle%20Data%20Integration%20workbench%20is%20a%20cloud-based%20data%20integration%20solution%20that%20automates%20the%20movement%20and%20transformation%20of%20data.%20It%20allows%20to%20quickly%20create%2C%20deploy%2C%20and%20monitor%20data%20ingestion%2C%20processing%2C%20reconciliation%2C%20data%20quality%20and%20house-keeping%20job.%20Guzzle%20supports%20sourcing%20and%20transforming%20data%20of%20various%20formats%20from%20wide%20array%20of%20sources%20including%3A%20cloud%20storage%20services%2C%20REST%20API%2C%20and%20JDBC%2C%20and%20write%20the%20results%20in%20to%20multiple%20types%20of%20targets.%20The%20transformed%20data%20can%20then%20be%20consume%20by%20BI%20and%20analytics%20tools%2C%20and%20other%20applications%20to%20drive%20business%20insights.%5Cn%20%5CnKey%20features%20of%20Guzzle%3A%5Cn-%20Securely%20deployed%20on%20Virtual%20Machine%20within%20the%20your%20VNET%5Cn-%20Native%20to%20Databricks%20Spark%2C%20Delta%20Lake%20and%20Azure%20services%5Cn-%20Simple%20to%20deploy%20and%20use%5Cn-%20Abstract%20commonly%20used%20data%20integration%20patterns%20to%20%20accelerate%5Cn-%20Handle%20Diverse%20workloads%20%3A%20Batch%2C%20Micro-Batch%2C%20Streaming%20and%20API%5Cn-%20Supports%20wide%20array%20of%20sources%20and%20target%20data%20stores%5Cn-%20Enterprise%20grade%20Auditability%2C%20Governance%2C%20Traceability%20and%20Provenance%5Cn-%20Integration%20with%20Github%20and%20support%20for%20GIT%20workflows%20to%20version%20the%20job%20metadata%5Cn-%20Provides%20comprehensive%20metadata%20lineage%20capabilities%20using%20Apache%20Atlas%5Cn-%20Run%20data%20pipelines%20with%20fine-tuned%20control%20and%20automated%20cluster%20management%20for%20Databricks%5Cn-%20Supports%20on-premises%20connection%20via%20secured%20SSH%20tunnel%22%2C%22isPrivate%22%3Afalse%2C%22isMacc%22%3Atrue%2C%22isPreview%22%3Afalse%2C%22isByol%22%3Afalse%2C%22isCSPEnabled%22%3Atrue%2C%22isCSPSelective%22%3Afalse%2C%22isThirdParty%22%3Atrue%2C%22isReseller%22%3Afalse%2C%22hasFreeTrials%22%3Afalse%2C%22marketingMaterial%22%3A%5B%5D%2C%22legalTermsUri%22%3A%22https%3A%2F%2Fquery.prod.cms.rt.microsoft.com%2Fcms%2Fapi%2Fam%2Fbinary%2FRE4NQXV%22%2C%22privacyPolicyUri%22%3A%22https%3A%2F%2Fwww.justanalytics.com%2Fguzzle%2Feula%22%2C%22version%22%3A%221cc3ffcf-c408-4909-bef5-40a2d4244e94%22%2C%22metadata%22%3A%7B%22leadGeneration%22%3A%7B%22productId%22%3Anull%7D%2C%22testDrive%22%3Anull%7D%2C%22categoryIds%22%3A%5B%22analytics%22%2C%22bigData%22%2C%22azureCertified%22%2C%22fromPublishingPortal%22%2C%22multiResourceSolution%22%2C%22readonlytemplate%22%2C%22virtualMachine%22%2C%22virtualMachine-Arm%22%5D%2C%22screenshotUris%22%3A%5B%22https%3A%2F%2Fstore-images.s-microsoft.com%2Fimage%2Fapps.21911.cea57d01-b371-4bee-bd76-32dcad268c54.921b0d6f-1cda-45a1-98a3-7b1c1ec59837.f0f70fe7-0df8-4f81-9359-8b8cbd5f60de%22%2C%22https%3A%2F%2Fstore-images.s-microsoft.com%2Fimage%2Fapps.61122.cea57d01-b371-4bee-bd76-32dcad268c54.921b0d6f-1cda-45a1-98a3-7b1c1ec59837.ca6ec3da-e601-48b5-98f1-7c2737495fea%22%2C%22https%3A%2F%2Fstore-images.s-microsoft.com%2Fimage%2Fapps.56806.cea57d01-b371-4bee-bd76-32dcad268c54.921b0d6f-1cda-45a1-98a3-7b1c1ec59837.d8826849-5e54-4344-a637-1cfd6caa33cc%22%5D%2C%22videos%22%3A%5B%5D%2C%22links%22%3A%5B%5D%2C%22filters%22%3A%5B%5D%2C%22plans%22%3A%5B%7B%22id%22%3A%220001%22%2C%22displayName%22%3A%22Just%20Analytics%20Guzzle%20-%20Trial%20Edition%22%2C%22summary%22%3A%22Provides%20core%20data%20integration%20functionalities%20of%20Guzzle.%20Free%20Trial%20for%2090%20days%22%2C%22description%22%3A%22Trial%20Edition%20provides%20all%20the%20Guzzle%20core%20data%20integration%20modules%20namely%3A%5CnIngestion%2C%20Processing%2C%20Reconciliation%2C%20Data%20Quality%20(%20Constraint%20Check)%2C%20%20Housekeeping%2C%20detail%20run%20time%20audit%20and%20provenance%2C%20advance%20job%20orchestration%20and%20extensive%20lineage%20support%2C%20and%20GIT%20integration%22%2C%22restrictedAudience%22%3A%7B%7D%2C%22skuId%22%3A%220001%22%2C%22planId%22%3A%22trial%22%2C%22legacyPlanId%22%3A%22justanalytics.guzzle-databrickstrial%22%2C%22keywords%22%3A%5B%5D%2C%22type%22%3A%22SolutionTemplate%22%2C%22leadGeneration%22%3A%7B%22productId%22%3A%22justanalytics.guzzle-databrickstrial%22%7D%2C%22testDrive%22%3Anull%2C%22categoryIds%22%3A%5B%5D%2C%22conversionPaths%22%3A%5B%5D%2C%22metadata%22%3A%7B%7D%2C%22uiDefinitionUri%22%3A%22https%3A%2F%2Fcatalogartifact.azureedge.net%2Fpublicartifacts%2Fjustanalytics.guzzle-databricks-e44a7c25-aab3-4ded-98a0-fbc7a8e1c465-trial%2FUiDefinition.json%22%2C%22artifacts%22%3A%5B%7B%22name%22%3A%22DefaultTemplate%22%2C%22uri%22%3A%22https%3A%2F%2Fcatalogartifact.azureedge.net%2Fpublicartifacts%2Fjustanalytics.guzzle-databricks-e44a7c25-aab3-4ded-98a0-fbc7a8e1c465-trial%2FArtifacts%2FmainTemplate.json%22%2C%22type%22%3A%22Template%22%7D%2C%7B%22name%22%3A%22createuidefinition%22%2C%22uri%22%3A%22https%3A%2F%2Fcatalogartifact.azureedge.net%2Fpublicartifacts%2Fjustanalytics.guzzle-databricks-e44a7c25-aab3-4ded-98a0-fbc7a8e1c465-trial%2FArtifacts%2FcreateUiDefinition.json%22%2C%22type%22%3A%22Custom%22%7D%2C%7B%22name%22%3A%22UiDefinition.json%22%2C%22uri%22%3A%22https%3A%2F%2Fcatalogartifact.azureedge.net%2Fpublicartifacts%2Fjustanalytics.guzzle-databricks-e44a7c25-aab3-4ded-98a0-fbc7a8e1c465-trial%2FUiDefinition.json%22%2C%22type%22%3A%22Custom%22%7D%2C%7B%22name%22%3A%22scripts_configure-guzzle.py%22%2C%22uri%22%3A%22https%3A%2F%2Fcatalogartifact.azureedge.net%2Fpublicartifacts%2Fjustanalytics.guzzle-databricks-e44a7c25-aab3-4ded-98a0-fbc7a8e1c465-trial%2FArtifacts%2Fscripts%2Fconfigure-guzzle.py%22%2C%22type%22%3A%22Custom%22%7D%2C%7B%22name%22%3A%22scripts_mount-blob-storage.sh%22%2C%22uri%22%3A%22https%3A%2F%2Fcatalogartifact.azureedge.net%2Fpublicartifacts%2Fjustanalytics.guzzle-databricks-e44a7c25-aab3-4ded-98a0-fbc7a8e1c465-trial%2FArtifacts%2Fscripts%2Fmount-blob-storage.sh%22%2C%22type%22%3A%22Custom%22%7D%2C%7B%22name%22%3A%22scripts_start-guzzle.sh%22%2C%22uri%22%3A%22https%3A%2F%2Fcatalogartifact.azureedge.net%2Fpublicartifacts%2Fjustanalytics.guzzle-databricks-e44a7c25-aab3-4ded-98a0-fbc7a8e1c465-trial%2FArtifacts%2Fscripts%2Fstart-guzzle.sh%22%2C%22type%22%3A%22Custom%22%7D%2C%7B%22name%22%3A%22scripts_mount-blob-storage-in-vm.py%22%2C%22uri%22%3A%22https%3A%2F%2Fcatalogartifact.azureedge.net%2Fpublicartifacts%2Fjustanalytics.guzzle-databricks-e44a7c25-aab3-4ded-98a0-fbc7a8e1c465-trial%2FArtifacts%2Fscripts%2Fmount-blob-storage-in-vm.py%22%2C%22type%22%3A%22Custom%22%7D%2C%7B%22name%22%3A%22scripts_generate-ssl-certs.sh%22%2C%22uri%22%3A%22https%3A%2F%2Fcatalogartifact.azureedge.net%2Fpublicartifacts%2Fjustanalytics.guzzle-databricks-e44a7c25-aab3-4ded-98a0-fbc7a8e1c465-trial%2FArtifacts%2Fscripts%2Fgenerate-ssl-certs.sh%22%2C%22type%22%3A%22Custom%22%7D%2C%7B%22name%22%3A%22scripts_install-guzzle.sh%22%2C%22uri%22%3A%22https%3A%2F%2Fcatalogartifact.azureedge.net%2Fpublicartifacts%2Fjustanalytics.guzzle-databricks-e44a7c25-aab3-4ded-98a0-fbc7a8e1c465-trial%2FArtifacts%2Fscripts%2Finstall-guzzle.sh%22%2C%22type%22%3A%22Custom%22%7D%2C%7B%22name%22%3A%22scripts_setup-env.py%22%2C%22uri%22%3A%22https%3A%2F%2Fcatalogartifact.azureedge.net%2Fpublicartifacts%2Fjustanalytics.guzzle-databricks-e44a7c25-aab3-4ded-98a0-fbc7a8e1c465-trial%2FArtifacts%2Fscripts%2Fsetup-env.py%22%2C%22type%22%3A%22Custom%22%7D%2C%7B%22name%22%3A%22scripts_configure-guzzle.sh%22%2C%22uri%22%3A%22https%3A%2F%2Fcatalogartifact.azureedge.net%2Fpublicartifacts%2Fjustanalytics.guzzle-databricks-e44a7c25-aab3-4ded-98a0-fbc7a8e1c465-trial%2FArtifacts%2Fscripts%2Fconfigure-guzzle.sh%22%2C%22type%22%3A%22Custom%22%7D%5D%2C%22isPrivate%22%3Afalse%2C%22isHidden%22%3Afalse%2C%22hasFreeTrials%22%3Afalse%2C%22isByol%22%3Afalse%2C%22isFree%22%3Afalse%2C%22isPayg%22%3Atrue%2C%22isStopSell%22%3Afalse%2C%22cspState%22%3A%22OptIn%22%2C%22isQuantifiable%22%3Afalse%2C%22vmSecuritytype%22%3A%22None%22%2C%22stackType%22%3A%22ARM%22%7D%5D%2C%22selectedPlanId%22%3A%22trial%22%2C%22iconFileUris%22%3A%7B%22small%22%3A%22https%3A%2F%2Fstore-images.s-microsoft.com%2Fimage%2Fapps.59799.cea57d01-b371-4bee-bd76-32dcad268c54.ef982932-c71f-43a1-b0f1-69cf86b8ab88.f3bf2090-b23f-4c58-95d2-0f833e3cba00%22%2C%22medium%22%3A%22https%3A%2F%2Fstore-images.s-microsoft.com%2Fimage%2Fapps.52459.cea57d01-b371-4bee-bd76-32dcad268c54.ef982932-c71f-43a1-b0f1-69cf86b8ab88.42fc9e5e-0c5e-4358-97f0-9f85235757ff%22%2C%22wide%22%3A%22https%3A%2F%2Fstore-images.s-microsoft.com%2Fimage%2Fapps.47643.cea57d01-b371-4bee-bd76-32dcad268c54.ef982932-c71f-43a1-b0f1-69cf86b8ab88.a6a44391-e1d8-4a0b-b89e-4bd3afa59521%22%2C%22large%22%3A%22https%3A%2F%2Fstore-images.s-microsoft.com%2Fimage%2Fapps.17690.cea57d01-b371-4bee-bd76-32dcad268c54.ef982932-c71f-43a1-b0f1-69cf86b8ab88.2c0238de-8e37-4582-af59-7e6f28698be4%22%2C%22hero%22%3A%22https%3A%2F%2Fstore-images.s-microsoft.com%2Fimage%2Fapps.61326.cea57d01-b371-4bee-bd76-32dcad268c54.921b0d6f-1cda-45a1-98a3-7b1c1ec59837.e528954b-727f-4122-bd71-bbdd720a35d2%22%7D%2C%22itemType%22%3A%22Single%22%2C%22hasNoProducts%22%3Afalse%2C%22hasNoPlans%22%3Afalse%2C%22privateBadgeText%22%3Anull%2C%22createBladeType%22%3A1%2C%22offerType%22%3A%22AzureApplication%22%2C%22useEnterpriseContract%22%3Afalse%2C%22hasStandardContractAmendments%22%3Afalse%2C%22standardContractAmendmentsRevisionId%22%3A%2200000000-0000-0000-0000-000000000000%22%2C%22cspLegalTermsUri%22%3A%22https%3A%2F%2Fquery.prod.cms.rt.microsoft.com%2Fcms%2Fapi%2Fam%2Fbinary%2FRE4NQXV%22%2C%22supportUri%22%3A%22https%3A%2F%2Fwww.justanalytics.com%2Fsupport%22%2C%22isMicrosoftProduct%22%3Atrue%2C%22productOwnershipSellingMotion%22%3A%223PPAgency%22%2C%22galleryItemAccess%22%3A0%2C%22privateSubscriptions%22%3A%5B%5D%2C%22isTenantPrivate%22%3Afalse%7D/id/trial/resourceGroupId//resourceGroupLocation//dontDiscardJourney//_provisioningContext/%7B%22initialValues%22%3A%7B%22subscriptionIds%22%3A%5B%227c9ea9d0-89d3-4c9e-93ff-9930de022dab%22%5D%2C%22resourceGroupNames%22%3A%5B%5D%2C%22locationNames%22%3A%5B%22centralus%22%2C%22eastus%22%2C%22southeastasia%22%5D%7D%2C%22telemetryId%22%3A%2267455c2a-fd1a-46d2-892d-e1ca0c4f1245%22%2C%22marketplaceItem%22%3A%7B%22categoryIds%22%3A%5B%5D%2C%22id%22%3A%22Microsoft.Portal%22%2C%22itemDisplayName%22%3A%22NoMarketplace%22%2C%22products%22%3A%5B%5D%2C%22version%22%3A%22%22%2C%22productsWithNoPricing%22%3A%5B%5D%2C%22publisherDisplayName%22%3A%22Microsoft.Portal%22%2C%22deploymentName%22%3A%22NoMarketplace%22%2C%22launchingContext%22%3A%7B%22source%22%3A%5B%5D%2C%22galleryItemId%22%3A%22%22%7D%2C%22deploymentTemplateFileUris%22%3A%7B%7D%2C%22uiMetadata%22%3Anull%7D%7D"},"here"),". Alternatively you can login to Azure Portal, go to Marketplace  and search ",(0,n.kt)("strong",{parentName:"li"},"Guzzle: Data Integration workbench for Databricks"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image alt text",src:a(3102).Z})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'Click on "Create" which will take you to Azure Portal, Create virtual machine blade')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'Enter a name for your Virtual machine and select your user name and password (do not use "guzzle" as user name)')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Enter a new Resource group name or use existing one")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can retain default values for remaining VM Settings or override them suitably as per your requirement.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A D2 image (2 vCPUs, 7 GB RAM) should be enough for the initial deployment"))),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Connect to Guzzle")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Wait a few minutes for the instance to start")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Launch browser with the URL  https://INSTANCE_PUBLIC_ADDRESS OR DNS name where INSTANCE_PUBLIC_ADDRESS is the instance public IP address (available in the details of your virtual machine)"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note "),"that only Chrome browser is supported."),(0,n.kt)("h1",{id:"how-to"},"How to"),(0,n.kt)("h2",{id:"how-do-i-use-guzzle"},"How do I use Guzzle?"),(0,n.kt)("p",null,"Guzzle is available on HTTPS, on the port 443 on  the Azure VM instance. Guzzle is preloaded with a self-signed certificate, so you will get a security error. You can replace the VM to use a real certificate."),(0,n.kt)("h2",{id:"how-do-i-log-into-the-virtual-machine-instance"},"How do I log into the virtual machine instance?"),(0,n.kt)("p",null,"Administrative (command-line) access can be obtained by logging-in through SSH using the credentials specified when creating the virutal machine."),(0,n.kt)("p",null,"Note: Guzzle does not run under this VM adminstirator account, but under the guzzle account. The administrative account is sudoer, so from its shell, you can use ",(0,n.kt)("inlineCode",{parentName:"p"},"sudo su - guzzle")," to get a shell as the guzzle user."),(0,n.kt)("p",null,"You cannot directly login as the ",(0,n.kt)("inlineCode",{parentName:"p"},"guzzle")," user. Also 'guzzle' user is not sudoer."),(0,n.kt)("p",null,"What are the Guzzle  directories?"),(0,n.kt)("p",null,"The Guzzle has two key directories that gets deployed on the Azure VM instance. This are referred in Guzzle software using the environment variables. "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"GUZZLE_PRODUCT_HOME : This is located the path ",(0,n.kt)("strong",{parentName:"p"},"/guzzle "),"and contains binaries and static files of Guzzle app ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"GUZZLE_HOME: This is located at path ",(0,n.kt)("strong",{parentName:"p"},"/guzzle/guzzlehome "),"and contains all the Guzzle binaries and configuration files. "))),(0,n.kt)("p",null,"All operations on these directories (like installing JDBC drivers, \u2026) must be performed as the guzzle user."),(0,n.kt)("h2",{id:"what-is-installed-by-default"},"What is installed by default?"),(0,n.kt)("p",null,"The Guzzle image is based on Cent OS 8. It contains:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'A standard installation of Guzzle running under Linux user account "guzzle".')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A local MySQL database, with a connection to it pre-configured in DSS. MySQL is only .")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Blobfuse")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"JDK xxx")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A nginx reverse proxy exposing Guzzle API server and Guzzle static resources on the standard HTTPS port 443 using a self-signed certificate. For better security, you can provide your own certificate in directory /guzzle/cacerts."))),(0,n.kt)("h2",{id:"how-do-i-install-jdbc-drivers-and-other-third-party-libraries"},"How do I install JDBC drivers and other third party libraries?"),(0,n.kt)("p",null,'JDBC and external libraries drivers must be installed by copying the relevant files in the "$GUZZLE_HOME/lib/ext" folder of the DSS data directory (See Installing database drivers).'),(0,n.kt)("p",null,'You can either download files from the instance or upload them using SSH. Copy into the "$GUZZLE_HOME/lib/ext" folder must be done as the guzzle user.'))}d.isMDXComponent=!0},3102:function(e,t,a){"use strict";t.Z=a.p+"assets/images/introduction1-37a4bc07568faa0c54a996ae25faf82d.png"}}]);
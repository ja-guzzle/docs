---
id: deploying_guzzle_on_microsoft_azure
title: Deploying Guzzle on Microsoft Azure
---

Guzzle software gets deployed on a virtual machine using the pre-built image on the Microsoft Azure cloud. You can deploy Guzzle on an existing Virtual Network or a new Virtual Network.

## Prerequisites

You need an Azure account to proceed. You will be billed only for the virtual machine instance. The Guzzle image itself is free. 

## Deployment of Guzzle Virtual Machine

* You can login to Azure Portal, go to Marketplace and search **Guzzle: Data Engineering Workbench V2**

* Open the Guzzle page on Azure marketplace [here](https://portal.azure.com/#blade/Microsoft_Azure_Marketplace/GalleryItemDetailsBladeNopdl/product/%7B%22displayName%22%3A%22Guzzle%3A%20Data%20Integration%20workbench%20for%20Databricks%22%2C%22itemDisplayName%22%3A%22Guzzle%3A%20Data%20Integration%20workbench%20for%20Databricks%22%2C%22id%22%3A%22justanalytics.guzzle-databricks%22%2C%22bigId%22%3A%22DZH318Z0D0GW%22%2C%22offerId%22%3A%22guzzle-databricks%22%2C%22publisherId%22%3A%22justanalytics%22%2C%22publisherDisplayName%22%3A%22JUST%20ANALYTICS%20PTE%20LTD%22%2C%22summary%22%3A%22Easily%20develop%20robust%20data%20pipelines%20for%20your%20analytics%20use%20cases%20and%20run%20them%20on%20Databricks%22%2C%22longSummary%22%3A%22Just%20Analytics%20Guzzle%2C%20is%20a%20cloud-based%20data%20integration%20workbench%20that%20automates%20the%20movement%20and%20transformation%20of%20data.%20It%20allows%20to%20quickly%20create%2C%20deploy%2C%20and%20monitor%20data%20ingestion%2C%20processing%2C%20reconciliation%2C%20data%20quality%20and%20house-keeping%20jobs%22%2C%22description%22%3A%22Just%20Analytics%20Guzzle%20Data%20Integration%20workbench%20is%20a%20cloud-based%20data%20integration%20solution%20that%20automates%20the%20movement%20and%20transformation%20of%20data.%20It%20allows%20to%20quickly%20create%2C%20deploy%2C%20and%20monitor%20data%20ingestion%2C%20processing%2C%20reconciliation%2C%20data%20quality%20and%20house-keeping%20job.%20Guzzle%20supports%20sourcing%20and%20transforming%20data%20of%20various%20formats%20from%20wide%20array%20of%20sources%20including%3A%20cloud%20storage%20services%2C%20REST%20API%2C%20and%20JDBC%2C%20and%20write%20the%20results%20in%20to%20multiple%20types%20of%20targets.%20The%20transformed%20data%20can%20then%20be%20consume%20by%20BI%20and%20analytics%20tools%2C%20and%20other%20applications%20to%20drive%20business%20insights.%5Cn%20%5CnKey%20features%20of%20Guzzle%3A%5Cn-%20Securely%20deployed%20on%20Virtual%20Machine%20within%20the%20your%20VNET%5Cn-%20Native%20to%20Databricks%20Spark%2C%20Delta%20Lake%20and%20Azure%20services%5Cn-%20Simple%20to%20deploy%20and%20use%5Cn-%20Abstract%20commonly%20used%20data%20integration%20patterns%20to%20%20accelerate%5Cn-%20Handle%20Diverse%20workloads%20%3A%20Batch%2C%20Micro-Batch%2C%20Streaming%20and%20API%5Cn-%20Supports%20wide%20array%20of%20sources%20and%20target%20data%20stores%5Cn-%20Enterprise%20grade%20Auditability%2C%20Governance%2C%20Traceability%20and%20Provenance%5Cn-%20Integration%20with%20Github%20and%20support%20for%20GIT%20workflows%20to%20version%20the%20job%20metadata%5Cn-%20Provides%20comprehensive%20metadata%20lineage%20capabilities%20using%20Apache%20Atlas%5Cn-%20Run%20data%20pipelines%20with%20fine-tuned%20control%20and%20automated%20cluster%20management%20for%20Databricks%5Cn-%20Supports%20on-premises%20connection%20via%20secured%20SSH%20tunnel%22%2C%22isPrivate%22%3Afalse%2C%22hasPrivateOffer%22%3Afalse%2C%22isMacc%22%3Atrue%2C%22isPreview%22%3Afalse%2C%22isByol%22%3Afalse%2C%22isCSPEnabled%22%3Atrue%2C%22isCSPSelective%22%3Afalse%2C%22isThirdParty%22%3Atrue%2C%22isReseller%22%3Afalse%2C%22hasFreeTrials%22%3Afalse%2C%22marketingMaterial%22%3A%5B%5D%2C%22legalTermsUri%22%3A%22https%3A%2F%2Fquery.prod.cms.rt.microsoft.com%2Fcms%2Fapi%2Fam%2Fbinary%2FRWI90H%22%2C%22privacyPolicyUri%22%3A%22https%3A%2F%2Fwww.justanalytics.com%2Fguzzle%2Feula%22%2C%22version%22%3A%226cbe8598-d77e-463e-9b97-3449690a9084%22%2C%22metadata%22%3A%7B%22leadGeneration%22%3A%7B%22productId%22%3Anull%7D%2C%22testDrive%22%3Anull%7D%2C%22categoryIds%22%3A%5B%22analytics%22%2C%22bigData%22%2C%22azureCertified%22%2C%22fromPublishingPortal%22%2C%22multiResourceSolution%22%2C%22readonlytemplate%22%2C%22virtualMachine%22%2C%22virtualMachine-Arm%22%5D%2C%22screenshotUris%22%3A%5B%22https%3A%2F%2Fstore-images.s-microsoft.com%2Fimage%2Fapps.21911.cea57d01-b371-4bee-bd76-32dcad268c54.921b0d6f-1cda-45a1-98a3-7b1c1ec59837.f0f70fe7-0df8-4f81-9359-8b8cbd5f60de%22%2C%22https%3A%2F%2Fstore-images.s-microsoft.com%2Fimage%2Fapps.61122.cea57d01-b371-4bee-bd76-32dcad268c54.921b0d6f-1cda-45a1-98a3-7b1c1ec59837.ca6ec3da-e601-48b5-98f1-7c2737495fea%22%2C%22https%3A%2F%2Fstore-images.s-microsoft.com%2Fimage%2Fapps.56806.cea57d01-b371-4bee-bd76-32dcad268c54.921b0d6f-1cda-45a1-98a3-7b1c1ec59837.d8826849-5e54-4344-a637-1cfd6caa33cc%22%5D%2C%22videos%22%3A%5B%5D%2C%22links%22%3A%5B%5D%2C%22filters%22%3A%5B%5D%2C%22plans%22%3A%5B%7B%22id%22%3A%220001%22%2C%22displayName%22%3A%22Just%20Analytics%20Guzzle%20-%20Trial%20Edition%22%2C%22summary%22%3A%22Provides%20core%20data%20integration%20functionalities%20of%20Guzzle.%20Free%20Trial%20for%2090%20days%22%2C%22description%22%3A%22Trial%20Edition%20provides%20all%20the%20Guzzle%20core%20data%20integration%20modules%20namely%3A%5CnIngestion%2C%20Processing%2C%20Reconciliation%2C%20Data%20Quality%20(%20Constraint%20Check)%2C%20%20Housekeeping%2C%20detail%20run%20time%20audit%20and%20provenance%2C%20advance%20job%20orchestration%20and%20extensive%20lineage%20support%2C%20and%20GIT%20integration%22%2C%22restrictedAudience%22%3A%7B%7D%2C%22skuId%22%3A%220001%22%2C%22planId%22%3A%22trial%22%2C%22legacyPlanId%22%3A%22justanalytics.guzzle-databrickstrial%22%2C%22keywords%22%3A%5B%5D%2C%22type%22%3A%22SolutionTemplate%22%2C%22leadGeneration%22%3A%7B%22productId%22%3A%22justanalytics.guzzle-databrickstrial%22%7D%2C%22testDrive%22%3Anull%2C%22categoryIds%22%3A%5B%5D%2C%22conversionPaths%22%3A%5B%5D%2C%22metadata%22%3A%7B%7D%2C%22uiDefinitionUri%22%3A%22https%3A%2F%2Fcatalogartifact.azureedge.net%2Fpublicartifacts%2Fjustanalytics.guzzle-databricks-e44a7c25-aab3-4ded-98a0-fbc7a8e1c465-trial%2FUiDefinition.json%22%2C%22artifacts%22%3A%5B%7B%22name%22%3A%22DefaultTemplate%22%2C%22uri%22%3A%22https%3A%2F%2Fcatalogartifact.azureedge.net%2Fpublicartifacts%2Fjustanalytics.guzzle-databricks-e44a7c25-aab3-4ded-98a0-fbc7a8e1c465-trial%2FArtifacts%2FmainTemplate.json%22%2C%22type%22%3A%22Template%22%7D%2C%7B%22name%22%3A%22createuidefinition%22%2C%22uri%22%3A%22https%3A%2F%2Fcatalogartifact.azureedge.net%2Fpublicartifacts%2Fjustanalytics.guzzle-databricks-e44a7c25-aab3-4ded-98a0-fbc7a8e1c465-trial%2FArtifacts%2FcreateUiDefinition.json%22%2C%22type%22%3A%22Custom%22%7D%2C%7B%22name%22%3A%22UiDefinition.json%22%2C%22uri%22%3A%22https%3A%2F%2Fcatalogartifact.azureedge.net%2Fpublicartifacts%2Fjustanalytics.guzzle-databricks-e44a7c25-aab3-4ded-98a0-fbc7a8e1c465-trial%2FUiDefinition.json%22%2C%22type%22%3A%22Custom%22%7D%2C%7B%22name%22%3A%22scripts_configure-guzzle.py%22%2C%22uri%22%3A%22https%3A%2F%2Fcatalogartifact.azureedge.net%2Fpublicartifacts%2Fjustanalytics.guzzle-databricks-e44a7c25-aab3-4ded-98a0-fbc7a8e1c465-trial%2FArtifacts%2Fscripts%2Fconfigure-guzzle.py%22%2C%22type%22%3A%22Custom%22%7D%2C%7B%22name%22%3A%22scripts_mount-blob-storage.sh%22%2C%22uri%22%3A%22https%3A%2F%2Fcatalogartifact.azureedge.net%2Fpublicartifacts%2Fjustanalytics.guzzle-databricks-e44a7c25-aab3-4ded-98a0-fbc7a8e1c465-trial%2FArtifacts%2Fscripts%2Fmount-blob-storage.sh%22%2C%22type%22%3A%22Custom%22%7D%2C%7B%22name%22%3A%22scripts_start-guzzle.sh%22%2C%22uri%22%3A%22https%3A%2F%2Fcatalogartifact.azureedge.net%2Fpublicartifacts%2Fjustanalytics.guzzle-databricks-e44a7c25-aab3-4ded-98a0-fbc7a8e1c465-trial%2FArtifacts%2Fscripts%2Fstart-guzzle.sh%22%2C%22type%22%3A%22Custom%22%7D%2C%7B%22name%22%3A%22scripts_mount-blob-storage-in-vm.py%22%2C%22uri%22%3A%22https%3A%2F%2Fcatalogartifact.azureedge.net%2Fpublicartifacts%2Fjustanalytics.guzzle-databricks-e44a7c25-aab3-4ded-98a0-fbc7a8e1c465-trial%2FArtifacts%2Fscripts%2Fmount-blob-storage-in-vm.py%22%2C%22type%22%3A%22Custom%22%7D%2C%7B%22name%22%3A%22scripts_generate-ssl-certs.sh%22%2C%22uri%22%3A%22https%3A%2F%2Fcatalogartifact.azureedge.net%2Fpublicartifacts%2Fjustanalytics.guzzle-databricks-e44a7c25-aab3-4ded-98a0-fbc7a8e1c465-trial%2FArtifacts%2Fscripts%2Fgenerate-ssl-certs.sh%22%2C%22type%22%3A%22Custom%22%7D%2C%7B%22name%22%3A%22scripts_install-guzzle.sh%22%2C%22uri%22%3A%22https%3A%2F%2Fcatalogartifact.azureedge.net%2Fpublicartifacts%2Fjustanalytics.guzzle-databricks-e44a7c25-aab3-4ded-98a0-fbc7a8e1c465-trial%2FArtifacts%2Fscripts%2Finstall-guzzle.sh%22%2C%22type%22%3A%22Custom%22%7D%2C%7B%22name%22%3A%22scripts_setup-env.py%22%2C%22uri%22%3A%22https%3A%2F%2Fcatalogartifact.azureedge.net%2Fpublicartifacts%2Fjustanalytics.guzzle-databricks-e44a7c25-aab3-4ded-98a0-fbc7a8e1c465-trial%2FArtifacts%2Fscripts%2Fsetup-env.py%22%2C%22type%22%3A%22Custom%22%7D%2C%7B%22name%22%3A%22scripts_configure-guzzle.sh%22%2C%22uri%22%3A%22https%3A%2F%2Fcatalogartifact.azureedge.net%2Fpublicartifacts%2Fjustanalytics.guzzle-databricks-e44a7c25-aab3-4ded-98a0-fbc7a8e1c465-trial%2FArtifacts%2Fscripts%2Fconfigure-guzzle.sh%22%2C%22type%22%3A%22Custom%22%7D%5D%2C%22isPrivate%22%3Afalse%2C%22isHidden%22%3Afalse%2C%22hasFreeTrials%22%3Afalse%2C%22isByol%22%3Afalse%2C%22isFree%22%3Afalse%2C%22isPayg%22%3Atrue%2C%22isStopSell%22%3Afalse%2C%22cspState%22%3A%22OptIn%22%2C%22isQuantifiable%22%3Afalse%2C%22vmSecuritytype%22%3A%22None%22%2C%22stackType%22%3A%22ARM%22%7D%5D%2C%22selectedPlanId%22%3A%22trial%22%2C%22iconFileUris%22%3A%7B%22small%22%3A%22https%3A%2F%2Fstore-images.s-microsoft.com%2Fimage%2Fapps.59799.cea57d01-b371-4bee-bd76-32dcad268c54.ef982932-c71f-43a1-b0f1-69cf86b8ab88.f3bf2090-b23f-4c58-95d2-0f833e3cba00%22%2C%22medium%22%3A%22https%3A%2F%2Fstore-images.s-microsoft.com%2Fimage%2Fapps.52459.cea57d01-b371-4bee-bd76-32dcad268c54.ef982932-c71f-43a1-b0f1-69cf86b8ab88.42fc9e5e-0c5e-4358-97f0-9f85235757ff%22%2C%22wide%22%3A%22https%3A%2F%2Fstore-images.s-microsoft.com%2Fimage%2Fapps.47643.cea57d01-b371-4bee-bd76-32dcad268c54.ef982932-c71f-43a1-b0f1-69cf86b8ab88.a6a44391-e1d8-4a0b-b89e-4bd3afa59521%22%2C%22large%22%3A%22https%3A%2F%2Fstore-images.s-microsoft.com%2Fimage%2Fapps.17690.cea57d01-b371-4bee-bd76-32dcad268c54.ef982932-c71f-43a1-b0f1-69cf86b8ab88.2c0238de-8e37-4582-af59-7e6f28698be4%22%2C%22hero%22%3A%22https%3A%2F%2Fstore-images.s-microsoft.com%2Fimage%2Fapps.61326.cea57d01-b371-4bee-bd76-32dcad268c54.921b0d6f-1cda-45a1-98a3-7b1c1ec59837.e528954b-727f-4122-bd71-bbdd720a35d2%22%7D%2C%22itemType%22%3A%22Single%22%2C%22hasNoProducts%22%3Afalse%2C%22hasNoPlans%22%3Afalse%2C%22privateBadgeText%22%3Anull%2C%22createBladeType%22%3A1%2C%22offerType%22%3A%22AzureApplication%22%2C%22useEnterpriseContract%22%3Afalse%2C%22hasStandardContractAmendments%22%3Afalse%2C%22standardContractAmendmentsRevisionId%22%3A%2200000000-0000-0000-0000-000000000000%22%2C%22cspLegalTermsUri%22%3A%22https%3A%2F%2Fquery.prod.cms.rt.microsoft.com%2Fcms%2Fapi%2Fam%2Fbinary%2FRWI90H%22%2C%22supportUri%22%3A%22https%3A%2F%2Fwww.justanalytics.com%2Fsupport%22%2C%22isMicrosoftProduct%22%3Atrue%2C%22productOwnershipSellingMotion%22%3A%223PPAgency%22%2C%22galleryItemAccess%22%3A0%2C%22privateSubscriptions%22%3A%5B%5D%2C%22isTenantPrivate%22%3Afalse%7D/id/trial/resourceGroupId//resourceGroupLocation//dontDiscardJourney//_provisioningContext/%7B%22initialValues%22%3A%7B%22subscriptionIds%22%3A%5B%2259e8a4ae-fa3e-4a6e-b2c2-8e2b807e66b8%22%5D%2C%22resourceGroupNames%22%3A%5B%5D%2C%22locationNames%22%3A%5B%22centralindia%22%2C%22southeastasia%22%5D%7D%2C%22telemetryId%22%3A%227c46089c-d8ea-48d8-9e36-1e5d8c65d8cc%22%2C%22marketplaceItem%22%3A%7B%22categoryIds%22%3A%5B%5D%2C%22id%22%3A%22Microsoft.Portal%22%2C%22itemDisplayName%22%3A%22NoMarketplace%22%2C%22products%22%3A%5B%5D%2C%22version%22%3A%22%22%2C%22productsWithNoPricing%22%3A%5B%5D%2C%22publisherDisplayName%22%3A%22Microsoft.Portal%22%2C%22deploymentName%22%3A%22NoMarketplace%22%2C%22launchingContext%22%3A%7B%22source%22%3A%5B%5D%2C%22galleryItemId%22%3A%22%22%7D%2C%22deploymentTemplateFileUris%22%3A%7B%7D%2C%22uiMetadata%22%3Anull%7D%7D). Alternatively you can login to Azure Portal, go to Marketplace and search **Guzzle: Data Engineering Workbench for Spark**

<a href="http://guzzle.justanalytics.com/assets/files/introduction_1-5e4a0308b1da012e5b40700ffd87d101.png" target="_self">
    <img src="/img/docs/introduction/introduction_1.png"  />
</a>

* Click on "Create" which will take you to Azure Portal, Create virtual machine blade.

* Enter a name for your Virtual Machine and select your Username and Password or SSH key (do not use "guzzle" as username).

* Enter a new Resource group name or use existing one.

* You can retain default values for remaining VM Settings or override them suitable as per your requirement.

* You can deploy Guzzle VM on existing VNET or a new VNET, restrict network access of Guzzle VM to only allow required inbound and outbound traffic and apply additional best practices for securing VM as per your organization policy.

* D family size with 2 vCPUs and 8 GB RAM for the virtual machine should be enough for the initial deployment.

* Review and create virtual machine. Wait for a few minutes for the instance to start.

# How tos

## How do I use Guzzle?

* Guzzle is available on HTTPS, on the port 443 on the Azure VM instance. 

* To access Guzzle - Launch browser with the URL https://VM_PUBLIC_ADDRESS where VM_PUBLIC_ADDRESS is the instance public IP address (available in the details of your virtual machine). If you have domain name associated for your VM then we can access guzzle using the URL https://DNS_NAME. 

* Guzzle is pre-loaded with a self-signed certificate, so you will get a security warning when you launch it for the first time. Later on you can replace this self-signed certificate with the valid certificate in the VM. 

* The default user and password for the guzzle instance is admin/admin.

:::note
Only Chrome browser is supported.
:::

* Before starting to use Guzzle it is recommended to upgrade Guzzle to latest avaliable version. This can be done by going to top menu Manage and further navigate to Maintenance->Upgrade


## How do I log into the shell of virtual machine instance?

Administrative (command-line) access can be obtained by logging-in through SSH using the credentials specified when creating the virtual machine.

**Note:** Guzzle app does not run under this VM administrator account, but under `guzzle` user id. The administrative account is sudoer, so from its shell, you can use `sudo su — guzzle` to get a shell as `guzzle` user.

You cannot directly login as the `guzzle` user. Also `guzzle` user is not sudoer.

## What are the Guzzle directories?

The Guzzle has two key directories that gets deployed on the VM. These are referred in Guzzle App using following environment variables. 

* GUZZLE_PRODUCT_HOME: This is located in the path **/guzzle**

* GUZZLE_HOME: This is located in the path **/guzzle/guzzlehome**

:::note
Environment variables GUZZLE_PRODUCT_HOME and GUZZLE_HOME are defined in guzzle service startup related configuration. These environment variables are accessible to Guzzle App but by default they are not available when you are on shell as `guzzle` user.
:::

All operations on these directories (like installing JDBC drivers, …) must be performed as `guzzle` user.

## What is installed by default?

Guzzle image is based on Ubuntu Server 20.04 LTS. It contains:

- Guzzle (2.0.1) - A standard installation of Guzzle App running under Linux user account `guzzle`.
- MySQL Server (8.0) - A local MySQL server database, with a connection to it pre-configured in Guzzle App.
- OpenJDK (1.8.0_292)
- Blobfuse (1.3.8)
- Nginx (1.18) - Nginx reverse proxy exposing Guzzle API server and Guzzle static resources on the standard HTTPS port 443 using a self-signed certificate. For better security, you can provide your own certificate in the directory /guzzle/cacerts.
- Apache Spark (3.1.2)

## How do I install JDBC drivers and other third party libraries?

JDBC drivers and external libraries must be installed by copying the relevant files in the "$GUZZLE_HOME/libs/ext" folder (See Installing database drivers).

You can either download files from the virtual machine instance or upload them using SSH. Copying into the "$GUZZLE_HOME/libs/ext" folder must be done as Guzzle user.


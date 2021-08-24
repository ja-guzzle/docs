---
id: deploying_guzzle_on_microsoft_azure
title: Deploying Guzzle on Microsoft Azure
---

Guzzle software gets deployed on a virtual machine using the pre-built image on the Microsoft Azure cloud. You can deploy Guzzle on an existing VNet or a new Virtual network. You can apply standard 

## Prerequisites

You need an Azure account to proceed. You will be billed only for the virtual machine instance. The Guzzle image itself is free. 

## Deployment of Guzzle Virtual Machine

1. Create Guzzle virtual machine using the Azure Marketplace offer

* Open the Guzzle page on Azure marketplace [here](https://portal.azure.com/#blade/Microsoft_Azure_Marketplace/GalleryItemDetailsBladeNopdl/product/%7B%22displayName%22%3A%22Guzzle%3A%20Data%20Integration%20workbench%20for%20Databricks%22%2C%22itemDisplayName%22%3A%22Guzzle%3A%20Data%20Integration%20workbench%20for%20Databricks%22%2C%22id%22%3A%22justanalytics.guzzle-databricks%22%2C%22bigId%22%3A%22DZH318Z0D0GW%22%2C%22offerId%22%3A%22guzzle-databricks%22%2C%22publisherId%22%3A%22justanalytics%22%2C%22publisherDisplayName%22%3A%22JUST%20ANALYTICS%20PTE%20LTD%22%2C%22summary%22%3A%22Easily%20develop%20robust%20data%20pipelines%20for%20your%20analytics%20use%20cases%20and%20run%20them%20on%20Databricks%22%2C%22longSummary%22%3A%22Just%20Analytics%20Guzzle%2C%20is%20a%20cloud-based%20data%20integration%20workbench%20that%20automates%20the%20movement%20and%20transformation%20of%20data.%20It%20allows%20to%20quickly%20create%2C%20deploy%2C%20and%20monitor%20data%20ingestion%2C%20processing%2C%20reconciliation%2C%20data%20quality%20and%20house-keeping%20jobs%22%2C%22description%22%3A%22Just%20Analytics%20Guzzle%20Data%20Integration%20workbench%20is%20a%20cloud-based%20data%20integration%20solution%20that%20automates%20the%20movement%20and%20transformation%20of%20data.%20It%20allows%20to%20quickly%20create%2C%20deploy%2C%20and%20monitor%20data%20ingestion%2C%20processing%2C%20reconciliation%2C%20data%20quality%20and%20house-keeping%20job.%20Guzzle%20supports%20sourcing%20and%20transforming%20data%20of%20various%20formats%20from%20wide%20array%20of%20sources%20including%3A%20cloud%20storage%20services%2C%20REST%20API%2C%20and%20JDBC%2C%20and%20write%20the%20results%20in%20to%20multiple%20types%20of%20targets.%20The%20transformed%20data%20can%20then%20be%20consume%20by%20BI%20and%20analytics%20tools%2C%20and%20other%20applications%20to%20drive%20business%20insights.%5Cn%20%5CnKey%20features%20of%20Guzzle%3A%5Cn-%20Securely%20deployed%20on%20Virtual%20Machine%20within%20the%20your%20VNET%5Cn-%20Native%20to%20Databricks%20Spark%2C%20Delta%20Lake%20and%20Azure%20services%5Cn-%20Simple%20to%20deploy%20and%20use%5Cn-%20Abstract%20commonly%20used%20data%20integration%20patterns%20to%20%20accelerate%5Cn-%20Handle%20Diverse%20workloads%20%3A%20Batch%2C%20Micro-Batch%2C%20Streaming%20and%20API%5Cn-%20Supports%20wide%20array%20of%20sources%20and%20target%20data%20stores%5Cn-%20Enterprise%20grade%20Auditability%2C%20Governance%2C%20Traceability%20and%20Provenance%5Cn-%20Integration%20with%20Github%20and%20support%20for%20GIT%20workflows%20to%20version%20the%20job%20metadata%5Cn-%20Provides%20comprehensive%20metadata%20lineage%20capabilities%20using%20Apache%20Atlas%5Cn-%20Run%20data%20pipelines%20with%20fine-tuned%20control%20and%20automated%20cluster%20management%20for%20Databricks%5Cn-%20Supports%20on-premises%20connection%20via%20secured%20SSH%20tunnel%22%2C%22isPrivate%22%3Afalse%2C%22isMacc%22%3Atrue%2C%22isPreview%22%3Afalse%2C%22isByol%22%3Afalse%2C%22isCSPEnabled%22%3Atrue%2C%22isCSPSelective%22%3Afalse%2C%22isThirdParty%22%3Atrue%2C%22isReseller%22%3Afalse%2C%22hasFreeTrials%22%3Afalse%2C%22marketingMaterial%22%3A%5B%5D%2C%22legalTermsUri%22%3A%22https%3A%2F%2Fquery.prod.cms.rt.microsoft.com%2Fcms%2Fapi%2Fam%2Fbinary%2FRE4NQXV%22%2C%22privacyPolicyUri%22%3A%22https%3A%2F%2Fwww.justanalytics.com%2Fguzzle%2Feula%22%2C%22version%22%3A%221cc3ffcf-c408-4909-bef5-40a2d4244e94%22%2C%22metadata%22%3A%7B%22leadGeneration%22%3A%7B%22productId%22%3Anull%7D%2C%22testDrive%22%3Anull%7D%2C%22categoryIds%22%3A%5B%22analytics%22%2C%22bigData%22%2C%22azureCertified%22%2C%22fromPublishingPortal%22%2C%22multiResourceSolution%22%2C%22readonlytemplate%22%2C%22virtualMachine%22%2C%22virtualMachine-Arm%22%5D%2C%22screenshotUris%22%3A%5B%22https%3A%2F%2Fstore-images.s-microsoft.com%2Fimage%2Fapps.21911.cea57d01-b371-4bee-bd76-32dcad268c54.921b0d6f-1cda-45a1-98a3-7b1c1ec59837.f0f70fe7-0df8-4f81-9359-8b8cbd5f60de%22%2C%22https%3A%2F%2Fstore-images.s-microsoft.com%2Fimage%2Fapps.61122.cea57d01-b371-4bee-bd76-32dcad268c54.921b0d6f-1cda-45a1-98a3-7b1c1ec59837.ca6ec3da-e601-48b5-98f1-7c2737495fea%22%2C%22https%3A%2F%2Fstore-images.s-microsoft.com%2Fimage%2Fapps.56806.cea57d01-b371-4bee-bd76-32dcad268c54.921b0d6f-1cda-45a1-98a3-7b1c1ec59837.d8826849-5e54-4344-a637-1cfd6caa33cc%22%5D%2C%22videos%22%3A%5B%5D%2C%22links%22%3A%5B%5D%2C%22filters%22%3A%5B%5D%2C%22plans%22%3A%5B%7B%22id%22%3A%220001%22%2C%22displayName%22%3A%22Just%20Analytics%20Guzzle%20-%20Trial%20Edition%22%2C%22summary%22%3A%22Provides%20core%20data%20integration%20functionalities%20of%20Guzzle.%20Free%20Trial%20for%2090%20days%22%2C%22description%22%3A%22Trial%20Edition%20provides%20all%20the%20Guzzle%20core%20data%20integration%20modules%20namely%3A%5CnIngestion%2C%20Processing%2C%20Reconciliation%2C%20Data%20Quality%20(%20Constraint%20Check)%2C%20%20Housekeeping%2C%20detail%20run%20time%20audit%20and%20provenance%2C%20advance%20job%20orchestration%20and%20extensive%20lineage%20support%2C%20and%20GIT%20integration%22%2C%22restrictedAudience%22%3A%7B%7D%2C%22skuId%22%3A%220001%22%2C%22planId%22%3A%22trial%22%2C%22legacyPlanId%22%3A%22justanalytics.guzzle-databrickstrial%22%2C%22keywords%22%3A%5B%5D%2C%22type%22%3A%22SolutionTemplate%22%2C%22leadGeneration%22%3A%7B%22productId%22%3A%22justanalytics.guzzle-databrickstrial%22%7D%2C%22testDrive%22%3Anull%2C%22categoryIds%22%3A%5B%5D%2C%22conversionPaths%22%3A%5B%5D%2C%22metadata%22%3A%7B%7D%2C%22uiDefinitionUri%22%3A%22https%3A%2F%2Fcatalogartifact.azureedge.net%2Fpublicartifacts%2Fjustanalytics.guzzle-databricks-e44a7c25-aab3-4ded-98a0-fbc7a8e1c465-trial%2FUiDefinition.json%22%2C%22artifacts%22%3A%5B%7B%22name%22%3A%22DefaultTemplate%22%2C%22uri%22%3A%22https%3A%2F%2Fcatalogartifact.azureedge.net%2Fpublicartifacts%2Fjustanalytics.guzzle-databricks-e44a7c25-aab3-4ded-98a0-fbc7a8e1c465-trial%2FArtifacts%2FmainTemplate.json%22%2C%22type%22%3A%22Template%22%7D%2C%7B%22name%22%3A%22createuidefinition%22%2C%22uri%22%3A%22https%3A%2F%2Fcatalogartifact.azureedge.net%2Fpublicartifacts%2Fjustanalytics.guzzle-databricks-e44a7c25-aab3-4ded-98a0-fbc7a8e1c465-trial%2FArtifacts%2FcreateUiDefinition.json%22%2C%22type%22%3A%22Custom%22%7D%2C%7B%22name%22%3A%22UiDefinition.json%22%2C%22uri%22%3A%22https%3A%2F%2Fcatalogartifact.azureedge.net%2Fpublicartifacts%2Fjustanalytics.guzzle-databricks-e44a7c25-aab3-4ded-98a0-fbc7a8e1c465-trial%2FUiDefinition.json%22%2C%22type%22%3A%22Custom%22%7D%2C%7B%22name%22%3A%22scripts_configure-guzzle.py%22%2C%22uri%22%3A%22https%3A%2F%2Fcatalogartifact.azureedge.net%2Fpublicartifacts%2Fjustanalytics.guzzle-databricks-e44a7c25-aab3-4ded-98a0-fbc7a8e1c465-trial%2FArtifacts%2Fscripts%2Fconfigure-guzzle.py%22%2C%22type%22%3A%22Custom%22%7D%2C%7B%22name%22%3A%22scripts_mount-blob-storage.sh%22%2C%22uri%22%3A%22https%3A%2F%2Fcatalogartifact.azureedge.net%2Fpublicartifacts%2Fjustanalytics.guzzle-databricks-e44a7c25-aab3-4ded-98a0-fbc7a8e1c465-trial%2FArtifacts%2Fscripts%2Fmount-blob-storage.sh%22%2C%22type%22%3A%22Custom%22%7D%2C%7B%22name%22%3A%22scripts_start-guzzle.sh%22%2C%22uri%22%3A%22https%3A%2F%2Fcatalogartifact.azureedge.net%2Fpublicartifacts%2Fjustanalytics.guzzle-databricks-e44a7c25-aab3-4ded-98a0-fbc7a8e1c465-trial%2FArtifacts%2Fscripts%2Fstart-guzzle.sh%22%2C%22type%22%3A%22Custom%22%7D%2C%7B%22name%22%3A%22scripts_mount-blob-storage-in-vm.py%22%2C%22uri%22%3A%22https%3A%2F%2Fcatalogartifact.azureedge.net%2Fpublicartifacts%2Fjustanalytics.guzzle-databricks-e44a7c25-aab3-4ded-98a0-fbc7a8e1c465-trial%2FArtifacts%2Fscripts%2Fmount-blob-storage-in-vm.py%22%2C%22type%22%3A%22Custom%22%7D%2C%7B%22name%22%3A%22scripts_generate-ssl-certs.sh%22%2C%22uri%22%3A%22https%3A%2F%2Fcatalogartifact.azureedge.net%2Fpublicartifacts%2Fjustanalytics.guzzle-databricks-e44a7c25-aab3-4ded-98a0-fbc7a8e1c465-trial%2FArtifacts%2Fscripts%2Fgenerate-ssl-certs.sh%22%2C%22type%22%3A%22Custom%22%7D%2C%7B%22name%22%3A%22scripts_install-guzzle.sh%22%2C%22uri%22%3A%22https%3A%2F%2Fcatalogartifact.azureedge.net%2Fpublicartifacts%2Fjustanalytics.guzzle-databricks-e44a7c25-aab3-4ded-98a0-fbc7a8e1c465-trial%2FArtifacts%2Fscripts%2Finstall-guzzle.sh%22%2C%22type%22%3A%22Custom%22%7D%2C%7B%22name%22%3A%22scripts_setup-env.py%22%2C%22uri%22%3A%22https%3A%2F%2Fcatalogartifact.azureedge.net%2Fpublicartifacts%2Fjustanalytics.guzzle-databricks-e44a7c25-aab3-4ded-98a0-fbc7a8e1c465-trial%2FArtifacts%2Fscripts%2Fsetup-env.py%22%2C%22type%22%3A%22Custom%22%7D%2C%7B%22name%22%3A%22scripts_configure-guzzle.sh%22%2C%22uri%22%3A%22https%3A%2F%2Fcatalogartifact.azureedge.net%2Fpublicartifacts%2Fjustanalytics.guzzle-databricks-e44a7c25-aab3-4ded-98a0-fbc7a8e1c465-trial%2FArtifacts%2Fscripts%2Fconfigure-guzzle.sh%22%2C%22type%22%3A%22Custom%22%7D%5D%2C%22isPrivate%22%3Afalse%2C%22isHidden%22%3Afalse%2C%22hasFreeTrials%22%3Afalse%2C%22isByol%22%3Afalse%2C%22isFree%22%3Afalse%2C%22isPayg%22%3Atrue%2C%22isStopSell%22%3Afalse%2C%22cspState%22%3A%22OptIn%22%2C%22isQuantifiable%22%3Afalse%2C%22vmSecuritytype%22%3A%22None%22%2C%22stackType%22%3A%22ARM%22%7D%5D%2C%22selectedPlanId%22%3A%22trial%22%2C%22iconFileUris%22%3A%7B%22small%22%3A%22https%3A%2F%2Fstore-images.s-microsoft.com%2Fimage%2Fapps.59799.cea57d01-b371-4bee-bd76-32dcad268c54.ef982932-c71f-43a1-b0f1-69cf86b8ab88.f3bf2090-b23f-4c58-95d2-0f833e3cba00%22%2C%22medium%22%3A%22https%3A%2F%2Fstore-images.s-microsoft.com%2Fimage%2Fapps.52459.cea57d01-b371-4bee-bd76-32dcad268c54.ef982932-c71f-43a1-b0f1-69cf86b8ab88.42fc9e5e-0c5e-4358-97f0-9f85235757ff%22%2C%22wide%22%3A%22https%3A%2F%2Fstore-images.s-microsoft.com%2Fimage%2Fapps.47643.cea57d01-b371-4bee-bd76-32dcad268c54.ef982932-c71f-43a1-b0f1-69cf86b8ab88.a6a44391-e1d8-4a0b-b89e-4bd3afa59521%22%2C%22large%22%3A%22https%3A%2F%2Fstore-images.s-microsoft.com%2Fimage%2Fapps.17690.cea57d01-b371-4bee-bd76-32dcad268c54.ef982932-c71f-43a1-b0f1-69cf86b8ab88.2c0238de-8e37-4582-af59-7e6f28698be4%22%2C%22hero%22%3A%22https%3A%2F%2Fstore-images.s-microsoft.com%2Fimage%2Fapps.61326.cea57d01-b371-4bee-bd76-32dcad268c54.921b0d6f-1cda-45a1-98a3-7b1c1ec59837.e528954b-727f-4122-bd71-bbdd720a35d2%22%7D%2C%22itemType%22%3A%22Single%22%2C%22hasNoProducts%22%3Afalse%2C%22hasNoPlans%22%3Afalse%2C%22privateBadgeText%22%3Anull%2C%22createBladeType%22%3A1%2C%22offerType%22%3A%22AzureApplication%22%2C%22useEnterpriseContract%22%3Afalse%2C%22hasStandardContractAmendments%22%3Afalse%2C%22standardContractAmendmentsRevisionId%22%3A%2200000000-0000-0000-0000-000000000000%22%2C%22cspLegalTermsUri%22%3A%22https%3A%2F%2Fquery.prod.cms.rt.microsoft.com%2Fcms%2Fapi%2Fam%2Fbinary%2FRE4NQXV%22%2C%22supportUri%22%3A%22https%3A%2F%2Fwww.justanalytics.com%2Fsupport%22%2C%22isMicrosoftProduct%22%3Atrue%2C%22productOwnershipSellingMotion%22%3A%223PPAgency%22%2C%22galleryItemAccess%22%3A0%2C%22privateSubscriptions%22%3A%5B%5D%2C%22isTenantPrivate%22%3Afalse%7D/id/trial/resourceGroupId//resourceGroupLocation//dontDiscardJourney//_provisioningContext/%7B%22initialValues%22%3A%7B%22subscriptionIds%22%3A%5B%227c9ea9d0-89d3-4c9e-93ff-9930de022dab%22%5D%2C%22resourceGroupNames%22%3A%5B%5D%2C%22locationNames%22%3A%5B%22centralus%22%2C%22eastus%22%2C%22southeastasia%22%5D%7D%2C%22telemetryId%22%3A%2267455c2a-fd1a-46d2-892d-e1ca0c4f1245%22%2C%22marketplaceItem%22%3A%7B%22categoryIds%22%3A%5B%5D%2C%22id%22%3A%22Microsoft.Portal%22%2C%22itemDisplayName%22%3A%22NoMarketplace%22%2C%22products%22%3A%5B%5D%2C%22version%22%3A%22%22%2C%22productsWithNoPricing%22%3A%5B%5D%2C%22publisherDisplayName%22%3A%22Microsoft.Portal%22%2C%22deploymentName%22%3A%22NoMarketplace%22%2C%22launchingContext%22%3A%7B%22source%22%3A%5B%5D%2C%22galleryItemId%22%3A%22%22%7D%2C%22deploymentTemplateFileUris%22%3A%7B%7D%2C%22uiMetadata%22%3Anull%7D%7D). Alternatively you can login to Azure Portal, go to Marketplace  and search **Guzzle: Data Integration workbench for Databricks**

![image alt text](/img/docs/introduction/introduction1.png)

* Click on "Create" which will take you to Azure Portal, Create virtual machine blade

* Enter a name for your Virtual machine and select your username and password (do not use "guzzle" as username)

* Enter a new Resource group name or use existing one

* You can retain default values for remaining VM Settings or override them suitably as per your requirement.

* A D2 image (2 vCPUs, 7 GB RAM) should be enough for the initial deployment

2. Connect to Guzzle

* Wait a few minutes for the instance to start

* Launch browser with the URL https://INSTANCE_PUBLIC_ADDRESS OR DNS name where INSTANCE_PUBLIC_ADDRESS is the instance public IP address (available in the details of your virtual machine)

**Note **that only Chrome browser is supported.

# How to

## How do I use Guzzle?

Guzzle is available on HTTPS, on the port 443 on the Azure VM instance. Guzzle is preloaded with a self-signed certificate, so you will get a security error. You can replace the VM to use a real certificate.

## How do I log into the virtual machine instance?

Administrative (command-line) access can be obtained by logging-in through SSH using the credentials specified when creating the virtual machine.

Note: Guzzle does not run under this VM administrator account, but under Guzzle account. The administrative account is sudoer, so from its shell, you can use `sudo su — guzzle` to get a shell as Guzzle user.

You cannot directly login as the `Guzzle` user. Also, 'guzzle' user is not sudoer.

What are the Guzzle directories?

The Guzzle has two key directories that gets deployed on the Azure VM instance. These are referred in Guzzle software using the environment variables. 

* GUZZLE_PRODUCT_HOME : This is located the path **/guzzle **and contains binaries and static files of Guzzle app 

* GUZZLE_HOME: This is located at path **/guzzle/guzzlehome **and contains all Guzzle binaries and configuration files. 

All operations on these directories (like installing JDBC drivers, …) must be performed as Guzzle user.

## What is installed by default?

Guzzle image is based on Cent OS 8. It contains:

- A standard installation of Guzzle running under Linux user account "guzzle".

- A local MySQL database, with a connection to it pre-configured in DSS. MySQL is only.

- Blobfuse

- JDK xxx

- A nginx reverse proxy exposing Guzzle API server and Guzzle static resources on the standard HTTPS port 443 using a self-signed certificate. For better security, you can provide your own certificate in directory /guzzle/cacerts.

## How do I install JDBC drivers and other third party libraries?

JDBC and external libraries drivers must be installed by copying the relevant files in the "$GUZZLE_HOME/lib/ext" folder of the DSS data directory (See Installing database drivers).

You can either download files from the instance or upload them using SSH. Copy into the "$GUZZLE_HOME/lib/ext" folder must be done as Guzzle user.


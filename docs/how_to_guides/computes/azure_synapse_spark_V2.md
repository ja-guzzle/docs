---
id: azure_synapse_spark
title: Azure Synapse Spark V2
---


---
id: azure_synapse_spark
title: Azure Synapse Spark
---

Guzzle supports computing environments on the Azure cloud. In Guzzle, Azure cloud setup, we can use Azure Synapse Spark Pool to execute our workloads. This article helps in using Azure Synapse Spark Pool as a computing environment in Guzzle.

## Below are the steps user has to perform to work with azure synapse compute
1. Create the Azure Synapse Analytics workspace from Azure portal.
2. Create Application in Azure Active Directory and create Client credentials and save it for later use.
    <a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/compute/synapse_app_registration.png" target="_self" >
        <img width="1000" src="/img/docs/how-to-guides/compute/synapse_app_registration.png"/>
    </a>
3. Create the Apache Spark pool in the Azure Synapse Analytics workspace.
    <a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/compute/create_apache_spark_pool.png" target="_self" >
        <img width="1000" src="/img/docs/how-to-guides/compute/create_apache_spark_pool.png"/>
    </a>
4. Assign **Storage Blob Data Contributor** role to the application on Azure Synapse Analytics ADLS gen2 account.
    <a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/compute/synapse_aglsgen2_app_access.png" target="_self" >
        <img width="1000" src="/img/docs/how-to-guides/compute/synapse_aglsgen2_app_access.png"/>
    </a>
5. Assign **Storage Blob Data Contributor** role to the application on Guzzle Shared storage account.
    <a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/compute/synapse_storage_app_access.png" target="_self" >
        <img width="1000" src="/img/docs/how-to-guides/compute/synapse_storage_app_access.png"/>
    </a>
6. Create access policy in Guzzle Key Vault and allow secret permissions to the application.
   <a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/compute/synapse_keyvault_app_access.png" target="_self" >
     <img width="1000" src="/img/docs/how-to-guides/compute/synapse_keyvault_app_access.png"/>
   </a>
6. Open the Azure Synapse studio from Azure Synapse workspace.
    <a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/compute/azure_synapse_studio.png" target="_self" >
        <img width="1000" src="/img/docs/how-to-guides/compute/azure_synapse_studio.png"/>
    </a>
7. In Synapse studio assign **Synapse Administrator** role to the created application.
    <a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/compute/synapse_studio_app_access.png" target="_self" >
        <img width="1000" src="/img/docs/how-to-guides/compute/synapse_studio_app_access.png"/>
    </a>

## Steps to create Azure Synapse Spark Pool compute
1. Click on the action button (![image alt text](/img/docs/how-to-guides/datastores/action_button.png)) from **Compute** section in **Left Navigation** and select **Azure Synapse Spark** compute option.
2. Provide name of compute and click on OK button.
3. Provide more properties to initialize Azure synapse Spark compute as describe below.

|Property| Description                                                                                                                                                                                                                                                                                                 |Default Value|Required|
|----- |-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----- |----- |
|Synapse workspace URL | Specify the URL of the Azure Synapse workspace. You will find this url as **Development endpoint** in Synapse workspace overview page in Azure portal                                                                                                                                                       | None | Yes |
|Spark pool name | Specify the spark pool name that will be used by Guzzle                                                                                                                                                                                                                                                     | None | Yes |
|Credential Type | Specify the credential type to connect to the Azure Synapse                                                                                                                                                                                                                                                 | Service Principle | Yes |
|Client Id | Azure Active Directory provided client Id( also called an application ID). The register app in Azure Active Directory provides one unique id for associate to application. The client id of the created application in above steps.                                                                         | None | Yes |
|Client Secret | Azure Active Directory Client Secret. Provide the client secret of the application that is created in above steps. Guzzle used this for verify and generate access key of the user authentication                                                                                                           | None | Yes |
|Tenant Id | The unique identifier of the Azure Active Directory instance also called directory ID. A tenant represents an organization. Provide the tenant id of the application. It's a dedicated instance of Azure AD that an organization or app developer receives at the beginning of a relationship with Microsoft | None | Yes |
|Driver Memory | Specify the allocated driver memory for running jobs                                                                                                                                                                                                                                                        | None | No | 
|Driver Cores  | Specify the allocated driver cores for running jobs                                                                                                                                                                                                                                                         | None | No |
|Executor Memory | Specify the allocated executor memory for running jobs                                                                                                                                                                                                                                                      | None | No |
|Executor Cores  | Specify the allocated executor cores for running jobs                                                                                                                                                                                                                                                       | None | No |
|Number of executors | Specify the number of spark executors you want the job to run                                                                                                                                                                                                                                               | None | No |
|Customize spark config | Specify additional Spark configuration options. Specify the config name and config value                                                                                                                                                                                                                    | None | No |
|Custom cluster tags | Apply tags to the cluster. Specify the name of tag and value                                                                                                                                                                                                                                                | None | No |
 

## Interface for Azure Synapse Spark compute

<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/compute/azure_synapse_spark_1.png" target="_self" >
    <img width="1000" src="/img/docs/how-to-guides/compute/azure_synapse_spark_1.png"/>
</a>


## Known Limitations
The following features are not supported with Azure Synapse Spark compute:

- LFS datastore is not supported.
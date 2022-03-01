---
id: azure_synapse_spark
title: Synapse Spark Pool (Preview)
---

Guzzle supports computing environments on the Azure cloud. In Guzzle, Azure cloud setup, we can use Azure Synapse Spark Pool to execute our workloads. This article helps in using Azure Synapse Spark Pool as a computing environment in Guzzle.

## Steps to create Azure Synapse Spark Pool compute
1. Click on the action button (![image alt text](/img/docs/how-to-guides/datastores/action_button.png)) from **Compute** section in **Left Navigation** and select **Azure Synapse Spark** compute option.
2. Provide name for the compute and click on OK button.
3. Provide more properties to initilize Azure synapse Spark compute as describe below.

|Property|Description|Default Value|Required|
|----- |----- |----- |----- |
|Synapse workspace URL | Specify the URL of the Azure Synapse workspace that will be used with Guzzle | None | Yes |
|Spark pool name | Specify the spark pool name that will be used with Guzzle | None | Yes |
|Storage linked service | Specify the storage linked service name that will be used with Guzzle | None | Yes |
|Credential Type | Specify the credential type to be used to connect to the Azure Synapse | Service Principle | Yes |
|Client Id | Azure Active Directory provided client Id( also called an application ID). The register app in Azure Active Directory provides one unique id for associate to application | None | Yes |
|Client Secret | Azure Active Directory Client Secret. Guzzle used this for verify and generate access key of the user authentication | None | Yes |
|Tenant Id | The unique identifier of the Azure Active Directory instance also called directory ID. A tenant represents an organization. It's a dedicated instance of Azure AD that an organization or app developer receives at the beginning of a relationship with Microsoft | None | Yes |
|Driver Memory | Specify the allocated driver memory for running jobs | None | No | 
|Driver Cores  | Specify the allocated driver cores for running jobs | None | No |
|Executor Memory | Specify the allocated executor memory for running jobs | None | No |
|Executor Cores  | Specify the allocated executor cores for running jobs | None | No |
|Number of executors | Specify the number of spark executors you want the job to run | None | No |
|Customize spark config | Specify additional Spark configuration options. Specify the config name and config value | None | No |
|Custom cluster tags | Apply tags to the cluster. Specify the name of tag and value | None | No |
 

## Interface for Azure Synapse Spark compute

<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/compute/azure_synapse_spark_1.png" target="_self" >
    <img width="1000" src="/img/docs/how-to-guides/compute/azure_synapse_spark_1.png"/>
</a>


## Known Limitations
The following features are not supported with Azure Synapse Spark compute:

- LFS datastore is not supported.
- Read/write for detla tables is not supported.
- Any operations like **overwrite, merge, effective date merge, delete and update** will not work in processing module. Only **append** operation is supported.
- Keyvaults/secrets - the KV has to be directly accessible to the SPN or user whose credential are used to run the jobs
- Running External jobs (notebooks).
---
id: azure_synapse_analytics
title: Azure Synapse Analytics
---

[Azure Synapse Analytics](https://azure.microsoft.com/en-in/services/synapse-analytics/) is a cloud service that provides multiple data solutions including data integration, data warehousing, and analytics power.

Guzzle offers azure synapse analytics as compute and datastore compute, and this document is for azure synapse analytics data store run on azure databricks, for a run on azure synapse analytics compute checkout [azure synapse analytics native](/docs/how_to_guides/datastores/azure_synapse_analytics_native) datastore.

:::info
Currently, this datastore is only supported in ingestion and processing activity.
:::

## Steps to create Datastore for JDBC

1. Click on the action button (![image alt text](/img/docs/how-to-guides/datastores/server_file_system_0.png)) from the **Datastores **section in Left Navigation and select azure synapse analytics. Alternatively, the user can launch from **Create New Datastore **link in the Activity authoring UI or Copy Data tool.

2. Enter the Datastore name for the new datastore and click Ok.

3. Update the connection name or leave the default. You can refer to [Connection and Environments ](../connection_and_environment/connection_and_environment) for more details.

4. Enter the connection details properties as described below:

| Property                   | Description                                                                                                                                                                                                  | Required |
|----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| Database URL               | A JDBC URL with SQL server set as the sub-protocol. It is recommended to use the connection string provided by the Azure portal. do not pass username and password via URL, passing will result in an error. | Yes      |
| Database                   | A Name of database or dedicated SQL pool.                                                                                                                                                                    | Yes      |
| Username                   | The Azure Synapse username.                                                                                                                                                                                  | Yes      |
| Password                   | The Azure Synapse password.                                                                                                                                                                                  | Yes      |
| Temp directory             | A abfss URI. We recommend you use a dedicated Blob storage container for the Azure Synapse.                                                                                                                  | Yes      |
| Storage account name       | A Name of a storage account. We recommend a primary storage account of azure synapse analytics.                                                                                                              | Yes      |
| Storage account access key | A access key for the specified storage account.                                                                                                                                                              | Yes      |

<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/datastores/azure_synapse_analytics_datastore_example.png" target="_self" >
    <img width="825" src="/img/docs/how-to-guides/datastores/azure_synapse_analytics_datastore_example.png" />
</a>
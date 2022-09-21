---
id: azure_synapse_analytics_native
title: Azure Synapse Analytics Native
---

[Azure Synapse Analytics](https://azure.microsoft.com/en-in/services/synapse-analytics/) is a cloud service that provides multiple data solutions including data integration, data warehousing, and analytics power.

Guzzle offers azure synapse analytics as compute and datastore compute, and this document is for azure synapse analytics datastore run on azure synapse analytics, for a run on azure databricks compute checkout [azure synapse analytics](/docs/how_to_guides/datastores/azure_synapse_analytics) datastore.

:::info
Currently, this datastore is only supported in ingestion and processing activity.
:::

## Steps to create Datastore for JDBC

1. Click on the action button (![image alt text](/img/docs/how-to-guides/datastores/server_file_system_0.png)) from the **Datastores **section in Left Navigation and select azure synapse analytics native. Alternatively, the user can launch from **Create New Datastore **link in the Activity authoring UI or Copy Data tool.

2. Enter the Datastore name for the new datastore and click Ok.

3. Update the connection name or leave the default. You can refer to [Connection and Environments ](../connection_and_environment/connection_and_environment) for more details.

4. Enter the connection details properties as described below:

| Property                    | Description                                                                                                                                                                                                                                                                 | Required                                |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| Dedicated SQL endpoint      | A name of synapse dedicated SQL pool endpoint. In general database server name                                                                                                                                                                                             | Yes                                     |
| SQL pool                    | A name of a dedicated SQL pool. In general database name                                                                                                                                                                                                                      | Yes                                     |
| Credential type             | How guzzle will authenticate with a component of azure synapse analytics. for type Auto mapped, guzzle will auto map the credentials using the given service principle which is specified in azure synapse guzzle compute, for type native, guzzle will use specified credentials | Yes                                     |
| User name                   | The Azure Synapse username.                                                                                                                                                                                                                                                 | Yes, if native credential type selected |
| Password                    | The Azure Synapse password.                                                                                                                                                                                                                                                 | Yes, if native credential type selected |
| Staging data source         | A name of [external data source](https://learn.microsoft.com/en-us/sql/t-sql/statements/create-external-data-source-transact-sql?view=sql-server-ver16&tabs=dedicated), which will be used for stating purpose                                                               | Yes, if native credential type selected |
| External table data source  | A name of [external data source](https://learn.microsoft.com/en-us/sql/t-sql/statements/create-external-data-source-transact-sql?view=sql-server-ver16&tabs=dedicated) of an external table, only required in case of writing into external table                              | No                                      |
| Staging storage account key | Account access key of azure synapse workspace primary storage, only required when credential type is Native and writing into internal table                                                                                                                                 | No                                      |

Credential type Auto-mapped selected
<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/datastores/azure_synapse_native_auto_mapped.png" target="_self" >
  <img width="825" src="/img/docs/how-to-guides/datastores/azure_synapse_native_auto_mapped.png" />
</a>

Credential type Native selected
<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/datastores/azure_synapse_native_native.png" target="_self" >
  <img width="825" src="/img/docs/how-to-guides/datastores/azure_synapse_native_native.png" />
</a>

## Auto-mapped credential type
- Since this datastore is only supported on azure synapse analytics, when configuring azure synapse analytics compute, the guzzle user needs to specify the service principle at azure synapse analytics compute.
- When connecting azure synapse analytics compute to dedicated SQL pool (which can reside in the same workspace or can be at different workspace), in that case, specified service principle should have below access.
    - Proper access to specified SQL pool via IAM.
    - Should be Blob data contributor role on a primary storage account.
    - Proper grants for specified user to access data_source.

## Native credential type
- When connecting azure synapse analytics compute to dedicated SQL pool (which can reside in the same workspace or can be at different workspace), in that case, specified user should have below access.
    - Registered user on the database.
    - Proper grants on specified dedicated SQL pool.
    - Proper grants on data_source.
---
id: snowflake
title: Snowflake
---

[Snowflake](https://www.snowflake.com/en/) is a cloud computing solution that enables data storage, processing, analytic solutions, etc.

:::info
Currently, this datastore is only supported in Ingestion Activity and only supported in Azure databricks.
:::

:::caution
Currently this connector support 36 hours time limit, so if your guzzle job is likely to take 36 hours or more, there are chances that the job will fail.
:::

## Steps to create Datastore for Snowflake

1. Click on the action button (![image alt text](/img/docs/how-to-guides/datastores/server_file_system_0.png)) from the **Datastores **section in Left Navigation and select Snowflake connector. Alternatively, the user can launch from **Create New Datastore **link in the Activity authoring UI or Copy Data tool.

2. Enter the Datastore name for the new datastore and click Ok

3. Update the connection name or leave the default. You can refer to [Connection and Environments ](../connection_and_environment/connection_and_environment) for more details

5. Enter the connection details properties as described below:

| Property       | Description                                                                                                                                                              | Required                                 |
|----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------|
| URL            | Specifies the hostname for your account `account_identifier.snowflakecomputing.com`                                                                                      | Yes                                      |
| Warehouse      | The name of default virtual warehouse.                                                                                                                                    | Yes                                      |
| Database       | The name of database.                                                                                                                                                     | Yes                                      |
| Default Schema | The name of default schema, if guzzle user-specified database object name without schema name then this schema will be used otherwise specified schema name will be used. | No                                       |
| Authentication | Authentication method for how guzzle will connect to snowflake, right now guzzle only support basic authentication.                                                       | Yes                                      |
| Username       | Login name for the Snowflake user.                                                                                                                                        | Yes, if basic authentication is selected |
| Password       | Password for the Snowflake user.                                                                                                                                          | Yes, if basic authentication is selected |


<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/datastores/snowflake_datastore_example.png" target="_self" >
    <img width="825" src="/img/docs/how-to-guides/datastores/snowflake_datastore_example.png" />
</a>

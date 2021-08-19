---
id: rest
title: Rest Api
---

Rest Api is service call where user can access via URI and can gather data from there 

:::note
1. Only Ingestion activity supports File based connectors. 
2. This datastore is available while reading data not for writing data.
:::

# Steps to create Datastore  for Rest

1. Click on the action button (![image alt text](/img/docs/how-to-guides/datastores/server_file_system_0.png)) from the **Datastores **section in Left Navigation and select **Rest **connector. Alternatively user can launch from **Create New Datastore **link in Activity authoring UI or Copy Data tool

2. Enter the Datastore name for the new datastore and click Ok

3. Update the connection name or leave the default. You can refer to [Connection and Environments ](http://http) for more details

4. Enter the additional properties for the Rest API as described below and you can check the connection by clicking Test Connection :

|Property|Description|Required|
|--- |--- |--- |
|HTTP URL|Specify the Http URL where your data lies|Yes|

## Interface for Rest api page

![image alt text](/img/docs/how-to-guides/datastores/rest_1.png)

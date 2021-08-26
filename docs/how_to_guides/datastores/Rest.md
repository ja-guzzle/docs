---
id: rest
title: Rest Api
---

Rest Api is service call where user can access via URI and can gather data from there 

:::note
1. Only Ingestion activity supports File based connectors. 
2. This datastore is available while reading data not for writing data.
:::

# Steps to create Datastore for Rest

1. Click on the action button (![image alt text](/img/docs/how-to-guides/datastores/server_file_system_0.png)) from the **Datastores **section in Left Navigation and select **Rest **connector. Alternatively user can launch from **Create New Datastore **link in Activity authoring UI or Copy Data tool

2. Enter the Datastore name for the new datastore and click Ok

3. Update the connection name or leave the default. You can refer to [Connection and Environments ](https://guzzle.justanalytics.com/docs/how_to_guides/connection_and_environment/connection_and_environment) for more details

4. Enter the additional properties for the Rest API as described below and you can check the connection by clicking Test Connection :

|Property|Description|Required|
|--- |--- |--- |
|HTTP URL|Specify the HTTP URL where your data lies|Yes|
|Basic Authentication|If any authentication for accessing URL than expand this tab, and it includes Username and Password.<br/> Values for username and password can be provided manually or by using Azure Key Vault.|No|
|Request Header|If any request header than expand this tab, and it has header name and value.<br/> Value can be provided manually or by using Azure Key Vault.|No|

## Interface for Rest API page

![image alt text](/img/docs/how-to-guides/datastores/rest_1.jpg)

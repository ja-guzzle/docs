---
id: azure_data_factory
title: Azure Data Factory
---

[Azure Data Factory](https://docs.microsoft.com/en-us/azure/data-factory/) is the platform that solves such data scenarios. It is the cloud-based ETL and data integration service that allows you to create data-driven workflows for orchestrating data movement and transforming data at scale.

Guzzle only supports ADF as an External job. 

## Steps to create Datastore for Azure Data Factory

1. Click on the action button (![image alt text](/img/docs/how-to-guides/datastores/action_button.png)) from the **Datastores **section in Left Navigation and select **Azure Data Factory **connector. Alternatively users can launch from **Create New Datastore **link in Activity authoring UI.

2. Enter the Datastore name for the new datastore and click Ok

3. Update the connection name or leave the default. You can refer to [Connection and Environments ](https://guzzle.justanalytics.com/docs/how_to_guides/connection_and_environment/connection_and_environment) for more details

4. Enter the additional properties for the ADF as described below:

|Property|Description|Required|
|--- |--- |--- |
|Credential Type|Authentication type to use when connecting to ADF.<br/> Following mechanisms are supported:<br/><br/>Service principal : To use Service principal which to access selected container or folder in the storage account. Follow the steps at Register your application with an Azure AD tenant to create Application Registration and capture following information like Application (client) ID, Client secret, and Directory (Tenant) ID.<br/><br/> Also ensure following permission:<br/>**As source:** Grant Execute permission for all parent folders, along with Read permission for the files to copy. Alternatively, in Access control (IAM), grant at least the Storage Blob Data Reader role at container or storage account level.<br/> **As sink(target):** Grant Execute permission for all parents folders, along with Write permission for the sink folders. Alternatively, in Access control (IAM), grant at least the Storage Blob Data Contributor role at container or storage account level.|Yes|
|Client ID|Service principal’s client id|Yes|
|Client Secret|Service principal secret. <br/> For specify the secret following mechanisms are supported:<br/>**Manual :** You have to put plain secret in the field.<br/> **Azure Key Vault :** To use azure key vault users have to specify the key vault name and secret name of the secure Azure key vault instance.|Yes|
|Tenant ID|Directory ID of the service principal|Yes|
|Subscription ID|Users Azure subscription ID|Yes|
|Resource Group Name|Specify the resource group name under which created Azure Data Factory Instance|Yes|
|Factory Name|Specify the name of Data Factory|Yes|


5. Save the Datastore config. Optionally you can also Test the connection. 

## Interface for ADF datastore

![image alt text](/img/docs/how-to-guides/datastores/ADF_1.jpg)


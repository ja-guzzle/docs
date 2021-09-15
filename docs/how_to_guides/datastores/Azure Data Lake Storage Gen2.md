---
id: adls_gen2
title: Azure Data Lake Storage Gen2
---

:::note
Only supported on Databricks compute
:::

[Azure Data Lake Storage Gen2 ](https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-introduction) (ADLS Gen2) is a set of big data analytics capabilities, offered on Azure Blob Storage. ADLS Gen2 allows enterprises to deploy data lake solutions on Azure in order to store petadata bytes of data across many data files.

When we want to read big data such as blob files, log files, IoT data, click streams, large datasets from cloud or write data to cloud we can use this datastore.
This contains folders, which in turn contains data stored as files.

Guzzle’s Ingestion activity supports ADLS Gen2 as both source and sink(target) and allows copy data to/from using storage access keys or service principal. 

## Steps to create Datastore  for ADLS Gen2

1. Click on the action button (![image alt text](/img/docs/how-to-guides/datastores/action_button.png)) from the **Datastores **section in Left Navigation and select **ADLS Gne2 **connector. Alternatively user can launch from **Create New Datastore **link in Activity authoring UI or Copy Data tool

2. Enter the Datastore name for the new datastore and click Ok

3. Update the connection name or leave the default. You can refer to [Connection and Environments ](../connection_and_environment/connection_and_environment) for more details

4. Enter the additional properties for the storage account as described below:

|Property|Description|Required|
|--- |--- |--- |
|Account Name|storage account name|Yes|
|Container name |Name of the ADLS Gen2 Container to connect|Yes|
|Credential Type|Authentication type to use when connecting to ADLS. Two options are provided Service Principal and Access Key. <br/>Following mechanisms are supported:<br/>**Service principal :** To uses Service principal which to access selected container or folder in the storage account. Follow the steps at Register your application with an Azure AD tenant to create Application Registration and capture following information Application (client) ID, Client secret, Directory (Tenant) ID.<br/> Also ensure following permission:<br/> **As source:** Grant Execute permission for all parent folders, along with Read permission for the files to copy. Alternatively, in Access control (IAM), grant at least the Storage Blob Data Reader role at container or storage account level.<br/> **As sink target:** Grant Execute permission for all parents folders, along with Write permission for the sink folders. Alternatively, in Access control (IAM), grant at least the Storage Blob Data Contributor role at container or storage account level.<br/><br/> **Access Key:** To use storage account access keys to access the data. Provide access key from azure portal which is available in storage account.<br/><br/> Recommendation is to use **Service principal.**|Yes|
|Client ID*|Service principal’s client ID|Yes (for Credential type of Service Principal)|
|Client Secret|Service principal secret|Yes (for Credential type of Service Principal)|
|Tenant ID|Directory ID of the service principal|Yes (for Credential type of Service Principal)|
|Access Key|Account access key|Yes (for Credential Type : Access Key)|
|Path|This is the folder path within the ADLS container. You can specify  / (root path) to point to entire container|Yes|



5. Save the Datastore config. Optionally you can also Test the connection. 

## Interface for ADLS Gen2 datastore

**Sample config when using Credential Type as : Service Principal**

<!-- ![image alt text](/img/docs/how-to-guides/datastores/ADLS_1.png) -->
<a href="/img/docs/how-to-guides/datastores/ADLS_1.png" target="_self" >
    <img src="/img/docs/how-to-guides/datastores/ADLS_1.png" />
</a>

**Sample config when using Credential Type as : Access Key**

<!-- ![image alt text](/img/docs/how-to-guides/datastores/ADLS_2.png) -->
<a href="/img/docs/how-to-guides/datastores/ADLS_2.png" target="_self" >
    <img src="/img/docs/how-to-guides/datastores/ADLS_2.png" />
</a>

## Known Limitation

--


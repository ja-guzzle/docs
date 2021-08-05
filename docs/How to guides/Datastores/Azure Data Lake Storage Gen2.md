:::note
Only supported on Databricks compute
:::

[Azure Data Lake Storage Gen2 ](https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-introduction) (ADLS Gen2) is a set of big data analytics capabilities, offered on Azure Blob Storage. ADLS Gen2 allows enterprises to deploy data lake solutions on Azure in order to store petadata bytes of data across a large number of data files.

Guzzle’s Ingestion activity supports ADLS Gen2 as both source and sink < target > and allows copy data to/from using storage access keys or service principal. 

## Steps to create Datastore  for ADLS Gen2

1. Click on the action button (![image alt text](/img/docs/how-to-guides/datastores/action_button.png)) from the **Datastores **section in Left Navigation and select **ADLS Gne2 **connector. Alternatively user can launch from **Create New Datastore **link in Activity authoring UI or Copy Data tool

2. Enter the Datastore name for the new datastore and click Ok

3. Update the connection name or leave the default. You can refer to [Connection and Environments ](http://http) for more details

4. Enter the additional properties for the storage account as described below:

<table>
  <tr>
    <td>Property </td>
    <td>Description</td>
    <td>Required</td>
  </tr>
  <tr>
    <td>Account Name</td>
    <td>< storage account name ></td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Container name</td>
    <td>Name of the ADLS Gen2 Container to connect</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Credential Type</td>
    <td>Authentication type to use when connecting to ADLS. 
Following mechanisms are supported:
Service principal : To uses Service principal which to access selected container or folder in the storage account. Follow the steps at Register your application with an Azure AD tenant to create Application Registration and capture following information:
Application (client) ID, 
Client secret,
Directory (Tenant) ID.
Also ensure following permission:
As source: Grant Execute permission for all  parent folders, along with Read permission for the files to copy. Alternatively, in Access control (IAM), grant at least the Storage Blob Data Reader role at container or storage account level
As sink <target>: Grant Execute permission for all parents folders, along with Write permission for the sink folders. Alternatively, in Access control (IAM), grant at least the Storage Blob Data Contributor role at container or storage account level.
      
Access Key:  To use storage account access keys to access  the data. < provide access key from azure portal. Which is available in storage account -> access keys >
Recommendation is to use service principal</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Client ID*</td>
    <td>Service principal’s client id</td>
    <td>Yes (for Credential type of Service Principal)</td>
  </tr>
  <tr>
    <td>Client Secret</td>
    <td>Service principal secret</td>
    <td>Yes (for Credential type of Service Principal)</td>
  </tr>
  <tr>
    <td>Tenant ID</td>
    <td>Directory id of of the service principal </td>
    <td>Yes (for Credential type of Service Principal)</td>
  </tr>
  <tr>
    <td>Access Key</td>
    <td>Account access key</td>
    <td>Yes (for Credential Type : Access Key)</td>
  </tr>
  <tr>
    <td>Path</td>
    <td>This is the folder path within the ADLS container. You can specify  / (root path) to point to entire container</td>
    <td>Yes</td>
  </tr>
</table>


5. Save the Datastore config. Optionally you can also Test the connection. 

Sample config when using Credential Type as : Service Principal ![image alt text](/img/docs/how-to-guides/datastores/Azure_Data_Lake_Storage_1.png)

Sample config when using Credential Type as : Access Key

![image alt text](/img/docs/how-to-guides/datastores/Azure_Data_Lake_Storage_2.png)

## Known Limitation

--


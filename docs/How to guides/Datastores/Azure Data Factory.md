Azure Data Factory is the platform that solves such data scenarios. It is the cloud-based ETL and data integration service that allows you to create data-driven workflows for orchestrating data movement and transforming data at scale.

Guzzle only supports ADF as an External job. 

## Steps to create Datastore  for Azure Data Factory

1. Click on the action button (![image alt text](/img/docs/how-to-guides/datastores/action_button.png)) from the **Datastores **section in Left Navigation and select **Azure Data Factory **connector. Alternatively users can launch from **Create New Datastore **link in Activity authoring UI.

2. Enter the Datastore name for the new datastore and click Ok

3. Update the connection name or leave the default. You can refer to [Connection and Environments ](http://http) for more details

4. Enter the additional properties for the ADF as described below:

<table>
  <tr>
    <td>Property </td>
    <td>Description</td>
    <td>Required</td>
  </tr>
  <tr>
    <td>Credential Type</td>
    <td>Authentication type to use when connecting to ADF. 
Following mechanisms are supported:
Service principal : To use Service principal which to access selected container or folder in the storage account. Follow the steps at Register your application with an Azure AD tenant to create Application Registration and capture following information:
Application (client) ID 
Client secret
Directory (Tenant) ID
Also ensure following permission:
As source: Grant Execute permission for all  parent folders, along with Read permission for the files to copy. Alternatively, in Access control (IAM), grant at least the Storage Blob Data Reader role at container or storage account level
As sink: Grant Execute permission for all parents folders, along with Write permission for the sink folders. Alternatively, in Access control (IAM), grant at least the Storage Blob Data Contributor role at container or storage account level.</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Client ID</td>
    <td>Service principal’s client id</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Client Secret</td>
    <td>Service principal secret
For specify the secret Following mechanisms are supported:
Manual : you have to put plain secret in the field
Azure Key Vault : To use azure key vault users have to specify the key vault name and secret name of the secure Azure key vault instance. </td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Tenant ID</td>
    <td>Directory id of of the service principal </td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Subscription ID</td>
    <td>Users Azure subscription Id </td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Resource Group Name</td>
    <td>Specify the resource group name under which created Azure Data Factory Instance</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Factory Name</td>
    <td>Specify the name of Data Factory </td>
    <td>Yes</td>
  </tr>
</table>


5. Save the Datastore config. Optionally you can also Test the connection. 


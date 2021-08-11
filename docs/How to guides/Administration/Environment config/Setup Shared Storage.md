
**Applicable when using Azure Databricks as compute**

Guzzle home (also referred as GUZZLE_HOME) stores the binaries and configs on a file system which should be accessible to both the Guzzle VM and the compute where the **activities **will run**. ** Below architecture diagram explains this further 

![image alt text](/img/docs/how-to-guides/administrator/environment-config/setup_shared_storage0.png)

When using Azure Databricks compute for running activities, it is mandatory to enable shared storage using Azure blob storage. A shared storage simply means mounting the same Azure blob storage account on both Guzzle VM and Azure Databricks workspace so that both this component can point to the same GUZZLE_HOME which contains the Guzzle configs, log files, and binaries. 

When you enable shared storage, Guzzle will do a one time copy of configs and binaries in GUZZLE_HOME directory on Guzzle VM (which is located at /guzzle/guzzlehome). to the blob storage. It will also ensure that Azure blob storage is mounted on Guzzle VM using [Blob fuse](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-how-to-mount-container-linux) and automatically mount and unmount when the Guzzle services  or Guzzle VM is restarted. 

Similarly the Azure blob storage container is also mounted on Azure Databricks workspace by running "Setup Workspace" wizard on compute UI

:::note 
Once shared storage is enabled, you will not be able to disable it.. 
:::

## Steps to Enable Shared Storage 

1. Go to the Admin menu from the top navigation bar.

2. Navigate to Environment-> Shared Storage and click on "Enable" 

3. Enter following configuration details:

![image alt text](/img/docs/how-to-guides/administrator/environment-config/setup_shared_storage1.png)

<table>
  <tr>
    <td>Property </td>
    <td>Description</td>
    <td>Default Value</td>
    <td>Required</td>
  </tr>
  <tr>
    <td>Account Name</td>
    <td>Specify the Azure Storage Account Name. </td>
    <td>None</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Container</td>
    <td>Specify the Azure storage container name</td>
    <td>None</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Access Key</td>
    <td>Manual: Enter the storage storage access key.
Key Vault: Specify the Keyvault name and Secret</td>
    <td>None</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Container Directory</td>
    <td>Specify directory inside the container where GUZZLE_HOME has to be setup
You can specify / (or root directory) if the GUZZLE_HOME  has to be setup in the root directory of the container</td>
    <td>None</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Force Clean</td>
    <td>You can check this option to cleanup existing files in the container before initializing the GUZZLE_HOME
If kept unchecked, guzzle_will merge the files of GUZZLE_HOME with the existing ones in that directory</td>
    <td>False</td>
    <td>No</td>
  </tr>
  <tr>
    <td>Databricks Secret</td>
    <td>Below information is utilized when setting up Databricks Workspace to mount the Azure storage account. The details of setting up Databricks Workspace is covered  here.
      
Secret Scope: This is the secret scope defined in databricks workspace.
      
Secret Key: This is the secret containing the access key for the storage account that is to be used for shared storage.
      
Refer to this articles to create Databricks Secret Scope and secrets</td>
    <td>None</td>
    <td>No</td>
  </tr>
</table>


Guzzle will validate the shared storage configuration ensuring the storage account, container, access key, and folder are valid before enabling the shared storage.

## Steps to edit the Shared Storage configuration

Guzzle allows you to update Shared storage configuration when there is a change in the access keys, or if a storage account, container or directory.

:::note 
When there is change in storage account, container or folder name, Guzzle will copy the configs, logs and Guzzle binaries  from the existing storage account /container container / folder to the new one. This process can take many minutes depending on the size of log files and config directories. 
:::

Below are the steps to edit the existing Shared Storage configuration: 

1. Go to the Admin menu from the top navigation bar.

2. Navigate to Environment-> Shared Storage 

3. Update the required configuration details

4. Click on Update button

< No need changes >

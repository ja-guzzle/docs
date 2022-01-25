---
id: setup_shared_storage
title: Setup Shared Storage
---

**Applicable when using Azure Databricks as compute**

Guzzle home (also referred as GUZZLE_HOME) is stores the binaries, configs and logs on a file system which should be accessible to both the Guzzle VM and the `compute` where the **activities ** will run. Below architecture diagram explains this further 

<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/administrator/environment-config/setup_shared_storage0.png" target="_self" >
    <img src="/img/docs/how-to-guides/administrator/environment-config/setup_shared_storage0.png" />
</a>

When using Azure Databricks `compute` for running activities, it is mandatory to enable shared storage using Azure blob storage. A shared storage simply means mounting the same Azure blob storage account on both Guzzle VM and Azure Databricks Workspace so that both this component can point to the same GUZZLE_HOME which contains the Guzzle configs, logs, and binaries. 

The Guzzle Azure Marketplace VM by default hosts GUZZLE_HOME on local folder in VM at location /guzzle/guzzlehome. When enabling the shared storage first time, Guzzle will do a one time copy of configs, binaries and logs from this directory to the blob storage. It will also mount the Azure blob storage is mounted on Guzzle VM using [Blob fuse](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-how-to-mount-container-linux) and automatically mount and unmount when the Guzzle services on Guzzle VM is restarted. 

Similarly, the Azure blob storage container is also mounted on Azure Databricks workspace by running "Setup Workspace" wizard from `compute` UI

:::note 
Once shared storage is enabled, you will not be able to disable it anymore.
::: 

## Steps to Enable Shared Storage 

1. Go to the **Manage** menu from the top navigation bar.

2. Navigate to Environment Config -> Shared Storage and click on "Enable".

3. Enter following configuration details:

## Properties to Setup Shared Storage

|Property|Description|Default Value|Required|
|--- |--- |--- |--- |
|Account Name|Specify the Azure Storage Account Name.|None|Yes|
|Container|Specify the Azure storage container name|None|Yes|
|Authentication Type|Select the Authentication Type: <br/>1. Access Key <br/>- If this option is selected then access key of storage account is required.<br/>2. Service Principle <br/>- If this option is selected then tenant id, client id and client secret is required|None|Yes|
|Access Key|Specify the access key of storage account.<br/> For specify access key the following options are available:<br/>1. **Manual**: Provide access key directly. <br/>2. **Azure Key Vault**: For this user have to integrate Key Vault with Guzzle for that visit **[here](../../features/how_key_vault_is_used_to_integrate_guzzle)**. Give value of the key vault name and secret name where access key is stored in Azure Key Vault instance.|None|Yes|
|Tenant Id|Specify the service principle tenant id|None|Yes|
|Client id|Specify the service principle client id|None|Yes|
|Client Secret|Specify the client secret.<br/> For specify client secret the following options are available:<br/>1. **Manual**: Provide client secret directly. <br/>2. **Azure Key Vault**: To use Azure key vault feature user have to integrate Key Vault with Guzzle for that visit **[here](../../features/how_key_vault_is_used_to_integrate_guzzle)**. Give value of the key vault name and secret name where client secret is stored in Azure Key Vault instance.|None|Yes|
|Container Directory|Specify directory inside the container where GUZZLE_HOME has to be setup. <br/> You can specify / (or root directory) if the GUZZLE_HOME has to be setup in the root directory of the container|None|Yes|
|Force Clean|You can check this option to clean up existing files in the container before initializing the GUZZLE_HOME. <br/> If kept unchecked, guzzle_will merge the files of GUZZLE_HOME with the existing ones in that directory|False|No|
|Databricks Secret|Below information is utilized when setting up Databricks Workspace to mount the Azure storage account. The details of setting up Databricks <br/>Workspace is covered here.<br/><br/> Secret Scope: This is the secret scope defined in Databricks workspace.<br /><br/> Secret Key: This is the secret containing the access key for the storage account that is to be used for shared storage.<br/><br/> Refer to these articles to create Databricks Secret Scope and secrets. <br/><br/> How to create secret scope is defined **[here](../../features/how_key_vault_is_used_to_integrate_guzzle)**.|None|No|


Guzzle will validate the shared storage configuration ensuring the storage account, container, access key, and folder are valid before enabling the shared storage.

### Setup Shared Storage using Service Principle

<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/administrator/environment-config/setup_shared_storage_1.png" target="_self" >
    <img src="/img/docs/how-to-guides/administrator/environment-config/setup_shared_storage_1.png" />
</a>

### Setup Shared Storage using Access Key

<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/administrator/environment-config/setup_shared_storage_2.png" target="_self" >
    <img src="/img/docs/how-to-guides/administrator/environment-config/setup_shared_storage_2.png" />
</a>

## Steps to edit the Shared Storage configuration

Guzzle allows you to update Shared storage configuration to update any change in the access keys.

:::note 
1. At this point Guzzle does not allow changing account, container or directory. 
2. If there is need to change storage account, container or folder name, you will need to copy the configs, logs and Guzzle binaries from the existing storage account /container / folder to the new one. Post this update the configs in /guzzle/API/guzzle-api.yml
3. When setting up Shared storage or updating, do ensure that there are no ongoing jobs
:::

Below are the steps to edit the existing Shared Storage configuration: 

1. Go to the **Manage** menu from the top navigation bar.

2. Navigate to Environment Config -> Shared Storage 

3. Update the required configuration details

4. Click on Update button

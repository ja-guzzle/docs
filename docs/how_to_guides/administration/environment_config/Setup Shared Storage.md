---
id: setup_shared_storage
title: Shared Storage
---

Guzzle Shared storage is used to store guzzle jars, third-party dependency jars and extra deployment specific jars in Azure storage account. This jars will be used when the job is triggered on remote cluster.

:::note
Shared storage would be configured when using remote cluster to run Guzzle jobs.
:::

## Network Architecture for Guzzle on Azure

<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/administrator/environment-config/guzzle_network_artitecture.png" target="_self" >
    <img src="/img/docs/how-to-guides/administrator/environment-config/guzzle_network_artitecture.png" />
</a>

When using remote compute for running activities, it is mandatory to give all configuration using Azure blob storage. A shared storage simply means storing guzzle jars, third-party dependency jars and extra deployment specific jars in Azure storage account. And the job configs and logs will be saved on local Guzzle VM.

When jobs is triggered on remote cluster Guzzle API will be used to read and write guzzle logs. And the job configs will be referred using Guzzle API. This stored jars will be installed on remote cluster and will use to run the jobs when the job is triggered on remote cluster from Guzzle. 

## Setup Shared Storage

1. Go to the **Manage** menu from the top navigation bar

2. Navigate to Environment Config -> Shared Storage

3. Enter following configuration details:

## Properties to setup Shared Storage

|Property|Description|Default Value|Required|
|--- |--- |--- |--- |
|Account Name|Specify the Azure Storage Account Name.|None|Yes|
|Container|Specify the Azure storage container name|None|Yes|
|Authentication Type|Select the Authentication Type: <br/>1. Access Key <br/>- If this option is selected then access key of storage account is required.<br/>2. Service Principle <br/>- If this option is selected then tenant id, client id and client secret is required|None|Yes|
|Access Key|Specify the access key of storage account.<br/> For specify access key the following options are available:<br/>1. **Manual**: Provide access key directly. <br/>2. **Azure Key Vault**: For this user have to integrate Key Vault with Guzzle for that visit **[here](../../features/how_key_vault_is_used_to_integrate_guzzle)**. Give value of the key vault name and secret name where access key is stored in Azure Key Vault instance.|None|Yes|
|Tenant Id|Specify the service principle tenant id|None|Yes|
|Client id|Specify the service principle client id|None|Yes|
|Client Secret|Specify the client secret.<br/> For specify client secret the following options are available:<br/>1. **Manual**: Provide client secret directly. <br/>2. **Azure Key Vault**: To use Azure key vault feature user have to integrate Key Vault with Guzzle for that visit **[here](../../features/how_key_vault_is_used_to_integrate_guzzle)**. Give value of the key vault name and secret name where client secret is stored in Azure Key Vault instance.|None|Yes|
|Container Directory|Specify directory inside the container where jars will be saved. <br/> You can specify / (or root directory) if you want to store on root|None|Yes|
|Databricks Secret|Give below information for sharing the jars with remote cluster from storage account. <br/>**Secret Scope:** This is the secret scope defined in Databricks workspace.<br/> **Secret Key:** This is the secret containing the access key for the storage account that is to be used for shared storage.<br/><br/> Refer to these articles to create keyvault backed Databricks Secret Scope. <br/> How to create secret scope is defined **[here](../../features/how_key_vault_is_used_to_integrate_guzzle)**.|None|No|
|Sync Storage |This button will be used to sync Guzzle jars, third party dependency jars and extra deployment specific jars to the storage account from Guzzle VM|||
|Update| This button will be used to update all the properties|||
|Cancel| To cancel the updated values in property|||

Guzzle will validate the shared storage configuration ensuring the storage account, container, access key, and folder are valid before updating the shared storage information.

As soon as user press the update button, it will verify the credentials and stored in guzzle-api.yml file.

```
storage:
  type: "local"
  properties:
    auth_type: "access_key"
    access_key: "XXXXXX"
    container_directory: "/"
    container_name: "XXXXXXXXX"
    account_name: "XXXXX"
    databricks_secret:
      key: "XXXXX"
      scope: "XXXX"
```

### Interface of Shared Storage using Access Key

<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/administrator/environment-config/shared_storage_1.png" target="_self" >
    <img src="/img/docs/how-to-guides/administrator/environment-config/shared_storage_1.png" />
</a>

### Interface of Shared Storage using Service Principle

<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/administrator/environment-config/shared_storage_2.png" target="_self" >
    <img src="/img/docs/how-to-guides/administrator/environment-config/shared_storage_2.png" />
</a>


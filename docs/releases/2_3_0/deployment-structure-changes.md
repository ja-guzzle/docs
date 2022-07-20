# Deployment structure changes (Guzzle 2.3.0)
As per new deployment approach, guzzle reduces scope of shared storage just to keep guzzle module and third-party dependency jar files which can be referenced by activities running in the remote clusters. Guzzle API must be accessible from the remote clusters where guzzle activities are running. Following are the high-level changes -

- Shared storage account is not needed to be mounted on Guzzle VM or remote spark clusters
- Guzzle keeps all configs and logs on local file system of the Guzzle VM. Activities running in remote spark clusters use Guzzle APIs to read necessary configs and to write activity logs
- **GUZZLE_HOME** environment variable is not needed to be defined in Guzzle VM. All the directories from previous **GUZZLE_HOME** are now referred from **GUZZLE_PRODUCT_HOME**
- Guzzle config file **guzzle.yml** is removed. All the config properties from **guzzle.yml** are referred from **guzzle-api.yml**
- When shared storage is enabled - guzzle upgrade process will sync guzzle module and third-party dependency jar files every time guzzle is upgraded. Also there is an option to sync jar files with storage account in Guzzle UI
- Setup Workspace button from databricks compute editor is removed

### Automatic upgrade steps
- Move directories bin, conf, libs, logs, scripts and test-data from current **GUZZLE_HOME** to **GUZZLE_PRODUCT_HOME**
- Remove version.txt file from current **GUZZLE_HOME**
- Move config properties default_spark, java, guzzle and api from **guzzle.yml** to **guzzle-api.yml**
- Remove guzzle.yml and passphrase files from conf directory
- Remove config property **dbfs_guzzle_dir** from azure databricks compute configs
- Remove config property **guzzle_storage_linked_service** from azure synapse spark compute configs
- Remove **mount** properties of **storage** setting specified in **guzzle-api.yml**
- Add property `deployment_scheme: azure` under **guzzle** setting in **guzzle-api.yml**

### Post upgrade manual setup steps
- Ensure that Guzzle API is accessible from the remote spark cluster
- Navigate to **Manage > Environment Config > Api Settings** in Guzzle UI and specify Guzzle API URL, Key vault name and Secret name which is holding value of the passphrase
- Unmount guzzle shared storage account from Guzzle VM **[Optional]**
- Remove **GUZZLE_HOME** environment variable from guzzle service (/lib/systemd/system/guzzle.service) **[Optional]**

#### When using Azure databricks clusters -
- In databricks analytics clusters - specify following spark config which will be used as credential to refer and install jars from the shared storage (secret value should be access key of the storage account) -  
  `fs.azure.account.key.[storage-account-name].dfs.core.windows.net {{secrets/[secret-scope]/[secret-name]}}`
- Unmount guzzle shared storage account from databricks workspace **[Optional]**
- **GUZZLE_HOME** environment variable is not needed for databricks analytics clusters and can be removed **[Optional]**

#### When using Azure synapse spark clusters -
- Linked service for guzzle shared storage can be removed from synapse workspace **[Optional]**

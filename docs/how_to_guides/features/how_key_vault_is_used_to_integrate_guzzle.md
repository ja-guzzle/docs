---
id: how_key_vault_is_used_to_integrate_guzzle
title: How key vault is used to integrate Guzzle
---

### how to integrate key vault with Guzzle

Azure Key Vault is a cloud-based service that helps to store cryptographic keys and secrets used by apps and services. 

Guzzle has a feature to integrate Azure Key Vault with Guzzle Virtual Machine. This allows users to use secrets in Guzzle in different places like to accesse secrets of database or in computes. There are some requirements for this feature

Prerequisite: 
1. Guzzle VM
2. Databricks

After creating these resources do the following steps: 

1. In created Guzzle VM enables manage identity by selecting identity option from the side menu from Azure UI and after enabling, copy that object id.

2. Create Key Vault in the resource group, then permit the virtual machine from access policies from the side tab of Azure UI.

3. In access policies click on Add Access Policy button to add access to the virtual machine. After clicking on this button below page will renderd.

<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/features/kv_2.png" target="_self" >
    <img width="1000" src="/img/docs/how-to-guides/features/kv_2.png"/>
</a>

4. In configure from template some options are available so user can select directly from their. Or user can select permissions manually for VM and select principal of Guzzle VM.

5. Then after selecting add it and save it. For more information visit [here](https://docs.microsoft.com/en-us/azure/active-directory/managed-identities-azure-resources/tutorial-windows-vm-access-nonaad).
 

### For creating Secret Scope  

1. For creating secret scope Azure Databricks must be created.

2. After creating the key vault and giving access to VM, create databricks secret scope using created key vault by going to URL like this https://&lt;databricks-instance&gt;#secrets/createScope. databricks-instance = Your databricks instance id. Then below page will be rendered.

<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/features/kv_1.png" target="_self" >
    <img width="1000" src="/img/docs/how-to-guides/features/kv_1.png"/>
</a> 

3. On this page, enter the name of the secret scope. Secret scope names are case insensitive. And use the name of secret scope as the name of the key vault. Then use the Manage Principal drop-down to specify whether All Users have MANAGE permission for this secret scope or only the Creator of the secret scope.

4. Enter the DNS Name (for example, &lt;https://keyvault_name.vault.azure.net/&gt;) and Resource ID, for example: 
        
        /subscriptions/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/resourcegroups/databricks-rg/providers/Microsoft.KeyVault/vaults/databricksKV

    These properties are available from the Properties tab of an Azure Key Vault in your Azure portal.

5. Then click on create button to create secret scope and save the scope name for future use. For more information visit the official site for [creating secret scope.](https://docs.microsoft.com/en-us/azure/databricks/security/secrets/secret-scopes)


### Where Databricks secret scope is used and the key vault is used in Guzzle?

|Databricks Secret Scope|Key Vault|
|---------------------- |-------- |
|When user ran jobs in databricks cluster it will take secrets value using databricks key vault instance.| When the secret value is required inside API, Batch, and Pipeline Execution it will use Microsoft key vault API to fetch the secret value.|

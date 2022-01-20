---
id: how_key_vault_is_used_to_integrate_guzzle
title: Use Azure Key Vault with Guzzle
---


## Azure Key Vault

[Azure Key Vault](https://docs.microsoft.com/en-us/azure/key-vault/general/overview) is a cloud-based service that helps to store cryptographic keys and secrets used by apps and services. 
It is centralizing storage of application secrets that allows user to control their distribution.

## Integrate key vault with Guzzle

When using Key Vault, Guzzle no longer need to store secrets and passwords value in application. User can configure Key Vault name and Secret key instead of native secrets and password in Guzzle.
Azure key vault requires proper authentication and authorization to get access of secrets. Guzzle uses the managed identity to access Azure Key Vault resource.

### Prerequisite:
1. Guzzle VM
2. User-Assigned Managed Identity
3. Azure Key Vault
4. Databricks Workspace

### User-Assigned Managed Identity: 

1. Create user-assigned managed identity in resource group by click on `+Create` button. 
2. Assign a user-assigned managed identity to Guzzle VM by navigating to the Guzzle VM and click Identity, User assigned and then `+Add`. for more detailed steps click [here](https://docs.microsoft.com/en-us/azure/active-directory/managed-identities-azure-resources/qs-configure-portal-windows-vm#assign-a-user-assigned-managed-identity-to-an-existing-vm)

### Azure Key Vault:

1. Create azure key vault in resource group by click on `+Create` button.
2. Add Access Policy for user-assigned managed identity and databricks workspace by navigating to Azure Key Vault and click on Access Policy, `+ Add Access Policy`.
<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/features/kv_create_access_policy.png" target="_self" >
   <img width="1000" src="/img/docs/how-to-guides/features/kv_create_access_policy.png"/>
</a>
4. Select Configure from template as Secret Management and Select user-assigned managed identity as Principle click on `Add` to create access policy.
5. Do same thing for AzureDatabricks principle.
<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/features/kv_access_policies.png" target="_self" >
   <img width="1000" src="/img/docs/how-to-guides/features/kv_access_policies.png"/>
</a>

### Databricks Workspace

1. Create Databricks Workspace in resource group by click on `+Create` button.
2. After that we create an Azure Key Vault-backed secret scope using the UI.
3. Go to `https://<databricks-instance>#secrets/createScope`. replace databricks-instance with your databricks instance url.

<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/features/kv_db_workspace_scope.png" target="_self" >
    <img width="1000" src="/img/docs/how-to-guides/features/kv_db_workspace_scope.png"/>
</a> 

4. Enter azure key vault name in scope name field. Scope name must be same as key vault name.
5. Enter the DNS Name and Resource ID of Key Vault. These properties you will find by navigating to Azure Key Vault and click on Properties.
6. Click `Create` button to create secret scope. For more information visit the [databricks create secret scope](https://docs.microsoft.com/en-us/azure/databricks/security/secrets/secret-scopes#--create-an-azure-key-vault-backed-secret-scope) documentation.


## Azure Key Vault vs Databricks secret scope use: 


### Azure Key Vault
When the secret value is required inside API, Batch, and Pipeline Execution it will use Microsoft Azure Key Vault API to fetch the secret value.

### Databricks Secret Scope
When jobs in running in databricks cluster and requires secrets value, it will get it using databricks key vault instance.
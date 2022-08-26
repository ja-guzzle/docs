---
id: api_settings
title: Api Settings
---


Using API settings service, Guzzle can pass the API URL of guzzle and, the keyvault and secret name of passphrase to the remote cluster.
Using this passphrase, Guzzle is decrypting the encrypted temporary API token to access guzzle API's, and it is also used to decrypt the credentials of datastore.

## Setup API Settings

1. Go to the **Manage** menu from the top navigation bar

2. Navigate to Environment Config -> Api Settings

3. Enter following configuration details:

## Properties to set up Api Settings

|Property|Description|Default Value|Required|
|--- |--- |--- |--- |
|URL| Specify the API URL of Guzzle|NULL|Yes|
|Key vault name|Specify the key vault name in which passphrase value is stored|NULL|Yes|
|Secret name|Specify the secret name in which passphrase value is stored|NULL|Yes|
|Username for scheduled job|Select username for scheduled job|Active username|No|
|Api key expiry time(Milliseconds)|Specify internal api key expiration time|43200000|Yes|
|Update|This button will update Api settings configs into guzzle-api.yml file|||
|Sync passphrase|On clicking this button, passphrase from Guzzle VM will be synced to provided keyvault and secret name|||
|Cancel| To cancel the updated values in property|||


On clicking save button all this properties will be saved on guzzle-api.yml file.

```
api:
  url: "https://XXXXX.com"
  kv_passphrase:
    keyvault_name: "XXXXX"
    secret: "XXXX"
  schedule_user_id: 1
  api_key_expiry_time: 43200000
```

### Interface of Api Settings page

<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/administrator/environment-config/api_settings_0.png" target="_self" >
    <img src="/img/docs/how-to-guides/administrator/environment-config/api_settings_0.png" />
</a>
---
id: jwt
title: JWT
---
JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. So, for authentication purposes **Guzzle** uses JSON web token signature encryption.

Guzzle will generate a encrypted token on User login. Generated tokens have 864000000 seconds default expiration time limit but, Users can  set expiration time for Json web tokens. For update expiration time you can follow below steps :

1 : Goto **Manage** from top navigation bar

2 : Goto Maintenance and click on JWT

3 : Enter following configuration details : 

|Properties|Description|Default Value|
|--- |--- |--- |
|Passphrase for encrypting JWT, GIT and SSO access token. <br/> User can choose Manual or Azure Key vault|Guzzle will generate JSON web token(Secret Key) to authenticate user. <br/>Specify the access token for GIT or SSO <br/>For specify access token the following options are available:<br/>1. **Manual**: Provide token directly. <br/>2. **Azure Key Vault**: To use Azure key vault feature user have to integrate Key Vault with Guzzle for that visit **[here](../../features/how_key_vault_is_used_to_integrate_guzzle)**. Give value of the key vault name and secret name where token is stored in Azure Key Vault instance. |&lt; encrypted token in password form &gt;|
|Expiration time|Guzzle generated JWT is valid through given Expiration Time|864000000|

4 : Click on the Update

## Interface of JWT page is 

<!-- ![image alt text](/img/docs/how-to-guides/administrator/maintenance/jwt_1.jpg) -->
<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/administrator/maintenance/jwt_1.png" target="_self" >
    <img width="1000" src="/img/docs/how-to-guides/administrator/maintenance/jwt_1.png" />
</a>
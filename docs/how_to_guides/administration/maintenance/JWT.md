---
id: jwt
title: JWT
---
JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. So, for authentication purposes **Guzzle** uses JSON web token signature encryption.

Guzzle will generate a encrypted token on User login. Generated tokens have 864000000 seconds default expiration time limit but, Users can  set expiration time for Json web tokens. For update expiration time you can follow below steps :

1 : Goto **Manage** from top navigation bar

2 : Goto Maintenance and click on JWT

3 : Enter following configuration details : 

|Properties|Default Value|Description|
|--- |--- |--- |
|Passphrase for encrypting JWT, GIT and SSO access token. <br/> User can choose Manual or Azure Key vault|&lt; encrypted token in password form &gt;|Guzzle will generate JSON web token(Secret Key) to authenticate user|
|Expiration time|864000000|Guzzle generated JWT is valid through given Expiration Time|
|Key Vault Name (If Key Vault is chosen)||Name of Key vault where secret is stored.|
|Secret Name (If Key Vault is chosen)||Name of secret where token is stored.|

4 : Click on the Update

## Interface of JWT page is 

<!-- ![image alt text](/img/docs/how-to-guides/administrator/maintenance/jwt_1.jpg) -->
<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/administrator/maintenance/jwt_1.png" target="_self" >
    <img width="1000" src="/img/docs/how-to-guides/administrator/maintenance/jwt_1.png" />
</a>
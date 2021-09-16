---
id: azure_single_sign_on
title: Azure Single Sign On
---

Guzzle provides support for configuring Azure Active Directory (AAD) single sign-on (SSO) to allow AAD users to login into Guzzle. Below are the steps to configure Azure Active Directory single sign-on:

## Configuration on Azure Active Directory

To use create a new one that shall be used by Guzzle to perform SSO- [for more](https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app) 
1. Create new app registration 
2. Generate a secret with appropriate expiry date
3. Add following API permissions
    1. Microsoft Graph
    2. Azure DevOps (This is required if you plan to enable Azure Devops git integration.)
    3. Azure Service Management (for getting user profile details)
4. In Authentication tab add following:
    1. add redirect URL (which is provided by Guzzle)
      For redirect URL guzzle follows below rules,
      http://&ltdomain of guzzle app&gt/oauth/microsoft. 
    2. Only Single tenant is supported

<!-- ![image alt text](/img/docs/how-to-guides/administrator/security/sso0.png) -->
<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/administrator/security/sso0.png" target="_self" >
    <img width="1000" src="/img/docs/how-to-guides/administrator/security/sso0.png" />
</a>

:::note
You can also use existing App registration in AAD and add the redirect URL of the Guzzle instance you are integrating. However, as a best practice, each Guzzle instance should have its own App registration for better segregation
:::


Guzzle internally uses below scopes for Azure Active Directory single sign-on:

|Scopes|Purpose|
|--- |--- |
|499b84ac-1321-427f-aa17-267ca6975798/user_impersonation<br/>(Azure DevOps)|Guzzle create Access token for azure DevOps when users are logged in to achieve this user have to give azure devops scope to Azure Active Directory SSO.|
|OpenID|To retrieve email|
|profile|To retrieve username|
|offline_access|To retrieve refresh token|
|https://management.azure.com/user_impersonation|To retrieve user profile|


## Enabling Azure SSO in Guzzle

Step 1. Go to **Manage** from the top navigation bar.

Step 2. Go to Security from the sidebar

Step 3. Click on Azure Single Sign On

Step 4. Click on Enable to enable SSO

<!-- ![image alt text](/img/docs/how-to-guides/administrator/security/sso1.png) -->
<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/administrator/security/sso1.png" target="_self" >
    <img width="1000" src="/img/docs/how-to-guides/administrator/security/sso1.png" />
</a>


Step 5 : Enter all below necessary details 

1. Client Id            < ID of client >

2. Client Secret        < You can give client secret as manual or by providing key vault name and secret name >

3. Tenant Id            < Tenant ID >

4. Redirect URI         < URL to which you have to redirect when Guzzle will open. >

Step 6 : Click on Save  < To save this properties click on save. >

Step 7 : Create User 

1. Once user enabled Single Sign-on User have to create their profile in guzzle as well. 

2. Click on Users which is Under **Manage** Settings Security tab

3. Click on create user

4. Enter all valid necessary details

5. Click on Create

<!-- ![image alt text](/img/docs/how-to-guides/administrator/security/sso2.gif) -->
<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/administrator/security/sso2.gif" target="_self" >
    <img width="1000" src="/img/docs/how-to-guides/administrator/security/sso2.gif" />
</a>

:::note
Once SSO is enabled, the native login gets disabled. User can only log in via SSO
:::
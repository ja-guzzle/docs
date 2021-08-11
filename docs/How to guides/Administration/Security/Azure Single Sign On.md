
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

![image alt text](/img/docs/how-to-guides/administrator/security/sso0.png)

:::note
You can also use existing App registration in AAD and add the redirect URL of the Guzzle instance you are integrating. However as  a best practice, each Guzzle instance should have its own App registration for better segregation
:::


Guzzle internally uses below scopes for Azure Active Directory single sign-on:
<table>
  <tr>
    <td>Scopes</td>
    <td>Purpose</td>
  </tr>
  <tr>
    <td>499b84ac-1321-427f-aa17-267ca6975798/user_impersonation
(Azure DevOps)</td>
    <td>Guzzle create Access token for azure devops when users are logged in to achieve this user have to give azure devops scope to Azure Active Directory sso.</td>
  </tr>
  <tr>
    <td>openid</td>
    <td>To retrieve email</td>
  </tr>
  <tr>
    <td>profile</td>
    <td>To retrieve username</td>
  </tr>
  <tr>
    <td>offline_access </td>
    <td>To retrieve refresh token</td>
  </tr>
  <tr>
    <td>https://management.azure.com/user_impersonation</td>
    <td>To retrieve user profile</td>
  </tr>
</table>


## Enabling Azure SSO in Guzzle

Step 1. Go to Admin from the top navigation bar.

Step 2. Go to Security from  the sidebar

Step 3. Click on Azure Single Sign On

Step 4. Click on Enable to enable SSO

![image alt text](/img/docs/how-to-guides/administrator/security/sso1.png)

Step 5 : Enter all below necessary details 

1. Client Id            < Id of client >

2. Client Secret        < You can give client secret as manual or by providing key vault name and secret name >

3. Tenant Id            < Tenant Id >

4. Redirect URI         < Url to which you have to redirect when Guzzle will open. >

Step 6 : Click on Save  < To save this properties click on save. >

Step 7 : Create User 

1. Once user enabled Single Sign-on User have to create their profile in guzzle as well. 

2. Click on Users which is Under Admin Settings Security tab

3. Click on create user

4. Enter all valid necessary details

5. Click on Create

![image alt text](/img/docs/how-to-guides/administrator/security/sso2.gif)

:::note
Once SSO is enabled, the native login gets disabled. User can only login via SSO
:::
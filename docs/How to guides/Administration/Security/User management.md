- User can see total numbers of users from Admin/Security path and if you want to create you can create from there clicking on create user button.
	 - also can manage users like edit or delete user.
	 - If you create user Guzzle will ask some properties like First Name, Last Name, Username, Email and Role.

Guzzle provides two types of Authentication namely:

1. Native users: Here the user 

2. [Azure Active Directory SSO](/docs/How to guides/Administration/Security/Azure%Single%Sign%On). We can add new users and consider single sign on with azure. 

## Users Maintenance

By navigating Admin tab and than to Security -> Users.
User can see list of users and from them admin can manage user by esiting and deleting it.
 
Interface of Users list and how to manage is below 

![image alt text](/img/docs/how-to-guides/administrator/security/manage_users_1.jpg)

## Create Users

Below are the steps to create new user 

1. Go to Admin menu from top navigation bar

2. Navigate Security -> Users

3. Click on the "Create Users" button to create a new user. Click on Edit icon to edit existing user and Delete icon to delete existing users

4. Provide below details and click "Create" or “Update” button

|Property|Description|
|--- |--- |
|First Name|First name of the user|
|Last Name|Last name of the user|
|Username|This is the user name that shall be used for login into Guzzle. For Azure SSO this should be AAD user name which generally is the email address (also referred as user principal name)|
|Password (only applies for Native user)|The password of the user|
|Email|This is the email of the native user. For Azure SSO this field is automatically populated from username|
|Security Role|Choose one or more roles: There are three roles Data Analytics, Operator and Admin which is describe below|


:::note
It’s not possible to convert the native user to External (also referred as SSO) user. The only way to achieve this by deleting existing native user and re-creating it as external user
:::

## Guzzle Roles

1. Data Analyst - Can view guzzle jobs (readonly) and view Monitor UI and job logs

2. Operator - Data Analyst + can run the jobs, edit env files [connection details]

3. Admin - + Amend /create users ; edit job configs


Some of the features are not applicable any more (atlas and file templates)


---
id: user_management
title: User Management
---

- User can see total numbers of users from **Manage/Security** path and if they want to create they can create from there clicking on create user button.
	 - Also, they can manage users like edit or delete users.
	 - If you create user Guzzle will ask some properties like First Name, Last Name, Username, Email and Role.

Guzzle provides two types of Authentication namely:

1. Native users: Here the user. 

2. [Azure Active Directory SSO](azure_single_sign_on). We can add new users and consider single sign on with azure. 



## Users Maintenance

By navigating to **Manage** tab and then to Security → Users.
User can see list of users and from their admin can manage user by editing and deleting it.
 
Interface of Users list and how to manage is below 

<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/administrator/security/manage_users_1.jpg" target="_self" >
    <img width="1000" src="/img/docs/how-to-guides/administrator/security/manage_users_1.jpg" />
</a>

## Create Users

Below are the steps to create new user 

1. Go to **Manage** menu from top navigation bar

2. Navigate Security → Users

3. Click on the "Create Users" button to create a new user. Click on Edit icon to edit existing user and Delete icon to delete existing users

4. Provide below details and click "Create" or “Update” button

|Property| Description                                                                                                                                                                              |
|--- |------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|First Name| First name of the user                                                                                                                                                                   |
|Last Name| Last name of the user                                                                                                                                                                    |
|Username| This is the username that shall be used for login into Guzzle. For Azure SSO this should be AAD user name which generally is the email address (also referred to as user principal name) |
|Password| The password of the user <br/> - only applies for Native users                                                                                                                           |
|Email | This is the email of the native user. For Azure SSO this field is automatically populated from username <br/> - This field is not applicable for external users                          |
|Security Role| Choose one or more roles: There are four roles Reader, Operator, Contributor and Admin which is described below                                                                          |


:::note
It’s not possible to convert the native user to External (also referred as SSO) user. The only way to achieve this by deleting existing native user and re-creating it as external user
:::

## Guzzle Roles

1. Reader — Users with this role can view guzzle jobs (read-only) and monitoring roles. They can not run anything, preview anything or test any connections.

2. Operator — Users with this role can do what reader role can do and additionally they can run the jobs.

3. Contributor — Users with this role can do what operator role can do and additionally they can edit the configs including on git, publish to default and also change physical endpoint, environment and computes.

4. Admin — User with this role can do what contributor can do and also they can manage all items in Admin section and setup git-config.

For more information for guzzle roles visit this [excel sheet.](/documents/releases/2_0_8/guzzle_roles_2.0.8.xlsx)

Some features are not applicable any more (atlas and file templates).


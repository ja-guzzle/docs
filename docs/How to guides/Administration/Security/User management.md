
 < - You can view total numbers of users from Admin/Security path and if you want to create you can create from there clicking on create user button.
	 - You can manage users like edit or delete user.
	 - If you create user Guzzle will ask some properties like First Name, Last Name, Username, Email and Role. >

Guzzle provides two types of Authentication namely:

1. Native users: Here the user 

2. [Azure Active Directory SSO](/docs/How to guides/Administration/Security/Azure%Single%Sign%On) < Link is not visible. >. We can add new users and consider single sign on with azure. 

Users Maintenance

Below are the steps to create new user 

1. Go to Admin menu from top navigation bar

2. Navigate Security -> Users

3. Click on the "Create Users" button to create a new user. Click on Edit icon to edit existing user and Delete icon to delete existing users

4. Provide below details and click "Create" or “Update” button

<table>
  <tr>
    <td>Property</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>First Name</td>
    <td>First name of the user</td>
  </tr>
  <tr>
    <td>Last Name</td>
    <td>Last name of the user</td>
  </tr>
  <tr>
    <td>Username</td>
    <td>This is the user name that shall be used for login into Guzzle. For Azure SSO this should be AAD user name which generally is the email address (also referred as user principal name)</td>
  </tr>
  <tr>
    <td>Password (only applies for Native user)</td>
    <td>The password of the user</td>
  </tr>
  <tr>
    <td>Email </td>
    <td>This is the email of the native user. For Azure SSO this field is automatically populated from username</td>
  </tr>
  <tr>
    <td>Security Role</td>
    <td>Choose one or more roles < There are three roles Data Analytics, Operator and Admin which is describe below. > </td>
  </tr>
</table>


:::note
It’s not possible to convert the native user to External (also referred as SSO) user. The only way to achieve this by deleting existing native user and re-creating it as external user
:::

## Guzzle Roles

1. Data Analyst - Can view guzzle jobs (readonly) and view Monitor UI and job logs

2. Operator - Data Analyst + can run the jobs, edit env files [connection details]

3. Admin - + Amend /create users ; edit job configs


Some of the features are not applicable any more (atlas and file templates)


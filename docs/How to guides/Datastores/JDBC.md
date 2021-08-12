The **Java Database Connectivity** (JDBC) API provides universal data access from the Java programming language. Using the JDBC API, you can access virtually any data source, from relational databases.

The connector can be used for SQL databases, on-premise (SQL Server Managed Instance), as an input data source or output data sink for Spark jobs.

## Steps to create Datastore for JDBC

1. Click on the action button (![image alt text](/img/docs/how-to-guides/datastores/server_file_system_0.png)) from the **Datastores **section in Left Navigation and select JDBC connector. Alternatively user can launch from **Create New Datastore **link in Activity authoring UI or Copy Data tool.

2. Enter the Datastore name for the new datastore and click Ok

3. Update the connection name or leave the default. You can refer to [Connection and Environments ](http://http) for more details

4. Users have to choose from two options like Custom or Standard.

5. Enter the connection details properties as described below:

## **If Standard is chosen : **

<table>
  <tr>
    <th>Property </th>
    <th>Description</th>
    <th>Required</th>
  </tr>
  <tr>
    <td>Vendor</td>
    <td>Users have to choose sql server from given options like SQL server, MySQL, Oracle, PostgreSQL.</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Driver Class</td>
    <td>Selecting Vendor this property is automatically field by Guzzle</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Hostname</td>
    <td>Hostname of selected server</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Port</td>
    <td>On which port selected server is running</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Database </td>
    <td>Name of Database</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Username</td>
    <td>Username of server</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Password (If manual is selected)</td>
    <td>Password of server</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>KeyVault name(if keyvault is chosen)</td>
    <td>Name of keyvault where password is saved.</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Secret Name (If keyvault is chosen)</td>
    <td>Secret name from keyvault where password is saved.</td>
    <td>Yes</td>
  </tr>
</table>


 Below gif represents created JDBC datastore :

![image alt text](/img/docs/how-to-guides/datastores/jdbc_1.gif)

## **If Custom is chosen :** 

<table>
  <tr>
    <th>Property </th>
    <th>Description</th>
    <th>Required</th>
  </tr>
  <tr>
    <td>Driver Class</td>
    <td>Selecting Vendor this property is automatically field by Guzzle</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Hostname</td>
    <td>Hostname of selected server</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Jdbc URL</td>
    <td>JDBC URL for connecting to SQL server
        Example: jdbc:mysql://&lt;hostname&gt;/ &lt;databaseName&gt;
        The URL can optionally contain database name, user name and other connection properties.</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Username</td>
    <td>Username of server</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Password (If manual is selected)</td>
    <td>Password of server</td>
    <td>No</td>
  </tr>
  <tr>
    <td>KeyVault name(if keyvault is chosen)</td>
    <td>Name of keyvault where password is saved.</td>
    <td>No</td>
  </tr>
  <tr>
    <td>Secret Name (If keyvault is chosen)</td>
    <td>Secret name from keyvault where password is saved.</td>
    <td>No</td>
  </tr>
</table>


![image alt text](/img/docs/how-to-guides/datastores/jdbc_2.gif)


Azure SQL is a cloud native and fully managed database management system (DBMS) from Azure, running the latest stable version of SQL Server Database. Guzzle leverages [Apache Spark connector: SQL Server & Azure SQL](https://docs.microsoft.com/en-us/sql/connect/spark/connector?view=sql-server-ver15) which is a high performance connector to read and write from Azure SQL and SQL Server. 

The connector can be used for SQL databases, on-premises or in the cloud (both Azure SQL and SQL Server Managed Instance), as an input data source or output data sink for Spark jobs.

## Steps to create Datastore  for Azure SQL

1. Click on the action button (![image alt text](/img/docs/how-to-guides/datastores/action_button.png)) from the **Datastores **section in Left Navigation and select **Server file system **connector. Alternatively user can launch from **Create New Datastore **link in Activity authoring UI or Copy Data tool

< step 1 is incorrect. It will be select "Azure SQL" in database category from Datastores. >

2. Enter the Datastore name for the new datastore and click Ok

3. Update the connection name or leave the default. You can refer to [Connection and Environments ](http://http) for more details

4. Enter the connection details properties as described below:

<table>
  <tr>
    <td>Property </td>
    <td>Description</td>
    <td>Required</td>
  </tr>
  <tr>
    <td>Database URL</td>
    <td>JDBC URL for connecting to SQL server.
      < Database URL - you can find URL from Azure portal it will be in this form " jdbc:sqlserver://<servername>:1433;database=<databasename>;user=<username>;password=<password>;encrypt=true;trustServerCertificate=false;hostNameInCertificate=*.database.windows.net;loginTimeout=30; " >
Example: jdbc:sqlserver://&lt; sql server name &gt;.
The URL can optionally contain database name, user name and other connection properties.</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Database</td>
    <td>Database name of the  SQL Server (this property can be skipped if its specified as part of Database URL)</td>
    <td>No < yes > </td>
  </tr>
  <tr>
    <td>Username</td>
    <td>User name of SQL server</td>
    <td>No < yes > </td>
  </tr>
  <tr>
    <td>Password</td>
    <td>Password of SQL server</td>
    <td>No < yes > </td>
  </tr>
</table>
<	- All this property is required. >

![image alt text](/img/docs/how-to-guides/datastores/azure_sql_1.gif)
< This gif is not proper for this article. >

## Known Limitation

--


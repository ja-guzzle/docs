Azure SQL is a cloud native and fully managed database management system (DBMS) from Azure, running the latest stable version of SQL Server Database. Guzzle leverages [Apache Spark connector: SQL Server & Azure SQL](https://docs.microsoft.com/en-us/sql/connect/spark/connector?view=sql-server-ver15) which is a high performance connector to read and write from Azure SQL and SQL Server. 

The connector can be used for SQL databases, on-premises or in the cloud (both Azure SQL and SQL Server Managed Instance), as an input data source or output data sink for Spark jobs.

## Steps to create Datastore  for Azure SQL

1. Click on the action button (![image alt text](/img/docs/how-to-guides/datastores/action_button.png)) from the **Datastores **section in Left Navigation and select **Azure SQL **connector. Alternatively user can launch from **Create New Datastore **link in Activity authoring UI or Copy Data tool


2. Enter the Datastore name for the new datastore and click Ok

3. Update the connection name or leave the default. You can refer to [Connection and Environments ](http://http) for more details

4. Enter the connection details properties as described below:

||||
|--- |--- |--- |
|Property|Description|Required|
|Database URL|JDBC URL for connecting to SQL server.<br /><br />Users can find URL from Azure portal it will be in this form jdbc:sqlserver://:1433database=;user=;password=;encrypt=true;<br />trustServerCertificate=false;hostNameInCertificate=*.database.windows.net;loginTimeout=30;<br />Example:jdbc:sqlserver://&lt; sql server name &gt;<br /><br />The URL can optionally contain database name, user name and other connection properties.|Yes|
|Database|Database name of the  SQL Server (this property can be skipped if its specified as part of Database URL)|yes|
|Username|User name of SQL server|yes|
|Password|Password of SQL server|yes|


![image alt text](/img/docs/how-to-guides/datastores/azureSQL_1.jpg)

## Known Limitation

--


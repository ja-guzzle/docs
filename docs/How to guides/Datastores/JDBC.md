The **Java Database Connectivity** (JDBC) API provides universal data access from the Java programming language. Using the JDBC API, you can access virtually any data source, from relational databases.

The connector can be used for SQL databases, on-premise (SQL Server Managed Instance), as an input data source or output data sink for Spark jobs.

## Steps to create Datastore for JDBC

1. Click on the action button (![image alt text](/img/docs/how-to-guides/datastores/server_file_system_0.png)) from the **Datastores **section in Left Navigation and select JDBC connector. Alternatively user can launch from **Create New Datastore **link in Activity authoring UI or Copy Data tool.

2. Enter the Datastore name for the new datastore and click Ok

3. Update the connection name or leave the default. You can refer to [Connection and Environments ](http://http) for more details

4. Users have to choose from two options like Custom or Standard.

5. Enter the connection details properties as described below:

## If Standard is chosen : 
|Property|Description|Required|
|--- |--- |--- |
|Vendor|Users have to choose sql server from given options like SQL server, MySQL, Oracle, PostgreSQL.|Yes|
|Driver Class|Selecting Vendor this property is automatically field by Guzzle|Yes|
|Hostname|Hostname of selected server|Yes|
|Port|On which port selected server is running|Yes|
|Database|Name of Database|Yes|
|Username|Username of server|Yes|
|Password (If manual is selected)|Password of server|Yes|
|KeyVault name(if keyvault is chosen)|Name of keyvault where password is saved.|Yes|
|Secret Name (If keyvault is chosen)|Secret name from keyvault where password is saved.|Yes|


 Below gif represents created JDBC datastore :

![image alt text](/img/docs/how-to-guides/datastores/jdbc_1.gif)

## If Custom is chosen :

|Property|Description|Required|
|--- |--- |--- |
|Driver Class|Selecting Vendor this property is automatically field by Guzzle|Yes|
|Hostname|Hostname of selected server|Yes|
|Jdbc URL|JDBC URL for connecting to SQL server<br /> Example: jdbc:mysql://&lt;hostname&gt;/ &lt;databaseName&gt;<br /> The URL can optionally contain database name, user name and other connection properties.|Yes|
|Username|Username of server|Yes|
|Password (If manual is selected)|Password of server|No|
|KeyVault name(if keyvault is chosen)|Name of keyvault where password is saved.|No|
|Secret Name (If keyvault is chosen)|Secret name from keyvault where password is saved.|No|



![image alt text](/img/docs/how-to-guides/datastores/jdbc_2.gif)


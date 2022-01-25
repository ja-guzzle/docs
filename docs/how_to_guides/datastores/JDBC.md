---
id: jdbc
title: JDBC
---

The [Java Database Connectivity (JDBC)](https://docs.oracle.com/javase/tutorial/jdbc/basics/index.html) API provides universal data access from the Java programming language. Using the JDBC API, you can access virtually any data source, from relational databases.

The connector can be used for SQL databases, on-premise (SQL Server Managed Instance), as an input data source or output data sink for Spark jobs.

## Steps to create Datastore for JDBC

1. Click on the action button (![image alt text](/img/docs/how-to-guides/datastores/server_file_system_0.png)) from the **Datastores **section in Left Navigation and select JDBC connector. Alternatively user can launch from **Create New Datastore **link in Activity authoring UI or Copy Data tool.

2. Enter the Datastore name for the new datastore and click Ok

3. Update the connection name or leave the default. You can refer to [Connection and Environments ](../connection_and_environment/connection_and_environment) for more details

4. Users have to choose from two options like Custom or Standard.

5. Enter the connection details properties as described below:

## If Standard is chosen : 
|Property|Description|Required|
|--- |--- |--- |
|Vendor|Users have to choose SQL server from given options like SQL server, MySQL, Oracle, PostgreSQL.|Yes|
|Driver Class|Selecting Vendor this property is automatically fielded by Guzzle.|Yes|
|Hostname|Hostname of selected server.|Yes|
|Port|On which port selected server is running.|Yes|
|Database|Name of Database.|Yes|
|Username|Username of server.|Yes|
|Password|Password to connect to MySQL server.<br/> For specify password the following options are available:<br/>1. **Manual**: Provide password directly. <br/>2. **Azure Key Vault**: To use Azure key vault feature user have to integrate Key Vault with Guzzle for that visit **[here](../../features/how_key_vault_is_used_to_integrate_guzzle)**. Give value of the key vault name and secret name where password is stored in Azure Key Vault instance.|Yes|


 Below gif represents created JDBC datastore :


<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/datastores/jdbc_1.gif" target="_self" >
    <img width="825" src="/img/docs/how-to-guides/datastores/jdbc_1.gif" />
</a>

## If Custom is chosen :

|Property|Description|Required|
|--- |--- |--- |
|Driver Class|Selecting Vendor this property is automatically fielded by Guzzle|Yes|
|Hostname|Hostname of selected server|Yes|
|Jdbc URL|JDBC URL for connecting to SQL server<br /> Example: jdbc:mysql://&lt;hostname&gt;/ &lt;databaseName&gt;<br /> The URL can optionally contain database name, username and other connection properties.|Yes|
|Username|Username of server|Yes|
|Password|Password to connect to MySQL server.<br/> For specify password the following options are available:<br/>1. **Manual**: Provide password directly. <br/>2. **Azure Key Vault**: To use Azure key vault feature user have to integrate Key Vault with Guzzle for that visit **[here](../../features/how_key_vault_is_used_to_integrate_guzzle)**. Give value of the key vault name and secret name where password is stored in Azure Key Vault instance.|Yes|

<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/datastores/jdbc_2.gif" target="_self" >
    <img width="825" src="/img/docs/how-to-guides/datastores/jdbc_2.gif" />
</a>
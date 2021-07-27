[Databricks File System (DBFS)](https://docs.microsoft.com/en-us/azure/databricks/data/databricks-file-system) is an abstraction provided by Azure Databricks to seamlessly access cloud object stores like Azure Blob, ADLS Gen2 and Amazon S3. With the ability to mount cloud file object stores as DBFS mounts on databricks workspace, one can access this object stores seamlessly from Guzzle jobs as well as from Databricks notebook and spark application deployed in this workspace without providing credentials or storage URLs

:::note
1. Only Ingestion activity supports File based connectors. 
2. Only support with Azure Databricks compute
:::

## Steps to create Datastore  for DBFS

1. Click on the action button (![image alt text](/img/docs/how-to-guides/datastores/action_button.png)) from the **Datastores **section in Left Navigation and select **DBFS **connector. Alternatively user can launch from **Create New Datastore **link in Activity authoring UI or Copy Data tool 

2. Enter the Datastore name for the new datastore and click Ok

3. Update the connection name or leave the default. You can refer to [Connection and Environments ](http://http) for more details

4. Provide the root path of the Databricks file system (DBFS) file system. You **don’t need **to include dbfs:/ prefix. 

5. Save the Datastore config. Optionally you can Test the connection. 

![image alt text](/img/docs/how-to-guides/datastores/databricks_file_system_1.gif)

## Known Limitation


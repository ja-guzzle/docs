---
id: server_file_system
title: Server File System
---

Server file system represents the local operating file system on the **Compute **nodes. The operating file system folder itself can in turn be a mounted network file shares or cloud file systems; or attached disk which are visible on all **Compute **nodes. 

:::note
Only Ingestion activity supports File based connectors. 
:::
## Steps to create Datastore  for Server file system

1. Click on the action button (![image alt text](/img/docs/how-to-guides/datastores/server_file_system_0.png)) from the **Datastores **section in Left Navigation and select **Server file system**** **connector. Alternatively user can launch from **Create New Datastore **link in Activity authoring UI or Copy Data tool

< insted of "Server file system" "LFS(Local File System)" will come >
2. Enter the Datastore name for the new datastore and click Ok

3. Update the connection name or leave the default. You can refer to [Connection and Environments ](http://http) for more details

4. Provide the root path of the Server file system. 

5. Save the Datastore config. Optionally you can Test the connection. 

:::note: 
Ensure the same path is visible on all Driver and Worker nodes for Yarn or Databricks computes you are using. 
:::

## Interface for Local File service

![image alt text](/img/docs/how-to-guides/datastores/server_file_system_1.gif)

## Known Limitation

--
- This datastore is used to fetch data from local machine only. 
- This datastore is only used in Ingestion activity only.


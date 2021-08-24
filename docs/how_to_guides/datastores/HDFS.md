---
id: hdfs
title: HDFS
---

Hadoop Distributed File System (HDFS) is a distributed file system that provides high-throughput access to application data.Guzzle Ingestion activity supports ingesting data from HDFS file system. 

:::note
1. Supported only with Local Spark and Yarn
2. Ensure Hadoop core site file are set up correctly on the yarn or local spark cluster
:::

## Steps to create Datastore  for HDFS

1. Click on the action button (![image alt text](/img/docs/how-to-guides/datastores/action_button.png)) from the **Datastores **section in Left Navigation and select **Server file system **connector. Alternatively user can launch from **Create New Datastore **link in Activity authoring UI or Copy Data tool

2. Enter the Datastore name for the new datastore and click Ok

3. Update the connection name or leave the default. You can refer to [Connection and Environments ](http://http) for more details

4. Enter the **Path **that shall be used as base directory for reading or writing files 

5. Save the Datastore config. Optionally you can Test the connection. 

## Interface for HDFS datastore

![image alt text](/img/docs/how-to-guides/datastores/HDFS_1.jpg)

## Known Limitation
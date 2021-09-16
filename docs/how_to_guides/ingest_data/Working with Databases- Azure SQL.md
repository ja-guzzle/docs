---
id: working_with_azureSQL
title: Working with AzureSQL Database
---

Azure SQL is a family of managed, secure, and intelligent products that use the SQL Server database engine in the Azure cloud. Azure SQL is built upon the familiar SQL Server engine, so you can migrate applications with ease and continue to use the tools, languages, and resources you're familiar with.

## Azure SQL as a Source

|Property|Description|Default Value|Required|
|--- |--- |--- |--- |
|Table + Filter|Specify the table from where to read data. The table can contain schema or even database name. If you select Table as input, data flow fetches all the data from the table specified in the dataset.<br/> Example: <br/>customerdb.[dbo].[customer]<br/>[customer] (default schema name dbo will be assumed)<br/>[dbo].[customer] (database name shall be as per Datastore config)<br/><br/>Also when the Table option is selected, you can also specify the Filter which needs to be included when querying data from synapse. The filter can be used to select only a part of the table. We may basically enter a condition and only the part of the table that satisfies the condition will be seen in the Target Section.|None|Yes.|
|SQL|Specify the SQL query which will be run as-is on the source.|||
|Clean Column Name|To specify whether to clean the column names of source data (both file headers and column names from table). All the characters other than alphanumeric will be converted to _.<br/>Ex. 'col.1' will become 'col_1', 'col@1' will become 'col_1'|False|No|
|Configure Pre and Post SQL|Guzzle supports Pre-SQL and Post-SQL for source and target and their execution in ingestion. It is mainly used for pre and post formatting of data in database.<br/> For more information click [here](pre-SQL_and_post-SQL_in_ingestion). |NULL|No|
|Configure watermark|A watermark represents tracking the last loaded value for one or more columns for a given source table or source SQL to enable loading data incrementally. Using watermark columns is one of the mechanisms used for changed data capture (CDC). <br/> For more information click [here](watermark). |NULL|No|
|Configure columns restriction|Mention column names and choose from the options to exclude and include columns. <br/> For more information click [here](column_restrictions).|NULL|No|
|Configure table dependency| |NULL|No|

## Interface for Azure Source

<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/ingest_data/azureSQL_1.png" target="_self" >
    <img width="1000" src="/img/docs/how-to-guides/ingest_data/azureSQL_1.png" />
</a> 


## Azure SQL as a Target or Reject

|Property|Description|Default Value|Required|
|--- |--- |--- |--- |
|Table|This is used to specify the Target Table we would like to create based on our Source.|None|Yes|
|Operation|Provides two options that determines whether the content of source or reject data is expected to be -<br/>**append:** To append the existing data in the given Azure SQL table.<br/>**overwrite:**This will do an overwrite of data for a subset of partitions that are present in the source. The entire Data in the Azure SQL server will be overwritten.|Append|Yes|
|Reliability Level|Allowed Values include BEST_EFFORT and NO_DUPLICATES.<br/>**NO_DUPLICATES** implements a reliable insert in executor restart scenarios. It also ensures higher reliability and availability of Data.<br/>**BEST_EFFORT** is a Reduplication mechanism. It seeks to minimize the number of duplicates in our Data. This means if there is the same piece of Data more than 1 time in a row BEST_EFFORT reduplicates these instances and will only retain one of these occurrences.  However, it does guarantee an absence of duplicates.|BEST_EFFORT|Yes|
|Isolation Level|Specifies the transaction locking behavior for the SQL source. The allowed values are: Recommitted, ReadUncommitted, RepeatableRead and Serializable. If not specified, the database's default isolation level is used.<br/> Refer to this doc for more details.|READ_COMMITTED|Yes|
|Batch Size|We can use this to specify how many rows are being written in each batch. Larger batch sizes may improve memory optimization.<br/> Allowed values are Integers.|2500|Yes|
|Bulk Copy Timeout|This property specifies the wait time for the insert operation for each batch to complete before time runs out.|600|Yes|

## Interface for Azure Target

<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/ingest_data/azureSQL_2.png" target="_self" >
    <img width="1000" src="/img/docs/how-to-guides/ingest_data/azureSQL_2.png" />
</a> 

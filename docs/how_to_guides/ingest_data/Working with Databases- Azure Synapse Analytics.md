---
id: working_with_azure_synapse_analytics
title: Working with Azure Synapse Analytics Database
---

:::note 
Only supported on Databricks compute
:::

Azure Synapse Analytics is a cloud-based enterprise data warehouse platform that leverages massively parallel processing (MPP) to quickly run complex queries across petabytes of data. 

This article outlines how to use Azure Synapse Analytics as source or target in Ingestion activity. Guzzle leverages Databrick’s Synapse Spark Connector detail of which can be found [here](https://docs.microsoft.com/en-us/azure/databricks/data/data-sources/azure/synapse-analytics) which uses a common Azure Blob storage container to exchange data between two systems (Databricks Cluster and Azure Synapse). Ingestion Active lets you leverage this native connector offered by Databricks and allows you to specify different configurations that are supported by this connector. 

## Azure Synapse Analytics as a Source

**Note: In the Datastore section we can choose to read from Azure Synapse either as a Table or through SQL (in the form of a query).**

|Property|Description|Default Value|Required|
|--- |--- |--- |--- |
|Table + Filter|Specify the table from where to read data. The table can contain schema or even database name. Example: <br/>customerdb.[dbo].[customer]<br/>[customer] (default schema name dbo will be assumed)<br/>[dbo].[customer] (database name shall be as per Datastore config)<br/>Also when the Table option is selected, you can also specify the Filter which needs to be included when querying data from synapse.|None|Yes.|
|SQL|Specify the SQL query which will be run as-is on the source|||
|Clean Column Name|To specify whether to clean the column names of source data (both file headers and column names from table). All the characters other than alphanumeric will be converted to _.<br/>Ex. 'col.1' will become 'col_1', 'col@1' will become 'col_1'|False|No|
|Configure Pre and Post SQL|Guzzle supports Pre-SQL and Post-SQL for source and target and their execution in ingestion. It is mainly used for pre and post formatting of data in database.<br/> For more information click [here](pre-SQL_and_post-SQL_in_ingestion). |NULL|No|
|Configure watermark|A watermark represents tracking the last loaded value for one or more columns for a given source table or source SQL to enable loading data incrementally. Using watermark columns is one of the mechanisms used for changed data capture (CDC). <br/> For more information click [here](watermark). |NULL|No|
|Configure columns restriction|Mention column names and choose from the options to exclude and include columns. <br/> For more information click [here](column_restrictions).|NULL|No|
|Configure table dependency| |NULL|No|

## Interface for Azure Synapse Analytics database as source is

<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/ingest_data/azure_synapse_1.png" target="_self" >
    <img width="1000" src="/img/docs/how-to-guides/ingest_data/azure_synapse_1.png" />
</a>

## Azure Synapse Analytics as a Target or Reject

|Property|Description|Default Value|Required|
|--- |--- |--- |--- |
|Table|This is used to specify the Target Table we would like to create based on our Source.|None|Yes|
|Operation|Provides two options that determines whether the source content or records are expected to be appended or overwritten in order to disallow existing data-<br/>**Append:** To atomically add new data to an existing target table.<br/>**Overwrite:** To atomically replace all the data in a target table with source table.<br/>For more information click [here.](overwrite_and_append_operatoins)|Append|Yes|
|Max String Length|Max String Length to set the string length for all VARCHAR/NVARCHAR type columns when writing data into Azure Synapse.
Any data which is greater than this will be clipped|4000|Yes|
|Write Semantics|There are two possible values that can be selected :<br/>**Polybase:**This option shall use Polybase feature of Azure Synapse to load or unload data to from common Blob storage. <br/>**Copy:**The Copy statement offers a more convenient way of loading data into Azure Synapse without the need to create an external table, requires fewer permissions to load data, and provides an improved performance for high-throughput data ingestion into Azure Synapse.|Polybase|Yes|
|Configure pre and post sql|Guzzle supports Pre-SQL and Post-SQL for source and target and their execution in ingestion. It is mainly used for pre and post formatting of data in database.<br/> For more information click [here](pre-SQL_and_post-SQL_in_ingestion).|NULL|No|

## Interface for Azure Synapse Analytics database as targte is

<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/ingest_data/azure_synapse_2.png" target="_self" >
    <img width="1000" src="/img/docs/how-to-guides/ingest_data/azure_synapse_2.png" />
</a>

---
id: working_with_delta_lake
title: Working with Delta Lake
---

Delta Lake provides ACID transactions, scalable metadata handling, and unifies streaming and batch data processing. Delta Lake runs on top of your existing data lake and is fully compatible with Apache Spark APIs. Delta Lake on Databricks allows you to configure Delta table.

:::note
Only supported on Databricks compute
:::

## Delta Lake table as a Source

|Property|Description|Default Value|Required|
|--- |--- |--- |--- |
|Table + Filter|Specify the table from where to read data. The table can contain schema or even database name. If you select Table as input, data flow fetches all the data from the table specified in the dataset.<br/> Example: <br/>customerdb.[dbo].[customer]<br/>[customer] (default schema name dbo will be assumed)<br/>[dbo].[customer] (database name shall be as per Datastore config)<br/><br/>Also when the Table option is selected, you can also specify the Filter which needs to be included when querying data from synapse. The filter can be used to select only a part of the table. We may basically enter a condition and only the part of the table that satisfies the condition will be seen in the Target Section.|None|Yes.|
|SQL|Specify the SQL query which will be run as-is on the source.|||
|Clean Column Name|To specify whether to clean the column names of source data (both file headers and column names from table). All the characters other than alphanumeric will be converted to _.<br/>Ex. 'col.1' will become 'col_1', 'col@1' will become 'col_1'|False|No|
|Configure Pre and Post SQL|Guzzle supports Pre-SQL and Post-SQL for source and target and their execution in ingestion. It is mainly used for pre and post formatting of data in database.<br/> For more information click [here](pre-SQL_and_post-SQL_in_ingestion). |NULL|No|
|Configure watermark|A watermark represents tracking the last loaded value for one or more columns for a given source table or source SQL to enable loading data incrementally. Using watermark columns is one of the mechanisms used for changed data capture (CDC). <br/> For more information click [here](watermark). |NULL|No|
|Configure columns restriction|Mention column names and choose from the options to exclude and include columns. <br/> For more information click [here](column_restrictions).|NULL|No|
|Configure table dependency| |NULL|No|

## Interface for Delta Lake Source

<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/ingest_data/delta_1.png" target="_self" >
    <img width="1000" src="/img/docs/how-to-guides/ingest_data/delta_1.png" />
</a> 


## Delta Lake as a Target or Reject

|Property|Description|Default Value|Required|
|--- |--- |--- |--- |
|Table|This is used to specify the Target Table we would like to create based on our Source.|None|Yes|
|Operation|Provides two options that determines whether the source content or records are expected to be appended or overwritten in order to disallow existing data-<br/>**Append:** To atomically add new data to an existing target table.<br/>**Overwrite:** To atomically replace the data in a target table with source table. The partition columns are detected based on the source.<br/>For more information click [here.](overwrite_and_append_operatoins)|Append|Yes|
|Auto create table|Guzzle provides the Auto Create Table feature in the Target Section. When selected it will automatically create a Target Table for us with the name as specified in the Table section above. In the schema section we have the Partition indicator. This indicator is used when guzzle auto creates a table for Hive to decide the partition column. The order of partition columns will be according to how it appears in the Schema Section.<br/> This can be seen in the figure below:|True|Yes|
|Merge schema|Automatically update schema of table and make it compatible with the data being written.<br/>For more information click [here](schema_drift#merge-schema).|False|No|
|Overwrite schema|Automatically overwrite schema of table and make it compatible with the data being written. This option is only available if operation is **overwrite**.<br/>For more information click [here](schema_drift##overwrite-schema).|False|NO|
|Configure truncate partition columns|Specify the target table partition column names and its values to truncate(delete) the target table partitions before writing into the table.<br/> For more information click [here](configure_truncate_partition_columns).|NULL|No|
|Configure pre and post sql|Guzzle supports Pre-SQL and Post-SQL for source and target and their execution in ingestion. It is mainly used for pre and post formatting of data in database.<br/> For more information click [here](pre-SQL_and_post-SQL_in_ingestion).|NULL|No|


## Interface for Delta Lake as Target and Reject

<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/ingest_data/delta_2.png" target="_self" >
    <img width="1000" src="/img/docs/how-to-guides/ingest_data/delta_2.png" />
</a> 
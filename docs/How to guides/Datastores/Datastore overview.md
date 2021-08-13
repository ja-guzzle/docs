Datastore in Guzzle represents either on premise or cloud data service which can either act as source or sink (target) for Guzzle **activities**. A datastore can either be cloud files services like S3, Azure Blob, DBFS or databases like  Azure SQL, MySQL or apps which are accessible via Rest API.

Additionally Guzzle supports datastore to run external activities like procedure, Azure Data Facotry pipeline or notebook. 

## Supported Datastores 

Guzzle broadly supports three types of datastores: File, Database and API. Below matrix provides supported Datastores - across different activity types and Computes

			

|||Computes|||Activities|||||
|--- |--- |--- |--- |--- |--- |--- |--- |--- |--- |
|Category|Connector|Databricks|Apache Spark (on Yarn)|Apache Spark (on Local mode)|Ingestion(source/target)|Processing(source/target)|Reconciliation(source/target)|Constraint Checks|Housekeeping|
|File|DBFS|✓|||✓/✓|x|x|x|x|
||ADLS Gen2|✓|x|x|✓/✓|x|x|x|x|
||Server file system|✓|✓|✓|✓/✓|x|x|x|x|
||HDFS|✓|✓|✓|✓/✓|x|x|x|x|
||AWS S3|✓|✓|✓|✓/✓|x|x|x|x|
|Database|Delta|✓|x|x|✓/✓|✓/✓|✓/✓|✓|✓|
||Hive|✓|✓|✓|✓/✓|✓/✓|✓/✓|✓|✓|
||Azure SQL|✓|✓|✓|✓/✓|x|x|x|x|
||Azure Synapse|✓|x|x|✓/✓|x|x|x|x|
||JDBC|✓|✓|✓|✓/✓|✓/✓|✓/✓|✓|x|
|API|Rest API|✓|✓|✓|✓/−|x|x|x|x|


:::note
1. The JDBC connector is a generic connector that lets you connect to any database that supports the JDBC interface. 
2. Rest API connector allows you to connect any API or cloud application which provides REST API interface 
:::

## Support for External activity

Guzzle supports running external procedures, scripts, notebook and pipelines on remote systems and data services. This is supported via External activity in Guzzle. The supported connectors for calling external activities are below:

|Connector|Remark|
|--- |--- |
|Databricks|To call Notebook, Databricks jar  or Python task|
|Azure Data Factory (ADF)|To call ADF pipeline|
|JDBC|To trigger stored procedure or run a JDBC datastore|


## Supported File Format

* Delimited format

* Fixed length files

* Text files (using Grok or Regex)

* JSON format

* XML format

* Excel format

* ORC format

* Avro format

* Parquet format


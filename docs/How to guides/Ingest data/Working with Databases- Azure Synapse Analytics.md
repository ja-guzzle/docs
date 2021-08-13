:::note 
Only supported on Databricks compute
:::

Azure Synapse Analytics is a cloud-based enterprise data warehouse platform that leverages massively parallel processing (MPP) to quickly run complex queries across petabytes of data. 

This article outlines how to use Azure Synapse Analytics as source or target in Ingestion activity. Guzzle leverages Databrick’s Synapse Spark Connector detail of which can be found [here](https://docs.microsoft.com/en-us/azure/databricks/data/data-sources/azure/synapse-analytics) which uses a common Azure Blob storage container to exchange data between two systems (Databricks Cluster and Azure Synapse). Ingestion Active lets you leverage this native connector offered by Databricks and allows you to specify different configurations that are supported by this connector. 

## Azure Synapse Analytics as a Source

**Note: In the Datastore section we can choose to read from Azure Synapse either as a Table or through SQL (in the form of a query).**

|Property|Description|Default Value|Required|
|--- |--- |--- |--- |
|Table + Filter|Specify the table from where to read data. The table can contain schema or even database name. Example: <br/>customerdb.[dbo].[customer]<br/>[customer]  (default schema name dbo will be assumed)<br/>[dbo].[customer] (database name shall be as per Datastore config)<br/>Also when the Table option is selected, you can also specify the Filter which needs to be included when querying data from synapse.|None|Yes.|
|SQL|Specify the SQL query which will be run as-is on the source|||



## Azure Synapse Analytics as a Target or Reject

|Property|Description|Default Value|Required|
|--- |--- |--- |--- |
|Table|This is used to specify the Target Table we would like to create based on our Source.|None|Yes|
|Operation|Provides two options that determines whether the content of source or reject data is expected to be -<br/>**append:** To append the existing data <br/>**overwrite:** Entire data in the synapse tabe is overwritten|append|Yes|
|Max String Length|Max String Length to set the string length for all VARCHAR/NVARCHAR type columns when writing data into Azure Synapse.
Any data which is greater than this will be clipped|4000|Yes|
|Write Semantics|There are two possible values that can be selected :<br/>**Polybase:**This option shall use Polybase feature of Azure Synapse to load or unload data to from common Blob storage. <br/>**Copy:**The Copy statement offers a more convenient way of loading data into Azure Synapse without the need to create an external table, requires fewer permissions to load data, and provides an improved performance for high-throughput data ingestion into Azure Synapse.|Polybase|Yes|



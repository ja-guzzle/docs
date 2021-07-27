Working with Databases- Azure Synapse Analytics

**Only supported on Databricks compute**

Azure Synapse Analytics is a cloud-based enterprise data warehouse platform that leverages massively parallel processing (MPP) to quickly run complex queries across petabytes of data. 

This article outlines how to use Azure Synapse Analytics as source or target in Ingestion activity. Guzzle leverages [SQL Server Spark Connector](https://docs.microsoft.com/en-us/azure/azure-sql/database/spark-connector). which uses a common Azure Blob storage container to exchange data between two systems (Databricks Cluster and Azure Synapse). Ingestion Active lets you leverage this native connector offered by Databricks and allows you to specify different configurations that are supported by this connector. 

# Azure SQL as a Source

**Note: In the Datastore section we can choose to read from Azure Synapse either as a Table or through SQL (in the form of a query).**

<table>
  <tr>
    <td>Property </td>
    <td>Description</td>
    <td>Default Value</td>
    <td>Required</td>
  </tr>
  <tr>
    <td>Table + Filter</td>
    <td>Specify the table from where to read data. The table can contain schema or even database name. Example: 
customerdb.[dbo].[customer]
[customer]  (default schema name dbo will be assumed)
[dbo].[customer] (database name shall be as per Datastore config)

Also when the Table option is selected, you can also specify the Filter which needs to be included when querying data from synapse. 

</td>
    <td>None</td>
    <td>Yes.</td>
  </tr>
  <tr>
    <td>SQL</td>
    <td>Specify the SQL query which will be run as-is on the source</td>
    <td></td>
    <td></td>
  </tr>
</table>


# Azure SQL as a Target or Reject

<table>
  <tr>
    <td>Property </td>
    <td>Description</td>
    <td>Default Value</td>
    <td>Required</td>
  </tr>
  <tr>
    <td>Table</td>
    <td>This is used to specify the Target Table we would like to create based on our Source.</td>
    <td>None</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Operation</td>
    <td>Provides two options that determines whether the content of source or reject data is expected to be -
append: To appended to existing data 
overwrite: Entire data in the synapse tabe is overwritten 
</td>
    <td>append</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Max String Length</td>
    <td>Max String Length to set the string length for all VARCHAR/NVARCHAR type columns when writing data into Azure Synapse.
Any data which is greater than this will be clipped </td>
    <td>4000</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Write Semantics</td>
    <td>There are two possible values that can be selected the details o of which can be found at :
 
Polybase:
This option shall use Polybase feature of Azure Synapse to load or unload data to from common Blob storage 
Copy:
The Copy statement offers a more convenient way of loading data into Azure Synapse without the need to create an external table, requires fewer permissions to load data, and provides an improved performance for high-throughput data ingestion into Azure Synapse.</td>
    <td>Polybase</td>
    <td>Yes</td>
  </tr>
</table>



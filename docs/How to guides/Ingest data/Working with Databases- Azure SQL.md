Azure SQL is a family of managed, secure, and intelligent products that use the SQL Server database engine in the Azure cloud. Azure SQL is built upon the familiar SQL Server engine, so you can migrate applications with ease and continue to use the tools, languages, and resources you're familiar with.

< - This article outlines how to use Azure SQL table as source or target in ingestion activity. >
< - First create datastore of "Azure SQL" from left side menu bar option. >

< Next point is ablout Azure Synapse Analytics which is not correct for this article. >
This article outlines how to use Azure Synapse Analytics as source or target in Ingestion activity. Ingestion Active lets you leverage this native connector offered by Databricks and allows you to specify different configurations that are supported by this connector. 

## Azure SQL as a Source

<table>
  <tr>
    <td>Property </td>
    <td>Description</td>
    <td>Default Value</td>
    <td>Required</td>
  </tr>
  <tr>
    <td>Table + Filter</td>
    <td>Specify the table from where to read data. The table can contain schema or even database name. If you select Table as input, data flow fetches all the data from the table specified in the dataset.
Example: 
customerdb.[dbo].[customer]
[customer]  (default schema name dbo will be assumed)
[dbo].[customer] (database name shall be as per Datastore config)

Also when the Table option is selected, you can also specify the Filter which needs to be included when querying data from synapse. The filter can be used to select only a part of the table. We may basically enter a condition and only the part of the table that satisfies the condition will be seen in the Target Section.


</td>
    <td>None</td>
    <td>Yes.</td>
  </tr>
  <tr>
    <td>SQL</td>
    <td>Specify the SQL query which will be run as-is on the source. </td>
    <td></td>
    <td></td>
  </tr>
</table>


## Azure SQL as a Target or Reject

<table>
  <tr>
    <td>Property </td>
    <td>Description</td>
    <td>Default Value</td>
    <td>Required</td>
  </tr>
  <tr>
    <td>Table</td>
    <td>This is used to specify the Target Table we would like to create based on our Source. < This contains target table name to write data from source. >  </td>
    <td>None</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Operation</td>
    <td> < Format this point >  Provides two options that determines whether the content of source or reject data is expected to be -

append: To append the existing data in the given Azure SQL table.
overwrite:This will do an overwrite of data for a subset of partitions that are present in the source. The entire Data in the Azure SQL server will be overwritten.

</td>
    <td>append</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Reliability Level</td>
    <td>Allowed Values include BEST_EFFORT and NO_DUPLICATES. < I think this is confusing. Discussion of two options is incorrect. >
NO_DUPLICATES implements a reliable insert in executor restart scenarios. It also ensures higher reliability and availability of Data.
BEST_EFFORT is a De-duplication mechanism. It seeks to minimize the number of duplicates in our Data. This means if there is the same piece of Data more than 1 time in a row BEST_EFFORT de-duplicates these instances and will only retain only one of these occurrences.  However, it does guarantee an absence of duplicates.  </td>
    <td>BEST_EFFORT</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Isolation Level</td>
    <td>Specifies the transaction locking behavior for the SQL source. The allowed values are: ReadCommitted, ReadUncommitted, RepeatableRead and Serializable. If not specified, the database's default isolation level is used.
Refer to this doc for more details.</td>
    <td>READ_COMMITTED</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Batch Size</td>
    <td>We can use this to specify how many rows are being written in each batch. Larger batch sizes may improve memory optimization.
Allowed values are Integers.</td>
    <td>2500</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Bulk Copy Timeout</td>
    <td>This property specifies the wait time for the insert operation for each batch to complete before time runs out.</td>
    <td>600</td>
    <td>Yes</td>
  </tr>
</table>

< If possible add images for source and target or gif >

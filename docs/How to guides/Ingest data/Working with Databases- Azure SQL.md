Azure SQL is a family of managed, secure, and intelligent products that use the SQL Server database engine in the Azure cloud. Azure SQL is built upon the familiar SQL Server engine, so you can migrate applications with ease and continue to use the tools, languages, and resources you're familiar with.

## Azure SQL as a Source

|Property|Description|Default Value|Required|
|--- |--- |--- |--- |
|Table + Filter|Specify the table from where to read data. The table can contain schema or even database name. If you select Table as input, data flow fetches all the data from the table specified in the dataset.<br/>Example: <br/>customerdb.[dbo].[customer]<br/>[customer]  (default schema name dbo will be assumed)<br/>[dbo].[customer] (database name shall be as per Datastore config)<br/><br/>Also when the Table option is selected, you can also specify the Filter which needs to be included when querying data from synapse. The filter can be used to select only a part of the table. We may basically enter a condition and only the part of the table that satisfies the condition will be seen in the Target Section.|None|Yes.|
|SQL|Specify the SQL query which will be run as-is on the source.|||



## Azure SQL as a Target or Reject

|Property|Description|Default Value|Required|
|--- |--- |--- |--- |
|Table|This is used to specify the Target Table we would like to create based on our Source.|None|Yes|
|Operation|Provides two options that determines whether the content of source or reject data is expected to be -<br/>**append:** To append the existing data in the given Azure SQL table.<br/>**overwrite:**This will do an overwrite of data for a subset of partitions that are present in the source. The entire Data in the Azure SQL server will be overwritten.|append|Yes|
|Reliability Level|Allowed Values include BEST_EFFORT and NO_DUPLICATES.<br/>**NO_DUPLICATES** implements a reliable insert in executor restart scenarios. It also ensures higher reliability and availability of Data.<br/>**BEST_EFFORT** is a De-duplication mechanism. It seeks to minimize the number of duplicates in our Data. This means if there is the same piece of Data more than 1 time in a row BEST_EFFORT de-duplicates these instances and will only retain only one of these occurrences.  However, it does guarantee an absence of duplicates.|BEST_EFFORT|Yes|
|Isolation Level|Specifies the transaction locking behavior for the SQL source. The allowed values are: ReadCommitted, ReadUncommitted, RepeatableRead and Serializable. If not specified, the database's default isolation level is used.<br/>Refer to this doc for more details.|READ_COMMITTED|Yes|
|Batch Size|We can use this to specify how many rows are being written in each batch. Larger batch sizes may improve memory optimization.<br/>Allowed values are Integers.|2500|Yes|
|Bulk Copy Timeout|This property specifies the wait time for the insert operation for each batch to complete before time runs out.|600|Yes|
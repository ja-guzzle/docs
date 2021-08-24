---
id: reconcilation_of_data
title: Reconcilation of data accross two tables
---

**Data reconciliation** is used during a **data** migration where the target **data** is compared against original source **data.**

Guzzle Support below datastores for reconciliations.

1. JDBC
2. Hive
3. Delta

Guzzle provides below functionality and parameters for reconciliation of data across source and target resources.

|Property|Description|Default Value|Required|
|--- |--- |--- |--- |
|Datastore|You can choose any of the available datastore from drop-down (as appropriate). If the connection is not available in drop-down then you have to create new.|None|Yes|
|Table + Filter|Specify the table from where to read data. The table can contain schema and also database name. We can specify the Schema Name along with the Table Name. If it is not specified it is taken from the Datastore.<br/><br/> Also, when the Table option is selected, you can also specify the Filter. The filter can be used to select only a part of the table. We may basically enter a condition and only the part of the table that satisfies the condition will be seen in the Target Section.|None|Yes|
|SQL|Alternatively Specify the SQL query which will be run as-is on the source|None|Yes|


## Recon

The recon section will give you ability to provide comparison logic between source and target datastore

|Property|Description|Default Value|Required|
|--- |--- |--- |--- |
|Primary Keys|Specify primary keys for source and target endpoint based on that reference; Guzzle will show comparisons between two aggregated metrics.|None|Yes|
|Grouping Columns|Specify columns to be used for grouping source data and target data for aggregating metrics to be compared between source and target for recon.|None|No|
|Execute on source|Specify if you want to push down the source and target SQL queries along with filters to be applied on respective source and target endpoints for execution. Only aggregation and result comparison would be performed by Guzzle using Spark dataframe.|False|No|
|Partial Match|Specify If you want to show specific status with recon metrics.
Guzzle follow below partial match conditions|False|No|


## Partial Match

Guzzle follow below Partial Match Conventions to show status of job

|Partial Match|Invalid Records|Status|
|--- |--- |--- |
|True|= 0|SUCCESS|
|True|= Total Records|FAILED|
|True|0 < && > Total Records|WARNING|
|False|> 0|FAILED|
|False|= 0|SUCCESS|



## Recon Metrics

You can specify the source aggregation column and target aggregation column which will be compared, and recon results will be stored in the Guzzle repository table recon_summary and recon_detail.

|Property|Description|Default Value|Required|
|--- |--- |--- |--- |
|Name|Specify the name of the recon metrics|None|Yes|
|Source Aggregation|Specify source aggregation function|None|Yes|
|Target Aggregation|Specify Target aggregation function|None|Yes|
|Detail Check Enabled|Specify if you want to bring detailed information on reconciliation records, if it’s true then guzzle will calculate results for the mismathced records and store them in the Guzzle repository table recon_detail.|False|No|



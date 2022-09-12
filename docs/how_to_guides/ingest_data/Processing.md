---
id: processing
title: Processing
---

Processing in Guzzle is used to transform ingested Data into a data lake (or target platform). This activity deals with complex processing logic by implementing all data transformation rules. 

Data Processing is the module which supports intra-ETL from staging to foundation and finally to analytics data tables. " Transforming data from one form to another " is the key purpose of the Data Processing module. Guzzle’s processing module can read data from RDBMS, Hive, SQL server, Azure Synapse, other JDBC sources etc.

:::note
As processing is meant for data movement between homogeneous sources and target, we cannot read data from source tables maintained in one technology and write it into target tables maintained in some other technology.
:::


## Source Section of the Processing Module

|Property|Description|Default Value|Required|
|--- |--- |--- |--- |
|Table+Filter|Specify the table from where to read data. The table can contain schema or even database name. If you select Table as input, data flow fetches all the data from the table specified in the dataset. Also, when the Table option is selected, you can also specify the Filter which needs to be included when querying data from synapse. We can specify record filters on the table if any.|None|Yes|
|SQL|Specify the SQL query which will be run as-is on the source.|None|Yes|
|Incremental|This property is to control behavior of the framework generated column w_current_record_flag, in the cases where target is configured for merge operation. By default, when this property is unchecked, the source is considered a full dump. Hence, all target records are first marked as w_current_record_flag is equal to N before performing the merge on target. In the next step, to merge primary keys that are present in source, this flag is again updated to Y and keys that are not present in source, this flag remains N. In case you check this property, source is considered incremental. Hence, all target records are not marked as N for w_current_record_flag column.|Unchecked|Yes|
|Configure Table Dependency|This property is used to manually specify source table dependency and to manually configure Apache Atlas lineage.|None|No|
|Additional Columns|Specify, if you want to map any additional framework generated columns or derived columns to the target table.<br/><br/>We need to enter the Column Name, Value and the Framework Generated Column. In the additional column section Guzzle provides the following framework generated columns : w_created_business_ts, w_created_ts, w_refresh_ts, w_current_record_flag, w_eff_start_date_ts, w_eff_end_date_ts, w_sequence_key, w_version_key|None|No|


## Target Section of the Processing Module

|Property|Description|Default Value|Required|
|--- |--- |--- |--- |
|Table|This is used to specify the Target Table we would like to create based on our Source. We can also use parameters and pass their value during runtime. We may also prefix our table name with database / schema name.|None|Yes|
|Operation|Specify, if you want to perform append, overwrite, merge, effective date merge, update only or delete operation on target table by selecting a given option from drop-down.|Append|Yes|
|Template|It is used to specify Guzzle template which the user would like to use like delta, default, SQL server or delta_v2 to perform target operations by selecting a given option from drop-down.|Unchecked|Yes|
|Primary Keys|Specify primary key columns list from target table to uniquely identify record, if target operation is any of merge, update only, effective date merge or delete.|None|No|
|Merge Columns|Specify merge columns to be updated into the target table, if the target operation is merge or update only. Specify history columns list to maintain history into SCD Type 2 targets, if target operation is effective date merge. You can use this option in conjunction with framework columns w_eff_start_date_ts, w_eff_end_date_ts, w_sequence_key, w_version_key available in Additional Columns source section by mapping them into target table|None|No|
|Soft Delete|Specify, if you want to perform soft delete onto the target table where the flag column can be maintained into the target table to identify if record is active or deleted. Use this option in conjunction with one of the framework columns w_current_record_flag available in the Additional Columns source section by mapping it to the target table.|None|No|
|Truncate Partition Columns|Specify target table partition columns and their corresponding values to truncate target table partition before target load. Truncate partition column values can also be passed as a parameter.|None|No|

## Processing execution

Processing module support two types of execution engine
1. Spark
2. Template

### Spark
- In Spark engine, Guzzle loads required source and target data in spark compute and perform operations and write processed data in target table.
- There are few changes in behaviour from Guzzle v2.4.0. [Click here](docs/releases/2_4_0/processing-behaviour-changes) to view it.

### Template
- In Template engine, Guzzle prepares operation query which will be executed on source technology. It will not load source and target data in compute memory.

## Example of the Processing Module:

**Source Table**

**Id, name, gender**

1, ABC, male

2, XYZ,  

**Target table**

**Id, name, gender**

0, AWS, female

2, XYZ, male

**Operation: merge**

**Merge_columns: gender**

Id, name, gender

0, AWS, female

1, ABC, male

2, XYZ, male


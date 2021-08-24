---
id: constraint_checks
title: Constraints Check
---

Guzzle will Perform **Data Quality (DQ)** validation on specific columns and tables, Logging of records and statistics failing the constraint checks and the validation rules applicable for structured data and can currently be specified as SQL.

Guzzle Support below datastores for Constraint Checks.

1. JDBC
2. Hive
3. Delta

Guzzle provider below functionality and parameters for Constraint Checks.

|Property|Description|Default Value|Required|
|--- |--- |--- |--- |
|Datastore|You can choose any of the available datastore from drop-down (as appropriate). If the connection is not available in drop-down then you have to create new.|None|Yes|    
|Table   +   Filter|Specify the table from where to read data. The table can contain schema and also database name. We can specify the Schema Name along with the Table Name. If it is not specified it is taken from the Datastore.<br/><br/> Also, when the Table option is selected, you can also specify the Filter. The filter can be used to select only a part of the table. We may basically enter a condition and only the part of the table that satisfies the condition will be seen in the Target Section.|None|Yes|
|SQL|Alternatively Specify the SQL query which will be run as-is on the source|None|Yes|
|Primary Keys|Specify primary key columns to be logged into constraint_check_detail table if constraint check fails for a record. You can specify up to 10 columns if it is a composite primary key|None|Yes|
|Grouping Columns|Specify grouping columns in source table if source data has to be aggregated before performing constraint check. All grouping column names and values are logged into constraint_check_summary, constraint_check_detail tables if constraint check fails for a record. You can specify up to 10 columns for group by to perform aggregation.|None|No|


## Validation Rules

You can specify constraint checks to be performed on the source table. Below are the properties in that we can mention constraint checks with some rules.

|Property|Description|Default Value|Required|
|--- |--- |--- |--- |
|Name|Specify a name for validation rule|None|Yes|
|SQL|Specify validation SQL which should evaluate to TRUE if the record passes the constraint check. Records which doesn't qualify the rule specified under this option are logged into constraint_check_summary, constraint_check_detail tables|None|Yes|
|Constraint Data|Specify list of columns for which additional data to be logged into constraint_check_summary, constraint_check_detail tables|None|No|
|Detail Check Enabled|Specify if you want to bring detailed information on reconciliation records, if it’s true then guzzle will calculate results for the mismatched records and store them in the guzzle repository table constraint_check_detail.|False|No|


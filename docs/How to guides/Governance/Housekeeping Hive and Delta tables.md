You can perform very granular level housekeeping on your target tables as per your data retention policy across various data layers (staging or bronze layer, silver or transformed layer or gold or data marts) within the data lake using this module.

Guzzle Support below datastores for Housekeeping.

1. Hive
2. Delta

Guzzle provider below functionality and properties for Housekeeping

|Property|Description|Default Value|Required|
|--- |--- |--- |--- |
|Datastore|You can choose any of the available datastore from drop-down (as appropriate). If the connection is not available in drop-down then you can create new data store|None|Yes|
|Table|Specify the table which needs to be housekept. The table name can be fully qualified with the database name. If the database name is not specified then it is taken from the Datastore definition|None|Yes|
|Housekeeping Column|Specify column name to be used for housekeeping the table. This has to be the partition column of the table of the data type Date or timestamp|None|Yes|
|Operation|Specify the operation you want to perform on the table for housekeeping.<br/>Guzzle has two types of operations. 1.Delete and 2.Move|Delete|Yes|
|Secondary Table Name|Specify secondary table to move housekeep data in that source (only applicable while operation is Move)|None|Yes|
|Reference Point|Specify any of the available options in the drop-down list - Current Time, Max Value, Value as a reference point for applying the housekeeping rules. If selected Current Time, it will housekeep treating current system timestamp as a reference point to apply the housekeeping rules defined under Retention Strategies. If selected Max Value, it will calculate the maximum value for the Housekeeping Column specified in above section as reference point. If selected Value, you can specify custom value or pass value through a runtime parameter as reference point for housekeeping.|Current Time|Yes|



## Retention Strategies

Specify the retention strategies rules for housekeeping to retain rule data.

Guzzle provide below Retention rule to retain your data

|Property|Description|Default Value|Required|
|--- |--- |--- |--- |
|Partitions|Specify the partition columns to get housekeep data based on partition.|None|No|
|Retention Strategy|Specify days, weeks, months, quarters, years to retain data based on that rules,|None|Yes|
|Day Of Week|Specify on which days data you want to retain|Monday|No|
|Strict Retentions Period End|When we mark strick_retention_period true then it will only retain the record if it is the last date record. If it is false then it will try to retain the previous date record and it will find the previous date record until it finds data.|False|No|
|Strict Retentions Grain|Users can provide a partition column list for when user want to retain data, like if I have provided two partition systems and location then it will retain last date data for each system and location but if I provide only the system then it will retain data for only the last date of the system it will not retain for all locations.|None|No|



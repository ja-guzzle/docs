---
id: housekeeping
title: Housekeeping
---

Guzzle’s Housekeeping module allows the user to implement granular level housekeeping on the target tables according to different data retention policies across various data storage layers within the data lake.

## Housekeeping Properties

|Property|Description|Default Value|Required|
|--- |--- |--- |--- |
|Table|Specify the table from where to read data. The table can contain schema or even database name. If you select Table as input, data flow fetches all the data from the table specified in the dataset.|None|Yes|
|Housekeeping Column|Specify column name to be used for housekeeping the table. Mostly this is going to be the partition columns of the table.|None|Yes|
|Operation|Select if you want to perform delete or move on the Housekeeping Table by selecting an option from the drop-down menu.|Delete|Yes|
|Configure Table Dependency|This property is used to manually specify source table dependency and to manually configure Apache Atlas lineage.|None|No|
|Reference Point|Specify any of the available options in the drop-down list — Current Time, Max Value, Value as a reference point for applying the housekeeping rules. <br/>**Current Time:** This will housekeep treating the current system timestamp as a reference point to apply the housekeeping rules defined under Retention Strategies. <br/>**Max Value:** it will calculate the maximum value for the Housekeeping Column specified in the above section as a reference point. <br/>**Value:** It allows the user to specify a custom value or pass a value through a runtime parameter as a reference point for housekeeping.|Current Time|Yes|
|Retention Strategies||||



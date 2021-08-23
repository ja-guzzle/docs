---
id: external
title: External
---

This article provides information about External support in Guzzle and what are different external library Guzzle supports.

Guzzle supports External Framework and tools. 

Guzzle External supports below Datastore

1. Databricks

2. JDBC

3. ADF

Guzzle provider below functionality and parameters for External

|Property|Description|Default Value|Required|
|--- |--- |--- |--- |
|Datastore|You can choose any of the available Datastore from drop-down (as appropriate). If the connection is not available in drop-down then you can create new data store|None|Yes|
|Script (Only Applicable for JDBC)|Used to specify script to run as external|None|Yes|
|Run Name|Used to specify external Run name to identify|None|No|
|Timeout Seconds|Specify When guzzle tries to connect external tools and how long stick this.|None|No|
|Task|Used to specify external tool type guzzle supports 1) Notebook, 2) Spark Jar, 3) PySpark|None|No|
|Notebook Path (only applicable if Task is Notebook)|Used to specify the Databricks Notebook full path|None|Yes|
|Main Class (only applicable if Task is Spark Jar)|Used to specify the main class name of the spark jar file.|None|Yes|
|Script Path (Only applicable if Task is PySpark)|Used to specify the script path of an external file.|None|Yes|
|Revision Timestamp||None|No|
|Parameters|Used to specify Parameter it’s name and value pair which guzzle used while running external library.|None|No|
|Libraries|Specify external libraries|None|No|


## Libraries :

Guzzle User can add a new library by click on click to add library, Guzzle supports below libraries configs.

1. DBFS

2. PyPi

3. Maven

4. CRAN

## Dependency : 

Guzzle used to know dependency between lineages so while the user ran the job under pipeline guzzle will prepare dependency stack and follow that stack.

Users can specify source and target dependency by clicking on dependency tab.

User has to specify 

Endpoints : Select dependent endpoint from dropdowns.

Property : it is autopopulated based on selected endpoints.

Value : Specify dependent value it may be table, files ...


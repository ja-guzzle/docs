---
id: local_spark
title: Local Spark
---

This article provides information about Local spark support in Guzzle.

Local spark users will only use it for development, learning and lightweight purposes.

Local spark does not support various features like : 

1. ADLS
2. DBFS
3. DELTA
4. HIVE

Guzzle provides below parameter and configs for local spark

|Property|Description|Default Value|Required|
|--- |--- |--- |--- |
|Number of executors|Specify the number of spark executor on you want to run job|2|No|
|Driver memory|Specify the allocated driver memory for running jobs|512 m|No|
|Executor memory|Specify the allocated executor memory for running jobs|512 m|No|
|Driver classpath|Specify the driver classpath of jobs|None|No|
|Executor classpath|Specify the executor classpath|None|No|
|Jars|Put the jar path with comma separated|None|No|
|Additional arguments|Specify the spark arguments. <br/> Ex: --conf spark.development=true|None|No|

** Interface for Local Spark Compute **

<!-- ![image alt text](/img/docs/how-to-guides/compute/local_spark_1.jpg) -->
<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/compute/local_spark_1.png" target="_self" >
    <img width="1000" src="/img/docs/how-to-guides/compute/local_spark_1.png" />
</a>



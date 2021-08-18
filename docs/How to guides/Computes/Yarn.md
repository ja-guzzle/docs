This article provides information about Yarn support in Guzzle.

Yarn does not support various features like : 

1. ADLS

2. DBFS

3. DELTA

4. HIVE

Guzzle provides below parameter and configs for Yarn


|Property|Description|Default Value|Required|
|--- |--- |--- |--- |
|Number of executors|Specify the number of Yarn executor on you want to run job|2|No|
|Driver memory|Specify the allocated driver memory for running jobs|512m|No|
|Executor memory|Specify the allocated executor memory for running jobs|512m|No|
|Driver classpath|Specify the driver classpath of jobs|None|No|
|Executor classpath|Specify the executor classpath|None|No|
|Jars|Put the jar path with comma seperated|None|No|
|Additional arguments|Specify the Yarn arguments <br />Ex: --conf spark.development=true|None|No|

** Interface for Yarn Compute **

![image alt text](/img/docs/how-to-guides/compute/yarn_1.jpg)

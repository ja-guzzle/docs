---
id: spark_parameters 
title: Spark Parameters
---

- In Guzzle, we can pass or override spark related parameters.
- There are 4 ways we can pass spark parameters in guzzle
    - Pipeline activity level (Passing spark parameters in activity level in pipeline which will applicable to particular activity)
    - Pipeline level (Applicable to all activity inside the pipeline)
    - Runtime Popup
    - Environment Variable

### Activity inside pipeline (Highest Precedence)
-  You can set spark configurations at activity level inside pipeline from setting icon in pipeline list.
- You can consider spark configurations of each activity individually.

<img width="600" src="/img/docs/how-to-guides/spark-parameters/spark-param_1.png"/>

### Pipeline Level
- We can provide common spark configurations for all mentioned activities in pipeline.
- If we have not mention spark config in activity inside pipeline then guzzle will take precedence of pipeline configurations.

<img width="600" src="/img/docs/how-to-guides/spark-parameters/spark-param_2.png"/>

### Pipeline Runtime
- If we have not specify the activity and pieline level then we can set spark parameter at runtime.
- Guzzle will pass spark parameter to each activities inside the piepline

<img width="600" src="/img/docs/how-to-guides/spark-parameters/spark-param_3.png"/>

### Enviroment Variable
- We can also use environment variables to define spark configurations. Guzzle will consider lowest precedence of it.


## Compute specific Spark Configs

#### <b>Databricks</b>
| Parameter | Default Value | Description |
|--- |--- |--- |
|Cluster id | - |You can set databricks cluster di in which job will executed|
|Spark version  | - | Databricks Runtime is the set of core components that run on your clusters. All Databricks Runtime versions include Apache Spark and add components and updates that improve usability, performance, and security.  |
|Enable cluster pool |-|Here we can attach cluster pool to the databricks cluster|
|Enable auto-scaling|-|To allow Databricks to resize your cluster automatically, you enable autoscaling for the cluster and provide the min and max range of workers|

#### <b>Synapse spark</b>
| Parameter | Default Value | Description |
|--- |--- |--- |
|Number of executors  |1|You can define number of execute required for your spark application|
|Driver memory   |1gb|Define driver node memory|
|Driver cores  |1|Define drive cores|
|Executor memory |1gb|Define memory for your execute node|
|Executor Core |1| Define number of drives |


#### <b>AWS Glue</b>
| Parameter | Default Value | Description |
|--- |--- |--- |
|Number of executors  |1|Define number of executor your spark job will use to execute workloads|


#### <b>AWS EMR</b>
| Parameter | Default Value | Description |
|--- |--- |--- |
|Number of executors  |-|You can define number of execute required for your spark application|
|Driver memory   |-|Define driver node memory|
|Driver cores  |-|Define drive cores|
|Executor memory |-|Define memory for your execute node|
|Executor Core |-| Define number of drives |

- Please check this excel file for more details on spark parameters - <a href="https://raxglobal.sharepoint.com/:x:/r/sites/JustAnalytics.Guzzle/Shared%20Documents/Guzzle%20Devt/Specs/Backend/Guzzle%20Parameters.xlsx?d=w09b577ce84c947e29df7555e4dbfe4d4&csf=1&web=1&e=6gLrnv">Guzzle Parameters</a>.
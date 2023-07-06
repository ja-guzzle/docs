---
id: parameters
title: Parameter
---

- This article helps you understand the Guzzle parameters and how to use them to control your Guzzle Activity behavior. 
- Parameters can be used to control the behavior of a batch/pipeline/activities, such as by passing the dynamic table name and file name or overriding spark configurations.
- Parameters are used to make pipelines or activities more flexible and configurable. 
- They allow you to define values that can be passed into the pipeline or activities at runtime, enabling dynamic behavior. 
- Parameters can be used to customize source and destination connections, specify file paths, set data transformation rules, and more.
- By utilizing these parameters effectively, you can create reusable pipelines that can be easily configured for different scenarios, making your data integration processes more flexible and manageable.

### Guzzle Internal parameters
- Guzzle internal parameters are created mainly for changing behavior of Guzzle job. We can modify internal parameters in Runtime dialog box. 
- Using internal parameters we can override the behavior of Activity, Pipeline and Batch. 


| Parameter | Default Value | Activity | Pipeline | Batch | Description |
|--- |--- |--- |--- |--- |--- |
|batch_id | -1 |Yes|No|No|This parameter is used to override batch parameter in the job.|
|guzzle.batchpipeline.threads | 4 |Yes|Yes|Yes|When guzzle reads file from the source. Guzzle will create different treads to process the file. For example, Lets say we have 12 file and then using this parameter guzzle will create 3 thread of 4 file in process all files in parallel.   |
|guzzle.ingestion.load_type | Incremental |Yes|Yes|Yes|Guzzle provides watermark support to perform incremental data processing in ingestion module. We can change that behavior using this parameter. For example, if we don't want to perform incremental load then we can select full load from dropdown|
|hive.storage_format  | ORC |Yes|Yes|Yes|Guzzle support auto create table support in hive datastore, when guzzle internally create hive table by default it uses ORC. Using this parameter we can change data format in hive. |
|job_instance_id| Generated by guzzle |Yes|No|No|We can override job instance id using this parameter.|
|stage_id| -1 |Yes|No|No|Guzzle allow us to override stage_id value of the job|
|guzzle.job_group.partial| False |No|Yes|No| A Pipeline can also be configured to Partial load to allow pipeline execution to continue further even if any jobs within pipelines called in the Pipeline fails. |
|guzzle.job_group.resume| False |No|Yes|Yes | This feature allows to resume the job group or pipeline from where it has failed |
|guzzle.stage.partial| False |No|Yes|Yes| A Batch can also be configured to Partial load to allow batch execution to continue further even if any jobs in Batch fails. |
|guzzle.stage.resume| False |No|Yes|Yes | This feature allows to resume the Batch from where it has failed |


### Parameter precedence

:::note
* Suppose We have define spark parameter while running the batch, guzzle will pass spark parameter to all pipelines and activities which are associated with batch.
* Support we have define spark configurations in individual activities in pipeline and while running the batch we can also passing the spark conf. Guzzle will take precedence of spark configs which are passed in activities. 
* In REST datastore, guzzle allows to pass request parameter. Guzzle don't allow us to pass same parameter twice.
:::

### Additional parameters Order of Precedence
<!-- | Activity |Description|
|--- |--- |
|Pipeline| - Additional Parameter passed in seperate activities in pipeline takes highest precedence. <br /> <img width="600" src="/img/docs/how-to-guides/running-guzzle-job/running_job_5.png"/>  |
|Pipeline Runtime| - If parameters are not passed in activity level in pipeline then guzzle will take precedence of parameter which are passed while running the pipeline. <br /> - This is parameter will be considered in all activities inside pipeline. <br /> <img width="600" src="/img/docs/how-to-guides/running-guzzle-job/running_job_6.png"/>  |
|Environment Parameter| - If we did not pass parameter in pipeline and pipeline runtime level, Guzzle will take precedence from environment Parameter. You can define envirnment variables in Admin => My Profile => Environment <br /> <img width="600" src="/img/docs/how-to-guides/running-guzzle-job/running_job_7.png"/>  | -->

<b>Pipeline</b>

- Additional Parameter passed in separate activities in pipeline takes highest precedence.
<br /><br /><img width="600" src="/img/docs/how-to-guides/running-guzzle-job/running_job_5.png"/>

<b>Runtime</b>

- If parameters are not passed in activity level in pipeline then guzzle will take precedence of parameter which are passed while running the pipeline. 
- This is parameter will be considered in all activities inside pipeline. <br /><br />
<img width="600" src="/img/docs/how-to-guides/running-guzzle-job/running_job_6.png"/>

<b>Environment Parameter</b>

- If we did not pass parameter in pipeline and pipeline runtime level, Guzzle will take precedence from environment Parameter. You can define environment variables in Admin => My Profile => Environment <br /><br /> <img width="600" src="/img/docs/how-to-guides/running-guzzle-job/running_job_7.png"/>


#### <b>Order of Precedence </b> 
| Parameter Type | Activity inside pipeline (Highest Precedence) | Runtime Parameter | environment Parameter |
|--- |--- |--- |--- |
|Additional Parameters (User Provided Params) | - Additional Parameter passed in separate activities in pipeline takes highest precedence. <br />   | NA | - If parameters are not passed in activity level in pipeline then guzzle will take precedence of parameter which are passed while running the pipeline. <br /> - This is parameter will be considered in all activities inside pipeline. | - If we did not pass parameter in pipeline and pipeline runtime level, Guzzle will take precedence from environment Parameter. <br /> - You can define environment variables in Admin => My Profile => Environment |


### Business Date precedence

- While running the activity you can change business date via Guzzle UI(Guzzle provides date picker) and also you can change it by using additional parameter using key-pair. business_date priority in run activity dialog is 
    - 1) Override job parameter(parameter extracted from activity) 
    - 2) Business date UI - selection option 
    - 3) Additional parameters - key value param

<img width="600" src="/img/docs/how-to-guides/spark-parameters/spark-param_4.png"/>

### Context Column precedence
- In run stage dialog when user pass batch name and additional context column value as key value param -> Guzzle will override it and pass the actual batch and context column provided in UI.
<img width="600" src="/img/docs/how-to-guides/spark-parameters/spark-param_5.png"/>

Click <a href="/documents/guzzle_parameters.xlsx">here</a> to check more info about the Guzzle parameters.
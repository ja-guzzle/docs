## Introduction

- A Guzzle Pipeline is a logical grouping of activities that together perform a task. For example, a Pipeline could contain a set of activities that ingest and clean log data, and then kick off a mapping data flow to analyze the log data.
- The Pipeline allows you to manage the activities as a set instead of each one individually. You deploy and schedule the Pipeline instead of the activities independently.
- The activities in a Pipeline define actions to perform on your data. For example, you may use a Guzzle Ingestion activity to copy data from an Azure Blob Storage to Delta table.
- Then, use a Processing activity to process and transform data from delta table on top of which business intelligence reporting solutions are built.
- Guzzle Pipeline can have multiple groupings of activities: Ingestion, processing, contraint check, reconsiliation and external activity.

- You can do auto-dependency or run sequentially/parallel if its all independent. 
-You can put a cap of how many jobs to run parallel  - this helps to throttle (we do task allocation to parallel execution threads dynamically - so that all threads will have something to run till we have exhausted - not like ADF which does static allocation of jobs and you get into situation where 2 out of 5 threads are still running and have more that few jobs to run because they ended up getting long running jobs)
- Param passed to pipeline are auto passed to activities - they can also be pre-processed /manipulated before passing to individual activities added in pipe (we let you do that thru groovy template engine - similar to jinja)
- You can override spark setting - including stating that run a particular activity in job cluster while rest can run on default compute which was used at time of running pipe (all-purpose cluster); or overwrite spark confs or size of cluster. 
- You can rerun pipeline from the point it failed without need of passing any execution id of previous run- Just submit  pipeline again with the same set of business date or other param you had passed for the first run - and it will detect the latest failed pipeline run if it exists - and it will run from there  (you can also decide to run whole thing again by putting resume=true)
- We support multitask feature of databricks - which means guzzle can submit entire pipeline as single workflow in databricks and even support advance feature of databricks like reusing job cluster across multiple jobs
- Dynamic pipeline helps you to fetch the list of activties along with their param to run dynamically - this is useful if you want to skip some silver jobs if there was no data loaded in bronze layers for those tables; or skip ingestion jobs if no new data shows up in files or source tables 
- Databricks multitask pipeline  - Guzzle prepares and submits a set of activities with dependencies to databricks and databricks manages the orchestration of the pipeline

<!-- ## Creating a Pipeline with UI
- To create a new pipeline, navigate to the Author tab in Guzzle (represented by the pencil icon), then click the three dots in pipeline section from sidebar and choose Pipeline from the menu.

Guzzle will display the pipeline editor where you can find:
1. All activities that can be used within the pipeline.
2. The pipeline configurations setting, including parameters, spark settings, retry properties and timeout setting.
3. The pipeline parallel run, auto dependency and databricks mutitask can be configured.

<img width="1000" src="/img/docs/how-to-guides/pipeline/create_pipeline.png" /> -->

<br />

Guzzle supports two types of pipeline
1. <b> Guzzle Pipeline </b> - This is a standard pipeline that is run and orchestrated by Guzzle API
2. <b> Databricks multitask pipeline </b> - Guzzle prepares and submits a set of activities with dependencies to databricks and databricks manages the orchestration of the pipeline

In both pipelines, user can configure a static list of activities, and their parameters and override compute configuration but there is no option for a user to configure a list of activities dynamically. to resolve this issue we have added a new feature called dynamic pipeline. For information about the 

## Usage
- We may create a new pipeline in Guzzle by selecting the menu button in the Pipelines section on the left-hand sidebar of Guzzle. We must specify the name of the pipeline according to the action it performs.
- In the Parallel Run section we need to enter a number which determines the number of activities to run simultaneously in the given Pipeline.
- Auto Dependency defines how subsequent activities depend on previous activities, determining the condition of whether to continue executing the next task. If we want to perform a second activity on the data generated in the output of the first activity we must select the Auto Dependency option.
- The Pipeline section can have one or more activities within it. We can mention the different activity names and the parameters associated with each activity. The Parameters are the same as when we fill parameters for individual jobs. They make our pipeline flexible for reuse.

## Steps to create pipeline
- Pipeline in Guzzle are created by selecting the menu (...) button in the Pipelines section on the left sidebar of Guzzle or "New" button below "Quick Search" which will bring up "Create New Pipeline" diaglog box.  Specify the name the Pipeline in this box.
- Specify Pipeline configruation as per section "Pipeline Configurations"
- Add activtiies to the pipeline by either selecting from the  drop-down under column "Acivties" or drag and drop the activties from left sidebard into pipeline. Specify the paremeters for activty by clikcing on cell under the column "Activity Parameter"
- You can modify Spark settings for a particular activity in pipeline by by clicking "setings". Also Spark and execution realted  settings can be modified globally for the pipeline by clicking on "Setting" button on top right in Pipeline editor. Mored details on how to specify this setting is covered in the section "
- Dynamic activity can be added to the pipeline 
- A Pipeline dependency graph (Lineage or DAG of pipeline) can also be generated in Guzzle. For this, we need to go to the dependency section and choose the generate option. Guzzle will generate a graph showing the relationship between the different activities in our pipeline.

<img width="1000" src="/img/docs/how-to-guides/pipeline/pipeline_1.png" />

## Pipeline Configurations
|Properties|Description|
|-- |-- |
|Databricks multitask pipeline| - In Guzzle, User can configure the pipeline as multitask databricks job. The ability to run multiple tasks as a directed acyclic graph (DAG) <br /> - In multitask job, the user will have the option to configure new job clusters and use them inside the activity. <br /> - Multitask pipeline can run only in databricks compute. <br /> - Guzzle will rely on the status API to fetch multitask pipeline status. in case of status API is down or not reachable, it will retry for a certain interval and after that, It will mark the pipeline as FAILED and NOT_STARTED activity as ABORTED. It will not wait by checking the activity status from the Guzzle repository. <br /> - Multitask job doesn't support external activity - show validation error, if an external activity is configured and the pipeline is multitask pipeline. <br /> - Multitask job will be run from the pipeline thread and wait until it completes its execution. | 
|Auto Dependency| - Auto Dependency defines how subsequent activities depend on previous activities, determining the condition of whether to continue executing the next task. If we want to perform a second activity on the data generated in the output of the first activity we must select the Auto Dependency option.|
|Parallel run| - Parallel run number of guzzle activity to run in parallel. For example, We have defined parallel run configuration as 3, Guzzle will run 3 activities in pipeline simultaneously|

## Settings when adding Activtiy to pipeline
When clicking on Setttings button for a pipeline we get will be able to update following properties for actvity when exeucting as part of pipeline

|Property|Description|
|-- |-- |
|Override databricks settings|This will let you update the databricks compute settsing for a specifci job in pipelie
|Override synapse spark settings|Tihs lets you update teh spar
|Retry| - There are instances where activity fails in a pipeline due various reasons like network connectivity or other issue and we want to retry pipeline after it failed. <br /> - This feature is only supported when activity is run as part of pipeline. <br /> - Pipeline is to reattempt the same job before moving to next job (in same execution thread assuming parallel jobs are triggered). <br /> -  Retry properties <br /> - Retry status (Failed): If pipeline in Failed state, guzzle will try the job.  <br /> -  Retry interval (seconds) <br /> - Max retry - Number of time Guzzle will retry pieline. |
|Dependency graph (lineage)| - With the help of dependancy graph, we can see ordered flow of pipeline from start to end.|
|Parameters|Guzzle support various parameters that you can override or use in you application. we can set parameter at below hierarchy: <br /> 1. Pipeline Activity <br /> 2. Pipeline level <br /> 3. Runtime Popup <br /> Please check below documentation for <a href="/docs/how_to_guides/parameters/Parameters">Guzzlee parameters</a> and <a href="/docs/how_to_guides/parameters/spark_parameters">spark parameter</a>.|



## Dependency graph (lineage)
With the help of dependancy graph, we can see ordered flow of pipeline from start to end

<img width="1000" src="/img/docs/how-to-guides/pipeline/pipeline_2.png" />

## Pipeline UI Features
- We can define list of activites in pipeline. Guzzle support interactive UI feature that we can use to create pipeline.
- Guzzle supports drag and drop to arrange activities inside the pipeline.
- Guzzle allows easy way to pass parameter to individual activities.

## Pipeline parameters
- Parameters are defined at the pipeline level, and can be modified during a pipeline run. Pipeline parameters can be used to control the behavior of a pipeline and its activities, such as by passing in the the path of a file to be processed.

### How to define a pipeline parameter
To define a pipeline parameter, follow these steps:

- click on "add parameters" in activity parameters section, 
- here you can define pipeline parameters name and value. whatever parameter you pass in pipeline level are takes highest precedence.
<img width="1000" src="/img/docs/how-to-guides/pipeline/pipeline_parameters.png" />


## Dynamic Activity support in the pipeline

- Using this feature, User can configure the datastore in the pipeline. he has to specify SQL and configure one or more activities. he has the same options available for which are available to other activities.
- When the pipeline will execute, It will prepare an activity list based on the SQL query results. for each row, it will add configured activities.
- If the query returns zero records it will not add any dynamic activity in the pipeline and continue execution with available activities.
- User can configure multiple datastore and in one datastore multiple activities.
- Users can use a static value or placeholder for the activity name and activity parameter. He can use the column name as a placeholder in #{column_name} format. when it evaluates the pipeline it will be replaced with the actual value of that column.
- If User wants to prevent the dynamic activity creation or parameter passing, he can set null value or null string in the column name.
- When Guzzle will detect a null value or null string in the parameter name or value, it will not pass that parameter to activity.
- If a null value is found for the activity name placeholder, It will not add an activity for that record.
- User can also use Guzzle standard placeholder ${placehodler} inside the datastore sql to pass a value at runtime.

### Supported datastores:
1. JDBC
2. Azure SQL
3. Azure Synapse Analytics
4. Redshift
5. Snowflake

### Placeholder format
- #{column_name}
- Users can not use placeholders with other text.
    - ex. in the activity name, he can not use values like ingestion_#{country}_activity. it will not replace the #{country} placeholder value. It required only placeholders.

## Pipeline resume and Partial run
|Parameters|Description|
|-- |-- |
|Partial Run guzzle.job_group.partial | - A Pipeline can also be configured to Partial load to allow pipeline execution to continue further even if any jobs within pipelines called in the Pipeline fails. <br /> - Please note if Partial Load is not enabled then pipeline execution, then guzzle stops right there as soon as there is any job failure occurs within pipelines. |
|Resume Pipeline guzzle.job_group.resume | - This feature allows to resume the job group or pipeline from where it has failed <br /> - When we resume the pipeline, Guzzle will rerun a FALIED activity or activities which are NOT_STARTED. It will run the FAILED activity from the pipelien where it failed last. This is useful when we need to start execution from failed job, rerunning entire pipeline from beginning is expensive. |
---
id: batch
title: Batch
---

### Introduction
- Batch is ordered run of jobs, which are grouped as stages, with one mandatory parameter which is : Business Date plus additional context parameters (or context columns)
- It brings in a concept of running jobs sequentially by business dates; it has  mode in which you initialize batches for  a given business date (date/hour  or even minutes) and guzzle will ensure it will run them in sequence and do catch up from point where it was left.
- Guzzle allows to define more tighter control like stage-pair where two stages are to succeed before it goes to next business date
- You can put additional dependency on other batches of systems  - example I can run foundation for “Order” system only if the foundation of “CRM” system is complete for a given business date 
- Batches lets you see the end to end batch time, flexibility to do catch up run
- Batches have built in capabilities to support catch-up run where it will run all the business dates (or open batches) in ascending order for which a given stage[s] is outstanding (haven't run)
- Batches provide the notion of context columns starting from system_name (or batch_name) and other columns like: location, workspace, etc which can be used to by jobs to either organize or partition data or apply specific logic.

### Creating a Batch with UI
- To create a new batch, navigate to the Author tab in Guzzle (represented by the pencil icon), then click the three dots in Batch section from sidebar and choose Batch from the menu.

Guzzle will display the Batch UI where you can find:

- All stages that can be run within the Batch and respective Job Groups. Here we can map set of pipeline with stage.
- Batch configurations Settings from right setting icon, We can set Validate SQL, Partial Load, and Rerun batch.
- We can configure stage pairing from Batch UI
- If we want to run our batch again then we can use Rerun batch option that guzzle provides, by default if our batch is initialize of one business date then we can not initialize it again.

<img src="/img/docs/how-to-guides/batch/batch-ui.png"/>

### Why do we need Batch?
- To have strict dependencies in data flows - whether its stages in the data flow, or cross-data flow dependencies
- catch up the historical dates run which are pending
- Resume the workflow at the point of failure.

### Batch Initialization
- Before running the batch its mandatory to initialize batch with business date, It needs mandatory business date as parameter along with context columns.
- You can initialize batch by clicking on initialize icon, it will open pop up for initialize batch.
- You can do init with specific business date , or range with from and to date.
- By default you can not initialize batch of historical business dates, you have to use rerun batch feature.
- Guzzle supports 3 different option to initialize batch:
    - **Business Date**: We can initialize Batch based on specific business data. Just need to define business date and timestamp. Guzzle will initialize batch for that particular business date. Catchup feature is only supported for this option only. If we already have Batch initialize for that business date then Guzzle will make it as aborted.
    - **Business Date Range**: This option helps to initialize Batch from certain date range. We can define From date and End date. We can also define interval between next Batch run. If we don't set From date then Guzzle will take Last Batch run business date with increment of 1. If we don't set To business date then Guzzle will take current date as to business date.
    - **Increment**: For incremental initialize, Guzzle expects to have atleast 1 Batch for business date. We have to select Number of increments and Interval. We can select interval based on Day, Hour, Minute and second.

<img width="450" height="400" src="/img/docs/how-to-guides/batch/batch_1.png"/>

### Batch Running
- You can run batch by clicking run button from top.
- Once the batch is initialized, we can run the batch in guzzle UI. Batch run tries to run all the batch runs which are candidate for run (OPEN or FAILED. SUCCESS , WARNING and ABORTED are all done and dusted).
- When we run the batch with catchup = True, Guzzle will try to run batch with previous business date if that is not successfully run.
- In Run dialog box, we can define stages that we need to run for batch.
<br />
<img width="550" height="600" src="/img/docs/how-to-guides/batch/run-batch.png"/>

### Batch Resume
- This feature allows to resume the job group or stages from where it has failed.
- You can resume your batch from run popup expand override internal parameters option, initialize <b>guzzle.stage.resume</b> parameter to True.
- Rerun of batches and Resume flag are independent concept though they may appear similar. Rerun feature allows one to re-init the batches for past periods even though system is moved future days.
- Batch resume which will rerun a FAILED stages or stages which are NOT_STARTED. But it does run the FAILED batch from the job where it failed last.
- Hence the resume guzzle.stage.resume allows to achieve rerun from point it failed. This is useful when rerunning entire job group beginning is expensive.

<img width="550" height="700" src="/img/docs/how-to-guides/batch/resume.png"/>

### Batch Partial load
- A batch stage can also be configured to Partial Load to allow batch execution to continue further even if any jobs within pipelines called in the batch stage fails. - Please note if Partial Load is not enabled then batch execution stops right there as soon as there is any job failure occurs within pipelines called in the batch stage.
- You can enable partial load from setting option in right side setting icon. You can enable partial load checkbox.
- When a stage is defined as Partial=true, Guzzle will proceed to run all the job groups with partial=true. If a job group runs as partial=true, the jobs in that job group will continue to run even if the previous job fails. Atleast one job in each job group that are tagged to stage has to succeed for guzzle to mark the stage as SUCCESS or WARNING.

<img width="600" height="400" src="/img/docs/how-to-guides/batch/batch_3.png"/>

### Batch Rerun
- You will have to mark Batch as "Rerun" if it you want to re-initialize batches for historical dates (either for a rerun or run the dates which got missed out.
- Similarly when running a particular stage for historical date, "Rerun" is required to be enabled for that stage to ensure that it can run for historical date.
- This two Rerun settings are independent (one can be set without other)- there will be scenario where you want to run particular stage in batch to be rerun for historical date without re-init or running entire batch (in this cases the stage and batch status will have to be updated from Guzzle repo) and rerun triggered. In batch config you just mark state as Rerun.

### Batch stage Pairing
<img width="600" height="400" src="/img/docs/how-to-guides/batch/batch_4.png"/>

- Guzzle allows to define more tighter control like stage-pair where two stages are to succeed before it goes to next business date.
<b>For example</b><br /> 
Date: 1 <br /> 
SRI -> Success <br /> 
FND -> Failed <br /> <br /> 
Date: 2 <br /> 
SRI -> Success <br /> 
FND -> <br />

- If stage pair is enabled for SRI and FND, If FND stage failed in BD 1, then for 2nd BD it wont run SRI. It will run FND of BD1 and then Guzzle will start execution of the day 2.
- When stage pair is not enabled the batch keeps moving the first stage (in this case SRI) irrespective of whether FND has run for that business date.

### Batch Status
| Status |Description|
|--- |--- |
|OPEN| - When batch is initialized <br /> - When batch complete one of the stage execution and other stages execution is pending. |
|SUCCESS| - When all stages are executed successfully|
|WARNING| - When one of the stage is run with WARNING status in case of partial allowed|
|FAILED| - When stage is FAILED due to pipeline FAILED <br /> - When Batch or Stage is stopped by User from UI with FAILED status. <br /> - Resume will work for FAILED status |
|ABORTED| - When stage or batch is stopped by User from UI with ABORTED status <br /> - When JVM is crested and heartbeat is not updated for configured time and Batch is in RUNNING state <br /> - Batch execution or Resume will not work for ABORTED status |

### Batch SQL Validation
- A batch stage also has option called Validate SQL which is used to write any SQL validation query which in turn, if evaluates to TRUE(If SQL statement will return more than one record) then batch execution continues to execute that particular batch stage and if it evaluates to FALSE then batch execution stops right there without executing that particular batch stage. 
- You can write validate SQL from right side setting button and you will see option of Validate SQL.
- This is most often used to handle upstream dependencies where you may want to check first if any upstream batch is completed successfully or not before proceeding with current batch stage load. 
- Such upstream Guzzle batch status can always be queried using Guzzle runtime audit table batch_control or even by querying a table job_info for checking upstream individual job level statuses.

<img width="600" height="400" src="/img/docs/how-to-guides/batch/validate_sql.png"/>

:::note
- If the Guzzle job submission fails to spark application, the status of the Activity/Batch/Pipeline will be marked as failed. In case the Pipeline/Batch thread crashes, the Activity status will be changed to ABORTED after a 15-minute interval.
- If the Spark application is unable to retrieve Guzzle configurations, the Guzzle activity status for Databricks compute will be set to NOT_STARTED, and the Batch/Pipeline status will be marked as FAILED. In Synapse compute, the activity status will also be NOT_STARTED, but the Batch/Pipeline status will be either RUNNING or SUCCESS.
- If spark application (Heartbeat of the job) is not able to update Guzzle activity in specific interval time then Guzzle will be marked that job as ABORTED. You can set 'Job aborted timeout' to 300000 to prevent this situation. You can find this setting in `Manage -> Environment config -> Timeout and Sync -> Job heartbeat configuration -> Job Aborted Timeout`.
:::
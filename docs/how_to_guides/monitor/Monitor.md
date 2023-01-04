---
id: monitor
title: Monitor
---

This Article provides information about Guzzle monitor tab and gives information about how to filter job, view job logs, graphs and monitor status of job.

In monitor Guzzle lists all your job which you have run before or currently running. You can filter jobs to search specific jobs through different. Broadly Guzzle provides viewing the jobs by four different views. You can see the batches, pipeline, activities and schedules and drill-down the subsequent jobs within each of them:
1. Batches
2. Pipeline
3. Activities


Guzzle monitor hsa following filter options which you can use to filter jobs by below filters :-

1. **Business Date** : This is to filter the jobs for particular business date
2. **Batch**: This lets you specify the batch name under which te job were run. In **Pipeline** and **Activities** view, it will show only those jobs which ran under the filtered batch
3. **Pipeline**: This lets you specify the pipeline under which a given job were run. In **Activities** view, it will show only those jobs which ran under the filtered batch. In **Batch** view it will only show batches which included the filtered pipeline as one of the job
4. Activity: This lets you specify the activities In **Activities** view, it will show only those jobs which ran under the filtered batch. In **Batch** view it will only show batches which included the filtered pipeline as one of the job        
5. Schedule        
6. Start Date       
7. End Date         
8. Status          
9. Job ID           
10. Parameter       
11. Message 

Guzzle Gives you ability to download all jobs listing through click on Excel <img width="20" src="/img/docs/how-to-guides/monitor/monitor0.png" /> or CSV <img width="20" src="/img/docs/how-to-guides/monitor/monitor1.png" /> for format

Guzzle monitors have three different aspects to monitor jobs.
1. Job logs
2. Gantt chart
3. Graph

Let’s discuss Job logs

## Job logs

To view job logs 
1. Goto Monitor from top navigation bar
2. Filter you job from dropdowns
3. Click on <img width="20" src="/img/docs/how-to-guides/monitor/monitor2.png" />

In this section guzzle gives information about job metadata and shows running job logs,

Guzzle contains below Job related metadata.

Guzzle creates multiple logs file for long file size guzzle follow below conventions to save multiple log files

    <job name>_<job instance id>.log.<n> where n is the number of file counts.

|Property|Description|
|--- |--- |
|Name|Guzzle job config name|
|Module|In which Module this job falls|
|Job ID|Guzzle creates a unique job instance ID for every running job.|
|Business Date|Selected business date while run job from user|
|Start Time|Start time of job run|
|End Time|End Time of job run completed|
|Status|Status of the job guzzle come up with below status <br/>1. Not Started<br/>2. Running<br/>3. Success<br/>4. Failed<br/>5. Warning|
|Message|Once a job is completed successfully it shows the message as total and partial and failed count. If the job failed with some exception or error then it will show error as a message.|
|Batch ID|Guzzle creates Uniquely batch ID for batch|
|Stage ID|Guzzle creates Uniquely stage ID for stages|
|Duration|Total taken time to run job|
|Previous Business Date|Previously completed business job dates|
|Environment|In which environment job going to run|
|Pipeline|Showing pipeline name if job is part of pipeline|
|Compute|Compute name on which job is going to run|


## Gantt chart

Guzzle will generate charts for work unit and publish according to job run with dependency.

To view Gantt charts of you running job 

1. Goto Monitor from top navigation bar
2. Filter you job from dropdowns
3. Click on <img width="20" src="/img/docs/how-to-guides/monitor/monitor3.png" /> 
4. You can see Gantt chart screen

## Graph

Guzzle will create a graph for a running job if there is any dependency then Graph will represent according to that.

To view Graph of job

1. Goto Monitor from top navigation bar
2. Filter you job from dropdowns
3. Click on <img width="20" src="/img/docs/how-to-guides/monitor/monitor4.png" />
4. You can see Job Graph

User can do below actions as well from monitor

## Rerun job
1. Filter you job from dropdowns
2. Click on <img width="20" src="/img/docs/how-to-guides/monitor/monitor6.png" />

## Stop Job
- User can click on <img width="20" src="/img/docs/how-to-guides/monitor/monitor5.png" /> to terminate the RUNNING job. This option is available for Batch, Stage, Pipeline and Activity.  
- User can perform stop action at any level from Job hierarchy ( Batch -> Stage -> Pipeline -> Activity ). ex. While Batch is running user can stop entire Batch or specific Stage, Pipeline or Activity.
- Guzzle follows the child to parent flow, Which means parent job will wait till the child jobs are terminated. ex. When user terminate Batch, It will first terminate running Activities then move to Pipeline, Stage and Batch.
- Below are the options that user can provide while terminating job:
    - Status: ABORTED | FAILED
        - Terminated job and child jobs status.  
    - Force stop: TRUE | FALSE
        - When it is force stop, It will terminate the RUNNING and NOT_STARTED Activities as soon as possible. For NOT_STARTED Activities, it will be terminated once the execution start.
        - When it is not force stop, It will wait till the RUNNING or NOT_STARTED activities completes its execution. It will not submit new activity once the stop action is triggered.

## Abort Job
- User can click on <img width="20" src="/img/docs/how-to-guides/monitor/monitor7.png" /> to mark Batch as ABORTED when it is in OPEN or FAILED state. This option is available only for Batch.
- In some scenarios like when user don't want to rerun the FAILED batch or When batch is initialized but don't want to execute it so, he/she can use abort action to update record with ABORTED status.
- This option marks only batch record as ABORTED it will not update child record status
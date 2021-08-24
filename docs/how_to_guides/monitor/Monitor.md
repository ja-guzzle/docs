---
id: monitor
title: Monitor
---

This Article provides information about Guzzle monitor tab and give information about how to filter job, view job logs, graphs and monitor status of job.

In monitor Guzzle list all your job which you have run before or currently running, and you can filter jobs to search specific jobs through different cases. 

Guzzle monitor have many filter options which you can use it to filter jobs by below filters :-

1. Business Date 
2. Batch        
3. Pipeline         
4. Activity        
5. Schedule        
6. Start Date       
7. End Date         
8. Status          
9. Job ID           
10. Parameter       
11. Message 

Guzzle Gives you ability to download all jobs listing through click on Excel (![image alt text](/img/docs/how-to-guides/monitor/monitor0.png)) or CSV (![image alt text](/img/docs/how-to-guides/monitor/monitor1.png)) for format

Guzzle monitors have three different aspects to monitor jobs.
1. Job logs
2. Gantt chart
3. Graph

Let’s discuss Job logs

## Job logs

To view job logs 
1. Goto Monitor from top navigation bar
2. Filter you job from dropdowns
3. Click on (![image alt text](/img/docs/how-to-guides/monitor/monitor2.png))

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
3. Click on (![image alt text](/img/docs/how-to-guides/monitor/monitor3.png)) 
4. You can see Gantt chart screen

## Graph

Guzzle will create a graph for a running job if there is any dependency then Graph will represent according to that.

To view Graph of job

1. Goto Monitor from top navigation bar
2. Filter you job from dropdowns
3. Click on (![image alt text](/img/docs/how-to-guides/monitor/monitor4.png))
4. You can see Job Graph

User can do below actions as well from monitor 

## Stop Running Job
1. Filter you job from dropdowns
2. Click on (![image alt text](/img/docs/how-to-guides/monitor/monitor5.png))

## Rerun job
1. Filter you job from dropdowns
2. Click on (![image alt text](/img/docs/how-to-guides/monitor/monitor6.png))


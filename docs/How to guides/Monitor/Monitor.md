This Article provides information about Guzzle monitor tab 
< In this tab Guzzle gives all details about job which is running in progress or completed before. >

and give information about how to filter job, view job logs, graphs and monitor status of job.

In monitor Guzzle listing all your job which we you have run before or currently running and

you can filter jobs to search specific jobs through different cases 

Guzzle monitor have many filter options which you can use it to filter jobs and they are listed below :-

1. Business Date -  < By date >
2. Batch            < By Batches that you have created > 
3. Pipeline         < By pipeline that you have created >
4. Activity         < By activities that you have created >
5. Schedule         < By schedules > 
6. Start Date       < Date when you have started job >
7. End Date         < By using end date of job >
8. Status           < By selecting status like "Success", "Aborted", "Failed", "Running", "Not started", "Warning". >
9. Job Id           < By job Id >
10. Parameter       < By using name and value pair. >
11. Message         < By using messages. >

Guzzle Gives you ability to download all jobs listing through click on excel (![image alt text](/img/docs/how-to-guides/monitor/monitor0.png)) or csv (![image alt text](/img/docs/how-to-guides/monitor/monitor1.png)) for format

Guzzle monitors have three different aspects to monitor jobs.
1. Job logs
2. Gantt chart
3. Graph

Let’s discuss about Job logs

## Job logs

To view job logs 
1. Goto Monitor from top navigation bar
2. Filter you job from dropdowns
3. Click on (![image alt text](/img/docs/how-to-guides/monitor/monitor2.png))

In this section guzzle gives information about job metadata and shows running job logs,

Guzzle contains below Job related metadata.

Guzzle creates multiple logs file for long file size guzzle follow below convenventions to save multiple log files

    <job name>_<job instance id>.log.<n> where n is the number of file counts.

<table>
  <tr>
    <td>Property </td>
    <td>Description</td>
  </tr>
  <tr>
    <td>Name</td>
    <td>Guzzle job config name</td>
  </tr>
  <tr>
    <td>Module</td>
    <td>In which Module this job falls</td>
  </tr>
  <tr>
    <td>Job Id</td>
    <td>Guzzle creates a unique job instance id for every running job.</td>
  </tr>
  <tr>
    <td>Business Date</td>
    <td>Selected business date while run job from user</td>
  </tr>
  <tr>
    <td>Start Time</td>
    <td>Start time of job run</td>
  </tr>
  <tr>
    <td>End Time</td>
    <td>End Time of job run completed</td>
  </tr>
  <tr>
    <td>Status </td>
    <td>Status of the job guzzle come up with below status <br/>
1. Not Started<br/>
2. Running<br/>
3. Success<br/>
4. Failed<br/>
5. Warning
</td>
  </tr>
  <tr>
    <td>Message</td>
    <td>Once a job is completed successfully it shows the message as total and partial and failed count. If the job failed with some exception or error then it will show error as a message.</td>
  </tr>
  <tr>
    <td>Batch Id</td>
    <td>Guzzle creates Uniquely batch id for batch</td>
  </tr>
  <tr>
    <td>Stage id</td>
    <td>Guzzle creates Uniquely stage id for stages</td>
  </tr>
  <tr>
    <td>Duration</td>
    <td>Total taken time to run job</td>
  </tr>
  <tr>
    <td>Previous Business Date</td>
    <td>Previously completed business job dates </td>
  </tr>
  <tr>
    <td>Environment</td>
    <td>In which environment job going to run</td>
  </tr>
  <tr>
    <td>Pipeline</td>
    <td>Showing pipeline name if job is part of pipeline</td>
  </tr>
  <tr>
    <td>Compute</td>
    <td>Compute name on which job is going to run</td>
  </tr>
</table>


## Gantt chart

Guzzle will generate charts for workunint and publish according to job run with dependency.

To view gantt chart of you running job 

1. Goto Monitor from top navigation bar
2. Filter you job from dropdowns
3. Click on (![image alt text](/img/docs/how-to-guides/monitor/monitor3.png)) 
4. You can see gantt chart screen

## Graph

Guzzle will create a graph for a running job if there is any dependency then Graph will represent according to that.

To view Graph of job

1. Goto Monitor from top navigation bar
2. Filter you job from dropdowns
3. Click on (![image alt text](/img/docs/how-to-guides/monitor/monitor4.png))
4. You can see Job Graph

User can do below actions as well from monitor 

## Stop Running Job
< To stop job we can use this symbol. >
1. Filter you job from dropdowns
2. Click on (![image alt text](/img/docs/how-to-guides/monitor/monitor5.png))

## Rerun job
< To run again this job we can use this symbol. >
1. Filter you job from dropdowns
2. Click on (![image alt text](/img/docs/how-to-guides/monitor/monitor6.png))


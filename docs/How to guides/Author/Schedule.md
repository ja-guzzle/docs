
This article provides information about Schedular support in Guzzle and what are different ways to schedule a guzzle job.

In Guzzle Users can schedule their job as per specific rules and periods. 

For scheduling jobs users can schedule by GUI or Cron settings

Guzzle provider below functionality and parameters for Schedule

|Property|Description|Default Value|Required|
|--- |--- |--- |--- |
|Recurrence by|Specify the recurrence to follow by which rules. It is mainly contains By Months, Week Days, Days, Hours, Minutes, Seconds|Days|Yes|
|Every|Specify to continue cycle on every period|True|Yes|
|Exactly|Specify for follow exact time period|False|As per requirements.|
|Activated|Specify if you want to activate the schedule from now.|True|No|
|Allow Concurrent Runs|Specify to run jobs concurrently|False|No|
|Runs Jobs in|Sequential : 
Jobs will run in sequential manner user have to specify the continue on failure as true or false
Parallel : Jobs will run in a parallel manner.|Sequential|Yes|


## Jobs to run

In this section the user has to specify the list of jobs they want to run on scheduled time.

Guzzle provides global level parameter settings to give in all scheduled job by clicking on Global Parameter and also user can put their specific job parameter by clicking on add parameters

For the specified jobs select type , Job Name, Stage Name (only if type is batch), Parameters.

User can provide specific compute, environment, and quantity resource by clicking on (![settings](/img/docs/how-to-guides/author/schedule.png))



In this article default timeout for syncing job configs are given you can change it as per your choice and save it by clicking on save.

Guzzle use below default timeout for syncing job configs.
## Sync Job Azure Databricks Configuration

|Properties|Default Value(MilliSeconds)|Discription|
|--- |--- |--- |
|Sync Interval|5000|Guzzle performs databricks API call to fetch job status which is submitted to databricks compute, on given interval guzzle will sync the job status|
|Sync Interval on Error|30000|if databricks API throws any http status error while fetching job status, then Guzzle will retry on given interval|
|Sync Timeout On Error|900000|Guzzle will terminate the process if timeout occurs within given interval|
|Job Submit Interval On Error|60000|When Guzzle submitted job to databricks, gives any internal error Guzzle will sync on given interval|
|Job Submit Timeout On Error|900000|Guzzle will terminate the submitted job if timeout occurs within given interval|

## Job Heartbeat Configuration

|Properties|Default Value(MilliSeconds)|Discription|
|--- |--- |--- |
|Heartbeat Update Interval|5000|When Guzzle Job starts, It adds a heartbeat entry in a repo and updates it at every given seconds interval until the job completes its execution.|
|Job Aborted Timeout|60000|If the last updated heartbeat is before 1 minute from now then Guzzle API will mark that job as ABORTED.|



## Data Sampling Configuration

|Properties|Default Value(MilliSeconds)|Discription|
|--- |--- |--- |
|Sample Job Check Interval|1000|Data Sampling Heartbeat will Update every given Interval|
|Cluster Heartbeat Update Interval|1000|Data Sampling Heartbeat will Update every given Interval|
|Ideal Timeout||Data Sampling App will terminate after give ideal timeout|
|Cluster Start Timeout||While starting sampling cluster, if cluster is not started successfully after configured time. it will be considered as cluster start timeout and marked it's status as STOPPED|



## Sync Azure Data Factory Configuration

|Properties|Default Value(MilliSeconds)|Discription|
|--- |--- |--- |
|Sync Interval|5000|Guzzle will Synchronize the job status from ADF at every given seconds Interval|
|Sync Interval on Error|30000|If ADF throws any http status error while fetching job status, then Guzzle will retry on given ADF Synchronize Interval Error time|
|Sync Timeout On Error|900000|Guzzle will terminate the ADF process if ADF synchronize timeout occurs within given interval|
|Job Submit Interval On Error|60000|When Guzzle submitted job to ADF, gives any internal error then Guzzle will sync on given ADF Submit Interval Error|
|Job Submit Timeout On Error|900000|Guzzle will terminate the ADF Job if ADF synchronize timeout occurs within given interval|


Guzzle will give you the ability to change this default setting. You can follow below steps to change the default setting

Step 1 :  Go to Admin from the top navigation bar.

Step 2 :  Go to Environment Config and Click on Timeout and Sync

Step 3 :  Update the timeout settings.

** Interface of Timeout and Sync page is **

![image alt text](/img/docs/how-to-guides/administrator/environment-config/timeout_&_sync_1.gif)
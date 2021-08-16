
In this article default timeout for syncing job configs are given you can change it as per your choice and save it by clicking on save.

Guzzle use below default timeout for syncing job configs.
## Sync Job Azure Databricks Configuration

|Properties|Timeout (MilliSeconds)|
|--- |--- |
|Sync Interval|5000|
|Sync Interval on Error|30000|
|Sync Timeout On Error|900000|
|Job Submit Interval On Error|60000|
|Job Submit Timeout On Error|900000|

## Job Heartbeat Configuration

|Properties|Timeout (MilliSeconds)|
|--- |--- |
|Heartbeat Update Interval|5000|
|Job Aborted Timeout|60000|



## Data Sampling Configuration

|Properties|Timeout (MilliSeconds)|
|--- |--- |
|Sample Job Check Interval|1000|
|Cluster Heartbeat Update Interval|1000|



## Sync Azure Data Factory Configuration

|Properties|Timeout (MilliSeconds)|
|--- |--- |
|Sync Interval|5000|
|Sync Interval on Error|30000|
|Sync Timeout On Error|900000|
|Job Submit Interval On Error|60000|
|Job Submit Timeout On Error|900000|


Guzzle will give you the ability to change this default setting. You can follow below steps to change the default setting

Step 1 :  Go to Admin from the top navigation bar.

Step 2 :  Go to Environment Config and Click on Timeout and Sync

Step 3 :  Update the timeout settings.

** Interface of Timeout and Sync page is **

![image alt text](/img/docs/how-to-guides/administrator/environment-config/timeout_&_sync_1.gif)


In this article default timeout for syncing job configs are given you can change it as per your choice and save it by clicking on save.

Guzzle use below default timeout for syncing job configs.
## Sync Job Azure Databricks Configuration

|||
|--- |--- |
|Properties|Timeout (MilliSeconds)|
|Sync Interval|5000|
|Sync Interval on Error|30000|
|Sync Timeout On Error|900000|
|Job Submit Interval On Error|60000|
|Job Submit Timeout On Error|900000|

## Job Heartbeat Configuration

<table>
  <tr>
    <td>Properties</td>
    <td>Timeout (MilliSeconds)</td>
  </tr>
  <tr>
    <td>Heartbeat Update Interval</td>
    <td>5000</td>
  </tr>
  <tr>
    <td>Job Aborted Timeout</td>
    <td>60000</td>
  </tr>
</table>


## Data Sampling Configuration

<table>
  <tr>
    <td>Properties</td>
    <td>Timeout (MilliSeconds)</td>
  </tr>
  <tr>
    <td>Sample Job Check Interval</td>
    <td>1000</td>
  </tr>
  <tr>
    <td>Cluster Heartbeat Update Interval</td>
    <td>1000</td>
  </tr>
</table>


## Sync Azure Data Factory Configuration

<table>
  <tr>
    <td>Properties</td>
    <td>Timeout (MilliSeconds)</td>
  </tr>
  <tr>
    <td>Sync Interval</td>
    <td>5000</td>
  </tr>
  <tr>
    <td>Sync Interval on Error</td>
    <td>30000</td>
  </tr>
  <tr>
    <td>Sync Timeout On Error</td>
    <td>900000</td>
  </tr>
  <tr>
    <td>Job Submit Interval On Error</td>
    <td>60000</td>
  </tr>
  <tr>
    <td>Job Submit Timeout On Error</td>
    <td>900000</td>
  </tr>
</table>


Guzzle will give you the ability to change this default setting. You can follow below steps to change the default setting

Step 1 :  Go to Admin from the top navigation bar.

Step 2 :  Go to Environment Config and Click on Timeout and Sync

Step 3 :  Update the timeout settings.

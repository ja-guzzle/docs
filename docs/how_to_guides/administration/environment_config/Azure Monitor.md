---
id: azure_monitor
title: Azure Monitor
---

# Azure Monitor

Using Guzzle's Azure Monitor service, User can connect and send Guzzle Audits and Logs data to Log Analytics Workspace. User can also search and filter the logs, and setup monitoring or alerting mechanisms based on log or job audit events or may write a more advanced query to perform statistical analysis and visualize the results in a chart.


## Setup Azure Monitor

User can view the logs and audit data using [Log Analytics Workspace](https://docs.microsoft.com/en-us/azure/azure-monitor/logs/log-analytics-workspace-overview)

- User can create new Log Analytics Workspace in Azure Portal or use [default workspace](https://portal.azure.com/#blade/HubsExtension/Resources/resourceType/Microsoft.OperationalInsights%2Fworkspaces)
- Copy `Workspace ID` and `Primary Key` value from `Log Analytics Workspace > Agents management` section 
<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/administrator/environment-config/azure_monitor_default_workspace.png" target="_self" >
    <img width="1000" src="/img/docs/how-to-guides/administrator/environment-config/azure_monitor_default_workspace.png" />
</a>
- Configure Azure Monitor in Guzzle using `Manage -> Environment Config > Azure Monitor > Enable` section.
- It requires `Workspace ID` and `Primary Key` of Log Analytics Workspace
<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/administrator/environment-config/azure_monitor_guzzle_config.png" target="_self" >
    <img width="1000" src="/img/docs/how-to-guides/administrator/environment-config/azure_monitor_guzzle_config.png" />
</a>
- User can specify `Primary Key` value or key vault secret name
- By default, Guzzle creates two custom tables
  1. **GuzzleJobAudit** - to store Guzzle Job Audit data
  2. **GuzzleLog** - to store Guzzle Job and API logs
- User can also override custom table names 
- As soon as User press update button, It will verify the credentials and store it in `guzzle.yml` and `guzzle-api.yml` file
```yml
  guzzle:
    azure_monitor:      
      workspace_id: "xxxxxxxx-xxxx-xxxx-xxxxx-xxxxx"
      primary_key: "xxxxxxxxxxxx"
      job_audit_custom_log_name: "GuzzleJobAudit"
      job_log_custom_log_name: "GuzzleLog"
  ```

## Custom Logs Tables

1. **Guzzle Job Audit**
- When the Job execution is completed, It will generate Job Audit record in Log Analytics Workspace
- Guzzle Job audit custom log includes the below custom fields

| column name                   | data type |
|-------------------------------|-----------|
| TimeGenerated                 | datetime  |
| JobInstanceId_s | string    |
 | BatchId_s | string    |
 | ParentJobInstanceId_s | string    |
 | BusinessDate_t | datetime  |
 | batch_s | string    |
 | Name_s | string    |
 | Module_s | string    |
 | Tag_s | string    |
 | StartTime_t | datetime  |
 | EndTime_t | datetime  |
 | Status_s | string    |
 | Message | string    |
 | ExecutorId_s | string    |
 | ScheduleId_s | string    |
 | SourceName_s | string    |

2. **Guzzle Log**
- It will use Guzzle custom logger to send Guzzle Job and API logs to Log Analytics Workspace
- Guzzle Logs custom log includes the below custom fields

| Column name | Data type |
|-------------|-----------|
|TimeGenerated | datetime |
|JobInstanceId_s | string |
|Name_s | string |
|Module_s | string |
|Class_s | string |
|MethodName_s | string |
|ThreadName_s | string |
|Level | string |
|Message | string |


## Limitations
- If User updates credentials manually in `guzzle.yml` and `guzzle-api.yml` file. It required Guzzle API service to restart and in Analytics cluster It will take effect when new job is submitted or cluster is restarted.



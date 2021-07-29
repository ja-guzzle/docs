---
slug: api
title: Api
author: guzzle
author_title: guzzle
tags: [api, guzzle-docs]
---

# Guzzle Service Rest Api

welcome to the Guzzle Serices Rest Api Reference.

Representational State Transfer (REST) APIs are service endpoints that support sets of HTTP operations (methods), which provide create, retrieve, update, or delete access to the service's resources. This article walks you through:

The basic components of a REST API request/response pair.
Overviews of creating and sending a REST request, and handling the response.
Most REST APIs are accessible through our client libraries, which can be used to greatly simplify your client code.

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: '#005484',
      borderRadius: '10px',
      color: '#fff',
      padding: '0.3rem',
      marginRight: '0.6rem',
      fontWeight: 'bold',
      fontSize: '0.9rem'
    }}>
    {children}
  </span>
);


## Run Activity

Run Activity job via Guzzle Service Rest Api. below Endpoints allows users to run activity with given parameter  
### <Highlight> PUT </Highlight> Run Activity

```
http://<GUZZLE_API_URL>/api/execute/job?mode=default
```

### Query Parameter
<table>
  <tr>
    <td>mode</td>
    <td>String</td>
    <td>Specify the guzzle mode whether it is git or default</td>
  </tr>
</table>

### Body Parameter
<table>
  <tr>
    <td>name</td>
    <td>String</td>
    <td>activity name which you want to run</td>
  </tr>
  <tr>
  <th>jobPatameters</th>
  </tr>
  <tr>
    <td>system</td>
    <td>String</td>
    <td>Specify the system name</td>
  </tr>
  <tr>
    <td>location</td>
    <td>String</td>
    <td>Specify the location column name</td>
  </tr>
  <tr>
    <td>business_date</td>
    <td>String</td>
    <td>Specify the business_date for running activity job</td>
  </tr>
  <tr>
    <td>environment</td>
    <td>String</td>
    <td>Specify the environment name on which you want to run this batch</td>
  </tr>
  <tr>
    <td>guzzle.spark.name</td>
    <td>String</td>
    <td>Specify the spark name, guzzle will run batch on specified spark compute</td>
  </tr>
</table>

### Responses
<table>
  <tr>
    <td>jobInstanceId</td>
    <td>String</td>
    <td>Unique ID of the running activity job</td>
  </tr>
</table>

### Sample Request

```
PUT https://guzzle315.southeastasia.cloudapp.azure.com/api/execute/job?mode=default

body: {
    "name":"csv_lfs_demo",
    "jobParameters": {
        "system":"default",
        "location":"IN",
        "business_date":"2018-12-05 17:33:55",
        "environment":"test",
        "guzzle.spark.name":"azure-databricks"
    }
}

```    

### Sample Response

```
{
  "jobInstanceId":"210727113805146347"
}
```


------------




## Run Pipeline

Run pipeline job via Guzzle Service Rest Api. below Endpoints allows users to run activity with given parameter  
### <Highlight> POST </Highlight> Run Pipeline

```
http://<GUZZLE_API_URL>/api/batches/run_job_group?mode=<mode>
```

### Query Parameter
<table>
  <tr>
    <td>mode</td>
    <td>String</td>
    <td>Specify the guzzle mode whether it is git or default</td>
  </tr>
</table>

### Body Parameter
<table>
  <th>Parameters</th>
  <tr>
    <td>job_group</td>
    <td>String</td>
    <td>Specify the job group (also known as pipeline) name</td>
  </tr>
  <tr>
    <td>business_date</td>
    <td>String</td>
    <td>Specify the business_date for running pipeline job</td>
  </tr>
  <tr>
    <td>environment</td>
    <td>String</td>
    <td>Specify the environment name on which you want to run this pipeline jobs</td>
  </tr>
  <tr>
    <td>guzzle.spark.name</td>
    <td>String</td>
    <td>Specify the spark name, guzzle will run pipeline on specified spark compute</td>
  </tr>
</table>

### Responses
<table>
  <tr>
    <td>jobInstanceId</td>
    <td>String</td>
    <td>Unique ID of the running pipeline</td>
  </tr>
</table>

### Sample Request

```
PUT https://guzzle315.southeastasia.cloudapp.azure.com/api/batches/run_job_group?mode=default

body: {
  "parameters":{
    "business_date":"2021-07-29 12:54:59",
    "guzzle.spark.name":"azure-databricks",
    "job_group":"log_test_pipeline",
    "environment":"test"
  }
}
```    

### Sample Response

```
{
  "jobInstanceId":"210729072509451509"
}
```


------------



## Init Batch

To initialize the Batch via Guzzle Service Rest Api. below Endpoints allows users to initialize the Batch with given parameter  
### <Highlight> POST </Highlight> Init Batch

```
http://<GUZZLE_API_URL>/api/batches/initialize?mode=<mode>
```

### Query Parameter
<table>
  <tr>
    <td>mode</td>
    <td>String</td>
    <td>Specify the guzzle mode whether it is git or default</td>
  </tr>
</table>

### Body Parameter
<table>
  <th>contextParams</th>
  <tr>
    <td>system</td>
    <td>String</td>
    <td>Specify the system batch name</td>
  </tr>
  <tr>
    <td>business_date</td>
    <td>String</td>
    <td>Specify the business_date for initiate batch job</td>
  </tr>
  <tr>
    <td>environment</td>
    <td>String</td>
    <td>Specify the environment name on which you want to initiate the batch</td>
  </tr>
  <th>parameters</th>
  <tr>
    <td>guzzle.batch.catchup</td>
    <td>String</td>
    <td>Specify the batch catchup whether true or false, this is optional field</td>
  </tr>
</table>

### Responses
<table>
  <tr>
    <td>jobInstanceId</td>
    <td>String</td>
    <td>Unique ID of the running stage</td>
  </tr>
</table>

### Sample Request

```
PUT https://guzzle315.southeastasia.cloudapp.azure.com/api/batches/initialize?mode=default

body: {
  "contextParams":{
    "system":"batch_test"
  },
  "businessDate":"2021-07-29 00:00:00",
  "environment":"test",
  "parameters":{
    "guzzle.batch.catchup":"true"
  },
}

```    

### Sample Response

```
{
  "status":"SUCCESS",
  "batches":[
    {
      "batchId":210729073730758173,
      "contextParam":{
        "system":"batch_test"
      },
      "businessDate":"2021-07-29 00:00:00.0"
    }
  ],
  "message":null
}
```


------------




## Run Batch

Run Batch for specific job via Guzzle Service Rest Api. below Endpoints allows users to run stages with given parameter  
### <Highlight> POST </Highlight> Run Stage/Batch


```
https://<GUZZLE_API_URL>/api/batches/run_stage?mode=<mode>
```

### Query Parameter
<table>
  <tr>
    <td>mode</td>
    <td>String</td>
    <td>Specify the guzzle mode whether it is git or default</td>
  </tr>
</table>

### Body Parameter
<table>
  <tr>
    <td>environment</td>
    <td>String</td>
    <td>Specify the environment name on which you want to run this batch</td>
  </tr>
    <tr>
    <td>guzzle.spark.name</td>
    <td>String</td>
    <td>Specify the spark name, guzzle will run batch on specified spark compute</td>
  </tr>
  <tr>
    <td>stage</td>
    <td>String</td>
    <td>Specify the stages, for multiple stages are comma seperative ex: "STG,FND"</td>
  </tr>
  <tr>
    <td>system</td>
    <td>String</td>
    <td>Specify the system name</td>
  </tr>
</table>

### Responses
<table>
  <tr>
    <td>jobInstanceId</td>
    <td>String</td>
    <td>Unique ID of the running stage</td>
  </tr>
</table>

### Sample Request

```
POST https://guzzle315.southeastasia.cloudapp.azure.com/api/batches/run_stage?mode=default

body: {
  environment: "test"
  guzzle.spark.name: "azure-databricks"
  stage: "STG,FND"
  system: "batch_test"
}

```    

### Sample Response

```
{
  "jobInstanceId":"210727113805146347"
}
```


--------------

## Job Status

To Get the running Activity/Pipeline status

### <Highlight> GET </Highlight> Activity/Pipeline run status

```
http://<GUZZLE_API_URL>/api/job/{jobInstanceId}/status?mode=<mode>
```

### Path Parameter
<table>
  <tr>
    <td>job_instance_id</td>
    <td>String</td>
    <td>Specify the job instance id.</td>
  </tr>
</table>

### Query Parameter
<table>
  <tr>
    <td>mode</td>
    <td>String</td>
    <td>Specify the guzzle mode whether it is git or default</td>
  </tr>
</table>

### Responses
<table>
  <tr>
    <td>status</td>
    <td>String</td>
    <td>Status of the running job</td>
  </tr>
  <tr>
    <td>message</td>
    <td>String</td>
    <td>Job specific messages</td>
  </tr>
</table>

### Sample Request

```
GET https://guzzle315.southeastasia.cloudapp.azure.com/api/job/{jobInstanceId}/status?mode=default
```    

### Sample Response

```
{
  "status": "FAILED",
  "message": "null"
}
```


--------------


To Get the running Stage status

### <Highlight> GET </Highlight> Stage run status

```
http://<GUZZLE_API_URL>/api/batches/run_stage_status/{job_instance_id}?mode=<mode>
```

### Path Parameter
<table>
  <tr>
    <td>job_instance_id</td>
    <td>String</td>
    <td>Specify the job instance id.</td>
  </tr>
</table>

### Query Parameter
<table>
  <tr>
    <td>mode</td>
    <td>String</td>
    <td>Specify the guzzle mode whether it is git or default</td>
  </tr>
</table>

### Responses
<table>
  <tr>
    <td>status</td>
    <td>String</td>
    <td>Status of the running job</td>
  </tr>
  <tr>
    <td>message</td>
    <td>String</td>
    <td>Job specific messages</td>
  </tr>
</table>

### Sample Request

```
GET https://guzzle315.southeastasia.cloudapp.azure.com/api/batches/run_stage_status/{job_instance_id}?mode=default
```    

### Sample Response

```
{
  "status": "FAILED",
  "message": "null"
}
```

--------------

## Job Audit

To Get Job info and job parameters via Guzzle Service Rest API. 
### <Highlight> GET </Highlight> Job audit

```
http://<GUZZLE_API_URL>/api/job_audits/<job_instance_id>?mode=<mode>
```

### Path Parameter
<table>
  <tr>
    <td>job_instance_id</td>
    <td>String</td>
    <td>Specify the job instance id.</td>
  </tr>
</table>

### Query Parameter
<table>
  <tr>
    <td>mode</td>
    <td>String</td>
    <td>Specify the guzzle mode whether it is git or default</td>
  </tr>
</table>

### Responses
<table>
  <tr>
    <td>batchId</td>
    <td>String</td>
    <td>Unique ID of the running batch</td>
  </tr>
  <tr>
    <td>contextParams</td>
    <td>Object</td>
    <td></td>
  </tr>
  <tr>
    <td>business_date</td>
    <td>String</td>
    <td>business_date of running job</td>
  </tr>
  <tr>
    <td>jobInstanceId</td>
    <td>String</td>
    <td>Unique ID of the running stage</td>
  </tr>
  <tr>
    <td>name</td>
    <td>String</td>
    <td>running job name</td>
  </tr>
  <tr>
    <td>module</td>
    <td>String</td>
    <td>running job module</td>
  </tr>
  <tr>
    <td>tag</td>
    <td>String</td>
    <td>give job tag</td>
  </tr>
</table>

### Sample Request

```
GET https://guzzle315.southeastasia.cloudapp.azure.com/api/job_audits/<job_instance_id>?mode=default
```    

### Sample Response

```
{
  "job":{
    "jobId":{
      "batchId":"-1",
      "contextParams":{},
      "businessDate":"2021-07-29 15:03:49.0",
      "jobInstanceId":"210729093351671262",
      "parentJobInstanceId":"-1"
    },
    "name":"test-activity",
    "module":"ingestion",
    "tag":"pull",
    "startTime":"2021-07-29 09:33:52.0",
    "status":"NOT_STARTED",
    "totalSourceRecords":0,
    "totalProcessedRecords":0,
    "totalRecords":0,
    "invalidRecords":0,
    "discardRecords":0,
    "inserted":0,
    "updated":0,
    "deleted":0,
    "softDeleted":0,
    "tags":[],
    "sourceName":null,
    "executorId":null,
    "scheduleId":null
  },
  "jobParameters":{
    "prev_business_ts":"1900-01-01 00:00:00",
    "job_instance_id":"210729093351671262",
    "business_date":"2021-07-29 15:03:49",
    "environment":"test",
    "job_config_name":"act-git",
    "guzzle.spark.name":"spark_local",
    "stage_id":"-1",
    "batch_id":"-1"
  }
}
```
---
slug: api
title: Api
author: guzzle
author_title: guzzle
tags: [api, guzzle-docs]
---

# Guzzle Service Rest API

Welcome to the Guzzle Services Rest API Reference.

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

Run Activity job via Guzzle Service Rest API,below Endpoints allows users to run activity with given parameter  
### <Highlight> PUT </Highlight> Run Activity

```
http://<GUZZLE_API_URL>/api/execute/job?mode=default
```

### Query Parameter

|Name|Type|Description|
|--- |--- |--- |
|**mode**|String|Specify the guzzle mode whether it is **git** or **default**|

### Body Parameter

|Name|Type|Description|
|--- |--- |--- |
|**name**|String|activity name which you want to run|
|**Job Parameters**|||
|**system**|String|Specify the system name|
|**location**|String|Specify the location column name|
|**business_date**|String|Specify the business_date for running activity job|
|**environment**|String|Specify the environment name on which you want to run this batch|
|**guzzle.spark.name**|String|Specify the spark name, guzzle will run batch on specified spark compute|


### Responses

|Name|Type|Description|
|--- |--- |--- |
|**jobInstanceId**|String|Unique ID of the running activity job|


### Sample Request

```
PUT https://guzzle315.southeastasia.cloudapp.azure.com/api/execute/job?mode=default

```
Request Body

```json
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

```json
{
  "jobInstanceId":"210727113805146347"
}
```


------------




## Run Pipeline

Run pipeline job via Guzzle Service Rest API. below Endpoints allows users to run activity with given parameter  
### <Highlight> POST </Highlight> Run Pipeline

```
http://<GUZZLE_API_URL>/api/batches/run_job_group?mode=<mode>
```

### Query Parameter

|Name|Type|Description|
|--- |--- |--- |
|**mode**|String|Specify the Guzzle mode whether it is **git** or **default**|


### Body Parameter

|Name|Type|Description|
|--- |--- |--- |
|**Parameters**|||
|**job_group**|String|Specify the job group (also known as pipeline) name|
|**business_date**|String|Specify the business_date for running pipeline job|
|**environment**|String|Specify the environment name on which you want to run this pipeline jobs|
|**guzzle.spark.name**|String|Specify the spark name, guzzle will run pipeline on specified spark compute|

### Responses
|Name|Type|Description|
|--- |--- |--- |
|**jobInstanceId**|String|Unique ID of the running pipeline|


### Sample Request

```
PUT https://guzzle315.southeastasia.cloudapp.azure.com/api/batches/run_job_group?mode=default
```

Request Body

```json
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

```json
{
  "jobInstanceId":"210729072509451509"
}
```


------------



## Init Batch

To initialize the Batch via Guzzle Service Rest API. below Endpoints allows users to initialize the Batch with given parameter  
### <Highlight> POST </Highlight> Init Batch

```
http://<GUZZLE_API_URL>/api/batches/initialize?mode=<mode>
```

### Query Parameter
|Name|Type|Description|
|--- |--- |--- |
|**mode**|String|Specify the guzzle mode whether it is **git** or **default**|


### Body Parameter
|Name|Type|Description|
|--- |--- |--- |
|**contextParams**|||
|**system**|String|Specify the system batch name|
|**business_date**|String|Specify the business_date for initiate batch job|
|**environment**|String|Specify the environment name on which you want to initiate the batch|
|**parameters**|||
|**guzzle.batch.catchup**|String|Specify the batch catchup whether true or false, this is optional field|


### Responses
|Name|Type|Description|
|--- |--- |--- |
|**jobInstanceId**|String|Unique ID of the running stage|


### Sample Request

```
PUT https://guzzle315.southeastasia.cloudapp.azure.com/api/batches/initialize?mode=default
```
Request Body

```json

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

```json
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

|Name|Type|Description|
|--- |--- |--- |
|**mode**|String|Specify the guzzle mode whether it is **git** or **default**|


### Body Parameter
|Name|Type|Description|
|--- |--- |--- |
|**environment**|String|Specify the environment name on which you want to run this batch|
|**guzzle.spark.name**|String|Specify the spark name, guzzle will run batch on specified spark compute|
|**stage**|String|Specify the stages, for multiple stages are comma separative ex: "STG,FND"|
|**system**|String|Specify the system name|


### Responses

|Name|Type|Description|
|--- |--- |--- |
|**jobInstanceId**|String|Unique ID of the running stage|


### Sample Request

```
POST https://guzzle315.southeastasia.cloudapp.azure.com/api/batches/run_stage?mode=default
```
Request Body

```json
body: {
  environment: "test"
  guzzle.spark.name: "azure-databricks"
  stage: "STG,FND"
  system: "batch_test"
}

```    

### Sample Response

```json
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

|Name|Type|Description|
|--- |--- |--- |
|**job_instance_id**|String|Specify the job instance id.|


### Query Parameter

|Name|Type|Description|
|--- |--- |--- |
|**mode**|String|Specify the guzzle mode whether it is **git** or **default**|

### Responses
|Name|Type|Description|
|--- |--- |--- |
|**status**|String|Status of the running job|
|**message**|String|Job specific messages|


### Sample Request

```
GET https://guzzle315.southeastasia.cloudapp.azure.com/api/job/{jobInstanceId}/status?mode=default
```    

### Sample Response

```json
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

|Name|Type|Description|
|--- |--- |--- |
|**job_instance_id**|String|Specify the job instance id.|


### Query Parameter

|Name|Type|Description|
|--- |--- |--- |
|**mode**|String|Specify the guzzle mode whether it is **git** or **default**|


### Responses

|Name|Type|Description|
|--- |--- |--- |
|**status**|String|Status of the running job|
|**message**|String|Job specific messages|

### Sample Request

```
GET https://guzzle315.southeastasia.cloudapp.azure.com/api/batches/run_stage_status/{job_instance_id}?mode=default
```    

### Sample Response

```json
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

|Name|Type|Description|
|--- |--- |--- |
|**job_instance_id**|String|Specify the job instance id.|


### Query Parameter

|Name|Type|Description|
|--- |--- |--- |
|**mode**|String|Specify the guzzle mode whether it is **git** or **default**|

### Responses

|Name|Type|Description|
|--- |--- |--- |
|**batchId**|String|Unique ID of the running batch|
|**contextParams**|Object||
|**business_date**|String|business_date of running job|
|**jobInstanceId**|String|Unique ID of the running stage|
|**name**|String|running job name|
|**module**|String|running job module|
|**tag**|String|give job tag|


### Sample Request

```
GET https://guzzle315.southeastasia.cloudapp.azure.com/api/job_audits/<job_instance_id>?mode=default
```    

### Sample Response

```json
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
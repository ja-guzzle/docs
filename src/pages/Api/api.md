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

Run Activity job via Guzzle Servvice Rest Api. below Endpoints allows users to run activity with given parameter  
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
PUT https://guzzle315.southeastasia.cloudapp.azure.com/api/execute/job?mode=default

body: {
  environment: "test"
  guzzle.spark.name: "azure-databricks"
  stage: "STG,FND"
  name: "batch_test"
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

Run Activity job via Guzzle Servvice Rest Api. below Endpoints allows users to run activity with given parameter  
### <Highlight> PUT </Highlight> Run Pipeline

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
PUT https://guzzle315.southeastasia.cloudapp.azure.com/api/execute/job?mode=default

body: {
  environment: "test"
  guzzle.spark.name: "azure-databricks"
  stage: "STG,FND"
  name: "batch_test"
}

```    

### Sample Response

```
{
  "jobInstanceId":"210727113805146347"
}
```


------------



## Init Batch

Run Activity job via Guzzle Servvice Rest Api. below Endpoints allows users to run activity with given parameter  
### <Highlight> PUT </Highlight> Init Batch

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
PUT https://guzzle315.southeastasia.cloudapp.azure.com/api/execute/job?mode=default

body: {
  environment: "test"
  guzzle.spark.name: "azure-databricks"
  stage: "STG,FND"
  name: "batch_test"
}

```    

### Sample Response

```
{
  "jobInstanceId":"210727113805146347"
}
```


------------




## Run Batch

Run Batch for specific job via Guzzle Servvice Rest Api. below Endpoints allows users to run stages with given parameter  
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

Run Activity job via Guzzle Servvice Rest Api. below Endpoints allows users to run activity with given parameter  
### <Highlight> PUT </Highlight> Job Status

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
PUT https://guzzle315.southeastasia.cloudapp.azure.com/api/execute/job?mode=default

body: {
  environment: "test"
  guzzle.spark.name: "azure-databricks"
  stage: "STG,FND"
  name: "batch_test"
}

```    

### Sample Response

```
{
  "jobInstanceId":"210727113805146347"
}
```
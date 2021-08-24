---
id: working_with_rest_api
title: Working with REST Api
---

A REST API (also known as RESTful API) is an application programming interface (API or web API) that conforms to the constraints of REST architectural style and allows for interaction with RESTful web services.

This article outlines how to use Rest API as source in Ingestion activity. User can fetch data in different formats like JSON, XML, delimited and fixed.

:::note 
API is only used to read data (Is only use in source tab)
:::

Below are the different properties to create API ingest activity :

|Property|Description|Default Value|Required|
|--- |--- |--- |--- |
|HTTP method|Method of HTTP like get or post.<br/> **Get :** user can select this for fetching data.<br/> **Post :** user can select this to post data.|Get|Yes|
|URI|URI of rest API.|None|Yes|
|Basic Authentication|Provide authentication if their to access API after expanding this property|None|No|
|Config Request Parameter|Provide parameter name and its value if API has. User can give after expanding this property|None|No|
|Config Request Header|Provide header name and its value if API has. User can give after expanding this property|None|No|
|Response Format|Format of API response like JSON, XML, delimited, fixed|JSON|No|
|Character Set|It refers to the Set of Characters used to Read/Write test files. Allowed Values include: UTF-8, UTF-16 etc.|UTF-8|No|
|Override JSON root path|It can be used to specify an object or location where we want to take our data from. For eg- If we want to focus on one particular column of our data we can specify the Column name here.|None|No|
|Clean Column Name|Column name is formatted.empId is formatted in emp_id.<br/> Example : empId -> emp_id|False|No|
|Multi-Line|This is applicable when a single data record spans across multiple lines. This applies to both JSON files which are in array form or separate JSON documents.|False|No|
|Timeout|Timeout in second|300|No|
|Retry Interval|Retry interval in seconds. Ex on HTTP response status code:500 do retry interval every given seconds.|5|No|
|Config Response Storage|Users can select the response endpoint after expanding this property.|None|No|


## The interface for API format is shown in following gif :

![image alt text](/img/docs/how-to-guides/ingest_data/rest_1.gif)


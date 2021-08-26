---
id: amazon_s3
title: Amazon S3
---

[Amazon Simple Storage Service (Amazon S3)](https://aws.amazon.com/s3/) is an object storage service that offers industry-leading scalability, data availability, security, and performance. Guzzle provide this feature for reading and writing data from and to AWS.

We can use this datastore for reading data from Amazon (aws) and do validation and transformations on that data and write that data on CSV, JSON, XML, excel, etc. files.

This datastore is use for both source and target tabs.

:::info
1. Only Ingestion activity supports File based connectors. 
2. Guzzle only supports [Access Key ](https://docs.aws.amazon.com/AmazonS3/latest/userguide/RESTAuthentication.html#ConstructingTheAuthenticationHeader) based authentication for S3
:::

## Steps to create Datastore for S3

1. Click on the action button (![image alt text](/img/docs/how-to-guides/datastores/action_button.png) from the **Datastores **section in Left Navigation and select **Amazon S3 **connector. Alternatively user can launch from **Create New Datastore **link in Activity authoring UI or Copy Data tool

2. Enter the Datastore name for the new datastore and click OK

3. Update the connection name or leave the default. You can refer to [Connection and Environments ](https://guzzle.justanalytics.com/docs/how_to_guides/connection_and_environment/connection_and_environment) for more details

4. Enter the additional properties for the storage account as described below:

|Property|Description|Required|
|--- |--- |--- |
|Access Key ID|AWS access key ID|Yes|
|Secret Key|AWS secret access key|Yes|
|Region|Region of the S3 bucket|No|
|Bucket|S3 Bucket name|Yes|
|Path|This is the folder path within the S3 bucket. You can specify  / (root path) to point to entire container|Yes|

## Interface for Amazon S3 datastore

![image alt text](/img/docs/how-to-guides/datastores/amazons3_1.jpg)

## Known Limitation


---
id: ingest_blob_to_azureSQL
title: Ingest Data from Azure Blob Storage to AzureSQL Database
---

Ingest Data from Azure Blob Storage to Azure SQL Table

This tutorial will be covering an end to end use-case of loading data from an Azure Blob storage to a table in AzureSQL.  It will be using Guzzle’s ingestion activity which allows moving data from any source dataset to a target dataset applying various validations, transformations and rejections.

## In this tutorial we cover

* Pre-Requisites

* Load Dataset from Azure Blob storage to the Guzzle Platform through its Source Section

* Perform Validations and Transformations on the Dataset to check the accuracy of Data in order to mitigate any project defects

* Loading or configuring the Source Dataset to a Target Dataset or Table

* Applying a Failure Threshold to the Loaded Data to check the consistency and viability of the Data as a whole

## Pre-Requisites

* Since we use Guzzle as our Data Engineering Workbench for movement and transformation we must ensure it is set up and configured properly. Guzzle supports both on-premise and cloud deployment.

* Ensure that the file is saved in an available Source Location. This is essential as the Data will be ingested from Azure Blob storage.

* We can not use azure blob storage directly but as Storage account is mounted with azure databricks so by using mounted path and guzzle will help to fetch data from blob storage.

* Ensure that the Target Location is available in order to prevent any errors after the Data has been Transformed and Validated.

* Guzzle should be configured to support Azure Databricks and MYSQL. This is essential as we will be using a Azure Databricks and AzureSQL table in this tutorial. It will also help in exploiting all of Guzzle’s Features.

## Load Dataset from Blob Storage to the Guzzle Platform through its Source Section

The first step in the Ingestion Process would be to deal with the Source Section of Guzzle. Guzzle’s Source Section provides many features including specifying the file names, location of the file and the file format.

1. In the Datastore option choose the Dataset you would like Guzzle to work on. Ensure that the Dataset is stored in the Storage Container(Blob Storage) before choosing it and select the datastore DBFS because the storage account is mounted so Guzzle will fetch data from there.

2. Under the File Format choose the required File Type. Guzzle provides options from the delimited which is a fixed length system to multi-structured systems XML, JSON, REG-EXP.

3. According to your requirements you may choose to Trim Whitespaces, Introduce Headers and Infer Schema.

4. Guzzle also provides a feature to Sample your Data. This option can be seen in the top right corner of the Interface.

<a href="https://guzzle.justanalytics.com/assets/images/ingest_blob_to_azuresql_1-c5574936b43990547ca7cf4fdc64d9ff.jpg" target="_self" >
    <img src="/img/docs/tutorials/ingest_blob_to_azuresql_1.jpg" />
</a>

As seen above we have chosen the Delimited Format with the csv file pattern. The option to Preview Data can also be seen in the Top Right Corner.

After clicking on preview data : 


<a href="https://guzzle.justanalytics.com/assets/images/ingest_blob_to_azuresql_2-cf1e53e7f08d5bd47a6f976d12cd52cb.jpg" target="_self" >
    <img src="/img/docs/tutorials/ingest_blob_to_azuresql_2.jpg" />
</a>

## Perform Validations and Transformations on the Dataset to check the accuracy of Data 

The next step would be to perform Validations and Transformations on the Data . This is done to mitigate any project defects and will produce the best results possible. Guzzle helps in making Data Integration a much quicker process as it Automates the Validation Process.

1. Enter the Name of the Column you would like to perform the Validation or Transformation on.

2. For Transformations you can enter the Transformation you would like to perform on the chosen Column. For Example- If the distance is in miles you can convert it to kilometers by entering distance*1.6 in the Transformation Section.

3. You may also choose to Validate the Data Type of the Column. In the Data Type Section choose the Data Type you would like to Validate the Column with.  Also tick the Validate Data Type box located next to it.

4. You may also Validate the Column to be either Unique or Nullable. Just check the respective boxes.

5. In the SQL Validation you may enter a condition in order to Partition the Columns depending on whether or not they satisfy the given condition. You can run your validations by clicking the tick at the top of your interface.

<a href="https://guzzle.justanalytics.com/assets/images/ingest_blob_to_azuresql_3-e1b163b1cc2758e778792d1b5d2858bb.jpg" target="_self" >
    <img src="/img/docs/tutorials/ingest_blob_to_azuresql_3.jpg" />
</a>

Here we have Validated the Columns avee1, avee2 and difference for their data types and entered a condition to partition the column avee1 and avee2 while validating its Nullability and also, given SQL validation in the column difference.

## Loading or configuring the Source Dataset to a Target Dataset or Table

We now have to load the Source Dataset to a Target Dataset or Table. Guzzle provides many different Datastores from Local Files, Delta Tables, MySQL and Azure SQL. It allows configuring a Target Partition Scheme.

1. In the Datastore option choose the Target you would like to configure the Source Dataset to according to your requirement. Here we choose theAzureSQL as we are ingesting Data into an AzureSQL Table.

2. We can perform some operations like append and overwrite in the table. If the user wants to concatenate data then the user chooses to append and if the user wants to replace the whole data then the user chooses to overwrite.

3. Additionally, user can perform many other operations like Reliability level , Isolation Level,  Table Lock, Batch Size, Bulk Copy TImeout, and many others. 

4. We can now give any name to the Target in the Table Section. We can again Sample the Data through the Sample Data or Preview Data option given in the top right corner.

<a href="https://guzzle.justanalytics.com/assets/images/ingest_blob_to_azuresql_4-1fec1d7c1a26660dfc9624b751c19db8.jpg" target="_self" >
    <img src="/img/docs/tutorials/ingest_blob_to_azuresql_4.jpg" />
</a>

Here we have chosen Azure SQL as our Datastore and assigned the name stocks to our Table.

## Applying a Failure Threshold to the Loaded Data to check the consistency and viability of the Data as a whole

We now move onto the Reject Section where we deal with the Data which does not pass our Validations. This helps to check the consistency and viability of the Data as a whole.

1. We first choose the Datastore where we like to store the Rejects which do not pass our Validations. The Datastores we can choose range from Text Files to Tables.

2. We may also choose to apply a Failure Threshold which is basically the maximum percentage of failed records which our dataset can have.

	

<a href="https://guzzle.justanalytics.com/assets/images/ingest_blob_to_azuresql_4-1fec1d7c1a26660dfc9624b751c19db8.jpg" target="_self" >
    <img src="/img/docs/tutorials/reject_section_0.png" />
</a>

Here we store our rejects in a Local File in the Delimited Format and apply a Failure Threshold of 25%.


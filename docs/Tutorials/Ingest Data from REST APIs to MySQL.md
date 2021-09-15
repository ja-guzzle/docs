---
id: ingest_data_from_rest_api_to_jdbc
title: Ingest Data from REST Api to JDBC Database
---

Ingest Data from REST API’s to MySQL

This tutorial will be covering an end to end use-case of loading data from a REST api to a table in MySQL.  It will be using Guzzle’s ingestion activity which allows to move data from any source dataset to a target dataset applying various validations, transformations and rejections.

## In this tutorial we cover

* Pre-Requisites.

* Load Dataset from Azure Blob storage to the Guzzle Platform through its Source Section.

* Loading or configuring the Source Dataset to a Target Dataset or Table.

## Pre-Requisites

* Since we use Guzzle as our Data Engineering Workbench for movement and transformation we must ensure it is set up and configured properly. Guzzle supports both on-premise and cloud deployment.

* Ensure that the file is saved in an available Source Location. This is essential as the Data will be ingested from REST api’s.

* Ensure that the Target Location is available in order to prevent any errors after the Data has been Transformed and Validated.

* Guzzle should be configured to support Azure Databricks and MYSQL. This is essential as we will be using a MySQL table in this tutorial. It will also help in exploiting all of Guzzle’s Features.

## Load Dataset from Blob Storage to the Guzzle Platform through its Source Section

The first step in the Ingestion Process would be to deal with the Source Section of Guzzle. Guzzle’s Source Section provides many features including specifying the file names, location of the file and the file format.

1. In the Datastore option choose the Dataset you would like Guzzle to work on. Ensure that the Dataset is there in REST api before choosing it and select the datastore REST.

2. Give HTTP method requests like GET or POST and also give uri of api from where to fetch data.

3. If there are any request parameters or request headers, users can expand Configure Request Parameters and Configure Request Headers.

4. Under the Response Format choose the required File Type. Guzzle provides options from the delimited which is a fixed length system to multi-structured systems XML, JSON.

5. Guzzle also provides a feature to Sample your Data. This option can be seen in the top right corner of the Interface.

<!-- ![image alt text](/img/docs/tutorials/ingest_from_rest_mysql_1.jpg) -->
<a href="/img/docs/tutorials/ingest_from_rest_mysql_1.jpg" target="_self" >
    <img width="1000" src="/img/docs/tutorials/ingest_from_rest_mysql_1.jpg" />
</a>

As seen above we have chosen the JSON Format with the json file pattern. The option to Preview Data can also be seen in the Top Right Corner.

After previewing the data can be seen.
<!-- ![image alt text](/img/docs/tutorials/ingest_from_rest_mysql_2.jpg) -->
<a href="/img/docs/tutorials/ingest_from_rest_mysql_2.jpg" target="_self" >
    <img width="1000" src="/img/docs/tutorials/ingest_from_rest_mysql_2.jpg" />
</a>

## Loading or configuring the Source Dataset to a Target Dataset or Table

We now have to load the Source Dataset to a Target Dataset or Table. Guzzle provides many different Datastores from Local Files, Delta Tables and MySQL. It allows configuring a Target Partition Scheme.

1. In the Datastore option choose the Target you would like to configure the Source Dataset to according to your requirement. Here we choose the MySQL table as we are ingesting Data into a MySQL Table.

2. We can now give any name to the Target in the Table Section. We can again Sample the Data through the Sample Data or Preview Data option given in the top right corner.

<!-- ![image alt text](/img/docs/tutorials/ingest_from_rest_mysql_3.jpg) -->

<a href="/img/docs/tutorials/ingest_from_rest_mysql_3.jpg" target="_self" >
    <img width="1000" src="/img/docs/tutorials/ingest_from_rest_mysql_3.jpg" />
</a>

Here we have chosen a MySQL or JDBC table as our Datastore and assigned the name posts to our Table.


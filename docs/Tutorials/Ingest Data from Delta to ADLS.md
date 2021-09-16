---
id: ingest_data_from_delta_to_adls
title: Ingest Data From Delta table to Azure Data Lake Storage 
---


Ingest Data from Delta Table to Azure Data Lake Storage (ADLS Gen2)

This tutorial will be covering an end to end use-case of loading data from a Delta Table to ADLS Gen2.  It will be using Guzzle’s ingestion activity which allows to move data from any source dataset to a target dataset applying various validations, transformations and rejections.

## In this tutorial we cover

* Pre-Requisites.

* Load Dataset from Delta table to the Guzzle Platform through its Source Section.

* Loading or configuring the Source Dataset to a Target Dataset or Table.

## Pre-Requisites

* Since we use Guzzle as our Data Engineering Workbench for movement and transformation we must ensure it is set up and configured properly. Guzzle supports both on-premise and cloud deployment.

* Ensure that the file is saved in an available Source Location. This is essential as the Data will be ingested from the Delta table.

* Ensure that the Target Location is available in order to prevent any errors after the Data has been Transformed and Validated.

* Guzzle should be configured to support Azure Databricks and MYSQL. This is essential as we will be using an ADLS in this tutorial. It will also help in exploiting all of Guzzle’s Features.

## Load Dataset from Blob Storage to the Guzzle Platform through its Source Section

The first step in the Ingestion Process would be to deal with the Source Section of Guzzle. Guzzle’s Source Section provides many features including specifying the file names, location of the file and the file format.

1. In the Datastore option choose the Dataset you would like Guzzle to work on. Ensure that the Dataset is there in the Delta table before choosing it and select the datastore Delta table.

2. Users can choose any option like table or sql.

3. If the user chooses Table option then give the table name from where you want to fetch data.

4. If the user chooses SQL option then give sql query to fetch data from table.

5. User can also Configure Pre and Post SQL, Watermark, Configure columns restriction and Configure table dependency.

<!-- ![image alt text](/img/docs/tutorials/ingest_from_delta_to_adls_1.jpg) -->
<a href="https://guzzle.justanalytics.com/img/docs/tutorials/ingest_from_delta_to_adls_1.png" target="_self" >
    <img width="1000" src="/img/docs/tutorials/ingest_from_delta_to_adls_1.png" />
</a>

As seen above we have chosen the table option and table name is users. The option to Preview Data can also be seen in the Top Right Corner.

After previewing the data can be seen.
<!-- ![image alt text](/img/docs/tutorials/ingest_from_delta_to_adls_2.jpg) -->
<a href="https://guzzle.justanalytics.com/img/docs/tutorials/ingest_from_delta_to_adls_2.jpg" target="_self" >
    <img width="1000" src="/img/docs/tutorials/ingest_from_delta_to_adls_2.jpg" />
</a>

## Loading or configuring the Source Dataset to a Target Dataset or Table

We now have to load the Source Dataset to a Target Dataset or Table. Guzzle provides many different Datastores from Local Files, Delta Tables and MySQL. It allows configuring a Target Partition Scheme.

1. In the Datastore option choose the Target you would like to configure the Source Dataset to according to your requirement. Here we choose the ADLS Datastore as we are ingesting Data into an ADLS Storage account.

2. We can also give formats for files like csv,json,xml..

3. We can now give any name to the Target File. We can again Sample the Data through the Sample Data or Preview Data option given in the top right corner.

<!-- ![image alt text](/img/docs/tutorials/ingest_from_delta_to_adls_3.jpg) -->
<a href="https://guzzle.justanalytics.com/img/docs/tutorials/ingest_from_delta_to_adls_3.png" target="_self" >
    <img width="1000" src="/img/docs/tutorials/ingest_from_delta_to_adls_3.png" />
</a>

Here we have chosen ADLS as our Datastore and assigned the name users to our file name.


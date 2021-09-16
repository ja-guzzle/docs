---
id: hive
title: Hive
---

[Hive ](https://hive.apache.org/) is an open source data warehouse format storage layer that delivers reliability, security and performance on your data lake. Guzzle has extensive support of Delta tables including following features:

1. Delta tables are supported by all the activity types of Guzzle namely: Ingestion, Processing, Reconciliation, Check Constraint and Housekeeping

2. Support for referring Delta tables either as:

    1. Delta paths : example: **delta.`/mnt/data1/data/customerdb/customer`** 

    2. Delta tables (registered to internal or external metastore): example **customerdb.customer**

3. Ability to auto-create the Delta table if it's not present (only applies to Ingestion Module) including auto-creating tables with partition

4. Ingestion activity supports Append and Overwrite mode (overwrite happens at partition level if the table is partitioned) or at the entire table for non-partitioned tables. Refer to for ingesting data.

5. Processing activity supports Delta target using Template approach or Spark dataframe approach. Template approach leverages native DML commands when moving data from one delta table to other delta table using MERGE/UPDATE/INSERT INTO SELECT. Refer to [Working with Delta for Processing]

## Steps to create Datastore for Delta

1. Click on the action button (![image alt text](/img/docs/how-to-guides/datastores/action_button.png)) from the **Datastores **section in Left Navigation and select **DELTA **connector in Database section. Alternatively user can launch from **Create New Datastore **link in Activity authoring UI, or Copy Data tool 

2. Enter the Datastore name for the new datastore and click Ok

3. Update the connection name or leave the default. You can refer to [Connection and Environments](../connection_and_environment/connection_and_environment) for more details

4. Optionally enter the **Database. **This shall be used as schema name for source or target/reject tables in all the activities if schema name is not provided along with table name. This property is ignored if SQL is used for source or target; schema name prefix is provided along with table name or delta path is used.

5. Save the Datastore config. Optionally you can also Test the connection. 

## Interface for Hive datastore


<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/datastores/Delta_Lake_1.png" target="_self" >
    <img src="/img/docs/how-to-guides/datastores/Delta_Lake_1.png" />
</a>

## Known Limitation

--


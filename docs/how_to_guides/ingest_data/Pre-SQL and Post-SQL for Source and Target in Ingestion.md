---
id: pre-SQL_and_post-SQL_in_ingestion
title: Pre-SQL and Post-SQL for Source and Target in Ingestion
---

Pre-SQL is an SQL statement executed using the source and target connections before the pipeline is run. On the other hand Post-SQL statements are executed after the pipeline is run. Using Pre-SQL and Post-SQL statements helps in performing operations like insert, delete and update before and after the load.

If we want to add some data in database from CSV file, and we haven't created a table for that so in this case we can use this feature like "Pre-SQL" option in target tab to create table before 	entering data in that table and if we want to delete specific data from table before fetching all data we can use feature like "Pre-SQL" option in source tab of selected table.

Guzzle supports Pre-SQL and Post-SQL for Source and Target and their execution in Ingestion. It is used mainly for pre and post formatting of Data in a Database. 

Guzzle supports Pre-SQL and Post-SQL statements for Source and Target in Ingestion for different Datastore Technologies as listed in the table below: 

|Datastore technologies|Pre/Post SQL for source|Pre/Post SQL for target|
|--- |--- |--- |
|Delta|Yes|Yes|
|Hive|Yes|Yes|
|Azure SQL|Yes|Yes|
|Azure Synapse Analytics|Yes|Yes|
|JDBC|Yes|Yes|


Guzzle follows the following order of execution for Pre-SQL and Post-SQL statements:

1. Source Section — Pre SQL source

2. Source Section — Read table or SQL

3. Source Section — Post SQL source

4. Target Section — Pre SQL target

5. Target Section — Write data into target

6. Target Section — Post sql target
 
 
we can summarize as below:

  	* In source section : 
		1. pre sql syntax is executed in source table.
		2. table is read by guzzle.
		3. post sql syntax is executed in source table.

	* In target section : 
		1. pre sql syntax is executed in target table.
		2. write data in target table.
		3. post sql syntax is executed in selected table. 

This order of execution applies across all connectors in Guzzle.

In case of multiple SQL statements, the statements will be executed in the order the user sees them in the Interface.

<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/ingest_data/preSQL_and_postSQL.png" target="_self" >
    <img width="1000" src="/img/docs/how-to-guides/ingest_data/preSQL_and_postSQL.png" />
</a>       

If we want to execute multiple SQL statement we can do by adding it in next input text, and they will execute all in sequence as first in first out. Example, In the above figure there are 2 Pre-SQL statements. The INSERT INTO statement will be executed first followed by the DELETE FROM statement.


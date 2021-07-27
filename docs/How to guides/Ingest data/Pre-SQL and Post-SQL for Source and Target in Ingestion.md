Pre-SQL and Post-SQL for Source and Target in Ingestion

Pre-SQL is a SQL statement executed using the source and target connections before the pipeline is run. On the other hand Post-SQL statements are executed after the pipeline is run. Using Pre and Post SQL statements helps in performing operations like insert, delete and update before and after the load.

Guzzle supports Pre-SQL and Post-SQL for Source and Target and their execution in Ingestion. It is used mainly for pre and post formatting of Data in a Database. 

Guzzle supports Pre and Post SQL statements for Source and Target in Ingestion for different Datastore Technologies as listed in the table below: 

<table>
  <tr>
    <td>Datastore technologies</td>
    <td>Pre/Post SQL for source</td>
    <td>Pre/Post SQL for target</td>
  </tr>
  <tr>
    <td>Delta</td>
    <td>Yes</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Hive</td>
    <td>Yes</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Azure SQL</td>
    <td>Yes</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Azure Synapse Analytics</td>
    <td>Yes</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>JDBC</td>
    <td>Yes</td>
    <td>Yes</td>
  </tr>
</table>


Guzzle follows the following order of execution for Pre and Post SQL statements:

1. Source Section - Pre SQL source

2. Source Section - Read table or SQL

3. Source Section - Post SQL source

4. Target Section -  Pre sql target

5. Target Section -  Write data into target

6. Target Section -  Post sql target

This order of execution applies across all connectors in Guzzle.

In case of multiple SQL statements, the statements will be executed in the order the user sees them in the Interface.

![image alt text](/img/docs/how-to-guides/ingest_data/image_1.png)          

In the above figure there are 2 Pre-Sql statements. The INSERT INTO statement will be executed first followed by the DELETE FROM statement.


## Introduction
- The processing module of Guzzle simplifies data transformation by offering a built-in framework column support and various data processing operations, making the data processing easier and more efficient.
- Guzzle's processing module is designed for data processing within a unified datastore and offers support for Spark engine or Template-based data processing.
- In processing module, source and target datastore **must** be  same. Example: We can not choose Delta as source and hive as target in Guzzle. 
- To efficiently manage SCD type 2, Guzzle offers the built-in framework columns such as Effective Start Date and End Date.
- It provides support for standard actions such as appending, overwriting, merging, and more.
- Both Source SQL and Source table can be used with Guzzle processing modules.
- The processing module provides pre and post SQL to execute SQL. This pre-post SQL will execute before or after and read or writing operation. 
- It provides the feature for overwriting dependency 0f the tables. 
- In the target section, Guzzle provides the functionality to automatically create a table if it doesn't already exist. In ingestion module, Guzzle supports auto create in Delta, Hive and Hudi. For processing, Guzzle supports Delta,hive and Hudi (coming soon).

## How different operations works in Guzzle
|Operation|Description|Spark|Template|
|--- |--- |--- |--- |
|Append| - The append operation in Guzzle adds data to the target table, extending its existing records. <br /> - The option to truncate a partition is not available in the append operation.| - Guzzle utilizes Spark to process the data, which involves bringing the data into a Spark cluster for further processing. <br /> - Guzzle utilizes Spark's write mode to perform the append operation, allowing it to add data to the target table. | - Guzzle uses the "INSERT INTO <target_table> SELECT" statement to append data to the target table. <br /> - Guzzle uses "INSERT INTO <target_table> SELECT" statement, Guzzle executes a single query to append records to the target database. This query selects the data from the source table and inserts it into the specified target table in one operation, ensuring efficient and streamlined data appending.|
|Overwrite| - The overwrite operation in Guzzle is utilized to replace the existing records in the target table with the records from the source. It effectively overwrites the data in the target table with the new data from the source table. | Guzzle utilizes a temporary table to store and process the data during overwrite operation. The temporary table serves as an intermediate storage for the processed data before it is further manipulated or written to the target table. <br /> <b> Hive </b> <br /> - If partition column is configured -> It will use insert overwrite to overwrite that partition data. <br /> - It will use insert overwrite statement to overwrite data in that partition.  <br /> - If partition column is not configured -> It will truncate only those partitions for which source contains data. <br /> - Other partitions data will remain intact. <br /> - Click <a  href="https://Guzzle.justanalytics.com/docs/releases/2_4_0/Processing-behaviour-changes/">here</a> for details. <br /> <b>Delta</b> <br /> - If partition column is configured -> It will use insert overwrite statement to overwrite data in that partition. <br />  - If partition column is Not configured -> It will truncate full target table and insert source data into target database.| - For <b>synapse, snowflake, and SQL Server</b> template it uses two operations: <br /> - It will truncate target table. <br /> - Uses INSERT INTO <target_table> SELECT statement load data into target table. <br /> <b>Delta template</b> <br /> - It will use INSERT overwrite <targe_table> select operation to update data in target table. |
|Merge|<b>Incremental</b> <br /> - Incremental operation, If the source data already exists in the target table, Guzzle will update those specific records in the target table <br /> - If the source data is not present in the target table during an incremental operation, Guzzle will add those records into the target table. <br /> - the remaining records in the target table that are not present in the source will remain unchanged.  <br /> <b>Full Load</b> <br /> - Incremental operation, If source data is present in target table then it will update those data in target table. <br /> - If source data is not present in target table, it will add those records into target table.  <br /> - Remaining records marks as in active in target table.| - Spark will bring source and target data into memory. <br /> - It will perform merge operation and write data into temp table. <br /> - It will truncate target table(Truncate partition) and insert data from temp table to target table.  | - Template uses merge statement to perform incremental and full merge operation. |
|Effective Date Merge|<b> Incremental </b> <br /> - Incremental operation, If source data is present in target table and respective history column value is changed in source it will mark existing record as inactive using effective enddate and current record flag column value as N. <br /> - After that will create new record will updated value in target table using effective startdate column and correct record flag as Y. <br /> - If source data is not present in target table, it will add those records into target table. <br /> - Remaining records which are not present in source will remain as it is in target table. <br /> <b> Full </b> <br /> - Incremental operation, If source data is present in target table and respective history column value is changed in source it will mark existing record as inactive using effective enddate and current record flag column value as N. <br /> - After that will create new record will updated value in target table using effective startdate column and correct record flag as Y. <br /> - If source data is not present in target table, it will add those records into target table. <br /> - Remaining records which are not present in source will be marked as inactive records using effective end date and current flag. | - Spark will bring source and target data into memory. It will perform merge operation and write data into temp table. It will truncate target table(Truncate partition) and insert data from temp table to target table. | Template uses merge statement to perform incremental and full merge operation.  |
|Update only| - Guzzle will update target table records which are coming from source. It won’t add any new record. | Spark will bring source and target data into memory. It will perform update operation and write data into temp table. <br /> - It will truncate target table(Truncate partition) and insert data from temp table to target table. | It uses merge operation to update source data into target table. |
|Delete (Hard)| - Delete operation will delete all records which are coming from source.| - Spark will bring source and target data into memory. It will perform delete operation and write data into temp table. <br /> - It will truncate target table(Truncate partition) and insert data from temp table to target table. | It uses merge operation to delete data which are coming from source. |
|Delete (Soft)| - It will mark current flag record as inactive(N). It wont delete any records.| Same as Delete Hard. | Same as Delete Hard. |


## Spark Engine vs Template

|Spark|Template|
|--- |--- |
| Spark will bring data from the source in cluster, apply required transformation via spark dataframe API and send transformed data as result. |Template will directly compiles and run at datastore technology end and sends response back to Guzzle.|
| Spark used connector libraries to connect with datastore. | Guzzle's Template module utilizes JDBC connection to establish connections with data sources. However, when it comes to **Delta** data sources, Guzzle utilizes Spark SQL, allowing it to run seamlessly on a Spark cluster. |\
| We cant not modify behavior Processing of spark engine.  | Templates are flexible so user can customize or add new template. |
| Spark engine process data in spark cluster.  | Template execute queries in underlying datastore via JDBC connection. ** Guzzle Compute is not involved here ** |

## Spark Engine and Template support in datastore 

|Datastore|Spark|Template (Default template)|
|--- |--- |--- |
|Delta|Yes|Yes: Delta|
|Hive|Yes|No|
|Synapse Analytics Native|No|Yes: Synapse|
|Synapse Analytics (for databricks)|No|Yes: Synapse|
|Snowflake|No|Yes: Snowflake|
|JDBC|No|Yes: Select as per your database|
|Azure SQL|No|Yes: SQL Server|
|Apache Hudi|Yes ** (Coming Soon)|Yes ** (Coming Soon)|

:::note
* For other datastore technology, we can use default template. For example, we can use default template for MySQL and PostreSQL.
:::
    

## Framework Columns


|Framework column|Default Value|Data Type|Description|Append|Overwrite|Merge|Effective Date Merge|Update only|Delete (soft)|Delete (hard)|
|--- |--- |--- |--- |--- |--- |--- |--- |--- |--- |--- |
|w_created_ts | Current Timestamp |Timestamp| - Guzzle takes current timestamp as w_created_ts value. During the SCD type 2 and merge operation, Guzzle does not update the value of w_created_ts when adding a new entry of dimension. |Yes|Yes|Yes|Yes|No|No|No|
|w_refresh_ts | Current Timestamp |Timestamp|This framework column is use to get updated timestamp of the record when the data will change |Yes|Yes|Yes|Yes|Yes|Yes|No|
|w_current_record_flag |- By default, guzzle takes Y(Yes) for w_current_record_flag value. <br /> - If target record in present in marge operation or If record is inactive in w_eff_start_date_ts and w_eff_end_date_ts then guzzle will mark this column as N. <br /> - Custom values are not allowed in as w_current_record_flag.|String| This column will serve as a flag to indicate whether a particular record is the latest or not. |Yes|Yes|Yes|Yes|Yes|Yes|No|
|w_eff_start_date_ts | - By default, Guzzle takes effective start date based start date of SCD type 2. <br /> - If user wants to set custom date in UI then guzzle will take that value as w_eff_start_date_ts.  |Timestamp|This column is used to define the date from which the specific historical version is active |No|No|No|Yes|No|No|No|
|w_eff_end_date_ts |- By default, Guzzle takes effective end date based end date of SCD type 2. <br /> - If user wants to set custom date in UI then guzzle will take that value as w_eff_end_date_ts.|Timestamp|This column is used to define the date from which the specific historical version is inactive |No|No|No|Yes|No|No|No|
|w_sequence_key |By default, Guzzle takes w_sequence_key value based logic that we have implemented. <br /> - Custom values are not allowed in as w_sequence_key.|Bigint|This column is used to define system generated surrogate key. |No|No|Yes**|Yes**|No|No|No|
|w_version_key |By default, Guzzle takes w_version_key value based logic that we have implemented. <br /> - Custom values are not allowed in as w_version_key.|Bigint|This column is used to define version of each dimensions by primary key. |Bigint |No |No|No|No|Yes**|No|No|No|


:::note
* Yes** => Only applicable on spark engine.
* Check the behavior of each framework column with different operations. Click <a target="_blank" href="../../../static/documents/processing_module_2.1.0.xlsx">here</a>. 
:::

## Special Configurations

||Description|Append|Overwrite|Merge|Effective Date Merge|Update|Soft Delete|Hard Delete|
|--- |--- |--- |--- |--- |--- |--- |--- |--- |
|Primary Key|It utilizes the link between the source and target data.|No|No|Yes|Yes|Yes|Yes|Yes|
|Incremental|When updating records, only the target records that exist in the source will be modified, while the remaining existing records in the target will remain unchanged.|No|No|Yes|Yes|No|No|No|
|Merge Column| - Before merging records, the Guzzle checks whether the data in the specified merge column has been updated. If there is an update, the target records will be updated accordingly. However, if there is no update in the merge column, the target table will not be modified. <br /> - If the merge columns are not specified in configuration by default Guzzle considers all columns as merge column. <br /><br /> |No|No|Yes|No|Yes|No|No|
|History Column| - If the data in the history column is updated, the Guzzle will create new records in the target table. However, if there are no updates in the history column, new records will not be created in the target table. <br /> - If history columns are not specified in the configuration by default Guzzle considers all columns as History columns |No|No|No|Yes|No|No|No|


## How Guzzle generate merge column and history column list 
<b>Source Columns:</b> CustomerId    CustomerName    Age    Country <br /> <b>Target columns:</b> CustomerId, CustomerName, Age <br /><br /> 

<!-- 1. user define merge columns <br/> CustomerName, Age <br/> 2. we fetch source columns <br/> CustomerId, CustomerName, Age, Country<br /> 3. we fetch target column <br /> CustomerId, CustomerName, Age <br /> 4. intersect source(2) and target(3) columns <br /> CustomerId, CustomerName, Age <br /> 5. Remove the framework column from (4) <br /> CustomerId, CustomerName, Age -> (No framework column). <br /> 6. Remove the primary columns from (5), let's call it data columns <br /> CustomerName, Age <br /> 7. finally we intersect merge columns(1) with data columns(6). <br /> CustomerName, Age -->

|Steps|Example|
|--- |--- |
| User define merge columns in Guzzle UI | CustomerName, Age |
| Guzzle fetched source columns | CustomerId, CustomerName, Age, Country |
| Guzzle fetched target columns | CustomerId, CustomerName, Age |
| Guzzle do intersect of source(2) and target(3) columns | CustomerId, CustomerName, Age |
| Guzzle removes the framework columns | CustomerId, CustomerName, Age -> (No framework column). |
| Guzzle removes primary key columns | CustomerName, Age |

## How Pre SQL and Post SQL works

- PreSQL and PostSQL are used to execute SQL statements before and after the execution of the Processing operation.

### Order of statement execution
|Operation|Description|
|--- |--- |
|Source: pre_sql|When we submit Processing job, Guzzle will first executes source - PreSQL|
|Persist source SQL into temp table1||
|Target: pre_sql|Guzzle will executes PreSQLfor target.|
|Execute Processing operation query and insert data in temp table2|One PreSQL is executed from both the locations, Guzzle starts executing actual Processing operation. Guzzle will store result of the Processing operation to temporary table.|
|Truncate target table (if applicable)|In certain Processing operations, Guzzle truncate target table. For example, If we perform overwrite operation using template then Guzzle will truncate target table.|
|Copy from temp table2 to final table|Once we have processed data in target table, Guzzle will copy temporary table to target table|
|Source: post_sql|After compilation of Processing operation, Guzzle will execute PostSQL statement on source.|
|Target: post_sql|After source PostSQL, Guzzle will execute target PostSQL.|


## Examples

### Example 1
Configurations
- Operation: Merge
- Primary Key: id
- Merge Column: - 
- Incremental: False

Source
```
| id | name             | gender | birth_date | salary | system  | location |
| 2  | Maia Thams       | Male   | 1995-07-22 | 35034  | default | sg       |
| 3  | Che Millwall     | Male   | 1996-06-17 | 73643  | default | sg       |
| 4  | Alidia Duiguid   | Female | 1987-11-08 | 87962  | default | sg       |
| 5  | Lindon Corradini | Male   | 1998-07-20 | 90729  | default | sg       |
```

Target
```
| id | name               | gender | birth_date | salary | created_time          | updated_time          | is_record_present | system  | location |
| 1  | Gallagher Fairhall | Male   | 1996-03-08 | 93261  | 2017-01-01 17:54:52.0 | 2017-05-01 18:55:00.0 | Y                 | default | sg       |
| 2  | Maia Thams         |        | 1995-07-22 | 35034  | 2017-01-02 01:57:04.0 | 2017-05-02 10:00:00.0 | Y                 | default | sg       |
```

Result:
```
| id | name               | gender | birth_date | salary | is_record_present | created_time          | updated_time          | system  | location |
| 1  | Gallagher Fairhall | Male   | 1996-03-08 | 93261  | N                 | 2017-01-01 17:54:52.0 | {{current_timestamp}} | default | sg       |
| 2  | Maia Thams         | Male   | 1995-07-22 | 35034  | Y                 | 2017-01-02 01:57:04.0 | {{current_timestamp}} | default | sg       |
| 3  | Che Millwall       | Male   | 1996-06-17 | 73643  | Y                 | {{current_timestamp}} | {{current_timestamp}} | default | sg       |
| 4  | Alidia Duiguid     | Female | 1987-11-08 | 87962  | Y                 | {{current_timestamp}} | {{current_timestamp}} | default | sg       |
| 5  | Lindon Corradini   | Male   | 1998-07-20 | 90729  | Y                 | {{current_timestamp}} | {{current_timestamp}} | default | sg       |
```
- Record with id 1 is not present source so Guzzle is not considering that id in the result and mark it as inactive(Record is not present).

### Example 2
Configurations
- Operation: Merge
- Primary Key: id
- Merge Column: - 
- Incremental: True

Source
```
| id | name             | gender | birth_date | salary | system  | location |
| 3  | Che Millwall     | Male   | 1990-06-27 | 93000  | default | sg       |
| 4  | Alidia Duiguid   | Female | 1987-11-08 | 87962  | default | sg       |
| 5  | Lindon Corradini | Male   | 1998-07-20 | 90729  | default | sg       |
```

Target
```
| id | name               | gender | birth_date | salary | created_time          | updated_time          | is_record_present | system  | location |
| 1  | Gallagher Fairhall | Male   | 1996-03-08 | 93261  | 2017-01-01 17:54:52.0 | 2017-05-01 18:55:00.0 | Y                 | default | sg       |
| 2  | Maia Thams         |        | 1995-07-22 | 35034  | 2017-01-02 01:57:04.0 | 2017-05-02 10:00:00.0 | Y                 | default | sg       |
| 3  | Che Millwall       | Male   | 1996-06-17 | 73643  | 2017-01-02 14:38:55.0 | 2017-05-02 18:10:00.0 | Y                 | default | sg       |
```

Result:
```
| id | name               | gender | birth_date | salary | is_record_present | created_time          | updated_time          | system  | location |
| 1  | Gallagher Fairhall | Male   | 1996-03-08 | 93261  | Y                 | 2017-01-01 17:54:52.0 | 2017-05-01 18:55:00.0 | default | sg       |
| 2  | Maia Thams         |        | 1995-07-22 | 35034  | Y                 | 2017-01-02 01:57:04.0 | 2017-05-02 10:00:00.0 | default | sg       |
| 3  | Che Millwall       | Male   | 1990-06-27 | 93000  | Y                 | 2017-01-02 14:38:55.0 | {{current_timestamp}} | default | sg       |
| 4  | Alidia Duiguid     | Female | 1987-11-08 | 87962  | Y                 | {{current_timestamp}} | {{current_timestamp}} | default | sg       |
| 5  | Lindon Corradini   | Male   | 1998-07-20 | 90729  | Y                 | {{current_timestamp}} | {{current_timestamp}} | default | sg       |
```
- The incremental flag is true, Guzzle will not affect any target records, which are not present in the source.

### Example 3
Configurations
- Operation: Effective Date Merge
- Primary Key: id
- Merge Column: - 
- Incremental: False

Source
```
| id | name             | gender | birth_date | salary | system  | location |
| 2  | Maia Thomas      | Male   | 1990-01-01 | 35034  | default | sg       |
| 3  | Che Millwall     | Male   | 1996-06-17 | 73643  | default | sg       |
| 4  | Alidia Duiguid   | Female | 1987-11-08 | 87962  | default | sg       |
| 5  | Lindon Corradini | Male   | 1998-07-20 | 90729  | default | sg       |
```

Target
```
| id | name               | gender | birth_date | salary | created_time          | updated_time          | is_record_present | start_date            | end_date | system  | location |
| 1  | Gallagher Fairhall | Male   | 1996-03-08 | 93261  | 2017-01-01 17:54:52.0 | 2017-05-01 18:55:00.0 | Y                 | 2019-05-01 18:55:00.0 |          | default | sg       |
| 2  | Maia Thams         |        | 1995-07-22 | 35034  | 2017-01-02 01:57:04.0 | 2017-05-02 10:00:00.0 | Y                 | 2019-05-02 10:00:00.0 |          | default | sg       |
```

Result:
```
| id | name               | gender | birth_date | salary | is_record_present | created_time          | updated_time          | start_date            | end_date              | system  | location |
| 1  | Gallagher Fairhall | Male   | 1996-03-08 | 93261  | N                 | 2017-01-01 17:54:52.0 | {{current_timestamp}} | 2019-05-01 18:55:00.0 | 2019-11-15 18:55:00.0 | default | sg       |
| 2  | Maia Thams         |        | 1995-07-22 | 35034  | N                 | 2017-01-02 01:57:04.0 | {{current_timestamp}} | 2019-05-02 10:00:00.0 | 2019-11-15 18:55:00.0 | default | sg       |
| 2  | Maia Thomas        | Male   | 1990-01-01 | 35034  | Y                 | 2017-01-02 01:57:04.0 | {{current_timestamp}} | 2019-11-15 18:55:01.0 |                       | default | sg       |
| 3  | Che Millwall       | Male   | 1996-06-17 | 73643  | Y                 | {{current_timestamp}} | {{current_timestamp}} | 2019-11-15 18:55:01.0 |                       | default | sg       |
| 4  | Alidia Duiguid     | Female | 1987-11-08 | 87962  | Y                 | {{current_timestamp}} | {{current_timestamp}} | 2019-11-15 18:55:01.0 |                       | default | sg       |
| 5  | Lindon Corradini   | Male   | 1998-07-20 | 90729  | Y                 | {{current_timestamp}} | {{current_timestamp}} | 2019-11-15 18:55:01.0 |                       | default | sg       |
```
- In Effective date merge operation, the record with id 2 is matching so Guzzle will create a new record for id 2 and update the old record with end_date and is_record_present will become N.

### Example 4
Configurations
- Operation: Effective Date Merge
- Primary Key: id
- Merge Column: - 
- Incremental: True
- History column: No history column

Source
```
| id | name             | gender | birth_date | salary | system  | location |
| 2  | Maia Thomas      | Male   | 1990-01-01 | 35034  | default | sg       |
| 3  | Che Millwall     | Male   | 1996-06-17 | 73643  | default | sg       |
| 4  | Alidia Duiguid   | Female | 1987-11-08 | 87962  | default | sg       |
| 5  | Lindon Corradini | Male   | 1998-07-20 | 90729  | default | sg       |
```

Target
```
| id | name               | gender | birth_date | salary | created_time          | updated_time          | is_record_present | start_date            | end_date | system  | location |
| 1  | Gallagher Fairhall | Male   | 1996-03-08 | 93261  | 2017-01-01 17:54:52.0 | 2017-05-01 18:55:00.0 | Y                 | 2019-05-01 18:55:00.0 |          | default | sg       |
| 2  | Maia Thams         |        | 1995-07-22 | 35034  | 2017-01-02 01:57:04.0 | 2017-05-02 10:00:00.0 | Y                 | 2019-05-02 10:00:00.0 |          | default | sg       |
| 3  | Che Millwall       | Male   | 1996-06-17 | 73643  | 2017-01-03 19:45:30.0 | 2017-05-03 20:45:00.0 | Y                 | 2019-11-15 18:55:01.0 |          | default | sg       |
```

Result:
```
| id | name               | gender | birth_date | salary | is_record_present | created_time          | updated_time          | start_date            | end_date              | system  | location |
| 1  | Gallagher Fairhall | Male   | 1996-03-08 | 93261  | Y                 | 2017-01-01 17:54:52.0 | 2017-05-01 18:55:00.0 | 2019-05-01 18:55:00.0 |                       | default | sg       |
| 2  | Maia Thams         |        | 1995-07-22 | 35034  | N                 | 2017-01-02 01:57:04.0 | {{current_timestamp}} | 2019-05-02 10:00:00.0 | 2019-11-15 18:55:00.0 | default | sg       |
| 2  | Maia Thomas        | Male   | 1990-01-01 | 35034  | Y                 | 2017-01-02 01:57:04.0 | {{current_timestamp}} | 2019-11-15 18:55:01.0 |                       | default | sg       |
| 3  | Che Millwall       | Male   | 1996-06-17 | 73643  | Y                 | 2017-01-03 19:45:30.0 | {{current_timestamp}} | 2019-11-15 18:55:01.0 |                       | default | sg       |
| 4  | Alidia Duiguid     | Female | 1987-11-08 | 87962  | Y                 | {{current_timestamp}} | {{current_timestamp}} | 2019-11-15 18:55:01.0 |                       | default | sg       |
| 5  | Lindon Corradini   | Male   | 1998-07-20 | 90729  | Y                 | {{current_timestamp}} | {{current_timestamp}} | 2019-11-15 18:55:01.0 |                       | default | sg       |
```
- In Effective date merge operation, the record with id 2 and 3 are matching, but for id 2 gender and birth_date column value is updated so it will create a new record but for id 3 there is no change in any column value so it will not create new record for that.
- Incremental operation is True, Guzzle will not affect any target records which are not present in the source.

### Example 5
Configurations
- Operation: Effective Date Merge
- Primary Key: id
- Merge Column: - 
- Incremental: False
- History column: name, gender

Source
```
| id | name             | gender | birth_date | salary | system  | location |
| 1  | Gallagher Fair   | Male   | 1996-03-08 | 93261  | default | sg       |
| 2  | Maia Thams       | Male   | 1995-07-22 | 35034  | default | sg       |
| 3  | Che Millwall     | Male   | 1990-01-15 | 80000  | default | sg       |
| 4  | Alidia Duiguid   | Female | 1987-11-08 | 87962  | default | sg       |
| 5  | Lindon Corradini | Male   | 1998-07-20 | 90729  | default | sg       |
```

Target
```
| id | name               | gender | birth_date | salary | created_time          | updated_time          | is_record_present | start_date            | end_date | system  | location |
| 1  | Gallagher Fairhall | Male   | 1996-03-08 | 93261  | 2017-01-01 17:54:52.0 | 2017-05-01 18:55:00.0 | Y                 | 2019-05-01 18:55:00.0 |          | default | sg       |
| 2  | Maia Thams         | Female | 1995-07-22 | 35034  | 2017-01-02 01:57:04.0 | 2017-05-02 10:00:00.0 | Y                 | 2019-05-02 10:00:00.0 |          | default | sg       |
| 3  | Che Millwall       | Male   | 1996-06-17 | 73643  | 2017-01-03 03:50:04.0 | 2017-01-03 03:50:04.0 | Y                 | 2019-05-03 10:30:00.0 |          | default | sg       |
```

Result: 
```
| id | name               | gender | birth_date | salary | is_record_present | created_time          | updated_time          | start_date            | end_date              | system  | location |
| 1  | Gallagher Fairhall | Male   | 1996-03-08 | 93261  | N                 | 2017-01-01 17:54:52.0 | {{current_timestamp}} | 2019-05-01 18:55:00.0 | 2019-11-15 18:55:00.0 | default | sg       |
| 2  | Maia Thams         |        | 1995-07-22 | 35034  | N                 | 2017-01-02 01:57:04.0 | {{current_timestamp}} | 2019-05-02 10:00:00.0 | 2019-11-15 18:55:00.0 | default | sg       |
| 1  | Gallagher Fair     | Male   | 1996-03-08 | 93261  | Y                 | 2017-01-01 17:54:52.0 | {{current_timestamp}} | 2019-11-15 18:55:01.0 |                       | default | sg       |
| 2  | Maia Thams         | Male   | 1995-07-22 | 35034  | Y                 | 2017-01-02 01:57:04.0 | {{current_timestamp}} | 2019-11-15 18:55:01.0 |                       | default | sg       |
| 3  | Che Millwall       | Male   | 1990-01-15 | 80000  | Y                 | 2017-01-03 03:50:04.0 | {{current_timestamp}} | 2019-05-03 10:30:00.0 |                       | default | sg       |
| 4  | Alidia Duiguid     | Female | 1987-11-08 | 87962  | Y                 | {{current_timestamp}} | {{current_timestamp}} | 2019-11-15 18:55:01.0 |                       | default | sg       |
| 5  | Lindon Corradini   | Male   | 1998-07-20 | 90729  | Y                 | {{current_timestamp}} | {{current_timestamp}} | 2019-11-15 18:55:01.0 |                       | default | sg       |
```
- Here the history column is name and gender column. so it will create a new record for those record which has changed in name and gender column. in this example, it is id 1 and 2. for id 3 there is a change in birthdate and salary column but it is not a history column so Guzzle will not create a new record for id 3 it will update the latest value in the existing target record.
- Incremental operation is True, Guzzle will  mark target records that are not present in the source as inactive using is_record_present_flag framework column.

### Example 6
Configurations
- Operation: Update
- Primary Key: id
- Merge Column: name, salary, and updated_time.

Source
```
| id | name             | gender | birth_date | salary | system  | location |
| 3  | Chene Millwaller | Female | 1996-10-20 | 80000  | default | sg       |
| 4  | Alidia Duiguid   | Female | 1987-11-18 | 90000  | default | sg       |
| 5  | Lindon Corradini | Male   | 1998-07-20 | 90729  | default | sg       |
| 6  | Dyan Kenna       | Female | 1989-04-20 | 40182  | default | sg       |
| 7  | Ruy Marshalleck  | Male   | 1987-01-26 | 25717  | default | sg       |
```

Target
```
| id | name               | gender | birth_date | salary | created_time          | updated_time          | is_record_present | system  | location |
| 1  | Gallagher Fairhall | Male   | 1996-03-08 | 93261  | 2017-01-01 17:54:52.0 | 2017-05-01 18:55:00.0 | Y                 | default | sg       |
| 2  | Maia Thams         |        | 1995-07-22 | 35034  | 2017-01-02 01:57:04.0 | 2017-05-02 10:00:00.0 | Y                 | default | sg       |
| 3  | Che Millwall       | Male   | 1996-06-17 | 73643  | 2017-01-02 14:38:55.0 | 2017-05-02 18:10:00.0 | Y                 | default | sg       |
| 4  | Alidia Duide       | Female | 1987-11-08 | 87962  | 2017-01-02 14:58:15.0 | 2017-05-03 14:30:00.0 | Y                 | default | sg       |
| 5  | Lindon Corradini   | Male   | 1998-07-20 | 90729  | 2017-01-03 19:45:30.0 | 2017-05-03 20:45:00.0 | Y                 | default | sg       |
| 6  | Dyan Kenna         | Female | 1988-02-25 | 40182  | 2017-01-04 15:33:35.0 | 2017-07-10 10:39:50.0 | Y                 | default | sg       |
```

Result: 
```
| id | name               | gender | birth_date | salary | is_record_present | created_time          | updated_time          | system  | location |
| 1  | Gallagher Fairhall | Male   | 1996-03-08 | 93261  | Y                 | 2017-01-01 17:54:52.0 | 2017-05-01 18:55:00.0 | default | sg       |
| 2  | Maia Thams         |        | 1995-07-22 | 35034  | Y                 | 2017-01-02 01:57:04.0 | 2017-05-02 10:00:00.0 | default | sg       |
| 3  | Chene Millwaller   | Male   | 1996-06-17 | 80000  | Y                 | 2017-01-02 14:38:55.0 | {{current_timestamp}} | default | sg       |
| 4  | Alidia Duiguid     | Female | 1987-11-08 | 90000  | Y                 | 2017-01-02 14:58:15.0 | {{current_timestamp}} | default | sg       |
| 5  | Lindon Corradini   | Male   | 1998-07-20 | 90729  | Y                 | 2017-01-03 19:45:30.0 | {{current_timestamp}} | default | sg       |
| 6  | Dyan Kenna         | Female | 1988-02-25 | 40182  | Y                 | 2017-01-04 15:33:35.0 | {{current_timestamp}} | default | sg       |
```
- Guzzle will update target table records which are coming from source. It won’t add any new record.


## FAQs

1. How Guzzle behaves when external and internal template are the same? <br />
Ans. Guzzle will show only one option in UI, external will take priority.
2. Where Guzzle can place an external template? <br />
Ans. /Guzzle/default/ext/Processing/template/{new_temp}.yml|
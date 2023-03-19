## Introduction
- The Processing module in Guzzle is used process data within the same datastore. It supports processing data via Spark engine or Template. 
- In Processing module, source and target datastore technology **must** be  same. Example: We can not choose Delta as source and hive as target in Guzzle. 
- It provides inbuilt framework columns like Effective start data and end date to handle SCD type 2 efficiently. 
- It supports common operations like append, overwrite, merge and etc. 
- For source, We need to choose datastore technology from where we need to bring data for Processing. 
- Guzzle Processing modules supports using both Source SQL and Source table
- The Processing module provides pre and post SQL to execute SQL. This pre-post SQL will execute before or after and read or writing operation. 
- It provides the feature for overwriting table dependency for tables. 
- Guzzle provides auto-create table functionality in target section.  If the target table is not present then Guzzle will create the target table. For now hive, delta, and hudi are supported in ingestion. Only hive and delta are supported in the Processing module.

## Spark Engine vs Template

|Spark|Template|
|--- |--- |
| - Spark will bring data from the source, apply required tranformation via spark dataframe API and send transformed data as result. |Template will directly compiles at datastore technology end and sends response back to Guzzle.|
| Spark used connector libraries to connect with datastore. | Template uses JDBC connection to connect with data sources. |\
| We cant not modify behavior Processing of spark engine.  | Templates are flexible so user can customize or add new template. |
| Spark engine process data in spark cluster.  | Template execute queries in underlying datastore via JDBC. |

## Default template for each datastore

|Datastore|Spark|Template|
|--- |--- |--- |
|Delta|Yes|Yes: Delta|
|Hive|Yes|No|
|Synapse|No|Yes: Synapse|
|Snowflake|No|Yes: Snowflake|
|JDBC|No|Yes: Select as per your database|
|Azure SQL|No|Yes: SQL Server|
|Apache Hudi|Yes ** (Coming Soon)|Yes ** (Coming Soon)|

:::note
* For other datastore technology, we can use default template. For example, we can use default template for MySQL and PostreSQL.
:::
    

## How different operations work Guzzle
|Operation|Description|Spark|Template|
|--- |--- |--- |--- |
|Append| - Append operation will append data to target table. <br /> - Truncate partition option is not available in append.| - It uses spark to process the data so that it will bring data to spark cluster. <br /> - It uses spark write mode to append the data .| - It uese INSERT INTO <target_table> SELECT statement. <br /> - only single query will execute to append records on target database.|
|Overwrite| - Overwrite operation is using to overwrite source records into target table. | It will uses temp table to store processed data. <br /> <b> Hive </b> <br /> - If partiton column is configured -> It will use insert overwrite to overwrite that partition data. <br /> - It will use insert overwrite statement to overwrite data in that partition.  <br /> - If partiton column is not configured -> It will truncate only those partitions for which source contains data. <br /> - Other partitions data will remain intact. <br /> - Click <a  href="https://Guzzle.justanalytics.com/docs/releases/2_4_0/Processing-behaviour-changes/">here</a> for details. <br /> <b>Delta</b> <br /> - If partiton column is configured -> It will use insert overwrite statement to overwrite data in that partition. <br />  - If partiton column is Not configured -> It will truncate full target table and insert source data into target database.| - For <b>synapse, snowflake, and SQL Server</b> template it uses two operations: <br /> - It will truncate target table. <br /> - Uses INSERT INTO <target_table> SELECT statement load data into target table. <br /> <b>Delta template</b> <br /> - It will use INSERT overwrite <targe_table> select operation to update data in target table. |
|Merge|<b>Incremental</b> <br /> - Incremental operation, If source data is present in target table then it will update those data in target table. <br /> - If source data is not present in target table, it will add those records into target table. <br /> - Remining records which are not present in source wil remain as it is in target table. <br /> <b>Full Load</b> <br /> - Incremental operation, If source data is present in target table then it will update those data in target table. <br /> - If source data is not present in target table, it will add those records into target table.  <br /> - Remaining records marks as in active in target table.| - Spark will bring source and target data into memory. <br /> - It will perform merge operation and write data into temp table. <br /> - It will truncate target table(Truncate partition) and insert data from temp table to target table.  | - Template uses merge statement to perform incremental and full merge operation. |
|Effective Date Merge|<b> Incremental </b> <br /> - Incremental operation, If source data is present in target table and respective history column value is changed in source it will mark existing record as inactive using effective enddate and current record flag column value as N. <br /> - After that will create new record will updated value in target table using effective startdate column and currect record flag as Y. <br /> - If source data is not present in target table, it will add those records into target table. <br /> - Remining records which are not present in source will remain as it is in target table. <br /> <b> Full </b> <br /> - Incremental operation, If source data is present in target table and respective history column value is changed in source it will mark existing record as inactive using effective enddate and current record flag column value as N. <br /> - After that will create new record will updated value in target table using effective startdate column and currect record flag as Y. <br /> - If source data is not present in target table, it will add those records into target table. <br /> - Remining records which are not present in source will be marked as inactive records using effectiveend date and current flag. | - Spark will bring source and target data into memory. It will perform merge operation and write data into temp table. It will truncate target table(Truncate partition) and insert data from temp table to target table. | Template uses merge statement to perform incremental and full merge operation.  |
|Upate only| - Guzzle will update target table records which are coming from source. It won’t add any new record. | Spark will bring source and target data into memory. It will perform update operation and write data into temp table. <br /> - It will truncate target table(Truncate partition) and insert data from temp table to target table. | It uses merge opration to update source data into target table. |
|Delete (Hard)| - Delete operation will delete all records which are coming from source.| - Spark will bring source and target data into memory. It will perform delete operation and write data into temp table. <br /> - It will truncate target table(Truncate partition) and insert data from temp table to target table. | It uses merge opration to delete data which are coming from source. |
|Delete (Soft)| - It will mark current flag record as inactive(N). It wont delete any records.| Same as Delete Hard. | Same as Delete Hard. |


## Framework Columns


|Framework column|Description|Append|Overwrite|Merge|Effective Date Merge|Update only|Dalete (soft)|Dalete (hard)|
|--- |--- |--- |--- |--- |--- |--- |--- |--- |
|none (static value for additional column) |This is used to add column with static value.|Yes|Yes|Yes|Yes|Yes|No|No|
|w_created_ts |Generate current timestamp value.|Yes|Yes|Yes|Yes|No|No|No|
|w_refresh_ts |This framework column is using to get updated timestamp of the data. |Yes|Yes|Yes|Yes|Yes|Yes|No|
|w_current_record_flag |This column will define flag that indicated perticular record is latest or not. |Yes|Yes|Yes|Yes|Yes|Yes|No|
|w_eff_start_date_ts |This column is used to define effective start date of the dimention as SDC2. |No|No|No|Yes|No|No|No|
|w_eff_end_date_ts |This column is used to define effective end date of the dimention as SDC2. |No|No|No|Yes|No|No|No|
|w_sequence_key |This column is used to define system generated surrogate key. |No|No|Yes**|Yes**|No|No|No|
|w_version_key |This column is used to define version of each dimentions by primary key. |No|No|No|Yes**|No|No|No|


:::note
* Yes** => Only applicable on spark engine.
* Check the behavior of each framework column with different operations. Click here. 
:::

## Special Configurations

||Description|Append|Overwrite|Merge|Effective Date Merge|Update|Soft Delete|Hard Delete|
|--- |--- |--- |--- |--- |--- |--- |--- |--- |
|Primary Key|It will uses to link source and target data.|No|No|Yes|Yes|Yes|Yes|Yes|
|Incremental|When we want to update only those target records which are present in source. Remaining exisitng records in target will not change. will remain as it is.|No|No|Yes|Yes|No|No|No|
|Merge Column| - Before merging record it will check wheather data is updated or not in given merge column. if it is updated then it will update target records else it will not update target table. <br /> - If the merge columns are not specified in configuration by default Guzzle considers all columns as merge column |No|No|Yes|No|Yes|No|No|
|History Column| - If hostory column data is update then it will create new records in target table. Else it will not create records in target table. <br /> - If history columns are not specified in the configuration by default Guzzle considers all columns as History columns |No|No|No|Yes|No|No|No|

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
|Source: post_sql|After complition of Processing operation, Guzzle will execute PostSQL statement on source.|
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
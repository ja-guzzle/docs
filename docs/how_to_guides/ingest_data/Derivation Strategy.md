---
id: derivation_strategies
title: Schema Derivation Strategies

---

* Guzzle provides five schema derivation strategies. Using these strategies Guzzle will validate the data type and will also create an effective schema based on that data will be written in the target and reject table. The schema derivation strategies include:

    1. Source
    2. Inherit source data type and do not apply validation
    3. Target
    4. Inherit target data type and do not apply validation
    5. Do not inherit schema from source or target

* Users can select schema derivation strategy from **Inherit columns and datatype** property under **Additional settings** dropdown menu in the validation and transformation section.

* In this article, we will discuss these strategies with examples

## Source

* If schema derivation strategy is **source** then, columns and data types will be inherited from the source files/table and, validation of data types will be performed based on source data types.
* If the user does not specify the column name in the transformation and validation section then validation for that column will be performed and if the user specifies the source's column name in the transformation and validation section then the validation will be performed based on validate data type flag.
* Additionally, an effective schema will be created using source columns and data types and columns and data types specified in the **validation and transformation** section of the ingestion job. And this effective schema will be used to create a table if an auto-create table flag is true in the target section and in the reject section.

### Example

* In source, a datastore is a file and format is delimited, and the file pattern includes two files that are file1.csv and file2.csv. And infer schema flag is true. In target, the datastore is the delta table and the auto-create table flag is true and the name of table is **demo_schema_derivation**.

* The source data are like this 
```
file1.csv

id,name
1001,n1
1002,n2
```
```
file2.csv

id,name
1003,n3
id_1004,n4
```
* In the validation and transformation section, we have defined 
1. A new column **full_name** is doing concatenation of **name** column and "_new" string. If we do not provide any data type then Guzzle will take a string as the data type for this column and if the data type field has a value then it will take that data type for that column. As you can see from the below image.
2. **name** column but a validate data type flag is **false**, and also we haven't defined any data type so, Guzzle will not validate this column's data and the data type for this column will be inherited from the source as the name column is present in the source.

<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/ingest_data/schema_derivation_1.png" target="_self" >
    <img width="1000" src="/img/docs/how-to-guides/ingest_data/schema_derivation_1.png" />
</a>

* As shown in the figure that we have defined the data type for **full_name** column **varchar(20)** so, Guzzle will take this data type for the effective schema.

* While running the ingestion job Guzzle will create the target table using the below query and as schema derivation strategy is the **source** so, it will validate data of source column like datatype for id is an integer so, data which are successfully validated will be stored in the target table and those which are invalid will be stored in reject table/file.

```
CREATE TABLE IF NOT EXISTS demo_schema_derivation (`id` integer, `name` string, `full_name` varchar(20));
```

* After a successful run of this job target table contains the following data: 
```
demo_schema_derivation

| id   | name | full_name |
| 1001 | n1   | n1_new    |
| 1002 | n2   | n2_new    |
| 1003 | n3   | n3_new    |
```
* Here, the data with **id=id_1004** is discarded because the data is in string and the data type of **id** column is an **integer**. So, Guzzle will store this data in the reject section.
 
## Inherit source data type and do not apply validation

* If the schema derivation strategy is **Inherit source data type and do not apply validation** then, columns and data types will be inherited from the source files/table, but the validation of data types will not be performed automatically. This will be based on the validation and transformation section.
* If the user does not specify the column name in the transformation and validation section then validation for that column will not be performed and if the user specifies the source's column name in the transformation and validation section then the validation will be performed based on validate data type flag.
* Additionally, an effective schema will be created using source columns and data types and columns and data types specified in the **validation and transformation** section of the ingestion job. And this effective schema will be used to create a table if an auto-create table flag is true in the target section and in the reject section.

### Example

* In source, a datastore is a file and format is delimited, and the file pattern includes two files that are file1.csv and file2.csv. And infer schema flag is true. In target, the datastore is the delta table and the auto-create table flag is true and the name of the table is **demo_schema_derivation**.

* The source data are like this 
```
file1.csv

id,name
1001,n1
1002,n2
```
```
file2.csv

id,name
1003,n3
id_1004,n4
```
* In the validation and transformation section, we have defined 
1. A new column **full_name** is doing concatenation of **name** column and "_new" string. If we do not provide any data type then Guzzle will take a string as the data type for this column and if the data type field has a value then it will take that data type for that column. As you can see from the below image.
2. **name** column but validate data type flag is **false**, and also we haven't defined any data type so, Guzzle will not validate this column's data and the data type for this column will be inherited from the source as the name column is present in the source.

<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/ingest_data/schema_derivation_2.png" target="_self" >
    <img width="1000" src="/img/docs/how-to-guides/ingest_data/schema_derivation_2.png" />
</a>

* As shown in the figure that we have defined the data type for **full_name** column **varchar(20)** so, Guzzle will take this data type for the effective schema.

* While running the ingestion job Guzzle will create the target table using the below query and as schema derivation strategy is the **Inherit source data type and do not apply validation** so, it will not do direct validation of the source column's data. So, Guzzle will take help of the validation and transformation section whether to validate or not.
* If the user wants to validate the data of the id column then he/she has to define the id column in the transformation and validation section with the validate_data_type = true.
* And the data that are successfully validated will be stored in the target table and those which are invalid will be stored in the reject table/file.

```
CREATE TABLE IF NOT EXISTS demo_schema_derivation (`id` integer, `name` string, `full_name` varchar(20));
```

* After a successful run of this job target table contains the following data: 
```
demo_schema_derivation

| id      | name | full_name |
| 1001    | n1   | n1_new    |
| 1002    | n2   | n2_new    |
| 1003    | n3   | n3_new    |
|         | n4   | n4_new    |
```
* Here, **id** column is not defined in the validation and transformation section so, Guzzle will not validate the data. So, the data with **id=id_1004** is not discarded, and this data is stored in the target table with id value NULL as shown in the above table.

## Target

:::note
If schema derivation strategy is **target** then **auto-create table** flag for target section must be **false**, and target table will be there in the database.
:::

* If schema derivation strategy is **target** then, columns and data types will be inherited from the target files/table and, validation of data types will be performed based on target data types.
* If the user does not specify the column name in the transformation and validation section then validation for that column will be performed and if the user specifies the target's column name in the transformation and validation section then the validation will be performed based on validate data type flag.
* Additionally, an effective schema will be created using target columns and data types and columns and data types specified in the **validation and transformation** section of the ingestion job. And this effective schema will be used to create a table if an auto-create table flag is true in the reject section.

### Example

* In source, a datastore is a file and format is delimited, and the file pattern includes two files that are file1.csv and file2.csv. And infer schema flag is true. In target, the datastore is the delta table and the name of table is **demo_schema_derivation**.

* The source data are like this 
```
file1.csv

id,name
1001,n1
1002,n2
```
```
file2.csv

id,name
1003,n3
id_1004,n4
```
* The target table data is
```
demo_schema_derivation

| id      | name |
| 1010    | n10  |
```
* In the validation and transformation section, we have defined 
1. A new column **full_name** is doing concatenation of **name** column and "_new" string. If we do not provide any data type then Guzzle will take a string as the data type for this column and if the data type field has a value then it will take that data type for that column. As you can see from the below image.
2. **name** column but a validate data type flag is **false**, and also we haven't defined any data type so, Guzzle will not validate this column's data and the data type for this column will be inherited from the target as the name column is present in the target.

<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/ingest_data/schema_derivation_3.png" target="_self" >
    <img width="1000" src="/img/docs/how-to-guides/ingest_data/schema_derivation_3.png" />
</a>

* As shown in the figure that we have defined the data type for **full_name** column **varchar(20)** so, Guzzle will take this data type for the effective schema but as the target table does not have the **full_name** column, the data for this column will be ignored.

* While running the ingestion job, as schema derivation strategy is the **target**, Guzzle will validate the data of source column with target data type like datatype for id is an integer so, data which are successfully validated will be stored in the target table and those which are invalid will be stored in reject table/file.

* After a successful run of this job target table contains the following data: 
```
demo_schema_derivation

| id   | name |
| 1001 | n1   |
| 1002 | n2   |
| 1003 | n3   |
| 1010 | n10  |
```
* Here, the data with **id=id_1004** is discarded because the data is in string and the data type of **id** column in target table is an **integer**. So, Guzzle will store this data in the reject section.

## Inherit target data types and do not apply validation

:::note
If schema derivation strategy is **Inherit target data types and do not apply validation** then **auto-create table** flag for target section must be **false**, and target table will be there in the database.
:::
* If the schema derivation strategy is **Inherit target data types and do not apply validation** then, columns and data types will be inherited from the target files/table and, the validation of data types will not be performed automatically. This will be based on the validation and transformation section.
* If the user does not specify the column name in the transformation and validation section then validation for that column will not be performed and if the user specifies the target's column name in the transformation and validation section then the validation will be performed based on validate data type flag.
* Additionally, an effective schema will be created using target columns and data types and columns and data types specified in the **validation and transformation** section of the ingestion job. And this effective schema will be used to create a table if an auto-create table flag is true in the reject section.

### Example

* In source, a datastore is a file and format is delimited, and the file pattern includes two files that are file1.csv and file2.csv. And infer schema flag is true. In target, the datastore is the delta table and the name of table is **demo_schema_derivation**.

* The source data are like this 
```
file1.csv

id,name
1001,n1
1002,n2
```
```
file2.csv

id,name
1003,n3
id_1004,n4
```
* The target table data is
```
demo_schema_derivation

| id      | name |
| 1010    | n10  |
```
* In the validation and transformation section, we have defined 
1. A new column **full_name** is doing concatenation of **name** column and "_new" string. If we do not provide any data type then Guzzle will take a string as the data type for this column and if the data type field has a value then it will take that data type for that column. As you can see from the below image.
2. **name** column but a validate data type flag is **false**, and also we haven't defined any data type so, Guzzle will not validate this column's data and the data type for this column will be inherited from the target as the name column is present in the target.

<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/ingest_data/schema_derivation_4.png" target="_self" >
    <img width="1000" src="/img/docs/how-to-guides/ingest_data/schema_derivation_4.png" />
</a>

* As shown in the figure that we have defined the data type for **full_name** column **varchar(20)** so, Guzzle will take this data type for the effective schema but as the target table does not have the **full_name** column, the data for this column will be ignored.

* While running the ingestion job, as schema derivation strategy is the **Inherit target data types and do not apply validation**, Guzzle will not do direct validation of the source column's data with the target column's data type. So, Guzzle will take the help of the validation and transformation section on whether to validate or not.

* And the data that are successfully validated will be stored in the target table and those which are invalid will be stored in the reject table/file.

* After a successful run of this job target table contains the following data: 
```
demo_schema_derivation

| id   | name |
| 1001 | n1   |
| 1002 | n2   |
| 1003 | n3   |
|      | n4   |
| 1010 | n10  |
```

* Here, id column is not defined in the validation and transformation section so, Guzzle will not validate the data for that column. So, the data with id=id_1004 is not discarded, and this data is stored in the target table with id value NULL as shown in the above table.

## Do not inherit schema from source or target

* If the schema derivation strategy is **Do not inherit schema from source or target** then, columns and data types will be inherited from the transformation and validation section and, the validation of data types will be performed based on the validate data type flag. If the flag is true then validation of that column will be performed, if false then validation will not be performed.
* Additionally, an effective schema will be created using columns and data types specified in the **validation and transformation** section of the ingestion job. And this effective schema will be used to create a table if an auto-create table flag is true in the target section and in the reject section.

### Example

* In source, a datastore is a file and format is delimited, and the file pattern includes two files that are file1.csv and file2.csv. And infer schema flag is true. In target, the datastore is the delta table and the auto-create table flag is true and the name of table is demo_schema_derivation.

* The source data are like this 
```
file1.csv

id,name
1001,n1
1002,n2
```
```
file2.csv

id,name
1003,n3
id_1004,n4
```
* In the validation and transformation section, we have defined 
1. A new column **full_name** is doing concatenation of **name** column and "_new" string. If we do not provide any data type then Guzzle will take a string as the data type for this column and if the data type field has a value then it will take that data type for that column. As you can see from the below image.
2. **name** column, but a validate data type flag is **false**, and also we haven't defined any data type so, Guzzle will not validate this column's data and the data type for this column will be a string as there is no data type defined.
3. **id** column with data type value integer and validate datatype flag is true.

<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/ingest_data/schema_derivation_5.png" target="_self" >
    <img width="1000" src="/img/docs/how-to-guides/ingest_data/schema_derivation_5.png" />
</a>

* As shown in the figure, we have defined the data type for **full_name** column varchar(20), for **id** column is integer and for **name** column nothing so, Guzzle will take string data type and, Guzzle will take these columns and data type for the effective schema.

* While running the ingestion job Guzzle will create the target table using the below query, as the schema derivation strategy is the **Do not inherit schema from source or target**, it will take the help of the validation and transformation section whether to validate or not.

```
CREATE TABLE IF NOT EXISTS demo_schema_derivation (`id` integer, `name` string, `full_name` varchar(20));
```

* And the data that are successfully validated will be stored in the target table and those which are invalid will be stored in the reject table/file.

* After a successful run of this job target table contains the following data: 
```
demo_schema_derivation

| id   | name |
| 1001 | n1   |
| 1002 | n2   |
| 1003 | n3   |
```

* Here, id column is defined in the validation and transformation section and validate data type flag is true so, Guzzle will validate the data for that column. So, the data with **id=id_1004** is discarded, and this data is stored in the reject section.
---
id: schema_drift
title: Schema Drift
---

:::note
Schema drift feature is supported only when delta technology is used as a target while performing ingestion activity.
:::

## What is Schema Drift?
Schema drift is a feature that allows users to easily change a target table's current schema to accommodate data that is changing over time. Most commonly, it is used when performing an append or overwrite operation, to automatically adapt the schema to include one or more new columns. For more information visit [here](https://databricks.com/blog/2019/09/24/diving-into-delta-lake-schema-enforcement-evolution.html#:~:text=Schema%20evolution%20is%20a%20feature,one%20or%20more%20new%20columns.). The schema drift feature includes two options:
1. Merge schema
2. Overwrite schema

## Use of schema drift feature in Guzzle

* The schema drift feature is available in the target section when delta technology is used while performing ingestion activity. From the Guzzle UI users can enable **Merge schema** option when he/she wants to add a new column that is present in source data but not in the target records. So, Guzzle will add that column automatically to your target data. Users can enable **Overwrite schema** option when he/she wants to overwrite the schema of the table. Guzzle will overwrite schema automatically from the target table.

:::info
When schema derivation strategy is **schema** or **target**, if new columns are added in the source they must be explicitly specified in the validation or transformation section.
:::

<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/ingest_data/schema_drift_1.png" target="_self" >
    <img width="1000" src="/img/docs/how-to-guides/ingest_data/schema_drift_1.png" />
</a> 

## Merge Schema

* Automatically update the schema of the target table and make it compatible with the data being written.
* The following types of schema changes are eligible for schema drift during table appends or overwrites:
    * Adding a new column.
    * Changing of column data types from 
        * NullType -> any other type
        * upcasts from ByteType -> ShortType -> IntegerType

### Example

* The scenario is that we have to ingest data from JDBC to the existing delta table and the merge schema option is enabled, and the operation is append.

* Let the source is JDBC, and it has the following columns and data:
```
src_demo

Definition of source table:

| column    | datatype |
|  id       |  integer |
|  name     |  string  |
| full_name |  string  |

Records in the table:

| id | name | full_name |
| 1  | n1   | n1_extra  |
| 2  | n2   | n2_extra  |
| 3  | n3   | n3_extra  |

```

* Let the target is delta, and it has the following columns and data:
```
tgt_demo

Definition of target table:

| column    | datatype |
|  id       |  short   |
|  name     |  string  |

Records in the table:

| id | name |
| 4  | n4   |
| 5  | n5   |

```

* After running the job, the target table will look like the below:

```
tgt_demo

Definition of target table:

| column    | datatype |
|  id       |  integer |
|  name     |  string  |
| full_name |  string  |
 
Records in the table:

| id | name | full_name |
| 4  | n4   |           |
| 5  | n5   |           |
| 1  | n1   | n1_extra  |
| 2  | n2   | n2_extra  |
| 3  | n3   | n3_extra  |

```
* As the merge schema option is enabled so, the short datatype is converted to the integer and a new column full_name is added to the target table.

## Overwrite Schema

:::note
Overwrite schema is only applicable when the operation is **overwrite**
:::

* Automatically overwrite the schema of the target table and make it compatible with the data being written.

### Example

* The scenario is that we have to ingest data from JDBC to the existing delta table and the overwrite schema option is enabled, and the operation is overwrite.

* Let the source is JDBC, and it has the following columns and data:
```
src_demo

Definition of source table:

| column    | datatype |
|  id       |  integer |
|  name     |  string  |
| full_name |  string  |

Records in the table:

| id | name | full_name |
| 1  | n1   | n1_extra  |
| 2  | n2   | n2_extra  |
| 3  | n3   | n3_extra  |

```

* Let the target is delta, and it has the following columns and data:
```
tgt_demo

Definition of target table:

| column    | datatype |
|  id       |  short   |
|  name     |  string  |

Records in the table:

| id | name |
| 4  | n4   |
| 5  | n5   |

```

* After running the job, the target table will look like the below:

```
tgt_demo

Definition of target table:

| column    | datatype |
|  id       |  integer |
|  name     |  string  |
| full_name |  string  |
 
Records in the table:

| id | name | full_name |
| 1  | n1   | n1_extra  |
| 2  | n2   | n2_extra  |
| 3  | n3   | n3_extra  |

```
* As the overwrite schema option is enabled so, the schema of the target table is overwritten by the source schema and the operation is overwrite so, the records are also overwritten.
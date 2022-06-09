---
id: overwrite_and_append_operatoins
title: How overwrite and append operation works in Guzzle
---

Overwrite and append operations are supported in the below technologies in the target section:
1. Hive
2. Delta
3. Azure SQL
4. Azure Synapse Analytics

## Append operation

* Append mode is used to atomically add new data to an existing target table.

### Example

* Below is the scenario that if the user wants to perform ingestion activity, source and target are delta table and writer mode is **append**. And the data in both source and target tables before job execution are like this:

* Records in source table:
```
employee_src_delta:

| id | name                 | location | system  |
| 1  | Gallagher Fair       |    sg    | default |
| 2  | Maia Thams           |    in    | demo    |
```

* Records in target table:
While executing the job, Guzzle will add new data to the existing target table.
* Records of target table after job run successfully:
```
employee_tgt_delta:

| id | name                 | location | system  |
| 4  | Lindon Corrad        |    sg    | default |
| 5  | Che Millwall         |    in    | default |
| 6  | Alidia Duiguid       |    sg    | demo    |
| 1  | Gallagher Fair       |    sg    | default |
| 2  | Maia Thams           |    in    | demo    |
```

## Overwrite operation

* Overwrite operation works differently for the table with partition columns and without partition columns.

### Overwrite operation if target table do not have partition columns:

* Overwrite mode to atomically replace all the data in a target table with the source data.

#### Example
* Below is the scenario that if the user wants to perform ingestion activity, source and target are hive table and writer mode is **overwrite**. And the data in both source and target tables before job execution are like this:

* Records in source table:
```
employee_src_delta:

| id | name                 | location | system  |
| 1  | Gallagher Fair       |    sg    | default |
| 2  | Maia Thams           |    in    | demo    |
```

* Records in target table:
```
employee_tgt_delta:

| id | name                 | location | system  |
| 4  | Lindon Corrad        |    sg    | default |
| 5  | Che Millwall         |    in    | default |
| 6  | Alidia Duiguid       |    sg    | demo    |
```

* While executing the job, Guzzle will replace all target records with source data.
* Records of target table after job run successfully:
```
employee_tgt_delta:

| id | name                 | location | system  |
| 1  | Gallagher Fair       |    sg    | default |
| 2  | Maia Thams           |    in    | demo    |
```

### Overwrite operation if target table have partition columns:

* Overwrite mode is used to replace the existing data from the target table with partitioned source records. The overwritten data can be specified by an arbitrary expression.

#### Example
* Below is the scenario that if the user wants to perform ingestion activity, source and target are hive table and writer mode is **overwrite**. And the data in both source and target tables before job execution are like this:

* Records in source table:
```
employee_src_delta:

| id | name                 | location | system  |
| 1  | Gallagher Fair       |    sg    | default |
| 2  | Maia Thams           |    in    | demo    |
```

* Records in the target table with **location** and **system** column as partition columns:
```
employee_tgt_delta:

| id | name                 | location | system  |
| 4  | Lindon Corrad        |    sg    | default |
| 5  | Che Millwall         |    in    | default |
| 6  | Alidia Duiguid       |    sg    | demo    |
```

* While executing the job, Guzzle will replace target data with source data that matches an arbitrary expression, in our example expression is **((location=sg AND system=default)* OR *(location=in AND system=demo))** and from target table data matches this expression will be overwritten by source data. So, from the target table record with id 4 is deleted. Guzzle's overwrite works same as sparks overwrite. For more information on how spark overwrites works follow [this](https://spark.apache.org/docs/3.0.0-preview/sql-ref-syntax-dml-insert-overwrite-table.html) link.

* Records of target table after job run successfully:
```
employee_tgt_delta:

| id | name                 | location | system  |
| 1  | Gallagher Fair       |    sg    | default |
| 2  | Maia Thams           |    in    | demo    |
| 5  | Che Millwall         |    in    | default |
| 6  | Alidia Duiguid       |    sg    | demo    |
```

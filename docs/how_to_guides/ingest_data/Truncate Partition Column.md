---
id: configure_truncate_partition_columns
title: Truncate Partition Columns
---

:::note
Truncate Partition Columns feature is available with hive and delta datastore in target section.
:::

## Why we want to use this feature?

* While running an ingestion job if the user wants to remove some partitioned record before writing into the target table then he/she can use this feature.

## Use of Truncate Partition Column in Guzzle
To use truncate partition column in Guzzle, the user needs to provide the target table partitioned column names and its corresponding value in **Configure truncate partition columns** section. As mentioned below:

<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/ingest_data/truncate_partition_columns_1.png" target="_self" >
    <img width="1000" src="/img/docs/how-to-guides/ingest_data/truncate_partition_columns_1.png" />
</a>

## Example 1

* Below is the scenario that if the user wants to perform ingestion activity, source and target are delta table and writer mode is **append** and truncate partition columns is defined with columns like *"location = sg"* and *"system = default"*. And the data in both source and target tables before job execution are like this:

* Records in source table:
```
employee_src_delta:

| id | name                 | location | system  |
| 1  | Gallagher Fair       |    sg    | default |
| 2  | Maia Thams           |    in    | demo    |
```

* Records in the target table with **location** and **system** as partition columns:
```
employee_tgt_delta:

| id | name                 | location | system  |
| 4  | Lindon Corrad        |    sg    | default |
| 5  | Che Millwall         |    in    | default |
| 6  | Alidia Duiguid       |    sg    | demo    |
```
* Job config:

```
version: 1
job:
  type: ingestion
source:
  endpoint: delta_ds
  properties:
    table: employee_src_delta
    format_properties:
      clean_column_name: false
schema:
  schema_derivation_strategy: source
  strict_schema_check: true
  discard: true
  columns: []
target:
  endpoint: delta_ds
  properties:
    table: employee_tgt_delta
    auto_create_table: false
    merge_schema: false
  operation: append
  truncate_partition_columns:
    - name: location
      value: sg
    - name: system
      value: default
```

* While executing the job, Guzzle will delete records that have *"location_ = sg" and "system = default"* from the target table before appending the source record into the target table. So, the record with id 4 is removed from the target table.

* Records of target table after job run successfully:
```
employee_tgt_delta:

| id | name                 | location | system  |
| 5  | Che Millwall         |    in    | default |
| 6  | Alidia Duiguid       |    sg    | demo    |
| 1  | Gallagher Fair       |    sg    | default |
| 2  | Maia Thams           |    in    | demo    |
```
## Example 2

* Below is the scenario that if the user wants to perform ingestion activity, source and target are delta table and writer mode is **overwrite** and truncate partition columns is defined with columns like *"location = sg"* and *"system = default"*. And the data in both source and target tables before job execution are like this:

* Records in source table:
```
employee_src_delta:

| id | name                 | location | system  |
| 1  | Gallagher Fair       |    sg    | default |
| 2  | Maia Thams           |    in    | demo    |
```

* Records in the target table with **location** and **system** as partition columns:
```
employee_tgt_delta:

| id | name                 | location | system  |
| 3  | new_name             |    in    | demo    |
| 4  | Lindon Corrad        |    sg    | default |
| 5  | Che Millwall         |    in    | default |
| 6  | Alidia Duiguid       |    sg    | demo    |
```
* Job config:

```
version: 1
job:
  type: ingestion
source:
  endpoint: delta_ds
  properties:
    table: employee_src_delta
    format_properties:
      clean_column_name: false
schema:
  schema_derivation_strategy: source
  strict_schema_check: true
  discard: true
  columns: []
target:
  endpoint: delta_ds
  properties:
    table: employee_tgt_delta
    auto_create_table: false
    merge_schema: false
  operation: overwrite
  truncate_partition_columns:
    - name: location
      value: sg
    - name: system
      value: default
```

* While executing the job, Guzzle will delete records that have *"location = sg" and "system = default"* from the target table before overwriting the source record into the target table. So, the record with id 4 is removed because of the truncate partition column feature and the record with id 3 is deleted due to the overwrite operation.

* Records of target table after job run successfully:
```
employee_tgt_delta:

| id | name                 | location | system  |
| 5  | Che Millwall         |    in    | default |
| 6  | Alidia Duiguid       |    sg    | demo    |
| 1  | Gallagher Fair       |    sg    | default |
| 2  | Maia Thams           |    in    | demo    |
```
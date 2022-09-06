---
id: ingestion_datatype_validation
title: Ingestion Datatype Validation
---

:::note
datatype validation applies to Ingestion activity only.
:::

## Overview
* datatype validation feature is a way to validate source data against a given data type OR data type derived based on `Inherit columns and datatype`.
  <a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/ingest_data/overview_data_type_validation.png" target="_self" >
  <img src="/img/docs/how-to-guides/ingest_data/overview_data_type_validation.png" />
  </a>

## Story
* While reading source, guzzle relay on spark to infer the schema of a given source, suppose in our case source is CSV with infer schema disabled, the column and their data type will be
  * col1: String, col2: String, col3: String
* Afterword source's column data type can be changed using the `Transform SQL` feature, suppose we give the transform SQL to `col1` as below
  * col1: transform SQL is `col1 || '0'` then data type will determine at runtime which will be `String`
* Support target is Azure SQL as below
  * col1: Int, col2: String, col3: Short
* Source has col1 as `String` data type and the target has col1 as `Int` data type
* In source if col1 contains all legal integers then the guzzle job will run successful, but the CSV file will not guarantee the data type
* In that case Datatype validation feature will help to filter non-integers numbers flowing into a target, not just that we can capture invalid records by using configuring reject section
* Either specify `Int` Explicitly for col1 at data type text box
<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/ingest_data/explicitly_specify_data_type.png" target="_self" >
  <img src="/img/docs/how-to-guides/ingest_data/explicitly_specify_data_type.png" />
</a>
* Or change the Inherit columns and datatype to base on your use case, in our case Target Inherit columns and datatype will help, where the data type of source columns will be derived from the target accordingly
<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/ingest_data/Inherit_columns_and_datatype.png" target="_self" >
  <img src="/img/docs/how-to-guides/ingest_data/Inherit_columns_and_datatype.png" />
</a>
* if the data type is not specified then guzzle will derive according to Inherit columns and datatype, a column that is not specified in the `Validation and Transform` section this column's data type validation flag will be determined by Inherit columns and datatype
* In our case
  * col1: we haven't specified any data type, so it will be `Int` as per target and the validation datatype checked box has been checked
  * col2: both data type and data type validation flag will be derived based on Target which is String and data type validation will happen
  * col3: both data type and data type validation flag will be derived based on Target which is Short and data type validation will happen and if guzzle found a non-short integer number then guzzle will filter those records

## Inherit columns and datatype
<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/ingest_data/schema_derivation_plan.png" target="_self" >
  <img src="/img/docs/how-to-guides/ingest_data/schema_derivation_plan.png" />
</a>

* while reading the source which data type allocate to source columns and whether the validation uses them or not
* **Source**: This is a common and simple strategy where data type will be derived from the Source and validation will happen, this strategy can be used when we have multiple files with different schema
* **Target**: Data type will be derived from Target and validation will happen, this strategy can be used when we have target oriented flow
* **Inherit Source data types and do not apply validation using them**: this is the same as `Source` except guzzle will not perform the validation by default
* **Inherit Target data types and do not apply validation using them**: this is the same as `Target` except guzzle will not perform the validation by default
* **Do not inherit schema from Source or Target**: user define a schema if data type not specified then guzzle will implicitly take `String`, and guzzle will only consider these columns to flow further

## Data type validation
<table>
  <caption>Numeric</caption>
  <tr>
    <th></th>
    <th scope="col">Bigint</th>
    <th scope="col">Int</th>
    <th scope="col">Smallint</th>
    <th scope="col">Tinyint</th>
    <th scope="col">Double</th>
    <th scope="col">Float</th>
    <th scope="col">decimal(p, [s])</th>
    <th scope="col">Boolean</th>
    <th scope="col">Varchar(n)</th>
    <th scope="col">String</th>
    <th scope="col">Timestamp</th>
    <th scope="col">date</th>
  </tr>

  <tr>
    <th scope="row">BigInt</th>
    <td><img src="/img/docs/how-to-guides/ingest_data/check-solid.svg" width="25" height="25" /></td>
    <td>Range check</td>
    <td>Range check</td>
    <td>Range check</td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/check-solid.svg" width="25" height="25" /></td>
    <td>Length check</td>
    <td><img src="/img/docs/how-to-guides/ingest_data/check-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
  </tr>

  <tr>
    <th scope="row">Int</th>
    <td><img src="/img/docs/how-to-guides/ingest_data/check-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/check-solid.svg" width="25" height="25" /></td>
    <td>Range check</td>
    <td>Range check</td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/check-solid.svg" width="25" height="25" /></td>
    <td>Length check</td>
    <td><img src="/img/docs/how-to-guides/ingest_data/check-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
  </tr>

  <tr>
    <th scope="row">Smallint</th>
    <td><img src="/img/docs/how-to-guides/ingest_data/check-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/check-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/check-solid.svg" width="25" height="25" /></td>
    <td>Range check</td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/check-solid.svg" width="25" height="25" /></td>
    <td>Length check</td>
    <td><img src="/img/docs/how-to-guides/ingest_data/check-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
  </tr>

  <tr>
    <th scope="row">Tinyint</th>
    <td><img src="/img/docs/how-to-guides/ingest_data/check-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/check-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/check-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/check-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/check-solid.svg" width="25" height="25" /></td>
    <td>Length check</td>
    <td><img src="/img/docs/how-to-guides/ingest_data/check-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
  </tr>

  <tr>
    <th scope="row">Double</th>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/check-solid.svg" width="25" height="25" /></td>
    <td>Range check</td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td>Length check</td>
    <td><img src="/img/docs/how-to-guides/ingest_data/check-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
  </tr>

  <tr>
    <th scope="row">Float</th>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/check-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/check-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td>Length check</td>
    <td><img src="/img/docs/how-to-guides/ingest_data/check-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
  </tr>

  <tr>
    <th scope="row">Decimal(p, [s])</th>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td>Range check</td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td>Length check</td>
    <td><img src="/img/docs/how-to-guides/ingest_data/check-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
  </tr>
</table>

<table>
  <caption>other</caption>
  <tr>
    <th></th>
    <th scope="col">Bigint</th>
    <th scope="col">Int</th>
    <th scope="col">Smallint</th>
    <th scope="col">Tinyint</th>
    <th scope="col">Double</th>
    <th scope="col">Float</th>
    <th scope="col">decimal(p, [s])</th>
    <th scope="col">Boolean</th>
    <th scope="col">Varchar(n)</th>
    <th scope="col">String</th>
    <th scope="col">Timestamp</th>
    <th scope="col">date</th>
  </tr>

  <tr>
    <th scope="row">Boolean</th>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/check-solid.svg" width="25" height="25" /></td>
    <td>Length check</td>
    <td><img src="/img/docs/how-to-guides/ingest_data/check-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
  </tr>

  <tr>
    <th scope="row">String</th>
    <td>Parse check</td>
    <td>Parse check</td>
    <td>Parse check</td>
    <td>Parse check</td>
    <td>Parse check</td>
    <td>Parse check</td>
    <td>Parse check</td>
    <td>Parse check</td>
    <td>Length check</td>
    <td><img src="/img/docs/how-to-guides/ingest_data/check-solid.svg" width="25" height="25" /></td>
    <td>Parse check</td>
    <td>Parse check</td>
  </tr>

  <tr>
    <th scope="row">Timestamp</th>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td>Length check</td>
    <td><img src="/img/docs/how-to-guides/ingest_data/check-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/check-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
  </tr>

  <tr>
    <th scope="row">Date</th>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" /></td>
    <td>Length check</td>
    <td><img src="/img/docs/how-to-guides/ingest_data/check-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/check-solid.svg" width="25" height="25" /></td>
    <td><img src="/img/docs/how-to-guides/ingest_data/check-solid.svg" width="25" height="25" /></td>
  </tr>

</table>

- about range check, the range will be determined by java data type
  - for instance, tinyint(byte) has range -128 to +127 if integer column value 200 try to validate against tinyint datatype guzzle will mark that record as invalid 
- about length check, guzzle will simply check the length of the column value
- about parse check,
  - for date and timestamp datatype, guzzle will try to parse to spark default formats, in spark 3.3.0 `yyyy-MM-dd` is for date, and `yyyy-MM-dd HH:mm:ss.SSSS` is for timestamp, for more information [click here](https://spark.apache.org/docs/latest/sql-ref-datetime-pattern.html)
  - for numeric datatype (like BigInt, Double, Int, etc), guzzle will try to parse and also will perform the range check
- about <img src="/img/docs/how-to-guides/ingest_data/check-solid.svg" width="25" height="25" />, guzzle will directly allow without touching data
- about <img src="/img/docs/how-to-guides/ingest_data/xmark-solid.svg" width="25" height="25" />, guzzle will directly disallow without touching data

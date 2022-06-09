---
id: validation_and_transformation
title: Validation and Transformation

---

:::note 
Validation and transformation section is included in the Ingestion activity only.
:::

## Overview of validation and transformation section

* In this section users can validate their source data by checking the data type of a specific column, users can also check whether the data is unique in the specific column or not. And also users can transform their data by giving transformation rules like the user wants to concat two different columns and store them in another column.
* Users can also provide SQL validation rules for the validation of data. They can also specify the column as a partition column using Guzzle.
* Additionally, users can inherit columns and datatype using different derivation strategy which is described below.

## Properties of this section

|Property|Description|
|--- |--- |
|Name|Specify name of the column.|
|Transformation|Specify the transformation rule.|
|Data Type|Specify the data type of the column. If data type is not specified then it will inherit from schema derivation strategy, or it will respect that data type.|
|Validate Data Type|By default this checkbox is unchecked.<br/> Check the field if you want to do validation of data type.|
|Uniqueness|Check the field if you want to check that the column's data is unique.|
|Nullable|Check the field if you want to check that the column's data null or not.|
|SQL Validation|Specify the SQL validation rule.|
|Partition Column|Check the field if the column is included in partition columns.|
|Inherit column and datatype|This property is included in additional settings dropdown. In this property, there are total 5 derivation strategies and from this user can select any one derivation strategy. By default, **Source** is selected. Five derivation strategy includes: <br/> 1. **Source:** Select this option if you want to inherit datatype and columns from source and want to do validation using source datatype. Effective schema will be considered based on source and schema section.<br/> 2. **Inherit source data types and do not apply validation using them:** Select this option if you want to inherit datatype and columns from source but do not want to perform validation using source datatype. Effective schema will be considered based on source and schema section.<br/>3. **Target:** Select this option if you want to inherit datatype and columns from target and want to do validation using target datatype. Effective schema will be considered based on target and schema section.<br/> 4. **Inherit target data types and do not apply validation using them:** Select this option if you want to inherit datatype and columns from target data but do not want to perform validation using target datatype. Effective schema will be considered based on target and schema section.<br/>5. **Schema:** Select this option if you do not want to inherit datatype and columns from source data as well as from target data. Effective schema will be considered from validation and transformation section. <br/>For more information how these strategies work follow [this](derivation_strategies) link.|
|Global discard|This property is available in additional settings dropdown. If this property is checked then Guzzle will do validation based on data type, uniqueness, nullable and SQL validation fields and discard respective data from the table. If not checked then user can select discard setting options from setting button from Guzzle UI.|

## The interface of the validation and transformation section


<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/ingest_data/validation&transformation_1.png" target="_self" >
    <img width="1000" src="/img/docs/how-to-guides/ingest_data/validation&transformation_1.png" />
</a>

**Example of Transformation**
* Below is the source data in csv format, and we define a new column **full_name** in the name field, and in the transformation field, we will concatenate **first_name** and **last_name** and validate datatype is true as shown in the above image.
```
	id,first_name,last_name,gender
	1,Harry,Potter,M
    2,Ron,Wisley,M
    3,Hermoine,Granger,F
```
* In the transformation field, concatenate rule will be written like below: 
```
    concat(firt_name,last_name)
```
* After successfully running this job, in the target table, a new column will be created with **full_name**.

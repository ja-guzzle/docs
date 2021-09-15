---
id: validation_and_transformation
title: Validation and Transformation

---

**Note : This section is included in Injection activity only.**

In the Validation and Transformation section users can validate their data by checking data type of specific column, is it null or not, is it unique or not.

And also users can transform their data by giving transformation rules like they concat two different columns and store them in another column.

**Example for Transformation** : Let data in csv format is like 


	Id, first_name, last_name, gender

	1, Harry, Potter, M
    2, Ron, Wisley, M
    3, Hermoine, Granger, F

-> If I want to concatenate first_name and last_name and store it in full_name than I will give transformation rule like this 

	full_name = concat(firt_name,last_name)

And after running this job in the target table a new column is created with "full_name".

**In this section following properties are included : **

|Property|Description|
|--- |--- |
|Name|It include name of column|
|Transformation|Transformation rule|
|Data Type|Data type of column for validation (Guzzle gives suggestions for data type like int, string, bigint, smallint,ect).|
|Validate Data Type|If the user wants to validate the data type then check this box.|
|Uniqueness|Check for uniqueness of column|
|Nullable|Validates value in this column is nullable if it is checked.|
|SQL Validation|For validation of SQL table|
|Partition Column||



## Interface for Validation and Transformation section is given below:

<!-- ![image alt text](/img/docs/how-to-guides/ingest_data/transformation_validation_1.jpg) -->

<a href="/img/docs/how-to-guides/ingest_data/validation_&_transformation_1.png" target="_self" >
    <img width="1000" src="/img/docs/how-to-guides/ingest_data/validation_&_transformation_1.png" />
</a>




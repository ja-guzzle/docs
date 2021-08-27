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

<table>
  <tr>
    <th>Property</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Name</td>
    <td>It include name of column</td>
  </tr>
  <tr>
    <td>Transformation</td>
    <td>Transformation rule</td>
  </tr>
  <tr>
    <td>Data Type</td>
    <td>Data type of column for validation (Guzzle gives suggestions for data type like int, string, bigint, smallint,ect).</td>
  </tr>
  <tr>
    <td>Validate Data Type</td>
    <td>If the user wants to validate the data type then check this box.</td>
  </tr>
  <tr>
    <td>Uniqueness</td>
    <td>Check for uniqueness of column</td>
  </tr>
  <tr>
    <td>Nullable</td>
    <td>Validates value in this column is nullable if it is checked.</td>
  </tr>
  <tr>
    <td>SQL Validation</td>
    <td>For validation of SQL table</td>
  </tr>
  <tr>
    <td>Partition Column</td>
    <td></td>
  </tr>
</table>


## Interface for Validation and Transformation section is given below:

![image alt text](/img/docs/how-to-guides/ingest_data/transformation_validation_1.jpg)



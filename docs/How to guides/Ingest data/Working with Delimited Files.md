A Delimited Text File is a method of representing a Table of Data in a text file using characters to indicate a Structure of Columns and Rows. Common types of Delimited Text Files include Comma Separated Values (CSV) and Tab Separated Values (TSV).

Delimited file support in Guzzle provides extensive features to specify file format details and many other properties which make it easier to work with our Data. This article outlines how to work with Delimited files for source and target in Ingestion activity.  

## Delimited Text File Properties in Guzzle

<table>
  <tr>
    <td>Property</td>
    <td>Description</td>
    <td>Default Value</td>
  </tr>
  <tr>
    <td>Character Set</td>
    <td>It refers to the Set of Characters used to Read/Write test files. Allowed Values include: UTF-8, UTF-16 etc.</td>
    <td>UTF-8</td>
  </tr>
  <tr>
    <td>Column Delimiter</td>
    <td>The Characters used to separate columns in a file.</td>
    <td>,</td>
  </tr>
  <tr>
    <td>Quote Delimiter</td>
    <td>The single character to quote column values if it contains column delimiter or new line (or row delimiter)</td>
    <td>"</td>
  </tr>
  <tr>
    <td>Escape Character</td>
    <td>The single character to escape quotes inside a quoted value. Essentially if the “Quote Delimiter" is also part of column value the same can be escaped using this</td>
    <td>\\</td>
  </tr>
  <tr>
    <td>Trim Whitespace</td>
    <td>You may choose to Trim whitespaces on any one end or both ends of the Characters. This will be applied to all the columns irrespective of their values or data type
    It includes four options like
      1. none -> no trimming whitespace.
      2. both -> remove whitespace on both side.
      3. leading -> remove whitespace on front of the data.
      4. trailing -> remove whitespace at the end of data.
     </td>
    <td>None</td>
  </tr>
  <tr>
    <td>Contains Headers

</td>
    <td>Choose whether or not to include headings for columns.</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Infer Schema</td>
    <td>Choose whether or not to apply a schema.</td>
    <td>No</td>
  </tr>
</table>


The Interface for the Delimited File Format can be seen in the figure below.

![image alt text](/img/docs/how-to-guides/ingest_data/delimited1.png)

## Column Mapping in Delimited Files

We can also add Column Mapping to specify how to map columns in the source file. This is applicable for files which are having headers or without header. The functionality is meant to achieve either or both of the following item:

* Reduce the number of columns to be read

* Map the columns to a new field name

All we need to do is add the Column Name and the Index we would like to Map the Column to.
< Example :  In example "first_name" is indexed with 4th column which is "gender" and "age" is indexed with 1st column which is "id". >

![image alt text](/img/docs/how-to-guides/ingest_data/delimited2.png)

## Before Column Mapping:

![image alt text](/img/docs/how-to-guides/ingest_data/delimited3.png)

## After Column Mapping:

![image alt text](/img/docs/how-to-guides/ingest_data/delimited4.png)

In target :
	Properties on target is same as mentioned for source but two more properties are added which is 
		1. Generate Single file : this option is selected when you want to generate single file in target path.
		2. Preserve Hierarchy  : this option is selected when you have to maintain same hierarchy as source file has. 

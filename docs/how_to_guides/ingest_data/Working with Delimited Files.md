---
id: working_with_delimited_files
title: Working with Delimited Files
---

A Delimited Text File is a method of representing a Table of Data in a text file using characters to indicate a Structure of Columns and Rows. Common types of Delimited Text Files include Comma Separated Values (CSV) and Tab Separated Values (TSV).

Delimited file support in Guzzle provides extensive features to specify file format details and many other properties which make it easier to work with our Data. This article outlines how to work with Delimited files for source and target in Ingestion activity.  

## Delimited Text File Properties in Guzzle

|Property|Description|Default Value|
|--- |--- |--- |
|Character Set|It refers to the Set of Characters used to Read/Write test files. Allowed Values include: UTF-8, UTF-16 etc.|UTF-8|
|Column Delimiter|The Characters used to separate columns in a file.|,|
|Quote Delimiter|The single character to quote column values if it contains column delimiter or new line (or row delimiter)|"|
|Escape Character|The single character to escape quotes inside a quoted value. Essentially if the “Quote Delimiter" is also part of column value the same can be escaped using this|\\|
|Trim Whitespace|You may choose to Trim Whitespaces on any one end or both ends of the Characters. This will be applied to all the columns irrespective of their values or data type.<br/> It includes four options like<br/> 1. none -> no trimming whitespace.<br/>2. both -> remove whitespace on both side.<br/>3.leading -> remove whitespace on front of the data.<br/>4. trailing -> remove whitespace at the end of data.|None|
|Contains Headers|Choose whether to include headings for columns.|Yes|
|Infer Schema|Choose whether to apply a schema.|No|
|Configure processed path|The Configure Processed Paths feature allows the user to specify the directory and Guzzle moves the Data into that directory. When creating a processed file path Guzzle creates 3 subfolders: processed, rejected and partial.<br/> For more information click [here](moving_processed_files).|NULL|No|  
|Configure control file settings|The Configure Control File feature cross check whether a file is valid or not. It compares the number of records in the original file and the control file extension. Guzzle provides the Configure Control File feature for all local file formats including Delimited, JSON, XML, Excel and Fixed Length Files.<br/> For more information click [here](configure_control_file). |NULL|No|
|Partial Load|Specify partial loading of files.|False|No|



## The Interface for the Delimited File Format is


<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/ingest_data/delimited_1.png" target="_self" >
    <img width="1000" src="/img/docs/how-to-guides/ingest_data/delimited_1.png" />
</a> 

## Column Mapping in Delimited Files

We can also add Column Mapping to specify how to map columns in the source file. This is applicable for files which are having headers or without header. The functionality is meant to achieve either or both of the following item:

* Reduce the number of columns to be read

* Map the columns to a new field name

All we need to do is add the Column Name and the Index we would like to Map the Column to.
Example : In example "first_name" is indexed with 4th column which is "gender" and "age" is indexed with 1st column which is "id". 


<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/ingest_data/delimited2.png" target="_self" >
    <img src="/img/docs/how-to-guides/ingest_data/delimited2.png" />
</a> 

## Before Column Mapping:


<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/ingest_data/delimited3.png" target="_self" >
    <img src="/img/docs/how-to-guides/ingest_data/delimited3.png" />
</a> 

## After Column Mapping:

<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/ingest_data/delimited4.png" target="_self" >
    <img src="/img/docs/how-to-guides/ingest_data/delimited4.png" />
</a> 

In target :
Properties on target is same as mentioned for source, but two more properties are added which is 
1. Generate Single file : this option is selected when you want to generate single file in target path.
2. Preserve Hierarchy : this option is selected when you have to maintain same hierarchy as source file has. 

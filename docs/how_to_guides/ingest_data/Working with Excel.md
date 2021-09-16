---
id: working_with_excel_files
title: Working with Excel Files
---

This article outlines how to work with Excel (.xls or .xlsx)  for source and target in Ingestion activity.  Excel file support in Guzzle provides extensive features to specify file format details and many other properties which make it easier to work with our Data. 

## Excel File Properties in Guzzle

|Property|Description|Default Value|Available in Source Section|Available in Target Section|
|--- |--- |--- |--- |--- |
|Character Set|It refers to the Set of Characters used to Read/Write test files. Allowed Values include: UTF-8, UTF-16 etc.|UTF-8|✔|✔|
|Sheet Name|The name of the Excel Worksheet from where we read our Data.|None|✔|✔|
|Cell Address/Range|It is used to specify the Cell Range in the given worksheet to locate some selective data. If it is not specified Guzzle reads the whole worksheet.<br/> For Example: If range is B3, Guzzle will read the Data starting from the given cell.|A1|✔|✔|
|Contains Headers|Specifies whether to treat the first row in the given worksheet/range as a header line with names of columns.|True|✔|✔|
|Consider Empty as Null|It can be used to define whether to consider an Empty String as a Null Value.|True|✔|X|
|Workbook Password|Here we can specify a password for our Excel workbook. This is done to protect the structure of our worksheet which contains our data and prevents other users from modifying our data.|None|✔|X|
|Path|This is used to specify the File Path where we would like to store our Data.|None|X|✔|
|Configure processed path|The Configure Processed Paths feature allows the user to specify the directory and Guzzle moves the Data into that directory. When creating a processed file path Guzzle creates 3 subfolders: processed, rejected and partial.<br/> For more information click [here](moving_processed_files).|NULL|✔|X|  
|Configure control file settings|The Configure Control File feature cross check whether a file is valid or not. It compares the number of records in the original file and the control file extension. Guzzle provides the Configure Control File feature for all local file formats including Delimited, JSON, XML, Excel and Fixed Length Files.<br/> For more information click [here](configure_control_file). |NULL|✔|✔|
|Partial Load|Specify partial loading of files.|False|✔|X|

## The Interface for the Excel File Format is :

<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/ingest_data/excel_1.png" target="_self" >
    <img width="1000" src="/img/docs/how-to-guides/ingest_data/excel_1.png" />
</a> 

## Column Mapping in Excel Files

Column Mapping in Excel Files are very similar to Delimited Files. We can add Column Mapping to specify how to map columns in the source file. This is applicable for files which are having headers or without header. The functionality is meant to achieve either or both of the following item:

* Reduce the number of columns to be read

* Map the columns to a new field name

All we need to do is add the Column Name and the Index we would like to Map the Column to.

<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/ingest_data/excel2.png" target="_self" >
    <img width="1000" src="/img/docs/how-to-guides/ingest_data/excel2.png" />
</a> 

Here the column first_name is mapped to index 4 while age is mapped to index 1.

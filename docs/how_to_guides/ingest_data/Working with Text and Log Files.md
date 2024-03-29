---
id: working_with_text_and_log_files
title: Working with Text and Log Files
---

This article outlines how to use Free Form Text and Log Files as a source in Ingestion activity. 

:::note
Text and Log Files are supported only as a Source and not a Target in Guzzle.
:::

## Text and Log File Properties in Guzzle

|Property|Description|Default Value|Required|
|--- |--- |--- |--- |
|Character Set|It refers to the Set of Characters used to Read/Write test files. Allowed Values include: UTF-8, UTF-16 etc.|UTF-8|Yes|
|File Pattern|This is the file name pattern to find matching files in the data store. Refer to Working with Multiple Files for more details on defining the patter <br/>Example: <br/>customer/data/*.log|None|Yes|
|Parser|Parsing is the process of splitting data into chunks of information that are easier to manipulate and store. Each log contains multiple pieces of information stored as text, and the goal of parsing is to recognize and group them in a meaningful way.<br/> Guzzle provides 3 different ways to Parse the File:<br/>**Grok:** This uses standard grok templates that are available.  Guzzle only picks the lines which match the grok pattern and the rest are ignored. The syntax for a grok pattern is %{SYNTAX:SEMANTIC}. In other words it is %{Name of Pattern:Column in which you load}. For example, 3.44 will be matched by the NUMBER pattern and 55.3.244.1 will be matched by the IP pattern. Further, a string 55.3.244.1 might identify the client making a request. For this Example, the Grok Filter would be, %{NUMBER:duration} %{IP:client}.<br/>**Regular Expressions:**Grok sits on top of regular expressions, so any regular expressions are valid in grok as well. <br/>**None:**The None Parser will yield all the data as a single field ‘raw’ which can then be transported into the Schema Section. In the Schema Section we can then use the substring(raw) function in the transformation option to extract our Data.|None|Yes|
|Configure processed path|The Configure Processed Paths feature allows the user to specify the directory and Guzzle moves the Data into that directory. When creating a processed file path Guzzle creates 3 subfolders: processed, rejected and partial.<br/> For more information click [here](moving_processed_files).|NULL|No|  
|Configure control file settings|The Configure Control File feature cross check whether a file is valid or not. It compares the number of records in the original file and the control file extension. Guzzle provides the Configure Control File feature for all local file formats including Delimited, JSON, XML, Excel and Fixed Length Files.<br/> For more information click [here](configure_control_file). |NULL|No|
|Partial Load|Specify partial loading of files.|False|No|

## An Example of using the Grok Parser in Guzzle is :


<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/ingest_data/textandlog.gif" target="_self" >
    <img src="/img/docs/how-to-guides/ingest_data/textandlog.gif" />
</a> 


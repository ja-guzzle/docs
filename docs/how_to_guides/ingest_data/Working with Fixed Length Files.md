---
id: working_with_fixed_length_files
title: Working with Fixed Length Files
---

Fixed length files have a constant length for each field and record. In fixed-length text files, each field starts and ends at the same place in every record. Each new line is assumed as Row Separator. This article outlines how to use Fixed Length Files as a source in Ingestion activity. 

:::note
Fixed Length Files are supported only as a Source and not a Target in Guzzle.
:::

## Text and Log File Properties in Guzzle

|Property|Description|Default Value|Required|
|--- |--- |--- |--- |
|Character Set|It refers to the Set of Characters used to Read/Write test files. Allowed Values include: UTF-8, UTF-16 etc.|UTF-8|Yes|
|File Pattern|This is the file name pattern to find matching files in the data store. Refer to Working with Multiple Files for more details on defining the patter|None|Yes|
|Column Configuration|Guzzle supports mapping the files by providing start and end position for the field. By mapping data flows in Guzzle, you can transform data from fixed-width text files. In other words we can set up Substring splits based on ordinal position. All we need to do is specify the Column Name and the Column Length/Range. <br/>There are 2 ways we can specify the Column Specs:<br/>Specifying the number of Characters for each field. These are read sequentially.<br/> We can also specify the start position and the number of characters to read.<br/><br/> Note: We can read overlapping data as 2 different fields.<br/> Example:<br/>SG12313 as one of the field. <br/>We can read:<br/>SG as country <br/>And SG12313 as ID number|None|No|
|Configure processed path|The Configure Processed Paths feature allows the user to specify the directory and Guzzle moves the Data into that directory. When creating a processed file path Guzzle creates 3 subfolders: processed, rejected and partial.<br/> For more information click [here](https://guzzle.justanalytics.com/docs/how_to_guides/ingest_data/moving_processed_files).|NULL|No|  
|Configure control file settings|The Configure Control File feature cross check whether a file is valid or not. It compares the number of records in the original file and the control file extension. Guzzle provides the Configure Control File feature for all local file formats including Delimited, JSON, XML, Excel and Fixed Length Files.<br/> For more information click [here](https://guzzle.justanalytics.com/docs/how_to_guides/ingest_data/configure_control_file). |NULL|No|
|Partial Load|Specify partial loading of files.|False|No|

## Interface for fixed length file is

![image alt text](/img/docs/how-to-guides/ingest_data/fixedlength.png)


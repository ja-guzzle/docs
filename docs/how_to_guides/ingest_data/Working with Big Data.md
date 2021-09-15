---
id: working_with_big_data
title: Working with Big Data
---

This article outlines how to work with Big Data file formats namely: Parquet, Avro and ORC in Guzzle’s Ingestion activity. Guzzle supports these file formats for source and target in Ingestion activity.

## Big Data File Formats as a Source

|Property|Description|Default Value|Required|
|--- |--- |--- |--- |
|Character Set|It refers to the Set of Characters used to Read/Write test files. Allowed Values include: UTF-8, UTF-16 etc.|UTF-8|Yes|
|File Pattern|This is the file name pattern to find matching files in the data store. Refer to Working with Multiple Files for more details on defining the patter Example: customer/data/*.orc|None|Yes|
|Configure processed path|The Configure Processed Paths feature allows the user to specify the directory and Guzzle moves the Data into that directory. When creating a processed file path Guzzle creates 3 subfolders: processed, rejected and partial.<br/> For more information click [here](moving_processed_files).|NULL|No|  
|Configure control file settings|The Configure Control File feature cross check whether a file is valid or not. It compares the number of records in the original file and the control file extension. Guzzle provides the Configure Control File feature for all local file formats including Delimited, JSON, XML, Excel and Fixed Length Files.<br/> For more information click [here](configure_control_file). |NULL|No|
|Partial Load|Specify partial loading of files.|False|No|

## Interface for Big Data format

<!-- ![image alt text](/img/docs/how-to-guides/ingest_data/big_data_1.png) -->

<a href="/img/docs/how-to-guides/ingest_data/big_data_1.png" target="_self" >
    <img width="1000" src="/img/docs/how-to-guides/ingest_data/big_data_1.png" />
</a> 


## Big Data File Format as Target and Target section 

|Property|Description|Default Value|Required|
|--- |--- |--- |--- |
|Character Set|It refers to the Set of Characters used to Read/Write test files. Allowed Values include: UTF-8, UTF-16 etc.|UTF-8|Yes|
|Path|File path where user want to store data|None|Yes|
|Compression|This is used to specify the compression codec used by the file when writing to Parquet, Orc and Avro Files respectively. When reading from Big Data files, Guzzle determines the compression code based on the file metadata. Supported types include Snappy, Brotli, Lzo etc.|Snappy|No|
|Generate Single File|For generating single file on given path.|False|No|
|Preserve Hierarchy|this option is selected when user have to maintain same hierarchy as source file has.|False|No|


## The Interface for the Big Data Formats is

<!-- ![image alt text](/img/docs/how-to-guides/ingest_data/big_data_2.png) -->

<a href="/img/docs/how-to-guides/ingest_data/big_data_2.png" target="_self" >
    <img width="1000" src="/img/docs/how-to-guides/ingest_data/big_data_2.png" />
</a> 

:::info 
As this files has binary type data we can see data in table form by clicking on "Sample Data" which is present on right side on the corner of UI.
:::


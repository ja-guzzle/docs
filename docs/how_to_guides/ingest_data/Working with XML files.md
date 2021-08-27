---
id: working_with_xml_files
title: Working with XML Files
---

Extensible Markup Language (**XML**) is a markup language that defines a set of rules for encoding documents in a format that is both human-readable and machine-readable.

XML file support in Guzzle provides extensive features to specify file format details and many other properties which make it easier to work with our Data. This article outlines how to work with XML files for source and target in Ingestion activity.  

## XML File Properties in Guzzle

|Property|Description|Default Value|Available in Source Section|Available in Target Section|
|--- |--- |--- |--- |--- |
|Character Set|It refers to the Set of Characters used to Read/Write test files. Allowed Values include: UTF-8, UTF-16 etc.|UTF-8|✔|✔|
|XML Row Tag|The row tag of your XML files to treat as a row.<br/> For example, in this XML &lt;books&gt; &lt;books&gt;&lt;/books&gt; ...&lt;/books&gt;, the appropriate value would be book.|Row|✔|✔|
|XML Root Tag|The Root tag of your XML files to treat as a root.<br/> It encloses all the other elements and is therefore the sole parent element to all the other elements. For example, in the XML &lt;books&gt; &lt;books&gt; &lt;books&gt; ...&lt;/books&gt;, the appropriate value would be books.|Rows|✔|✔|
|Configure processed path|The Configure Processed Paths feature allows the user to specify the directory and Guzzle moves the Data into that directory. When creating a processed file path Guzzle creates 3 subfolders: processed, rejected and partial.<br/> For more information click [here](https://guzzle.justanalytics.com/docs/how_to_guides/ingest_data/moving_processed_files).|NULL|✔|X|  
|Configure control file settings|The Configure Control File feature cross check whether a file is valid or not. It compares the number of records in the original file and the control file extension. Guzzle provides the Configure Control File feature for all local file formats including Delimited, JSON, XML, Excel and Fixed Length Files.<br/> For more information click [here](https://guzzle.justanalytics.com/docs/how_to_guides/ingest_data/configure_control_file). |NULL|✔|✔|
|Partial Load|Specify partial loading of files.|False|✔|X|


## The Interface for XML in Guzzle is :

![image alt text](/img/docs/how-to-guides/ingest_data/xml.png)


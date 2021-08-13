This article outlines how to work with Excel (.xls or .xlsx)  for source and target in Ingestion activity.  Excel file support in Guzzle provides extensive features to specify file format details and many other properties which make it easier to work with our Data. 

## Excel File Properties in Guzzle

|Property|Description|Default Value|Available in Source Section|Available in Target Section|
|--- |--- |--- |--- |--- |
|Character Set|It refers to the Set of Characters used to Read/Write test files. Allowed Values include: UTF-8, UTF-16 etc.|UTF-8|✔|✔|
|Sheet Name|The name of the Excel Worksheet from where we read our Data.|None|✔|✔|
|Cell Address/Range|It is used to specify the Cell Range in the given worksheet to locate some selective data. If it is not specified Guzzle reads the whole worksheet.<br/>For Example: If range is B3, Guzzle will read the Data starting from the given cell.|A1|✔|✔|
|Contains Headers|Specifies whether to treat the first row in the given worksheet/range as a header line with names of columns.|True|✔|✔|
|Consider Empty as Null|It can be used to define whether to consider an Empty String as a Null Value.|True|✔|X|
|Workbook Password|Here we can specify a password for our excel workbook. This is done to protect the structure of our worksheet which contains our data and prevents other users from modifying our data.|None|✔|X|
|Path|This is used to specify the File Path where we would like to store our Data.|None|X|✔|


The Interface for the Excel File Format can be seen in the figure below.

![image alt text](/img/docs/how-to-guides/ingest_data/excel1.png)

## Column Mapping in Excel Files

Column Mapping in Excel Files are very similar to Delimited Files. We can add Column Mapping to specify how to map columns in the source file. This is applicable for files which are having headers or without header. The functionality is meant to achieve either or both of the following item:

* Reduce the number of columns to be read

* Map the columns to a new field name

All we need to do is add the Column Name and the Index we would like to Map the Column to.

![image alt text](/img/docs/how-to-guides/ingest_data/excel2.png)

Here the column first_name is mapped to index 4 while age is mapped to index 1.

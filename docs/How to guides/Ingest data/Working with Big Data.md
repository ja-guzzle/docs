This article outlines how to work with Big Data file formats namely: Parquet, Avro and ORC in Guzzle’s Ingestion activity. Guzzle supports these file formats for source and target in Ingestion activity.

## Big Data File Formats as a Source

|Property|Description|Default Value|Required|
|--- |--- |--- |--- |
|Character Set|It refers to the Set of Characters used to Read/Write test files. Allowed Values include: UTF-8, UTF-16 etc.|UTF-8|Yes|
|File Pattern|This is the file name pattern to find matching files in the data store. Refer to Working with Multiple Files for more details on defining the patter Example: customer/data/*.orc|None|Yes|
|Compression|This is used to specify the compression codec used by the file when writing to Parquet, Orc and Avro Files respectively. When reading from Big Data files, Guzzle determines the compression code based on the file metadata. Supported types include Snappy, Brotli, Lzo etc.|Snappy|No|


## Big Data File Format as Target and Target section 

|Property|Description|Default Value|Required|
|--- |--- |--- |--- |
|Character Set|It refers to the Set of Characters used to Read/Write test files. Allowed Values include: UTF-8, UTF-16 etc.|UTF-8|Yes|
|Path|File path where user want to store data|None|Yes|
|Compression|This is used to specify the compression codec used by the file when writing to Parquet, Orc and Avro Files respectively. When reading from Big Data files, Guzzle determines the compression code based on the file metadata. Supported types include Snappy, Brotli, Lzo etc.|Snappy|No|
|Generate Single File|For generating single file on given path.|False|No|
|Preserve Hierarchy|this option is selected when user have to maintain same hierarchy as source file has.|False|No|


The Interface for the Big Data Formats can be seen in the figure below:

![image alt text](/img/docs/how-to-guides/ingest_data/bigdatafileformat.png)

:::info 
As this files has binary type data we can see data in table form by clicking on "Sample Data" which is present on right side on the corner of UI.
:::


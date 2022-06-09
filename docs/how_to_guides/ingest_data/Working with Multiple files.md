---
id: working_with_multiple_files
title: Working with Multiple Files
---

This article outlines how to work with multiple files for source and target in Ingestion activity.  The Source section of Ingestion activity provides the property **File Pattern** that allow user to specify the dynamic file name pattern using Glob expression language. More details on Glob expression can be found [here](https://docs.oracle.com/javase/tutorial/essential/io/fileOps.html#glob) 

For Target section of Ingestion activity, Ingestion activity provides various settings to determine how the files are copied over from source folder or table into the target section

## Support for File Pattern in Source Section

Ingestion activity allows specifying the initial (or root) path when defining the data store as explained. The `File Pattern` setting is treated as relative to the path specified in the data store. Ingestion activity has the same treatment of File Pattern for all the types of. 

Below describes different options of how `File Pattern` can be specified and its treatment by Ingestion activity

|Options|Example|Description|
|--- |--- |--- |
|Static file path|CSV/customer.csv|This will retrieve specific file from the file system|
|Recursive|customer/**/data*.csv|This will cause it to enumerate all the files recursively in the customer subfolder in the form the file system and file matching the patter data*.csv will be considered for processing|
|Dynamic folder and file path|cus*/**/customer customer_[0-9][0-9]/**/customer|Since the first component of file pattern contains wildcard or regular expression, this will result in enumeration of all the files in the root directory, of which it will pick those which match the file pattern is used to recursively search the files within a given directory|
|Static folder name and dynamic sub-folder and file name|customer/Asia/data_<sg, hk, my>/*.csv|Since the first two level of folders are statically specified (and does not contain wildcard or reg-exp), it will enumerate all the files in the sub-directory customer/Asia and match the resultant files with the rest of file pattern|

:::note 
For optimal performance and to utilize the service-side filter, it is recommended to provide static directory name where possible to reduce the amount of metadata (file listing) that Ingestion activity has to retrieve before applying filename pattern. This is crucial if the source file system contains large of number of files
:::

## Using File Data Store in Target or Reject section

Ingestion activity provides following properties which determines how the files and folders are generated when using File datastore as target. 

|Property|Description|Required|Default Value|
|--- |--- |--- |--- |
|Path|This is the directory in which the target files and folder shall be created. This path is relative to the root path that is specified when defining the File datastore|Yes|NULL|
|Generate Single File|When set as true, this will generate a single file corresponding to each source file. Similarly, for when the source is a table it will generate one file for entire table for non-partitioned table or one data file per each partition in the respective partition folder. If the settings is set to false, it will create a folder for each source file or source table and generate multiple part files as an output in these folders. For partitioned table it will contain generate multiple part files within the partition folder|No|False|
|Preserve Hierarchy|When set to true, it will mirror the folder structure as per source folder structure inside the target directory specified as per File Path. The entire folder structure of source as per "File Pattern" is mirrored.|No|False|


Apart from the above properties, there are additional settings that are meant to specify File Format and its associated properties. This is covered in detail in section :

:::note 
Any existing file within the same folder and file name shall be overwritten 
:::
## Illustration of how file based source are copied in Target

Assuming that source file pattern results below files:

    source
    |
    ├── folder1
    │   └── users1.csv
    |
    └── folder2
        ├── users2.csv
        |
        └── folder2_a
            └── users2_a.csv

the folders and files that shall be generated in the target folder path (which is root path in Data store + File path specified in target section) shall be as per below: 

<table>
  <tr>
  	<th colspan="6">Target config and its properties</th>
  </tr>
  <tr>
  	<th>Target Path</th>
  	<th>Preserve Hierarchy</th>
  	<th>Merge Part File/ Generate Single FIle</th>
  	<th>Partition defined in tranform tab ?</th>
  	<th>Target FileName</th>
  	<th>Expected Output</th>
  </tr>
  <tr>
    <td>/target/</td>
    <td>False</td>
    <td>False</td>
    <td>False</td>
    <td>NULL</td>
    <td>

      target 
      | 
      └── data.json 
	        ├── part-00000-xxxxxx.json 
	        ├── part-00000-xxxxxx.json 
            └── _SUCCESS      
	  
  </td>
  </tr>
  <tr>
    <td>/target/</td>
    <td>False</td>
    <td>True</td>
    <td>False</td>
    <td>NULL</td>
    <td>

      target 
      | 
      └── data.json 
  	</td>
  </tr>
  <tr>
    <td>/target/</td>
    <td>True</td>
    <td>False</td>
    <td>False</td>
    <td>NULL</td>
    <td>

      target 
      | 
      ├── folder1 
      │   └── users1.json 
      |   	├── part-00000-xxxxxx.json 
      │   	└── _SUCCESS 
      | 
      └── folder2 
          ├── users2.json 
          |   ├── part-00000-xxxxxx.json 
          |   └── _SUCCESS 
          | 
          └── folder2_a 
                  └── users2_a.json 
                  ├── part-00000-xxxxxx.json 
                  └── _SUCCESS
  	</td>
  </tr>
  <tr>
    <td>/target/</td>
    <td>True</td>
    <td>True</td>
    <td>False</td>
    <td>NULL</td>
    <td>

	    target 
	    | 
	    ├── folder1 
	    │   └── users1.json 
	    | 
	    └── folder2 
	      ├── users2.json 
	      | 
	      └── folder2_a 
	          └── users2_a.json 
 
  	</td>
  </tr>
  <tr>
    <td>/target/</td>
    <td>False</td>
    <td>False</td>
    <td>True</td>
    <td>NULL</td>
    <td>

	    target 
	    | 
	    └── data.json 
	      ├── part-00000-xxxxxx.json 
	      ├── part-00000-xxxxxx.json 
	      └── _SUCCESS 
 
  	</td>
   </tr>
   <tr>
    <td>/target/</td>
    <td>False</td>
    <td>True</td>
    <td>True</td>
    <td>NULL</td>
    <td>

      target 
      | 
      └── data.json 
  	</td>
   </tr>
   <tr>
    <td>/target/</td>
    <td>True</td>
    <td>False</td>
    <td>True</td>
    <td>NULL</td>
    <td>

      target
      | 
      └── data.json 
        ├── city=a 
        |   ├── part-00000-xxxxxx.json 
        |   └── _SUCCESS 
        ├── city=b 
        |   ├── part-00000-xxxxxx.json 
        |   └── _SUCCESS 
        └── city=c 
            ├── part-00000-xxxxxx.json 
            └── _SUCCESS
  	</td>
   </tr>
   <tr>
    <td>/target/</td>
    <td>True</td>
    <td>True</td>
    <td>True</td>
    <td>NULL</td>
    <td>

      target
      | 
      └── data.json 
        ├── city=a 
        |   ├── part-00000-xxxxxx.json 
        |   └── _SUCCESS 
        ├── city=b 
        |   ├── part-00000-xxxxxx.json 
        |   └── _SUCCESS 
        └── city=c 
            ├── part-00000-xxxxxx.json 
            └── _SUCCESS
  	</td>
   </tr>
   <tr>
    <td>/target/</td>
    <td>False</td>
    <td>False</td>
    <td>False</td>
    <td>target_file.json</td>
    <td>

	    target 
	    | 
	    └── data.json 
	      ├── part-00000-xxxxxx.json 
	      ├── part-00000-xxxxxx.json 
	      └── _SUCCESS 
 
  	</td>
   </tr>
   <tr>
    <td>/target/</td>
    <td>False</td>
    <td>True</td>
    <td>False</td>
    <td>target_file.json</td>
    <td>

	    target 
		| 
		└── target_file.json   
		 
  	</td>
   </tr>
   <tr>
    <td>/target/</td>
    <td>False</td>
    <td>False</td>
    <td>True</td>
    <td>target_file.json</td>
    <td>

	    target 
	    | 
	    └── data.json 
	      ├── part-00000-xxxxxx.json 
	      ├── part-00000-xxxxxx.json 
	      └── _SUCCESS 
 
  	</td>
   </tr>
   <tr>
    <td>/target/</td>
    <td>False</td>
    <td>True</td>
    <td>True</td>
    <td>target_file.json</td>
    <td>

	    target 
	    | 
	    └── target_file.json   
	
  </td>
   </tr>
</table>


:::note
1. The suffix files or folder when preserve hierarchy is not selected is published ID that is generated 
2. The part file are generated by spark and the naming convention will depend on implementation of Spark connector
:::

## Illustration of how table based source are copied in target

Assuming the source table is non partitioned, it shall generate the files as per below

<table>
  <tr>
  	<th colspan="6">Target Config and its properties values</th>
  </tr>
  <tr>
  	<th>Target Path</th>
  	<th>Preserve Hierarchy</th>
  	<th>Merge Part File/ Generate Single FIle</th>
  	<th>Partition defined in tranform tab ?</th>
  	<th>Target FileName</th>
  	<th>Expected Output</th>
  </tr>
  <tr>
    <td>/target/</td>
    <td>True/False</td>
    <td>False</td>
    <td>False</td>
    <td>NULL</td>
    <td>

      target 
      | 
      └── data.json 
	        ├── part-00000-xxxxxx.json 
	        ├── part-00000-xxxxxx.json 
            └── _SUCCESS
  </td>
  </tr>
  <tr>
    <td>/target/</td>
    <td>True/False</td>
    <td>True</td>
    <td>False</td>
    <td>NULL</td>
    <td>

      target 
      | 
      └── data.json 
  </td>
  </tr>
  <tr>
    <td>/target/</td>
    <td>True/False</td>
    <td>True</td>
    <td>True</td>
    <td>NULL</td>
    <td>

      target
      | 
      └── data.json 
          ├── city=a 
          |   ├── part-00000-xxxxxx.json 
          |   └── _SUCCESS 
          ├── city=b 
              ├── part-00000-xxxxxx.json 
              └── _SUCCESS
  </td>
  </tr>
  <tr>
    <td>/target/</td>
    <td>False</td>
    <td>False</td>
    <td>True</td>
    <td>target_files.json</td>
    <td>

      target
      | 
      └── data.json
          ├── part-00000-xxxxxx.json 
          ├── part-00000-xxxxxx.json 
          └── _SUCCESS
  </td>
  </tr>
  <tr>
    <td>/target/</td>
    <td>False</td>
    <td>True</td>
    <td>True</td>
    <td>target_files.json</td>
    <td>

      target
      | 
      └── target_files.json
  </td>
  </tr>
  
</table>

<!-- Considering the source table, the customer** **is partitioned with two levels at **region **and **country **level with below as sample set of partitions:

customer

  region=Asia

  country=sg<br/>
  country=my

  region=Europe

  country=fr

The target files and folder will follow below structure as per different settings of 

 

|||Generate Single File||
|--- |--- |--- |--- |
|||true|false|
|Preserve Hierarchy|true|customer/region=Asia/country=sg/customer.csv country=my/customer.csv region=Europe/country=fr/customer.csv|customer/region=Asia/country=sg/part_001.csv part_002.csv country=my/part_001.csv part_002.csv region=Europe/country=fr/part_001.csv part_002.csv|
||false|customer.csv|customer/part_001.csvpart_002.csv| -->


:::note 
The partitioned settings of the tales are taken from the table metadata (and not from Ingestion config)
:::

## Parallel Processing of Files

When ingesting data from multiple source files, Ingestion activity will read and process individual files in separate threads. It will spawn a fixed number of threads which will pick one file at a time once it's done processing the previous file. Each of this thread will read the file, perform control total and schema validations and apply transformation before publishing it to target. 

The number of threads that Ingestion activity spawns to process the files concurrently is determined by the parameter: **guzzle.batchpipeline.threads **which can be specified when running the activity or passed when calling the activity from **Pipeline**

## Partial Load setting in Guzzle

When processing multiple source files, Ingestion Activity will process individual files in separate threads. It reads the files, performs control total and schema validations and applies transformation before publishing it to target. A subset of files can fail during this process due to one of the below reasons: :

1. When the control total of the file does not match with the actual file content.

2. If validations are specified the number of records failing the validation breaches the reject threshold set for a given file.

3. The file becomes unavailable when Ingestion activity is trying to process it.

**Partial Load** setting in Source section determines whether Ingestion activity should write the data to Target if a subset of files has failed the validations. Below describes the behavior of this setting:. 

|||
|--- |--- |
|True|will proceed to write to the target datastore excluding the files which had failure. The activity will be marked with the status WARNING|
|false (default)|None of the data will be written to the to target datastore and job will be marked with status FAILED|

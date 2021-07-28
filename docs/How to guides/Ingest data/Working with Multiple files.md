This article outlines how to work with multiple files for source and target in Ingestion activity.  The Source section of Ingestion activity provides the property **File Pattern**  that allow user to specify the dynamic file name pattern using Glob expression language. More details on Glob expression can be found [here](https://docs.oracle.com/javase/tutorial/essential/io/fileOps.html#glob) 

For Target  section of Ingestion activity, Ingestion activity provides various settings to determine the how the files are copied over from source folder or table into the target section

## Support for File Pattern in Source Section

Ingestion activity allows specifying the initial (or root) path when defining the data store as explained. The `File Pattern` setting is treated as relative to the path  specified in the data store. Ingestion activity has the same treatment of File Pattern for all the types of. 

Below describes different options of how `File Pattern` can be specified and its treatment by Ingestion activity

<table>
  <tr>
    <td>Options</td>
    <td>Example</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>Static file path</td>
    <td>csv/customer.csv</td>
    <td>This will retrieve specific file from the file system</td>
  </tr>
  <tr>
    <td>Recursive</td>
    <td>customer/**/data*.csv</td>
    <td>This will cause it to enumerate all the files recursively in the customer subfolder in the from the file system and file matching the patter data*.csv will be considered for processing</td>
  </tr>
  <tr>
    <td>Dynamic folder and file path</td>
    <td>cus*/**/customer customer_[0-9][0-9]/**/customer</td>
    <td>Since the first component of file pattern contains wildcard or regular expression, this will result in enumeration of all the files in the root directory , of which it will pick those which match the file pattern is used to  recursively search the files within a given directory </td>
  </tr>
  <tr>
    <td>Static folder name and dynamic sub-folder and file name</td>
    <td><span>customer/asia/data_&lt;sg, hk, my&gt;/*.csv</span></td>
    <td>Since the first two level of folders are statically specified (and does not contain wildcard or reg-exp), it will enumerate all the files in the sub-directory customer/asia and match the resultant files with the rest of file pattern</td>
  </tr>
</table>

:::note 
For optimal performance and to utilize the service-side filter, it is recommended to provide static directory name where possible to reduce the amount of metadata (file listing) that Ingestion activity has to retrieve before applying filename pattern. This is crucial if the source file system contains large of number of files
:::

## Using File Data Store in Target or Reject section

Ingestion activity provides following properties which determines how the files and folders are generated when using File datastore as target. 

<table>
  <tr>
    <td>Property</td>
    <td>Description</td>
    <td>Required</td>
  </tr>
  <tr>
    <td>Path</td>
    <td>This is the directory in which the target files and folder shall be created. This path is relative to the root path that is specified when defining the File datastore
</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Generate Single File</td>
    <td>When set as true, this will generate a single file corresponding to each source file. Similarly for when the source is a table it will generate one file for entire table for non-partitioned table or one data file per each partition in the respective partition folder
If the settings is set to false, it will create a folder for each source file or source table and generate multiple part files as an output in these folders. For partitioned table it will contain generate multiple part files within the partition folder</td>
    <td>No  (default value: is false)</td>
  </tr>
  <tr>
    <td>Preserve Hierarchy</td>
    <td>When set to true, it will mirror the folder structure as per source folder structure inside the target directory specified as per File Path. The entire folder structure of source as per "File Pattern" is mirrored.</td>
    <td>No  (default value: is false)</td>
  </tr>
</table>


Apat from the above properties, there are additional settings that are meant to specify File Format and its associated properties. This is covered in detail in section :

:::note 
Any existing file within the same folder and file name shall be overwritten 
:::
## Illustration of how file based source are copied in Target

Assuming that source file pattern results below files:

customer/

   customer1.csv

   customer2.csv

the folders and files that shall be generated in the target folder path (which is root path in Data store + File path specified in target section) shall be as per below: 

<table>
  <tr>
    <td></td>
    <td></td>
    <td>Generate Single File</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td>true</td>
    <td>false</td>
  </tr>
  <tr>
    <td>Preserve Hierarchy</td>
    <td>true
</td>
    <td>customer/
   customer1.csv
   customer2.csv</td>
    <td>customer/
   customer1.csv\
      part_001.csv
      part_002.csv
   customer2.csv\
      part_001.csv
      part_002.csv</td>
  </tr>
  <tr>
    <td></td>
    <td>false</td>
    <td> customer1.csv.12321312213213
 customer2.csv.12321312213214</td>
    <td>customer1.csv.12321312213213
      part_001.csv
      part_002.csv
customer2.csv.12321312213214
      part_001.csv
      part_002.csv</td>
  </tr>
</table>


:::note
1. The suffix files or folder when peserver hierarchy is not selected is publish id that is generated 
2. The part file are generated by spark and the naming convention will depend on implementation of Spark connector
:::

## Illustration of how table based source are copied in target

Assuming the source table **customer **is non partitioned, it shall generate the files as per below

<table>
  <tr>
    <td></td>
    <td></td>
    <td>Generate Single File</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td>true</td>
    <td>false</td>
  </tr>
  <tr>
    <td>Preserve Hierarchy</td>
    <td>true
or
false</td>
    <td>customer.csv</td>
    <td>customer/
      part_001.csv
      part_002.csv
</td>
  </tr>
</table>


Considering the source table, the customer** **is partitioned with two levels at **region **and **country **level with below as sample set of partitions:

customer

  region=asia

  country=sg<br/>
  country=my

  region=europe

  country=fr

The target files and folder will following below structure as per different settings of 

 

<table>
  <tr>
    <td></td>
    <td></td>
    <td>Generate Single File</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td>true</td>
    <td>false</td>
  </tr>
  <tr>
    <td>Preserve Hierarchy</td>
    <td>true
</td>
    <td>customer/
   region=asia/
      country=sg/
        customer.csv      
      country=my/
        customer.csv
   region=europe/
      country=fr/
        customer.csv</td>
    <td>customer/
   region=asia/
      country=sg/
       part_001.csv
       part_002.csv
      country=my/
       part_001.csv
       part_002.csv
   region=europe/
      country=fr/
       part_001.csv
       part_002.csv</td>
  </tr>
  <tr>
    <td></td>
    <td>false</td>
    <td>customer.csv</td>
    <td>customer/
      part_001.csv
      part_002.csv
</td>
  </tr>
</table>


   

:::note 
The partitioned settings of the tales are taken from the table metadata (and not from Ingestion config)
:::
## Parallel Processing of Files

When ingesting data from multiple source files, Ingestion activity will read and process individual files in separate threads. It will spawn a fixed number of threads which will pick one file at a time once it's done processing the previous file. Each of this thread will read the file, perform control total and schema validations and apply transformation before publishing it to target. 

The number of threads that Ingestion activity spawns to process the files concurrently is determined by the parameter: **guzzle.batchpipeline.threads **which can be specified when running the activity or passed when calling the activity from **Pipeline**

## Partial Load setting in Guzzle

When processing multiple source files, Ingestion Activity will process individual files in separate threads. It reads the files, performs control total and schema validations and applies transformation before publishing it to target. A subset of files can fail during this process due to one of the below reasons: :

1. When the control total of the file does not match with the actual file content

2. If validations are specified the number of records failing the validation breaches the reject threshold set for a given file

3. The file becomes unavailable when Ingestion activity is trying to process it

**Partial Load  **setting in Source section determines whether Ingestion activity should write the data to Target if a subset of files have failed the validations. Below describes the behavior of this setting: . 

<table>
  <tr>
    <td>true</td>
    <td>will proceed to write to the target datastore excluding the files which had failure. The activity will be marked with the status WARNING</td>
  </tr>
  <tr>
    <td>false (default)</td>
    <td>None of the data will be written to the to target datastore and job will be marked with status  FAILED</td>
  </tr>
</table>
This article outlines how to work with Big Data file formats namely: Parquet, Avro and ORC in Guzzle’s Ingestion activity. Guzzle supports these file formats for source and target in Ingestion activity.< 	- This feature is use to do validation and transformation on big data files like parquet, orc and avro.
	- This is files is available in both source and target side. >
Excel file support in Guzzle provides extensive features to specify file format details and many other properties which make it easier to work with our Data. 
< 	- This excel sentence is not proper. >
## Big Data File Formats as a Source

<table>
  <tr>
    <td>Property </td>
    <td>Description</td>
    <td>Default Value</td>
    <td>Required</td>
  </tr>
  <tr>
    <td>Character Set</td>
    <td>It refers to the Set of Characters used to Read/Write test files. Allowed Values include: UTF-8, UTF-16 etc.</td>
    <td>UTF-8</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>File Pattern</td>
    <td>This is the file name pattern to find matching files in the data store. Refer to Working with Multiple Files for more details on defining the patter Example: customer/data/*.orc</td>
    <td>None</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Compression</td>
    <td>This is used to specify the compression codec used by the file when writing to Parquet, Orc and Avro Files respectively. When reading from Big Data files, Guzzle determines the compression code based on the file metadata. Supported types include Snappy, Brotli, Lzo etc.</td>
    <td>Snappy</td>
    <td>No</td>
  </tr>
</table>

< 	- Which property is present in source side or target side is not given. 
    - Comppression is present in target side only not for source. >

The Interface for the Big Data Formats can be seen in the figure below:

![image alt text](/img/docs/how-to-guides/ingest_data/bigdatafileformat.png)

< - As this files has binary type data we can see data in table form by clicking on "Sample Data" which is present on right side on the corner of UI.
	- Insert image of source tab. >


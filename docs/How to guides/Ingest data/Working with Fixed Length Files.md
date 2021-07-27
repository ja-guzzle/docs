Working with Fixed Length Files

Fixed length files have a constant length for each field and record. In fixed-length text files, each field starts and ends at the same place in every record. Each new line is assumed as Row Separator. This article outlines how to use Fixed Length  Files as a source in Ingestion activity. 

**Note: Fixed Length Files are supported only as a Source and not a Target in Guzzle.**

# Text and Log File Properties in Guzzle

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
    <td>This is the file name pattern to find matching files in the data store. Refer to Working with Multiple Files for more details on defining the patter
</td>
    <td>None</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Column Configuration</td>
    <td>Guzzle supports mapping the files by providing start and end position for the field. By mapping data flows in Guzzle, you can transform data from fixed-width text files. In other words we can set up Substring splits based on ordinal position. All we need to do is specify the Column Name and the Column Length/Range. 
There are 2 ways we can specify the Column Specs:
Specifying the number of Characters for each field. These are read sequentially.
We can also specify the start position and the number of characters to read.

Note: We can read overlapping data as 2 different fields.

Example:

SG12313 as one of the field

We can read:
SG as country 
And SG12313 as ID number

</td>
    <td>None</td>
    <td>No</td>
  </tr>
</table>


![image alt text](/img/docs/how-to-guides/ingest_data/fixedlength.png)


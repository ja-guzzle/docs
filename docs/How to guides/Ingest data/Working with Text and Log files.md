\\

1. Free form Text and Log files can be ingested in guzzle

2. Only supported for Source and not Target

3. There are three ways to parse the file:. 

    1. Grok: this uses standard grok templates that are available.  Guzzle only picks the lines which match the grok patter and rest are ignored

        1. Any custom template can be referred and they can be placed in the location GUZZLE_HOME/temlates/fol. Lets show one or two custom template

    2. Regular expression - take an example from Gopal.  Guzzle only picks the lines which match the grok patter and rest are ignored

    3. None This will read entire data as single column as "raw"

We should follow should folllo

# Azure SQL as a Source

**Note: In the Datastore section we can choose to read from Azure Synapse either as a Table or through SQL (in the form of a query).**

<table>
  <tr>
    <td>Property </td>
    <td>Description</td>
    <td>Default Value</td>
    <td>Required</td>
  </tr>
  <tr>
    <td>Table + Filter</td>
    <td>Specify the table from where to read data. The table can contain schema or even database name. Example: 
customerdb.[dbo].[customer]
[customer]  (default schema name dbo will be assumed)
[dbo].[customer] (database name shall be as per Datastore config)

Also when the Table option is selected, you can also specify the Filter which needs to be included when querying data from synapse. 

</td>
    <td>None</td>
    <td>Yes.</td>
  </tr>
  <tr>
    <td>SQL</td>
    <td>Specify the SQL query which will be run as-is on the source</td>
    <td></td>
    <td></td>
  </tr>
</table>


# Azure SQL as a Target or Reject

<table>
  <tr>
    <td>Property </td>
    <td>Description</td>
    <td>Default Value</td>
    <td>Required</td>
  </tr>
  <tr>
    <td>Table</td>
    <td>This is used to specify the Target Table we would like to create based on our Source.</td>
    <td>None</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Operation</td>
    <td>Provides two options that determines whether the content of source or reject data is expected to be -
append: To appended to existing data 
overwrite: Entire data in the synapse tabe is overwritten 
</td>
    <td>append</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Max String Length</td>
    <td>Max String Length to set the string length for all VARCHAR/NVARCHAR type columns when writing data into Azure Synapse.
Any data which is greater than this will be clipped </td>
    <td>4000</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Write Semantics</td>
    <td>There are two possible values that can be selected the details o of which can be found at :
 
Polybase:
This option shall use Polybase feature of Azure Synapse to load or unload data to from common Blob storage 
Copy:
The Copy statement offers a more convenient way of loading data into Azure Synapse without the need to create an external table, requires fewer permissions to load data, and provides an improved performance for high-throughput data ingestion into Azure Synapse.</td>
    <td>Polybase</td>
    <td>Yes</td>
  </tr>
</table>



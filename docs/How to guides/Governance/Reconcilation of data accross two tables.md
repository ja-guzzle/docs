**Data reconciliation** is used during a **data** migration where the target **data** is compared against original source **data.**

Guzzle Support below datastores for reconciliations.

1. Jdbc
2. Hive
3. Delta

Guzzle provides below functionality and parameters for reconciliation of data across source and target resources.

<table>
  <tr>
    <td>Property </td>
    <td>Description</td>
    <td>Default Value</td>
    <td>Required</td>
  </tr>
  <tr>
    <td>Datastore</td>
    <td>You can choose any of the available datastore from drop-down (as appropriate). If the connection is not available in drop-down then you have to create new.</td>
    <td>None</td>
    <td>Yes</td>
  </tr>
  <tr>
  <td>Table <br/>
  + <br/>
Filter
</td>
    <td>Specify the table from where to read data. The table can contain schema and also database name. We can specify the Schema Name along with the Table Name. If it is not specified it is taken from the Datastore.
<br/>
Also when the Table option is selected, you can also specify the Filter. The filter can be used to select only a part of the table. We may basically enter a condition and only the part of the table that satisfies the condition will be seen in the Target Section.
</td>
    <td>None</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>SQL</td>
    <td>Alternatively Specify the SQL query which will be run as-is on the source</td>
    <td>None</td>
    <td>Yes</td>
  </tr>
</table>


## Recon

The recon section will give you ability to provide comparison logic between source and target datastore

<table>
  <tr>
    <td>Property </td>
    <td>Description</td>
    <td>Default Value</td>
    <td>Required</td>
  </tr>
  <tr>
    <td>Primary Keys</td>
    <td>Specify primary keys for source and target endpoint based on that reference; Guzzle will show comparisons between two aggregated metrics.</td>
    <td>None</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Grouping Columns</td>
    <td>Specify columns to be used for grouping source data and target data for aggregating metrics to be compared between source and target for recon.</td>
    <td>None</td>
    <td>No</td>
  </tr>
  <tr>
    <td>Execute on source</td>
    <td>Specify if you want to push down the source and target SQL queries along with filters to be applied on respective source and target endpoints for execution. Only aggregation and result comparison would be performed by Guzzle using Spark dataframe.</td>
    <td>False</td>
    <td>No</td>
  </tr>
  <tr>
    <td>Partial Match</td>
    <td>Specify If you want to show specific status with recon metrics.
Guzzle follow below partial match conditions</td>
    <td>False</td>
    <td>No</td>
  </tr>
</table>


## Partial Match

Guzzle follow below Partial Match Conventions to show status of job

<table>
  <tr>
    <td>Partial Match</td>
    <td>Invalid Records</td>
    <td>Status</td>
  </tr>
  <tr>
    <td>True</td>
    <td>= 0</td>
    <td>SUCCESS</td>
  </tr>
  <tr>
    <td>True</td>
    <td>= Total Records</td>
    <td>FAILED</td>
  </tr>
  <tr>
    <td>True</td>
    <td>0 &lt; && &gt; Total Records</td>
    <td>WARNING</td>
  </tr>
  <tr>
    <td>False</td>
    <td>> 0</td>
    <td>FAILED</td>
  </tr>
  <tr>
    <td>False</td>
    <td>= 0</td>
    <td>SUCCESS</td>
  </tr>
</table>


## Recon Metrics

You can specify the source aggregation column and target aggregation column which will be compared and recon results will be stored in the Guzzle repository table recon_summary and recon_detail.

<table>
  <tr>
    <td>Property </td>
    <td>Description</td>
    <td>Default Value</td>
    <td>Required</td>
  </tr>
  <tr>
    <td>Name</td>
    <td>Specify the name of the recon metrics</td>
    <td>None</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Source Aggregation</td>
    <td>Specify source aggregation function </td>
    <td>None</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Target Aggregation</td>
    <td>Specify Target aggregation function</td>
    <td>None</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Detail Check Enabled</td>
    <td>Specify if you want to bring detailed information on reconciliation records, if it’s true then guzzle will calculate results for the mis-mathced records and store them in the guzzle repository table recon_detail.</td>
    <td>False</td>
    <td>No</td>
  </tr>
</table>



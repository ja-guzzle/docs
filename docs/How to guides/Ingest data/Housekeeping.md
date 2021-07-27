Housekeeping

Guzzle’s Housekeeping module allows the user to implement granular level housekeeping on the target tables according to different data retention policies across various data storage layers within the data lake.

# Housekeeping Properties

<table>
  <tr>
    <td>Property </td>
    <td>Description</td>
    <td>Default Value</td>
    <td>Required</td>
  </tr>
  <tr>
    <td>Table</td>
    <td>Specify the table from where to read data. The table can contain schema or even database name. If you select Table as input, data flow fetches all the data from the table specified in the dataset.
</td>
    <td>None</td>
    <td>Yes
      </td>
  </tr>
  <tr>
    <td>Housekeeping Column</td>
    <td>Specify column name to be used for housekeeping the table. Mostly this is going to be the partition columns of the table.
</td>
    <td>None</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Operation</td>
    <td>Select if you want to perform delete or move on the Housekeeping Table by selecting an option from the drop down menu.


</td>
    <td>Delete</td>
    <td>     Yes</td>
  </tr>
  <tr>
    <td>Configure Table Dependency</td>
    <td>This property is used to manually specify source table dependency and to manually configure Apache Atlas lineage.</td>
    <td>None</td>
    <td>No</td>
  </tr>
  <tr>
    <td>Reference Point</td>
    <td>Specify any of the available options in the drop-down list - Current Time, Max Value, Value as a reference point for applying the housekeeping rules. 
Current Time: This  will housekeep treating the current system timestamp as a reference point to apply the housekeeping rules defined under Retention Strategies. 
Max Value: it will calculate the maximum value for the Housekeeping Column specified in the above section as a reference point. 
Value: It allows the user to specify a custom value or pass a value through a runtime parameter as a reference point for housekeeping.</td>
    <td>Current Time</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Retention Strategies</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>




This article provides information about External support in Guzzle and what are different external library Guzzle supports.

Guzzle supports External Framework and tools. 

Guzzle External supports below datastores

1. Databricks

2. JDBC

3. ADF

Guzzle provider below functionality and parameters for External

<table>
  <tr>
    <td>Property </td>
    <td>Description</td>
    <td>Default Value</td>
    <td>Required</td>
  </tr>
  <tr>
    <td>Datastore</td>
    <td>You can choose any of the available datastore from drop-down (as appropriate). If the connection is not available in drop-down then you can create new data store</td>
    <td>None</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Script (Only Applicable for JDBC)</td>
    <td>Used to specify script to run as external</td>
    <td>None</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Run Name</td>
    <td>Used to specify external Run name to identify</td>
    <td>None</td>
    <td>No</td>
  </tr>
  <tr>
    <td>Timeout Seconds</td>
    <td>Specify When guzzle tries to connect external tools and how long stick this.</td>
    <td>None</td>
    <td>No</td>
  </tr>
  <tr>
    <td>Task</td>
    <td>Used to specify external tool type guzzle supports 1.) Notebook, 2.) Spark Jar, 3.) PySpark</td>
    <td>None</td>
    <td>No</td>
  </tr>
  <tr>
    <td>Notebook Path (only applicable if Task is Notebook)</td>
    <td>Used to specify the Databricks Notebook full path </td>
    <td>None</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Main Class (only applicable if Task is Spark Jar)</td>
    <td>Used to specify the main class name of the spark jar file.</td>
    <td>None</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Script Path (Only applicable if Task is PySpark)</td>
    <td>Used to specify the script path of an external file.</td>
    <td>None</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Revision Timestamp </td>
    <td></td>
    <td>None</td>
    <td>No</td>
  </tr>
  <tr>
    <td>Parameters</td>
    <td>Used to specify Parameter it’s name and value pair which guzzle used while running external library.</td>
    <td>None</td>
    <td>No</td>
  </tr>
  <tr>
    <td>Libraries</td>
    <td>Specify external libraries</td>
    <td>None</td>
    <td>No</td>
  </tr>
</table>


## Libraries :

Guzzle User can add a new library by click on click to add library, Guzzle supports below libraries configs.

1. DBFS

2. PyPI

3. Maven

4. CRAN

## Dependency : 

Guzzle used to know dependency between lineages so while the user ran the job under pipeline guzzle will prepare dependency stack and follow that stack.

Users can specify source and target dependency by clicking on dependency tab.

Users has to specify 

Endpoints : Select dependent endpoint from dropdowns

Property : it is auto populated based on selected endpoints

Value : Specify dependent value it may be table, files ...


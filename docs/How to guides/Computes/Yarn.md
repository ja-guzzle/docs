Yarn

This article provides information about Yarn support in Guzzle.

Yarn does not support various features like : 

1. ADLS

2. DBFS

3. DELTA

4. HIVE

Guzzle provides below parameter and configs for Yarn

<table>
  <tr>
    <td>Property </td>
    <td>Description</td>
    <td>Default Value</td>
    <td>Required</td>
  </tr>
  <tr>
    <td>Number of executors</td>
    <td>Specify the number of Yarn executor on you want to run job</td>
    <td>2</td>
    <td>No</td>
  </tr>
  <tr>
    <td>Driver memory</td>
    <td>Specify the allocated driver memory for running jobs</td>
    <td>512m</td>
    <td>No</td>
  </tr>
  <tr>
    <td>Executor memory</td>
    <td>Specify the allocated executor memory for running jobs</td>
    <td>512m</td>
    <td>No</td>
  </tr>
  <tr>
    <td>Driver classpath</td>
    <td>Specify the driver classpath of jobs</td>
    <td>None</td>
    <td>No</td>
  </tr>
  <tr>
    <td>Executor classpath</td>
    <td>Specify the executor classpath</td>
    <td>None</td>
    <td>No</td>
  </tr>
  <tr>
    <td>Jars</td>
    <td>Put the jar path with comma seperated</td>
    <td>None</td>
    <td>No</td>
  </tr>
  <tr>
    <td>Additional arguments</td>
    <td>Specify the Yarn arguments
Ex: 
--conf spark.development=true
      < I dont know about this example... >
    </td>
    <td>None</td>
    <td>No</td>
  </tr>
</table>



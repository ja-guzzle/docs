Datastore in Guzzle represents either on premise or cloud data service which can either act as source or sink (target) for Guzzle **activities**. A datastore can either be cloud files services like S3, Azure Blob, DBFS or databases like  Azure SQL, MySQL or apps which are accessible via Rest API.

Additionally Guzzle supports datastore to run external activities like procedure, Azure Data Facotry pipeline or notebook. 

## Supported Datastores 

Guzzle broadly supports three types of datastores: File, Database and API. Below matrix provides supported Datastores - across different activity types and Computes

			

<table>
  <tr>
    <td></td>
    <td></td>
    <td>Computes</td>
    <td></td>
    <td></td>
    <td>Activities</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Category</td>
    <td>Connector</td>
    <td>Databricks</td>
    <td>Apache Spark (on Yarn)</td>
    <td>Apache Spark (on Local mode)</td>
    <td>Ingestion
(source/target)</td>
    <td>Processing
(source/target)</td>
    <td>Reconciliation
(source/target)</td>
    <td>Constraint Checks</td>
    <td>Housekeeping</td>
  </tr>
  <tr>
    <td>File</td>
    <td>DBFS</td>
    <td>✓</td>
    <td></td>
    <td></td>
    <td>✓/✓</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>ADLS Gen2</td>
    <td>✓</td>
    <td></td>
    <td></td>
    <td>✓/✓</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>Server file system</td>
    <td>✓</td>
    <td>✓</td>
    <td>✓</td>
    <td>✓/✓</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>HDFS</td>
    <td>✓</td>
    <td>✓</td>
    <td>✓</td>
    <td>✓/✓</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>AWS S3</td>
    <td>✓</td>
    <td>✓</td>
    <td>✓</td>
    <td>✓/✓</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Database</td>
    <td>Delta</td>
    <td>✓</td>
    <td></td>
    <td></td>
    <td>✓/✓</td>
    <td>✓/✓</td>
    <td>✓/✓</td>
    <td>✓</td>
    <td>✓</td>
  </tr>
  <tr>
    <td></td>
    <td>Hive</td>
    <td>✓</td>
    <td>✓</td>
    <td>✓</td>
    <td>✓/✓</td>
    <td>✓/✓</td>
    <td>✓/✓</td>
    <td>✓</td>
    <td>✓</td>
  </tr>
  <tr>
    <td></td>
    <td>Azure SQL</td>
    <td>✓</td>
    <td>✓</td>
    <td>✓</td>
    <td>✓/✓</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>Azure Synapse</td>
    <td>✓</td>
    <td></td>
    <td></td>
    <td>✓/✓</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>JDBC</td>
    <td>✓</td>
    <td>✓</td>
    <td>✓</td>
    <td>✓/✓</td>
    <td>✓/✓</td>
    <td>✓/✓</td>
    <td>✓</td>
    <td></td>
  </tr>
  <tr>
    <td>API</td>
    <td>Rest API</td>
    <td>✓</td>
    <td>✓</td>
    <td>✓</td>
    <td>✓/−</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>

:::note
1. The JDBC connector is a generic connector that lets you connect to any database that supports the JDBC interface. 
2. Rest API connector allows you to connect any API or cloud application which provides REST API interface 
:::

## Support for External activity

Guzzle supports running external procedures, scripts, notebook and pipelines on remote systems and data services. This is supported via External activity in Guzzle. The supported connectors for calling external activities are below:

<table>
  <tr>
    <td>Connector</td>
    <td>Remark</td>
  </tr>
  <tr>
    <td>Databricks</td>
    <td>To call Notebook, Databricks jar  or Python task</td>
  </tr>
  <tr>
    <td>Azure Data Factory (ADF)</td>
    <td>To call ADF pipeline</td>
  </tr>
  <tr>
    <td>JDBC</td>
    <td>To trigger stored procedure or run a JDBC datastore</td>
  </tr>
</table>


## Supported File Format

* Delimited format

* Fixed length files

* Text files (using Grok or Regex)

* JSON format

* XML format

* Excel format

* ORC format

* Avro format

* Parquet format


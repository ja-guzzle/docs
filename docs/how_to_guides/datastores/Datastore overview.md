---
id: datastore_overview
title: Datastore Overview
---

Datastore in Guzzle represents either on premise or cloud data service which can either act as source or sink (target) for Guzzle **activities**. A datastore can either be cloud files services like S3, Azure Blob, DBFS or databases like Azure SQL, MySQL or apps which are accessible via Rest API.

Additionally Guzzle supports datastore to run external activities like procedure, Azure Data Factory pipeline or notebook. 

## Supported Datastores 

Guzzle broadly supports three types of datastores: File, Database and API. Below matrix provides supported Datastores — across different Computes
### Datastore and Compute Matrix

|          |                    | **Local** |   **Azure**          |                             |              |  **AWS**           |                   ||
|----------|--------------------|-----------|----------------------|-----------------------------|--------------|--------------------|-------------------|--- |
| Category | Connector          | **Local Spark** | **Azure Databricks** | **Apache Synapse Analytics**| **AWS Glue** | **AWS Databricks** | **AWS EMR (EC2)** | **AWS EMR Serverles** ||
| File     | DBFS               | x          | ✓                    | x                           | x            | ✓                  | x                 | x                 |
|          | ADLS Gen2          | x          | ✓                    | ✓                           | x            | ✓                  | x                 | x                 |    
|          | Server file system | ✓          | ✓                    | x                           | x            | ✓                  | x                 | x                 |
|          | HDFS               | x          | x                    | x                           | x            | x                  | x                 | x                 |
|          | AWS S3             | x          | ✓                    | ✓                           | ✓            | ✓                  | ✓                 | ✓                 |
| Database | Delta              | x          | ✓                    | ✓                           | x            | ✓                  | x                 |x                 |
|          | Hive               | ✓          | ✓                    | ✓                           | ✓            | ✓                  | ✓                 | ✓                 |
|          | Azure SQL          | x          | ✓                    | ✓                           | x            | ✓                  | x                 |x                |
|          | Azure Synapse Analytics | x          | ✓               | x                           | x            | ✓                  | x                 |x                 |
|          | Azure Synapse Analytics Native | x          | x        | ✓                           | x            | x                  | x                 | x                 |       
|          | JDBC               | ✓          | ✓                    | ✓                           | ✓            | ✓                  | ✓                 | ✓                 |
|          | Snowflake          | x          | ✓                    | x                           | x            | ✓                  | x                 |x                 |
| API      | Rest API           | ✓          | ✓                    | ✓                           | ✓            | ✓                  | ✓                 | ✓                 |
|Others    | Azure Data Factory | N/A        | N/A                  | N/A                          | N/A          | N/A                | N/A               |N/A                 |
|          | Databricks         | x          | ✓                    | x                           | x            | ✓                  | x                 | x                 |      


Guzzle broadly supports three types of datastores: File, Database and API. Below matrix provides supported Datastores — across different activities

### Datastore and Activity Matrix
| Category | Connector          | **Ingestion**              | **Processing**                | **Reconciliation**                 | **Constraint Checks** | **Housekeeping** |**External**|
|----------|--------------------|----------------------------|-------------------------------|------------------------------------|-----------------------|------------------| -----------|
| File     | DBFS               | ✓                          | x                             | x                                  | x                     | x                | x          |
|          | ADLS Gen2          | ✓                          | x                             | x                                  | x                     | x                | x          |
|          | Server file system | ✓                          | x                             | x                                  | x                     | x                | x          |
|          | HDFS               | ✓                          | x                             | x                                  | x                     | x                | x          |
|          | AWS S3             | ✓                          | x                             | x                                  | x                     | x                | x          |
| Database | Delta              | ✓                          | ✓                             | ✓                                  | ✓                     | ✓                | x          |
|          | Hive               | ✓                          | ✓                             | ✓                                  | ✓                     | ✓                | x          |
|          | Azure SQL          | ✓                          | ✓                             | ✓                                  | ✓                     | x                | x          |
|          | Azure Synapse Analytics     | ✓                 | ✓                             | ✓                                  | ✓                     | x                | x          |
|          | Azure Synapse Analytics Native | ✓              | ✓                             | ✓                                  | ✓                     | x                | x          |      
|          | JDBC               | ✓                          | ✓                             | ✓                                  | ✓                     | x                | ✓          |
|          | Snowflake          | ✓                          | ✓                             | ✓                                  | ✓                     | x                | x          |
| API      | Rest API           | ✓                          | x                             | x                                  | x                     | x                | x          |
|Others    | Azure Data Factory | x                          | x                             | x                                  | x                     | x                | ✓          |
|          | Databricks         | x                          | x                             | x                                  | x                     | x                | ✓          |

*In development phase

:::note
1. The JDBC connector is a generic connector that lets you connect to any database that supports the JDBC interface. 
2. Rest API connector allows you to connect any API or cloud application which provides REST API interface 
:::

## Support for External activity

Guzzle supports running external procedures, scripts, notebook and pipelines on remote systems and data services. This is supported via External activity in Guzzle. The supported connectors for calling external activities are below:

|Connector|Remark|
|--- |--- |
|Databricks|To call Notebook, Databricks jar or Python task|
|Azure Data Factory (ADF)|To call ADF pipeline|
|JDBC|To trigger stored procedure or run a JDBC datastore|


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


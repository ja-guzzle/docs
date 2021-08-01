One of the important components of a Guzzle instance is the repository database. Guzzle repository contains two types of table as described below: 

1. Audit Metadata: This table comprosises of Run-time audits of job runs, output of reconciliation, data quality checks and housekeeping, watermark values of incremental data load and `batch` audit tables. Full list of Audit metadata tables can be found here. 

2. App Metadata: Metadata tables that are used by  Guzzle App.  This are tables storing user authentication and authorization information, personalizatoin settings and other metadata required by Guzzle app

The marketplace deployment of Guzzle comes bundled with a local MySQL database which is meant for trial and development purposes. When using Azure Databricks compute for running activities, it is mandatory to configure an external database to host Guzzle repository. The supported databases are: 

1. Azure SQL **(recommended)**

2. SQL Server 2016 and above

3. Azure MySQL

4. MySQL Database version 5.7 and above

You will need to ensure the database used for Guzzle repository is accessible by both Guzzle VM and Azure Databricks workspace.

Below diagram explains typical setup of configuring Azure SQL DB to host Guzzle repository.  

![repository database](/img/docs/how-to-guides/administrator/environment-config/repository_db01.png)

## Steps to Update Repository database

1. Go to the Admin menu from the top navigation bar.

2. Navigate to Environment-> Repository Database. Select **Credentials** tab

3. Enter following configuration details:

| Property        | Description                                                                                                                                                                                                                                                                                                                                                                                                  | Default Value | Required |
|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|----------|
| Credential type | Specify credential type to be used to connect to repository database: - Native : This is native Azure SQL, SQL Server or MySQL account - Azure service principal: To use Azure service principal and secret to connect to Azure SQL database. This is not supported for other database                                                                                                                       | Native        | Yes      |
| Driver class    | Specify the driver class name which database is going to be used. This can be left empty if standard Driver provided by Guzzle are to be used                                                                                                                                                                                                                                                                | None          | Yes      |
| JDBC Url        | Specify JDBC URL of the Repository database: For Azure SQL/ SQL server, you can use below format to specify JDBC URL: `jdbc:sqlserver://<server name>.database.windows.net;database=<database name>;encrypt=true;trustServerCertificate=true;create=false;loginTimeout=30;socketKeepAlive=true` For Azure MySQL / MySQL Server following format can be used: jdbc:mysql://<server name>:3306/<database name> | None          | Yes      |
| Username        | Username to connect to repository database Applicable for Native credential type                                                                                                                                                                                                                                                                                                                             | None          | Yes      |
| Password        | Password to connect to repository database Applicable for Native credential type                                                                                                                                                                                                                                                                                                                             | None          | Yes      |
| Client Id       | Client id of Azure Service Principal Applicable for Azure service principal credential type                                                                                                                                                                                                                                                                                                                  | None          | Yes      |
| Client Secret   | Client Secret of Azure Service Principal Applicable for Azure service principal credential type                                                                                                                                                                                                                                                                                                              | None          | Yes      |
| Tenant Id       | Tenant id of Azure Service Principal Applicable for Azure service principal credential type                                                                                                                                                                                                                                                                                                                  | None          | Yes      |

4. Click on **Validate** to validate the connection details of the repository database. Its strongly recommended to validate the connection details before updating it, as incorrect repository database details may impact your Guzzle instance to work properly

5. Once succesfully validated, you click on **Update** to update the repository database details. Guzzle initializes  above database with required tables for Guzzle app if these are not present

## Steps to Initialize Guzzle Repository database

As mentioned above, Guzzle repository contains two types of tables. Of this **Guzzle App Metadata** tables are automatically created when Guzzle app is brought up. However **Audit Metadata** has to be explicitly intialized in reposiotry database when using new database. This section describes intializing the **Audit Metadata** tables.

**Audit Metadata** tables contains additional columns which are referred as context columns or context parametres. This context columns are included in all the Guzzle audit tables. Also this context columns will show as additional parameter when running jobs namely: `activity`, `pipeline` or a `batch`. This can be optionally included when running the batches for better tracking of the audit information for the job runs.
 
![image](https://user-images.githubusercontent.com/35588903/127739053-2a803845-9d13-4c0d-a90b-9f8674bc03ba.png)

**At a minimum, one context columns needs to be defined**. By default Guzzle instance comes with one context column named  **batch**. For most of the Guzzle deployment this default context column can be left as is.  This column shall also captures the `batch` name when an `activity` or `pipeline` is run as part of a `batch`. 

More details of Guzzle Batches can be found [here](http://xxx).  Additoinally a Guzzle `batch` is composed of stages. The master list of stages that are avaliable for defining `batch` can be customized for each your Guzzle instance. The default list of stages that are provided in Guzzle instance are below. 
 
- SRI : Represent source image layer
- FND : Foundation layer tables or data
- UCL : Use-case data layer
- OUT : This are outputfiles

Above stages represents a typical stages through which data from particular source system flows through. However you can amend this list and add additional stages. A batch can be compose of one or more stages from this list.

 ## Steps to Update Repository database

1. Go to the Admin menu from the top navigation bar.
2. Navigate to Environment-> Repository Database. Select **Initialize Database** tab
3. Update the Context Columns and Stages as per your requirement
4. The UI shall show either "Intialize" button if repo data does no thave any **Audit Metadata** tables. However if there are existing **Audit Metadata** tables, the UI shall show "Reintialize".  It is **must** to Reintialize the **Audit Metadata** tables if there are amendmnets done to Context coulmns or Stages. 
 
:::note
Do take note On **Reintialize** of **Audit Metadata**  will drop and re-crate these tables. Any existing audit information shall get deleted in this database. Its recommended not to take neccessary backup before doing the "Reintialize"
 
Also its mandatory to have minimum one Context Columns and one Stage defined
 
When doing "Reintialize", do ensure ther are running jobs and batches.
:::

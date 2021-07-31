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

4. Click on **Validate** to validate the connection details of the repository database. Its strongly recommended to validate the connection details before updating it, as incorrect repository database details may impact your Guzzle environment to work properly

5. Once succesfully validated, you click on **Update** to update the repository database details. Guzzle initializes  above database with required tables for Guzzle app if these are not present

## Steps to Initialize Guzzle Repository database

As mentioned above, Guzzle repository contains two types of tables. Of this **Guzzle App Metadata** tables are automatically created when Guzzle app is brought up. However **Audit Metadata** has to be explicitly intialized in reposiotry database when using new database. This section describes intializing the **Audit Metadata** tables.

**Audit Metadata** tables contains additional columns which are referred as context columns or context parametres. This context columns are included in all the Guzzle audit tables. Also this context columns will show as additional parameter when running jobs namely: `activity`, `pipeline` or a `batch`. This can be optionally included when running the batches for better tracking of the audit information for the job runs.
 
![image](https://user-images.githubusercontent.com/35588903/127739053-2a803845-9d13-4c0d-a90b-9f8674bc03ba.png)

**At a minimum, one context columns needs to be defined**. By default Guzzle env comes with one context column named  **batch**. For most of the guzzle deployment this default context column can be left as is.  This column shall also capture the `batch` name when an `activity` or `pipeline` is run as part of a `batch`. 


 
  `batch`. More details of Guzzle Batches can be found [here](http://xxx).  Additoinally a Guzzle `batch` is composed of stages. The master list of stages that are avaliable for defining `batch` can be customized for each deployment. the two set of context columns are following:
This two set of columns are :



useful for analysis. Guzzle batch functionality has a concept of stages which again are stored as explicit columns in the batch related audit tables. 

1. Metadata tables for for Guzzle app

"Initialize Database" functionality is meant Initialize the run 

6. To initialize the repository 

Step 6 : To validate your connection click on Validate.

Step 7 : For Apply changes click on Update

Guzzle also give functionality to specify your context column and Stages

Step 8 : Go to Initialize database tab 

Step 9: Context Column : Specify a list of context columns you want. Guzzle come up with below default context columns 

1. batch


Step 10 : Stage : Specify a list of Stages you want. Guzzle Come up with below default Stages 

1. STG

2. FND

3. SNP

4. CALC

5. REP

6. OUT

Step 11 :  Save the changes and Initialize the database via click on Initialize.

The Guzzle UI will auto-detect if the repository tables are present, and it will show

:::note
On Initialize guzzle will create a database table related to guzzle jobs if the database is already initialized then guzzle will show an option as reinitialize to reinitialize the database.
:::

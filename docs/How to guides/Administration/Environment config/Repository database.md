Updating Guzzle Repository Database

One of the important components of a Guzzle instance is the repository database. Guzzle repository contains two types of table as described below: 

1. Run-time audits of job runs, output of reconciliation, data quality checks and housekeeping, watermark values of incremental data load. 

2. Metadata tables for for Guzzle app

The marketplace deployment of Guzzle comes bundled with a local MySQL database instance which is meant for trial and development purposes. When using Azure Databricks compute for running activities, it is mandatory to configure an external database to host Guzzle repository. The supported databases are: 

1. Azure SQL **(recommended)**

2. SQL Server 2016 and above

3. Azure MySQL

4. MySQL Database version 8 and above

You will need to ensure the database used for Guzzle repository is accessible by both Guzzle VM and Azure Databricks workspace.

Below diagram explains typical setup of configuring Azure SQL DB to host Guzzle repository.  

![repository database](/img/docs/how-to-guides/administrator/environment-config/repository_db01.png)

## Steps to Update Repository database

1. Go to the Admin menu from the top navigation bar.

2. Navigate to Environment-> Repository Database

3. Enter following configuration details:

<table>
  <tr>
    <td>Property </td>
    <td>Description</td>
    <td>Default Value</td>
    <td>Required</td>
  </tr>
  <tr>
    <td>Credential type</td>
    <td>Specify credential type to be used to connect to repository database:
- Native : This is native Azure SQL, SQL Server or MySQL account
- Azure service principal: To use Azure service principal and secret to connect to Azure SQL database. This is not supported for other database</td>
    <td>Native</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Driver class</td>
    <td>Specify the driver class name which database is going to be used.
This can be left empty if standard Driver provided by Guzzle are to be used
</td>
    <td>None</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>JDBC Url</td>
    <td>Specify JDBC URL of the Repository database:
For Azure SQL/ SQL server, you can use below format to specify JDBC URL:
`jdbc:sqlserver://&lt;server name&gt;.database.windows.net;database=&lt;database name&gt;;encrypt=true;trustServerCertificate=true;create=false;loginTimeout=30;socketKeepAlive=true`
For Azure MySQL / MySQL Server following format can be used: jdbc:mysql://&lt;server name&gt;:3306/&lt;database name&gt;</td>
    <td>None</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Username</td>
    <td>Username to connect to repository database 
Applicable for Native credential type</td>
    <td>None</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Password</td>
    <td>Password to connect to repository database Applicable for Native credential type</td>
    <td>None</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Client Id</td>
    <td>Client id of Azure Service Principal
Applicable for Azure service principal credential type</td>
    <td>None</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Client Secret</td>
    <td>Client Secret of Azure Service Principal
Applicable for Azure service principal credential type</td>
    <td>None</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Tenant Id</td>
    <td>Tenant id of Azure Service Principal
Applicable for Azure service principal credential type</td>
    <td>None</td>
    <td>Yes</td>
  </tr>
</table>


4. Click on **Validate **to validate the connection details of the repository database. Its strongly recommended to validate the connection details else it may impact the Guzzle instance

5. Click on **Update **to update the repository database details. Guzzle initialize the above database with required tables for Guzzle app if they are ont present

## Steps to Initialize Guzzle Repository database

As mentioned above, Guzzle repository contains two types of tables:

The first set of tables are meant for: Run-time audits of job runs, output of reconciliation, data quality checks and housekeeping, watermark values of incremental data load. 

This table contains additional context columns that are useful for analysis. Guzzle batch functionality has a concept of stages which again are stored as explicit columns in the batch related audit tables. 

1. Metadata tables for for Guzzle app

"Initialize Database" functionality is meant Initialize the run 

6. To initialize the repository 

Step 6 : To validate your connection click on Validate.

Step 7 : For Apply changes click on Update

Guzzle also give functionality to specify your context column and Stages

Step 8 : Go to Initialize database tab 

Step 9: Context Column : Specify a list of context columns you want. Guzzle come up with below default context columns 

1. system

2. location

Step 10 : Stage : Specify a list of Stages you want. Guzzle Come up with below default Stages 

1. STG

2. FND

3. SNP

4. CALC

5. REP

6. OUT

Step 11 :  Save the changes and Initialize the database via click on Initialize.

The Guzzle UI will auto-detect if the repository tables are present, and it will show

:::info Note
On Initialize guzzle will create a database table related to guzzle jobs if the database is already initialized then guzzle will show an option as reinitialize to reinitialize the database.
:::
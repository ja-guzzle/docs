# Guzzle Changelog

### Guzzle v2.4.17 (April 21, 2023)
#### Features
- Added support of manual dag pipeline. User can define pipeline execution flow based on activity execution status. It supports three types of transition: `success_warning`, `failed_aborted`, and `completed`. In case of activity success, It will execute all activities which depend on "success_warning" and "completed" status, for failed activity, it will execute "failed_aborted" and "completed" activities. 

### Guzzle v2.4.16 (April 07, 2023)
#### Features
- Introduced new credential type option in Azure Blob/ADLS Gen2 datastore. It will use service principle credentials to read and write data in Azure Synapse Spark compute.

### Guzzle v2.4.15 (March 24, 2023)
#### Bugs
- UI Fix: While deleting truncate partition column entry in processing activity UI it was deleting multiple entries with same name. Fixed issue, now it delete only selected partition entry
- Azure synapse analytics connector failed to perform operation with the latest version of Azure Databricks DBR due to database property we were passing to connector. in the latest connector it required database name as part of jdbc url. Fixed issue, We are not passing database property as separate attribute User has to pass it as part of database URL
- Copy data tool was not able to load the database metadata. Fixed issue, now it is loading database metadata.
- Fixed backslash issue in synapse parameter value. Synapse required double backslash compare to other compute.

### Guzzle v2.4.14 (March 10, 2023)
#### Features
- Re-engineered constraint check module, constraint check module was loading source data in memory and performing the sql validation on in-memory data. Now it generates sql query and execute it on source. This operation will not load source data in memory.  
- Added support in External activity to call stored procedure for Azure SQL, Synapse, Snowflake and Redshift

#### Bugs
- Fixed memory issue in databricks cluster api calls, if user call databricks api multiple time with invalid credentials it was creating heap memory issue. Fixed issue and handle invalid api request more gracefully. 
- Review and handled api response and sdk client connection more gracefully

### Guzzle v2.4.13 (February 20, 2023)
#### Features
- Added Rest datastore support in External activity. User can perform Rest API call using External activity. It will mark activity successful for 2xx http response code and for other http status codes it will mark it as failed.

#### Bugs
- Cluster remain in execution state when Guzzle activity is not able to send logs to Guzzle API. Fixed issue, It will terminate the cluster when execution complete even if logs is not sent to Guzzle API.
- While sending non UTF-8 character in logs request Guzzle was sending 400 response code. Fixed issue. it will process the logs request with non UTF-8 characters.
- While resuming batch, ADF and Synapse pipeline External activities was not skipped if it was executed successfully. Fixed issue, It will skip successfully ran External activities.

### Guzzle v2.4.12 (February 13, 2023)
#### Features
- Added new timeout settings for NOT_STARTED activities. If Activity not start execution after 15 min of submission It will be marked as ABORTED. User can change the timeout setting by using `Manage -> Environment Config -> Timeout and Sync -> Job Heartbeat Configuration -> Not started job timeout` option.

#### Bugs
- When failed to submit activity to cluster it was remained in NOT_STARTED state. Fixed the issue, now it will be marked as FAILED.

### Guzzle v2.4.11 (January 27, 2023)
#### Features
- Added Hudi support in ingestion activity for AWS Glue compute
- Added dynamic activity support in pipeline. Using this feature, user can specify datastore, SQL and activity configuration in pipeline. When pipeline will execute, It will prepare an activity list based on the SQL results. For each row, it will add one or more activities. To pass activity name and parameter from query result, User can add placeholder with column name like #{column_name}. for now this feature is only supported for JDBC, Azure Sql, Azure Synapse Analytics, Redshift and Snowflake datastores.

### Guzzle v2.4.10 (January 13, 2023)
#### Features
- Added auto dependency support for Azure Sql, Azure Synapse Analytics, Azure Synapse Analytics Native, Redshift and Snowflake datastore in pipeline

### Guzzle v2.4.9 (December 30, 2022)
#### Features
- Added operation and affected row count details in message for Processing template based activities
- Added Redshift datastore support for AWS and Azure deployment
- Added Snowflake datastore support for AWS computes. User can place snowflake related jar files in `/guzzle/libs/<custom_directory_name>` directory and configure relative path in `additional jars` configuration in computes. Azure Databricks and AWS Databricks has snowflake jars pre-configured so no need to add extra jars.

#### Bugs
- Fixed table name issue, Guzzle was concatenating database and table name which was generating issue for some JDBC sources. now Guzzle will not concat database and table name.
- Fixed delta partition column issue for Glue Compute, earlier it was not able to fetch partition columns details.

### Guzzle v2.4.8 (December 19, 2022)
#### Features
- Added spark override options support for Azure Synapse, AWS Glue, Emr Serverless and Emr Ec2 computes. User can override spark options at runtime, pipeline level or activity level in pipeline.
- Added support of Azure Synapse pipeline, User can run Azure Synapse pipeline using `External Activity` and `Azure Data Factory/Azure Synapse Workspace` datastore.

#### Bugs
- Fixed API service log download issue in view service log page

### Guzzle v2.4.7 (December 02, 2022)
#### Features
- Added Delta support for AWS EMR on EC2 compute
- Added Delta support for AWS EMR on Serverless compute
- Handled nullable constraint check behaviour for Azure Synapse Native datastore. Earlier activity was failing if source(dataframe) and target column has different null constraint. it is fixed by updating source(dataframe) column nullable property as per target table column value.  
- Added support of override AWS Databricks compute options at Runtime level, Pipeline level and Activity level.

### Guzzle v2.4.6 (November 18, 2022)
#### Features
- Added Delta technology support for AWS Glue compute
- JDBC, Snowflake, Azure SQL and Azure synapse analytics Processing activity will run as part of API. It will not require spark compute for execution.
    - If the User is planning to use other JDBC drivers which are not bundled in Guzzle, he/she has to put it inside `${GUZZLE_PRODUCT_HOME}/api/libs` directory along with `${GUZZLE_PRODUCT_HOME}/libs`
    - Databricks multitask pipeline is submitted to databricks compute so the above-mentioned activities are not supported in Databricks multitask pipeline
- Added support of Delta path in all modules so user can pass delta path in table name field like `delta./user/hive/warehouse/tablename` or external storage like `delta.abfss://container@azurestorageacc.dfs.core.windows.net/databricks/tablename`

### Guzzle v2.4.5 (November 10, 2022)
#### Features
- Added support of azure synapse, azure synapse native and azure sql datastore in processing module
- Show only supported options in UI for Azure and AWS deployment scheme

### Guzzle v2.4.4 (November 04, 2022)
#### Features
- Added support for AWS EMR Serverless compute in AWS deployment scheme

### Guzzle v2.4.3 (October 21, 2022)
#### Features
- Added support for AWS EMR compute in AWS deployment scheme
- Added support of snowflake, azure synapse, azure synapse native and azure SQL datastore in recon module

#### Bugs
- Utilize schema name when deriving the columns from the table in a processing module
- Fixed pipeline was kept in running state issue, In case of auto-dependency if parent activity failed it should skip dependent child activities and terminate the pipeline, but it was kept pipeline in running state in some cases when different types of activities are configured, and they have dependencies on each other. Fixed issue, it will skip dependent child activities and terminate the pipeline in case of parent activity failed.
- Pipeline was triggering activity re-run when it is manually terminated by the User from UI. Fixed issue, It will terminate the activity and not trigger a re-run if it is manually terminated by the User.

### Guzzle v2.4.2 (October 07, 2022)
#### Features
- Added support of AWS databricks in AWS deployment scheme
- Added support of azure sql, azure synapse, azure synapse native and snowflake datastore in constraint check module
- Added column mapping support for azure synapse native datastore and added option to download column mapping as csv and excel file

#### Bugs
- Fixed column mapping issue, It was failing when data_type config is missing in ingestion activity
- Fixed data sampling issue, It was failing when sql is configured in source and user perform data sampling for processing activity 
- UI Fixes: Sync passphrase button was not taking updated value from UI, fixed issue not it update api settings and perform sync with updated value

### Guzzle v2.4.1 (September 23, 2022)
#### Features
- Added snowflake datastore support for ingestion module
- Added snowflake datastore support for processing module

#### Bugs
- Fixed auto create secondary table issue in housekeeping job, It was failing due to non-supported sql syntax
- UI Fixes: Fixed false alert issue when navigating out of api screen without making change, Fixed compute UI doesn't show cluster list option when keyvault or secret is incorrect, Updated azure synapse native connector datastore and ingestion section labels to make it consistent with other labels 

### Guzzle v2.4.0 (September 09, 2022)
#### Features
- Replaced two operations `Truncate Table` and `Insert Into` with single atomic operation `Insert Overwrite` in processing module. [Click here](/docs/releases/2_4_0/processing-behaviour-changes) to know behaviour changes. 
- Added [effective column mapping feature](/docs/how_to_guides/ingest_data/effective_column_mapping) in target and reject section of ingestion module
- Added AWS glue compute support to run guzzle activities 
- Added job_instance_id column in constraint_check_summary and constraint_check_detail table. Using this column user can distinct data by job and also trace back to the job run.
- Added housekeeping support for job audit, job logs and service logs. Job audit contains job_info and job_info_param table. It will also create index on parent_job_instance_id column in job_info table to improve housekeeping performance.
- Updated data type of job_config, source_columns and sample_data columns in data_sampling_job table to increase the column storage capacity.

### Guzzle v2.3.1 (August 15, 2022)
#### Features
- Added azure synapse native connector support for azure synapse analytics compute
- Added aws secret manager support
- Added aws s3 shared storage support

#### Bugs
- Fixed truncate delta table and show partitions operation issue in azure synapse analytics compute

### Guzzle v2.3.0 (M) (August 01, 2022)
#### Features
- Deployment structure changes. [Click Here](/docs/releases/2_3_0/deployment-structure-changes) to view details
- Added sync passphrase in Azure KeyVault feature
- Restrict permissions for internally generated Guzzle ApiKeys
- Added auto-create table support for hive and delta technology in processing job

### Guzzle v2.2.2 (July 04, 2022)
#### Bugs
- UI Fixes: Fixed monitor graph issue and pipeline dependency graph issue 
- Fixed databricks rest api execution failed issue, added retry support if exception occurred while executing databricks rest api

### Guzzle v2.2.1 (June 21, 2022)
#### Features
- Added new button in Author UI to validate all activities, pipelines, batches and schedules configurations
- Added Azure Monitor support to send Guzzle job logs and audit data. For more details checkout this [documentation](/docs/how_to_guides/administration/environment_config/azure_monitor)
- Added drag and drop support to add new activity and reorder activity in pipeline configuration

#### Bugs
- UI Fixes: Fixed parameter validation message issue in parameter component

### Guzzle v2.2.0 (June 6, 2022)
#### Features
- In ingestion, optimize and revise the data type validation section. For validate datatype rules checkout this sheet [ingestion_validate_datatype_rules.xlsx](/documents/releases/2_2_0/ingestion_validate_datatype_rules.xlsx).
- In ingestion, removed strict schema check feature.
- In ingestion, revise the existing three schema derivation strategies and add two new schema derivation strategies. For more details checkout this [documentation](/docs/how_to_guides/ingest_data/derivation_strategies).
- In ingestion, set the default value for `validate data type` checkbox to false in YAML and when the YAML property for this checkbox is missing, then guzzle will interpret it as unchecked.

### Guzzle v2.1.9 (May 20, 2022)
#### Features
- Added feature in monitor screen to mark OPEN or FAILED batch as ABORTED
- Guzzle was marking Batch, Stage and Pipeline status as ABORTED for crashed orchestration jobs, now It is marked as FAILED so that it can rerun again

#### Bugs
- UI Fixes: Fixed business date selection issue in monitor screen filter, Fixed duration field issue in monitor screen also added support of years, months and days units and showing only relevant duration units instead of all units 
- Batch init catchup parameter was marking successfully ran job as ABORTED for given business date, fixed issue, now it marks only OPEN and FAILED batches as ABORTED
- When doing sampling for ingestion job, It was showing epoch seconds for timestamp column value, fixed issue, now it shows formatted value for timestamp column

### Guzzle v2.1.8 (May 9, 2022)
#### Features
- Added Databricks multitask job support as a Guzzle multitask pipeline
- Guzzle was support retry for FAILED and WARNING activity in the pipeline. Now retry is supported for FAILED activity only
- For each retry Guzzle was creating a new job info record, Now it uses the same job info record to perform retry
- In Guzzle pipeline, when an auto dependency is enabled and Activity failed it will stop only the dependent ones, other activities will continue their execution. earlier it stopped the execution of pending activities as soon as the first activity failed
- Encrypted JWT token secret value while showing it in UI and storing it in a config file
- Added infer schema support for XML and JSON file source in ingestion activity

#### Bugs
- UI Fixes: Active tab goes hidden issue when there are too many open tabs in UI, Extra space issue in author config tab bar UI, Updated layout for Rest datastore, Removed duplicate tooltip from select components
- Added fix for spring vulnerability cve-2010-1622

### Guzzle v2.1.7 (April 1, 2022)
#### Features
- Use alternate approach to retrieve columns for hive and delta tables. Existing approach was not working for delta tables on Azure Synapse Spark
- Azure Synapse Spark compute editor UI

### Guzzle v2.1.6 (March 14, 2022)
#### Features
- Added retry support if key vault secret api failed to fetch secret value. It will perform max 5 retry with interval of 5 seconds
- Override spark settings in pipeline was loading spark configuration data using system default compute which is configured inside guzzle.yml. now it is loading spark configuration data using user's default compute, which is configured using My Profile -> Default Compute option.

### Guzzle v2.1.5 (February 28, 2022)
#### Features
- Support Synapse spark pool as a compute in backend
- Running batch, pipeline and external activity as Guzzle API thread instead of separate JVM process
- When we pass parameters to external process it gets evaluated and can generate some side-effect. Fixed this issue, Now we are passing parameter in single quotes and escaping $ with a backslash to prevent evaluation

#### Bugs
- The batch stage was not marked as ABORTED when batch execution terminated abnormally, fixed this issue, It will be marked as ABORTED when batch execution terminate abnormally

### Guzzle v2.1.4 (February 14, 2022)
#### Features
- Updated source column tooltip from sampleData to source and color from gray to blue, wherever it is showing column name suggestion in editor
- Added environment filter in monitor screen, it's similar to Author ui
- Added feature to clone physical connection while cloning datastore

#### Bugs
- Fixed direct use of parameters in SQL query
- Copy data tool was showing list of tables from default database always, now it is showing from configured database

### Guzzle v2.1.3 (January 28, 2022)
#### Features
- Replaced single-line textbox with multiline textbox in config editor and added resize and selected option support in dropdown
- ingestion - add schema drift feature for delta target and reject table
- Guzzle CLI initial version 0.0.1 released. [Click Here](/docs/how_to_guides/features/guzzle_cli) to view details
- Added Pipeline and Activity level overriden spark properties in log screen

#### Bugs
- Activity was remained in NOT_STARTED phase if it failed to submit, now it is marked as FAILED
- Batch parameter was not showing the latest/updated parameter value, fixed it, now it is showing the latest parameter value

### Guzzle v2.1.2 (January 17, 2022)
#### Features
- ingestion - retain inferred data types from ingestion source and use them to prepare effective schema
- show only supported technologies in create datastore dialog opened from activity editor
- provide auto-fill of the columns for PK, Grouping columns and other fields which are to take column name or sql expression

#### Bugs
- fixed drag and drop name visibility issue in author page
- fixed multiple job dependency issue in gantt chart
- removed undefined values and fixed num_workers issue in compute detail section in my proflie

### Guzzle v2.1.1 (December 31, 2021)
#### Features
- Reduced yaml retry to 5 times and added file absolute path and last modified time in log

#### Bugs
- Removed support for generating aggregation element in recon activity editor

### Guzzle v2.1.0 (December 21, 2021)
#### Features
- Processing module enhancements. [Click Here](/docs/releases/2_1_0/processing-changes) to view details

### Guzzle v2.0.9 (December 20, 2021)
#### Bugs
- Correctly compute datastore connection name when creating new datastore using '+ New' button
- Fixed issue in using data sampling feature with processing module when hive database is different than default
- Fixed preview data ui issues which was introduced after support of authorization roles in 2.0.8
- Fixed empty yaml file issue by adding retry support
- Fixed error while changing Xml root tag and Xml row tag parameters in ingestion activity editor
- Fixed activity validation git branch issue

#### Notes
- If malformed yaml configs are present in guzzle deployment, then whenever guzzle reads that config it will fail and it will keep doing retries until exhausted (currently its 20 second). Due to this, affected operations will respond slowly. Example of affected operatoins are:  login/reloaded page/git pull/  new branch when git is enabled, refresh of config in API which happens in background)

### Guzzle v2.0.8 (December 7, 2021)
#### Features
- Introduced new user roles and added authorization support

### Guzzle v2.0.7 (November 22, 2021)
#### Bugs
- Fixed issue in handling response of databricks run job api
- Fixed issue in databricks notebook task status
- Fixed issue in exceeding open file limits

### Guzzle v2.0.6 (November 8, 2021)
#### Features
- Allowed user password change in edit user screen
- Added warning message for target preserve hierarchy option when partition columns are configured
- Updated Labels and Captions in UI
- Added validations in run job, pipeline and batch api

#### Bugs
- Fixed issues in create datastore from activity editor - connection is created with name undefined.yml, if there is existing connection with same name as datastore name then new connection name is not generated properly
- Fixed issue of timeout and sync page when guzzle API is down

### Guzzle v2.0.5 (October 25, 2021)
#### Features
- Redesigned run activity, pipeline, stage and batch init dialogs
- Improve performance when using git on blob storage with large number of configs
- Drag and Drop enhancement in Author UI

#### Bugs
- UI Fixes : Table Dependency component sharing same table name while switching tabs, SingleParametersInput component sharing same state, show error messages on login screen for invalid JWT key vault config, fix issues for jwt settings page
- Fixed repository database page issues - disable cancel button when any action is in progress, make driver class input optional
- Fixed ADLS Gen2 datastore editor while switching between service principal and access key credential type
- Corrected login error messages
- Fixed issue in job_params api call

### Guzzle v2.0.4 (October 11, 2021)
#### Features
- Added support of service principal in guzzle storage
- Enhanced exception handling in ingestion module
- Enhancement in auto refresh in monitor screen 

#### Bugs
- UI Fixes : expand/collapse component sharing state across tabs, improve author create new page, renamed azure blob and adls gen 2 technology name
- Disabled batch additional column for single context column
- Fixed source generated column issue in jdbc, azure sql and azure synapse source

### Guzzle v2.0.3 (September 27, 2021)
#### Features
- Support for spark engine for delta technology in processing activity
- Keep generated access token expiry time as 90 days by default
- Added support of user parameter, batch_id, stage_id and environment parameters in pipeline resume (this params will be supported when resuming)
- Breaking change: Removal of prev_business_ts. An alternate will be pass this explicitly when running stages or in pipeline this can be deduced by passing business date - 1 minute to child jobs

#### Bugs
- UI Fixes: Labeel renames and look and feel update, fixed shared storage mount/unmount behavior for azure key vault config, Compute UI (retain key)
- Ingestion : fixed column mapping issue in fix length file format
- Ingestion : fixed column mapping issue when source file is empty
- Ingestion : fixed sourcecolumn issue for hive and delta source
- Ingestion : fixed firstname and lastname issue in for null values user module

### Guzzle v2.0.2 (September 13, 2021)
#### Features
- Added batch_id support in resume pipeline
- Added validations for enabling sso flow
- Added caching support for azure key vault secrets
- UI Changes: Compute UI, icons, SSO Configuration, Default compoute in user profile drawer, Share storage config
- Removed support for data enginnering light support from databricks compute

#### Bugs
- Fixed schema dervitation issue in copy data tool
- Azure key vault component fixes

### Guzzle v2.0.1 (August 30, 2021) 
#### Features
- Removal of atlas-plugin.jar removed
- Sample config cleanup (removed control file)
- Added default user compute support in profile page
- Added git commit message support in guzzle copy data tool
- Added azure key vault support in git integration to specify the client secret
- Added test connection support in azure sql and azure synapse datastore
- UI Changes: links documentation, tutorial and resourc, change log link, renaming of form lables in Ingestion, clean up of HIve/Delta datastore config, updating icons, copy tool shortcut in Landing page, Changelog link in upgrade page, remove Quantity Resource support in in Admin UI
- Showing configuration dependencies while performing rename operation
- Updated source generated column behavior, cascaded  it to target automatically (now requires to speicfy them in schema section to be added to target)

#### Bugs
- Handle default value correctly for trim whitespace field of ingestion UI
- Corrected log file name for data sampling job logs and excluding sample data in logs
- Fixed blob storage access issue for ingestion source
- Fixed processed file hierarchy in ingestion job
- Changed last viewed timezone to local timezone
- UI Fixes: Navigation issue in edit user screen, refresh page issue when clicking change log link

### Guzzle v2.0.0 (August 13, 2021) 
- Consolidated release of Guzzle V2

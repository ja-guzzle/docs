# Guzzle Changelog

### Guzzle v2.4.0 (September 09, 2022)
#### Features
- Replaced two operations `Truncate Table` and `Insert Into` with single atomic operation `Insert Overwrite` in processing module. [Click here](/docs/releases/2_4_0/processing-behaviour-changes) to know behaviour changes. 
- Added column mapping feature in target and reject section of ingestion module
- Added AWS glue compute support to run guzzle activities 
- Added job instance id support in constraint check module
- Added housekeeping support of job audit, job logs and service logs

#### Bugs
- Fixed data sampling column length issue

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

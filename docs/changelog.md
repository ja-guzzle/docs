# Guzzle Changelog

### Guzzle v2.1.4 (February 14, 2022)
#### Features
- Updated source column title from sampleData to source and color from gray to blue
- Added environment filter in monitor screen
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

# Guzzle Changelog

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
- Updated run job, pipeline and batch api

#### Bugs
- Fixed issues in create datastore from activity editor - connection is created with name undefined.yml, if there is existing connection with same name new connection name is not generated properly
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
- Removed prev_business_ts parameter support

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

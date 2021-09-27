# Guzzle Changelog

### Guzzle v2.0.3 (September 27, 2021)
#### Features
- updated theme of start/stop button and detail section title for Default Compute tab
- add option for spark engine for delta technology in processing activity
- keep generated access token expiry time as 90 days by default
- added support of user parameter, batch_id, stage_id and environment parameters in pipeline resume
- removed prev_business_ts parameter support

#### Bugs
- fixed shared storage mount/unmount behavior for azure key vault config
- retain api token key vault values when switching cluster type
- fixed column mapping issue in fix length file format
- fixed column mapping issue when source file is empty
- fixed source generated column issue for hive and delta source
- fixed firstname and lastname issue in user module

### Guzzle v2.0.2 (September 13, 2021)
#### Features
- show manual client secret value on sso page
- added batch_id support in resume pipeline
- add validations for enable sso flow
- added caching support for azure key vault secrets
- renamed Retry Option label to Configure Retry When Job Submit Fails in compute UI
- removed learn more link from login screen
- removed data enginnering light support from databricks compute
- renamed compute editor title
- updated move to folder and latest job run icon
- marked tenent id as mandatory field in single sign-on screen
- removed compute detail section from default compute tab in user profile drawer

#### Bugs
- fixed schema issue in copy data tool
- azure key vault component fixes
- shared storage page - cancel button functionality fixes
- updated tooltip description for key vault field and fixed tooltip position 
- fixed copy paste issue in shared storage configuration
- fixed selection issue of Azure Service Principal credential type in repository database

### Guzzle v2.0.1 (August 30, 2021) 
#### Features
- atlas-plugin.jar removed
- sample config cleanup (removed control file)
- added default user compute support
- show only admin role in UI
- added git commit message support in guzzle copy data tool
- added azure key vault support in git integration
- added test connection support in azure sql and azure synapse datastore
- added documentation, tutorial and resource link in home page and removed sample icon
- added change log link in upgrade screen 
- renamed partition column in ingestion watermark section
- removed driver class, username and password fields from hive and delta datastore
- renamed Admin section with Manage
- renamed save button to update in admin setting page
- showing configuration dependencies while performing rename operation
- removed upload configuration type from search screen
- updated source generated column behavior, not passing it to target automatically
- added copy data tool link on create new configuration page
- showing changelog link in upgrade screen when guzzle is up-to-date
- updated icons of open folder, closed folder, create sub-folder 
- removed Quantity Resource screen from schedule and Admin UI

#### Bugs
- handle default value correctly for trim whitespace field of ingestion UI
- corrected log file name for data sampling job logs
- remove showing data in data sampling logs
- fixed blob storage access from ingestion source
- fixed processed file hierarchy in ingestion job
- changed last viewed timezone to local timezone
- fixed navigation issue in edit user screen
- fixed pipeline id issue in ingestion reject section
- fixed refresh page issue on click of change log link

### Guzzle v2.0.0 (August 13, 2021) 
- Consolidated release of Guzzle V2

# Guzzle Changelog

### Guzzle v2.0.1 (August 30, 2020) 
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

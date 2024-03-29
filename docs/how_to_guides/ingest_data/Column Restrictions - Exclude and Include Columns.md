---
id: column_restrictions
title: Column Restrictions-Exclude and Include Columns
---

When we select any of the five databases as our Datastore, Guzzle provides us with the feature to Configure Column Restrictions for both Including and Excluding Columns. This article discusses the Column Restrictions feature in Guzzle.

## Use of Column Restrictions in Guzzle

* In order to use Column Restrictions in Guzzle all we need to do is mention the Column Names and choose between Exclude and Include Column options.

## Why we want to use this feature?

- Sometimes Users want to ignore some columns in source data so by selecting "Exclude Column" we can achieve this task. It will exclude mentioned columns.
- And if we want to include some specific columns in source data, so we can achieve this by "Include Columns"

1. **Include Columns**:This is chosen when we would only like the mentioned columns to be present in our Source Table. The rest of the columns will not be visible in the Table. This can be seen in the images below:

**Table before Include Column:**


<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/ingest_data/Recording-6.gif" target="_self" >
    <img width="1000" src="/img/docs/how-to-guides/ingest_data/Recording-6.gif" />
</a>


**Table after Include Column:**

<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/ingest_data/Recording-7.gif" target="_self" >
    <img width="1000" src="/img/docs/how-to-guides/ingest_data/Recording-7.gif" />
</a>

In this case only the first_name column is visible in the Table.

2. **Exclude Columns: **This is chosen when we want all the columns except those which are mentioned to be present in our Source Table. All the remaining columns will be visible in the Sample Table. This can be seen below:

**Table before Exclude Column:**

<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/ingest_data/Recording-6(1).gif" target="_self" >
    <img width="1000" src="/img/docs/how-to-guides/ingest_data/Recording-6(1).gif" />
</a>

**Table after Exclude Column:**

<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/ingest_data/Recording-8.gif" target="_self" >
    <img width="1000" src="/img/docs/how-to-guides/ingest_data/Recording-8.gif" />
</a>

In this case all columns except first_name and age are visible in the Table.

## Case Sensitivity and Special Characters in Column Restriction

* Guzzle ignores the case sensitivity in the Column Restriction section. Irrespective of the case of the columns Guzzle will handle the exclusion and inclusion. For Example: If we have first_name as one of our columns in the Table and enter FIRST_NAME in Exclude/Include Column Section Guzzle will still perform the Column Restriction on the first_name column.

* Similar to Case Sensitivity Guzzle also handles the Special Characters in the Column Restriction Section. Irrespective of the presence of Special Characters in our Column Names Guzzle will successfully handle the exclusion and inclusion. 

Presence of 'Special Character' is must if there is in our column name and if sequence of special characters is not maintained then guzzle will ignore that column name.

If sequence of special characters is maintained then guzzle will successfully handle the exclusion and inclusion.

* If the user enters a column name that does not exist in the table, Guzzle will not throw an error but would simply ignore the Columns.

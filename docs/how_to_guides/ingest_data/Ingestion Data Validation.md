---
id: ingestion_data_validation
title: Ingestion Data Validation
---

## Overview
- Data Validation featured used to filter or capture noisy data.
- Ingestion support below data validation
  - Data type validation
  - Uniqueness
  - Nullable
  - SQL validation (custom validation)
- In some cases we don't want to filter noisy data instead just wants to capture noisy data, for instance, a single invalid record can flow into both target and reject section, this we can archive using discard settings.
<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/ingest_data/overview_data_validation.png" target="_self" >
  <img src="/img/docs/how-to-guides/ingest_data/overview_data_validation.png" />
</a>

:::note
For data type validation [click here](ingestion_datatype_validation)
:::

### Uniqueness
- By enabling this checkbox, duplicate record(s) will be marked as an invalid record.
- For instance, a record containing duplicate city_id and country_id will be marked as an invalid record.
<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/ingest_data/uniqueness.png" target="_self" >
  <img src="/img/docs/how-to-guides/ingest_data/uniqueness.png" />
</a>
- In the case of source as a file, uniqueness only applies at the file level, meaning that duplicate records across multiple files will not mark as invalid.
  :::note
  This is different from SQL `distinct`, if guzzle found two duplicate records guzzle will mark both records as invalid.
  :::

### Nullable
- By disabling this checkbox, a record(s) containing a null value will be marked as an invalid record.

### SQL validation
- By specifying Spark SQL expression condition, if the expression returns `false`` then a record will be marked as an invalid record.
- For instance, the interest rate can't be greater than 10%
  <a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/ingest_data/sql_validation.png" target="_self" >
  <img src="/img/docs/how-to-guides/ingest_data/sql_validation.png" />
  </a>

### Discard setting
- A record can be marked as invalid by one or more validation rules.
- After a record mark as invalid, there are two possibilities:
  - Only flow into the Reject section
  - Or flow into both Reject and Target section
- Since a record can have multiple validation rules thus it has its discard setting for each of them.
- For instance, here even if `id` gets duplicate will flow into the Target section and also flow into the Reject section with a validation error, but only `id <> -1` will flow into the Target section and an invalid record will be transferred to the Reject section (if specified).
  <a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/ingest_data/discard.png" target="_self" >
  <img src="/img/docs/how-to-guides/ingest_data/discard.png" />
  </a>
- Discard settings for all types of validation rules going to by default true, to change that behavior use the Global Discard checkbox in Advance Settings.
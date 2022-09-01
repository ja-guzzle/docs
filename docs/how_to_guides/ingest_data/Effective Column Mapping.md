---
id: effective_column_mapping
title: Effective Column Mapping
---

:::note
currently this feature is only available for Ingestion activity only
:::

## Overview
- Visualize which column will be mapped to Target or Reject
- Before source columns write into Target or Reject, a column will go through a bunch of operations, which leads to the column being altered
  - it may rename using a feature like clean column
  - it may derive from another column using a feature like override column mapping
  - it may filter columns using a feature like column restriction
  - it may override using a feature like Transform SQL
  - it may not map to Target or Reject due to different `Inherit columns and datatype` strategy
  - it may change the data type using a feature like schema drift
- we can also find out the definition of the auto-create table

<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/ingest_data/column_mapping.png" target="_self" >
  <img src="/img/docs/how-to-guides/ingest_data/column_mapping.png" />
</a>

## Layout
- **Raw Source:** a source before any transformation apply by guzzle
- **Source:** a source after all transformations apply by guzzle
<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/ingest_data/effective_column_mapping.png" target="_self" >
  <img src="/img/docs/how-to-guides/ingest_data/effective_column_mapping.png" />
</a>

- empty cell represent `NULL` or break in the flow, for instance, `col2` has been excluded via column restriction feature and thus target `col2` going to be mapped with `NULL`, but look at last raw `col2` is part of Raw Source but not part of the Source
- `*` denote alternation, in case of column name meaning a new column will be added to the target, in case of data type meaning column datatype will be altered
- columns that are not mapped to Target or Reject will be appeared at last just like `col2`

# Processing behaviour changes (Guzzle 2.4.0)

- Before Guzzle v2.4.0, Processing module was using two steps process to insert data in target table
  - It truncates target table or target partition based on truncate partition section configuration using TRUNCATE TABLE query
  - Insert source processed data in target table using INSERT INTO query
- From Guzzle v2.4.0, Processing module use single atomic operation INSERT OVERWRITE to truncate and insert data in target table
- Due to this change, below are some behaviour changes you will find in Guzzle v2.4.0

| Feature description                                                                     | Before v2.4.0                                                        | From v2.4.0                                                                                                    |
|-----------------------------------------------------------------------------------------|----------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------|
| Partition columns in source when truncate partition is configured                       | Allowed partition columns in source data                             | Not allowed partition columns in source data                                                                   |
| Configure subset of partition columns in truncate partition section for hive technology | Allowed subset of partition columns in truncate partition section    | Not allowed subset of partition columns in truncate partition section                                          |
| Behaviour is changed when no truncate partition is configured for Hive technology       | It truncate full target table and insert source data in target table | It overwrite only partition data which comes from source other partition data remains as it is in target table |
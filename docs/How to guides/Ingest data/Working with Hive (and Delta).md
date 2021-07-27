Have separate article for hive an delta

1. In schema section we have Partitoin indicator. Tihs indicator is use dwhen guzzle auto creates table for Hive and Delta to decide the partition column

    1. The order of parititon column will be as per how i appears in schema sectoin

![image alt text](/img/docs/how-to-guides/ingest_data/hive_delta.png)

2. There is Overwrite option in Delta and hive

    2. This will do overwrite of data for subset of partition that are present in the source

    3. The partition columns are detected based on the source

3. You can specify schema name for along with table name 

4. If not specified it is take from datastore

Azure SQL - talk to Dashrat on this

JDBC is special and uses Spark JDBC connector.


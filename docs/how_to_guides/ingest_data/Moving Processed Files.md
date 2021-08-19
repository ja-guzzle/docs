---
id: moving_processed_files
title: Moving Processed FIles
---

Ingestion activity in Guzzle allows to 

In this article we discuss how Guzzle handles processed files. Guzzle’s Moving Process File feature allows the user to specify the directory and Guzzle will move the files to that destination.  

## How does it Work

On adding a processed file path in the Configure processed path section Guzzle moves the Data into that directory.  Here let us use archive/ as our processed file path. 

* On creating a processed file path Guzzle creates 3 subfolders: processed, reject and partial.

1. **Processed:** The Processed subfolder is occupied when the entire file is accepted or processed successfully. This means that the file contains no rejects and the entire set of Data satisfies our conditions.

2. **Reject:** The Reject subfolder is occupied when the number of rejects in the file exceeds the failure threshold specified in the Reject Section. The failure threshold is 100% by default. Thus, whether the file goes into the Reject Subfolder or Partial Subfolder depends on the Failure Threshold specified by the user.

3. **Partial: **The Partial subfolder is occupied when the entire file is not accepted successfully but contains some rejects. Thus, the file contains both the accepted data and the rejects. However, the number of rejects do not exceed the failure threshold mentioned by the user in the Reject Section.

* Once the file has been processed it will vanish from its original location and instead go into the processed file path which is archive/ in this case. In other words the file will now only be visible in the archive path and not in its original location.

Let us consider an example:

We have a csv file called customer.csv which has 100 records.

Sg: 

    Csv :

        Customer.csv - records: 100

On given processed path name we move data in that directory

* Path name: /archive

After processing file on business date 1:

 

 Sg:

	Csv: [empty]

After processing file on business date 2:

Sg: 

	Csv: 

		Archive:

			Customer<job_ID>.csv 

			Customer<job_ID>.csv

:::note 
For our Datastores, Hive, Delta, Azure SQL and Azure Synapse Analytics supports all servers while JDBC supports only MySQL server.
:::
      


---
id: configure_control_file
title: Configure Control File
---

Control files are used to cross-check whether a file is valid or not. Validity of files are checked on the basis of Count of Records. Guzzle provides Configure Control File feature for all local file formats including Delimited, JSON, XML, Excel and Fixed Length Files.

## Use of Control File in Guzzle

* Configure Control File feature compares the number of records in the original file and the control file extension. The file is valid only if the two are equal, otherwise it is invalid. 

* In Guzzle, Use of control file is verified the metadata records with data The Control File has the same name as the original data file with only a change in the name of the extension. For Example: If we have a data file with the name customer.csv and enter the extension ".ctl" then a Control File name should be the customer .ctl.

Let us consider a Delimited file with the name customer.csv with the given data as shown below:

**customer.csv:**

1-’Johan’

2-’Ken’

3-’Lynda’

4-’Mike’

5-’Roan’

customer.ctl is our control file in order to validate our Delimited File and will perform a count of the number of records. There can be 2 situations here:

1. **Correct no. of records:** 

 count, 5

In this case the file will be validated as the Control File counts the same no. of records that are there in the CSV file.

2.  **Incorrect no. of records:**

 count, 6 

In this case the file will not be validated as the Control file counts 6 records while the CSV file has only 5 records.

* **Checksum:** Guzzle also supports the Checksum feature. Checksum helps in a row count and enables total file level validation. If enabled it matches the file with Checksum. If the required condition is not met the entire file is rejected.

 <a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/ingest_data/image_0.png" target="_self" >
    <img width="1000" src="/img/docs/how-to-guides/ingest_data/image_0.png" />
</a>

This will validate a control file with the same name as the file pattern mentioned above with the extension .ctl

If control file is on another path 
Override control path — We want to add another path for control file to validate we have to check this box and give path in input text.


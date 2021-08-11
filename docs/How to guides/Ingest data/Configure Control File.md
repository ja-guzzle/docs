Control files are used to cross check whether a file is valid or not. Validity of files are checked on the basis of Count of Records. Guzzle provides the Configure Control File feature for all local file formats including Delimited, JSON, XML, Excel and Fixed Length Files.

## Use of Control File in Guzzle

* The Configure Control File feature compares the number of records in the original file and the control file extension. The file is valid only if the two are equal, otherwise it is invalid. 

* In Guzzle, in order to create the Control File we simply need to add the extension in the Control File Section. The Control File has the same name as the original data file with only a change in the name of the extension. For Example: If we have a data file with the name customer.csv and enter the extension .ctl then a Control File with the name customer.ctl will be created automatically by Guzzle.  < This point is incorrect. *Correct one is "Guzzle not create .ctl file automatically it just validate that records in source data are same with selected file or not." >

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

In this case the file will be validated as the Control File counts the same no. of records that are there in the csv file.

2.  **Incorrect no. of records:**

 count, 6 

In this case the file will not be validated as the Control file counts 6 records while the csv file has only 5 records.

* **Checksum:** Guzzle also supports the Checksum feature. Checksum helps in a row count and enables total file level validation. If enabled it matches the file with Checksum. If the required condition is not met the entire file is rejected.

![image alt text](/img/docs/how-to-guides/ingest_data/image_0.png)

This will create a control file with the same name as the file pattern mentioned above with the extension .ctl.
< This will validate a control file with the same name as the file pattern mentioned above with the extension .ctl >

< If control file is on another path 
Override control path - We want to add another path for control file to validate we have to check this box and give path in input text. >


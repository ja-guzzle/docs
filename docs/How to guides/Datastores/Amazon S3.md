[Amazon Simple Storage Service (Amazon S3)](https://aws.amazon.com/s3/) is an object storage service that offers industry-leading scalability, data availability, security, and performance. Guzzle 

:::info
1. Only Ingestion activity supports File based connectors. 
2. Guzzle only supports [Access Key ](https://docs.aws.amazon.com/AmazonS3/latest/userguide/RESTAuthentication.html#ConstructingTheAuthenticationHeader)based authentication for S3
:::

## Steps to create Datastore  for S3

1. Click on the action button (![image alt text](/img/docs/how-to-guides/datastores/action_button.png) from the **Datastores **section in Left Navigation and select **Amazon S3 **connector. Alternatively user can launch from **Create New Datastore **link in Activity authoring UI or Copy Data tool

2. Enter the Datastore name for the new datastore and click Ok

3. Update the connection name or leave the default. You can refer to [Connection and Environments ](http://http) for more details

4. Enter the additional properties for the storage account as described below:

<table>
  <tr>
    <td>Property </td>
    <td>Description</td>
    <td>Required</td>
  </tr>
  <tr>
    <td>Access Key ID</td>
    <td>AWS access key ID </td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Secret Key</td>
    <td>AWS secret access key</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Region</td>
    <td>Region of the S3 bucket</td>
    <td>No</td>
  </tr>
  <tr>
    <td>Bucket</td>
    <td>S3 Bucket name</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Path</td>
    <td>This is the folder path within the S3 bucket. You can specify  / (root path) to point to entire container</td>
    <td>Yes</td>
  </tr>
</table>


![image alt text](/img/docs/how-to-guides/datastores/amazon_s3_1.gif)

## Known Limitation


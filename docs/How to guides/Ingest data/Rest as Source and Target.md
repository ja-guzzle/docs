A REST API (also known as RESTful API) is an application programming interface (API or web API) that conforms to the constraints of REST architectural style and allows for interaction with RESTful web services.

This article outlines how to use Rest api as source in Ingestion activity. User can fetch data in different formats like json, xml, delimited and fixed.

:::note 
Api is only use to read data (Is only use in source tab)
:::

Below are the different properties to create Api ingest activity :

<table>
  <tr>
    <th>Property</th>
    <th>Description</th>
    <th>Default Value</th>
    <th>Required</th>
  </tr>
  <tr>
    <td>Http method</td>
    <td>Method of http like get or post
        - Get : user can select this for fetching data.
        - Post : user can select this to post data. </td>
    <td>Get</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>URI</td>
    <td>Uri of rest api.</td>
    <td>None</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Basic Authentication</td>
    <td>Provide authentication if their to access api after expanding this property</td>
    <td>None</td>
    <td>No</td>
  </tr>
  <tr>
    <td>Config Request Parameter</td>
    <td>Provide parameter name and its value if api has. User can give after expanding this property</td>
    <td>None</td>
    <td>No</td>
  </tr>
  <tr>
    <td>Config Request Header</td>
    <td>Provide header name and its value if api has. User can give after expanding this property</td>
    <td>None</td>
    <td>No</td>
  </tr>
  <tr>
    <td>Response Format</td>
    <td>Format of api response like json, xml, delimited, fixed</td>
    <td>Json</td>
    <td>No</td>
  </tr>
  <tr>
    <td>Character Set</td>
    <td>It refers to the Set of Characters used to Read/Write test files. Allowed Values include: UTF-8, UTF-16 etc.</td>
    <td>UTF-8</td>
    <td>No</td>
  </tr>
  <tr>
    <td>Override json root path</td>
    <td>It can be used to specify an object or location where we want to take our data from. For eg- If we want to focus on one particular column of our data we can specify the Column name here.</td>
    <td>None </td>
    <td>No</td>
  </tr>
  <tr>
    <td>Clean Column Name</td>
    <td>Column name is formatted.empId is formatted in emp_id.
Example : empId -> emp_id</td>
    <td>False</td>
    <td>No</td>
  </tr>
  <tr>
    <td>Multi-Line</td>
    <td>This is applicable when a single data record spans across multiple lines. This applies to both JSON files which are in array form or separate json documents.</td>
    <td>False</td>
    <td>No</td>
  </tr>
  <tr>
    <td>Timeout</td>
    <td>Timeout in second</td>
    <td>300</td>
    <td>No</td>
  </tr>
  <tr>
    <td>Retry Interval</td>
    <td>Retry interval in seconds. Ex on http response status code:500 do retry interval every given seconds.</td>
    <td>5</td>
    <td>No</td>
  </tr>
  <tr>
    <td>Config Response Storage</td>
    <td>Users can select the response endpoint after expanding this property.</td>
    <td>None</td>
    <td>No</td>
  </tr>
</table>


## The interface for API format is shown in following gif :

![image alt text](/img/docs/how-to-guides/ingest_data/rest_1.gif)


JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax. It is commonly used for transmitting data in web applications. JSON is a language-independent data format.

:::tip Json File tip

JSON file support in Guzzle provides extensive features to specify file format details and many other properties which make it easier to work with our Data. This article outlines how to work with JSON files for source and target in Ingestion activity.  

:::

## JSON File Properties in Guzzle

<table>
  <tr>
    <td>Property </td>
    <td>Description</td>
    <td>Default Value</td>
    <td>Available in Source Section</td>
    <td>Available in Target Section</td>
  </tr>
  <tr>
    <td>Character Set</td>
    <td>It refers to the Set of Characters used to Read/Write test files. Allowed Values include: UTF-8, UTF-16 etc.</td>
    <td>UTF-8</td>
  </tr>
  <tr>
    <td>Override JSON root path</td>
    <td>It can be used to specify an object or location where we want to take our data from. For eg- If we want to focus on one particular column of our data we can specify the Column name here.</td>
    <td>None</td>
    <td> ✔</td>
    <td>X</td>
  </tr>
  <tr>
    <td>Multi-Line</td>
    <td>This is applicable when a single data record spans across multiple lines. This applies to both JSON files which are in array form or separate json documents.</td>
    <td>False</td>
    <td>
✔</td>
    <td>
X</td>
  </tr>
</table>


The Interface for the JSON Format for both Source and Target can be seen in the below:

![image alt text](/img/docs/working_with_json0.png)

![image alt text](/img/docs/working_with_json1.png)

## Multiline: 

Each line must contain a separate, self-contained valid JSON object. 

example:

    {"id": 0001, "name": "john", "address": “broward county” }

    {"id": 0002, "name": "lynda", "address": “velcore line”}

    {"id": 0003, "name": "roan", "address": “tarell street”}

When Multi-line is true Guzzle expects Data in the following way:

*  regular multi-line JSON file or entire file is a singular JSON object / array

*  it should be one singular valid JSON object / array

:::note
every object in that array or object is separated by commas ( because that single JSON object/array should valid)
:::

 for example:

[

     {"id": 0001, "name": "john", "address": “broward county” }

    {"id": 0002, "name": "lynda", "address": “velcore line”}

    {"id": 0003, "name": "roan", "address": “tarell street”}

]

	**Fig 1.1** Entire file is a singular Json Array

{

"Addresse1": {

"address":

				[

					{ "id": "1001", "street": "broward county" },

					{ "id": "1002", "street": "valcore line" }

				]

		},

  	 "Addresses2": {

"address":

				[

					{ "id": "1001", "street": "broward county" },

					{ "id": "1002", "street": "valcore line" }

				]

		},

"Addresses3": {

"address":

				[

					{ "id": "1001", "street": "broward county" },

					{ "id": "1002", "street": "valcore line" }

				]

		}

}

	**Fig 1.2**  File as Singular Json object

# Illustrations

**Json file containing with single object separated **

  {"id": 0001, "name": "john", "address": “broward county” }

  {"id": 0002, "name": "lynda", "address": “velcore line”}

  {"id": 0003, "name": "roan", "address": “tarell street”}

Multiline : false

Sample Output when multiline is false is shown below:

<table>
  <tr>
    <td>id</td>
    <td>name</td>
    <td>address</td>
  </tr>
  <tr>
    <td>001</td>
    <td>john</td>
    <td>Broward county</td>
  </tr>
</table>


Sample Output when multiline is True is shown below:

<table>
  <tr>
    <td>id</td>
    <td>name</td>
    <td>address</td>
  </tr>
  <tr>
    <td>001</td>
    <td>john</td>
    <td>Broward county</td>
  </tr>
  <tr>
    <td>002</td>
    <td>lynda</td>
    <td>Velcro line</td>
  </tr>
  <tr>
    <td>003</td>
    <td>roan</td>
    <td>Tarell street</td>
  </tr>
</table>


## JSON file containing array with multi line

Sample source data (Customer.json) :
 

[

	{

		"id": "0001",

		"name": "john",

	"addresses":

		{

			"address":

				[

					{ "id": "1001", "street": "broward county" },

					{ "id": "1002", "street": "valcore line" }

				]

		}

	},

	{

		"id": "0002",

		"name": "lynda",

		"addresses":

			{

				"address":

					[

						{ "id": "1001", "street": "broward county" },

						{ "id": "1002", "street": "valcore line" }

					]

			}

	},

	{

		"id": "0003",

		"name": "roan",

		"addresses":

			{

				"address":

					[

						{ "id": "1001", "street": "broward county" },

						{ "id": "1002", "street": "valcore line" }

					]

			}

	}

]

When multiline is set to false Guzzle will treat the entire file like a single JSON object.

Job Config (json_with_multiline_false): 


version: 1

job:

  type: ingestion

source:

  endpoint: localfiles

  properties:

    source_file_pattern: json/customer1.json

    format: json

    charset: UTF-8

    partial_load: false

    format_properties:

      clean_column_name: false

      multiline: false

Sample Output when multiline is false is shown below:

<table>
  <tr>
    <td>id</td>
    <td>name</td>
    <td>addresses</td>
  </tr>
  <tr>
    <td>0001</td>
    <td>john</td>
    <td>[[1001, broward county],   [1002, valcore line]]</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>


When multiline is set to true Guzzle will treat the entire file.

When multiline is set to false Guzzle will treat the entire file like a single JSON object.

Job Config (json_with_multiline_true): 


version: 1

job:

  type: ingestion

source:

  endpoint: localfiles

  properties:

    source_file_pattern: json/customer1.json

    format: json

    charset: UTF-8

    partial_load: false

    format_properties:

      clean_column_name: false

      multiline: true

Sample Output when multiline is True is shown below:

<table>
  <tr>
    <td>id</td>
    <td>name</td>
    <td>addresses</td>
  </tr>
  <tr>
    <td>0001</td>
    <td>john</td>
    <td>[[1001, broward county],   [1002, valcore line]]</td>
  </tr>
  <tr>
    <td>0002</td>
    <td>lynda</td>
    <td>[[1001, broward county],   [1002, valcore line]]</td>
  </tr>
  <tr>
    <td>0003</td>
    <td>roan</td>
    <td>[[1001, broward county],   [1002, valcore line]]</td>
  </tr>
</table>


:::note
Every object in the array is separated by a comma
:::

## Column Mapping in JSON Files

We can also add Column Mapping to specify how to map columns in the source file. This is applicable for files which are having headers or without header. Column Mapping in JSON helps in mapping the columns to a new Column Name as shown here:

![image alt text](/img/docs/working_with_json2.png)

## Here we have mapped the columns to a new Column Name. name is mapped to first_name and created_time is mapped to time.

x

 {"id": 0001, "name": "john", "address": “broward county” }

 {"id": 0002, "name": "lynda", "address": “velcore line”}

 {"id": 0003, "name": "roan", "address": “tarell street”}

Config: 

version: 1

job:

  type: ingestion

source:

  endpoint: json_files

  properties:

    source_file_pattern: customer.json

    format: json

    charset: UTF-8

    partial_load: false

    format_properties:

      clean_column_name: false

      multiline: true

  column_mapping:

    name: first_name

    address: address_line1

    id: customer_id

Sample output: 

	

<table>
  <tr>
    <td>customer_id</td>
    <td>first_name</td>
    <td>address_line1</td>
  </tr>
  <tr>
    <td>0001</td>
    <td>john</td>
    <td>broward county</td>
  </tr>
  <tr>
    <td>0002</td>
    <td>lynda</td>
    <td>Valcore line</td>
  </tr>
  <tr>
    <td>0003</td>
    <td>roan</td>
    <td>Tarrel street</td>
  </tr>
</table>


## If file has multiline (Customer.json)

  column_mapping:

    addresses.address: address_line1

Sample Output

<table>
  <tr>
    <td>id</td>
    <td>name</td>
    <td>address_line1</td>
    <td>addresses</td>
  </tr>
  <tr>
    <td>0001</td>
    <td>john</td>
    <td>broward county</td>
    <td>[[1001, broward county],   [1002, valcore line]]</td>
  </tr>
  <tr>
    <td>0002</td>
    <td>lynda</td>
    <td>Valcore line</td>
    <td>[[1001, broward county],   [1002, valcore line]]</td>
  </tr>
  <tr>
    <td>0003</td>
    <td>roan</td>
    <td>Tarrel street</td>
    <td>[[1001, broward county],   [1002, valcore line]]</td>
  </tr>
</table>
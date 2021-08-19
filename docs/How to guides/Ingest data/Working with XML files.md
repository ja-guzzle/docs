Extensible Markup Language (**XML**) is a markup language that defines a set of rules for encoding documents in a format that is both human-readable and machine-readable.

XML file support in Guzzle provides extensive features to specify file format details and many other properties which make it easier to work with our Data. This article outlines how to work with XML files for source and target in Ingestion activity.  

## XML File Properties in Guzzle

|Property|Description|Default Value|Available in Source Section|Available in Target Section|
|--- |--- |--- |--- |--- |
|Character Set|It refers to the Set of Characters used to Read/Write test files. Allowed Values include: UTF-8, UTF-16 etc.|UTF-8|✔|✔|
|XML Row Tag|The row tag of your xml files to treat as a row.<br/>For example, in this xml &lt;books&gt; &lt;books&gt;&lt;/books&gt; ...&lt;/books&gt;, the appropriate value would be book.|Row|✔|✔|
|XML Root Tag|The Root tag of your xml files to treat as a root.<br/>It encloses all the other elements and is therefore the sole parent element to all the other elements.For example, in the XML  &lt;books&gt; &lt;books&gt; &lt;books&gt; ...&lt;/books&gt;, the appropriate value would be books.|Rows|✔|✔|


## The Interface for XML in Guzzle is :

![image alt text](/img/docs/how-to-guides/ingest_data/xml.png)


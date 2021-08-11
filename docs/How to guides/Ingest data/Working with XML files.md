Extensible Markup Language (**XML**) is a markup language that defines a set of rules for encoding documents in a format that is both human-readable and machine-readable.

XML file support in Guzzle provides extensive features to specify file format details and many other properties which make it easier to work with our Data. This article outlines how to work with XML files for source and target in Ingestion activity.  

## XML File Properties in Guzzle

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
    <td> ✔</td>
    <td> ✔</td>
  </tr>
  <tr>
    <td>XML Row Tag</td>
    <td>The row tag of your xml files to treat as a row. 
For example, in this xml &lt;books&gt; &lt;books&gt;&lt;/books&gt; ...&lt;/books&gt;, the appropriate value would be book.
    </td>
    <td> Row</td>
    <td> ✔</td>
    <td> ✔</td>
  </tr>
  <tr>
    <td>XML Root Tag</td>
    <td>The Root tag of your xml files to treat as a root.  It encloses all the other elements and is therefore the sole parent element to all the other elements.
 For example, in the XML  &lt;books&gt; &lt;books&gt; &lt;books&gt; ...&lt;/books&gt;, the appropriate value would be books.
    </td>
    <td> Rows</td>
    <td> ✔</td>
    <td> ✔</td>
  </tr>
</table>


The Interface for XML in Guzzle can be seen below:

![image alt text](/img/docs/how-to-guides/ingest_data/xml.png)


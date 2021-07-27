Pipelines in Guzzle are used to run multiple activities simultaneously. A pipeline is a logical grouping of activities that together perform a task. The pipeline allows you to manage the activities as a set instead of each one individually. For example, a pipeline could contain a set of activities that first ingest data and then perform processing on the ingested data. Pipelines allow  us to manage activities as a set instead of each one individually.

## Use of Pipelines in Guzzle

* We may create a new pipeline in Guzzle by selecting the menu button in the Pipelines section on the left hand side bar of Guzzle. We must specify the name of the pipeline according to the action it performs.

* In the Parallel Run section we need to enter a number which determines the number of activities to run simultaneously in the given Pipeline.

* Auto Dependency defines how subsequent activities depend on previous activities, determining the condition of whether to continue executing the next task. If we want to perform a second activity on the data generated in the output of the first activity we must select the Auto Dependency option.

* The Activity Section can have one or more activities within it. We can mention the different activity names and the parameters associated with each activity. The Parameters are the same as when we fill parameters for individual jobs. They make our pipeline flexible for reuse.

* A Pipeline dependency graph can also be generated in Guzzle. For this, we need to go to the dependency section and choose the generate option. Guzzle will generate a graph showing the relationship between the different activities in our pipeline.

In the image below we run a pipeline with two activities json_multi_line_false and csv_to_json and generate a Pipeline Dependency Graph for the two activities.

![image alt text](/img/docs/how-to-guides/ingest_data/ezgif.com-gif-maker(4).gif)

Guzzle provides below parameter and configs for Pipeline

<table>
  <tr>
    <td>Property </td>
    <td>Description</td>
    <td>Default Value</td>
    <td>Required</td>
  </tr>
  <tr>
    <td>Parallel Run</td>
    <td>Specify number which determines the number of activities to run simultaneously in the given Pipeline.</td>
    <td>1</td>
    <td>No</td>
  </tr>
  <tr>
    <td>Auto Dependency</td>
    <td>Auto Dependency defines how subsequent activities depend on previous activities, determining the condition of whether to continue executing the next task. If we want to perform a second activity on the data generated in the output of the first activity we must select the Auto Dependency option.</td>
    <td>False</td>
    <td>No</td>
  </tr>
</table>



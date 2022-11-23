---
id: aws_databricks
title: AWS Databricks
---

Guzzle supports Computing environments on the Azure Cloud. In Guzzle azure cloud setup, we can use Databricks to execute our workloads. This article helps in using Azure Databricks as a computing environment in Guzzle.

## Use of Azure Databricks as a computing environment

|Property|Description|Default Value|Required|
|--- |--- |--- |--- |
|Cluster Type|There are 2 types of Databricks clusters available in Guzzle:<br/><br/> Data Engineering : Data Engineering cluster is recommended for automated workloads. It is recommended to use it for your BAU data loads.<br/><br/> Data Analytics : Data Analytics cluster is recommended for interactive queries along with concurrent user support. This cluster type is configurable in Guzzle, and it can also execute the workloads, but it is not recommended to use it for your BAU data loads. Data Analytics cluster is costlier than Data Engineering cluster for per DBU usage and meant for interactive queries through Databricks notebook in a shared environment where multiple people have to collaborate as a team.|Data Engineering|True|
|API URL|It is used to specify the URL of the Databricks environment which will be used with Guzzle.|None|True|
|API Token|It is used to specify the API Token for our Databricks Environment. API token is required for Guzzle to authenticate to AWS Databricks. API token needs to be generated from the Databricks workspace. Specify the api token of AWS Databricks Cluster.<br/> For specify the token following options are available:<br/>1. **Manual**: Provide api token directly. <br/>2. **Secret Manager**: Use it through AWS Secret Manager feature. Give value of the secret name where api token is stored in AWS Secret Manager instance.|None| Yes|
|Cluster Id (Applicable for Data Analytics cluster)|It is used to specify the name of the Cluster we have created in the Databricks Environment. A job cluster is created in Databricks with this name.<br/> Guzzle will show available clusters once a valid API key is provided.<br/> UI will show cluster name, but it stores cluster ID in the underlying YML file|None|Yes|
|Configure Retry Options|basically is the retry which we do if Guzzle is not able to successfully submit the job (possibly due to issues like unavailability of cloud resources or error in control plane)|None|No|
|Spark Version (Only in Data Engineering and Data Engineering Light)|Specify the Spark Version we have used in creating our cluster in the Databricks environment.<br/> These drop-downs are populated once valid API keys and URLs are provided.|None|Yes|
|Enable Cluster Pool|Used to specify To attach a cluster to a pool.|False|No|
|Driver Node Type (Only in Data Engineering and Data Engineering Light)|It is used to specify the type of driver we would like to use as our Driver Node.|None|Yes|
|Worker Node Type (Only in Data Engineering and Data Engineering Light)|Specify the workers we would like to use in our Databricks environment|None|Yes|
|Enable AutoScaling|A cluster that automatically scales between the minimum and maximum number of nodes, based on load.|False|No|
|Workers|Specify the number of workers to use in the Databricks environment.|8|Yes|
|On-demand nodes|The on-demand size determines the number of on-demand nodes. The rest of the nodes in the cluster will attempt to be spot nodes. The driver will be on demand.|1|Yes|
|Spot fall back to on-demand|If the EC2 spot price exceeds the bid, use on-demand instances instead of spot instances. This applies during both creation and lifetime of the cluster.|False|No|
|Max spot price|Max price you are willing to pay for Spot instances|100|Yes|
|Instance profile|Instance profiles allow you to access your data from Databricks clusters without the need to manage, deploy, or rotate AWS keys. New instance profiles can be added in the Databrick's Admin Console.|None|Yes|
|Availability zone|Cluster availability zone - the instance type you want may only be available in certain availability zones.|None|Yes|
|Enable local storage auto-scaling|Enabling this feature will create additional EBS volumes in your AWS account. These volumes will not be deleted until the instances they are attached to are deleted. For this reason, we suggest enabling this feature on autoscaling or auto terminating clusters.|False|No|
|EBS volume type| You can specify additional EBS volumes to be added to each node of the cluster. This is useful when running workloads that require a lot of shuffle space. Consider the 'Autoscaling Local Storage' option if you are not sure how to size them.|None|No|
|Volume counts|The number of volumes to provision for each instance. Users can choose up to 10 volumes per instance.|None|No|
|Volume size in GB|The size of each EBS volume (in GB) launched for each instance. For general purpose SSD, this value must be within the range 32 - 4096. For throughput optimized HDD, this value must be within the range 500 - 4096.|None|No|
|Customize Spark Config|Used to specify additional spark config options <br/>Ex: conf : spark.sql.broadcastTimeout <br/>value : 5000|None|
|Customize Environment Variables|Used to specify environment variables to use in spark computes.<br/> Ex: Variable : GuzzleHome.<br/> Value    : /mnt/guzzle/guzzle|None|
|Init Script|Cluster-scoped init scripts are init scripts defined in a cluster configuration.<br/> You can put init scripts in a DBFS or ADLS directory accessible by a cluster. And give the location to that script in guzzle spark computes|None|
|Custom Cluster Tags|You apply tags to your Cluster. Each tag consists of a name and a value pair|None|


## Interface of AWS Databricks compute for cluster type : Data Engineering

<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/compute/aws_databricks_2.png" target="_self" >
    <img width="1000" src="/img/docs/how-to-guides/compute/aws_databricks_2.png" />
</a>

## Interface of AWS Databricks compute for cluster type : Data Analytics.

<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/compute/aws_databricks_1.png" target="_self" >
    <img width="1000" src="/img/docs/how-to-guides/compute/aws_databricks_1.png" />
</a>
---
id: aws_emr-ec2
title: AWS EMR Ec2
---

Guzzle supports Computing environments on the AWS Cloud. In Guzzle aws cloud setup, we can use AWS EMR EC2 to execute our workloads. This article helps in using AWS ECR EC2 as a computing environment in Guzzle.
:::note
AWS EMR EC2 compute can be used when guzzle is running from AWS EC2 instance
:::

## Run jobs in AWS EMR EC2
- To run a job in EMR EC2 compute user has to create AWS IAM role from AWS console.
1. User has to create AWS IAM role for ec2 instance with following access permissions
    - Secret Manager -> to access the secret values
        - GetSecretValue
        - UpdateSecret
        - CreateSecret
    - Glue -> to submit job and access the jobs
        - CreateJob
        - UpdateJob
        - StartJobRun
        - GetJobRun
        - GetJob
        - GetConnections
    - ElasticMapReducer -> all permissions
    - iam:PassRole
2. User has to create AWS IAM role for EMR EC2 with following access permissions
    - s3 -> to access the jar files of guzzle and the job definition
        - all permissions
    - Secrets Manager -> to access the secret values
        - GetSecretValue
    - Glue -> to access of the database and tables
        - all permissions
    - iam:PassRole
    - ElasticMap Reducer
        - all the permissions

## Use of AWS EMR EC2 as a computing environment

|Property|Description|Default Value|Required|
|--- |--- |--- |--- |
| EMR Release | Determines the base configuration of the instances in your cluster, including the Hadoop version | emr-6.7.0 | Yes |
| Concurrency | Provide value to run multiple steps at same time to improve cluster utilization | 5  | No |
| EC2 Subnet Id | Subnet address of EC2 from which your guzzle job will run | None | Yes |
| Cluster nodes | Define cluster nodes for EMR EC2 instance.<br/> There are othe properties under cluster nodes check [this](./aws_emr-ec2/#cluster-nodes-properties). | None | Yes |
| Auto Termination | Provide a time to have the cluster terminate after the cluster becomes idle. Time will be in seconds | None | No |
| EBS Root Volume size | Specify the root device volume size | None | No |
| Logging | Copy the cluster’s log files automatically to provided S3 path. | None | Yes |
| EMR Role | Allows EMR to call other AWS Services such as EC2 on your behalf. | EMR_DefaultRole | Yes |
| EC2 instance profile | Provides access to other AWS services such as S3, DynamoDB from EC2 instances that are launched by EMR | None | Yes |
| Auto scaling role | Allows Auto Scaling to add and terminate EC2 instances when an Auto Scaling rule is triggered.| EMR_AutoScaling_DefaultRole | Yes |
| Ec2 security group | Provide the security groups of master and slave to specify the authentication and encryption options for your cluster. | None | Yes |
| Persistent cluster | Check true if you want to run pipeline jobs in one cluster and false if not | True | No |
|Driver Memory | Specify the allocated driver memory for running jobs | None | No | 
|Driver Cores  | Specify the allocated driver cores for running jobs | None | No |
|Executor Memory | Specify the allocated executor memory for running jobs | None | No |
|Executor Cores  | Specify the allocated executor cores for running jobs | None | No |
|Number of executors | Specify the number of spark executors you want the job to run | None | No |
| Spark config | Specify additional Spark configuration options. Specify the config name and config value | None | No |

- Cluster nodes contains following properties
## Cluster nodes properties

| Property | Description | Default value |
| ---- | ---- | --- |
| Name | Name of the node | None |
| Node type | Select the node type from Master or core | Master |
| Instance type | Select the instance type | None |
| EBS storage | Provide values for volume type, size and volumes per instance | None |
| Instance count | Number of instances | 1 |


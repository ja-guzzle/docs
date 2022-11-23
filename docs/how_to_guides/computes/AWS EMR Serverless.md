---
id: aws_emr-serverless
title: AWS EMR Serverless
---

Guzzle supports Computing environments on the AWS Cloud. In Guzzle aws cloud setup, we can use AWS EMR Serverless to execute our workloads. This article helps in using AWS ECR Serverless as a computing environment in Guzzle.
:::note
AWS EMR serverless compute can be used when guzzle is running from AWS EC2 instance
:::

## Run jobs in AWS EMR Serverless
- To run a job in EMR Serverless compute 
1. User has to create an application from aws serverless studio and in that user have to update network connections properties with correct VPC id, subnets for ec2 and security groups. Additionally user also have to creaate endpoints for s3, secret manager and glue from AWS VPC service.
2. User has to create AWS IAM role for ec2 instance with following access permissions
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
    - EMR-Serverless:
        - StartJobRun,
        - GetJobRun
    - iam:PassRole
3. User has to create AWS IAM role for EMR serverless with following access permissions
    - s3 -> to access the jar files of guzzle and the job definition
        - all permissions
    - Secrets Manager -> to access the secret values
        - GetSecretValue
    - GlueCreateAndReadDataCatalog -> to access of the database and tabless
        - all permissions
    - iam:PassRole
    - emr-serverless
        - CancelJobRun

## Use of AWS EMR EC2 as a computing environment

|Property|Description|Default Value|Required|
|--- |--- |--- |--- |
| Application id | Provide the application id from the  created application on aws serverless | None | Yes |
| Runtime Role | Specify the full arn emr serverless IAM role | None | Yes |
| Logging | Copy the cluster’s log files automatically to provided S3 path. | None | Yes |
|Driver Memory | Specify the allocated driver memory for running jobs | None | No | 
|Driver Cores  | Specify the allocated driver cores for running jobs | None | No |
|Executor Memory | Specify the allocated executor memory for running jobs | None | No |
|Executor Cores  | Specify the allocated executor cores for running jobs | None | No |
|Number of executors | Specify the number of spark executors you want the job to run | None | No |


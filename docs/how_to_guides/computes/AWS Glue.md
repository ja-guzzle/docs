---
id: aws_glue
title: AWS Glue
---

Guzzle supports Computing environments on the AWS Cloud. In Guzzle aws cloud setup, we can use AWS Glue to execute our workloads. This article helps in using AWS GLue as a computing environment in Guzzle.
:::note
AWS Glue compute can be used when guzzle is running from AWS EC2 instance
:::

## Run jobs in AWS Glue
- To run a job in glue compute user has to create AWS IAM role from AWS console.
1. User has to create AWS IAM role for ec2 instance with following access permissions
    - Secret Manager -> to access the secret values
        - GetSecretValue
        - UpdateSecret
        - CreateSecret
    - Glue permission -> to submit job and access the jobs
        - CreateJob
        - UpdateJob
        - StartJobRun
        - GetJobRun
        - GetJob
        - GetConnections
    - iam:PassRole
2. User has to create AWS IAM role for glue with following access permissions
    - s3 -> to access the jar files of guzzle and the job definition
        - all permissions
    - Cloudwatch -> to put the logs in that
        - PutMetricData
    - Secrets Manager -> to access the secret values
        - GetSecretValue
    - Glue -> to access of the database and tables
        - all permissions
    - iam:PassRole
    - logs -> to access the log group and log stream
        - CreateLogGroup
        - CreateLogStream
        - PutLogEvents

## Use of AWS Glue as a computing environment

|Property|Description|Default Value|Required|
|--- |--- |--- |--- |
| Authentication type   | Select the authentication type to be used to connect to the aws glue | Service Role | Yes |
| IAM role              | Role assumed by the job with permission to access your data stores | None | Yes |
| Glue version          | Select the glue run time version | 3.0 | Yes |
| Worker type           | Set the type of predefined worker that is allowed when a job runs | G 1X | Yes |
| Automatically scale   | AWS Glue will optimize costs and resource usage by dynamically scaling the number of workers up and down throughout the job run | False | Yes |
| Requested number of workers | The number of workers you want AWS Glue to allocate to this job | 10 | Yes |
| Generate job insights | AWS Glue will analyze your job runs and provide insights on how to optimize your jobs and the reasons for job failures | True | No |
| Number of retries | Number of retries for jobs | 3 | No |
| Job timeout (minutes) | Set the execution time. The default is 2,880 minutes (48 hours) for a Glue ETL job | 2880 | No |
| Job metrics | Enable the creation of CloudWatch metrics when this job runs | True | No |
| Continuous logging | Enable logs in CloudWatch | True | No |
| Spark UI | Enable using Spark UI for monitoring this job | True | No |
| Spark UI logs path | Spark UI logs path | None | No |
| Temporary path | Working directory. Path must be in the form s3://bucket/prefix/path/. It must end with a slash (/) and not include any files | None | No |
| Delay notification threshold (minutes) | Set a delay threshold in minutes. If the job runs longer than the specified time Glue will send a delay notification via CloudWatch | None | No |

## Interface for AWS glue

<a href="https://guzzle.justanalytics.com/img/docs/how-to-guides/compute/aws-glue.png" target="_self" >
    <img width="1000" src="/img/docs/how-to-guides/compute/aws-glue.png"/>
</a>
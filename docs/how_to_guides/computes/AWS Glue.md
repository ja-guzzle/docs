---
id: aws_glue
title: AWS Glue
---

Guzzle supports compute environments on the AWS Cloud. In Guzzle AWS Cloud setup, we can use AWS Glue to execute our workloads. This article helps in using AWS Glue as a compute environment in Guzzle.
:::note
AWS Glue compute can be used only when Guzzle is deployed on AWS EC2 instance
:::

## IAM Role permissions for AWS Glue Job
IAM Role which we refer in Guzzle AWS Glue compute must have following permissions 

| Action | Resource | Description|
| --- | --- | --- |
| <b>s3:GetObject</b> | arn:aws:s3:::<b>&lt;guzzle-shared-storage-bucket></b>/* | To access jar files related to Guzzle and Guzzle AWS Glue job script |
| <b>secretsmanager:GetSecretValue</b> | arn:aws:secretsmanager:<b>&lt;region></b>:<b>&lt;account></b>&#58;secret:* | To access Guzzle security passphrase and other secrets referred in Guzzle configs |
| <b>glue:BatchStopJobRun</b> | arn:aws:glue:<b>&lt;region></b>:<b>&lt;account></b>:job/* | To cancel AWS Glue job while it is running |

Few other permissions need to be assigned so that AWS Glue job can access glue catalog, data from storage, write logs to AWS CloudWatch etc. For more information please refer to AWS Glue Documentation.
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:*"
            ],
            "Resource": [
                "arn:aws:s3:::<datastore-bucket>",
                "arn:aws:s3:::<datastore-bucket>/*"
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
                "glue:GetConnection",
                "glue:GetDatabase",
                "glue:GetTable",
                "glue:CreateTable",
                "glue:GetUserDefinedFunctions"
            ],
            "Resource": [
                "arn:aws:glue:<region>:<account>:catalog",
                "arn:aws:glue:<region>:<account>:connection/*",
                "arn:aws:glue:<region>:<account>:database/*",
                "arn:aws:glue:<region>:<account>:table/*/*"
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
                "logs:CreateLogGroup",
                "logs:CreateLogStream",
                "logs:PutLogEvents"
            ],
            "Resource": [
                "arn:aws:logs:*:*:/aws-glue/*"
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
                "cloudwatch:PutMetricData"
            ],
            "Resource": [
                "*"
            ]
        }
    ]
}
```


## Guzzle compute configuration properties for AWS Glue

|Property|Description|Default Value|Required|
|--- |--- |--- |--- |
| Authentication type   | Select the authentication type to be used for accessing AWS Glue service for various actions<br/>Options:<ul><li><b>Service Role :</b> Use role assigned to EC2 instance where Guzzle is deployed and role assigned to AWS Glue Job to retrieve credential for accessing AWS Glue Service</li></ul> | Service Role | Yes |
| IAM role              | Role assumed by the AWS Glue Job with permissions to access your data stores and AWS services | None | Yes |
| Glue version          | Select the AWS Glue runtime version<br/>Options:<ul><li>3.0</li></ul> | 3.0 | Yes |
| Worker type           | Set the type of predefined worker that is allowed when a job runs<br/>Options:<ul><li>G 1X</li><li>G 2X</li></ul> | G 1X | Yes |
| Automatically scale   | AWS Glue will optimize costs and resource usage by dynamically scaling the number of workers up and down throughout the job run | False | Yes |
| Requested number of workers / Maximum number of workers | The number of workers you want AWS Glue to allocate to this job | 10 | Yes  |
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
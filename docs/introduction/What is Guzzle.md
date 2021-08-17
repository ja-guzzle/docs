---
sidebar_position: 1
---
Guzzle enables analytics engineers to build data pipelines consisting of extraction, transformation, loading, validation and reconciliation for their data warehouses and data lakes by specifying a set of simple configurations. As a Guzzle user, you remain focused on specifying high level configurations settings and business logic for data pipelines, and let Guzzle handle the low level implementation details for you.

Built on the foundation of Apache Spark, Guzzle leverages the Spark connectors to extract and load data at massive scale on most common datastores (both relational data warehouses or data lakes). All the transformation and validation rules in Guzzle are specified in SQL, lingua franca of the data. 

Guzzle is **only **available on [Azure Marketplace] and gets deployed as virtual machine. It only supports Azure Databricks or bundled local spark in Guzzle VM. Refer to [Deploying Guzzle on Azure] for the details of setting up the Guzzle instance.

## What makes Guzzle powerful?

Guzzle is a data integration workbench that automates the movement and transformation of data. It allows the creation, deployment, and monitoring of data pipelines which consist of ingestion, processing, reconciliation, data quality and house-keeping activities.

1. Native to Apache Spark and big data

2. Simple to deploy and use

3. Encapsulate commonly occurring design patterns in the data pipelines

4. Supports of wide array of source and target technology

5. Detail traceability and provenance of job runs

6. Deeper support for DevOps – out of box integration with Git (and git workflows), test-automation and auto-deployment

## What are the building blocks of Guzzle?

**Activities: **These are individual data integration tasks meant to either 

* ingest data 

* process it (using SQL) 

* perform reconciliation of data between any two tables/SQL across same or different datastores

* do constraint (data quality) checks in your data

* house keep any historical data

**Pipelines: ** You can combine **activities **to form pipelines, to either run them sequentially or in parallel with Guzzle automatically determining the dependencies between them

**Batches: ** Pipelines can optionally be combined as **batches **which provides advanced orchestration capabilities of running them in sequence (or stages), and ability to run catch-ups by sequence of date or time interval

**Datastores: **These represent connections to the databases, cloud storages and REST URI

**Computes: **These are the Apache Spark environment that will run the **activities **and carry out actual data ingestion, processing, reconciliation and other tasks

**Schedules : **A** **schedule enables you to run one or more activities, pipeline or batches either sequentially or concurrently at a specific interval

Collectively all the above buildings blocks are referred to as **Configs**. Also activities, pipelines and batches are specifically referred to as **jobs **as they are executables and can be individually run.

## What is the typical Workflow of using?

1. A analytics engineer logs in to Guzzle UI and defines the datastores, activities and compute 

2. Optionally they can define pipelines or batches to orchestrate multiple activities.

3. Finally they will run this activities interactively from UI, schedule it using Guzzle schedule feature or invoke it from external scheduler using Guzzle REST API

4. He can monitor the job runs from Guzzle Monitor UI

## Architecture Overview of Guzzle

Guzzle architecture consist of following components: 

**Configs: **These are **yml **based configuration files that capture the definition of activities, pipelines, batches, datastores, compute and schedules. 

**Guzzle binaries : **This are core binaries of Guzzle which perform specific task of ingesting data, processing , reconciliation  etc

**Guzzle App: **This consist of Guzzle REST API and Web app which allows users to author Guzzle configs, users to edit and tuor

**Repository database : **This stores run time audits of job runs, output of reconciliation, data quality checks and housekeeping, watermark values of incremental data load and other metadata for Guzzle app

![image alt text](/img/docs/introduction/introduction0.png)
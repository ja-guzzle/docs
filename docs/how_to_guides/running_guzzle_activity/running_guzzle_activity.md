---
id: running_guzzle_activity
title: Running Guzzle Activity
---

### Choose compute
- If you need to run any job in guzzle, first step is to choose compute. Guzzle support many number of compute(Databricks, Glue, synapse) to run the job. For example, if you need to run the job then you need to select respective spark environment(Compute) to run the activity.
- In guzzle, we can set default compute from Guzzle Ui, Click admin top right corner, choose default compute and select your default configured compute.
- Once you selected default compute then guzzle will use this default compute to run all activities. you can overide default compute in Run acitivity popup.

<img width="600" src="/img/docs/how-to-guides/running-guzzle-job/running_job_1.png"/>

### Context Parameter
- In context parameter section, we can override context column parameter like batch, location and business date.
- This option is only visible in guzzle acitivities and pipeline not in batch.

<img width="600" src="/img/docs/how-to-guides/running-guzzle-job/running_job_2.png"/>

### Additional Parameter
- Guzzle allow us to write generic data pipeline, if business logic is same for different pipeline we can use parameter to run same activity with different files. We can set this dynamic parameters in additional paramter section.
- You can pass parameter at activity, pipeline and batch level.

- Additional Parameter in acitivity. 
<img width="600" src="/img/docs/how-to-guides/running-guzzle-job/running_job_3.png"/>

- Additional parameter in pipeline.
<img width="600" src="/img/docs/how-to-guides/running-guzzle-job/running_job_4.png"/>

### Internal parameters

- Guzzle internal parameters are created mainly for changing behavior of Guzzle job. We can modify internal parameters in Runtime dialog box. 
- Using internal parameters we can override the behavior of Activity, Pipeline and Batch. click <a href="//docs/how_to_guides/parameters/parameters#guzzle-internal-parameters">here</a> to check all possible internal parameters that Guzzle supports.


### Retry Properties
- There are instances where activity fails in a pipeline due various reasons like network connectivity or other issue and we want to retry pipeline after it failed.
- This feature is only supported when activity is run as part of pipeline.
- Pipeline is to reattempt the same job before moving to next job (in same execution thread assuming parallel jobs are triggered).
- Retry properties
    - Retry status (Failed): If pipeline in Failed state, guzzle will try the job.
    - Retry interval (seconds)
    - Max retry - Number of time Guzzle will retry pieline.

<img width="600" src="/img/docs/how-to-guides/running-guzzle-job/running_job_11.png"/>

### Timeout Properties
- If your guzzle takes more time then expected then we can force stop guzzle activity using timeout feature.
- Here we have to specify amount of time in second, if guzzle activity is taking longer then given time then guzzle will be timeout and status of guzzle job is failed.
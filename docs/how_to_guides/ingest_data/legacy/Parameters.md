- Guzzle allows user to uses and override guzzle internal parameters as well as spark parameters



## Parameter precedence

:::note
* Suppose We have define spark parameter while running the batch, guzzle will pass spark parameter to all pipelines and acitivits which are associated with batch.
* Support we have define spark configurations in individual activities in pipeline and while running the batch we can also passing the spark conf. Guzzle will take precedence of spark configs which are passed in activities. 
* In REST datastore, guzzle allows to pass request parameter. Guzzle dont allow us to pass same parameter twice.
:::

### Additional parameters Order of Precedence
| Activity |Description|
|--- |--- |
|Pipeline| - Additional Parameter passed in seperate activities in pipeline takes highest precedence. <br /> <img width="600" src="/img/docs/how-to-guides/running-guzzle-job/running_job_5.png"/>  |
|Pipeline Runtime| - If parameters are not passed in activity level in pipeline then guzzle will take precedence of parameter which are passed while running the pipeline. <br /> - This is parameter will be considered in all activities inside pipeline. <br /> <img width="600" src="/img/docs/how-to-guides/running-guzzle-job/running_job_6.png"/>  |
|Environment Variables| - If we did not pass parameter in pipline and pipeline runtime level, Guzzle will take precedence from environment variables. You can define envirnment variables in Admin => My Profile => Environment <br /> <img width="600" src="/img/docs/how-to-guides/running-guzzle-job/running_job_7.png"/>  |


#### <b>Order of Precedence </b> 
| Parameter Type | Activity inside pipeline (Highest Precedence) | Pipeline | Pipeline Runtime | Enviroment Variable |
|--- |--- |--- |--- |--- |
|Additional Parameters (User Params) | - Additional Parameter passed in seperate activities in pipeline takes highest precedence. <br />   | NA | - If parameters are not passed in activity level in pipeline then guzzle will take precedence of parameter which are passed while running the pipeline. <br /> - This is parameter will be considered in all activities inside pipeline. | - If we did not pass parameter in pipline and pipeline runtime level, Guzzle will take precedence from environment variables. <br /> - You can define envirnment variables in Admin => My Profile => Environment |

### Business data precedence

- While running the activity you can change business date via Guzzle UI(Guzzle provides datepicker) and also you can change it by using additional parameter using key-pair. business_date priority in run activity dialog is 
    - 1) Override job parameter(parameter extracted from activity) 
    - 2) business date UI - selection option 
    - 3) Additional Parameters - key value param

<img width="600" src="/img/docs/how-to-guides/spark-parameters/spark-param_4.png"/>

### Contaxt Column precedence
- In run_stage dialog when user pass batch name and additional context column value as key value param -> Guzzle will override it and pass the actual batch and context column provided in UI.
<img width="600" src="/img/docs/how-to-guides/spark-parameters/spark-param_5.png"/>

Click <a href="https://raxglobal.sharepoint.com/:x:/r/sites/JustAnalytics.Guzzle/_layouts/15/Doc.aspx?sourcedoc=%7B09b577ce-84c9-47e2-9df7-555e4dbfe4d4%7D&action=edit&wdPreviousSession=8602342f-dcc4-4c53-996c-82aa36acf57f">here</a> to check more info about the Guzzle parameters. 
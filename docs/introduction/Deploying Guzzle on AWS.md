---
id: deploying_guzzle_on_aws
title: Deploying Guzzle on AWS
---

Guzzle software gets deployed on a EC2 instance using the pre-built image on the AWS cloud. You can deploy Guzzle on an existing Virtual Network or a new Virtual Network.

## Prerequisites

You need an AWS account to proceed. You will be billed only for the EC2 instance. The Guzzle image itself is free. 

## Deployment of Guzzle Virtual Machine

* Open the Guzzle page on AWS marketplace from [here](https://us-east-1.console.aws.amazon.com/marketplace/home?region=ap-south-1#/subscriptions/8c5d28c9-4ee6-40db-bc9e-a48b8fc6a561). Alternatively, you can login to AWS console, go to **AWS Marketplace Subscriptions -> discover products** and search **Guzzle - DataOps Platform**

<a href="http://guzzle.justanalytics.com/assets/files/aws_deploy_1.png" target="_self">
    <img src="/img/docs/introduction/aws_deploy_1.png"/>
</a>

* If you are creating guzzle instance for first time you have to subscribe the **Guzzle - DataOps Platform** product by clicking the **Continue to Subscribe** button on right hand side. Then click on continue to configuration and then below page will open.

<a href="http://guzzle.justanalytics.com/assets/files/aws_deploy_2.png" target="_self">
    <img src="/img/docs/introduction/aws_deploy_2.png"/>
</a>

* Select fulfillment option, software(guzzle) version and region and then click on **continue to launch** button.
* After clicking the continue to launch button below page will open.

<a href="http://guzzle.justanalytics.com/assets/files/aws_deploy_3.png" target="_self">
    <img src="/img/docs/introduction/aws_deploy_3.png"/>
</a>

* Choose action from where you want to launch the product if it is choosen **Launch from website** then follow below steps.
    - Select the EC2 instance type for the guzzle vm.
    - Create or select VPC settings.
    - Then select or create new security group with defined firewall rules.
    - Select or create a new key pair value to authenticate the EC2 instance.
    - Click on launch button to launch the website and the instance is deployed on EC2.

<a href="http://guzzle.justanalytics.com/assets/files/aws_deploy_4.png" target="_self">
    <img src="/img/docs/introduction/aws_deploy_4.png"/>
</a>

* If the action is choosen **Launch from EC2** then follow below steps
    - Click on **Launch** button.
    - After that below page will open and define configurations of EC2 instance like the instance type, VPC settings, subnet settings, to define key pair and define security groups with defined firewall rules.
    - Click on the **Launch instance** button to lauch the vm.

<a href="http://guzzle.justanalytics.com/assets/files/aws_deploy_5.png" target="_self">
    <img src="/img/docs/introduction/aws_deploy_5.png"/>
</a>


# How tos

## How do I use Guzzle?

* Guzzle is available on HTTPS, on the port 443 on the AWS EC2 instance. 

* To access Guzzle - Launch browser with the URL https://public_IPv4_DNS where public_IPv4_DNS is the instance public IP address (available in the details of your EC2 instance in AWS console).

* Guzzle is pre-loaded with a self-signed certificate, so you will get a security warning when you launch it for the first time. Later on you can replace this self-signed certificate with the valid certificate in the VM. 

* The default username and password for the guzzle software is admin/admin.

* Before starting to use Guzzle it is recommended to upgrade Guzzle to latest avaliable version. This can be done by going to top menu Manage->Maintenance->Upgrade.

:::note
For better experience it is recommended to use guzzle in chrome browser.
:::


## How do I log into the shell of virtual machine instance?

Administrative (command-line) access can be obtained by logging-in through SSH using the credentials specified when creating the virtual machine.

**Note:** Guzzle app does not run under this VM administrator account, but under `guzzle` user id. The administrative account is sudoer, so from its shell, you can use `sudo su — guzzle` to get a shell as `guzzle` user.

You cannot directly login as the `guzzle` user. Also `guzzle` user is not sudoer.

## What are the Guzzle directories?

The Guzzle has one key directory that gets deployed on the VM. These are referred in Guzzle app using following environment variables. 

* GUZZLE_PRODUCT_HOME: This is located in the path **/guzzle**

:::note
Environment variables GUZZLE_PRODUCT_HOME are defined in guzzle service startup related configuration. These environment variables are accessible to Guzzle App but by default they are not available when you are on shell as `guzzle` user.
:::

All operations on these directories (like installing JDBC drivers, …) must be performed as `guzzle` user.

## What is installed by default?

Guzzle image is based on Ubuntu Server 22.04 LTS. It contains below third party softwares:

- Guzzle (2.4.5) - A standard installation of Guzzle App running under Linux user account `guzzle`.
- MySQL Server (8.0) - A local MySQL server database, with a connection to it pre-configured in Guzzle App.
- OpenJDK (1.8.0_292)
- Nginx (1.18) - Nginx reverse proxy exposing Guzzle API server and Guzzle static resources on the standard HTTPS port 443 using a self-signed certificate. For better security, you can provide your own certificate in the directory /guzzle/cacerts.
- Apache Spark (3.1.2)

## How do I install JDBC drivers and other third party libraries?

JDBC drivers and external libraries must be installed by copying the relevant files in the "$GUZZLE_PRODUCT_HOME/libs/ext" folder (See Installing database drivers).

You can either download files from the virtual machine instance or upload them using SSH. Copying into the "$GUZZLE_PRODUCT_HOME/libs/ext" folder must be done as guzzle user.


---
id: deploying_guzzle_on_microsoft_azure
title: Deploying Guzzle on Microsoft Azure
---

Guzzle software gets deployed on a virtual machine using the pre-built image on the Microsoft Azure cloud. You can deploy Guzzle on an existing VNet or a new Virtual network.

## Prerequisites

You need an Azure account to proceed. You will be billed only for the virtual machine instance. The Guzzle image itself is free. 

## Deployment of Guzzle Virtual Machine

1. Create Guzzle virtual machine using the Azure Marketplace offer

* You can login to Azure Portal, go to Marketplace and search **Guzzle: Data Engineering Workbench V2**

<img width="548" alt="Screenshot 2021-09-06 at 6 09 15 PM" src="https://user-images.githubusercontent.com/23651302/132218886-9136053a-d366-4078-9cc8-7a1437373de1.png">

* Click on "Create" which will take you to Azure Portal, Create virtual machine blade.

* Enter a name for your Virtual machine and select your username and password or SSH key (do not use "guzzle" as username).

* Enter a new Resource group name or use existing one.

* You can retain default values for remaining VM Settings or override them suitable as per your requirement.

* You can deploy Guzzle VM on existing VNET or a new VNET, restrict network access of Guzzle VM to only allow required inbound and outbound traffic and apply additional best practices securing VM as per your organization policy.

* A D2 image (2 vCPUs, 7 GB RAM) should be enough for the initial deployment.

2. Connect to Guzzle

* Wait a few minutes for the instance to start.

* Launch browser with the URL https://VM_PUBLIC_ADDRESS OR DNS name where INSTANCE_PUBLIC_ADDRESS is the instance public IP address (available in the details of your virtual machine)

2. Before starting to use Guzzle its recommended to upgrade Guzzle to latest avaliable version. This can be done by going to top menu Manage and further Maintenance->Upgrade

:::note
that only Chrome browser is supported.
:::

# How tos

## How do I use Guzzle?

Guzzle is available on HTTPS, on the port 443 on the Azure VM instance. Guzzle is preloaded with a self-signed certificate, so you will get a security warning when you launch it first time. You can replace the VM to use a valid certificate. The default user and password for the guzzle instance is admin/admin

## How do I log into the shell of virtual machine instance?

Administrative (command-line) access can be obtained by logging-in through SSH using the credentials specified when creating the virtual machine.

**Note:** Guzzle app does not run under this VM administrator account, but under `guzzle` user id. The administrative account is sudoer, so from its shell, you can use `sudo su — guzzle` to get a shell as `guzzle` user.

You cannot directly login as the `guzzle` user. Also, 'guzzle' user is not sudoer.

## What are the Guzzle directories?

The Guzzle has two key directories that gets deployed on the VM. These are referred in Guzzle software using the environment variables. 

* GUZZLE_PRODUCT_HOME : This is locatedin  the path **/guzzle **and contains binaries and static files of Guzzle app 

* GUZZLE_HOME: This is located at path **/guzzle/guzzlehome **and contains all Guzzle binaries and configuration files. 

All operations on these directories (like installing JDBC drivers, …) must be performed as Guzzle user.

## What is installed by default?

Guzzle image is based on based Ubuntu Server 20.04 LTS. It contains:

- A standard installation of Guzzle running under Linux user account `guzzle`.

- A local MySQL database, with a connection to it pre-configured in DSS. MySQL is only.

- Blobfuse

- JDK xxx

- A nginx reverse proxy exposing Guzzle API server and Guzzle static resources on the standard HTTPS port 443 using a self-signed certificate. For better security, you can provide your own certificate in directory /guzzle/cacerts.

## How do I install JDBC drivers and other third party libraries?

JDBC and external libraries drivers must be installed by copying the relevant files in the "$GUZZLE_HOME/lib/ext" folder of the DSS data directory (See Installing database drivers).

You can either download files from the instance or upload them using SSH. Copy into the "$GUZZLE_HOME/lib/ext" folder must be done as Guzzle user.


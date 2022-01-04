---
id: guzzle_cli
title: Guzzle CLI
---

- Users can use Guzzle from terminal by Guzzle CLI feature. Users have to download guzzlecli package

## Intstallation

Coming soon

## Groups

- Guzzle CLI has total 12 module like 
    - profile
    - activity
    - pipeline
    - batch
    - schedule
    - compute
    - datastore
    - connection
    - environment
    - access-token
    - user
    - export

- From Guzzle CLI users can perform several operations like create user profile, run activity, run pipeline, init batch, run stage and export metadata

## Profile

- For creating profile user has to give values for following parameter

|parameter | description|
|--------- | ---------- |
|name      | profile name, if profile is already exist it will update its credentials | 
|host      | guzzle instance url. ex, https://&lt;guzzle-instance-url&gt;, user can specify its value by setting up the environment variable GUZZLE_CLI_HOST |
|token     | guzzle access token, user can generate token using My Profile -> Access Token -> Generate Token option in Guzzle UI. user can configure its value by setting up the environment variable GUZZLE_CLI_TOKEN |
|default   | use this profile as default profile or not |

- User can also see all availables profile and also can delete profile.
- Profile is used to create new profile and update existing profile access credentials. which are stored in ~/.guzzlecliconf file on Unix, Linux, or macOS. user can change the path of this file by setting the environment variable GUZZLE_CLI_CONFIG_FILE. Encrypted Credentials required passphrase value. which are stored in ~/.guzzleclipassphrase file. User can change the path of file by setting environment varialbe GUZZLE_CLI_PASSPHRASE_FILE. file will be auto created by guzzle if it is not available.

## Activity

In this module user can run job individually.
- There are some features for activity module like they can create activity, run activity, edit, delete, rerun, check run status, and view run history

## Pipeline

In this module user can run multiple job simultaneously.
- There are some features for pipeline module like user can create pipeline, run pipeline, edit pipeline, delete pipeline, rerun pipeline, check run status, and view run history.

## Batch

In this module user can run multiple job groups.
- There are some features for batch module like user can create batch, initialize it, run it, check status of run, view run history.

## Schedule

In this module user can schedule job when to run it.
- There are some features for schedule module like user can create schedule, edit it, check status of run, view run history.

## Compute 

- In this module user can create compute, edit it, delete it, list it, set-default.

## Datastore

- In this module user can create datastore, edit it, delete it, list it, set-default

## Environment

- In this module they can create environment, add-mapping, delete-mapping, add-parameter, delete-parameter

## Access Token

- They can create it, list it and delete it

## User

- User can create user, edit it, delete it, get it and list it

## Export 

- User can export metadata in this module

:::note 
For more information like which commands and short options is used for which operation visit this **[spreadsheet.](/documents/guzzle_cli.xlsx)**
:::
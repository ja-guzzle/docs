---
id: guzzle_cli
title: Guzzle CLI
---


Guzzle command-line interface (CLI) provides an easy-to-use interface to Guzzle platform. The CLI is built on top of the Guzzle REST API and is organized into command groups like activity, pipeline, batch, schedule, compute, datastore, connection, environment, access-token and user.

:::caution Experimental
This CLI is under active development and is released as an Experimental client. This means that interfaces are still subject to change.
:::

## Set up the CLI
This section shows how to install and configure your environment to run the CLI.


### Download CLI
Download Guzzle CLI package from https://guzzle-downloads.justanalytics.com/guzzle-release/cli/guzzlecli-0.0.1.zip and unzip it.

```
wget https://guzzle-downloads.justanalytics.com/guzzle-release/cli/guzzlecli-0.0.1.zip
unzip guzzlecli-0.0.1.zip
```

run Guzzle CLI help command
```
cd guzzlecli/bin
./guzzlecli -h
```

### Set up authentication
Before you can run CLI commands, you must set up authentication. To authenticate to the CLI you use a Guzzle personal access token.
To configure the CLI to use a personal access token, run below command.

```
./guzzlecli profile configure -n <PROFILE_NAME> -H <GUZZLE_HOST_URL> -t <PERSONAL_ACCESS_TOKEN> -d
```

- Replace `PROFILE_NAME` with actual profile name. if that profile is already configured it will update its values.
- Replace `GUZZLE_HOST_URL` URL with your Guzzle instance URL in `https://guzzlevm.southeastasia.cloudapp.azure.com` format.
- Replace `PERSONAL_ACCESS_TOKEN` with actual token value that you can generate from `Guzzle UI -> My Profile -> Access Token -> Generate Token`

After you complete the configuration of profile, you can view list of configured profiles using below command.

```
./guzzlecli profile list
```

your access credentials are stored in the file `~/.guzzlecliconf` on Unix, Linux, or macOS, or `<USER_HOME>\.guzzlecliconf` on Windows. The file contains a profile configurations:

```
profiles:
- name: "guzzledev"
  host: "https://guzzlevm-dev.southeastasia.cloudapp.azure.com"
  token: "{ENC}t76ZTWuVkrrEe0Ic+SErglBZQ2zPy9TaeWUkpCEzUg7r1Ak6raF8D56i2nOG+X0z"
  default: true
- name: "guzzleprod"
  host: "https://guzzlevm-prod.southeastasia.cloudapp.azure.com"
  token: "{ENC}cJbJIa2KnOq+XRLDYLDPRODVpdzUr80McsOzPds+1Jl6GCsOITRdfp/SGzufDLUm"
  default: false
```

you can change the path of this file by setting the environment variable `GUZZLE_CLI_CONFIG_FILE`.

```
export GUZZLE_CLI_CONFIG_FILE=<path-to-file>
```
for window,
```
setx GUZZLE_CLI_CONFIG_FILE "<path-to-file>" /M
```

Guzzle encrypt CLI token using SHA-1 algorithm, it stores passphrase in the file `~/.guzzleclipassphrase` on Unix, Linux, or macOS, or `<USER_HOME>\.guzzleclipassphrase` on Windows. The file contains a passphrase value to encrypt and decrypt profile token. you can change the path of this file by setting the environment variable `GUZZLE_CLI_PASSPHRASE_FILE`.

```
export GUZZLE_CLI_PASSPHRASE_FILE=<path-to-file>
```
for window,
```
setx GUZZLE_CLI_PASSPHRASE_FILE "<path-to-file>" /M
```


Guzzle CLI supports the following environment variables:
- GUZZLE_CLI_HOST
- GUZZLE_CLI_TOKEN

An environment variable setting takes precedence over the setting in the configuration file.

By default, CLI uses the default profile from config file. you can mark any configured profile as default profile using below command.
```
./guzzlecli profile set-default -n guzzledev
```

## Use the CLI
This section shows you how to get CLI help and invoke commands in each command group.

### Display CLI command group help
You list the subcommands for any command group by running `./guzzlecli <group> --help` (or `./guzzlecli <group> -h`). For example, you list the Activity CLI subcommands by running `./guzzlecli activity -h`.

### Display CLI subcommand help
You list the help for a subcommand by running `./guzzlecli <group> <subcommand> --help` (or `./guzzlecli <group> <subcommand> -h`). For example, you list the help for the Activity run  subcommand by running `./guzzlecli activity run -h`.

## CLI commands: 
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

### Profile

- Profile command is used to create, update, delete, list and view the user profiles.

### Activity

- Activity command is used to create, edit, delete activity. User can also run, rerun, stop and view status and run history of activity. 

### Pipeline

- Pipeline command is used to create, edit, delete pipeline. User can also run, stop and view status and run history of pipeline.

### Batch

- Batch command is used to create, edit, delete batch. User can also initialise, run, stop and view status and run history of batch.

### Schedule

- Schedule command is used to view status and run history of schedule.

:::note 
For more information about command, subcommand and supported options view this **[file](/documents/guzzle_cli.xlsx)**
:::
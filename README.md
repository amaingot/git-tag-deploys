# Git Tags Helper
An opinionated approach for releasing and deploying your code. This CLI only outputs the correctly formatted commit message.

## Getting Started

 1. Check out the repo
 2. Install the dependencies: `npm i`
 3. Build the CLI: `npm run build`
 4. Install the CLI: `npm i -g`

## Configuration

You can configure your plugin if you fork by changing the `./config.json` file.
 - `timestampFormat` is a [Moment](https://momentjs.com/docs/#/parsing/string-format/) format
 - `envs` is a list of strings that are possible environments to create tags based off of

## Examples

With no command line arguments:
```
$ gtd
 __   __                           _____                     ___
 \ \ / /   ___    _   _   _ __    |_   _|   __ _    __ _    |_ _|  ___   _
  \ V /   / _ \  | | | | | '__|     | |    / _` |  / _` |    | |  / __| (_)
   | |   | (_) | | |_| | | |        | |   | (_| | | (_| |    | |  \__ \  _
   |_|    \___/   \__,_| |_|        |_|    \__,_|  \__, |   |___| |___/ (_)
                                                   |___/

dev/20191211-1312

```

Specifying the environment to production:
```
$ gtd -e prod
 __   __                           _____                     ___
 \ \ / /   ___    _   _   _ __    |_   _|   __ _    __ _    |_ _|  ___   _
  \ V /   / _ \  | | | | | '__|     | |    / _` |  / _` |    | |  / __| (_)
   | |   | (_) | | |_| | | |        | |   | (_| | | (_| |    | |  \__ \  _
   |_|    \___/   \__,_| |_|        |_|    \__,_|  \__, |   |___| |___/ (_)
                                                   |___/

prod/20191211-1312

```

Specifying the environment to staging:

```
$ gtd -e staging
 __   __                           _____                     ___
 \ \ / /   ___    _   _   _ __    |_   _|   __ _    __ _    |_ _|  ___   _
  \ V /   / _ \  | | | | | '__|     | |    / _` |  / _` |    | |  / __| (_)
   | |   | (_) | | |_| | | |        | |   | (_| | | (_| |    | |  \__ \  _
   |_|    \___/   \__,_| |_|        |_|    \__,_|  \__, |   |___| |___/ (_)
                                                   |___/

staging/20191211-1312

```

With verbose:
```
$ gtd -v
 __   __                           _____                     ___
 \ \ / /   ___    _   _   _ __    |_   _|   __ _    __ _    |_ _|  ___   _
  \ V /   / _ \  | | | | | '__|     | |    / _` |  / _` |    | |  / __| (_)
   | |   | (_) | | |_| | | |        | |   | (_| | | (_| |    | |  \__ \  _
   |_|    \___/   \__,_| |_|        |_|    \__,_|  \__, |   |___| |___/ (_)
                                                   |___/
Found config file: [object Object]
Config file datetime format string to: YYYYMMDD-HHMM
Config file list of envs to prod,staging,alpha
Current time is: 2019-12-11T13:41:24-06:00

dev/20191211-1312

```
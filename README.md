# Git Tags Helper
An opinionated approach for releasing and deploying your code. This CLI only outputs the correctly formatted commit message.

## Getting Started

 1. Check out the repo
 2. Install the dependencies: `npm i`
 3. Build the CLI: `npm run build`
 4. Install the CLI: `npm i -g`

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
# Stock Talk CLI

**Build Status**

[![Build Status](https://travis-ci.com/dills122/Stock-Talk.svg?branch=master)](https://travis-ci.com/dills122/Stock-Talk)

Stock Talk is a CLI tool used to get up to date trading information.

## API

This tool uses the IEX Trading Api that can be found [here](https://iextrading.com/developer/docs/#getting-started).

## Getting Started

``` powershell
# Install all dependencies
npm install
# Run a command
node ./stock-talk.js [command] [symbol] [optional-flags]
```

## Supported Commands

1. `stock` : Gets the current information on the submitted symbol
   * Flags
     * `-f --full` : Full mode display (default)
     * `-s --squashed` : Squashed mode, less data points
2. `company` : Returns information pertaining to the company
   * Flags
     * `-s --stats` : Returns key stats related to the company
     * `-e --earnings` : Returns most recent earning reports

> Currently still under construction with plans of expanding available supported commands.

## Planned Commands

1. `compare` : Compare two stocks
2. `time` : Gets information over specified time span

## Built With

* [Commander](https://github.com/tj/commander.js)
* [Numeral](https://github.com/adamwdraper/Numeral-js)
* [Prettyjson](https://github.com/rafeca/prettyjson)
* [Request](https://github.com/request/request)
* [Underscore](https://github.com/jashkenas/underscore)

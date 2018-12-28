# Stock Talk CLI

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
     * `-f` : Full mode display (default)
     * `-s` : Squashed mode, less data points

> Currently still under construction with plans of expanding available supported commands.

## Planned Commands

1. `company` : Returns information pertaining to the company
2. `compare` : Compare two stocks
3. `time` : Gets information over specified time span

## Built With

* [Commander](https://github.com/tj/commander.js)
* [Numeral](https://github.com/adamwdraper/Numeral-js)
* [Prettyjson](https://github.com/rafeca/prettyjson)
* [Request](https://github.com/request/request)
* [Underscore](https://github.com/jashkenas/underscore)
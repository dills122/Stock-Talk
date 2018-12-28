const program = require('commander');
const underscore = require('underscore');

const {
    GetDynamicData,
    GetCompanyInfo,
    GetKeyStats
} = require('./api-access.js');
const {
    GenerateStockReport,
    GenerateCompanyReport,
    GenerateCompanyKeyStats
} = require('./report-gen.js');

program
    .version('0.0.1')
    .description('Stock info at your terminal');

program
    .command('stock <symbol>')
    .alias('s')
    .option('-f, --full', 'Full information listing')
    .option('-s, --squashed', 'Shorted information listing')
    .action((symbol, cmd) => {
        GetDynamicData(symbol).then((value) => {
            //Gets only the most recent value
            GenerateStockReport(underscore.last(value.data), cmd.squashed ? 's' : 'f');
        }).catch(error => {
            console.log("We have encountered an error " + error);
        });
    });

program
    .command('company <symbol>')
    .alias('c')
    .option('-s --stats', 'get key stats info')
    .action((symbol, cmd) => {
        if (cmd.stats) {
            GetKeyStats(symbol).then((response) => {
                GenerateCompanyKeyStats(response);
            }).catch((error) => {
                console.log("We have encountered an error " + error);
            });
        } else {
            GetCompanyInfo(symbol).then((response) => {
                GenerateCompanyReport(response);
            }).catch((error) => {
                console.log("We have encountered an error " + error);
            });
        }
    });

program.parse(process.argv);
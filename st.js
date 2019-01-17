(() => {
const program = require('commander');
var array = require('lodash/array');

const {
    GetDynamicData,
    GetCompanyInfo,
    GetKeyStats,
    GetEarnings
} = require('./src/api-access.js');

const {
    GenerateStockReport,
    GenerateCompanyReport,
    GenerateCompanyKeyStats,
    GenerateEarningsReport,
    WriteReport
} = require('./src/report-gen.js');
    
if (process.argv.length <= 2) {
    console.log("need to have command args");
}

program
    .version('0.1.0')
    .description('Stock info at your terminal');

program
    .command('stock <symbol>')
    .alias('s')
    .option('-f, --full', 'Full information listing')
    .option('-s, --squashed', 'Shorted information listing')
    .action((symbol, cmd) => {
        GetDynamicData(symbol).then((value) => {
            //Gets only the most recent value
            let report = GenerateStockReport(array.last(value.data), cmd.squashed ? 's' : 'f');
            WriteReport(report);
        }).catch(error => {
            console.log("We have encountered an error " + error);
        });
    });

program
    .command('company <symbol>')
    .alias('c')
    .option('-s --stats', 'get key stats info')
    .option('-e --earnings', 'get the most recent earning reports')
    .action((symbol, cmd) => {

        if (cmd.stats) {
            GetKeyStats(symbol).then((response) => {
                let report = GenerateCompanyKeyStats(response);
                WriteReport(report);
            }).catch((error) => {
                console.log("We have encountered an error " + error);
            });
        } else if (cmd.earnings) {
            GetEarnings(symbol).then((response) => {
                let report = GenerateEarningsReport(response.earnings);
                WriteReport(report);
            }).catch((error) => {
                console.log("We have encountered an error " + error);
            });
        } else {
            GetCompanyInfo(symbol).then((response) => {
                let report = GenerateCompanyReport(response);
                WriteReport(report);
            }).catch((error) => {
                console.log("We have encountered an error " + error);
            });
        }
    });

program.parse(process.argv);
})();
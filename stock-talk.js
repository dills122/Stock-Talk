const program = require('commander');
const {
    GetDynamicData
} = require('./api-access.js');
const {
    GenerateStockReport
} = require('./report-gen.js');
const underscore = require('underscore');

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
            GenerateStockReport(value.data, cmd.squashed ? 's' : 'f');
            //console.log(underscore.last(value.data));
        });
    });

program.parse(process.argv);
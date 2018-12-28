const prettyJson = require('prettyjson');
const numeral = require('numeral');

function CompileStockList(values, type) {
    if (!values) {
        return "Error";
    }
    var compiledList = [];
    if (type === 's') {
        values.forEach(element => {
            //Squashed report
            compiledList.push(generateSquashedReport(element));
        });
    }

    return type === 'f' ? values : compiledList;

    function generateSquashedReport(value) {
        return {
            'high': numeral(value.high).format('$0,0.00'),
            'low': numeral(value.low).format('$0,0.00'),
            'average': numeral(value.average).format('$0,0.00'),
            'volume': value.volume,
        };
    }
}

function GenerateStockReport(values, type) {
    values = CompileStockList(values, type);
    values.forEach(element => {
        console.log(prettyJson.render(element, {
            noColor: false
        }));
    });
}

module.exports = {
    GenerateStockReport
}
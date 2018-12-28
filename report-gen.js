const prettyJson = require('prettyjson');
const numeral = require('numeral');

const options = {
    noColor: false
};

function GenerateStockReport(stockInfo, type) {

    console.log(prettyJson.render(type === 'f' ? fullReport(stockInfo) : squashedReport(stockInfo), options));

    function fullReport(stockInfo) {
        return {
            'date': FormatDate(stockInfo.date),
            'high': numeral(stockInfo.high).format('$0,0.00'),
            'low': numeral(stockInfo.low).format('$0,0.00'),
            'average': numeral(stockInfo.average).format('$0,0.00'),
            'volume': stockInfo.volume,
            'marketHigh': stockInfo.marketHigh,
            'marketLow': stockInfo.marketLow,
            'marketAverage': stockInfo.marketAverage,
            'marketVolume': stockInfo.marketVolume,
            'open': stockInfo.open,
            'close': stockInfo.close,
            'marketOpen': stockInfo.marketOpen,
            'marketClose': stockInfo.marketClose
        };
    }

    function squashedReport(stockInfo) {
        return {
            'date': FormatDate(stockInfo.date),
            'high': numeral(stockInfo.high).format('$0,0.00'),
            'low': numeral(stockInfo.low).format('$0,0.00'),
            'average': numeral(stockInfo.average).format('$0,0.00'),
            'volume': stockInfo.volume,
        };
    }
}

function FormatDate(date) {
    if(date) {
        return date.substring(4,6) + '-' + date.substring(6) + '-' +  date.substring(0,4);
    }
}

module.exports = {
    GenerateStockReport
}
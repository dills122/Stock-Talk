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

function GenerateCompanyReport(data) {
    var formattedObj = {
        'symbol': data.symbol,
        'companyName': data.companyName,
        'exchange': data.exchange,
        'industry': data.industry,
        'website': data.website,
        'description': data.description,
        'CEO': data.CEO,
        'issueType': data.issueType,
        'sector': data.sector,
        tags: data.tags
    };

    console.log(prettyJson.render(formattedObj, options));
}

function GenerateCompanyKeyStats(data) {
    var formattedObj = {
        'companyName': data.companyName,
        'symbol': data.symbol,
        'marketcap': numeral(data.marketcap).format('($ 0.00 a)'),
        'beta': numeral(data.beta).format('0[.]0000'),
        'week52high': numeral(data.week52high).format('$0,0.00'),
        'week52low': numeral(data.week52low).format(	'$0,0.00'),
        'week52change': numeral(data.week52change).format(	'$0,0.00'),
        'shortInterest': numeral(data.shortInterest).format(	'0,000'),
        'shortDate': data.shortDate,
        'dividendRate': numeral(data.dividendRate).format('0.000%'),
        'dividendYield': numeral(data.dividendYield).format('0.000%'),
        'exDividendDate': data.exDividendDate,
        'sharesOutstanding': numeral(data.sharesOutstanding).format('0,0'),
        'revenue': numeral(data.revenue).format('$0a'),
        'grossProfit': numeral(data.grossProfit).format('$0a'),
        'cash': numeral(data.cash).format('$0a'),
        'debt': numeral(data.debt).format('$0a'),
        'revenuePerShare': numeral(data.revenuePerShare).format('$0,0.00'),
        'revenuePerEmployee': numeral(data.revenuePerEmployee).format('$0,0.00'),
        'peRatioHigh': numeral(data.peRatioHigh).format('0.00'),
        'peRatioLow': numeral(data.peRatioLow).format('0.00'),
        'profitMargin': numeral(data.profitMargin).format('0.00')
    };

    console.log(prettyJson.render(formattedObj, options));
}

function FormatDate(date) {
    if (date) {
        return date.substring(4, 6) + '-' + date.substring(6) + '-' + date.substring(0, 4);
    }
}

module.exports = {
    GenerateStockReport,
    GenerateCompanyReport,
    GenerateCompanyKeyStats
}
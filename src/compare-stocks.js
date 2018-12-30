const prettyJson = require('prettyjson');
const numeral = require('numeral');
const {
    GetKeyStats
} = require('./api-access');

const {
    RenderHeader
} = require('./render-helpers');

const options = {
    noColor: false
};

function CompareStocks(stockOne, stockTwo) {

    var stockOnePromise = GetKeyStats(stockOne);
    var stockTwoPromise = GetKeyStats(stockTwo);

    Promise.all([stockOnePromise, stockTwoPromise]).then(values => {
        var stocks = {
            stockOne: values[0],
            stockTwo: values[1]
        };

        const marketCapCompare = {
            'Stock-One': stockOne,
            'Market-Cap-One': numeral(stocks.stockOne.marketcap).format('$0,0a'),
            'Stock-Two': stockTwo,
            'Market-Cap-Two': numeral(stocks.stockTwo.marketcap).format('$0,0a'),
            'Difference': numeral(calculateChange(stocks.stockOne.marketcap, stocks.stockTwo.marketcap)).format('0.000%')
        };
        RenderHeader('Market Cap Comparison');
        console.log(prettyJson.render(marketCapCompare, options));
        var cashCompareObj = CompareCash(stocks.stockOne, stocks.stockTwo);
        RenderHeader('Cash Reserves\' Comparison');
        console.log(prettyJson.render(cashCompareObj, options));

        RenderHeader('P\\E Ratio Comparison');
        var peCompareObj = ComparePE(stocks.stockOne, stocks.stockTwo);
        console.log(prettyJson.render(peCompareObj, options));
    });
}

function CompareCash(stockOne, stockTwo) {
    const cashCompare = {
        'Stock-One': stockOne.symbol,
        'Cash-One': numeral(stockOne.cash).format('$0,0a'),
        'Stock-Two': stockTwo.symbol,
        'Cash-Two': numeral(stockTwo.cash).format('$0,0a'),
        'Difference': numeral(calculateChange(stockOne.cash, stockTwo.cash)).format('0.000%')
    }
    return cashCompare;
}

function ComparePE(stockOne, stockTwo) {
    const peCompare = {
        stockOne: {
            symbol: stockOne.symbol,
            peHigh: stockOne.peRatioHigh,
            peLow: stockOne.peRatioLow,
        },
        stockTwo: {
            symbol: stockTwo.symbol,
            peHigh: stockTwo.peRatioHigh,
            peLow: stockTwo.peRatioLow,
        }
    };
    return peCompare;
}

function calculateChange(valOne, valTwo) {
    var average = (valOne + valTwo) / 2;
    var difference = (valOne - valTwo) / average;

    return Math.abs(difference);
}

module.exports = {
    CompareStocks
};
const prettyJson = require('prettyjson');
const numeral = require('numeral');
const {
    GetKeyStats
} = require('./api-access');

const options = {
    noColor: false
};

function CompareStocks(stockOne, stockTwo) {

    var stockOnePromise = GetKeyStats(stockOne);
    var stockTwoPromise = GetKeyStats(stockTwo);

    Promise.all([stockOnePromise, stockTwoPromise]).then(values => {
        var stocks =  {
            stockOne : values[0],
            stockTwo: values[1]
        };

        const marketCapCompare = {
            'Stock-One': stockOne.toUpperCase(),
            'Market-Cap-One': numeral(stocks.stockOne.marketcap).format('$0,0a'),
            'Stock-Two': stockTwo.toUpperCase(),
            'Market-Cap-Two': numeral(stocks.stockTwo.marketcap).format('$0,0a'),
            'Difference': numeral(calculateChange(stocks.stockOne.marketcap, stocks.stockTwo.marketcap)).format('0.000%')
        };

        console.log(prettyJson.render(marketCapCompare,options));
    });
}

function calculateChange(valOne, valTwo) {
    var average = (valOne + valTwo) / 2;
    var difference = (valOne - valTwo) / average;

    return Math.abs(difference);
}

module.exports = {
    CompareStocks
};
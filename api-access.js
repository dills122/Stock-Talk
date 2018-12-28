const request = require('request');

const baseUrl = 'https://api.iextrading.com/1.0/stock/';

const areaUrl = '/chart/dynamic';

function GetDynamicData(symbol) {
    return new Promise((resolve, reject) => {
        request(baseUrl + symbol + areaUrl, {
            json: true }, 
            (err, res, body) => {
            if (err) { reject(err); }
            resolve(body);
        });
    });
}

module.exports = {
    GetDynamicData
};
const request = require('request');

const baseUrl = 'https://api.iextrading.com/1.0/stock/';

const areaUrl = {
  dynamicStock:  '/chart/dynamic',
  companyInfo: '/company',
  stats: '/stats',
  earnings: '/earnings'
};

function GetDynamicData(symbol) {
    return new Promise((resolve, reject) => {
        request(baseUrl + symbol + areaUrl.dynamicStock, {
            json: true }, 
            (err, res, body) => {
            if (err) { reject(err); }
            resolve(body);
        });
    });
}

function GetCompanyInfo(symbol) {
    return new Promise((resolve, reject) => {
        request(baseUrl + symbol + areaUrl.companyInfo, {
            json: true }, 
            (err, res, body) => {
            if (err) { reject(err); }
            resolve(body);
        });
    });
}

function GetKeyStats(symbol) {
    return new Promise((resolve, reject) => {
        request(baseUrl + symbol + areaUrl.stats, {
            json: true }, 
            (err, res, body) => {
            if (err) { reject(err); }
            resolve(body);
        });
    });
}

function GetEarnings(symbol) {
    return new Promise((resolve, reject) => {
        request(baseUrl + symbol + areaUrl.earnings, {
            json: true }, 
            (err, res, body) => {
            if (err) { reject(err); }
            resolve(body);
        });
    });
}

module.exports = {
    GetDynamicData,
    GetCompanyInfo,
    GetKeyStats,
    GetEarnings
};
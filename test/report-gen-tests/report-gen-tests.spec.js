const assert = require('assert');
const mocha = require('mocha');
const chai = require('chai');
const reportGen = require('../../src/report-gen.js');
const expect = chai.expect;

describe('GenerateStockReport', function() {
    it('should return a stock report object', function() {
        expect(reportGen).to.be.an('object');
        expect(typeof reportGen.GenerateStockReport).to.equal('function');

        var report = reportGen.GenerateStockReport({});
        expect(report).to.be.an('object');
        assert.equal(report.date, null);
        assert.equal(report.high, '$0.00');
        assert.equal(report.average, '$0.00');
        assert.equal(report.marketClose, null);
    });
});

describe('GenerateCompanyReport', function() {
    it('should return a company report object', function() {
        expect(reportGen).to.be.an('object');
        expect(typeof reportGen.GenerateCompanyReport).to.equal('function');

        var report = reportGen.GenerateCompanyReport({});
        expect(report).to.be.an('object');
        assert.equal(report.symbol, null);
        assert.equal(report.exchange, null);
    });
});

describe('GenerateCompanyKeyStats', function() {
    it('should return a company key stats report object', function() {
        expect(reportGen).to.be.an('object');
        expect(typeof reportGen.GenerateCompanyKeyStats).to.equal('function');

        var report = reportGen.GenerateCompanyKeyStats({});
        expect(report).to.be.an('object');
        assert.equal(report.week52high, '$0.00');
        assert.equal(report.revenuePerEmployee, '$0.00');
    });
});

describe('GenerateEarningsReport', function() {
    it('should return a company key stats report object', function() {
        expect(reportGen).to.be.an('object');
        expect(typeof reportGen.GenerateEarningsReport).to.equal('function');

        var report = reportGen.GenerateEarningsReport({});
        expect(report).to.be.an('array');
        assert.equal(report.length, 0);
    });
});
const assert = require('assert');
const mocha = require('mocha');
const chai = require('chai');
const underscore = require('underscore');
const api = require('../../api-access.js');
const expect = chai.expect;


describe('GetDynamicData', function () {
    it('should return a list of stock info', function () {

        expect(api).to.be.an('object');
        expect(typeof api.GetDynamicData).to.equal('function');
        api.GetDynamicData('FB').then(response => {
            expect(response).to.be.an('object');
            var firstValue = underscore.first(response.data);
            expect(firstValue).to.be.an('object');

            var date = new Date();
            if (date.getHours() > 16) {
                assert.equal(response.range, '1m');
            } else {
                assert.equal(response.range, '1d');
            }
        }).catch(error => {
            assert.fail(error);
        });
    });
});

describe('GetCompanyInfo', function () {
    it('should return company info', function () {
        expect(api).to.be.an('object');
        expect(typeof api.GetCompanyInfo).to.equal('function');
        api.GetCompanyInfo('FB').then(response => {
            expect(response).to.be.an('object');
            
            assert.equal(response.symbol, 'FB');
            assert.equal(response.companyName, 'Facebook Inc.');
        });
    });
});
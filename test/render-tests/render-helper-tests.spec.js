const assert = require('assert');
const mocha = require('mocha');
const chai = require('chai');
const renderer = require('../../src/render-helpers');
const expect = chai.expect;

describe('RenderHeader', function () {
    it('it should render headers given a value', function () {
        const header = 'Test Header';
        expect(renderer).to.be.an('object');
        expect(typeof renderer.RenderHeader).to.equal('function');
        var results = renderer.RenderHeader(header);
        expect(results.headerText).to.be.an('string');
        expect(results.stripHeader).to.be.an('string');

        assert.equal(results.headerText.includes(header), true);
        //Since I didn't specify the pad value assume -
        assert.equal(results.stripHeader.includes('-'), true);
    });
});
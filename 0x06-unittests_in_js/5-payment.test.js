const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');
const chai = require('chai');
const sinon = require('sinon');

const expect = chai.expect;

describe('sendPaymentRequestToApi', () => {
  beforeEach(() => {
    sinon.spy(console, 'log');
  });
  it('should call be called once with correct sum parameter', () => {
    sendPaymentRequestToApi(100, 20);
    expect(console.log.calledWith('The total is: 120')).to.be.true;
    expect(console.log.calledOnce).to.be.true;
  });

  it('should be called once with correct sum parameter', () => {
    sendPaymentRequestToApi(10, 10);
    expect(console.log.calledWith('The total is: 20')).to.be.true;
    expect(console.log.calledOnce).to.be.true;
  });

  afterEach(() => {
    sinon.restore();
  });
});
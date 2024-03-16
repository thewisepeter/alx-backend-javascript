const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const chai = require('chai');
const sinon = require('sinon');
const { calculateNumber } = require('./utils');

const expect = chai.expect;

describe('sendPaymentRequestToApi', function () {
  beforeEach(() => {
    sinon.spy(Utils, 'calculateNumber');
  });

  it('should be called with the two arguments', () => {
    sendPaymentRequestToApi(80, 30);
    expect(Utils.calculateNumber.calledWith('SUM', 80, 30)).to.be.true;
  });
  it('should be called once with arguments', () => {
    sendPaymentRequestToApi(80, 30);
    expect(Utils.calculateNumber.calledOnce).to.be.true;
  });
  it('should call console log with the correct sum parameter', () => {
    sinon.spy(console, 'log');
    sendPaymentRequestToApi(20, 40);
    expect(console.log.calledWith('The total is: 60')).to.be.true;
  });

  afterEach(() => {
    sinon.restore();
  });
});
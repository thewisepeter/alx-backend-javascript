const calculateNumber = require('./1-calcul.js');
const { expect } = require('chai');

describe('calculateNumber', function () {
  it('should test sum works correctly', function () {
    expect(calculateNumber('SUM', 3.7, 2.1)).to.equal(6);
  });

  it('should test subtract works correctly', function () {
    expect(calculateNumber('SUBTRACT', -3.7, -2.1)).to.equal(-2);
  });

  it('should test divide works correctly', function () {
    expect(calculateNumber('DIVIDE', 10, 5)).to.equal(2);
  });

  it('should return Error when dividing by zero', function () {
    expect(calculateNumber('DIVIDE', 10, 0)).to.equal('Error');
  });

  it('should work with whole numbers', function () {
    expect(calculateNumber('SUM', 2, 3)).to.equal(5);
  });

  it('should round numbers before performing operations', function () {
    // Ensure that numbers are rounded before performing operations
    expect(calculateNumber('SUM', 3.7, 2.1)).to.equal(6);
    expect(calculateNumber('SUBTRACT', 3.7, 2.1)).to.equal(2);
    expect(calculateNumber('DIVIDE', 3.7, 2.1)).to.equal(2);
  });

  it('should handle negative numbers', function () {
    // Test with negative numbers
    expect(calculateNumber('SUM', -3.7, -2.1)).to.equal(-6);
    expect(calculateNumber('SUBTRACT', -3.7, -2.1)).to.equal(-2);
    expect(calculateNumber('DIVIDE', -10, -5)).to.equal(2);
  });

  it('should handle mixed types of numbers', function () {
    // Test with mixed types of numbers
    expect(calculateNumber('SUM', -3.7, 2)).to.equal(-2);
    expect(calculateNumber('SUBTRACT', 3, -2.1)).to.equal(5);
    expect(calculateNumber('DIVIDE', 10, -5)).to.equal(-2);
  });
});

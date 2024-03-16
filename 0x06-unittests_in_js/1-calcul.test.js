const calculateNumber = require('./1-calcul.js');
const assert = require('assert');

describe('calculateNumber', function () {
  it('should test sum works correctly', function () {
    assert.equal(calculateNumber('SUM', 3.7, 2.1), 6);
  });

  it('should test subtract works correctly', function () {
    assert.equal(calculateNumber('SUBTRACT', -3.7, -2.1), -2);
  });

  it('should test divide works correctly', function () {
    assert.equal(calculateNumber('DIVIDE', 10, 5), 2);
  });

  it('should return Error when dividing by zero', function () {
    assert.equal(calculateNumber('DIVIDE', 10, 0), 'Error');
  });

  it('should work with whole numbers', function () {
    assert.equal(calculateNumber('SUM', 2, 3), 5);
  });

  it('should round numbers before performing operations', function () {
    // Ensure that numbers are rounded before performing operations
    assert.equal(calculateNumber('SUM', 3.7, 2.1), 6);
    assert.equal(calculateNumber('SUBTRACT', 3.7, 2.1), 2);
    assert.equal(calculateNumber('DIVIDE', 3.7, 2.1), 2);
  });

  it('should handle negative numbers', function () {
    // Test with negative numbers
    assert.equal(calculateNumber('SUM', -3.7, -2.1), -6);
    assert.equal(calculateNumber('SUBTRACT', -3.7, -2.1), -2);
    assert.equal(calculateNumber('DIVIDE', -10, -5), 2);
  });

  it('should handle mixed types of numbers', function () {
    // Test with mixed types of numbers
    assert.equal(calculateNumber('SUM', -3.7, 2), -2);
    assert.equal(calculateNumber('SUBTRACT', 3, -2.1), 5);
    assert.equal(calculateNumber('DIVIDE', 10, -5), -2);
  });
});

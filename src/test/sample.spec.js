const chai = require('chai');
// import chai from 'chai';

const { expect } = chai;

const product = (a, b) => a * b;

describe('demo testing', () => {
  it('should always pass', () => {});

  it('should multiply two numbers together', () => {
    expect(product(2, 4)).to.equal(8);
  });
});

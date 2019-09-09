const chai = require('chai');
// import chai from 'chai';

const { expect } = chai;

const product = (a, b) => a * b;
const sum = (x, y) => x + y;

describe('demo testing', () => {
  it('should always pass', () => {});

  it('should multiply two numbers together', () => {
    expect(product(2, 4)).to.equal(8);
  });

  it('should sum two numbers together', () => {
    expect(sum(2, 4)).to.equal(6);
  });
});

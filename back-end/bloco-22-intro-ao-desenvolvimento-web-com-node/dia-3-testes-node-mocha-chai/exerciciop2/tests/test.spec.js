const { expect } = require('chai');
const mod = require('../src/baseEntity');

describe('Verify if number is positive, negative or neutral', () => {
  it('should return "Positive"', () => {
    const result = new mod(5);
    expect(result.numberType).to.be.a('string');
    expect(result.numberType).to.be.equal('Positive');
  })
  it('should return "Negative"', () => {
    const result = new mod(-5);
    expect(result.numberType).to.be.a('string');
    expect(result.numberType).to.be.equal('Negative');
  })
  it('should return "Neutral"', () => {
    const result = new mod(0);
    expect(result.numberType).to.be.a('string');
    expect(result.numberType).to.be.equal('Neutral');
  })
  describe('Verify error case, when you dont pass any parameter', () => {
    it('should throw an error "You didn"t passed a number or an argument', () => {
      expect(() => new mod().numberType)
        .throw("You didn't passed a number or an argument");
    })
  })
})

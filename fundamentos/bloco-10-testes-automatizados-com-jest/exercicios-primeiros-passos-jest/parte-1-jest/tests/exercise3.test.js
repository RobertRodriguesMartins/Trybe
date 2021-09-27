const myFizzBuzz = require('../src/exercise3');

describe('testar função myFizzBuzz', () => {
  it('should return "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toMatch('fizzbuzz')
  });
  it('should return "fizz"', () => {
    expect(myFizzBuzz(3)).toMatch('fizz');
  })
  it('should return "buzz"', () => {
    expect(myFizzBuzz(5)).toMatch('buzz');
  })
  it('should return the input number', () => {
    expect(myFizzBuzz(7)).toBe(7);
  })
  it('should return false boolean', () => {
    expect(myFizzBuzz('5')).toBe(false)
  })
});
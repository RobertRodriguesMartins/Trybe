const sum = require('../src/exercise1');

describe('Verificar função sum', () => {
  it('should return 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('should return 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('should return an error because "5" isnt number', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow()
  });

  it('should say "parameters must be numbers", when throws', () => {
    expect(() => {
      sum('5', '4');
    }).toThrowError(new Error('parameters must be numbers'))
  });
});
const trybeTech = require('../src/exercise5');

describe('testing trybeTech function', () => {
  it('should return an Array', () => {
    expect(Array.isArray(trybeTech(['python']))).toBe(true)
  })
  it('should return an array of objects like "result"', () => {
    const result = [
      { tech: 'python', nome: 'robert' },
      { tech: 'react', nome: 'robert' }
    ]
    expect(trybeTech(['python', 'react'])).toEqual(result);
  })
  it('should return an array of objects like "result2"', () => {
    const result2 = [
      { tech: 'python', nome: 'joão' },
      { tech: 'react', nome: 'joão' }
    ]
    expect(trybeTech(['python', 'react'], 'joão')).toEqual(result2);
  })
  it('should NOT return an array of objects like "result3"', () => {
    const result3 = [
      { tech: 'python', nome: 'robert' },
      { tech: 'react', nome: 'camila' }
    ]
    expect.assertions(2);

    expect(trybeTech(['python', 'react'])).not.toEqual(result3);
    expect(trybeTech(['python', 'react'], 'lucas')).not.toEqual(result3);
  })
});
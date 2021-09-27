const { encode, decode } = require('../src/exercise4');

describe('verifica encode e decode', () => {
  it('should return "function"', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  })
  it('should return 12345 when passing aeiou to encode', () => {
    expect(encode('aeiou')).toBe('12345');
  })
  it('should return aeiou when passing 12345 to decode', () => {
    expect(decode('12345')).toBe('aeiou');
  })
  it('should not convert consonants', () =>{
    expect(encode('lmnpq')).toBe('lmnpq');
  })
  it('should not convert numbers that not less or equal 5 excluding 0', () => {
    expect(decode('06789')).toBe('06789');
  })
  it('should return the same lenght for input and output strings', () => {
    expect(encode('abcde')).toHaveLength(5)
  })
});
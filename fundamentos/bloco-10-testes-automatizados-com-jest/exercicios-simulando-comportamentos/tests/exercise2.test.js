const exercise2 = require('../src/exercise2');

describe('testing randomNumber fn using new implementation', () =>{
  jest.spyOn(exercise2, 'randomNumber')
    .mockImplementationOnce((a, b) =>  a / b);

  it('should return 2 when input is 10, 5', () => {
    expect(exercise2.randomNumber(10, 5)).toBe(2);
  })

  exercise2.randomNumber.mockReturnValue(5)

  it('should return 5 with original implementation', () => {
    expect(exercise2.randomNumber()).toBe(5)
  })

})
const exercise3 = require('../src/exercise3');

describe(`testing randomNumber fn with new implementation,
  then reset and create a new`, () => {
    afterEach(() => {
      exercise3.randomNumber.mockReset();
    })

    it('should return 30 when 2*3*5', () => {
      exercise3.randomNumber = jest.fn()
      .mockImplementation((a, b, c) => a * b * c );

      expect(exercise3.randomNumber(2, 3, 5)).toBe(30);
    })

    it('should return undefined', () => {
      expect(exercise3.randomNumber()).toBe(undefined);
    })

    it('should return 20 when input is 10', () => {
      exercise3.randomNumber
      .mockImplementation((a) => a * 2)

      expect(exercise3.randomNumber(10)).toBe(20);
    })
   
  })
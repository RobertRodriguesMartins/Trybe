const exercise1 = require('../src/exercise1');

describe('testing randomNumber with mock', () => {
  exercise1.randomNumber = jest.fn()
    .mockReturnValue(10)

  it('should return 10', () => {
    expect(exercise1.randomNumber()).toBe(10);
    expect(exercise1.randomNumber).toHaveBeenCalled();
    expect(exercise1.randomNumber).toHaveBeenCalledTimes(1);
  })

})
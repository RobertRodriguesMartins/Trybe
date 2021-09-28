const getUserName = require('../src/exercise3');

describe('teste função getUserName utilizando async/await', () => {
  it('should return Mark when input is 1', async () => {
    expect( await getUserName(1)).toBe('Mark');
  })

  it('should return an error when passing something that isnt on database', async () => {
    expect.assertions(1);

    try{
      await getUserName('qualquercoisa')
    } catch (error) {
      expect(error.message).toMatch('User with qualquercoisa not found.')
    }
  })

})
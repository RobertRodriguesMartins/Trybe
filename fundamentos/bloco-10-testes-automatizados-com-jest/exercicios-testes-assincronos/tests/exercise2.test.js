const getUserName = require('../src/exercise2');

describe('testing getUserName function', () => {
  it('should return Mark when input is 1', () => (
    getUserName(1)
      .then((resp) => expect(resp).toBe('Mark'))
  ))
  // it('should return a error when id doesnt exists in database', async () => {
  //   expect.assertions(1);

  // })

});
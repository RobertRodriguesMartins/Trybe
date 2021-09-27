const uppercase = require('../src/exercise1');

describe('testing uppercase function', () => {

  it('should return "TEST" when passing "test" as input', (done) => {
    uppercase('test', (pegaString) => {
      try {
        expect(pegaString).toMatch('TEST');
        done();
      } catch (error) {
        done(error);
      }
    })
  })

});

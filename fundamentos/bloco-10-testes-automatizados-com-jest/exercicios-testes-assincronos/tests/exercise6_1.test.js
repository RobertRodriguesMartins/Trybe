const { findAnimalsByType, getListAnimals } = require('../src/exercise6_1');

describe('testing findAnimals function', () => {
  it('should return an error if type isnt on database', async () => {
    expect.assertions(1);
    try {
      await findAnimalsByType('mula')
    } catch (error) {
      expect(error.error).toMatch('Não possui esse tipo de animal.')
    }
  })
  it('should return an error when passing bob (using promise sintax here to catch error', () => (
    findAnimalsByType('bob')
      .catch((error) => expect(error.error).toMatch('Não possui esse tipo de animal.'))
  ))
  it('should return an array of objects if type is on database (using Dog as input)', () => (
    findAnimalsByType('Dog')
      .then((resp) => expect(resp).toEqual([{ name: 'Dorminhoco', age: 1, type: 'Dog' },
        { name: 'Soneca', age: 2, type: 'Dog' }]))
  ))

})
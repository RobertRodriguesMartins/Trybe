import generateRandomNumber from '../services';

test('should return 10', () => {
  // generateRandomNumber= jest.fn().mockReturnValue(10)
  let random = generateRandomNumber;
  random = jest.fn().mockReturnValue(10);

  random();

  expect(random).toBeCalled()
  expect(() => expect(random).toBeCalledTimes(2)).toThrow();
  expect(random()).toBe(10);

  random.mockImplementation((a, b) => a / b);
  random.mockClear()
  const value = random(4, 2);

  expect(value).toBe(2)

  expect(random).toBeCalled()
})
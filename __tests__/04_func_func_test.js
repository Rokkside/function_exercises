it('returns 5', () => {
  expect(returnFive()).toBe(5);
});

it('returns a function', () => {
  const result = funcFunc();

  expect(result).toBeInstanceOf(Function);
  expect(result()).toBe(5);
});

it('returns a function that accepts an argument', () => {
  const result = funcArgFunc();

  expect(result).toBeInstanceOf(Function);
  expect(result(2)).toBe(4);
  expect(result(5)).toBe(10);
});

it('accepts an argument and returns another function', () => {
  const myArg = {wat: 'arg'};
  const result = argFuncFunc(myArg);

  expect(result).toBeInstanceOf(Function);
  expect(result()).toBe(myArg);
});

it('accepts an arg and returns a function that accepts an arg', () => {
  let result = argFuncArgFunc(5);

  expect(result).toBeInstanceOf(Function);
  expect(result(2)).toBe(10);
  expect(result(5)).toBe(25);
  result = argFuncArgFunc(3);

  expect(result).toBeInstanceOf(Function);
  expect(result(2)).toBe(6);
  expect(result(5)).toBe(15);
});

it('accepts an arg and returns a function that prepends a name', () => {
  const honor = prepend('Sir');

  expect(honor).toBeInstanceOf(Function);
  expect(honor('Bill')).toBe('Sir Bill');
  expect(honor('Sally')).toBe('Sir Sally');

  const dishonor = prepend('Booger');

  expect(dishonor).toBeInstanceOf(Function);
  expect(dishonor('Bill')).toBe('Booger Bill');
  expect(dishonor('Sally')).toBe('Booger Sally');
});

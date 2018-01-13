function returnFive() {return 5}
it('returns 5', () => {
  expect(returnFive()).toBe(5);
});

function funcFunc() {return returnFive}
it('returns a function', () => {
  const result = funcFunc();

  expect(result).toBeInstanceOf(Function);
  expect(result()).toBe(5);
});

function funcArgFunc() {
  return function double(number) {return number*2}
}
it('returns a function that accepts an argument', () => {
  const result = funcArgFunc();

  expect(result).toBeInstanceOf(Function);
  expect(result(2)).toBe(4);
  expect(result(5)).toBe(10);
});
function argFuncFunc(neet) {
  return function() {return neet}
}
it('accepts an argument and returns another function', () => {
  const myArg = {wat: 'arg'};
  const result = argFuncFunc(myArg);

  expect(result).toBeInstanceOf(Function);
  expect(result()).toBe(myArg);
});

it('accepts an arg and returns a function that accepts an arg', () => {
  const result = argFuncFunc(5);

  expect(result).toBeInstanceOf(Function);
  expect(result(2)).toBe(10);
  expect(result(5)).toBe(25);
});

it('accepts an arg and returns a function that prepends a name', () => {
  const honor = prepend('Sir');

  expect(result).toBeInstanceOf(Function);
  expect(honor('Bill')).toBe('Sir Bill');
  expect(honor('Sally')).toBe('Sir Sally');

  const dishonor = prepend('Booger');

  expect(result).toBeInstanceOf(Function);
  expect(dishonor('Bill')).toBe('Booger Bill');
  expect(dishonor('Sally')).toBe('Booger Sally');
});

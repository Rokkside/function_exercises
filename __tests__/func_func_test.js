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
function funcArgFunc() {return function(number) {return number*2}}
it('returns a function that accepts an argument', () => {
  const result = funcArgFunc();

  expect(result).toBeInstanceOf(Function);
  expect(result(2)).toBe(4);
  expect(result(5)).toBe(10);
});

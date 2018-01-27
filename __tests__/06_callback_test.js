it('calls a passed callback function', () => {
  expect(callMeWithThree(function (arg) { return arg * 2; })).toBe(6);
  expect(callMeWithThree(function (arg) { return arg + 1; })).toBe(4);
  expect(callMeWithThree(function (arg) { return arg; })).toBe(3);
});

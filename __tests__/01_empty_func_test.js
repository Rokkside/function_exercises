function myFunc() {
  return undefined
}
it('returns undefined', () => {
  expect(myFunc()).toBeUndefined();
});

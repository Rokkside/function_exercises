function gimmeOne() {
  return 1
}
it('returns 1', () => {
  expect(gimmeOne()).toBe(1);
});

function gimmeBlah() {
  return 'blah'
}
it('returns "blah"', () => {
  expect(gimmeBlah()).toBe('blah');
});

function gimmeObj() {
  return {gimme:'now'}
}
it('returns an object', () => {
  expect(gimmeObj()).toEqual({gimme: 'now'});
});

function gimmeArr() {
  return [1, 'array']
}
it('returns an array', () => {
  expect(gimmeArr()).toEqual([1, 'array']);
});

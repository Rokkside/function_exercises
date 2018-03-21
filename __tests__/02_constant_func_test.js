it('returns 1', () => {
  expect(gimmeOne()).toBe(1);
});

it('returns "blah"', () => {
  expect(gimmeBlah()).toBe('blah');
});

it('returns an object', () => {
  expect(gimmeObj()).toEqual({gimme: 'now'});
});

it('returns an array', () => {
  expect(gimmeArr()).toEqual([1, 'array']);
});

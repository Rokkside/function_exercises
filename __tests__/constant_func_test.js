it('returns 1', () => {
  expect(gimmeOne()).toBe(1);
});

it('returns "blah"', () => {
  expect(gimmeBlah()).toBe('blah');
});

it('returns an object', () => {
  expect(gimmeObj()).toBe({gimme: 'now'});
});

it('returns an array', () => {
  expect(gimmeObj()).toBe([1, 'array']);
});

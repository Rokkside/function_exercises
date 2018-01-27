it('returns true when both are true', () => {
  expect(and(true, true)).toBe(true);
  expect(and(true, false)).toBe(false);
  expect(and(false, true)).toBe(false);
  expect(and(false, false)).toBe(false);
});

it('returns true when either are true', () => {
  expect(or(true, true)).toBe(true);
  expect(or(true, false)).toBe(true);
  expect(or(false, true)).toBe(true);
  expect(or(false, false)).toBe(false);
});

it('returns true when only one is true', () => {
  expect(xor(true, true)).toBe(false);
  expect(xor(true, false)).toBe(true);
  expect(xor(false, true)).toBe(true);
  expect(xor(false, false)).toBe(false);
});

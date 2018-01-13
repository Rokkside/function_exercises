it('returns the given argument', () => {
  expect(gimmeBack('this')).toBe('this');
  expect(gimmeBack(5)).toBe(5);

  const obj = {gimme: 'now'};
  expect(gimmeBack(obj)).toBe(obj);

  const arr = [1, 'array'];
  expect(gimmeBack(arr).toBe(arr);
});

it('adds two', () => {
  expect(addPlease(2)).toBe(4);
  expect(addPlease(5)).toBe(7);
});

it('multiplies by two', () => {
  expect(doublePlease(2)).toBe(4);
  expect(doublePlease(5)).toBe(10);
});

it('adds to name', () => {
  expect(elder('Bill')).toBe('Bill Senior');
  expect(elder('Jane')).toBe('Jane Senior');
});

it('multiplies two parameters', () => {
  expect(timesPlease(2, 4)).toBe(8);
  expect(timesPlease(5, 6)).toBe(30);
});

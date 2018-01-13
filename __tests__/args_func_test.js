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

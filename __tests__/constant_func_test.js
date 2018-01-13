function gimmeOne() {return 1}
function gimmeBlah() {return 'blah'}
function gimmeObj() {return {gimme: 'now'}}
function gimmeArr() {return [1, 'array']}

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

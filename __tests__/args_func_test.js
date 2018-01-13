function gimmeBack(adj) {return adj}
function addPlease(number) {return number+2}
function doublePlease(name) {return name  *2}
function elder(what) {return what + ' Senior'}
function timesPlease(gid, go) {return gid * go }
it('returns the given argument', () => {
  expect(gimmeBack('this')).toBe('this');
  expect(gimmeBack(5)).toBe(5);

  const obj = {gimme: 'now'};
  expect(gimmeBack(obj)).toBe(obj);

  const arr = [1, 'array'];
  expect(gimmeBack(arr)).toBe(arr);
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
function fullName(base, bart) {return base + ' ' + bart}
function lastFirst(bee, bear) {return bear + ', ' + bee}
it('concatenates two strings', () => {
  expect(fullName('Bob', 'Loblaw')).toBe('Bob Loblaw');
  expect(fullName('Jane', 'Jamison')).toBe('Jane Jamison');
});

it('does last name first', () => {
  expect(lastFirst('Bob', 'Loblaw')).toBe('Loblaw, Bob');
  expect(lastFirst('Jane', 'Jamison')).toBe('Jamison, Jane');
});

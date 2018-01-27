function gimmeBack(yes) {return yes}
it('returns the given argument', () => {
  expect(gimmeBack('this')).toBe('this');
  expect(gimmeBack(5)).toBe(5);

  const obj = {gimme: 'now'};
  expect(gimmeBack(obj)).toBe(obj);

  const arr = [1, 'array'];
  expect(gimmeBack(arr)).toBe(arr);
});
function addPlease(what) {return what + 2}
it('adds two', () => {
  expect(addPlease(2)).toBe(4);
  expect(addPlease(5)).toBe(7);
});
function doublePlease(deal) {return deal * 2}
it('multiplies by two', () => {
  expect(doublePlease(2)).toBe(4);
  expect(doublePlease(5)).toBe(10);
});
function elder(Kind) {return Kind +  ' Senior'}
it('adds to name', () => {
  expect(elder('Bill')).toBe('Bill Senior');
  expect(elder('Jane')).toBe('Jane Senior');
});
function timesPlease(will, when) {return will * when}
it('multiplies two parameters', () => {
  expect(timesPlease(2, 4)).toBe(8);
  expect(timesPlease(5, 6)).toBe(30);
});
function fullName(bin, bill) {return bin + ' ' + bill}
it('concatenates two strings', () => {
  expect(fullName('Bob', 'Loblaw')).toBe('Bob Loblaw');
  expect(fullName('Jane', 'Jamison')).toBe('Jane Jamison');
});
function lastFirst(kid, adult) {return adult + ', ' + kid}
it('does last name first', () => {
  expect(lastFirst('Bob', 'Loblaw')).toBe('Loblaw, Bob');
  expect(lastFirst('Jane', 'Jamison')).toBe('Jamison, Jane');
});

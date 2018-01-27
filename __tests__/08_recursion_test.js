it('returns a reversed string', () => {
  expect(reverse('abc')).toBe('cba');
  expect(reverse('blahblah')).toBe('halbhalb');
});

it('returns true when given string is a palindrome', () => {
  expect(isPalindrome('blah')).toBe(false);
  expect(isPalindrome('blalb')).toBe(true);
  expect(isPalindrome('blaalb')).toBe(true);
  expect(isPalindrome('racecar')).toBe(true);
  expect(isPalindrome('raceboat')).toBe(false);
  expect(isPalindrome('raceboat')).toBe(false);
  expect(isPalindrome('was it a rat i saw')).toBe(true);
});

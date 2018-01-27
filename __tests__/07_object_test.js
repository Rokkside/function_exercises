it('returns a simple object', () => {
  expect(gimmeObj).toEqual({my: 'obj'});
});

it('adds items to the given object', () => {
  expect(addToObj({foo: 'bar'})).toEqual({foo: 'bar', bah: 'beezle'});
  expect(addToObj({my: 'obj'})).toEqual({my: 'obj', bah: 'beezle'});
});

it('merges two objects together', () => {
  expect(mergeObjs({foo: 'bar'}, {my: 'obj'})).toEqual({foo: 'bar', my: 'obj'});
  expect(mergeObjs({hah: 'hoo'}, {ho: 'hum'})).toEqual({hah: 'hoo', ho: 'hum'});
});

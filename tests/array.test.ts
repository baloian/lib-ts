import { sumOfPropVal } from '..';

test('Testing sumOfPropVal() function', () => {
  let list: unknown[] = [{a: 5}, {a: 4}];
  expect(sumOfPropVal(list, 'a')).toBe(9);

  list = [{a: 3}, {a: 4}];
  expect(sumOfPropVal(list, 'a')).toBe(7);

  list = [{a: 10}, {a: 11}];
  expect(sumOfPropVal(list, 'a')).toBe(21);
});

import { pctDiff, pctOf } from '..';

test('Testing pctDiff() function', () => {
  let current: number = 100;
  let previous: number = 50;
  expect(pctDiff(current, previous)).toBe(100);

  current = 25;
  previous = 50;
  expect(pctDiff(current, previous)).toBe(-50);

  current = 125;
  previous = 100;
  expect(pctDiff(current, previous)).toBe(25);
});


test('Testing pctOf() function', () => {
  let value: number = 50;
  let total: number = 100;
  expect(pctOf(value, total)).toBe(50);

  value = 25;
  total = 100;
  expect(pctOf(value, total)).toBe(25);

  value = 25;
  total = 200;
  expect(pctOf(value, total)).toBe(12.5);
});

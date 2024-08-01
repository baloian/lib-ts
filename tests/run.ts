import { Test, TestRunner } from './base';
import {
  sumOfPropVal,
  pctDiff,
  pctOf,
  timeDiff
} from '..';


const runner = new TestRunner();

runner.addTestCase('Testing sumOfPropVal() function', () => {
  let list: unknown[] = [{a: 5}, {a: 4}];
  Test.expect(sumOfPropVal(list, 'a')).toBe(9);

  list = [{a: 3}, {a: 4}];
  Test.expect(sumOfPropVal(list, 'a')).toBe(7);

  list = [{a: 10}, {a: 11}];
  Test.expect(sumOfPropVal(list, 'a')).toBe(21);
});


runner.addTestCase('Testing pctOf() function', () => {
  let value: number = 50;
  let total: number = 100;
  Test.expect(pctOf(value, total)).toBe(50);

  value = 25;
  total = 100;
  Test.expect(pctOf(value, total)).toBe(25);

  value = 25;
  total = 200;
  Test.expect(pctOf(value, total)).toBe(12.5);
});


runner.addTestCase('Testing pctDiff() function', () => {
  let current: number = 100;
  let previous: number = 50;
  Test.expect(pctDiff(current, previous)).toBe(100);

  current = 25;
  previous = 50;
  Test.expect(pctDiff(current, previous)).toBe(-50);

  current = 125;
  previous = 100;
  Test.expect(pctDiff(current, previous)).toBe(25);
});


runner.addTestCase('Testing timeDiff() function', () => {
  let start: number = 1702394102296;
  let end: number = 1702404570878;
  Test.expect(timeDiff(start, end, true)).toBe('2 hours');

  start = 1702394102180;
  end = 1702395636391;
  Test.expect(timeDiff(start, end, true)).toBe('25 minutes');

  start = 1702394102217;
  end = 1702498818433;
  Test.expect(timeDiff(start, end, true)).toBe('1 day');
});


// Run all test cases
runner.run();

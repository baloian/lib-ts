import { timeDiff } from '..';

test('Testing timeDiff() function', () => {
  let start: number = 1702394102296;
  let end: number = 1702404570878;
  // expect(timeDiff(start, end, true)).toBe('2 hours');

  start = 1702394102180;
  end = 1702395636391;
  // expect(timeDiff(start, end, true)).toBe('25 minutes');

  start = 1702394102217;
  end = 1702498818433;
  // expect(timeDiff(start, end, true)).toBe('1 day');
});

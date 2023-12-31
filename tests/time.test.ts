import { timeDiff } from '..';

test('Testing timeDiff() function', () => {
  expect(timeDiff(1702394102296, 1702404570878)).toBe('2 hours');
});

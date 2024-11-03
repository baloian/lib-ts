import { sumOfPropVal } from '../lib/array'


describe('sumOfPropVal', () => {
  test('returns 0 for an empty array', () => {
    expect(sumOfPropVal([], 'value')).toBe(0);
  });

  test('sums values of the specified property', () => {
    const list = [
      { value: 10 },
      { value: 20 },
      { value: 30 }
    ];
    expect(sumOfPropVal(list, 'value')).toBe(60);
  });

  test('ignores objects without the specified property', () => {
    const list = [
      { value: 10 },
      { name: 'item' },
      { value: 20 }
    ];
    expect(sumOfPropVal(list, 'value')).toBe(30);
  });

  test('ignores non-numeric values', () => {
    const list = [
      { value: 10 },
      { value: 'not a number' },
      { value: 20 }
    ];
    expect(sumOfPropVal(list, 'value')).toBe(10);
  });

  test('handles nested objects', () => {
    const list = [
      { details: { value: 10 } },
      { details: { value: 20 } },
      { details: { value: 30 } }
    ];
    expect(sumOfPropVal(list, 'details')).toBe(0); // Should return 0 since `details` is not the expected prop directly
  });

  test('returns 0 for objects with null or undefined values', () => {
    const list = [
      { value: null },
      { value: undefined },
      { value: 20 }
    ];
    expect(sumOfPropVal(list, 'value')).toBe(20);
  });

  test('sums values from mixed data types', () => {
    const list = [
      { value: 5 },
      { value: 15 },
      { value: 'test' },
      { value: 25 },
      { other: 100 }
    ];
    expect(sumOfPropVal(list, 'value')).toBe(45);
  });
});

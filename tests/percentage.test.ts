import {
  pctOf,
  pctDiff
} from '../lib/percentage';


describe('pctDiff', () => {
  it('percentage difference for positive values', () => {
    expect(pctDiff(120, 100)).toBe(20);
    expect(pctDiff(150, 100)).toBe(50);
  });

  /*
  it('percentage difference for negative values', () => {
    expect(pctDiff(-80, -100)).toBe(20);
    expect(pctDiff(-150, -100)).toBe(50);
  });
  */

  it('percentage difference when current is negative and previous is positive', () => {
    expect(pctDiff(-50, 100)).toBe(-150);
  });

  it('percentage difference when current is positive and previous is negative', () => {
    expect(pctDiff(50, -100)).toBe(150);
  });

  it('should throw an error when the previous value is zero', () => {
    expect(() => pctDiff(100, 0)).toThrow('Previous value cannot be zero.');
  });

  it('should return 0 when both current and previous values are the same', () => {
    expect(pctDiff(100, 100)).toBe(0);
  });
});


describe('pctOf', () => {
  test('calculates percentage-of for positive values', () => {
    expect(pctOf(50, 200)).toBe(25);
    expect(pctOf(75, 300)).toBe(25);
    expect(pctOf(20, 80)).toBe(25);
  });

  test('calculates percentage-of for negative values', () => {
    expect(pctOf(-50, -200)).toBe(25);
    expect(pctOf(-75, -300)).toBe(25);
    expect(pctOf(-20, -80)).toBe(25);
  });

  test('calculates percentage-of for mixed positive and negative values', () => {
    expect(pctOf(-50, 200)).toBe(-25);
    expect(pctOf(75, -300)).toBe(-25);
  });

  test('throws an error when total is zero', () => {
    expect(() => pctOf(50, 0)).toThrow('Total cannot be zero.');
    expect(() => pctOf(-50, 0)).toThrow('Total cannot be zero.');
    expect(() => pctOf(0, 0)).toThrow('Total cannot be zero.');
  });
});

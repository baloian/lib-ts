import { deepCopy } from '../lib/utils';

describe('deepCopy', () => {
  it('handle null and undefined', () => {
    expect(deepCopy(null)).toBeNull();
    expect(deepCopy(undefined)).toBeUndefined();
  });

  it('create a deep copy of nested objects', () => {
    const original = {
      a: 1,
      b: {
        c: 2,
        d: {
          e: 3
        }
      }
    };
    const copy = deepCopy(original);
    // Check if it's a true copy
    expect(copy).toEqual(original);
    // Verify it's not the same reference
    expect(copy).not.toBe(original);
    // Verify nested objects are also copied
    expect(copy.b).not.toBe(original.b);
    expect(copy.b.d).not.toBe(original.b.d);
  });

  it('create a deep copy of arrays', () => {
    const original = [1, [2, 3], { a: 4 }];
    const copy = deepCopy(original);
    expect(copy).toEqual(original);
    expect(copy).not.toBe(original);
    expect(copy[1]).not.toBe(original[1]);
    expect(copy[2]).not.toBe(original[2]);
  });

  it('handle primitive values', () => {
    expect(deepCopy(42)).toBe(42);
    expect(deepCopy('hello')).toBe('hello');
    expect(deepCopy(true)).toBe(true);
  });

  /*
  it('throw error for non-serializable values', () => {
    const obj = {
      fn: () => {},
      date: new Date(),
    };
    expect(() => deepCopy(obj)).toThrow();
  });
  */
});

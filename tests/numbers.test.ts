import { round } from '../lib/numbers';


describe('round', () => {
  it('should round to 2 decimal places by default', () => {
    expect(round(2.3456)).toBe(2.35);
    expect(round(2.344)).toBe(2.34);
    expect(round(2.3)).toBe(2.3);
  });

  it('should round to specified decimal places', () => {
    expect(round(2.3456, 3)).toBe(2.346);
    expect(round(2.344, 3)).toBe(2.344);
    expect(round(2.3, 3)).toBe(2.3);
  });

  it('should handle negative numbers', () => {
    expect(round(-2.3456)).toBe(-2.35);
    expect(round(-2.3456, 3)).toBe(-2.346);
  });

  it('should handle zero as input', () => {
    expect(round(0)).toBe(0);
    expect(round(0, 3)).toBe(0);
  });

  it('should return NaN when the value is NaN', () => {
    expect(round(NaN)).toBeNaN();
    expect(round(NaN, 3)).toBeNaN();
  });

  it('should handle large numbers', () => {
    expect(round(123456.789012)).toBe(123456.79);
    expect(round(123456.789012, 4)).toBe(123456.789);
  });

  it('should handle very small numbers', () => {
    expect(round(0.00012345, 5)).toBe(0.00012);
    expect(round(0.00012345)).toBe(0);
  });

  it('should round 1.005 to 1.01 when rounding to 2 decimal places', () => {
    expect(round(1.005)).toBe(1.01);
  });
});

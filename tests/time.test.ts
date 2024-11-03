import { numberToMonth } from '../lib/time';


describe('numberToMonth', () => {
  it('"January" for input 1', () => {
    expect(numberToMonth(1)).toBe('January');
  });

  it('"February" for input 2', () => {
    expect(numberToMonth(2)).toBe('February');
  });

  it('"March" for input 3', () => {
    expect(numberToMonth(3)).toBe('March');
  });

  it('"April" for input 4', () => {
    expect(numberToMonth(4)).toBe('April');
  });

  it('"May" for input 5', () => {
    expect(numberToMonth(5)).toBe('May');
  });

  it('"June" for input 6', () => {
    expect(numberToMonth(6)).toBe('June');
  });

  it('"July" for input 7', () => {
    expect(numberToMonth(7)).toBe('July');
  });

  it('"August" for input 8', () => {
    expect(numberToMonth(8)).toBe('August');
  });

  it('"September" for input 9', () => {
    expect(numberToMonth(9)).toBe('September');
  });

  it('"October" for input 10', () => {
    expect(numberToMonth(10)).toBe('October');
  });

  it('"November" for input 11', () => {
    expect(numberToMonth(11)).toBe('November');
  });

  it('"December" for input 12', () => {
    expect(numberToMonth(12)).toBe('December');
  });

  it('null for input 0', () => {
    expect(numberToMonth(0)).toBeNull();
  });

  it('null for input 13', () => {
    expect(numberToMonth(13)).toBeNull();
  });

  it('null for negative input', () => {
    expect(numberToMonth(-1)).toBeNull();
  });

  it('null for non-integer input', () => {
    expect(numberToMonth(2.5)).toBeNull();
    expect(numberToMonth(3.1)).toBeNull();
  });
});

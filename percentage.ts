import { round } from './numbers'; 

// Function calculates percentage change of two values (current and previous).
//
// Arguments:
// - current: Current price of coin.
// - previous: Previous (basically it is price 24 hours ago) price of coin.
//
// Returns percentage change of price or 0 if one of arguments is zero or a
// negative value, which makes the percent change meaningless.
export function pctChange(current: number, previous: number): number {
  // A value of zero or a negative value makes the percent change meaningless.
  if (previous <= 0 || current <= 0) return 0;
  // Percentage Change Formula:
  // ((current_price - prev_price) / |prev_price|) x 100
  const pctChange: number = ((current - previous) / Math.abs(previous)) * 100;
  return round(pctChange);
}

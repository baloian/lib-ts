import { round } from './numbers'; 

// Function calculates percentage change of two values (current and previous).
//
// Arguments:
// - current: Current price of coin.
// - previous: Previous (basically it is price 24 hours ago) price of coin.
export function pctDiff(current: number, previous: number): number {
  if (previous === 0) throw new Error('Previous value cannot be zero.');
  // Percentage Change Formula:
  // ((current_price - prev_price) / |prev_price|) x 100
  const pctChange: number = ((current - previous) / Math.abs(previous)) * 100;
  return round(pctChange);
}


// Calculate what percentage X is of Y. Formula: Percentage = (X / Y) × 100
export function pctOf(value: number, total: number): number {
  if (total === 0) throw new Error('Total cannot be zero.');
  const rv: number = (value / total) * 100;
  return round(rv);
}

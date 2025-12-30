// The most common solutions for rounding to a decimal place is to either use
// Number.prototype.toFixed(), or multiply the float by some power of 10 in order
// to leverage Math.round(). Both of these work, except sometimes a decimal of 5
// is rounded down instead of up.
//
// For example, Number((1.005).toFixed(2)); // 1 instead of 1.01
//
// The rounding problem can be avoided by using numbers represented in exponential
// notation.
//
// For example, Number(Math.round(1.005+'e2')+'e-2'); // 1.01
export function round(value: number, decimals: number = 2): number {
  // Convert the value to exponential notation to handle precision correctly
  const expStr = `${value}e${decimals}`;
  const roundedExpStr = Math.round(Number(expStr));
  const finalValueStr = `${roundedExpStr}e-${decimals}`;
  return Number(finalValueStr);
}


export function autoFixedDecimal(value: number): number {
  const absValue: number = Math.abs(value);
  if (absValue >= 0.005) return round(value, 2);
  if (absValue >= 0.00005) return round(value, 4);
  return round(value, 8);
}

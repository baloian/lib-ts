import Decimal from 'decimal.js/decimal.mjs';


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
  // Check if the value is in notation format then use the Decimal library.
  const tmpStr: string = String(value);
  if (tmpStr.includes('e')) {
    const decNum = new Decimal(value);
    return Number(decNum.toFixed(decimals));
  }
  return Number(Math.round(Number(`${value}e${decimals}`)) + `e-${decimals}`);
}


export function autoFixedDecimal(value: number): number {
  const absValue: number = Math.abs(value);
  if (absValue >= 0.005) return round(value, 2);
  if (absValue >= 0.00005) return round(value, 4);
  return round(value, 8);
}


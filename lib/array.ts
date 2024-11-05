/**
 * Returns the sum of numeric values for a specified property across an array of objects
 */
export function sumOfPropVal(list: unknown[], prop: string): number {
  return list.reduce((total: number, item: unknown) => {
    if (item && typeof item === 'object') {
      const value = item[prop];
      if (typeof value === 'number') return total + value;
    }
    return total;
  }, 0);
}

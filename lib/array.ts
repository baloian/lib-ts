// This function returns the sum of the property value in the array of objects.
export function sumOfPropVal(list: unknown[], prop: string): number {
  let total: number = 0;
  list.forEach((e: unknown, idx: number) => {
    if (e && typeof e === 'object') {
      if (e[prop] !== undefined && e[prop] !== null && typeof e[prop] === 'number') total += e[prop];
    }
  });
  return total;
}

// This function returns the sum of the property value in the array of objects.
export function sumOfPropVal(list: unknown[], prop: string): number {
  let total: number = 0;
  list.forEach((e: unknown, idx: number) => {
    if (e && typeof e === 'object' && e[prop] && typeof e[prop] === 'number') {
      total += e[prop];
    } else {
      throw new Error(`list[${idx}] is not valid or does not have the '${prop}' property`);
    }
  });
  return total;
}

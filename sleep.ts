// Function makes the program sleep for a given number of milliseconds.
export function sleep(ms: number): Promise<any> {
  return new Promise((res) => setTimeout(res, ms, ''));
}

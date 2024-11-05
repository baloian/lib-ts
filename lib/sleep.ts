/**
 * Pauses execution for the specified duration.
 */
export function sleep(ms: number): Promise<void> {
  if (ms < 0) throw new Error('Sleep duration cannot be negative');
  return new Promise(resolve => setTimeout(resolve, ms));
}

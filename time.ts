import moment from 'moment-timezone';

export function timeDiff(start: number, end: number = 0, tz: string = 'America/New_York'): string {
  if (!end) end = Number(moment().tz(tz).format('x'));
  const seconds = Math.floor((end - start) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) return days > 1 ? `${days} days` : `${days} day`;
  if (hours > 0) return hours > 1 ? `${hours} hours` : `${hours} hour`;
  if (minutes > 0) return minutes > 1 ? `${minutes} minutes` : `${minutes} minute`;
  return seconds > 1 ? `${seconds} seconds` : `${seconds} second`;
}

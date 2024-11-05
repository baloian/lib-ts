// Get time difference in human readable form.
export function timeDiff(start: number, end: number, rounded: boolean = false): string {
  const MS_PER_SECOND = 1000;
  const MS_PER_MINUTE = MS_PER_SECOND * 60;
  const MS_PER_HOUR = MS_PER_MINUTE * 60;
  const MS_PER_DAY = MS_PER_HOUR * 24;

  let diffMilliseconds = end - start;
  // Handle negative time differences by using absolute value
  diffMilliseconds = Math.abs(diffMilliseconds);

  const diffDays = Math.floor(diffMilliseconds / MS_PER_DAY);
  const diffHours = Math.floor((diffMilliseconds % MS_PER_DAY) / MS_PER_HOUR);
  const diffMinutes = Math.floor((diffMilliseconds % MS_PER_HOUR) / MS_PER_MINUTE);
  const diffSeconds = Math.floor((diffMilliseconds % MS_PER_MINUTE) / MS_PER_SECOND);

  const formatUnit = (value: number, unit: string): string =>
    `${value} ${unit}${value !== 1 ? 's' : ''}`;
  if (rounded) {
    if (diffDays > 0) return formatUnit(diffDays, 'day');
    if (diffHours > 0) return formatUnit(diffHours, 'hour');
    if (diffMinutes > 0) return formatUnit(diffMinutes, 'minute');
    if (diffSeconds > 0) return formatUnit(diffSeconds, 'second');
    return '0 seconds';
  }
  const parts: string[] = [];
  if (diffDays > 0) parts.push(formatUnit(diffDays, 'day'));
  if (diffHours > 0) parts.push(formatUnit(diffHours, 'hour'));
  if (diffMinutes > 0) parts.push(formatUnit(diffMinutes, 'minute'));
  if (diffSeconds > 0) parts.push(formatUnit(diffSeconds, 'second'));
  return parts.length > 0 ? parts.join(' ') : '0 seconds';
}


// Convert a number (representing a month) to a month name.
export function numberToMonth(monthNumber: number): string | null {
  if (!Number.isInteger(monthNumber)) return null;
  const monthNames: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  return monthNumber >= 1 && monthNumber <= 12 ? monthNames[monthNumber - 1] : null;
}

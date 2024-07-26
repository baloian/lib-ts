// Get time difference in human readable form.
export function timeDiff(start: number, end: number, rounded: boolean = false): string {
  const diffMilliseconds = end - start;
  const diffSeconds = Math.floor((diffMilliseconds / 1000) % 60);
  const diffMinutes = Math.floor((diffMilliseconds / (1000 * 60)) % 60);
  const diffHours = Math.floor((diffMilliseconds / (1000 * 60 * 60)) % 24);
  const diffDays = Math.floor(diffMilliseconds / (1000 * 60 * 60 * 24));
  let difference = '';
  if (rounded) {
    if (diffDays > 0) return `${diffDays} day${diffDays !== 1 ? 's' : ''} `;;
    if (diffHours > 0) return `${diffHours} hour${diffHours !== 1 ? 's' : ''} `;
    if (diffMinutes > 0) return `${diffMinutes} minute${diffMinutes !== 1 ? 's' : ''} `;
    if (diffSeconds > 0) return `${diffSeconds} second${diffSeconds !== 1 ? 's' : ''} `;
  } else {
    if (diffDays > 0) {
      difference += `${diffDays} day${diffDays !== 1 ? 's' : ''} `;
    }
    if (diffHours > 0) {
      difference += `${diffHours} hour${diffHours !== 1 ? 's' : ''} `;
    }
    if (diffMinutes > 0) {
      difference += `${diffMinutes} minute${diffMinutes !== 1 ? 's' : ''} `;
    }
    if (diffSeconds > 0) {
      difference += `${diffSeconds} second${diffSeconds !== 1 ? 's' : ''} `;
    }
  }
  return difference.trim() || '0 seconds';
}

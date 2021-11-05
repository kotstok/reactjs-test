export function unixToDate(unix_timestamp: number) {
  const date = new Date(unix_timestamp);
  return (
    date.getDate() + ' ' + date.toLocaleString('en-us', { month: 'short' })
  );
}

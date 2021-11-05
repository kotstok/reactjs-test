export function summary(
  text: string,
  limit: number,
  symbol: string = '...'
): string {
  return limit < text.length
    ? text.replace(new RegExp('^(.{' + limit + '}[^s]*).*'), '$1') + symbol
    : text;
}

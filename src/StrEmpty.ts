export function isStrEmpty(checkString: string): boolean {
  if (checkString) {
    const trimmedString = checkString.trim();
    return trimmedString.length <= 0;
  }
  return true;
}

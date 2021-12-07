import { capatalizeStr as cpStr } from "./StrCapatalize";
import { isStrEmpty as isStrEpty } from "./StrEmpty";

export function capitalizeStr(
  stringToCapatalize: string,
  toKebabCase: boolean = false
): string {
  return cpStr(stringToCapatalize, toKebabCase);
}

export function isStrEmpty(checkString: string): boolean {
    return isStrEpty(checkString);
}

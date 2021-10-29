import { isStrEmpty } from "./StrEmpty";

const capatalizeEachStr = (strToCapatalize: string): string => {
  if (strToCapatalize.slice(0, 1) === strToCapatalize.slice(0, 1).toUpperCase())
    return strToCapatalize;
  else
    return `${strToCapatalize.slice(0, 1).toUpperCase()}${strToCapatalize
      .slice(1)
      .toLocaleLowerCase()}`;
};

const joinArrayWithSpaces = (arrayToJoin: string[]): string =>
  arrayToJoin.join(" ");

export function capatalizeStr(
  stringToCapatalize: string,
  toKebabCase: boolean = false
): string {
  if (stringToCapatalize && !isStrEmpty(stringToCapatalize)) {
    const splittedString: string[] = stringToCapatalize.trim().split(" ");
    if (splittedString.length === 1) {
      return capatalizeEachStr(splittedString[0]);
    } else {
      if (toKebabCase) {
        const kebabCaseArray = splittedString.map((eachWord: string): string =>
          capatalizeEachStr(eachWord)
        );
        return joinArrayWithSpaces(kebabCaseArray);
      } else {
        return joinArrayWithSpaces([
          capatalizeEachStr(splittedString[0]),
          ...splittedString.slice(1),
        ]);
      }
    }
  }

  return stringToCapatalize;
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capatalizeStr = void 0;
const StrEmpty_1 = require("./StrEmpty");
const capatalizeEachStr = (strToCapatalize) => {
    if (strToCapatalize.slice(0, 1) === strToCapatalize.slice(0, 1).toUpperCase())
        return strToCapatalize;
    else
        return `${strToCapatalize.slice(0, 1).toUpperCase()}${strToCapatalize
            .slice(1)
            .toLowerCase()}`;
};
const joinArrayWithSpaces = (arrayToJoin) => arrayToJoin.join(" ");
function capatalizeStr(stringToCapatalize, toKebabCase = false) {
    if (stringToCapatalize && !(0, StrEmpty_1.isStrEmpty)(stringToCapatalize)) {
        const splittedString = stringToCapatalize.trim().split(" ");
        if (splittedString.length === 1) {
            return capatalizeEachStr(splittedString[0]);
        }
        else {
            if (toKebabCase) {
                const kebabCaseArray = splittedString.map((eachWord) => capatalizeEachStr(eachWord));
                return joinArrayWithSpaces(kebabCaseArray);
            }
            else {
                return joinArrayWithSpaces([
                    capatalizeEachStr(splittedString[0]),
                    ...splittedString.slice(1),
                ]);
            }
        }
    }
    return stringToCapatalize;
}
exports.capatalizeStr = capatalizeStr;
//# sourceMappingURL=StrCapatalize.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capatalizeStr = void 0;
var tslib_1 = require("tslib");
var StrEmpty_1 = require("./StrEmpty");
var capatalizeEachStr = function (strToCapatalize) {
    if (strToCapatalize.slice(0, 1) === strToCapatalize.slice(0, 1).toUpperCase())
        return strToCapatalize;
    else
        return "".concat(strToCapatalize.slice(0, 1).toUpperCase()).concat(strToCapatalize
            .slice(1)
            .toLowerCase());
};
var joinArrayWithSpaces = function (arrayToJoin) {
    return arrayToJoin.join(" ");
};
function capatalizeStr(stringToCapatalize, toKebabCase) {
    if (toKebabCase === void 0) { toKebabCase = false; }
    if (stringToCapatalize && !(0, StrEmpty_1.isStrEmpty)(stringToCapatalize)) {
        var splittedString = stringToCapatalize.trim().split(" ");
        if (splittedString.length === 1) {
            return capatalizeEachStr(splittedString[0]);
        }
        else {
            if (toKebabCase) {
                var kebabCaseArray = splittedString.map(function (eachWord) {
                    return capatalizeEachStr(eachWord);
                });
                return joinArrayWithSpaces(kebabCaseArray);
            }
            else {
                return joinArrayWithSpaces((0, tslib_1.__spreadArray)([
                    capatalizeEachStr(splittedString[0])
                ], splittedString.slice(1), true));
            }
        }
    }
    return stringToCapatalize;
}
exports.capatalizeStr = capatalizeStr;
//# sourceMappingURL=StrCapatalize.js.map
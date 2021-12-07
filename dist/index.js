"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isStrEmpty = exports.capatalizeStr = void 0;
const StrCapatalize_1 = require("./StrCapatalize");
const StrEmpty_1 = require("./StrEmpty");
function capatalizeStr(stringToCapatalize, toKebabCase = false) {
    return (0, StrCapatalize_1.capatalizeStr)(stringToCapatalize, toKebabCase);
}
exports.capatalizeStr = capatalizeStr;
function isStrEmpty(checkString) {
    return (0, StrEmpty_1.isStrEmpty)(checkString);
}
exports.isStrEmpty = isStrEmpty;
//# sourceMappingURL=index.js.map
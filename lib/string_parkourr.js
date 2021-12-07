"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isStrEmpty = exports.capitalizeStr = void 0;
var StrCapatalize_1 = require("./StrCapatalize");
var StrEmpty_1 = require("./StrEmpty");
function capitalizeStr(stringToCapatalize, toKebabCase) {
    if (toKebabCase === void 0) { toKebabCase = false; }
    return (0, StrCapatalize_1.capatalizeStr)(stringToCapatalize, toKebabCase);
}
exports.capitalizeStr = capitalizeStr;
function isStrEmpty(checkString) {
    return (0, StrEmpty_1.isStrEmpty)(checkString);
}
exports.isStrEmpty = isStrEmpty;
//# sourceMappingURL=string_parkourr.js.map
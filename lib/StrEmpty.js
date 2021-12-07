"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isStrEmpty = void 0;
function isStrEmpty(checkString) {
    if (checkString) {
        var trimmedString = checkString.trim();
        return trimmedString.length <= 0;
    }
    return true;
}
exports.isStrEmpty = isStrEmpty;
//# sourceMappingURL=StrEmpty.js.map
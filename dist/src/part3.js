"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnSquaredIfFoundEven_v3 = exports.returnSquaredIfFoundEven_v2 = exports.findResult = void 0;
/* Library code */
const findOrThrow = (pred, a) => {
    for (let i = 0; i < a.length; i++) {
        if (pred(a[i]))
            return a[i];
    }
    throw "No element found.";
};
const findResult = (pred, a) => undefined;
exports.findResult = findResult;
/* Client code */
const returnSquaredIfFoundEven_v1 = (a) => {
    try {
        const x = findOrThrow(x => x % 2 === 0, a);
        return x * x;
    }
    catch (e) {
        return -1;
    }
};
const returnSquaredIfFoundEven_v2 = (a) => undefined;
exports.returnSquaredIfFoundEven_v2 = returnSquaredIfFoundEven_v2;
const returnSquaredIfFoundEven_v3 = (a) => undefined;
exports.returnSquaredIfFoundEven_v3 = returnSquaredIfFoundEven_v3;
//# sourceMappingURL=part3.js.map
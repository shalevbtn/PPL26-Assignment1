"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.treeToSentence = exports.isPalindrome = exports.countVowels = void 0;
const R = require("ramda");
const stringToArray = R.split("");
/* Question 2.1 */
const vowels = ['a', 'e', 'i', 'o', 'u'];
exports.countVowels = undefined;
;
/* Question 2.2 */
const isPalindrome = (text) => {
    const cleanText = text.toLowerCase();
    const isAlphaNumeric = (char) => /[a-z0-9]/.test(char);
    const chars = stringToArray(text);
    const fixedChars = R.filter(isAlphaNumeric, chars);
    const reversedChars = R.reduceRight((acc, char) => char + acc, "", chars);
    return fixedChars.join('') === reversedChars;
};
exports.isPalindrome = isPalindrome;
const treeToSentence = (t) => undefined;
exports.treeToSentence = treeToSentence;
;
console.log((0, exports.isPalindrome)("HH"));
console.log((0, exports.isPalindrome)("A man, a plan, a canal, Pan!ama?"));
console.log((0, exports.isPalindrome)("Hello, World!"));
//# sourceMappingURL=part2.js.map
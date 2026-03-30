import * as R from "ramda";

const stringToArray = R.split("");

/* Question 2.1 */
const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
export const countVowels: (s: string) => number = undefined as any;;

/* Question 2.2 */
export const isPalindrome = (text: string): boolean => {
    const cleanText: string = text.toLowerCase();
    const isAlphaNumeric: (char: string) => boolean = (char: string) => /[a-z0-9]/.test(char);
    const chars: string[] = stringToArray(cleanText);
    const fixedChars: string[] = R.filter(isAlphaNumeric, chars);
    const reversedChars: string = R.reduceRight((acc:string, char: string) => char + acc, "", fixedChars)
    return fixedChars.join('') === reversedChars;
};
  

/* Question 2.3 */
export type WordTree = {
    root: string;
    children: WordTree[];
}

export const treeToSentence = (t: WordTree): string => undefined as any;;

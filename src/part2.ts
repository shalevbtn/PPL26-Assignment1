import * as R from "ramda";

const stringToArray = R.split("");

/* Question 2.1 */
const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
const isVowel = (char: string): boolean => vowels.includes(char);
export const countVowels: (s: string) => number = (s) => stringToArray(s).filter(isVowel).length;


/* Question 2.2 */
export const isPalindrome = (text: string): boolean => undefined as any;;
  

/* Question 2.3 */
export type WordTree = {
    root: string;
    children: WordTree[];
}

export const treeToSentence = (t: WordTree): string => R.reduce()

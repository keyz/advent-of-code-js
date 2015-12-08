import { input05 } from './inputs';

const vowels = ['a', 'e', 'i', 'o', 'u'];
const blacklist = ['ab', 'cd', 'pq', 'xy'];

const isNice01 = (str) => {
  let vowelCount = 0;
  let repetition = '';
  let possibleBlackIndex = -1;

  for (let i = 0; i < str.length; i++) {
    const ch = str[i];

    if (vowels.indexOf(ch) !== -1) {
      vowelCount++;
    }

    if (repetition !== true) {
      repetition = repetition === ch ? true : ch;
    }

    const blackWord = blacklist[possibleBlackIndex]; // could be undefined
    if (blackWord && ch === blackWord[1]) {
      return false;
    }

    possibleBlackIndex = blacklist.findIndex((word) => word[0] === ch);
  }

  return vowelCount >= 3 && repetition === true;
};

export const step01 = (inp) => inp.split('\n').filter(isNice01).length;

// alright enough state machine stuff
const isNice02 = (str) => /(..).*\1/.test(str) && /(.).\1/.test(str);

export const step02 = (inp) => inp.split('\n').filter(isNice02).length;

console.log(step01(input05));
console.log(step02(input05));

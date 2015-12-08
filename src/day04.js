import { md5 } from 'blueimp-md5';
import { input04 } from './inputs';

const countLeadingZeroes = (str) => {
  for (let i = 0, count = 0; i < str.length; i++) {
    if (str[i] !== '0') {
      return count;
    }
    count++;
  }
};

const solver = (input, zeroes) => {
  let guess = 0;
  while (countLeadingZeroes(md5(input + guess)) < zeroes) {
    guess++;
  }
  return guess;
};

console.log(solver(input04, 5));
console.log(solver(input04, 6));

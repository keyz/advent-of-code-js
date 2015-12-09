import { md5 } from 'blueimp-md5';

const countLeadingZeroes = (str) => {
  for (let i = 0, count = 0; i < str.length; i++) {
    if (str[i] !== '0') {
      return count;
    }
    count++;
  }
};

export const solver = (input, zeroes) => {
  let guess = 0;
  while (countLeadingZeroes(md5(input + guess)) < zeroes) {
    guess++;
  }
  return guess;
};

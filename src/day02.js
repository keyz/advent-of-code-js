import { input02 } from './inputs';
import { polySum, polyProd } from './Poly';

/*
 * getCombinations :: [number] -> [[number]]
 * [1, 2, 3] => [[1, 2], [1, 3], [2, 3]]
 */
const getCombinations = (ls) => ls.reduce((res, x, idx) => [
  ...res,
  ...ls.slice(idx + 1).map((y) => [x, y]),
], []);

const sorter = (f) => (ls) => { // not-in-place sorting
  // babel compiles `[...seq]` down to `[].concat(seq)`
  return [...ls].sort(f);
};

const sort = sorter((x, y) => x - y);

const parser = (str) => str.split('\n').map((line) => line.split('x').map((numStr) => parseInt(numStr, 10)));

export const step1 = (str) => {
  // [[x, y, z], ...]
  const lines = parser(str);

  const formula = (dimension) => { // dimension must be sorted
    const pairs = getCombinations(dimension);
    const wrapping = polySum(pairs.map(([x, y]) => 2 * x * y));
    const slack = polyProd(pairs[0]);
    return wrapping + slack;
  };

  return polySum(lines.map((dimension) => formula(sort(dimension))));
};

export const step2 = (str) => {
  // [[x, y, z], ...]
  const lines = parser(str);

  const formula = (dimension) => { // dimension must be sorted
    const wrapping = 2 * (dimension[0] + dimension[1]);
    const bow = polyProd(dimension);
    return wrapping + bow;
  };

  return polySum(lines.map((dimension) => formula(sort(dimension))));
};

console.log(step1(input02));
console.log(step2(input02));

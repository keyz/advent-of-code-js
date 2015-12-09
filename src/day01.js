import { polyReduce } from './Poly';

export const step1 = (str) => polyReduce(
  str,
  (floor, x) => x === '(' ? floor + 1 : floor - 1,
  0
);

export const step2 = (str) => {
  const loop = (floor, idx) => {
    const nextFloor = str[idx] === '(' ? floor + 1 : floor - 1;

    if (nextFloor === -1) {
      return idx + 1;
    }

    return loop(nextFloor, idx + 1); // tail recursion
  };

  return loop(0, 0);
};

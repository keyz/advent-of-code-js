// we don't actually need to build the string.

export const lookAndSay = (inp) => {
  let result = '';
  let count = 1;

  for (let i = 1; i < inp.length; i++) {
    const cur = inp[i];
    if (cur === inp[i - 1]) {
      count++;
    } else {
      result += count + inp[i - 1];
      count = 1;
    }
  }

  result += count + inp[inp.length - 1];
  return result;
};

export const step1 = (inp) => Array.from(new Array(40), () => 0).reduce(
  (acc) => lookAndSay(acc),
  inp,
).length;

export const step2 = (inp) => Array.from(new Array(50), () => 0).reduce(
  (acc) => lookAndSay(acc),
  inp,
).length;


const blacklist = ['i', 'o', 'l'];

const increaseChar = (ch) => String.fromCodePoint(ch.codePointAt(0) + 1);

const increase = (str) => {
  const len = str.length;

  if (len === 0) {
    return 'a';
  }

  if (str[len - 1] === 'z') {
    return increase(str.slice(0, -1)) + 'a';
  }

  return str.slice(0, -1) + increaseChar(str.slice(-1));
};

export const isValid = (str) => {
  let increments = 0;
  let duplicates = 0;
  let lastDupChar = false;

  if (blacklist.includes(str[0])) {
    return false;
  }

  for (let i = 1; i < str.length; i++) {
    const [cur, prev] = [str[i], str[i - 1]];

    if (blacklist.includes(cur)) {
      return false;
    }

    if (duplicates < 2) {
      if (cur === prev && cur !== lastDupChar) {
        duplicates++;
        lastDupChar = cur;
      }
    }

    if (increments < 2) {
      if (increaseChar(prev) === cur) {
        increments++;
      } else {
        increments = 0;
      }
    }
  }

  return (duplicates >= 2) && (increments >= 2);
};

export const step1 = (inp) => {
  let result = inp;
  while (!isValid(result)) {
    for (let i = 0; i < result.length; i++) {
      const cur = result[i];
      if (blacklist.includes(cur)) { // fast forward
        result = result.slice(0, i) + increase(cur) + 'a'.repeat(result.length - i - 1);
        if (isValid(result)) {
          return result;
        }
      }
    }

    result = increase(result);
  }

  return result;
};

export const step2 = (inp) => step1(increase(step1(inp)));

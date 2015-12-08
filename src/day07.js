// oh yeah this is just an interpreter
import { input07 } from './inputs';

const isNum = (str) => !isNaN(str);
const tryParseInt = (str) => isNum(str) ? parseInt(str, 10) : str;

const operators = {
  AND: (x, y) => x & y,
  OR: (x, y) => x | y,
  LSHIFT: (x, y) => x << y,
  RSHIFT: (x, y) => x >> y,
  NOT: (x) => ~x,
};

const valueOf = (exp, instEnv, cacheEnv) => {
  if (isNum(exp)) {
    return exp;
  } else if (typeof exp === 'string') { // found a var
    if (cacheEnv.hasOwnProperty(exp)) {
      return cacheEnv[exp];
    }

    cacheEnv[exp] = valueOf(instEnv[exp], instEnv, cacheEnv); // let's cache it
    return cacheEnv[exp];
  }

  // ok so it's an application
  const op = operators[exp[0]];
  return op.apply(
    null,
    exp.slice(1).map((x) => valueOf(x, instEnv, cacheEnv)),
  );
};

const parser = (lines) => lines.split('\n').map((line) => {
  const [exp, target] = line.split(' -> ');
  const tokens = exp.split(' ').map(tryParseInt);

  if (tokens.length === 1) {
    return {
      [target]: tokens[0],
    };
  } else if (tokens.length === 2) {
    return {
      [target]: tokens, // ['NOT', _]
    };
  }

  return {
    [target]: [tokens[1], tokens[0], tokens[2]],
  };
}).reduce((res, singleObj) => ({
  ...singleObj,
  ...res,
}), {});

const step1 = (inp) => valueOf('a', parser(inp), {});
const step2 = (inp) => valueOf('a', parser(inp), { b: 46065 });

console.log(step1(input07));
console.log(step2(input07));

// oh yeah this is just an interpreter

const isNum = (str) => !isNaN(str);
const tryParseInt = (str) => isNum(str) ? parseInt(str, 10) : str;

const operators = {
  AND: (x, y) => x & y,
  OR: (x, y) => x | y,
  LSHIFT: (x, y) => x << y,
  RSHIFT: (x, y) => x >> y,
  NOT: (x) => {
    const not = ~x;
    return not < 0 ? not + 65536 : not;
  },
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
      [target]: tokens[0], // x
    };
  } else if (tokens.length === 2) {
    return {
      [target]: tokens, // ['NOT', _]
    };
  }

  return {
    [target]: [tokens[1], tokens[0], tokens[2]], // [OP, x, y]
  };
}).reduce((res, singleObj) => ({
  ...singleObj,
  ...res,
}), {});

export const lookup = (target) => (inp) => valueOf(target, parser(inp), {});
export const step1 = (inp) => valueOf('a', parser(inp), {});
export const step2 = (inp) => valueOf('a', parser(inp), { b: 46065 });

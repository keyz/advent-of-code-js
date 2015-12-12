const loop = (data, blacklist = []) => {
  if (typeof data === 'number') {
    return data;
  } else if (Array.isArray(data)) {
    return data.reduce(
      (acc, x) => loop(x, blacklist) + acc,
      0,
    );
  } else if (typeof data === 'object') {
    if (blacklist.some((x) => Object.values(data).includes(x))) {
      return 0;
    }

    return Object.keys(data).reduce(
      (acc, key) => loop(data[key], blacklist) + acc,
      0,
    );
  }

  return 0;
};

export const step1 = (inp) => loop(JSON.parse(inp));
export const step2 = (inp) => loop(JSON.parse(inp), ['red']);

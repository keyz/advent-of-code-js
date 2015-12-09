// oh man. it's just an undirected graph.

const getPermutations = (inp) => { // not-in-place
  const result = [];
  const stack = [];

  const loop = (ls) => {
    if (ls.length === 0) {
      result.push([...stack]);
    }

    for (let i = 0; i < ls.length; i++) {
      const [cur] = ls.splice(i, 1);
      stack.push(cur);

      loop(ls);
      stack.pop();

      ls.splice(i, 0, cur); // add it back
    }
  };

  loop([...inp]);
  return result;
};

const tokenizer = (str) => str.split('\n').map((line) => line.split(/\sto\s|\s=\s/));

const getPossibleDists = (inp) => {
  const cities = [];
  const distances = tokenizer(inp).reduce((res, trip) => {
    const [from, to, dist] = trip;
    if (res[from]) {
      res[from][to] = parseInt(dist, 10);
    } else {
      res[from] = { [to]: parseInt(dist, 10) };
    }

    if (!cities.includes(from)) {
      cities.push(from);
    } else if (!cities.includes(to)) {
      cities.push(to);
    }

    return res;
  }, {});

  const perm = getPermutations(cities);

  return perm.map((route) => route.reduce((total, city, i) => {
    if (i === route.length - 1) {
      return total;
    }

    const [from, to] = [route[i], route[i + 1]];
    return total + (distances[from] && distances[from][to] ?
      distances[from][to] :
      distances[to][from]);
  }, 0));
};

export const step1 = (inp) => Math.min(...getPossibleDists(inp));
export const step2 = (inp) => Math.max(...getPossibleDists(inp));

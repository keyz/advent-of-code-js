import { input06 } from './inputs';
import { polySum } from './Poly';

const parser = (str) => str.split('\n').map( // returns a callback (that mutates the grid) for each line
  (line) => {
    const tokens = line.split(/[ ,]/);

    if (tokens[0] === 'toggle') {
      const from = [parseInt(tokens[1], 10), parseInt(tokens[2], 10)];
      const through = [parseInt(tokens[4], 10), parseInt(tokens[5], 10)];

      return (grid) => {
        for (let i = from[0]; i <= through[0]; i++) {
          for (let j = from[1]; j <= through[1]; j++) {
            grid[i][j].on = !grid[i][j].on;
            grid[i][j].brightness = grid[i][j].brightness + 2;
          }
        }
      };
    }

    const from = [parseInt(tokens[2], 10), parseInt(tokens[3], 10)];
    const through = [parseInt(tokens[5], 10), parseInt(tokens[6], 10)];

    return (grid) => {
      for (let i = from[0]; i <= through[0]; i++) {
        for (let j = from[1]; j <= through[1]; j++) {
          grid[i][j].on = tokens[1] === 'on' ? true : false;

          if (tokens[1] === 'on') {
            grid[i][j].brightness = grid[i][j].brightness + 1;
          } else {
            grid[i][j].brightness = grid[i][j].brightness === 0 ? 0 : grid[i][j].brightness - 1;
          }
        }
      }
    };
  }
);

const step01 = (inp) => {
  const grid = Array.from(
    new Array(1000),
    () => Array.from(
      new Array(1000), () => ({ on: false, brightness: 0 }),
    ),
  );

  parser(inp).forEach((fn) => { fn(grid); });

  return polySum(
    grid.map((line) => line.filter((x) => x.on).length)
  );
};

const step02 = (inp) => {
  const grid = Array.from(
    new Array(1000),
    () => Array.from(
      new Array(1000), () => ({ on: false, brightness: 0 }),
    ),
  );

  parser(inp).forEach((fn) => { fn(grid); });

  return polySum(
    grid.map((line) => polySum(line.map((x) => x.brightness)))
  );
};


console.log(step01(input06));
console.log(step02(input06));

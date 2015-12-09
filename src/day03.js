/*
 * generators, yeah
 */

import { polyReduce } from './Poly';

const handlers = {
  '>': ([x, y]) => [x + 1, y],
  '<': ([x, y]) => [x - 1, y],
  '^': ([x, y]) => [x, y + 1],
  'v': ([x, y]) => [x, y - 1],
};

function* stepperGen(startPos) { // you said infinity
  let pos = startPos;
  const cache = {};

  while (1) { // eslint-disable-line no-constant-condition
    const posStr = JSON.stringify(pos, null, 0);
    cache[posStr] = typeof cache[posStr] === 'undefined' ? 1 : cache[posStr] + 1;

    const inst = yield cache;
    if (inst) {
      pos = handlers[inst](pos);
    }
  }
}

export const step1 = (str) => {
  const santa = stepperGen([0, 0]);

  return Object.keys(polyReduce(
    str,
    (_, inst) => santa.next(inst).value,
    santa.next().value,
  )).length;
};

export const step2 = (str) => {
  const santa = stepperGen([0, 0]);
  const robo = stepperGen([0, 0]);

  return Object.keys(Object.assign({}, ...polyReduce(
    str,
    (res, inst, idx) => idx % 2 ?
      [santa.next(inst).value, res[1]] :
      [res[0], robo.next(inst).value],
    [santa.next().value, robo.next().value],
  ))).length;
};

/*
 * hmm. these guys are not so efficient at the moment
 * but generators are so cool...
 */

import { input03 } from './inputs';
import { polyForEach } from './Poly';

const handlers = {
  '>': ([x, y]) => [x + 1, y],
  '<': ([x, y]) => [x - 1, y],
  '^': ([x, y]) => [x, y + 1],
  'v': ([x, y]) => [x, y - 1],
};

function* stepperGen(startPos) { // you said infinity
  let pos = startPos;
  const cache = {};

  while (1) { // here it is
    const posStr = JSON.stringify(pos, null, 0);
    cache[posStr] = typeof cache[posStr] === 'undefined' ? 1 : cache[posStr] + 1;

    const inst = yield cache;
    if (inst) {
      pos = handlers[inst](pos);
    }
  }
}

const step1 = (str) => {
  const santa = stepperGen([0, 0]);
  let scores = santa.next().value;

  polyForEach(
    str,
    (inst) => { scores = santa.next(inst).value; }
  );

  return Object.keys(scores).length;
};

console.log(step1(input03));

const step2 = (str) => {
  const santa = stepperGen([0, 0]);
  const robo = stepperGen([0, 0]);
  let santaScores = santa.next().value;
  let roboScores = robo.next().value;

  polyForEach(
    str,
    (inst, idx) => {
      if (idx % 2) {
        santaScores = santa.next(inst).value;
      } else {
        roboScores = robo.next(inst).value;
      }
    }
  );

  return Object.keys({
    ...santaScores,
    ...roboScores,
  }).length;
};

console.log(step2(input03));

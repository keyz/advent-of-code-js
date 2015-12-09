import { polySum } from './Poly';

const encodingPatterns = [
  [/^"(.*)"$/, '$1'],
  [/\\\\/g, '\\'],
  [/\\\"/g, '"'],
  [/\\x([0-9A-Fa-f]{2})/g, (_, code) => String.fromCodePoint(parseInt(code, 16))],
];

const encode = (rawStr) => {
  return encodingPatterns.reduce(
    (acc, rules) => acc.replace(...rules),
    rawStr,
  );
};

export const step1 = (inp) => polySum(inp.split('\n').map(
  (rawLine) => rawLine.length - encode(rawLine).length,
));

export const step2 = (inp) => polySum(inp.split('\n').map(
  (rawLine) => JSON.stringify(rawLine).length - rawLine.length,
));

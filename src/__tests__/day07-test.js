jest.dontMock('../day07');

const { lookup } = require('../day07');

describe('day 07', () => {
  it('should produce the correct bindings', () => {
    const result = {
      d: 72,
      e: 507,
      f: 492,
      g: 114,
      h: 65412,
      i: 65079,
      x: 123,
      y: 456,
    };

    const testData = `123 -> x
456 -> y
x AND y -> d
x OR y -> e
x LSHIFT 2 -> f
y RSHIFT 2 -> g
NOT x -> h
NOT y -> i`;

    Object.keys(result).forEach((key) => {
      expect(lookup(key)(testData)).toBe(result[key]);
    });
  });
});

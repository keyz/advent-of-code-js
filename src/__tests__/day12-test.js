jest.dontMock('../day12');

const { step1, step2 } = require('../day12');

describe('day 12 step1', () => {
  it('[1,2,3] -> 6', () => {
    expect(step1('[1,2,3]')).toBe(6);
  });

  it('{"a":2,"b":4} -> 6', () => {
    expect(step1('{"a":2,"b":4}')).toBe(6);
  });

  it('[[[3]]] -> 3', () => {
    expect(step1('[[[3]]]')).toBe(3);
  });

  it('{"a":{"b":4},"c":-1} -> 3', () => {
    expect(step1('{"a":{"b":4},"c":-1}')).toBe(3);
  });

  it('{"a":[-1,1]} -> 0', () => {
    expect(step1('{"a":[-1,1]}')).toBe(0);
  });

  it('[-1,{"a":1}] -> 0', () => {
    expect(step1('[-1,{"a":1}]')).toBe(0);
  });

  it('[] -> 0', () => {
    expect(step1('[]')).toBe(0);
  });

  it('{} -> 0', () => {
    expect(step1('{}')).toBe(0);
  });
});

describe('day 12 step2', () => {
  it('[1,2,3] -> 6', () => {
    expect(step2('[1,2,3]')).toBe(6);
  });

  it('[1,{"c":"red","b":2},3] -> 4', () => {
    expect(step2('[1,{"c":"red","b":2},3]')).toBe(4);
  });

  it('{"d":"red","e":[1,2,3,4],"f":5} -> 0', () => {
    expect(step2('{"d":"red","e":[1,2,3,4],"f":5}')).toBe(0);
  });

  it('[1,"red",5] -> 6', () => {
    expect(step2('[1,"red",5]')).toBe(6);
  });
});

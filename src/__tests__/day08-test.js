jest.dontMock('../day08');
jest.dontMock('../Poly');

const { step1, step2 } = require('../day08');

describe('day 08 step1', () => {
  it(`${String.raw`""`} -> 2`, () => {
    expect(step1(String.raw`""`)).toBe(2);
  });
  it(`${String.raw`"abc"`} -> 2`, () => {
    expect(step1(String.raw`"abc"`)).toBe(2);
  });
  it(`${String.raw`"aaa\"aaa"`} -> 3`, () => {
    expect(step1(String.raw`"aaa\"aaa"`)).toBe(3);
  });
  it(`${String.raw`"\x27"`} -> 5`, () => {
    expect(step1(String.raw`"\x27"`)).toBe(5);
  });
});

describe('day 08 step2', () => {
  it(`${String.raw`""`} -> 4`, () => {
    expect(step2(String.raw`""`)).toBe(4);
  });
  it(`${String.raw`"abc"`} -> 4`, () => {
    expect(step2(String.raw`"abc"`)).toBe(4);
  });
  it(`${String.raw`"aaa\"aaa"`} -> 6`, () => {
    expect(step2(String.raw`"aaa\"aaa"`)).toBe(6);
  });
  it(`${String.raw`"\x27"`} -> 5`, () => {
    expect(step2(String.raw`"\x27"`)).toBe(5);
  });
});

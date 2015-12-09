jest.dontMock('../day01');
jest.dontMock('../Poly');

const { step1, step2 } = require('../day01');

describe('day 01 step1', () => {
  it(')())()) -> 0', () => {
    expect(step1(')())())')).toBe(-3);
  });
  it('))) -> 0', () => {
    expect(step1(')))')).toBe(-3);
  });
  it('))( -> 3', () => {
    expect(step1('))(')).toBe(-1);
  });
  it('()) -> 3', () => {
    expect(step1('())')).toBe(-1);
  });
  it('))((((( -> 3', () => {
    expect(step1('))(((((')).toBe(3);
  });
  it('(()(()( -> -1', () => {
    expect(step1('(()(()(')).toBe(3);
  });
  it('((( -> -1', () => {
    expect(step1('(((')).toBe(3);
  });
  it('()() -> -3', () => {
    expect(step1('()()')).toBe(0);
  });
  it('(()) -> -3', () => {
    expect(step1('(())')).toBe(0);
  });
});

describe('day 01 step2', () => {
  it(') -> 1', () => {
    expect(step2(')')).toBe(1);
  });
  it('()()) -> 5', () => {
    expect(step2('()())')).toBe(5);
  });
});

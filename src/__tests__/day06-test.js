jest.dontMock('../day06');
jest.dontMock('../Poly');

const { step1, step2 } = require('../day06');

describe('day 06 step1', () => {
  it('turn on 0,0 through 999,999 -> 1000 * 1000', () => {
    expect(step1('turn on 0,0 through 999,999')).toBe(1000 * 1000);
  });
  it('toggle 0,0 through 999,0 -> 1000', () => {
    expect(step1('toggle 0,0 through 999,0')).toBe(1000);
  });
  it('turn off 499,499 through 500,500 -> 0', () => {
    expect(step1('turn off 499,499 through 500,500')).toBe(0);
  });
});

describe('day 06 step2', () => {
  it('turn on 0,0 through 0,0 -> 1', () => {
    expect(step2('turn on 0,0 through 0,0')).toBe(1);
  });
  it('toggle 0,0 through 999,999 -> 2000000', () => {
    expect(step2('toggle 0,0 through 999,999')).toBe(2000000);
  });
});

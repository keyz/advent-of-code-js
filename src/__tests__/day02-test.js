jest.dontMock('../day02');
jest.dontMock('../Poly');

const { step1, step2 } = require('../day02');

describe('day 02 step1', () => {
  it('2x3x4 -> 58', () => {
    expect(step1('2x3x4')).toBe(58);
  });
  it('1x1x10 -> 43', () => {
    expect(step1('1x1x10')).toBe(43);
  });
});

describe('day 02 step2', () => {
  it('2x3x4 -> 34', () => {
    expect(step2('2x3x4')).toBe(34);
  });
  it('1x1x10 -> 14', () => {
    expect(step2('1x1x10')).toBe(14);
  });
});

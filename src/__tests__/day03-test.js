jest.dontMock('../day03');
jest.dontMock('../Poly');

const { step1, step2 } = require('../day03');

describe('day 03 step1', () => {
  it('> -> 2', () => {
    expect(step1('>')).toBe(2);
  });
  it('^>v< -> 4', () => {
    expect(step1('^>v<')).toBe(4);
  });
  it('^v^v^v^v^v -> 2', () => {
    expect(step1('^v^v^v^v^v')).toBe(2);
  });
});

describe('day 03 step2', () => {
  it('^v -> 3', () => {
    expect(step2('^v')).toBe(3);
  });
  it('^>v< -> 3', () => {
    expect(step2('^>v<')).toBe(3);
  });
  it('^v^v^v^v^v -> 11', () => {
    expect(step2('^v^v^v^v^v')).toBe(11);
  });
});

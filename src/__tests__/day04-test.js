jest.dontMock('../day04');

const { solver } = require('../day04');

describe('day 04', () => {
  it('abcdef, 5 -> 609043', () => {
    expect(solver('abcdef', 5)).toBe(609043);
  });
  it('pqrstuv, 5 -> 1048970', () => {
    expect(solver('pqrstuv', 5)).toBe(1048970);
  });
});

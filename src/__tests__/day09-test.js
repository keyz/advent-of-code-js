jest.dontMock('../day09');

const { step1, step2 } = require('../day09');

const inp = `London to Dublin = 464
London to Belfast = 518
Dublin to Belfast = 141`;

describe('day 09 step1', () => {
  it('example -> 605', () => {
    expect(step1(inp)).toBe(605);
  });
});

describe('day 09 step2', () => {
  it('example -> 605', () => {
    expect(step2(inp)).toBe(982);
  });
});

jest.dontMock('../day10');

const { lookAndSay } = require('../day10');

describe('day 10 lookAndSay', () => {
  it('1 -> 11', () => {
    expect(lookAndSay('1')).toBe('11');
  });
  it('11 -> 21', () => {
    expect(lookAndSay('11')).toBe('21');
  });
  it('21 -> 1211', () => {
    expect(lookAndSay('21')).toBe('1211');
  });
  it('1211 -> 111221', () => {
    expect(lookAndSay('1211')).toBe('111221');
  });
  it('111221 -> 312211', () => {
    expect(lookAndSay('111221')).toBe('312211');
  });
});

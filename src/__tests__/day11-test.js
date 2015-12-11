jest.dontMock('../day11');

const { isValid, step1 } = require('../day11');

describe('day 11 isValid', () => {
  it('hijklmmn -> false', () => {
    expect(isValid('hijklmmn')).toBe(false);
  });
  it('abbceffg -> false', () => {
    expect(isValid('abbceffg')).toBe(false);
  });
  it('abbcegjk -> false', () => {
    expect(isValid('abbcegjk')).toBe(false);
  });
});

describe('day 11 step1', () => {
  it('abcdefgh -> abcdffaa', () => {
    expect(step1('abcdefgh')).toBe('abcdffaa');
  });
  it('ghijklmn -> ghjaabcc', () => {
    expect(step1('ghijklmn')).toBe('ghjaabcc');
  });
});

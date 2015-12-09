jest.dontMock('../day05');

const { step1, step2 } = require('../day05');

describe('day 05 step1', () => {
  it('ugknbfddgicrmopn -> 1', () => {
    expect(step1('ugknbfddgicrmopn')).toBe(1);
  });
  it('aaa -> 1', () => {
    expect(step1('aaa')).toBe(1);
  });
  it('jchzalrnumimnmhp -> 0', () => {
    expect(step1('jchzalrnumimnmhp')).toBe(0);
  });
  it('haegwjzuvuyypxyu -> 0', () => {
    expect(step1('haegwjzuvuyypxyu')).toBe(0);
  });
  it('dvszwmarrgswjxmb -> 0', () => {
    expect(step1('dvszwmarrgswjxmb')).toBe(0);
  });
});

describe('day 05 step2', () => {
  it('qjhvhtzxzqqjkmpb -> 1', () => {
    expect(step2('qjhvhtzxzqqjkmpb')).toBe(1);
  });
  it('xxyxx -> 1', () => {
    expect(step2('xxyxx')).toBe(1);
  });
  it('uurcxstgmygtbstg -> 0', () => {
    expect(step2('uurcxstgmygtbstg')).toBe(0);
  });
  it('ieodomkazucvgmuy -> 0', () => {
    expect(step2('ieodomkazucvgmuy')).toBe(0);
  });
});

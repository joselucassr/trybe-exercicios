const { sumEx } = require('./sumEx');

describe('Tests sum function', () => {
  it('Returns 9 as the sum of 4 and 5.', () => {
    expect(sumEx(4, 5)).toBe(9);
  });
});

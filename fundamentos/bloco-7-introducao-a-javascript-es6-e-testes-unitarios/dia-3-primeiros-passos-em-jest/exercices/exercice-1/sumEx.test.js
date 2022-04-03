const { it, expect } = require('@jest/globals');
const { sumEx } = require('./sumEx');

describe('Tests sum function', () => {
  it('Returns 9 as the sum of 4 and 5.', () => {
    expect(sumEx(4, 5)).toBe(9);
  });

  it('Return 0 as the sum of 0 and 0', () => {
    expect(sumEx(0, 0)).toBe(0);
  });

  it('Throws an error when the parameters are 4 and "5"', () => {
    expect(() => sumEx(4, '5')).toThrow();
  });

  it('Throws an error with the message "parameters must be numbers" when passing 4 and "5"', () => {
    expect(() => sumEx(4, '5')).toThrowError(
      new Error('parameters must be numbers'),
    );
  });
});

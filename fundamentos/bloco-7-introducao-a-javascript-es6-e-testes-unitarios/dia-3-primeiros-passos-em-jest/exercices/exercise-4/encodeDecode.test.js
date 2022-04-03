const { describe, it, expect } = require('@jest/globals');
const { encode, decode } = require('./encodeDecode');

describe('Tests the encode and decode functions', () => {
  it('Checks if encode is a function.', () => {
    expect(typeof encode).toBe('function');
  });

  it('Checks if decode is a function.', () => {
    expect(typeof decode).toBe('function');
  });

  it('Encode returns "12345" when passing: "aeiou"', () => {
    expect(encode('aeiou')).toBe('12345');
  });
});

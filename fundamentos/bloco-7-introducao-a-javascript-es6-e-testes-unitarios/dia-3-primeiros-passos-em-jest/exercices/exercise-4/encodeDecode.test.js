const { describe, it, expect } = require('@jest/globals');
const { encode, decode } = require('./encodeDecode');

describe('Tests the encode and decode functions', () => {
  it('Checks if encode is a function.', () => {
    expect(typeof encode).toBe('function');
  });

  it('Checks if decode is a function.', () => {
    expect(typeof decode).toBe('function');
  });

  it('Encode returns "12345" when passing: "aeiou".', () => {
    expect(encode('aeiou')).toBe('12345');
  });

  it('Decode returns "aeiou" when passing: "12345".', () => {
    expect(decode('12345')).toBe('aeiou');
  });

  it('Encode returns "12345bcd" when passing: "aeioubcd".', () => {
    expect(encode('aeioubcd')).toBe('12345bcd');
  });

  it('Decode returns "aeioubcd" when passing: "12345bcd".', () => {
    expect(decode('12345bcd')).toBe('aeioubcd');
  });

  it('Encode returns a string of the same lenght as the one passed.', () => {
    expect(encode('aeioubcd')).toHaveLength(8);
  });

  it('Decode returns a string of the same lenght as the one passed.', () => {
    expect(decode('12345bcd')).toHaveLength(8);
  });
});

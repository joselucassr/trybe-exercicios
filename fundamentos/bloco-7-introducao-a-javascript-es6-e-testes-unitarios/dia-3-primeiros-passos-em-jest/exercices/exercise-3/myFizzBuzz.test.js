const { describe, expect, it } = require('@jest/globals');
const { myFizzBuzz } = require('./myFizzBuzz');

describe('Tests the function myFizzBuzz', () => {
  it('Returns fizzbuzz when passing: 15.', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  it('Returns fizz when passing: 9.', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });

  it('Returns buzz when passing: 25.', () => {
    expect(myFizzBuzz(25)).toBe('buzz');
  });

  it('Returns 4 when passing: 4.', () => {
    expect(myFizzBuzz(4)).toBe(4);
  });

  it('Returns false when passing: "a".', () => {
    expect(myFizzBuzz('a')).toBe(false);
  });
});

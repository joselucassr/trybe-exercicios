const { describe, expect } = require('@jest/globals');
const { myFizzBuzz } = require('./myFizzBuzz');

describe('Tests the function myFizzBuzz', () => {
  it('Returns fizzbuzz when passing 15.', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  it('Returns fizz when passing 9.', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });
});

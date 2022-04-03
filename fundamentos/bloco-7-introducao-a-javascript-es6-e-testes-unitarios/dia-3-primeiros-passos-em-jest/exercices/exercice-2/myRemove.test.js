const { describe, it, expect } = require('@jest/globals');
const { myRemove } = require('./myRemove');

describe('Tests the myRemove function', () => {
  it('Removes the number 3 from the array: [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toContain(3);
  });

  it("It's not the same array after passing: [1, 2, 3, 4], 3", () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
});

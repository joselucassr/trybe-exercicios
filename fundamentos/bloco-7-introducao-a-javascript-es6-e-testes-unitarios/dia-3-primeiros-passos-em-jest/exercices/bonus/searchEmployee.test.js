const { describe, expect } = require('@jest/globals');
const searchEmployee = require('./searchEmployee');

describe('Tests the searchEmployee function', () => {
  it('Function searchEmployee exists.', () => {
    expect(typeof searchEmployee).toBe('function');
  });

  it('Returns the firstName of the id: "8579-6".', () => {
    expect(searchEmployee('8579-6', 'firstName')).toBe('Ana');
  });

  it('Throws "ID não identificada" when passing: "0000-0".', () => {
    expect(() => searchEmployee('0000-0', 'firstname')).toThrowError(
      new Error('ID não identificada'),
    );
  });

  it('Throws "Informação indisponível" when passing: "address".', () => {
    expect(() => searchEmployee('8579-6', 'address')).toThrowError(
      new Error('Informação indisponível'),
    );
  });
});

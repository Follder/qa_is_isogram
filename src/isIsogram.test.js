'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`'true' when we have different letters`, () => {
    expect(isIsogram('abcde')).toBe(true);
  });

  it(`'true' when we have empty sting`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`'false' when we have similar letters`, () => {
    expect(isIsogram('damask')).toBe(false);
  });

  it(`'false' when we have similar letters with different case`, () => {
    expect(isIsogram('Ana')).toBe(false);
  });

  it(`'false' when we have similar numbers`, () => {
    expect(isIsogram('dima1991')).toBe(false);
  });
});

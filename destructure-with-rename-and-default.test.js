const destructure = require('./destructure-with-rename-and-default');

describe('destructure-with-rename-and-default', () => {
  test('that a default value is returned', () => {
    expect(destructure({})).toBe('destructured');
  });

  test('that the default value can be overridden', () => {
    expect(destructure({ destructured: 'foo' })).toBe('foo');
  });
});

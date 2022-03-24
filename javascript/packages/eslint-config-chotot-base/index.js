module.exports = {
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/style',
    './rules/variables',
    './rules/es6',
    './rules/imports',
    './rules/strict',
    './rules/chotot',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {},
};

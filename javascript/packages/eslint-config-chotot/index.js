module.exports = {
  extends: [
    'eslint-config-chotot-base',
    './rules/react',
    './rules/react-hooks',
    './rules/react-a11y',
  ].map(require.resolve),
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {}
};

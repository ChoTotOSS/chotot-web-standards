module.exports = {
  extends: [
    'eslint-config-chotot-base',
    './rules/react',
    './rules/react-hooks',
    './rules/react-a11y',
  ].map(require.resolve),
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {}
};

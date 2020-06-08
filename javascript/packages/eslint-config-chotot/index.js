module.exports = {
  extends: [
    'eslint-config-chotot-base',
    './rules/chotot',
    './rules/react',
    './rules/react-a11y',
  ].map(require.resolve),
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {}
};

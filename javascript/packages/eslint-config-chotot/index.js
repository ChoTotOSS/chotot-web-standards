module.exports = {
  extends: [
    'eslint-config-chotot-base',
    './rules/react',
    './rules/react-a11y',
  ].map(require.resolve),
  rules: {}
};

/**
 * Hooks is now part of `chotot` config. No need to extend this rule set
 * @deprecated
 */
console.warn('DEPRECATED: Hooks is now part of `chotot` config. No need to extend this rule set');

module.exports = {
  extends: [
    './rules/react-hooks.js',
  ].map(require.resolve),
  rules: {}
};

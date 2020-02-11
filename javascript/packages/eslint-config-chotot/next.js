/**
 * In .eslintrc.js, declare like this:
 * {
 *   extends: [ 'chotot', 'chotot/next' ]
 * }
 */
module.exports = {
  extends: [
    './rules/next.js',
  ].map(require.resolve),
  rules: {}
};

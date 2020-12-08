module.exports = {
  env: {
    node: true
  },

  rules: {
    // disallow use of the Buffer() constructor
    // https://eslint.org/docs/rules/no-buffer-constructor
    // deprecated: moved to eslint-plugin-node
    'no-buffer-constructor': 'error',

    // disallow use of new operator with the require function
    // deprecated: moved to eslint-plugin-node
    'no-new-require': 'error',

    // disallow string concatenation with __dirname and __filename
    // https://eslint.org/docs/rules/no-path-concat
    // deprecated: moved to eslint-plugin-node
    'no-path-concat': 'error',
  }
};

module.exports = {
  rules: {
    'no-empty-catch': require('./rules/no-empty-catch'),
    'filepath-no-ads': require('./rules/filepath-no-ads'),
    'no-abusive-eslint-disable': require('./rules/no-abusive-eslint-disable'),
    'no-unsafe-regex': require('./rules/no-unsafe-regex'),
    'no-instanceof-array': require('./rules/no-instanceof-array'),
    'filename-case': require('./rules/filename-case'),
  },
  configs: {
    recommended: {
      plugins: ['@chotot/chotot'],
      rules: {
        '@chotot/chotot/no-empty-catch': 'error',
        '@chotot/chotot/filepath-no-ads': 'error',
        '@chotot/chotot/no-abusive-eslint-disable': 'error',
        '@chotot/chotot/no-unsafe-regex': 'error',
        '@chotot/chotot/no-instanceof-array': 'error',
      },
    },
  },
};

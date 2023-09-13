module.exports = {
  rules: {
    'no-empty-catch': require('./rules/no-empty-catch'),
    'filepath-no-ads': require('./rules/filepath-no-ads'),
    'no-abusive-eslint-disable': require('./rules/no-abusive-eslint-disable'),
    'no-unsafe-regex': require('./rules/no-unsafe-regex'),
    'no-instanceof-array': require('./rules/no-instanceof-array'),
    'filename-case': require('./rules/filename-case'),
    'no-nested-ternary': require('./rules/no-nested-ternary'),
    'no-this-assignment': require('./rules/no-this-assignment'),
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
        '@chotot/chotot/filename-case': 'error',
        '@chotot/chotot/no-nested-ternary': 'error',
        '@chotot/chotot/no-this-assignment': 'error',
      },
    },
  },
};

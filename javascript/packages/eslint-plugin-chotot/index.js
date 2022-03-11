'use strict';

const { loadRules } = require('./rules/utils/rule.js');

module.exports = {
  rules: loadRules(),
  configs: {
    recommended: {
      env: {
        es6: true,
      },
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      plugins: ['chotot'],
      rules: {
        'chotot/filename-case': [
          'warn',
          {
            cases: {
              camelCase: true,
              pascalCase: true,
              kebabCase: true,
            },
          },
        ],
        'chotot/filepath-no-ads': 'error',
        'chotot/no-abusive-eslint-disable': 'error',
        'chotot/no-instanceof-array': 'error',
        'chotot/no-nested-ternary': 'error',
        'chotot/no-this-assignment': 'error',
        'chotot/no-unsafe-regex': 'error',
        'chotot/no-unused-properties': 'error',
      },
    },
  },
};

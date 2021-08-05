'use strict';
const path = require('path');
const importModules = require('import-modules');

module.exports = {
  rules: importModules(path.resolve(__dirname, 'rules'), { camelize: false }),
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

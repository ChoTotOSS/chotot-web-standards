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
        'chotot/no-abusive-eslint-disable': 'error',
        'chotot/filename-case': [ 'warn', {
          cases: {
            camelCase: true,
            pascalCase: true,
            kebabCase: true,
          },
        }],
      },
    },
  },
};

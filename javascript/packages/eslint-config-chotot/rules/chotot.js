module.exports = {
  plugins: [
    'chotot',
  ],
  rules: {
    // Forbid the use of eslint-disable* without specific rule
    // https://github.com/ChoTotOSS/chotot-web-standards/blob/master/javascript/packages/eslint-plugin-chotot/docs/rules/no-abusive-eslint-disable.md
    'chotot/no-abusive-eslint-disable': 'error',
    // Allows only specific file name cases
    // https://github.com/ChoTotOSS/chotot-web-standards/blob/master/javascript/packages/eslint-plugin-chotot/docs/rules/filename-case.md
    // TODO: enforce with error?
    'chotot/filename-case': ['warn', {
      'cases': {
        'camelCase': true,
        'pascalCase': true,
        'kebabCase': true
      }
    }],
  }
};

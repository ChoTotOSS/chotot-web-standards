const chototPluginRules = {
  // Prevent ad-blocker prone words
  // https://github.com/ChoTotOSS/chotot-web-standards/blob/master/javascript/packages/eslint-plugin-chotot/docs/rules/filepath-no-ads.md
  '@chotot/chotot/filepath-no-ads': 'error',
  // Forbid the use of eslint-disable* without specific rule
  // https://github.com/ChoTotOSS/chotot-web-standards/blob/master/javascript/packages/eslint-plugin-chotot/docs/rules/no-abusive-eslint-disable.md
  '@chotot/chotot/no-abusive-eslint-disable': 'error',
  // Uses safe-regex to disallow potentially catastrophic exponential-time regular expressions.
  // https://github.com/ChoTotOSS/chotot-web-standards/blob/master/javascript/packages/eslint-plugin-chotot/docs/rules/no-unsafe-regex.md
  '@chotot/chotot/no-unsafe-regex': 'error',
  // Require `Array.isArray()` instead of `instanceof Array`
  // https://github.com/ChoTotOSS/chotot-web-standards/blob/master/javascript/packages/eslint-plugin-chotot/docs/rules/no-instanceof-array.md
  '@chotot/chotot/no-instanceof-array': 'error',
  // Allows only specific file name cases
  // https://github.com/ChoTotOSS/chotot-web-standards/blob/master/javascript/packages/eslint-plugin-chotot/docs/rules/filename-case.md
  // TODO: enforce with error?
  '@chotot/chotot/filename-case': [
    'warn',
    {
      cases: {
        camelCase: true,
        pascalCase: true,
        kebabCase: true,
      },
      ignore: ['CtC2C', 'C2C', 'JOB', 'VEH', 'PTY', 'GDS'],
    },
  ],
  // Improved version of the [`no-nested-ternary`](https://eslint.org/docs/rules/no-nested-ternary) ESLint rule,
  // which allows cases where the nested ternary is only one level and wrapped in parens.
  // https://github.com/ChoTotOSS/chotot-web-standards/blob/master/javascript/packages/eslint-plugin-chotot/docs/rules/no-nested-ternary.md
  '@chotot/chotot/no-nested-ternary': 'error',
  // `this` should be used directly. If you want a reference to `this` from a higher scope, consider using arrow function expression or `Function#bind()`
  // https://github.com/ChoTotOSS/chotot-web-standards/blob/master/javascript/packages/eslint-plugin-chotot/docs/rules/no-this-assignment.md
  '@chotot/chotot/no-this-assignment': 'error',
};

module.exports = {
  chototPluginRules,
};

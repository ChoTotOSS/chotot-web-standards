const {
  chototPluginRules,
  eslintBuiltInRules,
  importPluginRules,
  reactJSXA11yPluginRules,
  reactPluginRules,
  reactHooksPluginRules,
  nextPluginRules,
  typescriptEslintPluginRules
} = require('@chotot/eslint-ruleset');

/* eslint-env node */
module.exports = {
  root: true,
  extends: ['next'],
  plugins: ['@typescript-eslint', '@chotot/chotot'],
  reportUnusedDisableDirectives: true,
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  rules: {
    ...chototPluginRules,
    ...eslintBuiltInRules,
    ...importPluginRules,
    ...reactJSXA11yPluginRules,
    ...reactPluginRules,
    ...reactHooksPluginRules,
    ...nextPluginRules
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parserOptions: {
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
      },
      rules: {
        ...typescriptEslintPluginRules
      },
    },
  ],
};

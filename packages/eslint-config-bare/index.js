// See: https://github.com/eslint/eslint/issues/3458
require('@rushstack/eslint-patch/modern-module-resolution');

const {
  chototPluginRules,
  eslintBuiltInRules,
  importPluginRules,
  typescriptEslintPluginRules,
} = require('@chotot/eslint-ruleset');

module.exports = {
  root: true,
  plugins: ['@typescript-eslint', 'import'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
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
  },
  overrides: [
    {
      files: ['**/*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        warnOnUnsupportedTypeScriptVersion: true,
      },
      rules: {
        ...typescriptEslintPluginRules,
      },
    },
  ],
  settings: {
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts'],
    },
    'import/resolver': {
      [require.resolve('eslint-import-resolver-node')]: {
        extensions: ['.ts', 'js'],
      },
      [require.resolve('eslint-import-resolver-typescript')]: {
        alwaysTryTypes: true,
      },
    },
  },
};

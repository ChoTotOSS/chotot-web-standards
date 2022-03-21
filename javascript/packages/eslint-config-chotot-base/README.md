# eslint-config-chotot-base

[![npm version](https://badge.fury.io/js/eslint-config-chotot-base.svg)](http://badge.fury.io/js/eslint-config-chotot-base)

This package provides Chotot's base JS .eslintrc (without React and Next.js plugins) as an extensible shared config.

## Usage

### eslint-config-chotot-base

Our default export contains all of our ESLint rules, including ECMAScript 6+. It requires `eslint`, `eslint-plugin-import`, `eslint-plugin-chotot`. This config requires no external parser (i.e `@babel/eslint-parser`).

1. Install the correct versions of each package, which are listed by the command:

```sh
npx install-peerdeps --dev eslint-config-chotot-base
```

2. Add `"extends": "chotot-base"` to your .eslintrc.

## Improving this config

Consider adding test cases if you're making complicated rules changes, like anything involving regexes. Perhaps in a distant future, we could use literate programming to structure our README as test cases for our .eslintrc?

You can run tests with `npm test`.

You can make sure this module lints with itself using `npm run lint`.

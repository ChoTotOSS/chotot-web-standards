# eslint-config-chotot

[![npm version](https://badge.fury.io/js/eslint-config-chotot.svg)](http://badge.fury.io/js/eslint-config-chotot)

This package provides Chotot's .eslintrc as an extensible shared config. This config is based on [Airbnb's](https://github.com/airbnb/javascript) but with following important differences:

- Built-in support for [Prettier](https://prettier.io) (skip conflicted Prettier's formatting rules while remain some for double checking)
- Built-in support for experimental ES syntax (via `eslint-babel` parser).
- Many rules were relaxed to provide some flexibility and improve developer's ergonomics.
- Extra supports for [Next.js framework](https://nextjs.org/)
- Additional custom rules that suit Chotot Web team and provided by `eslint-plugin-chotot`

## Usage

We export following ESLint configurations for your usage.

### eslint-config-chotot

Our default export contains all of our ESLint rules, including ECMAScript 6+ and React. It requires `eslint`, `eslint-plugin-import`, `eslint-plugin-react`, `eslint-plugin-react-hooks`, `eslint-plugin-jsx-a11y`, `eslint-plugin-chotot` and `@babel/eslint-parser`. If you don't need React, see [eslint-config-chotot-base](https://npmjs.com/eslint-config-chotot-base).

1. Install the correct versions of each package, which are listed by the command:

```sh
npx install-peerdeps --dev eslint-config-chotot
```

2. Add `"extends": "chotot"` to your `.eslintrc`

### eslint-config-chotot/next

This entry point enables the linting rules for [Next.js framework](https://nextjs.org/). To use, add `"extends": ["chotot", "chotot/next"]` to your `.eslintrc`

### eslint-config-chotot/hooks

This entry is deprecated. Rules for React hooks already defined in `chotot`.

This entry point enables the linting rules for React hooks (requires v16.8+). To use, add `"extends": ["chotot", "chotot/hooks"]` to your `.eslintrc`

### eslint-config-chotot/base

This entry point is deprecated. See [eslint-config-chotot-base](https://npmjs.com/eslint-config-chotot-base).

## Chotot JavaScript Style Guide

This eslint config preset is to validate and enfore Chotot's JavaScript style guide. See [Chotot's JavaScript style guide](https://github.com/ChoTotOSS/chotot-web-standards/tree/master/javascript) and
the [ESlint config docs](https://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.

## Improving this config

Consider adding test cases if you're making complicated rules changes, like anything involving regexes. Perhaps in a distant future, we could use literate programming to structure our README as test cases for our .eslintrc?

You can run tests with `npm test`.

You can make sure this module lints with itself using `npm run lint`.

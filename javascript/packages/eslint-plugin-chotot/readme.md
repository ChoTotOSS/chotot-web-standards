# eslint-plugin-chotot

Collection of custom ESLint rules that are used by [`eslint-config-chotot`](https://github.com/chototoss/chotot-web-standards)

[**Propose or contribute a new rule ➡**](.github/contributing.md)

## Install

```console
$ npm install --save-dev eslint eslint-plugin-chotot
```

## Usage

Configure it in `package.json`.

```json
{
  "name": "my-awesome-project",
  "eslintConfig": {
    "env": {
      "es6": true
    },
    "parserOptions": {
      "ecmaVersion": 2020,
      "sourceType": "module"
    },
    "plugins": ["chotot"],
    "rules": {
      "chotot/filename-case": [
        "warn",
        {
          "cases": {
            "camelCase": true,
            "pascalCase": true,
            "kebabCase": true
          }
        }
      ],
      "chotot/filepath-no-ads": "error",
      "chotot/no-abusive-eslint-disable": "error",
      "chotot/no-instanceof-array": "error",
      "chotot/no-nested-ternary": "error",
      "chotot/no-this-assignment": "error",
      "chotot/no-unsafe-regex": "error",
      "chotot/no-unused-properties": "error"
    }
  }
}
```

## Rules

- [filename-case](docs/rules/filename-case.md) - Enforce a case style for filenames.
- [filepath-no-ads](docs/rules/filepath-no-ads.md) - Prevent ad-blockers prone words in file paths.
- [no-abusive-eslint-disable](docs/rules/no-abusive-eslint-disable.md) - Enforce specifying rules to disable in `eslint-disable` comments.
- [no-instanceof-array](docs/rules/no-instanceof-array.md) - Require `Array.isArray()` instead of `instanceof Array`
- [no-nested-ternary](docs/rules/no-nested-ternary.md) - Improved version of the [`no-nested-ternary`](https://eslint.org/docs/rules/no-nested-ternary) ESLint rule, which allows cases where the nested ternary is only one level and wrapped in parens.
- [no-this-assignment](docs/rules/no-this-assignment.md) - Disallow assigning `this` to a variable
- [no-unsafe-regex](docs/rules/no-unsafe-regex.md) - Disallow unsafe regular expressions
- [no-unused-properties](docs/rules/no-unused-properties.md) - Disallow unused object properties

## Recommended config

This plugin exports a [`recommended` config](index.js) that enforces good practices.

Enable it in your `package.json` with the `extends` option:

```json
{
  "name": "my-awesome-project",
  "eslintConfig": {
    "extends": "plugin:chotot/recommended"
  }
}
```

See the [ESLint docs](https://eslint.org/docs/user-guide/configuring#extending-configuration-files) for more information about extending config files.

**Note**: This config will also enable the correct [parser options](https://eslint.org/docs/user-guide/configuring#specifying-parser-options) and [environment](https://eslint.org/docs/user-guide/configuring#specifying-environments).

## Thanks

- [`eslint-plugin-unicorn`](https://github.com/sindresorhus/eslint-plugin-unicorn) for the repo structure and some initial rules.

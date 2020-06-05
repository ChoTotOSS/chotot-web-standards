# eslint-plugin-chotot

Collection of custom ESLint rules that are used by [`eslint-config-chotot`](https://github.com/chototoss/chotot-web-standards)



[**Propose or contribute a new rule ➡**](.github/contributing.md)

## Install

```console
$ npm install --save-dev eslint eslint-plugin-unicorn
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
    "plugins": [
      "unicorn"
    ],
    "rules": {
      "unicorn/filename-case": "error",
      "unicorn/no-abusive-eslint-disable": "error",
    }
  }
}
```

## Rules

- [filename-case](docs/rules/filename-case.md) - Enforce a case style for filenames.
- [no-abusive-eslint-disable](docs/rules/no-abusive-eslint-disable.md) - Enforce specifying rules to disable in `eslint-disable` comments.

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

- [`eslint-plugin-unicorn`](https://github.com/sindresorhus/eslint-plugin-unicorn) for the repo structure and first couple of rules.

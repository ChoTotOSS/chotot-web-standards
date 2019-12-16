# Chotot Web Standards

A set of documents and npm packages to impose Chotot's coding style and standards.

Currently:

- [JavaScript style guide](https://github.com/ChoTotOSS/chotot-web-standards/tree/master/javascript)
  - [`eslint-config-chotot`](https://www.npmjs.com/package/eslint-config-chotot)
  - [`eslint-config-chotot-base`](https://www.npmjs.com/package/eslint-config-chotot-base)


## HOW-TO

### Configure `eslint-config-chotot`

After adding `eslint-config-chotot` package to devDependencies, install these peer dependencies:

```json
{
  "babel-eslint": "^10.0.3",
  "eslint": "^6.1.0",
  "eslint-plugin-import": "^2.18.2",
  "eslint-plugin-jsx-a11y": "^6.2.3",
  "eslint-plugin-react": "^7.15.1",
  "eslint-plugin-react-hooks": "^1.7.0",
}
```

Create a `.eslintrc` at root of project with following content:

```json
{
  "extends": "chotot"
}
```

If your project uses `babel-plugin-root-import` (alias of project root with `~` character), install following package:

```sh
yarn add --dev eslint-import-resolver-babel-plugin-root-import
```

Then update `.eslintrc` with following config:

```json
{
  "extends": "chotot",
  "settings": {
    "import/resolver": "babel-plugin-root-import"
  }
}
```


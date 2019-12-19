# Chotot Web Standards

A set of documents and npm packages to impose Chotot's coding style and standards.

Currently:

- [JavaScript style guide](https://github.com/ChoTotOSS/chotot-web-standards/tree/master/javascript)
  - [`eslint-config-chotot`](https://www.npmjs.com/package/eslint-config-chotot)
  - [`eslint-config-chotot-base`](https://www.npmjs.com/package/eslint-config-chotot-base)
- [Editors' baseline set-up](https://github.com/ChoTotOSS/chotot-web-standards/tree/master/editors), currently:
  - Visual Studio Code
  - Sublime Text 3
- Git work flow:
  - Commit message conventions following [conventionalcommits.org](https://www.conventionalcommits.org/en/v1.0.0/)
  - Git work flow: [TBD]

## HOW-TO

### Configure `eslint-config-chotot`

```sh
yarn add --dev eslint-config-chotot@latest
```

After adding `eslint-config-chotot` package to `devDependencies`, execute below command to check for peer dependencies and then install the exact version of the listed peer dependencies:

```sh
npm info eslint-config-chotot@latest peerDependencies
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

---

© 2019 - Chotot.vn

Code is licensed under [MIT license](https://opensource.org/licenses/MIT). Document is licensed under [Creative Commons Attribution-NonCommercial 4.0 International License](http://creativecommons.org/licenses/by-nc/4.0/)

![CC-BY-NC 4.0](https://i.creativecommons.org/l/by-nc/4.0/88x31.png)




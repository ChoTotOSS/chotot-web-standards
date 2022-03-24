# Chotot Web Standards

A set of documents and npm packages to impose Chotot's coding styles and standards.

Currently:

- [JavaScript style guide](https://github.com/ChoTotOSS/chotot-web-standards/tree/master/javascript)
  - [`eslint-config-chotot`](https://www.npmjs.com/package/eslint-config-chotot)
  - [`eslint-config-chotot-base`](https://www.npmjs.com/package/eslint-config-chotot-base)
  - [`eslint-plugin-chotot`](https://www.npmjs.com/package/eslint-plugin-chotot)
- [Editors' baseline set-up](https://github.com/ChoTotOSS/chotot-web-standards/tree/master/editors), currently:
  - Visual Studio Code
  - Sublime Text 3
- [Dot files](https://github.com/ChoTotOSS/chotot-web-standards/tree/master/dotfiles): a set of project's environment configs
- Git work flow:
  - Commit message conventions following [conventionalcommits.org](https://www.conventionalcommits.org/en/v1.0.0/)
  - Git work flow: [TBD]

## HOW-TO

### Configure `eslint-config-chotot`

```sh
yarn add --dev eslint-config-chotot@latest
```

After adding `eslint-config-chotot` package to `devDependencies`, execute below command to install peer dependencies automatically:

```sh
# yarn or npm will be detected automatically by `install-peerdeps`
npx install-peerdeps --dev eslint-config-chotot@latest
```

Create a `.eslintrc` at root of project with following content:

```json
{
  "extends": "chotot"
}
```

If your project uses `babel-plugin-module-resolver` (alias of project root with `~` character), install following package:

```sh
yarn add --dev eslint-import-resolver-babel-module
```

Then update `.eslintrc` with following config:

```json
{
  "extends": "chotot",
  "settings": {
    "import/resolver": {
      "babel-module": {}
    }
  }
}
```

---

© 2020-2022 - Chotot.vn

Code is licensed under [MIT license](https://opensource.org/licenses/MIT). Document is licensed under [Creative Commons Attribution-ShareAlike 4.0 International License.](http://creativecommons.org/licenses/by-sa/4.0/)

![CC-BY-SA 4.0](https://licensebuttons.net/l/by-sa/4.0/88x31.png)

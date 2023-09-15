![npm (scoped)](https://img.shields.io/npm/v/%40chotot/eslint-config-next?label=%40chotot%2Feslint-config-next&color=green)
![npm (scoped)](https://img.shields.io/npm/v/%40chotot/eslint-config-base?label=%40chotot%2Feslint-config-base&color=green)
![npm (scoped)](https://img.shields.io/npm/v/%40chotot/eslint-plugin-chotot?label=%40chotot%2Feslint-plugin-chotot&color=green)


# Chotot Web Standards

A set of documents and npm packages to impose Chotot's coding styles and standards.

Currently:

- [JavaScript style guide](https://github.com/ChoTotOSS/chotot-web-standards/tree/master/javascript)
  - [`@chotot/eslint-config-next`](https://www.npmjs.com/package/@chotot/eslint-config-next)
  - [`@chotot/eslint-config-base`](https://www.npmjs.com/package/@chotot/eslint-config-base)
  - [`@chotot/eslint-plugin-chotot`](https://www.npmjs.com/package/@chotot/eslint-plugin-chotot)
- [Editors' baseline set-up](https://github.com/ChoTotOSS/chotot-web-standards/tree/master/editors), currently:
  - Visual Studio Code
  - Sublime Text 3
- [Dot files](https://github.com/ChoTotOSS/chotot-web-standards/tree/master/dotfiles): a set of project's environment configs
- Git work flow:
  - Commit message conventions following [conventionalcommits.org](https://www.conventionalcommits.org/en/v1.0.0/)
  - Git work flow: [TBD]

## HOW-TO

### Configure `@chotot/eslint-config-next`

```sh
pnpm add --dev @chotot/eslint-config-next@latest
```

Create a `.eslintrc` at root of project with following content:

```json
{
  "extends": "@chotot/next"
}
```

---

© 2020-2023 - Chotot.vn

Code is licensed under [MIT license](https://opensource.org/licenses/MIT). Document is licensed under [Creative Commons Attribution-ShareAlike 4.0 International License.](http://creativecommons.org/licenses/by-sa/4.0/)

![CC-BY-SA 4.0](https://licensebuttons.net/l/by-sa/4.0/88x31.png)

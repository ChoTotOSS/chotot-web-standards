# eslint-config-chotot-base

[![npm version](https://badge.fury.io/js/eslint-config-chotot-base.svg)](http://badge.fury.io/js/eslint-config-chotot-base)

This package provides Chotot's base JS .eslintrc (without React plugins) as an extensible shared config.

## Usage

### eslint-config-chotot-base

Our default export contains all of our ESLint rules, including ECMAScript 6+. It requires `eslint`, `eslint-plugin-import` and `babel-eslint`.

1. Install the correct versions of each package, which are listed by the command:

  ```sh
  npm info "eslint-config-chotot-base@latest" peerDependencies
  ```

  If using **npm 5+**, use this shortcut

  ```sh
  npx install-peerdeps --dev eslint-config-chotot-base
  ```

  If using **yarn**, you can also use the shortcut described above if you have npm 5+ installed on your machine, as the command will detect that you are using yarn and will act accordingly.
  Otherwise, run `npm info "eslint-config-chotot-base@latest" peerDependencies` to list the peer dependencies and versions, then run `yarn add --dev <dependency>@<version>` for each listed peer dependency.


  If using **npm < 5**, Linux/OSX users can run

  ```sh
  (
    export PKG=eslint-config-chotot-base;
    npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
  )
  ```

  Which produces and runs a command like:

  ```sh
    npm install --save-dev eslint-config-chotot-base eslint@^#.#.# eslint-plugin-import@^#.#.#
  ```

  If using **npm < 5**, Windows users can either install all the peer dependencies manually, or use the [install-peerdeps](https://github.com/nathanhleung/install-peerdeps) cli tool.

  ```sh
  npm install -g install-peerdeps
  install-peerdeps --dev eslint-config-chotot-base
  ```

  The cli will produce and run a command like:

  ```sh
  npm install --save-dev eslint-config-chotot-base eslint@^#.#.# eslint-plugin-import@^#.#.#
  ```

2. Add `"extends": "chotot-base"` to your .eslintrc.


## Improving this config

Consider adding test cases if you're making complicated rules changes, like anything involving regexes. Perhaps in a distant future, we could use literate programming to structure our README as test cases for our .eslintrc?

You can run tests with `npm test`.

You can make sure this module lints with itself using `npm run lint`.

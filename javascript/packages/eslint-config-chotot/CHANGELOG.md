21.0.0 / 2021-08-06
===================

- Upgrade to `eslint` 7.32
- Upgrade `eslint-config-chotot-base` to 16.0, `eslint-plugin-chotot` to 2.0
- Rules for `eslint-plugin-chotot` are now defined in `eslint-config-chotot-base`
- Added `eslint-plugin-next`
- **BREAKING new rules**:
    - `chotot/no-instanceof-array`
    - `chotot/no-nested-ternary` (replace built-in `no-nested-ternary`)
    - `chotot/no-this-assignment`
    - `chotot/no-unsafe-regex`
    - `chotot/no-unused-properties`
    - `@next/next/no-document-import-in-page`
    - `@next/next/no-head-import-in-document`
    - `@next/next/no-page-custom-font`
    - `@next/next/no-sync-scripts`
    - `@next/next/no-unwanted-polyfillio`
    - `react/jsx-no-constructed-context-values`
    - `react/no-unstable-nested-components`
- None breaking rules (just warning or turn off):
    - `@next/next/google-font-display`
    - `@next/next/google-font-preconnect`
    - `@next/next/link-passhref`
    - `@next/next/no-css-tags`
    - `@next/next/no-html-link-for-pages`
    - `@next/next/no-img-element`
    - `@next/next/no-title-in-document-head`
    - `react/jsx-newline`

20.0.0 / 2020-12-08
===================

- Upgrade to eslint 7.15
- Add new rules since eslint 7 and new version of plugins
- Hook rules are now part of config `chotot` and no longer separated `chotot/hooks`.
- BREAKING: switch 'import/no-anonymous-default-export' to error
- BREAKING: new rule with error catch `default-case-last`
- BREAKING: new rule with error catch `no-loss-of-precision`
- BREAKING: new rule with error catch `no-nonoctal-decimal-escape`
- BREAKING: new rule with error catch `no-promise-executor-return`
- BREAKING: new rule with error catch `no-unreachable-loop`
- BREAKING: new rule with error catch `no-useless-backreference`
- BREAKING: new rule with error catch `no-unsafe-optional-chaining`

19.0.0 / 2020-06-08
===================
- Turn off `react-hooks/exhaustive-deps` as discussed among Chotot Web chapter committee
- [Break] Add `eslint-plugin-chotot` as new peerDependencies
- [Break] Add `chotot/no-abusive-eslint-disable` (error) and `chotot/filename-case` (warn) to `chotot` sharable config
- Upgrade `eslint-plugin-hooks` peer dependency to 4.0.0

18.2.0 / 2020-03-18
===================
- Syn new `eslint-config-chotot` update
- Disable some react* and jsx-a11y* rules from our trials with Next.js framework
- Adding new rules in latest `eslint-plugin-react`

18.1.0 / 2020-02-11
===================
- Add `chotot/next` configs specialized for projects using Next.js framework
- Add `babel-eslint` as peer dependency so that it show up in `npm info "eslint-config-chotot@latest" peerDependencies`

18.0.0 / 2019-12-19
===================
- Initial version, forked from `eslint-config-airbnb`@18.0.1
- Version continue from the forked package for reference

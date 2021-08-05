16.0.0 / 2021-08-05
===================

- Added `eslint-plugin-chotot` and its rules (moved from `eslint-config-chotot`)
- Turn off `no-nested-ternary` in favor of `chotot/no-nested-ternary`

15.2.0 / 2021-08-03
===================

- Upgrade `eslint`, `eslint-plugin-import`
- Add `import/no-import-module-exports`, `import/no-relative-packages` rules
- Relax `no-shadow`, add some allowed frequent callback names

15.1.0 / 2020-12-08
===================

- Upgrade to eslint 7.15 with new rule `no-unsafe-optional-chaining`

15.0.0 / 2020-12-02
===================

- Upgrade to eslint 7.14
- Add new rules since eslint 7
- Remove deprecated rules that are already off

14.2.0 / 2020-06-08
===================
- Remove babel-eslint parser from this config (we should keep it as plain as possible)
- Update few packages to latest version

14.1.0 / 2020-03-13
===================
- Allows triple slash comments from TypeScript
- Turn back on some style rules as precaution in case prettier is skipped

14.0.0 / 2019-12-10
===================
- Initial version, forked from `eslint-config-airbnb-base`
- Version continue from the forked package for reference

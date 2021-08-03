const confusingBrowserGlobals = require('../confusing-browser-globals');

module.exports = {
  rules: {
    // enforce or disallow variable initializations at definition
    'init-declarations': 'off',

    // disallow deletion of variables
    'no-delete-var': 'error',

    // disallow labels that share a name with a variable
    // https://eslint.org/docs/rules/no-label-var
    'no-label-var': 'error',

    // disallow specific globals
    // RELAX: isNaN
    'no-restricted-globals': ['error', 'isFinite'].concat(confusingBrowserGlobals),

    // disallow declaration of variables already declared in the outer scope
    'no-shadow': [ 'error', { builtinGlobals: false, hoist: 'functions', allow: [ 'callback', 'cb', 'data', 'done', 'err', 'error' ] } ],

    // disallow shadowing of names such as arguments
    'no-shadow-restricted-names': 'error',

    // disallow use of undeclared variables unless mentioned in a /*global */ block
    'no-undef': 'error',

    // disallow use of undefined when initializing variables
    'no-undef-init': 'error',

    // disallow use of undefined variable
    // https://eslint.org/docs/rules/no-undefined
    // TODO: enable?
    'no-undefined': 'off',

    // disallow declaration of variables that are not used in the code
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],

    // RELAX: disallow use of variables before they are defined
    'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],

    // disallow specified identifiers
    // https://eslint.org/docs/rules/id-denylist
    'id-denylist': 'off',

    // disallow specified names in exports
    // https://eslint.org/docs/rules/no-restricted-exports
    'no-restricted-exports': 'off',
  }
};

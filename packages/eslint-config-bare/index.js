// See: https://github.com/eslint/eslint/issues/3458
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  plugins: ['@typescript-eslint', 'import'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  reportUnusedDisableDirectives: true,
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  rules: {
    // Enforces return statements in callbacks of array's methods
    // https://eslint.org/docs/latest/rules/array-callback-return
    'array-callback-return': ['error', { allowImplicit: true }],
    // Enforce the use of variables within the scope they are defined
    // https://eslint.org/docs/latest/rules/block-scoped-var
    'block-scoped-var': 'error',
    // Require return statements to either always or never specify values
    // https://eslint.org/docs/latest/rules/consistent-return
    'consistent-return': 'error',
    // Enforce consistent brace style for all control statements
    // https://eslint.org/docs/latest/rules/curly
    curly: ['error', 'multi-line'],
    // Require default case in switch statements
    // https://eslint.org/docs/latest/rules/default-case
    'default-case': ['error', { commentPattern: '^no default$' }],
    // Enforce consistent newlines before and after dots
    // https://eslint.org/docs/latest/rules/dot-location
    'dot-location': ['error', 'property'],
    // Require the use of === and !==
    // https://eslint.org/docs/latest/rules/eqeqeq
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    // Disallow the use of alert, confirm, and prompt
    // https://eslint.org/docs/latest/rules/no-alert
    'no-alert': 'warn',
    // Disallow the use of arguments.caller or arguments.callee
    // https://eslint.org/docs/latest/rules/no-caller
    'no-caller': 'error',
    // Disallow returning value from constructor
    // https://eslint.org/docs/latest/rules/no-constructor-return
    'no-constructor-return': 'error',
    // Disallow duplicate conditions in if-else-if chains
    // https://eslint.org/docs/latest/rules/no-dupe-else-if
    'no-dupe-else-if': 'error',
    // Disallow empty functions
    // https://eslint.org/docs/latest/rules/no-empty-function
    'no-empty-function': [
      'error',
      {
        allow: ['arrowFunctions', 'functions', 'methods', 'constructors'],
      },
    ],
    // Disallow empty destructuring patterns
    // https://eslint.org/docs/latest/rules/no-empty-pattern
    'no-empty-pattern': 'error',
    // Disallow the use of eval()
    // https://eslint.org/docs/latest/rules/no-eval
    'no-eval': 'error',
    // Disallow extending native types
    // https://eslint.org/docs/latest/rules/no-extend-native
    'no-extend-native': 'error',
    // Disallow unnecessary calls to .bind()
    // https://eslint.org/docs/latest/rules/no-extra-bind
    'no-extra-bind': 'error',
    // Disallow unnecessary labels
    // https://eslint.org/docs/latest/rules/no-extra-label
    'no-extra-label': 'error',
    // Disallow fallthrough of case statements
    // https://eslint.org/docs/latest/rules/no-fallthrough
    'no-fallthrough': 'error',
    // Disallow leading or trailing decimal points in numeric literals
    // https://eslint.org/docs/latest/rules/no-floating-decimal
    'no-floating-decimal': 'error',
    // Disallow assignments to native objects or read-only global variables
    // https://eslint.org/docs/latest/rules/no-global-assign
    'no-global-assign': ['error', { exceptions: [] }],
    // Disallow the use of eval()-like methods
    // https://eslint.org/docs/latest/rules/no-implied-eval
    'no-implied-eval': 'error',
    // Disallow the use of the __iterator__ property
    // https://eslint.org/docs/latest/rules/no-iterator
    'no-iterator': 'error',
    // Disallow labeled statements
    // https://eslint.org/docs/latest/rules/no-labels
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
    // Disallow unnecessary nested blocks
    // https://eslint.org/docs/latest/rules/no-lone-blocks
    'no-lone-blocks': 'error',
    // Disallow function declarations that contain unsafe references inside loop statements
    // https://eslint.org/docs/latest/rules/no-loop-func
    'no-loop-func': 'error',
    // Disallow multiple spaces
    // https://eslint.org/docs/latest/rules/no-multi-spaces
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: false,
      },
    ],
    // Disallow multiline strings
    // https://eslint.org/docs/latest/rules/no-multi-str
    'no-multi-str': 'error',
    // Disallow new operators outside of assignments or comparisons
    // https://eslint.org/docs/latest/rules/no-new
    'no-new': 'error',
    // Disallow new operators with the Function object
    // https://eslint.org/docs/latest/rules/no-new-func
    'no-new-func': 'error',
    // Disallow new operators with the String, Number, and Boolean objects
    // https://eslint.org/docs/latest/rules/no-new-wrappers
    'no-new-wrappers': 'error',
    // Disallow octal literals
    // https://eslint.org/docs/latest/rules/no-octal
    'no-octal': 'error',
    // Disallow octal escape sequences in string literals
    // https://eslint.org/docs/latest/rules/no-octal-escape
    'no-octal-escape': 'error',
    // Disallow the use of the __proto__ property
    // https://eslint.org/docs/latest/rules/no-proto
    'no-proto': 'error',
    // Disallow variable redeclaration
    // https://eslint.org/docs/latest/rules/no-redeclare
    'no-redeclare': 'error',
    // Disallow certain properties on certain objects
    // https://eslint.org/docs/latest/rules/no-restricted-properties
    'no-restricted-properties': [
      'error',
      {
        object: 'arguments',
        property: 'callee',
        message: 'arguments.callee is deprecated',
      },
      {
        object: 'global',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'self',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'window',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'global',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        object: 'self',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        object: 'window',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        property: '__defineGetter__',
        message: 'Please use Object.defineProperty instead.',
      },
      {
        property: '__defineSetter__',
        message: 'Please use Object.defineProperty instead.',
      },
      {
        object: 'Math',
        property: 'pow',
        message: 'Use the exponentiation operator (**) instead.',
      },
    ],
    // Disallow assignment operators in return statements
    // https://eslint.org/docs/latest/rules/no-return-assign
    'no-return-assign': ['error', 'always'],
    // Disallow unnecessary return await
    // https://eslint.org/docs/latest/rules/no-return-await
    'no-return-await': 'error',
    // Disallow javascript: urls
    // https://eslint.org/docs/latest/rules/no-script-url
    'no-script-url': 'error',
    // Disallow assignments where both sides are exactly the same
    // https://eslint.org/docs/latest/rules/no-self-assign
    'no-self-assign': [
      'error',
      {
        props: true,
      },
    ],
    // Disallow comparisons where both sides are exactly the same
    // https://eslint.org/docs/latest/rules/no-self-compare
    'no-self-compare': 'error',
    // Disallow comma operators
    // https://eslint.org/docs/latest/rules/no-sequences
    'no-sequences': 'error',
    // Disallow returning values from setters
    // https://eslint.org/docs/latest/rules/no-setter-return
    'no-setter-return': 'error',
    // Disallow throwing literals as exceptions
    // https://eslint.org/docs/latest/rules/no-throw-literal
    'no-throw-literal': 'error',
    // Disallow unused expressions
    // https://eslint.org/docs/latest/rules/no-unused-expressions
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false,
      },
    ],
    // Disallow unused labels
    // https://eslint.org/docs/latest/rules/no-unused-labels
    'no-unused-labels': 'error',
    // Disallow unused private class members
    // https://eslint.org/docs/latest/rules/no-unused-private-class-members
    'no-unused-private-class-members': 'error',
    // Disallow unnecessary catch clauses
    // https://eslint.org/docs/latest/rules/no-useless-catch
    'no-useless-catch': 'error',
    // Disallow unnecessary concatenation of literals or template literals
    // https://eslint.org/docs/latest/rules/no-useless-concat
    'no-useless-concat': 'error',
    // Disallow redundant return statements
    // https://eslint.org/docs/latest/rules/no-useless-return
    'no-useless-return': 'error',
    // Disallow void operators
    // https://eslint.org/docs/latest/rules/no-void
    'no-void': 'error',
    // Disallow with statements
    // https://eslint.org/docs/latest/rules/no-with
    'no-with': 'error',
    // Require using Error objects as Promise rejection reasons
    // https://eslint.org/docs/latest/rules/prefer-promise-reject-errors
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
    // Enforce the consistent use of the radix argument when using parseInt()
    // https://eslint.org/docs/latest/rules/radix
    radix: 'error',
    // Require var declarations be placed at the top of their containing scope
    // https://eslint.org/docs/latest/rules/vars-on-top
    'vars-on-top': 'error',
    // Require parentheses around immediate function invocations
    // https://eslint.org/docs/latest/rules/wrap-iife
    'wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }],
    // Require or disallow "Yoda" conditions
    // https://eslint.org/docs/latest/rules/yoda
    yoda: 'error',
    // Enforce default clauses in switch statements to be last
    // https://eslint.org/docs/latest/rules/default-case-last
    'default-case-last': 'error',
    // Disallow literal numbers that lose precision
    // https://eslint.org/docs/latest/rules/no-loss-of-precision
    'no-loss-of-precision': 'error',
    // Disallow \8 and \9 escape sequences in string literals
    // https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape
    'no-nonoctal-decimal-escape': 'error',
    // Disallow returning values from Promise executor functions
    // https://eslint.org/docs/latest/rules/no-promise-executor-return
    'no-promise-executor-return': 'error',
    // Disallow loops with a body that allows only one iteration
    // https://eslint.org/docs/latest/rules/no-unreachable-loop
    'no-unreachable-loop': 'error',
    // Disallow useless backreferences in regular expressions
    // https://eslint.org/docs/latest/rules/no-useless-backreference
    'no-useless-backreference': 'error',
    // Disallow use of optional chaining in contexts where the undefined value is not allowed
    // https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining
    'no-unsafe-optional-chaining': ['error', { disallowArithmeticOperators: true }],
    // Enforce "for" loop update clause moving the counter in the right direction
    // https://eslint.org/docs/latest/rules/for-direction
    'for-direction': 'error',
    // Enforce return statements in getters
    // https://eslint.org/docs/latest/rules/getter-return
    'getter-return': ['error', { allowImplicit: true }],
    // Disallow using an async function as a Promise executor
    // https://eslint.org/docs/latest/rules/no-async-promise-executor
    'no-async-promise-executor': 'error',
    // Disallow await inside of loops
    // https://eslint.org/docs/latest/rules/no-await-in-loop
    'no-await-in-loop': 'error',
    // Disallow comparing against -0
    // https://eslint.org/docs/latest/rules/no-compare-neg-zero
    'no-compare-neg-zero': 'error',
    // Disallow assignment operators in conditional expressions
    // https://eslint.org/docs/latest/rules/no-cond-assign
    'no-cond-assign': ['error', 'always'],
    // Disallow the use of console
    // https://eslint.org/docs/latest/rules/no-console
    'no-console': 'warn',
    // Disallow constant expressions in conditions
    // https://eslint.org/docs/latest/rules/no-constant-condition
    'no-constant-condition': 'warn',
    // Disallow control characters in regular expressions
    // https://eslint.org/docs/latest/rules/no-control-regex
    'no-control-regex': 'error',
    // Disallow the use of debugger
    // https://eslint.org/docs/latest/rules/no-debugger
    'no-debugger': 'error',
    // Disallow duplicate arguments in function definitions
    // https://eslint.org/docs/latest/rules/no-dupe-args
    'no-dupe-args': 'error',
    // Disallow duplicate keys in object literals
    // https://eslint.org/docs/latest/rules/no-dupe-keys
    'no-dupe-keys': 'error',
    // Disallow duplicate case labels
    // https://eslint.org/docs/latest/rules/no-duplicate-case
    'no-duplicate-case': 'error',
    // Disallow empty block statements
    // https://eslint.org/docs/latest/rules/no-empty
    'no-empty': 'error',
    // Disallow empty character classes in regular expressions
    // https://eslint.org/docs/latest/rules/no-empty-character-class
    'no-empty-character-class': 'error',
    // Disallow reassigning exceptions in catch clauses
    // https://eslint.org/docs/latest/rules/no-ex-assign
    'no-ex-assign': 'error',
    // Disallow unnecessary boolean casts
    // https://eslint.org/docs/latest/rules/no-extra-boolean-cast
    'no-extra-boolean-cast': 'error',
    // Disallow unnecessary parentheses
    // https://eslint.org/docs/latest/rules/no-extra-parens
    'no-extra-parens': [
      'off',
      'all',
      {
        conditionalAssign: true,
        nestedBinaryExpressions: false,
        returnAssign: false,
        ignoreJSX: 'all', // delegate to eslint-plugin-react
        enforceForArrowConditionals: false,
      },
    ],
    // Disallow unnecessary semicolons
    // https://eslint.org/docs/latest/rules/no-extra-semi
    'no-extra-semi': 'error',
    // Disallow reassigning function declarations
    // https://eslint.org/docs/latest/rules/no-func-assign
    'no-func-assign': 'error',
    // Disallow variable or function declarations in nested blocks
    // https://eslint.org/docs/latest/rules/no-inner-declarations
    'no-inner-declarations': 'error',
    // Disallow invalid regular expression strings in RegExp constructors
    // https://eslint.org/docs/latest/rules/no-invalid-regexp
    'no-invalid-regexp': 'error',
    // Disallow irregular whitespace
    // https://eslint.org/docs/latest/rules/no-irregular-whitespace
    'no-irregular-whitespace': 'error',
    // Disallow characters which are made with multiple code points in character class syntax
    // https://eslint.org/docs/latest/rules/no-misleading-character-class
    'no-misleading-character-class': 'error',
    // Disallow calling global object properties as functions
    // https://eslint.org/docs/latest/rules/no-obj-calls
    'no-obj-calls': 'error',
    // Disallow multiple spaces in regular expressions
    // https://eslint.org/docs/latest/rules/no-regex-spaces
    'no-regex-spaces': 'error',
    // Disallow sparse arrays
    // https://eslint.org/docs/latest/rules/no-sparse-arrays
    'no-sparse-arrays': 'error',
    // Disallow template literal placeholder syntax in regular strings
    // https://eslint.org/docs/latest/rules/no-template-curly-in-string
    'no-template-curly-in-string': 'error',
    // Disallow confusing multiline expressions
    // https://eslint.org/docs/latest/rules/no-unexpected-multiline
    'no-unexpected-multiline': 'error',
    // Disallow unreachable code after return, throw, continue, and break statements
    // https://eslint.org/docs/latest/rules/no-unreachable
    'no-unreachable': 'error',
    // Disallow control flow statements in finally blocks
    // https://eslint.org/docs/latest/rules/no-unsafe-finally
    'no-unsafe-finally': 'error',
    // Disallow negating the left operand of relational operators
    // https://eslint.org/docs/latest/rules/no-unsafe-negation
    'no-unsafe-negation': 'error',
    // Require calls to isNaN() when checking for NaN
    // https://eslint.org/docs/latest/rules/use-isnan
    'use-isnan': 'error',
    // Enforce comparing typeof expressions against valid strings
    // https://eslint.org/docs/latest/rules/valid-typeof
    'valid-typeof': ['error', { requireStringLiterals: true }],
    // Require braces around arrow function bodies
    // https://eslint.org/docs/latest/rules/arrow-body-style
    'arrow-body-style': [
      'warn',
      'as-needed',
      {
        requireReturnForObjectLiteral: false,
      },
    ],
    // Enforce consistent spacing before and after the arrow in arrow functions
    // https://eslint.org/docs/latest/rules/arrow-spacing
    'arrow-spacing': ['error', { before: true, after: true }],
    // Require super() calls in constructors
    // https://eslint.org/docs/latest/rules/constructor-super
    'constructor-super': 'error',
    // Disallow reassigning class members
    // https://eslint.org/docs/latest/rules/no-class-assign
    'no-class-assign': 'error',
    // Disallow reassigning const variables
    // https://eslint.org/docs/latest/rules/no-const-assign
    'no-const-assign': 'error',
    // Disallow duplicate class members
    // https://eslint.org/docs/latest/rules/no-dupe-class-members
    'no-dupe-class-members': 'error',
    // Disallow new operators with the Symbol object
    // https://eslint.org/docs/latest/rules/no-new-symbol
    'no-new-symbol': 'error',
    // Disallow this/super before calling super() in constructors
    // https://eslint.org/docs/latest/rules/no-this-before-super
    'no-this-before-super': 'error',
    // Disallow unnecessary computed property keys in objects and classes
    // https://eslint.org/docs/latest/rules/no-useless-computed-key
    'no-useless-computed-key': 'error',
    // Disallow unnecessary constructors
    // https://eslint.org/docs/latest/rules/no-useless-constructor
    'no-useless-constructor': 'off',
    // Disallow renaming import, export, and destructured assignments to the same name
    // https://eslint.org/docs/latest/rules/no-useless-rename
    'no-useless-rename': [
      'error',
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false,
      },
    ],
    // Require let or const instead of var
    // https://eslint.org/docs/latest/rules/no-var
    'no-var': 'error',
    // Require or disallow method and property shorthand syntax for object literals
    // https://eslint.org/docs/latest/rules/object-shorthand
    'object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],
    // Require const declarations for variables that are never reassigned after declared
    // https://eslint.org/docs/latest/rules/prefer-const
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true,
      },
    ],
    // Require destructuring from arrays and/or objects
    // https://eslint.org/docs/latest/rules/prefer-destructuring
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: true,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    // Disallow parseInt() and Number.parseInt() in favor of binary, octal, and hexadecimal literals
    // https://eslint.org/docs/latest/rules/prefer-numeric-literals
    'prefer-numeric-literals': 'error',
    // Require rest parameters instead of arguments
    // https://eslint.org/docs/latest/rules/prefer-rest-params
    'prefer-rest-params': 'error',
    // Require spread operators instead of .apply()
    // https://eslint.org/docs/latest/rules/prefer-spread
    'prefer-spread': 'error',
    // Require generator functions to contain yield
    // https://eslint.org/docs/latest/rules/require-yield
    'require-yield': 'error',
    // Enforce spacing between rest and spread operators and their expressions
    // https://eslint.org/docs/latest/rules/rest-spread-spacing
    'rest-spread-spacing': ['error', 'never'],
    // Require symbol descriptions
    // https://eslint.org/docs/latest/rules/symbol-description
    'symbol-description': 'error',
    // Require or disallow spacing around embedded expressions of template strings
    // https://eslint.org/docs/latest/rules/template-curly-spacing
    'template-curly-spacing': 'error',
    // Require or disallow spacing around the * in yield* expressions
    // https://eslint.org/docs/latest/rules/yield-star-spacing
    'yield-star-spacing': ['error', 'after'],
    // Require or disallow trailing commas
    // https://eslint.org/docs/latest/rules/comma-dangle
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
    // Enforce consistent spacing before and after commas
    // https://eslint.org/docs/latest/rules/comma-spacing
    'comma-spacing': ['error', { before: false, after: true }],
    // Enforce consistent comma style
    // https://eslint.org/docs/latest/rules/comma-style
    'comma-style': ['error', 'last'],
    // Require or disallow newline at the end of files
    // https://eslint.org/docs/latest/rules/eol-last
    'eol-last': ['error', 'always'],
    // Require or disallow spacing between function identifiers and their invocations
    // https://eslint.org/docs/latest/rules/func-call-spacing
    'func-call-spacing': ['error', 'never'],
    // Enforce consistent spacing between keys and values in object literal properties
    // https://eslint.org/docs/latest/rules/key-spacing
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    // Require or disallow semicolons instead of ASI
    // https://eslint.org/docs/latest/rules/semi
    semi: ['error', 'always'],
    // Enforce consistent spacing before and after semicolons
    // https://eslint.org/docs/latest/rules/semi-spacing
    'semi-spacing': ['error', { before: false, after: true }],
    // Enforce location of semicolons
    // https://eslint.org/docs/latest/rules/semi-style
    'semi-style': ['error', 'last'],
    // Require spacing around infix operators
    // https://eslint.org/docs/latest/rules/space-infix-ops
    'space-infix-ops': ['error', { int32Hint: true }],
    // Enforce camelcase naming convention
    // https://eslint.org/docs/latest/rules/camelcase
    // OFF: We use snake_case for our API
    camelcase: ['off', { properties: 'never', ignoreDestructuring: false }],
    // Require or disallow named function expressions
    // https://eslint.org/docs/latest/rules/func-names
    'func-names': 'warn',
    // Require or disallow an empty line between class members
    // https://eslint.org/docs/latest/rules/lines-between-class-members
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: false }],
    // Require constructor names to begin with a capital letter
    // https://eslint.org/docs/latest/rules/new-cap
    'new-cap': [
      'error',
      {
        newIsCap: true,
        newIsCapExceptions: [],
        capIsNew: false,
        capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
      },
    ],
    // Disallow Array constructors
    // https://eslint.org/docs/latest/rules/no-array-constructor
    'no-array-constructor': 'error',
    // Disallow bitwise operators
    // https://eslint.org/docs/latest/rules/no-bitwise
    'no-bitwise': 'error',
    // Disallow continue statements
    // https://eslint.org/docs/latest/rules/no-continue
    'no-continue': 'error',
    // Disallow mixed binary operators
    // https://eslint.org/docs/latest/rules/no-mixed-operators
    'no-mixed-operators': [
      'error',
      {
        // the list of arthmetic groups disallows mixing `%` and `**`
        // with other arithmetic operators.
        groups: [
          ['%', '**'],
          ['%', '+'],
          ['%', '-'],
          ['%', '*'],
          ['%', '/'],
          ['/', '*'],
          ['&', '|', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!=='],
          ['&&', '||'],
        ],
        allowSamePrecedence: false,
      },
    ],
    // Disallow use of chained assignment expressions
    // https://eslint.org/docs/latest/rules/no-multi-assign
    'no-multi-assign': ['error'],
    // Disallow specified syntax
    // https://eslint.org/docs/latest/rules/no-restricted-syntax
    'no-restricted-syntax': [
      'error',
      // RELAX:
      // {
      //   selector: 'ForInStatement',
      //   message: 'for..in loops iterate over the entire prototype chain, ' +
      //   'which is virtually never what you want. Use Object.{keys,values,entries}, ' +
      //   'and iterate over the resulting array.',
      // },
      // {
      //   selector: 'ForOfStatement',
      //   message: 'iterators/generators require regenerator-runtime, ' +
      //   'which is too heavyweight for this guide to allow them. ' +
      //   'Separately, loops should be avoided in favor of array iterations.',
      // },
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    // Disallow all tabs
    // https://eslint.org/docs/latest/rules/no-tabs
    'no-tabs': 'error',
    // Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead
    // https://eslint.org/docs/latest/rules/prefer-object-spread
    'prefer-object-spread': 'error',
    // Enforce the consistent use of either backticks, double, or single quotes
    // https://eslint.org/docs/latest/rules/quotes
    quotes: ['error', 'single', { avoidEscape: true }],
    // Enforce consistent spacing after the // or /* in a comment
    // https://eslint.org/docs/latest/rules/spaced-comment
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          exceptions: ['-', '+'],
          markers: ['=', '!', '/'], // space here to support sprockets directives, TS triple-slash directives
        },
        block: {
          exceptions: ['-', '+'],
          markers: ['=', '!', ':', '::'], // space here to support sprockets directives and flow comment types
          balanced: true,
        },
      },
    ],
    // Disallow deleting variables
    // https://eslint.org/docs/latest/rules/no-delete-var
    'no-delete-var': 'error',
    // Disallow labels that share a name with a variable
    // https://eslint.org/docs/latest/rules/no-label-var
    'no-label-var': 'error',
    // Disallow variable declarations from shadowing variables declared in the outer scope
    // https://eslint.org/docs/latest/rules/no-shadow
    'no-shadow': [
      'error',
      {
        builtinGlobals: false,
        hoist: 'functions',
        allow: ['callback', 'cb', 'data', 'done', 'err', 'error'],
      },
    ],
    // Disallow identifiers from shadowing restricted names
    // https://eslint.org/docs/latest/rules/no-shadow-restricted-names
    'no-shadow-restricted-names': 'error',
    // Disallow the use of undeclared variables unless mentioned in /*global */ comments
    // https://eslint.org/docs/latest/rules/no-undef
    'no-undef': 'error',
    // Disallow initializing variables to undefined
    // https://eslint.org/docs/latest/rules/no-undef-init
    'no-undef-init': 'error',
    // Disallow unused variables
    // https://eslint.org/docs/latest/rules/no-unused-vars
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
    // Disallow the use of variables before they are defined
    // https://eslint.org/docs/latest/rules/no-use-before-define
    'no-use-before-define': ['off', { functions: false, classes: true, variables: true }],
    // Ensures an imported module can be resolved to a module on the local filesystem, as defined by standard Node require.resolve behavior.
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md
    'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],
    // Verifies that all named imports are part of the set of named exports in the referenced module.
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/named.md
    // OFF: This rule is somehow not working as expected.
    'import/named': 'off',
    // Reports funny business with exports, like repeated exports of names or defaults.
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/export.md
    'import/export': 'error',
    // Reports use of an exported name as the locally imported name of a default export.
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default.md
    'import/no-named-as-default': 'error',
    // Reports use of an exported name as a property on the default export.
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default-member.md
    'import/no-named-as-default-member': 'error',
    // Forbids the use of mutable exports with var or let.
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-mutable-exports.md
    'import/no-mutable-exports': 'error',
    // Disallow AMD require/define
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-amd.md
    'import/no-amd': 'error',
    // This rule reports any imports that come after non-import statements.
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md
    'import/first': 'error',
    // Reports if a resolved path is imported more than once.
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-duplicates.md
    'import/no-duplicates': 'error',
    // Enforce a convention in the order of require() / import statements.
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
    'import/order': ['error', { groups: [['builtin', 'external', 'internal']] }],
    // Enforces having one or more empty lines after the last top-level import statement or require call.
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md
    'import/newline-after-import': 'error',
    // Node.js allows the import of modules using an absolute path such as /home/xyz/file.js
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-absolute-path.md
    'import/no-absolute-path': 'error',
    // Forbid require() calls with expressions
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-dynamic-require.md
    'import/no-dynamic-require': 'error',
    // Forbid Webpack loader syntax in imports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md
    'import/no-webpack-loader-syntax': 'error',
    // Prevent importing the default as if it were named
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-default.md
    'import/no-named-default': 'error',
    // Forbid a module from importing itself. This can sometimes happen during refactoring.
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-self-import.md
    'import/no-self-import': 'error',
    // Ensures that there is no resolvable path back to this module via its dependencies.
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md
    // OFF: will turn on if needed
    'import/no-cycle': ['off', { maxDepth: Infinity }],
    // Use this rule to prevent unnecessary path segments in import and require statements.
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-useless-path-segments.md
    'import/no-useless-path-segments': ['error', { commonjs: true }],
    // Reports the use of import declarations with CommonJS exports in any module except for the main module.
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-import-module-exports.md
    'import/no-import-module-exports': 'error',
    // Reports if a module's default export is unnamed.
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-anonymous-default-export.md
    'import/no-anonymous-default-export': 'warn',
    // Disallow assigning to imported bindings
    // https://eslint.org/docs/latest/rules/no-import-assign
    'no-import-assign': 'error',
    // Disallow calling some Object.prototype methods directly on objects
    // https://eslint.org/docs/latest/rules/no-prototype-builtins
    'no-prototype-builtins': 'error',
    // Disallow lexical declarations in case clauses
    // https://eslint.org/docs/latest/rules/no-case-declarations
    'no-case-declarations': 'error',
    // Disallow unnecessary escape characters
    // https://eslint.org/docs/latest/rules/no-useless-escape
    'no-useless-escape': 'error',
    // Disallow mixed spaces and tabs for indentation
    // https://eslint.org/docs/latest/rules/no-mixed-spaces-and-tabs
    'no-mixed-spaces-and-tabs': 'error',
    // If a default import is requested, this rule will report if there is no default export in the imported module.
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/default.md
    'import/default': 'error',
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/alt-text.md
  },
  overrides: [
    {
      files: ['**/*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        warnOnUnsupportedTypeScriptVersion: true,
      },
      rules: {
        // disables rules from eslint:recommended which are already handled by TypeScript.
        // enables rules that make sense due to TS's typechecking / transpilation.
        'constructor-super': 'off', // ts(2335) & ts(2377)
        'getter-return': 'off', // ts(2378)
        'no-const-assign': 'off', // ts(2588)
        'no-dupe-args': 'off', // ts(2300)
        'no-dupe-class-members': 'off', // ts(2393) & ts(2300)
        'no-dupe-keys': 'off', // ts(1117)
        'no-func-assign': 'off', // ts(2539)
        'no-import-assign': 'off', // ts(2539) & ts(2540)
        'no-new-symbol': 'off', // ts(7009)
        'no-obj-calls': 'off', // ts(2349)
        'no-redeclare': 'off', // ts(2451)
        'no-setter-return': 'off', // ts(2408)
        'no-this-before-super': 'off', // ts(2376)
        'no-undef': 'off', // ts(2304)
        'no-unreachable': 'off', // ts(7027)
        'no-unsafe-negation': 'off', // ts(2365) & ts(2360) & ts(2358)
        'no-var': 'error', // ts transpiles let/const to var, so no need for vars any more
        'prefer-const': 'error', // ts provides better types with const
        'prefer-rest-params': 'error', // ts provides better types with rest args over arguments
        'prefer-spread': 'error', // ts transpiles spread to apply, so no need for manual apply
        'valid-typeof': 'off', // ts(2367)
        'no-array-constructor': 'off',
        'no-extra-semi': 'off',
        'no-loss-of-precision': 'off',
        'no-unused-vars': 'off',
        // Require that function overload signatures be consecutive.
        // https://typescript-eslint.io/rules/adjacent-overload-signatures
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        // Require consistently using either T[] or Array<T> for arrays.
        // https://typescript-eslint.io/rules/array-type
        '@typescript-eslint/array-type': 'error',
        // Disallow awaiting a value that is not a Thenable.
        // https://typescript-eslint.io/rules/await-thenable
        '@typescript-eslint/await-thenable': 'error',
        // Disallow @ts-<directive> comments or require descriptions after directives.
        // https://typescript-eslint.io/rules/ban-ts-comment
        '@typescript-eslint/ban-ts-comment': [
          'error',
          {
            'ts-expect-error': 'allow-with-description',
            'ts-ignore': true,
            'ts-nocheck': true,
            'ts-check': false,
            minimumDescriptionLength: 3,
          },
        ],
        // Disallow // tslint:<rule-flag> comments.
        // https://typescript-eslint.io/rules/ban-tslint-comment
        '@typescript-eslint/ban-tslint-comment': 'error',
        // Disallow certain types.
        // https://typescript-eslint.io/rules/ban-types
        '@typescript-eslint/ban-types': 'error',
        // Enforce that literals on classes are exposed in a consistent style.
        // https://typescript-eslint.io/rules/class-literal-property-style
        '@typescript-eslint/class-literal-property-style': 'error',
        // Enforce specifying generic type arguments on type annotation or constructor name of a constructor call.
        // https://typescript-eslint.io/rules/consistent-generic-constructors
        '@typescript-eslint/consistent-generic-constructors': 'error',
        // Require or disallow the Record type.
        // https://typescript-eslint.io/rules/consistent-indexed-object-style
        '@typescript-eslint/consistent-indexed-object-style': 'error',
        // Enforce consistent usage of type assertions.
        // https://typescript-eslint.io/rules/consistent-type-assertions
        '@typescript-eslint/consistent-type-assertions': 'error',
        // Enforce type definitions to consistently use either interface or type.
        // https://typescript-eslint.io/rules/consistent-type-definitions
        '@typescript-eslint/consistent-type-definitions': ['off', 'type'],
        // Enforce consistent usage of type exports.
        // https://typescript-eslint.io/rules/consistent-type-exports
        '@typescript-eslint/consistent-type-exports': 'error',
        // Enforce consistent usage of type imports.
        // https://typescript-eslint.io/rules/consistent-type-imports
        '@typescript-eslint/consistent-type-imports': [
          'error',
          {
            prefer: 'type-imports',
            fixStyle: 'inline-type-imports',
          },
        ],
        // Require explicit return types on functions and class methods.
        // OFF: because we favor type inference
        // https://typescript-eslint.io/rules/explicit-function-return-type
        '@typescript-eslint/explicit-function-return-type': 'off',
        // Require explicit accessibility modifiers on class properties and methods.
        // OFF: we will consider turn this on if necessary
        // https://typescript-eslint.io/rules/explicit-member-accessibility
        '@typescript-eslint/explicit-member-accessibility': 'off',
        // Require explicit return and argument types on exported functions' and classes' public class methods.
        // OFF: because we favor type inference
        // https://typescript-eslint.io/rules/explicit-module-boundary-types
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        // Require a consistent member declaration order.
        // https://typescript-eslint.io/rules/member-ordering
        '@typescript-eslint/member-ordering': 'error',
        // Enforce using a particular method signature syntax.
        // https://typescript-eslint.io/rules/method-signature-style
        '@typescript-eslint/method-signature-style': 'error',
        // Enforce naming conventions for everything across a codebase.
        // OFF: this is too strict
        // https://typescript-eslint.io/rules/naming-convention
        '@typescript-eslint/naming-convention': 'off',
        // Require .toString() to only be called on objects which provide useful information when stringified.
        // https://typescript-eslint.io/rules/no-base-to-string
        '@typescript-eslint/no-base-to-string': 'error',
        // Disallow non-null assertion in locations that may be confusing.
        // https://typescript-eslint.io/rules/no-confusing-non-null-assertion
        '@typescript-eslint/no-confusing-non-null-assertion': 'error',
        // Require expressions of type void to appear in statement position.
        // https://typescript-eslint.io/rules/no-confusing-void-expression
        '@typescript-eslint/no-confusing-void-expression': 'error',
        // Disallow duplicate enum member values.
        // https://typescript-eslint.io/rules/no-duplicate-enum-values
        '@typescript-eslint/no-duplicate-enum-values': 'error',
        // Disallow duplicate constituents of union or intersection types.
        // https://typescript-eslint.io/rules/no-duplicate-type-constituents
        '@typescript-eslint/no-duplicate-type-constituents': 'error',
        // Disallow using the delete operator on computed key expressions.
        // https://typescript-eslint.io/rules/no-dynamic-delete
        '@typescript-eslint/no-dynamic-delete': 'error',
        // Disallow the declaration of empty interfaces.
        // https://typescript-eslint.io/rules/no-empty-interface
        '@typescript-eslint/no-empty-interface': 'error',
        // Disallow the any type.
        // https://typescript-eslint.io/rules/no-explicit-any
        '@typescript-eslint/no-explicit-any': 'off',
        // Disallow extra non-null assertion.
        // https://typescript-eslint.io/rules/no-extra-non-null-assertion
        '@typescript-eslint/no-extra-non-null-assertion': 'error',
        // Disallow classes used as namespaces.
        // https://typescript-eslint.io/rules/no-extraneous-class
        '@typescript-eslint/no-extraneous-class': 'error',
        // Require Promise-like statements to be handled appropriately.
        // https://typescript-eslint.io/rules/no-floating-promises
        '@typescript-eslint/no-floating-promises': 'error',
        // Disallow iterating over an array with a for-in loop.
        // https://typescript-eslint.io/rules/no-for-in-array
        '@typescript-eslint/no-for-in-array': 'error',
        // Enforce the use of top-level import type qualifier when an import only has specifiers with inline type qualifiers.
        // https://typescript-eslint.io/rules/no-import-type-side-effects
        '@typescript-eslint/no-import-type-side-effects': 'error',
        // Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean.
        // https://typescript-eslint.io/rules/no-inferrable-types
        '@typescript-eslint/no-inferrable-types': 'error',
        // Disallow void type outside of generic or return types.
        // https://typescript-eslint.io/rules/no-invalid-void-type
        '@typescript-eslint/no-invalid-void-type': 'error',
        // Disallow the void operator except when used to discard a value.
        // https://typescript-eslint.io/rules/no-meaningless-void-operator
        '@typescript-eslint/no-meaningless-void-operator': 'error',
        // Enforce valid definition of new and constructor.
        // https://typescript-eslint.io/rules/no-misused-new
        '@typescript-eslint/no-misused-new': 'error',
        // Disallow Promises in places not designed to handle them.
        // https://typescript-eslint.io/rules/no-misused-promises
        '@typescript-eslint/no-misused-promises': 'error',
        // Disallow enums from having both number and string members.
        // https://typescript-eslint.io/rules/no-mixed-enums
        '@typescript-eslint/no-mixed-enums': 'error',
        // Disallow TypeScript namespaces.
        // https://typescript-eslint.io/rules/no-namespace
        '@typescript-eslint/no-namespace': 'error',
        // Disallow non-null assertions in the left operand of a nullish coalescing operator.
        // https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing
        '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
        // Disallow non-null assertions after an optional chain expression.
        // https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
        // Disallow non-null assertions using the ! postfix operator.
        // https://typescript-eslint.io/rules/no-non-null-assertion
        '@typescript-eslint/no-non-null-assertion': 'error',
        // Disallow members of unions and intersections that do nothing or override type information.
        // https://typescript-eslint.io/rules/no-redundant-type-constituents
        '@typescript-eslint/no-redundant-type-constituents': 'error',
        // Disallow invocation of require().
        // https://typescript-eslint.io/rules/no-require-imports
        '@typescript-eslint/no-require-imports': 'error',
        // Disallow aliasing this.
        // https://typescript-eslint.io/rules/no-this-alias
        '@typescript-eslint/no-this-alias': 'error',
        // Disallow type aliases.
        // OFF: we favor type aliases over interfaces
        // https://typescript-eslint.io/rules/no-type-alias
        '@typescript-eslint/no-type-alias': 'off',
        // Disallow unnecessary equality comparisons against boolean literals.
        // https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
        // Disallow conditionals where the type is always truthy or always falsy.
        // https://typescript-eslint.io/rules/no-unnecessary-condition
        // OFF: this cause problems
        '@typescript-eslint/no-unnecessary-condition': 'off',
        // Disallow unnecessary namespace qualifiers.
        // https://typescript-eslint.io/rules/no-unnecessary-qualifier
        '@typescript-eslint/no-unnecessary-qualifier': 'error',
        // Disallow type arguments that are equal to the default.
        // https://typescript-eslint.io/rules/no-unnecessary-type-arguments
        '@typescript-eslint/no-unnecessary-type-arguments': 'error',
        // Disallow type assertions that do not change the type of an expression.
        // https://typescript-eslint.io/rules/no-unnecessary-type-assertion
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        // Disallow unnecessary constraints on generic types.
        // https://typescript-eslint.io/rules/no-unnecessary-type-constraint
        '@typescript-eslint/no-unnecessary-type-constraint': 'error',
        // Disallow calling a function with a value with type any.
        // https://typescript-eslint.io/rules/no-unsafe-argument
        // OFF: too strict
        '@typescript-eslint/no-unsafe-argument': 'off',
        // Disallow assigning a value with type any to variables and properties.
        // https://typescript-eslint.io/rules/no-unsafe-assignment
        // OFF: too strict
        '@typescript-eslint/no-unsafe-assignment': 'off',
        // Disallow calling a value with type any.
        // https://typescript-eslint.io/rules/no-unsafe-call
        // OFF: too strict
        '@typescript-eslint/no-unsafe-call': 'off',
        // Disallow unsafe declaration merging.
        // https://typescript-eslint.io/rules/no-unsafe-declaration-merging
        '@typescript-eslint/no-unsafe-declaration-merging': 'error',
        // Disallow comparing an enum value with a non-enum value.
        // https://typescript-eslint.io/rules/no-unsafe-enum-comparison
        '@typescript-eslint/no-unsafe-enum-comparison': 'error',
        // Disallow member access on a value with type any.
        // https://typescript-eslint.io/rules/no-unsafe-member-access
        // OFF: too strict
        '@typescript-eslint/no-unsafe-member-access': 'off',
        // Disallow returning a value with type any from a function.
        // https://typescript-eslint.io/rules/no-unsafe-return
        '@typescript-eslint/no-unsafe-return': 'off',
        // https://typescript-eslint.io/rules/no-useless-empty-export
        // Disallow empty exports that don't change anything in a module file.
        '@typescript-eslint/no-useless-empty-export': 'error',
        // Disallow require statements except in import statements.
        // OFF: not useful
        // https://typescript-eslint.io/rules/no-var-requires
        '@typescript-eslint/no-var-requires': 'off',
        // Enforce non-null assertions over explicit type casts.
        // https://typescript-eslint.io/rules/non-nullable-type-assertion-style
        '@typescript-eslint/non-nullable-type-assertion-style': 'error',
        // Require or disallow parameter properties in class constructors.
        // https://typescript-eslint.io/rules/parameter-properties
        '@typescript-eslint/parameter-properties': 'off',
        // Enforce the use of as const over literal type.
        // https://typescript-eslint.io/rules/prefer-as-const
        '@typescript-eslint/prefer-as-const': 'error',
        // Require each enum member value to be explicitly initialized.
        // https://typescript-eslint.io/rules/prefer-enum-initializers
        '@typescript-eslint/prefer-enum-initializers': 'error',
        // Enforce the use of for-of loop over the standard for loop where possible.
        // https://typescript-eslint.io/rules/prefer-for-of
        '@typescript-eslint/prefer-for-of': 'error',
        // Enforce using function types instead of interfaces with call signatures.
        // https://typescript-eslint.io/rules/prefer-function-type
        '@typescript-eslint/prefer-function-type': 'error',
        // Enforce includes method over indexOf method.
        // https://typescript-eslint.io/rules/prefer-includes/
        '@typescript-eslint/prefer-includes': 'error',
        // Require all enum members to be literal values.
        // https://typescript-eslint.io/rules/prefer-literal-enum-member
        '@typescript-eslint/prefer-literal-enum-member': 'error',
        // Require using namespace keyword over module keyword to declare custom TypeScript modules.
        // https://typescript-eslint.io/rules/prefer-namespace-keyword
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        // Enforce using the nullish coalescing operator instead of logical chaining.
        // https://typescript-eslint.io/rules/prefer-nullish-coalescing
        '@typescript-eslint/prefer-nullish-coalescing': 'error',
        // Enforce using concise optional chain expressions instead of chained logical ands, negated logical ors, or empty objects.
        // https://typescript-eslint.io/rules/prefer-optional-chain
        '@typescript-eslint/prefer-optional-chain': 'error',
        // Require private members to be marked as readonly if they're never modified outside of the constructor.
        // https://typescript-eslint.io/rules/prefer-readonly
        // OFF: not useful
        '@typescript-eslint/prefer-readonly': 'off',
        // Require function parameters to be typed as readonly to prevent accidental mutation of inputs.
        // https://typescript-eslint.io/rules/prefer-readonly-parameter-types
        // OFF :not useful
        '@typescript-eslint/prefer-readonly-parameter-types': 'off',
        // Enforce using type parameter when calling Array#reduce instead of casting.
        // https://typescript-eslint.io/rules/prefer-reduce-type-parameter
        // OFF: too strict
        '@typescript-eslint/prefer-reduce-type-parameter': 'off',
        // Enforce RegExp#exec over String#match if no global flag is provided.
        // https://typescript-eslint.io/rules/prefer-regexp-exec
        '@typescript-eslint/prefer-regexp-exec': 'error',
        // Enforce that this is used when only this type is returned.
        // https://typescript-eslint.io/rules/prefer-return-this-type
        '@typescript-eslint/prefer-return-this-type': 'error',
        // Enforce using String#startsWith and String#endsWith over other equivalent methods of checking substrings.
        // https://typescript-eslint.io/rules/prefer-string-starts-ends-with
        '@typescript-eslint/prefer-string-starts-ends-with': 'error',
        // Enforce using @ts-expect-error over @ts-ignore.
        // https://typescript-eslint.io/rules/prefer-ts-expect-error
        '@typescript-eslint/prefer-ts-expect-error': 'error',
        // Require any function or method that returns a Promise to be marked async.
        // https://typescript-eslint.io/rules/promise-function-async
        '@typescript-eslint/promise-function-async': 'error',
        // Require Array#sort calls to always provide a compareFunction.
        // https://typescript-eslint.io/rules/require-array-sort-compare
        '@typescript-eslint/require-array-sort-compare': 'error',
        // Require both operands of addition to be the same type and be bigint, number, or string.
        // https://typescript-eslint.io/rules/restrict-plus-operands
        '@typescript-eslint/restrict-plus-operands': 'error',
        // Enforce template literal expressions to be of string type.
        // https://typescript-eslint.io/rules/restrict-template-expressions
        // OFF: not needed
        '@typescript-eslint/restrict-template-expressions': 'off',
        // Enforce constituents of a type union/intersection to be sorted alphabetically.
        // https://typescript-eslint.io/rules/sort-type-constituents
        '@typescript-eslint/sort-type-constituents': 'error',
        // Disallow certain types in boolean expressions.
        // https://typescript-eslint.io/rules/strict-boolean-expressions
        '@typescript-eslint/strict-boolean-expressions': 'off',
        // Require switch-case statements to be exhaustive with union type.
        // https://typescript-eslint.io/rules/switch-exhaustiveness-check
        // OFF: not needed
        '@typescript-eslint/switch-exhaustiveness-check': 'off',
        // Disallow certain triple slash directives in favor of ES6-style import declarations.
        // https://typescript-eslint.io/rules/triple-slash-reference
        '@typescript-eslint/triple-slash-reference': 'error',
        // Require type annotations in certain places.
        // https://typescript-eslint.io/rules/typedef
        // OFF: not needed
        '@typescript-eslint/typedef': 'off',
        // Enforce unbound methods are called with their expected scope.
        // https://typescript-eslint.io/rules/unbound-method
        // OFF: not needed
        '@typescript-eslint/unbound-method': 'off',
        // Disallow two overloads that could be unified into one with a union or an optional/rest parameter.
        // https://typescript-eslint.io/rules/unified-signatures
        '@typescript-eslint/unified-signatures': 'error',
        // Enforce default parameters to be last.
        // https://typescript-eslint.io/rules/default-param-last
        'default-param-last': 'off',
        // Disallow variable declarations from shadowing variables declared in the outer scope.
        // https://typescript-eslint.io/rules/no-shadow
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error',
        // Enforce default parameters to be last.
        // https://typescript-eslint.io/rules/default-param-last
        '@typescript-eslint/default-param-last': 'error',
        // Disallow generic Array constructors.
        // https://typescript-eslint.io/rules/no-array-constructor
        '@typescript-eslint/no-array-constructor': 'error',
        // Disallow unnecessary semicolons.
        // https://typescript-eslint.io/rules/no-extra-semi
        '@typescript-eslint/no-extra-semi': 'error',
        // Disallow literal numbers that lose precision.
        // https://typescript-eslint.io/rules/no-loss-of-precision
        '@typescript-eslint/no-loss-of-precision': 'error',
        // Disallow unused variables.
        // https://typescript-eslint.io/rules/no-unused-vars
        '@typescript-eslint/no-unused-vars': 'warn',
        // Disallow empty functions.
        // https://typescript-eslint.io/rules/no-empty-function
        '@typescript-eslint/no-empty-function': 'off',
      },
    },
  ],
  settings: {
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts'],
    },
    'import/resolver': {
      [require.resolve('eslint-import-resolver-node')]: {
        extensions: ['.ts', 'js'],
      },
      [require.resolve('eslint-import-resolver-typescript')]: {
        alwaysTryTypes: true,
      },
    },
  },
};

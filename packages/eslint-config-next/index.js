/* eslint-env node */
module.exports = {
  root: true,
  extends: ['next'],
  plugins: ['@typescript-eslint', '@chotot/chotot'],
  reportUnusedDisableDirectives: true,
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  rules: {
    // Prevent ad-blocker prone words
    // https://github.com/ChoTotOSS/chotot-web-standards/blob/master/javascript/packages/eslint-plugin-chotot/docs/rules/filepath-no-ads.md
    '@chotot/chotot/filepath-no-ads': 'error',
    // Forbid the use of eslint-disable* without specific rule
    // https://github.com/ChoTotOSS/chotot-web-standards/blob/master/javascript/packages/eslint-plugin-chotot/docs/rules/no-abusive-eslint-disable.md
    '@chotot/chotot/no-abusive-eslint-disable': 'error',
    // Uses safe-regex to disallow potentially catastrophic exponential-time regular expressions.
    // https://github.com/ChoTotOSS/chotot-web-standards/blob/master/javascript/packages/eslint-plugin-chotot/docs/rules/no-unsafe-regex.md
    '@chotot/chotot/no-unsafe-regex': 'error',
    // Require `Array.isArray()` instead of `instanceof Array`
    // https://github.com/ChoTotOSS/chotot-web-standards/blob/master/javascript/packages/eslint-plugin-chotot/docs/rules/no-instanceof-array.md
    '@chotot/chotot/no-instanceof-array': 'error',
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
        allow: ['arrowFunctions', 'functions', 'methods'],
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
    'no-useless-constructor': 'error',
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
    'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
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
    'jsx-a11y/alt-text': 'error',
    // Enforces <a> values are not exact matches for the phrases "click here", "here", "link", "a link", or "learn more".
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/anchor-ambiguous-text.md
    'jsx-a11y/anchor-ambiguous-text': 'off',
    // Enforce that anchors have content and that the content is accessible to screen readers.
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/anchor-has-content.md
    'jsx-a11y/anchor-has-content': 'error',
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/anchor-is-valid.md
    'jsx-a11y/anchor-is-valid': 'error',
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-activedescendant-has-tabindex.md
    'jsx-a11y/aria-activedescendant-has-tabindex': 'error',
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-props.md
    'jsx-a11y/aria-props': 'warn',
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-proptypes.md
    'jsx-a11y/aria-proptypes': 'warn',
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-role.md
    'jsx-a11y/aria-role': 'error',
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-unsupported-elements.md
    'jsx-a11y/aria-unsupported-elements': 'warn',
    // Ensure the autocomplete attribute is correct and suitable for the form field it is used with.
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/autocomplete-valid.md
    'jsx-a11y/autocomplete-valid': 'error',
    // Enforce onClick is accompanied by at least one of the following: onKeyUp, onKeyDown, onKeyPress.
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/click-events-have-key-events.md
    'jsx-a11y/click-events-have-key-events': 'error',
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/control-has-associated-label.md
    'jsx-a11y/control-has-associated-label': [
      'off',
      {
        ignoreElements: ['audio', 'canvas', 'embed', 'input', 'textarea', 'tr', 'video'],
        ignoreRoles: [
          'grid',
          'listbox',
          'menu',
          'menubar',
          'radiogroup',
          'row',
          'tablist',
          'toolbar',
          'tree',
          'treegrid',
        ],
        includeRoles: ['alert', 'dialog'],
      },
    ],
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/heading-has-content.md
    'jsx-a11y/heading-has-content': 'error',
    // elements must have the lang prop.
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/html-has-lang.md
    'jsx-a11y/html-has-lang': 'error',
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/iframe-has-title.md
    'jsx-a11y/iframe-has-title': 'error',
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/img-redundant-alt.md
    'jsx-a11y/img-redundant-alt': 'error',
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/interactive-supports-focus.md
    'jsx-a11y/interactive-supports-focus': [
      'error',
      {
        tabbable: ['button', 'checkbox', 'link', 'searchbox', 'spinbutton', 'switch', 'textbox'],
      },
    ],
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/label-has-associated-control.md
    'jsx-a11y/label-has-associated-control': 'error',
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/label-has-for.md
    'jsx-a11y/label-has-for': 'off',
    // The lang prop on the <html> element must be a valid IETF's BCP 47 language tag.
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/lang.md
    'jsx-a11y/lang': 'error',
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/media-has-caption.md
    'jsx-a11y/media-has-caption': 'error',
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/mouse-events-have-key-events.md
    'jsx-a11y/mouse-events-have-key-events': 'error',
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-access-key.md
    'jsx-a11y/no-access-key': 'error',
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-autofocus.md
    'jsx-a11y/no-autofocus': 'error',
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-distracting-elements.md
    'jsx-a11y/no-distracting-elements': 'error',
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-interactive-element-to-noninteractive-role.md
    'jsx-a11y/no-interactive-element-to-noninteractive-role': [
      'error',
      {
        tr: ['none', 'presentation'],
        canvas: ['img'],
      },
    ],
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-noninteractive-element-interactions.md
    'jsx-a11y/no-noninteractive-element-interactions': [
      'error',
      {
        handlers: [
          'onClick',
          'onError',
          'onLoad',
          'onMouseDown',
          'onMouseUp',
          'onKeyPress',
          'onKeyDown',
          'onKeyUp',
        ],
        alert: ['onKeyUp', 'onKeyDown', 'onKeyPress'],
        body: ['onError', 'onLoad'],
        dialog: ['onKeyUp', 'onKeyDown', 'onKeyPress'],
        iframe: ['onError', 'onLoad'],
        img: ['onError', 'onLoad'],
      },
    ],
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-noninteractive-element-to-interactive-role.md
    'jsx-a11y/no-noninteractive-element-to-interactive-role': [
      'error',
      {
        ul: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
        ol: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
        li: ['menuitem', 'option', 'row', 'tab', 'treeitem'],
        table: ['grid'],
        td: ['gridcell'],
        fieldset: ['radiogroup', 'presentation'],
      },
    ],
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-noninteractive-tabindex.md
    'jsx-a11y/no-noninteractive-tabindex': [
      'error',
      {
        tags: [],
        roles: ['tabpanel'],
        allowExpressionValues: true,
      },
    ],
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-redundant-roles.md
    'jsx-a11y/no-redundant-roles': 'error',
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-static-element-interactions.md
    'jsx-a11y/no-static-element-interactions': [
      'error',
      {
        allowExpressionValues: true,
        handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp'],
      },
    ],
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/role-has-required-aria-props.md
    'jsx-a11y/role-has-required-aria-props': 'warn',
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/role-supports-aria-props.md
    'jsx-a11y/role-supports-aria-props': 'warn',
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/scope.md
    'jsx-a11y/scope': 'error',
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/tabindex-no-positive.md
    'jsx-a11y/tabindex-no-positive': 'error',
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
    'react/jsx-sort-props': [
      'off',
      {
        callbacksLast: true,
        shorthandFirst: true,
        noSortAlphabetically: false,
        reservedFirst: true,
        locale: 'auto',
      },
    ],
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
      },
    ],
    // Allows you to enforce a consistent naming pattern for props which expect a boolean value.
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md
    'react/boolean-prop-naming': [
      'off',
      {
        propTypeNames: ['bool', 'mutuallyExclusiveTrueProps'],
        rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
        message: '',
      },
    ],
    // Prevent usage of button elements without an explicit type attribute
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
    'react/button-has-type': [
      'error',
      {
        button: true,
        submit: true,
        reset: false,
      },
    ],
    // Enforce all defaultProps have a corresponding non-required PropType
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md
    'react/default-props-match-prop-types': ['off', { allowRequiredDefaults: false }],
    // Enforce consistent usage of destructuring assignment of props, state, and context
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
    // OFF
    'react/destructuring-assignment': ['off', 'always'],
    // DisplayName allows you to name your component. This name is used by React in debugging messages.
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/display-name.md
    // OFF
    'react/display-name': ['off', { ignoreTranspilerName: false }],
    // Forbid certain props on Components
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
    // OFF
    'react/forbid-component-props': ['off', { forbid: [] }],
    // Forbid certain props on DOM Nodes
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-dom-props.md
    // OFF
    'react/forbid-dom-props': ['off', { forbid: [] }],
    // Forbid certain elements
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md
    // OFF
    'react/forbid-elements': ['off', { forbid: [] }],
    // Forbids using non-exported propTypes
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
    // OFF
    'react/forbid-foreign-prop-types': ['warn', { allowInPropTypes: true }],
    // Forbid certain propTypes (any, array, object)
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
    'react/forbid-prop-types': [
      'error',
      {
        forbid: ['any', 'array', 'object'],
        checkContextTypes: true,
        checkChildContextTypes: true,
      },
    ],
    // This rule checks whether the value and setter variables destructured from a React.useState() call are named symmetrically.
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/hook-use-state.md
    'react/hook-use-state': 'off',
    // Enforce sandbox attribute on iframe elements
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/iframe-missing-sandbox.md
    'react/iframe-missing-sandbox': 'error',
    // Enforce boolean attributes notation in JSX
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
    'react/jsx-boolean-value': ['error', 'never', { always: [] }],
    // Ensures inline tags are not rendered without spaces between them
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-child-element-spacing.md
    'react/jsx-child-element-spacing': 'off',
    // Validate closing bracket location in JSX
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
    // Validate closing tag location in JSX
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
    // DISABLE: sometimes conflict with prettier
    'react/jsx-closing-tag-location': 'off',
    // Enforce curly braces or disallow unnecessary curly braces in JSX props and/or children
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
    // DISABLE for prettier: Enforce linebreaks in curly braces in JSX attributes and expressions.
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md
    'react/jsx-curly-newline': [
      'off',
      {
        multiline: 'consistent',
        singleline: 'consistent',
      },
    ],
    // Enforce or disallow spaces inside of curly braces in JSX attributes
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
    'react/jsx-curly-spacing': ['error', 'never', { allowMultiline: true }],
    // Enforce spacing around jsx equals signs
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
    'react/jsx-equals-spacing': ['error', 'never'],
    // DISABLE: only .jsx files may have JSX
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': 'off',
    // Require that the first prop in a JSX element be on a new line when the element is multiline
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    // DISABLE: Enforce shorthand or standard form for React fragments
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
    'react/jsx-fragments': ['off', 'syntax'],
    // Enforce event handler naming conventions in JSX
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
    'react/jsx-handler-names': [
      'off',
      {
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
      },
    ],
    // Validate props indentation in JSX
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
    'react/jsx-indent-props': ['error', 2],
    // DISABLE for prettier: Enforce JSX indentation
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
    'react/jsx-indent': ['off', 2],
    // Validate JSX has key prop when in array or iterator
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
    'react/jsx-key': 'error',
    // Validate JSX maximum depth
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-max-depth.md
    'react/jsx-max-depth': 'off',
    // Limit maximum of props on a single line in JSX
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
    'react/jsx-max-props-per-line': ['off', { maximum: 1, when: 'multiline' }],
    // DISABLED: This is a stylistic rule intended to make JSX code more readable by requiring or preventing lines between adjacent JSX elements and expressions.
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-newline.md
    'react/jsx-newline': 'off',
    // Prevent usage of .bind() in JSX props
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
    'react/jsx-no-bind': [
      'error',
      {
        ignoreRefs: true,
        allowArrowFunctions: true,
        allowFunctions: false,
        allowBind: false,
        ignoreDOMComponents: true,
      },
    ],
    // prevent accidental JS comments from being injected into JSX as text
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
    'react/jsx-no-comment-textnodes': 'error',
    // This rule prevents non-stable values (i.e. object identities) from being used as a value for Context.Provider.
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md
    'react/jsx-no-constructed-context-values': 'error',
    // Prevent duplicate props in JSX
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
    // Disallow problematic leaked values from being rendered
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-leaked-render.md
    'react/jsx-no-leaked-render': 'error',
    // Prevent usage of unwrapped JSX strings
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
    'react/jsx-no-literals': ['off', { noStrings: true }],
    // Disallow target="_blank" on links
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
    'react/jsx-no-target-blank': ['off', { enforceDynamicLinks: 'always' }],
    // Disallow undeclared variables in JSX
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
    'react/jsx-no-undef': 'error',
    // Disallow unnecessary fragments
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
    'react/jsx-no-useless-fragment': 'error',
    // DISABLE for prettier: One JSX Element Per Line
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
    'react/jsx-one-expression-per-line': ['off', { allow: 'single-child' }],
    // Enforce PascalCase for user-defined JSX components
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
    'react/jsx-pascal-case': [
      'error',
      {
        allowAllCaps: true,
        ignore: [],
      },
    ],
    // Disallow multiple spaces between inline JSX props
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md
    'react/jsx-props-no-multi-spaces': 'error',
    // Disallow JSX props spreading
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
    'react/jsx-props-no-spreading': [
      'error',
      {
        html: 'enforce',
        custom: 'enforce',
        exceptions: [],
      },
    ],
    // Deprecated in favor of react/jsx-sort-props
    'react/jsx-sort-prop-types': 'off',
    // Validate whitespace in and around the JSX opening and closing brackets
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
    'react/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never',
      },
    ],
    // Prevent React to be incorrectly marked as unused
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
    'react/jsx-uses-react': ['error'],
    // Prevent variables used in JSX to be incorrectly marked as unused
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
    'react/jsx-uses-vars': 'error',
    // Prevent missing parentheses around multilines JSX
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
    // DISABLE: conflict with prettier
    'react/jsx-wrap-multilines': [
      'off',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'ignore',
      },
    ],
    // Prevent using this.state within a this.setState
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
    'react/no-access-state-in-setstate': 'error',
    // Prevent adjacent inline elements not separated by whitespace.
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-adjacent-inline-elements.md
    'react/no-adjacent-inline-elements': 'off',
    // Prevent usage of Array index in keys
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
    'react/no-array-index-key': 'error',
    // Lifecycle methods should be methods on the prototype, not class fields
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-arrow-function-lifecycle.md
    'react/no-arrow-function-lifecycle': 'off',
    // Prevent passing of children as props
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
    'react/no-children-prop': 'error',
    // Prevent problem with children and props.dangerouslySetInnerHTML
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
    'react/no-danger-with-children': 'error',
    // Prevent usage of dangerous JSX properties
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger.md
    'react/no-danger': 'warn',
    // Prevent usage of deprecated methods
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
    'react/no-deprecated': ['error'],
    // Prevent usage of setState in componentDidMount
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
    // this is necessary for server-rendering
    'react/no-did-mount-set-state': 'off',
    // Prevent usage of setState in componentDidUpdate
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
    'react/no-did-update-set-state': 'error',
    // Prevent direct mutation of this.state
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
    'react/no-direct-mutation-state': 'error',
    // warn against using findDOMNode()
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
    'react/no-find-dom-node': 'error',
    // Prevent usage of invalid attributes
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-invalid-html-attribute.md
    'react/no-invalid-html-attribute': 'error',
    // Prevent usage of isMounted
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
    'react/no-is-mounted': 'error',
    // Prevent multiple component definition per file
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
    'react/no-multi-comp': 'off',
    // Enforce that namespaces are not used in React elements
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-namespace.md
    'react/no-namespace': 'error',
    // Prevent usage of shouldComponentUpdate when extending React.PureComponent
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md
    'react/no-redundant-should-component-update': 'error',
    // disallow using React.render/ReactDOM.render's return value
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
    'react/no-render-return-value': 'error',
    // Prevent usage of setState
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
    'react/no-set-state': 'off',
    // DISABLE: Prevent using string references
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
    'react/no-string-refs': 'off',
    // Prevent this from being used in stateless functional components
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
    'react/no-this-in-sfc': 'error',
    // Prevents common casing typos
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-typos.md
    'react/no-typos': 'error',
    // Prevent invalid characters from appearing in markup
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
    'react/no-unescaped-entities': 'error',
    // Prevent usage of unknown DOM property
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
    'react/no-unknown-property': 'off',
    // Prevent usage of UNSAFE_ methods
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md
    'react/no-unsafe': 'off',
    // Creating components inside components without memoization leads to unstable components. The nested component and all
    // its children are recreated during each re-render. Given stateful children of the nested component will lose their state on each re-render.
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md
    'react/no-unstable-nested-components': ['error', { allowAsProps: false }],
    // Prevent declaring unused methods of component class
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-class-component-methods.md
    'react/no-unused-class-component-methods': 'error',
    // Prevent unused propType definitions
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
    'react/no-unused-prop-types': [
      'error',
      {
        customValidators: [],
        skipShapeProps: true,
      },
    ],
    // Prevent unused state values
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md
    'react/no-unused-state': 'error',
    // Prevent usage of setState in componentWillUpdate
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
    'react/no-will-update-set-state': 'error',
    // Require ES6 class declarations over React.createClass
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
    'react/prefer-es6-class': ['error', 'always'],
    // Prefer exact proptype definitions
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-exact-props.md
    'react/prefer-exact-props': 'warn',
    // Enforce that props are read-only
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-read-only-props.md
    'react/prefer-read-only-props': 'off',
    // DISABLE: Require stateless functions when not using lifecycle methods, setState or ref
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
    'react/prefer-stateless-function': 'off',
    // Prevent missing props validation in a React component definition
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    // OFF: use typescript
    'react/prop-types': [
      'off',
      {
        ignore: [],
        customValidators: [],
        skipUndeclared: false,
      },
    ],
    // Prevent missing React when using JSX
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
    'react/react-in-jsx-scope': 'off',
    // Enforce a defaultProps definition for every prop that is not a required prop
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
    'react/require-default-props': [
      'error',
      {
        forbidDefaultForRequired: true,
        ignoreFunctionalComponents: true,
      },
    ],
    // require a shouldComponentUpdate method, or PureRenderMixin
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-optimization.md
    'react/require-optimization': ['off', { allowDecorators: [] }],
    // Require render() methods to return something
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
    'react/require-render-return': 'error',
    // Prevent extra closing tags for components without children
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
    'react/self-closing-comp': 'error',
    // Enforce propTypes declarations alphabetical sorting
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
    'react/sort-prop-types': [
      'off',
      {
        ignoreCase: true,
        callbacksLast: false,
        requiredFirst: false,
        sortShapeProp: true,
      },
    ],
    // Enforce state initialization style
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md
    'react/state-in-constructor': ['error', 'never'],
    // Enforces where React component static properties should be positioned
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md
    'react/static-property-placement': ['error', 'static public field'],
    // Require style prop value be an object or var
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
    'react/style-prop-object': 'error',
    // Prevent void DOM elements from receiving children
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
    'react/void-dom-elements-no-children': 'error',
    // https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/src/RulesOfHooks.js
    'react-hooks/rules-of-hooks': 'error',
    // https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/src/ExhaustiveDeps.js
    'react-hooks/exhaustive-deps': 'warn',
    // Enforce font-display behavior with Google Fonts.
    // https://nextjs.org/docs/messages/google-font-display
    '@next/next/google-font-display': 'warn',
    // Ensure preconnect is used with Google Fonts.
    // https://nextjs.org/docs/messages/google-font-preconnect
    '@next/next/google-font-preconnect': 'warn',
    // Prefer next/script component when using the inline script for Google Analytics.
    // https://nextjs.org/docs/messages/next-script-for-ga
    '@next/next/next-script-for-ga': 'warn',
    // Prevent usage of next/script's beforeInteractive strategy outside of pages/_document.js.
    // https://nextjs.org/docs/messages/no-before-interactive-script-outside-document
    '@next/next/no-before-interactive-script-outside-document': 'warn',
    // Prevent manual stylesheet tags.
    // https://nextjs.org/docs/messages/no-css-tags
    '@next/next/no-css-tags': 'warn',
    // Prevent usage of <head> element.
    // https://nextjs.org/docs/messages/no-head-element
    '@next/next/no-head-element': 'warn',
    // Prevent usage of <a> elements to navigate to internal Next.js pages.
    // https://nextjs.org/docs/messages/no-html-link-for-pages
    '@next/next/no-html-link-for-pages': 'warn',
    // Prevent usage of <a> elements to navigate to internal Next.js pages.
    // https://nextjs.org/docs/messages/no-html-link-for-pages
    '@next/next/no-page-custom-font': 'warn',
    // https://nextjs.org/docs/messages/no-styled-jsx-in-document
    // Prevent usage of styled-jsx in pages/_document.js.
    '@next/next/no-styled-jsx-in-document': 'warn',
    // Prevent synchronous scripts.
    // https://nextjs.org/docs/messages/no-sync-scripts
    '@next/next/no-sync-scripts': 'warn',
    // Prevent usage of <title> with Head component from next/document.
    // https://nextjs.org/docs/messages/no-title-in-document-head
    '@next/next/no-title-in-document-head': 'warn',
    // 	Prevent common typos in Next.js's data fetching functions
    '@next/next/no-typos': 'warn',
    // Prevent duplicate polyfills from Polyfill.io.
    // https://nextjs.org/docs/messages/no-unwanted-polyfillio
    '@next/next/no-unwanted-polyfillio': 'warn',
    // https://nextjs.org/docs/messages/no-img-element
    // Prevent usage of <img> element due to slower LCP and higher bandwidth.
    '@next/next/no-img-element': 'off',
    // Enforce id attribute on next/script components with inline content.
    // https://nextjs.org/docs/messages/inline-script-id
    '@next/next/inline-script-id': 'error',
    // Prevent assignment to the module variable.
    // https://nextjs.org/docs/messages/no-assign-module-variable
    '@next/next/no-assign-module-variable': 'error',
    // Prevent importing next/document outside of pages/_document.js.
    // https://nextjs.org/docs/messages/no-document-import-in-page
    '@next/next/no-document-import-in-page': 'error',
    // Prevent duplicate usage of <Head> in pages/_document.js.
    // https://nextjs.org/docs/messages/no-duplicate-head
    '@next/next/no-duplicate-head': 'error',
    // Prevent usage of next/head in pages/_document.js.
    // https://nextjs.org/docs/messages/no-head-import-in-document
    '@next/next/no-head-import-in-document': 'error',
    // Prevent usage of next/script in next/head component.
    // https://nextjs.org/docs/messages/no-script-component-in-head
    '@next/next/no-script-component-in-head': 'error',
    // Prevent usage of <a> elements to navigate to internal Next.js pages.
    // https://nextjs.org/docs/messages/no-html-link-for-pages
    '@next/next/no-html-link-for-pages': 'error',
    // Prevent synchronous scripts.
    // https://nextjs.org/docs/messages/no-sync-scripts
    '@next/next/no-sync-scripts': 'error',
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parserOptions: {
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
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
        "react/require-default-props": "off",
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
        '@typescript-eslint/no-explicit-any': 'error',
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
        '@typescript-eslint/parameter-properties': 'error',
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
};

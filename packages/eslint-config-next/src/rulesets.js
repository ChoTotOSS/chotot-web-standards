const reactJSXA11yPluginRules = {
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
    'error',
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
};

const reactPluginRules = {
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
  'react/jsx-no-target-blank': ['error', { enforceDynamicLinks: 'always' }],
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
  'react/jsx-props-no-spreading': 'off',
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
  'react/no-unknown-property': 'error',
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
  'react/require-default-props': 'off',
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
};

const reactHooksPluginRules = {
  // https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/src/RulesOfHooks.js
  'react-hooks/rules-of-hooks': 'error',
  // https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/src/ExhaustiveDeps.js
  'react-hooks/exhaustive-deps': 'warn',
};

const nextPluginRules = {
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
};

module.exports = {
  reactJSXA11yPluginRules,
  reactPluginRules,
  reactHooksPluginRules,
  nextPluginRules,
};

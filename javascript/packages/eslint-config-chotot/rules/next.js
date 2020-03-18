/**
 * Set of rules to override / sepcific for Next.js framework
 */
module.exports = {
  plugins: [
    'jsx-a11y',
    'react',
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {
    // This is not required in Next.js project
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
    'react/react-in-jsx-scope': 'off',

    // ensure <a> tags are valid but allows noHref in Next's Link component
    'jsx-a11y/anchor-is-valid': ['error', {
      components: ['Link'],
      specialLink: ['to', 'route'],
      aspects: ['invalidHref', 'preferButton'],
    }],
  },
};

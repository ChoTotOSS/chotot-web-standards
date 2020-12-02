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
    // TODO: consider move this to rules/react since React 17 and new JSX transform
    // allows use JSX without importing React:
    // https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
    'react/react-in-jsx-scope': 'off',

    // ensure <a> tags are valid but allows noHref in Next's Link component
    'jsx-a11y/anchor-is-valid': ['error', {
      components: ['Link'],
      specialLink: ['to', 'route'],
      aspects: ['invalidHref', 'preferButton'],
    }],
  },
};

/**
 * Set of rules to override / sepcific for Next.js framework
 */
module.exports = {
  plugins: ['jsx-a11y', 'react', '@next/next'],

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
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to', 'route'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],

    // official eslint-plugin-next rules: https://github.com/vercel/next.js/tree/canary/packages/eslint-plugin-next/lib/rules

    // Enforce optional or swap font-display behavior with Google Fonts
    // https://nextjs.org/docs/messages/google-font-display
    '@next/next/google-font-display': 'warn',

    // Enforce preconnect usage with Google Fonts
    // https://nextjs.org/docs/messages/google-font-preconnect
    '@next/next/google-font-preconnect': 'warn',

    // Prevent manual stylesheet tags
    // https://nextjs.org/docs/messages/no-css-tags
    '@next/next/no-css-tags': 'warn',

    // Disallow importing next/document outside of pages/document.js
    // https://nextjs.org/docs/messages/no-document-import-in-page
    '@next/next/no-document-import-in-page': 'error',

    // Disallow importing next/head in pages/document.js
    // https://nextjs.org/docs/messages/no-head-import-in-document
    '@next/next/no-head-import-in-document': 'error',

    // DISABLED: Prohibit HTML anchor links to pages without a Link component
    // https://nextjs.org/docs/messages/no-html-link-for-pages
    '@next/next/no-html-link-for-pages': 'off',

    // Prohibit usage of HTML <img> element
    // https://nextjs.org/docs/messages/no-img-element
    '@next/next/no-img-element': 'warn',

    // Prevent page-only custom fonts
    // https://nextjs.org/docs/messages/no-page-custom-font
    '@next/next/no-page-custom-font': 'error',

    // Forbid synchronous scripts
    // https://nextjs.org/docs/messages/no-sync-scripts
    '@next/next/no-sync-scripts': 'error',

    // DISABLED: Disallow using <title> with Head from next/document
    // https://nextjs.org/docs/messages/no-sync-scripts
    // Chotot Dev note: <title> can be dynamic in document so this rule is not necessary
    '@next/next/no-title-in-document-head': 'off',

    // Prevent duplicate polyfills from Polyfill.io
    // https://nextjs.org/docs/messages/no-unwanted-polyfillio
    '@next/next/no-unwanted-polyfillio': 'error',
  },
};

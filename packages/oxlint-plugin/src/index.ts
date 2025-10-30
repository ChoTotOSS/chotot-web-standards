import { definePlugin } from 'oxlint';
import filepathNoAds from './rules/filepath-no-ads/oxlint.js';
import noEmptyCatch from './rules/no-empty-catch/oxlint.js';
import noUnsafeRegex from './rules/no-unsafe-regex/oxlint.js';

export default definePlugin({
  meta: { name: 'oxlint-plugin-chotot' },
  rules: {
    'filepath-no-ads': filepathNoAds,
    'no-unsafe-regex': noUnsafeRegex,
    'no-empty-catch': noEmptyCatch,
  },
});



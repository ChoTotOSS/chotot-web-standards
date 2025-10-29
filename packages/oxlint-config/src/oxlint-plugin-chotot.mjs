import { createRequire } from 'node:module';
import { defineRule } from 'oxlint';

const require = createRequire(import.meta.url);

// Import the Oxlint-specific rule object from eslint-plugin-chotot (no oxlint dep there)
const filepathNoAdsOx = require('@chotot/eslint-plugin-chotot/dist/rules/oxlintPort/filepath-no-ads/oxlint.js');
const noUnsafeRegexOx = require('@chotot/eslint-plugin-chotot/dist/rules/oxlintPort/no-unsafe-regex/oxlint.js');
const noEmptyCatchOx = require('@chotot/eslint-plugin-chotot/dist/rules/oxlintPort/no-empty-catch/oxlint.js');

export default {
  meta: { name: 'oxlint-plugin-chotot' },
  rules: {
    'filepath-no-ads': defineRule(filepathNoAdsOx),
    'no-unsafe-regex': defineRule(noUnsafeRegexOx),
    'no-empty-catch': defineRule(noEmptyCatchOx),
  },
};





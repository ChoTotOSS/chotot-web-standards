import { getTester } from './utils/test.mjs';

const { test } = getTester(import.meta);

/**
 * [testCase description]
 * @param  {string} filepath            path to file
 * @param  {Object} options             additional rule option
 * @param  {string} options.adReplacer  `ad` alternative
 * @param  {string[]} options.ignore    ignored words
 * @param  {string} patterns            joined matched ad-block patterns ('a', 'b' or 'c')
 * @return {Object}
 */
function testCase(filepath, options, patterns = '') {
  const errorMessage = `Filepath '${filepath}' contains ${patterns} which ${
    patterns.includes('and') ? 'are' : 'is'
  } prone to ad-blockers. Please rename it!`;
  return testCaseWithOptions(filepath, errorMessage, options && [options]);
}

function testCaseWithOptions(filename, errorMessage, options = []) {
  return {
    code: 'foo()',
    filename,
    options,
    errors: errorMessage && [
      {
        message: errorMessage,
      },
    ],
  };
}

test({
  valid: [
    testCase('src/foo/bar.js'),
    testCase('src/foo/index.js'),
    testCase('src/foo/_bar.js'),
    // ignore should work
    testCase('src/foo/adView.jsx', { ignore: ['adView'] }),
    testCase('src/adView/index.jsx', { ignore: ['adView'] }),
    testCase('src/foo/_adType.jsx', { ignore: ['adType'] }),
    testCase('src/adType/index.jsx', { ignore: ['adType'] }),
    testCase('src/_adType/index.jsx', { ignore: ['adType'] }),
    testCase('src/_adType/ad-data.js', { ignore: ['adType', 'ad-data'] }),
    testCase('ads/_adType/ad-data.js', { ignore: ['ads', 'adType', 'ad-data'] }),
    // ad words are case sensitive
    testCase('ADView'),
    testCase('ADS'),
    testCase('_ADType'),
  ],
  invalid: [
    testCase('ads.js', undefined, "'ads'"),
    testCase('src/400x60', undefined, "'400x60'"),

    testCase('src/foo/adlist.js', undefined, "'adlist'"),
    testCase('src/foo/adView.jsx', undefined, "'adView'"),
    testCase('src/adView/index.jsx', undefined, "'adView'"),
    testCase('_adView', undefined, "'adView'"),
    testCase('_adView/index', undefined, "'adView'"),
    testCase('src/foo/_adType.jsx', undefined, "'adType'"),
    testCase('src/foo/AdType.jsx', undefined, "'AdType'"),
    testCase('src/adType/index.jsx', undefined, "'adType'"),
    testCase('src/_adType/index.jsx', undefined, "'adType'"),
    // separators
    testCase('src/ad_block', undefined, "'ad_block'"),
    testCase('src/ad-data', undefined, "'ad-data'"),
    // multiple matches
    testCase('src/ads/_adType.jsx', undefined, "'ads' and 'adType'"),
    testCase('src/_ads/_adType.jsx', undefined, "'ads' and 'adType'"),
    testCase('src/ads/ad-data', undefined, "'ads' and 'ad-data'"),
    testCase('ads/AdView/adType.js', undefined, "'ads', 'AdView', and 'adType'"),
    testCase('_ads/_AdView/adType.js', undefined, "'ads', 'AdView', and 'adType'"),
    testCase('_ads/_AdView/adType.js', { ignore: ['ads'] }, "'AdView' and 'adType'"),
    testCase('_ads/_AdView/adType.js', { ignore: ['ads', 'AdView'] }, "'adType'"),
  ],
});

test.snapshot({
  valid: [undefined, 'src/foo.JS/bar.js', 'src/foo.JS/bar'].map((filename) => ({
    code: `const filename = ${JSON.stringify(filename)};`,
    filename,
  })),
  invalid: [
    {
      code: 'foo();\n'.repeat(10),
      filename: 'src/foo/adlist',
      options: [{}],
    },
    ...['adlist.js', 'ad-banner.js', 'AdType.js', 'adview.jsx', 'GetSponsorAds.ts'].map(
      (filename) => ({
        code: `const filename = ${JSON.stringify(filename)};`,
        filename,
      })
    ),
  ],
});

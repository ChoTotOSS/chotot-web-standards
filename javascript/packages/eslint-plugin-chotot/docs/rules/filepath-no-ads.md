# Make sure no ad-blockers prone words in file path

Detect ad-blockers prone words (based on [Easylist](https://easylist.to/)) in file path and suggest changes to avoid resource files being blocked by ad-blockers when serving in production.

Validated words are combination characters of `a-z`, `A-Z`, `0-9`, `-`, `_` and `$` and are case sensitive.

### Fail

- `AdList.js`
- `AdView.jsx`
- `adbanner.js`
- `src/400x60`
- `src/ad-data`
- `src/ad_block`
- `src/adType/index.jsx` (subpath is blocked)
- `src/foo/_adType.jsx` (underscore prefix is not part of validate word)
- `src/pages/adView.jsx`

### Pass

- `ADType`
- `ADS.ts`
- `ADView.jsx` (ad words are case sensitive)
- `AdListing.js` (`AdList` is blocked but not `AdListing`)
- `addBanner.js` (ad words are checked whole word)
- `fooBar.js`
- `fooBar.test.js`
- `fooBar.testUtils.js`
- `src/foo/bar.js`

## Options

### ignore

Type: `Array<string>`\
Default: `[]`

Words to ignore.

Sometimes you may want an Easylist-positive file path. This option lets you ignore those files.

Example:

```js
"chotot/filepath-no-ads": [
  "error",
  {
    "ignore": [
      "ads",
      "advsetup"
    ]
  }
]
```

Then these file will pass:

- `src/ads.ts`
- `src/ads/fooBar.js`
- `src/foo/advsetup.js`
- `src/advsetup/index.js`

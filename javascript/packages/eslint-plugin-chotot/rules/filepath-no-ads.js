/**
 * @author Thanh Tran CT
 */
'use strict';
const path = require('path');
const adWords = require('./utils/ad-words');

const MESSAGE_ID = 'filepath-no-ads';
const messages = {
  [MESSAGE_ID]:
    "Filepath '{{filepath}}' contains {{patterns}} which {{be}} prone to ad-blockers. Please rename it!",
};

const isIgnoredChar = (char) => !/^[a-z\d-_$]$/i.test(char);
const ignoredByDefault = new Set(['index', 'js', 'mjs', 'cjs', 'ts', 'tsx', 'vue', 'svelte']);

function isIgnoredWord(word, userIgnored = []) {
  return ignoredByDefault.has(word) || userIgnored.some((regexp) => regexp.test(word));
}

function validateFilepath(words) {
  const toValidate = words.filter(({ ignored }) => !ignored);
  const patterns = toValidate
    .map(({ word }) => adWords.find((adWord) => adWord === word))
    .filter(Boolean);

  return patterns.length ? patterns : undefined;
}

const leadingUnderscoresRegex = /^(?<leading>_+)(?<tailing>.*)$/;
/**
 * split `foo/bar` to: `[
 *   {word: 'foo', ignored: false},
 *   {word: '/', ignored: true},
 *   {word: 'bar', ignored: false}
 * ]`
 * @param  {string} filepath file name
 * @return {Array<{word: string, ignored: boolean}>}
 */
function splitFilepath(filepath, userIgnored) {
  const words = [];

  let lastWord;
  // split by non-word characters
  for (const char of filepath) {
    const isIgnored = isIgnoredChar(char);

    if (lastWord && lastWord.ignored === isIgnored) {
      lastWord.word += char;
    } else {
      lastWord = {
        word: char,
        ignored: isIgnored,
      };
      words.push(lastWord);
    }
  }

  // check for user ignored rules
  for (let i = 0; i < words.length; i++) {
    if (!words[i].ignored) {
      // check real word
      const word = words[i].word;
      const result = leadingUnderscoresRegex.exec(word) || { groups: {} };
      const { leading = '', tailing = word } = result.groups;
      // console.log('leading', leading, word);

      if (leading) {
        // word = [leading, tailing]
        words[i] = [
          {
            word: leading,
            ignored: true,
          },
          {
            word: tailing,
            ignored: isIgnoredWord(tailing, userIgnored),
          },
        ];
      } else {
        words[i].ignored = isIgnoredWord(word, userIgnored);
      }
    }
  }

  return words.flat();
}

/**
Turns `[a, b, c]` into `'a', 'b', and 'c'`.

@param {string[]} words
@returns {string}
*/
function englishJoinWords(words) {
  if (words.length === 1) {
    return `'${words[0]}'`;
  }

  if (words.length === 2) {
    return `'${words[0]}' and '${words[1]}'`;
  }

  return `'${words.slice(0, -1).join("', '")}', and '${words[words.length - 1]}'`;
}

const create = (context) => {
  const options = context.options[0] || {};
  const ignore = (options.ignore || []).map((item) => {
    if (item instanceof RegExp) {
      return item;
    }

    return new RegExp(item, 'u');
  });

  const filepathWithExtension = context.getPhysicalFilename();

  if (filepathWithExtension === '<input>' || filepathWithExtension === '<text>') {
    return {};
  }

  return {
    Program() {
      // get `.js`
      const extension = path.extname(filepathWithExtension);
      // get `src/foo/bar`
      const filepath = path.join(
        path.dirname(filepathWithExtension),
        path.basename(filepathWithExtension, extension)
      );

      const words = splitFilepath(filepath, ignore);
      // console.log('words', words);

      const patterns = validateFilepath(words);

      // console.log('patterns', patterns);

      if (patterns) {
        return {
          // Report on first character like `unicode-bom` rule
          // https://github.com/eslint/eslint/blob/8a77b661bc921c3408bae01b3aa41579edfc6e58/lib/rules/unicode-bom.js#L46
          loc: { column: 0, line: 1 },
          messageId: MESSAGE_ID,
          data: {
            filepath: filepathWithExtension,
            patterns: englishJoinWords(patterns),
            be: patterns.length === 1 ? 'is' : 'are',
          },
        };
      }
      // no patterns found, return undefined means valid
    },
  };
};

const schema = [
  {
    type: 'object',
    properties: {
      ignore: {
        type: 'array',
        uniqueItems: true,
      },
    },
    additionalProperties: false,
  },
];

module.exports = {
  create,
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Avoid ad-block prone filepaths.',
      category: 'Possible Errors',
      recommended: true,
      url: 'https://eslint.org/docs/rules/no-extra-semi',
    },
    schema,
    messages,
  },
};

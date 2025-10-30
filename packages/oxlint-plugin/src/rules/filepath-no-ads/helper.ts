import * as path from 'path';
import adWords from '../utils/ad-words.js';

export const MESSAGE_ID = 'filepath-no-ads';

const isIgnoredChar = (char: string) => !/^[a-z\d-_$]$/i.test(char);
const ignoredByDefault = new Set(['index', 'js', 'mjs', 'cjs', 'ts', 'tsx', 'vue', 'svelte']);

export function isIgnoredWord(word: string, userIgnored: RegExp[] = []) {
  return ignoredByDefault.has(word) || userIgnored.some((regexp) => regexp.test(word));
}

export function validateFilepath(words: Array<{ word: string; ignored: boolean }>) {
  const toValidate = words.filter(({ ignored }) => !ignored);
  const patterns = toValidate
    .map(({ word }) => adWords.find((adWord) => adWord === word))
    .filter(Boolean) as string[];
  return patterns.length ? patterns : undefined;
}

const leadingUnderscoresRegex = /^(?<leading>_+)(?<tailing>.*)$/;

export function splitFilepath(filepath: string, userIgnored: RegExp[]) {
  const words: Array<{ word: string; ignored: boolean } | Array<{ word: string; ignored: boolean }>> = [];
  let lastWord: any;
  for (const char of filepath) {
    const ignored = isIgnoredChar(char);
    if (lastWord && lastWord.ignored === ignored) {
      lastWord.word += char;
    } else {
      lastWord = { word: char, ignored };
      words.push(lastWord);
    }
  }
  for (let i = 0; i < words.length; i++) {
    const entry: any = words[i];
    if (!Array.isArray(entry) && !entry.ignored) {
      const word = entry.word as string;
      const result = leadingUnderscoresRegex.exec(word) || { groups: { leading: '', tailing: '' } } as any;
      const { leading = '', tailing = word } = result.groups as any;
      if (leading) {
        words[i] = [
          { word: leading, ignored: true },
          { word: tailing, ignored: isIgnoredWord(tailing, userIgnored) },
        ];
      } else {
        entry.ignored = isIgnoredWord(word, userIgnored);
      }
    }
  }
  return (words as any).flat() as Array<{ word: string; ignored: boolean }>;
}

export function englishJoinWords(words: string[]) {
  if (words.length === 1) return `'${words[0]}'`;
  if (words.length === 2) return `'${words[0]}' and '${words[1]}'`;
  return `'${words.slice(0, -1).join("', '")}', and '${words[words.length - 1]}'`;
}

export function computeFilepathParts(filepathWithExtension: string) {
  const extension = path.extname(filepathWithExtension);
  const filepath = path.join(
    path.dirname(filepathWithExtension),
    path.basename(filepathWithExtension, extension)
  );
  return { extension, filepath };
}



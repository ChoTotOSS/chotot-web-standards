import {
  MESSAGE_ID,
  englishJoinWords,
  splitFilepath,
  validateFilepath,
  computeFilepathParts,
} from './helper.js';

export default {
  meta: {
    type: 'suggestion',
    docs: { description: 'Avoid ad-block prone filepaths.' },
    messages: {
      [MESSAGE_ID]:
        "Filepath '{{filepath}}' contains {{patterns}} which {{be}} prone to ad-blockers. Please rename it!",
    },
  },
  createOnce(context) {
    let filepathWithExtension: string;
    let ignore: RegExp[];
    return {
      before() {
        const options = (context as any).options?.[0] || {};
        ignore = (options.ignore || []).map((item: any) =>
          item instanceof RegExp ? item : new RegExp(String(item), 'u')
        );
        const getPhysical =
          (context as any).getPhysicalFilename?.bind(context) ||
          (context as any).getFilename?.bind(context) ||
          (() => '<input>');
        filepathWithExtension = getPhysical();
      },
      Program() {
        if (filepathWithExtension === '<input>' || filepathWithExtension === '<text>') return;
        const { filepath } = computeFilepathParts(filepathWithExtension);
        const words = splitFilepath(filepath, ignore);
        const patterns = validateFilepath(words);
        if (patterns) {
          context.report({
            loc: { column: 0, line: 1 },
            messageId: MESSAGE_ID,
            data: {
              filepath: filepathWithExtension,
              patterns: englishJoinWords(patterns),
              be: patterns.length === 1 ? 'is' : 'are',
            },
          });
        }
      },
    };
  },
};

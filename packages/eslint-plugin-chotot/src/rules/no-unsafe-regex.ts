import safeRegex from 'safe-regex';
import { newExpressionSelector } from './selectors/call-or-new-expression-selector';
import { isNewExpression } from './ats/is-new-expression';
import { defineRule } from '../utils/define-rule';

const MESSAGE_ID = 'no-unsafe-regex';
const messages = {
  [MESSAGE_ID]: 'Unsafe regular expression.',
};

const newRegExpSelector = [newExpressionSelector('RegExp'), '[arguments.0.type="Literal"]'].join(
  ''
);

export = defineRule({
  create(context) {
    return {
      'Literal[regex]'(node) {
        // Handle regex literal inside RegExp constructor in the other handler
        if (isNewExpression(node.parent, { name: 'RegExp' })) {
          return;
        }

        if (!safeRegex(node.value)) {
          return context.report({
            node,
            messageId: MESSAGE_ID,
          });
        }
      },
      [newRegExpSelector](node) {
        const arguments_ = node.arguments;
        const hasRegExp = arguments_[0].regex;

        let pattern;
        let flags;
        if (hasRegExp) {
          ({ pattern } = arguments_[0].regex);
          flags =
            arguments_[1]?.type === 'Literal' ? arguments_[1].value : arguments_[0].regex.flags;
        } else {
          pattern = arguments_[0].value;
          flags = arguments_[1]?.type === 'Literal' ? arguments_[1].value : '';
        }

        if (!safeRegex(`/${pattern}/${flags}`)) {
          context.report({
            node,
            messageId: MESSAGE_ID,
          });
        }
      },
    };
  },
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow unsafe regular expressions.',
    },
    messages,
  },
});

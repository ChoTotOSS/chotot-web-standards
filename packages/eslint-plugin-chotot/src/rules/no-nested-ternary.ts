import { defineRule } from '../utils/define-rule';
import { isParenthesized } from '@eslint-community/eslint-utils';

const MESSAGE_ID_TOO_DEEP = 'too-deep';
const MESSAGE_ID_SHOULD_PARENTHESIZED = 'should-parenthesized';
const messages = {
  [MESSAGE_ID_TOO_DEEP]: 'Do not nest ternary expressions.',
  [MESSAGE_ID_SHOULD_PARENTHESIZED]: 'Nest ternary expression should be parenthesized.',
};

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
export = defineRule({
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Disallow nested ternary expressions.',
    },
    fixable: 'code',
    messages,
  },
  create(context) {
    return {
      ConditionalExpression(node) {
        if (
          [node.test, node.consequent, node.alternate].some(
            (node) => node.type === 'ConditionalExpression'
          )
        ) {
          return;
        }

        const { sourceCode } = context;
        const ancestors = sourceCode.getAncestors(node).reverse();
        const nestLevel = ancestors.findIndex((node) => node.type !== 'ConditionalExpression');

        if (nestLevel === 1 && !isParenthesized(node, sourceCode)) {
          return context.report({
            node,
            messageId: MESSAGE_ID_SHOULD_PARENTHESIZED,
            fix: (fixer) => [fixer.insertTextBefore(node, '('), fixer.insertTextAfter(node, ')')],
          });
        }

        // Nesting more than one level not allowed
        if (nestLevel > 1) {
          return context.report({
            node: nestLevel > 2 ? ancestors[nestLevel - 3] : node,
            messageId: MESSAGE_ID_TOO_DEEP,
          });
        }
      },
    };
  },
});

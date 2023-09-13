import { defineRule } from '../utils/define-rule';

const MESSAGE_ID_TOO_DEEP = 'too-deep';
const messages = {
  [MESSAGE_ID_TOO_DEEP]: 'Do not nest ternary expressions more than one level.',
};

const nestTernarySelector = (level) =>
  `:not(ConditionalExpression)${' > ConditionalExpression'.repeat(level)}`;


//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
export = defineRule({
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Disallow more-than-one nested ternary expressions.',
    },
    messages,
  },
  create(context) {
    return {
      [nestTernarySelector(3)]: (node) => {
        // Nesting more than one level not allowed.
        return context.report({ node, messageId: MESSAGE_ID_TOO_DEEP });
      },
    };
  },
});

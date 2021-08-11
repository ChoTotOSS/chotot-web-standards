'use strict';
const MESSAGE_ID_TOO_DEEP = 'too-deep';
const messages = {
  [MESSAGE_ID_TOO_DEEP]: 'Do not nest ternary expressions more than one level.',
};

const nestTernarySelector = (level) =>
  `:not(ConditionalExpression)${' > ConditionalExpression'.repeat(level)}`;

const create = (/* context */) => {
  return {
    [nestTernarySelector(3)]: (node) => {
      // Nesting more than one level not allowed.
      return { node, messageId: MESSAGE_ID_TOO_DEEP };
    },
  };
};

module.exports = {
  create,
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Disallow more-than-one nested ternary expressions.',
    },
    messages,
  },
};

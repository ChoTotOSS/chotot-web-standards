// This is a testing plugin to check if eslint plugin loaded correctly

import { defineRule } from '../utils/define-rule';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
export = defineRule({
  meta: {
    messages: {
      emptyCatch: 'Empty catch block is not allowed.. Please do something with the error.',
    },
  },
  create(context) {
    return {
      CatchClause(node) {
        if (node.body.body.length === 0) {
          context.report({ node: node.body, messageId: 'emptyCatch' });
        }
      },
    };
  },
});

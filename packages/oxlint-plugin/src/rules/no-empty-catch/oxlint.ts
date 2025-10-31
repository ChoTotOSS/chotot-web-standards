import { MESSAGE_ID, messages, isEmptyCatchBody } from './helper.js';

export default {
  meta: { messages },
  createOnce(context) {
    return {
      CatchClause(node) {
        if (isEmptyCatchBody(node)) {
          context.report({ node: node.body, messageId: MESSAGE_ID });
        }
      },
    };
  },
};



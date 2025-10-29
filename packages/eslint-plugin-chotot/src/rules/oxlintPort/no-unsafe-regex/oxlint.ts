import { newExpressionSelector } from '../../selectors/call-or-new-expression-selector.js';
import { isNewExpression } from '../../ats/is-new-expression.js';
import { MESSAGE_ID, messages, isUnsafeLiteral, isUnsafePattern } from './helper.js';

const newRegExpSelector = [newExpressionSelector('RegExp'), '[arguments.0.type="Literal"]'].join('');

export = {
  meta: { type: 'problem', docs: { description: 'Disallow unsafe regular expressions.' }, messages },
  createOnce(context) {
    return {
      'Literal[regex]'(node: any) {
        // Skip regex literal inside new RegExp
        // @ts-ignore
        if (isNewExpression(node.parent, { name: 'RegExp' })) return;
        if (isUnsafeLiteral(node)) context.report({ node, messageId: MESSAGE_ID });
      },
      [newRegExpSelector](node: any) {
        const args: any[] = (node as any).arguments;
        const hasRegExp = args[0].regex;
        let pattern: string; let flags: string;
        if (hasRegExp) {
          ({ pattern } = args[0].regex);
          flags = args[1]?.type === 'Literal' ? args[1].value : args[0].regex.flags;
        } else {
          pattern = args[0].value;
          flags = args[1]?.type === 'Literal' ? args[1].value : '';
        }
        if (isUnsafePattern(pattern, flags)) context.report({ node, messageId: MESSAGE_ID });
      },
    };
  },
};



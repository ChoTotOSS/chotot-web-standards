import { checkVueTemplate } from './utils/rule.js';
import { getParenthesizedRange } from './utils/parentheses.js';
import { replaceNodeOrTokenAndSpacesBefore } from './fix/replace-node-or-token-and-spaces-before';
import { fixSpaceAroundKeyword } from './fix/fix-space-around-keywords.js';
import { defineRule } from '../utils/define-rule';

const isInstanceofToken = (token) => token.value === 'instanceof' && token.type === 'Keyword';

const MESSAGE_ID = 'no-instanceof-array';
const messages = {
  [MESSAGE_ID]: 'Use `Array.isArray()` instead of `instanceof Array`.',
};
const selector = [
  'BinaryExpression',
  '[operator="instanceof"]',
  '[right.type="Identifier"]',
  '[right.name="Array"]',
].join('');

/** @param {import('eslint').Rule.RuleContext} context */
export = defineRule({
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Require `Array.isArray()` instead of `instanceof Array`.',
    },
    fixable: 'code',
    messages,
  },
  create(context) {
    const sourceCode = context.getSourceCode();

    return {
      [selector](node) {
        const { left, right } = node;
        let tokenStore = sourceCode;
        let instanceofToken = tokenStore.getTokenAfter(left, isInstanceofToken);
        if (!instanceofToken && context.parserServices.getTemplateBodyTokenStore) {
          tokenStore = context.parserServices.getTemplateBodyTokenStore();
          instanceofToken = tokenStore.getTokenAfter(left, isInstanceofToken);
        }

        context.report({
          // @ts-ignore
          node: instanceofToken,
          messageId: MESSAGE_ID,
          /** @param {import('eslint').Rule.RuleFixer} fixer */
          *fix(fixer) {
            yield* fixSpaceAroundKeyword(fixer, node, sourceCode);

            const range = getParenthesizedRange(left, tokenStore);
            // @ts-ignore
            yield fixer.insertTextBeforeRange(range, 'Array.isArray(');
            // @ts-ignore
            yield fixer.insertTextAfterRange(range, ')');

            yield* replaceNodeOrTokenAndSpacesBefore(
              instanceofToken,
              '',
              fixer,
              sourceCode,
              tokenStore
            );
            yield* replaceNodeOrTokenAndSpacesBefore(right, '', fixer, sourceCode, tokenStore);
          },
        });
      },
    };
  },
});

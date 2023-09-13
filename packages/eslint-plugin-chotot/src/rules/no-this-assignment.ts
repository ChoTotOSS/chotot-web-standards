import { defineRule } from '../utils/define-rule';

const MESSAGE_ID = 'no-this-assignment';
const messages = {
	[MESSAGE_ID]: 'Do not assign `this` to `{{name}}`.',
};

function getProblem(variableNode, valueNode) {
	if (
		variableNode.type !== 'Identifier'
		|| valueNode?.type !== 'ThisExpression'
	) {
		return;
	}

	return {
		node: valueNode.parent,
		data: {name: variableNode.name},
		messageId: MESSAGE_ID,
	};
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
export = defineRule({
  meta: {
    type: 'suggestion',
		docs: {
			description: 'Disallow assigning `this` to a variable.',
		},
		messages,
  },
  create(context) {
    return {
      VariableDeclarator(node) {
        const prob = getProblem(node.id, node.init);
        if (prob) {
          context.report(prob);
        }
      },
      AssignmentExpression(node) {
        const prob = getProblem(node.left, node.right);
        if (prob) {
          context.report(prob);
        }
      },
    }
  },
});

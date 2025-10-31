import { matches } from './matches-any.js';

function create(options: any, types: string[]) {
  if (typeof options === 'string') {
    options = { names: [options] };
  }
  if (Array.isArray(options)) {
    options = { names: options };
  }
  let {
    path = '',
    name = '',
    names = [],
    argumentsLength = 0,
    minimumArguments = 0,
    maximumArguments = Number.POSITIVE_INFINITY,
    includeOptional = false,
    allowSpreadElement = false,
  } = {
    path: '',
    minimumArguments: 0,
    maximumArguments: Number.POSITIVE_INFINITY,
    includeOptional: false,
    allowSpreadElement: false,
    ...options,
  };

  const prefix = path ? `${path}.` : '';
  if (name) names = [name];

  const parts = [matches(types.map((type) => `[${prefix}type="${type}"]`))];
  if (!includeOptional) parts.push(`[${prefix}optional!=true]`);
  if (typeof argumentsLength === 'number') parts.push(`[${prefix}arguments.length=${argumentsLength}]`);
  if (minimumArguments !== 0) parts.push(`[${prefix}arguments.length>=${minimumArguments}]`);
  if (Number.isFinite(maximumArguments)) parts.push(`[${prefix}arguments.length<=${maximumArguments}]`);

  if (!allowSpreadElement) {
    const maximumArgumentsLength = Number.isFinite(maximumArguments) ? maximumArguments : argumentsLength;
    if (typeof maximumArgumentsLength === 'number') {
      for (let index = 0; index < maximumArgumentsLength; index += 1) {
        parts.push(`[${prefix}arguments.${index}.type!="SpreadElement"]`);
      }
    }
  }
  if (Array.isArray(names) && names.length > 0) {
    parts.push(
      `[${prefix}callee.type="Identifier"]`,
      matches((names as string[]).map((property) => `[${prefix}callee.name="${property}"]`))
    );
  }
  return parts.join('');
}

export const callExpressionSelector = (options?: any) => create(options, ['CallExpression']);
export const newExpressionSelector = (options?: any) => create(options, ['NewExpression']);
export const callOrNewExpressionSelector = (options?: any) => create(options, ['CallExpression', 'NewExpression']);



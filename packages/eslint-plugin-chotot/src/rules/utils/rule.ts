const isIterable = (object) => typeof object?.[Symbol.iterator] === 'function';

class FixAbortError extends Error {}
const fixOptions = {
  abort() {
    throw new FixAbortError('Fix aborted.');
  },
};

function wrapFixFunction(fix) {
  return (fixer) => {
    const result = fix(fixer, fixOptions);

    if (isIterable(result)) {
      try {
        return [...result];
      } catch (error) {
        if (error instanceof FixAbortError) {
          return;
        }

        /* c8 ignore next */
        throw error;
      }
    }

    return result;
  };
}

function reportListenerProblems(listener, context) {
  // Listener arguments can be `codePath, node` or `node`
  return function (...listenerArguments) {
    let problems = listener(...listenerArguments);

    if (!problems) {
      return;
    }

    if (!isIterable(problems)) {
      problems = [problems];
    }

    for (const problem of problems) {
      if (problem.fix) {
        problem.fix = wrapFixFunction(problem.fix);
      }

      if (Array.isArray(problem.suggest)) {
        for (const suggest of problem.suggest) {
          if (suggest.fix) {
            suggest.fix = wrapFixFunction(suggest.fix);
          }

          suggest.data = {
            ...problem.data,
            ...suggest.data,
          };
        }
      }

      context.report(problem);
    }
  };
}

const wrappedFunctions = new Set();
function reportProblems(create) {
  if (wrappedFunctions.has(create)) {
    return create;
  }

  const wrapped = (context) => {
    const listeners = create(context);

    if (!listeners) {
      return {};
    }

    return Object.fromEntries(
      Object.entries(listeners).map(([selector, listener]) => [
        selector,
        reportListenerProblems(listener, context),
      ])
    );
  };

  wrappedFunctions.add(wrapped);

  return wrapped;
}

export function checkVueTemplate(create, options) {
  const { visitScriptBlock = true } = {
    visitScriptBlock: true,
    ...options,
  };

  create = reportProblems(create);

  const wrapped = (context) => {
    const listeners = create(context);

    // `vue-eslint-parser`
    if (context.parserServices?.defineTemplateBodyVisitor) {
      return visitScriptBlock
        ? context.parserServices.defineTemplateBodyVisitor(listeners, listeners)
        : context.parserServices.defineTemplateBodyVisitor(listeners);
    }

    return listeners;
  };

  wrappedFunctions.add(wrapped);
  return wrapped;
}

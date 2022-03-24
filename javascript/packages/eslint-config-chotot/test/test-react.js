import test from 'tape';
import { ESLint } from 'eslint';
import eslintrc from '..';
import nextRules from '../rules/next';
import reactHookRules from '../rules/react-hooks';

const eslint = new ESLint({
  useEslintrc: false,
  baseConfig: eslintrc,

  overrideConfig: {
    rules: {
      // It is okay to import devDependencies in tests.
      'import/no-extraneous-dependencies': [2, { devDependencies: true }],
      // this doesn't matter for tests
      'lines-between-class-members': 0,
      // let's skip this in tests
      'react/no-unused-class-component-methods': 0
    },
  }
});

async function lint(text) {
  // @see https://eslint.org/docs/developer-guide/nodejs-api#-eslintlinttextcode-options
  const results = await eslint.lintText(text);
  return results[0];
}

// tagged template string
function wrapModule(strings) {
  return `
/* eslint-disable arrow-body-style, class-methods-use-this, react/prop-types, semi */
import React from 'react';

${strings[0]}
`;
}

test('next and react-hooks rules', (t) => {
  t.test('make sure our eslintrc has Next and React Hooks dependencies', (t) => {
    t.plan(2);
    t.deepEqual(nextRules.plugins, ['jsx-a11y', 'react', '@next/next']);
    t.deepEqual(reactHookRules.plugins, ['react-hooks']);
  });
});

test('react/no-unstable-nested-components', (t) => {
  t.test('passes a good component', async (t) => {
    t.plan(3);
    const result = await lint(wrapModule`
const SomeComponent = ({ footer: Footer }) => {
  return (
    <div>
      <Footer />
    </div>
  );
};

const Component = () => {
  return <SomeComponent footer={<div />} />;
};

export default Component;
`);

    t.notOk(result.warningCount, 'no warnings');
    t.deepEquals(result.messages, [], 'no messages in results');
    t.notOk(result.errorCount, 'no errors');
  });

  t.test('passes a good component with renderprop', async (t) => {
    t.plan(3);
    const result = await lint(wrapModule`
const SomeComponent = ({ renderFooter }) => {
  return (
    <div>
      {renderFooter()}
    </div>
  );
};

const Component = () => {
  return (
    <div>
      <SomeComponent renderFooter={() => <div />} />
    </div>
  );
};

export default Component;
`);

    t.notOk(result.warningCount, 'no warnings');
    t.deepEquals(result.messages, [], 'no messages in results');
    t.notOk(result.errorCount, 'no errors');
  });

  t.test('renderprops used as component', async (t) => {
    t.plan(2);
    const result = await lint(wrapModule`
const SomeComponent = ({ footer: Footer }) => {
  return (
    <div>
      <Footer />
    </div>
  );
};

const Component = () => {
  return (
    <div>
      <SomeComponent footer={() => <div />} />
    </div>
  );
};

export default Component;
`);

    t.ok(result.errorCount, 'fails');
    t.deepEqual(
      result.messages.map((msg) => msg.ruleId),
      ['react/no-unstable-nested-components'],
      'fails due to renderprop used as component'
    );
  });

  t.test('component created inside component', async (t) => {
    t.plan(2);
    const result = await lint(wrapModule`
const Component = () => {
  const UnstableNestedComponent = () => {
    return <div />;
  }

  return (
    <div>
      <UnstableNestedComponent />
    </div>
  );
}

export default Component;
`);

    t.ok(result.errorCount, 'fails');
    t.deepEqual(
      result.messages.map((msg) => msg.ruleId),
      ['react/no-unstable-nested-components'],
      'fails due to unstable-nested-components'
    );
  });
});

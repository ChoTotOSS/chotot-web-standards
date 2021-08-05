import test from 'tape';
import { CLIEngine } from 'eslint';
import eslintrc from '..';
import nextRules from '../rules/next';
import reactHookRules from '../rules/react-hooks';

const cli = new CLIEngine({
  useEslintrc: false,
  baseConfig: eslintrc,

  rules: {
    // It is okay to import devDependencies in tests.
    'import/no-extraneous-dependencies': [2, { devDependencies: true }],
    // this doesn't matter for tests
    'lines-between-class-members': 0,
  },
});

function lint(text) {
  // @see https://eslint.org/docs/developer-guide/nodejs-api.html#executeonfiles
  // @see https://eslint.org/docs/developer-guide/nodejs-api.html#executeontext
  const linter = cli.executeOnText(text);
  return linter.results[0];
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
  t.test('passes a good component', (t) => {
    t.plan(3);
    const result = lint(wrapModule`
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

  t.test('passes a good component with renderprop', (t) => {
    t.plan(3);
    const result = lint(wrapModule`
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

  t.test('renderprops used as component', (t) => {
    t.plan(2);
    const result = lint(wrapModule`
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

  t.test('component created inside component', (t) => {
    t.plan(2);
    const result = lint(wrapModule`
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

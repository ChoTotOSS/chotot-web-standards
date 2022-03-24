import test from 'tape';
import { ESLint } from 'eslint';
import eslintrc from '..';
import reactRules from '../rules/react';
import reactA11yRules from '../rules/react-a11y';

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

function wrapComponent(body) {
  return `
import React from 'react';

export default class MyComponent extends React.Component {
/* eslint no-empty-function: 0, class-methods-use-this: 0 */
${body}}
`;
}

test('validate react prop order', (t) => {
  t.test('make sure our eslintrc has React and JSX linting dependencies', (t) => {
    t.plan(2);
    t.deepEqual(reactRules.plugins, ['react']);
    t.deepEqual(reactA11yRules.plugins, ['jsx-a11y', 'react']);
  });

  t.test('passes a good component', async (t) => {
    t.plan(3);
    const result = await lint(wrapComponent(`
  componentDidMount() {}
  setFoo() {}
  getFoo() {}
  setBar() {}
  someMethod() {}
  renderDogs() {}
  render() { return <div />; }
`));

    t.notOk(result.warningCount, 'no warnings');
    t.deepEquals(result.messages, [], 'no messages in results');
    t.notOk(result.errorCount, 'no errors');
  });

  t.test('order: when random method is first', async (t) => {
    t.plan(2);
    const result = await lint(wrapComponent(`
  someMethod() {}
  componentDidMount() {}
  setFoo() {}
  getFoo() {}
  setBar() {}
  renderDogs() {}
  render() { return <div />; }
`));

    t.ok(result.errorCount, 'fails');
    t.deepEqual(result.messages.map((msg) => msg.ruleId), ['react/sort-comp'], 'fails due to sort');
  });

  t.test('order: when random method after lifecycle methods', async (t) => {
    t.plan(2);
    const result = await lint(wrapComponent(`
  componentDidMount() {}
  someMethod() {}
  setFoo() {}
  getFoo() {}
  setBar() {}
  renderDogs() {}
  render() { return <div />; }
`));

    t.ok(result.errorCount, 'fails');
    t.deepEqual(result.messages.map((msg) => msg.ruleId), ['react/sort-comp'], 'fails due to sort');
  });
});

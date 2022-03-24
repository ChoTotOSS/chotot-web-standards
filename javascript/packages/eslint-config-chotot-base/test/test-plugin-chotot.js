import test from 'tape';
import { ESLint } from 'eslint';
import eslintrc from '..';
import chototRules from '../rules/chotot';

const eslint = new ESLint({
  useEslintrc: false,
  baseConfig: eslintrc,

  overrideConfig: {
    rules: {
      // It is okay to import devDependencies in tests.
      'import/no-extraneous-dependencies': [2, { devDependencies: true }],
      // this doesn't matter for tests
      'lines-between-class-members': 0,
      'chotot/filepath-no-ads': ['error', {
         ignore: ['AdView']
      }],
    },
  }
});

async function lint(text, filePath = '<text>') {
  // @see https://eslint.org/docs/developer-guide/nodejs-api#-eslintlinttextcode-options
  const results = await eslint.lintText(text, {filePath});
  return results[0];
}

// tagged template string
function wrapModule(strings) {
  return `
/* eslint-disable arrow-body-style, class-methods-use-this, semi */

${strings[0]}
`;
}

const noConcernCode = wrapModule`
const sum = 3 + 4; // eslint-disable-line no-unused-vars
`;

test('chotot rules', (t) => {
  t.test('make sure our eslintrc has Chotot plugin dependencies', (t) => {
    t.plan(1);
    t.deepEqual(chototRules.plugins, ['chotot']);
  });
});

test('chotot/filename-case', (t) => {
  t.test('passes camel case filename', async (t) => {
    t.plan(3);
    const result = await lint(noConcernCode, 'src/choTot.js');

    t.notOk(result.warningCount, 'no warnings');
    t.deepEquals(result.messages, [], 'no messages in results');
    t.notOk(result.errorCount, 'no errors');
  });

  t.test('passes ignored patterns', async (t) => {
    t.plan(3);
    const result = await lint(noConcernCode, 'src/GDS.js');

    t.notOk(result.warningCount, 'no warnings');
    t.deepEquals(result.messages, [], 'no messages in results');
    t.notOk(result.errorCount, 'no errors');
  });

  t.test('warn all uppercase filename', async (t) => {
    t.plan(3);
    const result = await lint(noConcernCode, 'src/PROPERTY.js');

    t.ok(result.warningCount, 'fails');
    t.deepEqual(
      result.messages.map((msg) => msg.ruleId),
      ['chotot/filename-case'],
      'warns due to filename violate chotot/filename-case'
    );
    t.notOk(result.errorCount, 'no errors');
  });

  t.test('warn snake case filename', async (t) => {
    t.plan(3);
    const result = await lint(noConcernCode, 'src/cho_tot.js');

    t.ok(result.warningCount, 'fails');
    t.deepEqual(
      result.messages.map((msg) => msg.ruleId),
      ['chotot/filename-case'],
      'warns due to filename violate chotot/filename-case'
    );
    t.notOk(result.errorCount, 'no errors');
  });
});

test('chotot/filepath-no-ads', (t) => {
  t.test('passes no ads file path', async (t) => {
    t.plan(3);
    const result = await lint(noConcernCode, 'src/pages/index.js');

    t.notOk(result.warningCount, 'no warnings');
    t.deepEquals(result.messages, [], 'no messages in results');
    t.notOk(result.errorCount, 'no errors');
  });

  t.test('passes ignored patterns', async (t) => {
    t.plan(3);
    const result = await lint(noConcernCode, 'src/pages/AdView.js');

    t.notOk(result.warningCount, 'no warnings');
    t.deepEquals(result.messages, [], 'no messages in results');
    t.notOk(result.errorCount, 'no errors');
  });

  t.test('fails ad-block words file path', async (t) => {
    t.plan(2);

    const result = await lint(noConcernCode, 'src/pages/AdList.js');
    t.ok(result.errorCount, 'fails');
    t.deepEqual(
      result.messages.map((msg) => msg.ruleId),
      ['chotot/filepath-no-ads'],
      'error due to filepath violate chotot/filepath-no-ads'
    );
  });
});

test('chotot/no-abusive-eslint-disable', (t) => {
  t.test('passes good code', async (t) => {
    t.plan(3);
    const result = await lint(wrapModule`
// eslint-disable-next-line no-unused-vars
const sum = 4 + 3;
`);

    t.notOk(result.warningCount, 'no warnings');
    t.deepEquals(result.messages, [], 'no messages in results');
    t.notOk(result.errorCount, 'no errors');
  });

   t.test('fails violated code', async (t) => {
     t.plan(2);
     const result = await lint(wrapModule`
// eslint-disable-next-line
const sum = 4 + 3;
 `);

    t.ok(result.errorCount, 'fails');
    t.deepEqual(
      result.messages.map((msg) => msg.ruleId),
      ['chotot/no-abusive-eslint-disable'],
      'fails due to eslint-disable-next-line has no specific rules'
    );
   });
});


// Yes, I realise the irony of ignoring the linter in a linting package.
// https://github.com/avajs/ava/issues/3088
// eslint-disable-next-line import/no-unresolved
const test = require('ava');
const tempWrite = require('temp-write');
const isPlainObj = require('is-plain-obj');
const { ESLint } = require('eslint');
const path = require('path');

const baseConf = require('../index.js');
const legacyConf = require('../legacy.js');

const getUniqueValues = (arr) => ([...new Set(arr)]);

async function runEslint(file, conf) {
  const linter = new ESLint({
    overrideConfigFile: tempWrite.sync(JSON.stringify(conf)),
    ignore: false,
    useEslintrc: false,
    resolvePluginsRelativeTo: path.join(__dirname, '..'),
  });
  const results = await linter.lintFiles([file]);
  return results[0].messages;
}

test('Fails on base config', async (t) => {
  const conf = baseConf;

  t.true(isPlainObj(conf));
  t.true(isPlainObj(conf.rules));

  const errors = await runEslint('test/cases/ugly-javascript.js', conf);
  const errorsAsRuleIds = getUniqueValues(errors.map((item) => item.ruleId));

  const expectedErrors = [
    'strict',
    'semi',
    'no-var',
    'no-unused-vars',
    'func-names',
    'space-before-blocks',
  ];

  // eslint-disable-next-line max-len
  const expectedErrorsFound = errorsAsRuleIds.filter((error) => expectedErrors.indexOf(error) !== -1);

  t.is(expectedErrorsFound.length, expectedErrors.length);
});

test('Success on base config', async (t) => {
  const conf = baseConf;

  t.true(isPlainObj(conf));
  t.true(isPlainObj(conf.rules));

  const errors = await runEslint('test/cases/nice-javascript.js', conf);

  t.is(errors.length, 0);
});

test('Fails on legacy config', async (t) => {
  const conf = legacyConf;

  t.true(isPlainObj(conf));
  t.true(isPlainObj(conf.rules));

  const errors = await runEslint('test/cases/ugly-legacy.js', conf);
  const errorsAsRuleIds = getUniqueValues(errors.map((item) => item.ruleId));

  const expectedErrors = [
    'lines-around-directive',
    'semi',
    'one-var',
    'space-before-function-paren',
    'space-before-blocks',
    'indent',
    'no-unused-vars',
    'quotes',
    'no-param-reassign',
    'no-multiple-empty-lines',
    'no-console',
  ];

  // eslint-disable-next-line max-len
  const expectedErrorsFound = errorsAsRuleIds.filter((error) => expectedErrors.indexOf(error) !== -1);

  t.is(expectedErrorsFound.length, expectedErrors.length);
});

test('Success on legacy config', async (t) => {
  const conf = legacyConf;

  t.true(isPlainObj(conf));
  t.true(isPlainObj(conf.rules));

  const errors = await runEslint('test/cases/nice-legacy.js', conf);

  t.is(errors.length, 0);
});

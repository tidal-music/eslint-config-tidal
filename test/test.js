const test = require('ava');
const tempWrite = require('temp-write');
const isPlainObj = require('is-plain-obj');
const eslint = require('eslint');

const baseConf = require('../index.js');
const legacyConf = require('../legacy.js');

function runEslint(file, conf) {
  const linter = new eslint.CLIEngine({
    configFile: tempWrite.sync(JSON.stringify(conf)),
    ignore: false,
    useEslintrc: false,
  });

  return linter.executeOnFiles([file]).results[0].messages;
}

const getUniqueValues = (arr) => ([...new Set(arr)]);

test('Fails on base config', (t) => {
  const conf = baseConf;

  t.true(isPlainObj(conf));
  t.true(isPlainObj(conf.rules));

  const errors = runEslint('test/cases/ugly-javascript.js', conf);
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

test('Success on base config', (t) => {
  const conf = baseConf;

  t.true(isPlainObj(conf));
  t.true(isPlainObj(conf.rules));

  const errors = runEslint('test/cases/nice-javascript.js', conf);

  t.is(errors.length, 0);
});

test('Fails on legacy config', (t) => {
  const conf = legacyConf;

  t.true(isPlainObj(conf));
  t.true(isPlainObj(conf.rules));

  const errors = runEslint('test/cases/ugly-legacy.js', conf);
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

test('Success on legacy config', (t) => {
  const conf = legacyConf;

  t.true(isPlainObj(conf));
  t.true(isPlainObj(conf.rules));

  const errors = runEslint('test/cases/nice-legacy.js', conf);

  t.is(errors.length, 0);
});

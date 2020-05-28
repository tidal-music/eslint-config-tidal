const test = require('ava');
const tempWrite = require('temp-write');
const isPlainObj = require('is-plain-obj');
const { ESLint } = require('eslint');

const baseConf = require('../index.js');
// const legacyConf = require('../legacy.js');

const getUniqueValues = (arr) => ([...new Set(arr)]);
const getESLint = (conf) => (
  new ESLint({
    overrideConfigFile: tempWrite.sync(JSON.stringify(conf)),
    ignore: false,
    useEslintrc: false,
  })
);

test('Fails on base config', async (t) => {
  const conf = baseConf;

  t.true(isPlainObj(conf));
  t.true(isPlainObj(conf.rules));

  const eslint = getESLint(conf);
  const results = await eslint.lintFiles(['test/cases/ugly-javascript.js']);
  // const formatter = await eslint.loadFormatter('stylish');
  // const resultText = formatter.format(results);
  const errors = results[0].messages;
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

// test('Success on base config', async (t) => {
//   const conf = baseConf;

//   t.true(isPlainObj(conf));
//   t.true(isPlainObj(conf.rules));

//   const errors = await runEslint('test/cases/nice-javascript.js', conf);

//   t.is(errors.length, 0);
// });

// test('Fails on legacy config', (t) => {
//   const conf = legacyConf;

//   t.true(isPlainObj(conf));
//   t.true(isPlainObj(conf.rules));

//   const errors = runEslint('test/cases/ugly-legacy.js', conf);
//   const errorsAsRuleIds = getUniqueValues(errors.map((item) => item.ruleId));

//   const expectedErrors = [
//     'lines-around-directive',
//     'semi',
//     'one-var',
//     'space-before-function-paren',
//     'space-before-blocks',
//     'indent',
//     'no-unused-vars',
//     'quotes',
//     'no-param-reassign',
//     'no-multiple-empty-lines',
//     'no-console',
//   ];

// eslint-disable-next-line max-len
//   const expectedErrorsFound = errorsAsRuleIds.filter((error) => expectedErrors.indexOf(error) !== -1);

//   t.is(expectedErrorsFound.length, expectedErrors.length);
// });

// test('Success on legacy config', (t) => {
//   const conf = legacyConf;

//   t.true(isPlainObj(conf));
//   t.true(isPlainObj(conf.rules));

//   const errors = runEslint('test/cases/nice-legacy.js', conf);

//   t.is(errors.length, 0);
// });

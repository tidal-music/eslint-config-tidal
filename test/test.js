import path from 'path';
import { fileURLToPath } from 'url';

// Yes, I realise the irony of ignoring the linter in a linting package.
// https://github.com/avajs/ava/issues/3088
// eslint-disable-next-line import/no-unresolved
import test from 'ava';
import { ESLint } from 'eslint';
//import isPlainObj from 'is-plain-obj';
import tempWrite from 'temp-write';

import baseConf from '../index.js';
//import legacyConf from '../legacy.js';

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getUniqueValues = (
  /** @type {Iterable<any> | null | undefined} */ arr,
) => [...new Set(arr)];

/**
 * @param {string} file
 * @param {any[]} conf
 */
async function runEslint(file, conf) {
  const linter = new ESLint({
    ignore: false,
    overrideConfigFile: tempWrite.sync(JSON.stringify(conf)),
    resolvePluginsRelativeTo: path.join(__dirname, '..'),
    useEslintrc: false,
  });
  const results = await linter.lintFiles([file]);
  return results[0].messages;
}

test('Fails on base config', async t => {
  const conf = baseConf;

  //t.true(isPlainObj(conf));
  //t.true(isPlainObj(conf.rules));

  const errors = await runEslint('test/cases/ugly-javascript.js', conf);
  const errorsAsRuleIds = getUniqueValues(
    errors.map((/** @type {{ ruleId: any; }} */ item) => item.ruleId),
  );

  const expectedErrors = [
    'strict',
    'semi',
    'no-var',
    'no-unused-vars',
    'func-names',
    'space-before-blocks',
  ];

  const expectedErrorsFound = errorsAsRuleIds.filter(
    error => expectedErrors.indexOf(error) !== -1,
  );

  t.is(expectedErrorsFound.length, expectedErrors.length);
});

test('Success on base config', async t => {
  const conf = baseConf;

  //t.true(isPlainObj(conf));
  //t.true(isPlainObj(conf.rules));

  const errors = await runEslint('test/cases/nice-javascript.js', conf);

  t.is(errors.length, 0);
});
/*
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
*/

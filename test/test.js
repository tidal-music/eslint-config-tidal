'use strict';

import test from 'ava';
import isPlainObj from 'is-plain-obj';
import tempWrite from 'temp-write';
import eslint from 'eslint';
import es5conf from '../';
import es6conf from '../esnext';

function runEslint(file, conf) {
  const linter = new eslint.CLIEngine({
    useEslintrc: false,
    configFile: tempWrite.sync(JSON.stringify(conf))
  });

  return linter.executeOnFiles([file]).results[0].messages;
}

function getUniqueValues (array) {
  var u = {}
    , a = [];

  for (var i = 0, l = array.length; i < l; ++i) {
    if (u.hasOwnProperty(array[i])) {
      continue;
    }

    a.push(array[i]);
    u[array[i]] = 1;
  }

  return a;
};

test(t => {
  const conf = es5conf;

  t.true(isPlainObj(conf));
  t.true(isPlainObj(conf.rules));

  const errors = runEslint('../ugly-javascript.js', conf);
  const errorsAsRuleIds = getUniqueValues(errors.map(item => item.ruleId));
  const expectedErrors = [
    'strict',
    'semi',
    'space-before-function-paren',
    'space-before-blocks',
    'comma-style',
    'indent',
    'no-unused-vars',
    'quotes',
    'no-multiple-empty-lines',
    'no-console'
  ];

  const expectedErrorsFound = errorsAsRuleIds.filter(error => expectedErrors.indexOf(error) !== -1);

  t.is(expectedErrorsFound.length, expectedErrors.length);
});

test(t => {
  const conf = es6conf;

  t.true(isPlainObj(conf));
  t.true(isPlainObj(conf.rules));

  const errors = runEslint('../ugly-es6.js', conf);
  const errorsAsRuleIds = getUniqueValues(errors.map(item => item.ruleId));
  const expectedErrors = [
    'strict',
    'semi',
    'no-unused-vars',
    'space-before-blocks',
    'space-before-function-paren'
  ];

  const expectedErrorsFound = errorsAsRuleIds.filter(error => expectedErrors.indexOf(error) !== -1);

  t.is(expectedErrorsFound.length, expectedErrors.length);
});

test(t => {
  const conf = es5conf;

  t.true(isPlainObj(conf));
  t.true(isPlainObj(conf.rules));

  const errors = runEslint('../nice-javascript.js', conf);

  t.is(errors.length, 0);
});

test(t => {
  const conf = es6conf;

  t.true(isPlainObj(conf));
  t.true(isPlainObj(conf.rules));

  const errors = runEslint('../nice-es6.js', conf);

  console.log(errors);

  t.is(errors.length, 0);
});

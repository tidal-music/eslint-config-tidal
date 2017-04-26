'use strict';

import test from 'ava';
import fs from 'fs';
import path from 'path';
import isPlainObj from 'is-plain-obj';
import tempWrite from 'temp-write';
import eslint from 'eslint';
import es5conf from '../';
import es6conf from '../esnext';

function runEslint(str, conf) {
  const linter = new eslint.CLIEngine({
    useEslintrc: false,
    configFile: tempWrite.sync(JSON.stringify(conf))
  });

  return linter.executeOnText(str).results[0].messages;
}

function getFileAsString (pathName) {
  return fs.readFileSync(path.join(__dirname, pathName), 'utf-8');
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

  const errors = runEslint(getFileAsString('../ugly-javascript.js'), conf);
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

  const errors = runEslint(getFileAsString('../ugly-es6.js'), conf);
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

  const errors = runEslint(getFileAsString('../nice-javascript.js'), conf);

  t.is(errors.length, 0);
});

test(t => {
  const conf = es6conf;

  t.true(isPlainObj(conf));
  t.true(isPlainObj(conf.rules));

  const errors = runEslint(getFileAsString('../nice-es6.js'), conf);

  console.log(errors);

  t.is(errors.length, 0);
});

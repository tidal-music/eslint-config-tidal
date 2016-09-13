'use strict';

import test from 'ava';
import isPlainObj from 'is-plain-obj';
import tempWrite from 'temp-write';
import eslint from 'eslint';
import conf from '../';

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
  t.true(isPlainObj(conf));
  t.true(isPlainObj(conf.rules));

  const errors = runEslint('../nice-javascript.js', conf);

  t.is(errors.length, 0);
});

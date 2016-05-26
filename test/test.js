 'use strict';

import test from 'ava';
import isPlainObj from 'is-plain-obj';
import tempWrite from 'temp-write';
import eslint from 'eslint';
import conf from '../';

function runEslint(str, conf) {
  const linter = new eslint.CLIEngine({
    useEslintrc: false,
    configFile: tempWrite.sync(JSON.stringify(conf))
  });

  return linter.executeOnText(str).results[0].messages;
}

test(t => {
  t.true(isPlainObj(conf));
  t.true(isPlainObj(conf.rules));

  const errors = runEslint(`'use strict'\nvar foo = function(){};\n\n\t\tfoo();\n\n\n\n`, conf);

  t.is(errors[0].ruleId, 'strict');
  t.is(errors[1].ruleId, 'semi');
  t.is(errors[2].ruleId, 'space-before-function-paren');
  t.is(errors[3].ruleId, 'space-before-blocks');
  t.is(errors[4].ruleId, 'no-multiple-empty-lines');

  t.is(errors.length, 5);
});

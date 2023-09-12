import test from 'ava';
import pkg from 'eslint/use-at-your-own-risk';

// @ts-expect-error as this is not to be the final API entrypoint
const { FlatESLint } = pkg;

const getUniqueValues = (
  /** @type {Iterable<any> | null | undefined} */ arr,
) => [...new Set(arr)];

/**
 * @param {string} filepath
 */
async function runEslint(filepath) {
  const linter = new FlatESLint({
    ignore: false, // as (failing) test cases are normally ignored..
  });
  const results = await linter.lintFiles([filepath]);
  return results[0].messages;
}

test('Fails on broken files', async t => {
  const errors = await runEslint('test/cases/ugly-javascript.js');
  const errorsAsRuleIds = getUniqueValues(
    errors.map((/** @type {{ ruleId: any; }} */ item) => item.ruleId),
  );

  const expectedErrors = [
    'prettier/prettier',
    '@typescript-eslint/no-unused-vars',
  ];

  const expectedErrorsFound = errorsAsRuleIds.filter(
    error => expectedErrors.indexOf(error) !== -1,
  );

  t.is(expectedErrorsFound.length, expectedErrors.length);
});

test('Success on nice files', async t => {
  const errors = await runEslint('test/cases/nice-javascript.js');

  t.is(errors.length, 0);

  // For debugging:
  if (errors.length) {
    // eslint-disable-next-line no-console
    errors.map(console.log);
  }
});

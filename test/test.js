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
    'internal-rules/require-coverage-ignore-reason',
    'import/no-default-export',
  ];

  const expectedErrorsFound = errorsAsRuleIds.filter(
    error => expectedErrors.indexOf(error) !== -1,
  );

  // All expected error types are found:
  t.is(expectedErrorsFound.length, expectedErrors.length);

  // All found errors are of expected types:
  const unexpectedErrorsFound = errorsAsRuleIds.filter(
    error => expectedErrors.indexOf(error) === -1,
  );
  t.is(unexpectedErrorsFound.length, 0);

  // Total number of seen errors:
  t.is(errors.length, 7);
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

test('Fails on unsorted file', async t => {
  const errors = await runEslint('test/cases/ugly-sort.tsx');
  const errorsAsRuleIds = getUniqueValues(
    errors.map((/** @type {{ ruleId: any; }} */ item) => item.ruleId),
  );

  const expectedErrors = [
    'import/order',
    'perfectionist/sort-object-types',
    'perfectionist/sort-union-types',
    'perfectionist/sort-objects',
    'perfectionist/sort-jsx-props',
  ];

  const expectedErrorsFound = errorsAsRuleIds.filter(
    error => expectedErrors.indexOf(error) !== -1,
  );

  // All expected error types are found:
  t.is(expectedErrorsFound.length, expectedErrors.length);

  // All found errors are of expected types:
  const unexpectedErrorsFound = errorsAsRuleIds.filter(
    error => expectedErrors.indexOf(error) === -1,
  );
  t.is(unexpectedErrorsFound.length, 0);

  // Total number of seen errors:
  t.is(errors.length, 10);
});

test('Success on sorted file', async t => {
  const errors = await runEslint('test/cases/nice-sort.tsx');

  t.is(errors.length, 0);

  // For debugging:
  if (errors.length) {
    // eslint-disable-next-line no-console
    errors.map(console.log);
  }
});

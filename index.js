import path from 'path';
import { fileURLToPath } from 'url';

import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import xoBrowser from 'eslint-config-xo/browser';
import perfectionist from 'eslint-plugin-perfectionist';

import { baseRuleSet } from './rule-sets/base.js';
import { cypressRuleSet } from './rule-sets/cypress.js';
import { dtsRuleSet } from './rule-sets/dts.js';
import { nodeRuleSet } from './rule-sets/node.js';
import { storybookRuleSet } from './rule-sets/storybook.js';
import { unitTestRuleSet } from './rule-sets/unit-test.js';

// mimic CommonJS variables (in ESM)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/** @type { import("eslint").Linter.Config[] } */
// eslint-disable-next-line import/no-default-export
export default [
  js.configs.recommended,
  ...xoBrowser,
  compat.extends('eslint-config-xo-react')[0],
  eslintConfigPrettier,
  // @ts-expect-error types are missing
  perfectionist.configs['recommended-natural'],
  // Base Tidal rule set:
  baseRuleSet,
  // Following are some file type specific overrides:
  cypressRuleSet,
  dtsRuleSet,
  nodeRuleSet,
  storybookRuleSet,
  unitTestRuleSet,
];

import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';

import { baseRuleSet } from './rule-sets/base.js';
import { cypressRuleSet } from './rule-sets/cypress.js';
import { dtsRuleSet } from './rule-sets/dts.js';
import { nodeRuleSet } from './rule-sets/node.js';
import { storybookRuleSet } from './rule-sets/storybook.js';
import { unitTestRuleSet } from './rule-sets/unit-test.js';

/** @type { import("eslint").Linter.Config[] } */
// eslint-disable-next-line import/no-default-export
export default [
  js.configs.recommended,
  eslintConfigPrettier,
  // Base Tidal rule set:
  baseRuleSet,
  // Following are some file type specific overrides:
  cypressRuleSet,
  dtsRuleSet,
  nodeRuleSet,
  storybookRuleSet,
  unitTestRuleSet,
];

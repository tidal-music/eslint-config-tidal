import path from 'path';
import { fileURLToPath } from 'url';

import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import perfectionistNatural from 'eslint-plugin-perfectionist/configs/recommended-natural';

import baseRuleSet from './rule-sets/base.js';
import cypressRuleSet from './rule-sets/cypress.js';
import dtsRuleSet from './rule-sets/dts.js';
import nodeRuleSet from './rule-sets/node.js';
import unitTestRuleSet from './rule-sets/unit-test.js';

// mimic CommonJS variables (in ESM)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
  js.configs.recommended,
  compat.extends('eslint-config-xo/browser')[0],
  compat.extends('eslint-config-xo-react')[0],
  eslintConfigPrettier,
  perfectionistNatural,
  // Base Tidal rule set:
  baseRuleSet,
  // Following are some file type specific overrides:
  cypressRuleSet,
  dtsRuleSet,
  nodeRuleSet,
  unitTestRuleSet,
];

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { fixupPluginRules } from '@eslint/compat';
import typedReduxSagaPlugin from '@jambit/eslint-plugin-typed-redux-saga';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import confusingBrowserGlobals from 'confusing-browser-globals';
import importPlugin from 'eslint-plugin-import';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import noOnlyTestsPlugin from 'eslint-plugin-no-only-tests';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';

import { internalRules } from '../internal-rules/index.js';

/** @type { import("eslint").Linter.Config } */
export const baseRuleSet = {
  languageOptions: {
    globals: {
      ...globals.browser,
    },
    parser: tsParser,
    parserOptions: {
      ecmaVersion: 'latest',
      project: true,
      sourceType: 'module',
    },
  },
  plugins: {
    '@jambit/typed-redux-saga': typedReduxSagaPlugin,
    // @ts-expect-error TS plugin does not quite match expected type
    '@typescript-eslint': tsPlugin,
    import: fixupPluginRules(importPlugin),
    'internal-rules': internalRules,
    'jsx-a11y': jsxA11yPlugin,
    'no-only-tests': noOnlyTestsPlugin,
    prettier,
  },
  rules: {
    ...tsPlugin.configs['recommended-type-checked'].rules,
    ...tsPlugin.configs['stylistic-type-checked'].rules,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    ...importPlugin.configs.typescript.rules,
    ...jsxA11yPlugin.configs.recommended.rules,
    '@jambit/typed-redux-saga/delegate-effects': 'error',
    '@jambit/typed-redux-saga/use-typed-effects': ['error', 'macro'],
    '@stylistic/comma-dangle': 'off',
    '@stylistic/function-paren-newline': 'off',
    '@stylistic/indent': 'off',
    '@stylistic/jsx-quotes': 'off',
    '@stylistic/object-curly-spacing': 'off',
    '@stylistic/padding-line-between-statements': 'off',
    '@stylistic/semi': 'off',
    '@stylistic/space-before-blocks': 'off',
    '@typescript-eslint/array-type': ['error', { default: 'generic' }],
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        format: ['PascalCase'],
        selector: 'typeLike',
      },
    ],
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/no-misused-promises': 'error',
    '@typescript-eslint/no-redeclare': 'error',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-unsafe-argument': 'warn',
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    '@typescript-eslint/no-unsafe-return': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'warn',
    '@typescript-eslint/prefer-regexp-exec': 'warn',
    '@typescript-eslint/require-await': 'warn',
    '@typescript-eslint/restrict-plus-operands': 'warn',
    '@typescript-eslint/restrict-template-expressions': 'warn',
    '@typescript-eslint/sort-type-constituents': 'off',
    '@typescript-eslint/triple-slash-reference': 'error',
    '@typescript-eslint/unbound-method': 'warn',
    camelcase: 'warn',
    'capitalized-comments': 'off',
    complexity: 'error',
    curly: 'error',
    'import/default': 'off',
    'import/export': 'error',
    'import/extensions': [
      'error',
      'never',
      {
        js: 'ignorePackages',
        json: 'always',
      },
    ],
    'import/named': 'off',
    'import/namespace': 'off',
    'import/newline-after-import': 'error',
    'import/no-absolute-path': 'error',
    'import/no-amd': 'error',
    'import/no-default-export': 'error',
    'import/no-duplicates': 'error',
    'import/no-extraneous-dependencies': 'off', // Off for now. Should ignore root deps?
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-restricted-paths': 'error',
    'import/no-self-import': 'error',
    'import/no-unresolved': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc' },
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'unknown',
        ],
        'newlines-between': 'always',
        pathGroups: [
          {
            group: 'internal',
            pattern: '@tidal/core{,/**}',
            position: 'before',
          },
          {
            group: 'internal',
            pattern: '@tidal/event-tracking{,/**}',
            position: 'before',
          },
          {
            group: 'internal',
            pattern: '@tidal/product-analytics{,/**}',
            position: 'before',
          },
          {
            group: 'internal',
            pattern: '@tidal/react-icons{,/**}',
            position: 'before',
          },
          {
            group: 'internal',
            pattern: '@tidal/tv{,/**}',
            position: 'before',
          },
          {
            group: 'internal',
            pattern: '@tidal/web{,/**}',
            position: 'before',
          },
        ],
      },
    ],
    'import/unambiguous': 'off',
    'internal-rules/require-coverage-ignore-reason': 'error',
    'max-depth': 'error',
    'max-param': 'off',
    'max-params': 'off',
    'newline-after-var': 'off',
    'newline-before-return': 'off',
    'no-console': ['error', { allow: ['error', 'warn', 'debug', 'table'] }],
    'no-duplicate-imports': 'off',
    'no-only-tests/no-only-tests': 'error',
    'no-prototype-builtins': 'error',
    'no-redeclare': 'off',
    'no-restricted-globals': ['error', ...confusingBrowserGlobals],
    'no-restricted-imports': [
      'warn',
      {
        message: 'TIDAL: Please use CSS Modules instead!',
        name: '@emotion/css',
      },
      {
        message: 'TIDAL: Please upgrade to @wave/react!',
        name: '@tidal/ui/src',
      },
      {
        message:
          'TIDAL: Please use TS read-only to ensure immutability instead!',
        name: 'immutable',
      },
    ],
    'no-restricted-syntax': [
      'warn',
      {
        message:
          'Prefer string unions over enums, avoids possible Babel problems and: https://blog.bam.tech/developer-news/should-you-use-enums-or-union-types-in-typescript',
        selector: 'TSEnumDeclaration',
      },
    ],
    'no-shadow': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'no-warning-comments': 'off',
    // TODO: consider switching from 'import/order' to this one?
    'perfectionist/sort-imports': 'off',
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        endOfLine: 'auto',
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    'react/boolean-prop-naming': 'off',
    'react/default-props-match-prop-types': 'off',
    'react/forbid-component-props': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-curly-brace-presence': [
      'error',
      { children: 'never', propElementValues: 'always', props: 'never' },
    ],
    'react/jsx-handler-names': 'warn',
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
    'react/jsx-props-no-spreading': 'warn',
    'react/jsx-sort-props': 'off',
    'react/no-array-index-key': 'off',
    'react/no-unsafe': 'error',
    'react/no-unused-prop-types': 'error',
    'react/no-unused-state': 'error',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/static-property-placement': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'valid-jsdoc': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
    react: {
      version: '18.2.0',
    },
  },
};

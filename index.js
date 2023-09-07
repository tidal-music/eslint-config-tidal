import path from 'path';
import { fileURLToPath } from 'url';

import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typedReduxSagaPlugin from '@jambit/eslint-plugin-typed-redux-saga';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import istanbul from 'eslint-plugin-istanbul';
import prettier from 'eslint-plugin-prettier';
import sortDestructureKeysPlugin from 'eslint-plugin-sort-destructure-keys';
import sortKeysFixPlugin from 'eslint-plugin-sort-keys-fix';
import tsSortKeysPlugin from 'eslint-plugin-typescript-sort-keys';
import globals from 'globals';

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Export a single config instance, since this is a config to be included elsewhere..?
/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
  js.configs.recommended,
  compat.extends('eslint-config-xo/browser')[0],
  // maybe add: compat.extends("eslint-config-xo-typescript")[0],
  compat.extends('eslint-config-xo-react')[0],
  eslintConfigPrettier,
  //compat.extends("eslint-plugin-prettier/configs/recommended")[0],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parser: tsParser,
      parserOptions: {
        project: true,
      },
    },
    plugins: {
      '@jambit/typed-redux-saga': typedReduxSagaPlugin,
      '@typescript-eslint': tsPlugin,
      import: importPlugin,
      istanbul,
      prettier,
      'sort-destructure-keys': sortDestructureKeysPlugin,
      'sort-keys-fix': sortKeysFixPlugin,
      'typescript-sort-keys': tsSortKeysPlugin,
    },
    rules: {
      '@jambit/typed-redux-saga/delegate-effects': 'error',
      '@jambit/typed-redux-saga/use-typed-effects': ['error', 'macro'],
      // To allow deprecated React hooks for now, like: 'UNSAFE_componentWillReceiveProps'
      camelcase: 'warn',
      'capitalized-comments': 'off',
      complexity: 'error',
      curly: 'error',
      // "import/named": "error", // PS this is broken ("eslint-plugin-import": "^2.9.0"): Cannot find module '/Users/osmestad/Code/wimp-web-client/node_modules/react-virtualized/webpack/webpack.config.dev.js'
      'import/export': 'error',
      // Consistent file extensions on imports
      'import/newline-after-import': 'error',
      'import/no-absolute-path': 'error',
      // "import/no-commonjs": "error", // Should add? (used in tests? specify as Node?)
      'import/no-amd': 'error',
      //FIXME heap overflow this line 'import/no-cycle': ['error', { maxDepth: 3 }],
      'import/no-default-export': 'error',
      //FIXME heap overflow this line 'import/no-deprecated': 'error',
      'import/no-duplicates': 'error',
      //FIXME heap overflow this line 'import/no-dynamic-require': 'error',
      'import/no-extraneous-dependencies':
        'off' /* Off for now. Should ignore root deps [
        'error',
        {
        devDependencies: false,
        optionalDependencies: false,
        peerDependencies: false,
        },
        ], */,
      // Not sure about this one?
      'import/no-named-as-default': 'off',
      // "import/namespace": "error", // PS this is broken ("eslint-plugin-import": "^2.9.0"): Cannot find module '/Users/osmestad/Code/wimp-web-client/node_modules/react-virtualized/webpack/webpack.config.dev.js'
      'import/no-restricted-paths': 'error',
      'import/no-self-import': 'error',
      'import/no-unresolved': 'error',

      // "import/no-internal-modules": "error", Would cause a lot of errors.. (3751)
      /* This rule is slow and did not find anything useful when last ran, but might be of use for one-off runs:
      'import/no-unused-modules': [
        'error',
        {
          ignoreExports: [
            '** /*.story.tsx',
            '** /*.test.ts',
            '** /*.test.tsx',
            'types/*',
            '.eslintrc.js',
            '__mocks__/fileMock.js',
            '__mocks__/styleMock.js',
            'babel.config.js',
            'dangerfile.js',
            'jest-setup.js',
            'jest.config.js',
            'packages/builder/src/webpack/** /*',
            'packages/core/src/head.ts',
            'packages/cypress-tests/cypress/** /*',
            'packages/product-analytics/src/groups/** /*',
            'packages/tv/src/index.tsx',
            'packages/web/src/appMain.tsx',
            'packages/web/src/utils/standalonePage.ts',
            'webstorm.config.js',
          ],
          missingExports: true,
          unusedExports: true,
        },
      ],
      */
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
      'istanbul/no-ignore-file': 'error',
      'istanbul/prefer-ignore-reason': 'error',
      'max-depth': 'error',
      'max-param': 'off',
      'max-params': 'off',
      'newline-after-var': 'off',
      'newline-before-return': 'off',
      'no-console': ['error', { allow: ['error', 'warn', 'debug', 'table'] }],
      'no-duplicate-imports': 'off', // We use the rule from eslint-plugin-import
      'no-prototype-builtins': 'error',
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
      'no-warning-comments': 'off',
      // handled by TS rule (no-floating-promises) instead? 'promise/catch-or-return': 'error',
      'react-hooks/exhaustive-deps': 'error',
      'react-hooks/rules-of-hooks': 'error',
      // Broken completely here: `tv/src/components/artistHeader/artistHeader.js:20`:
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
      // didn't get autofix to work for this, so disabled for now
      'react/jsx-sort-props': 'off',
      'react/no-array-index-key': 'off',
      'react/no-unsafe': 'error',
      'react/no-unused-prop-types': 'error',
      'react/no-unused-state': 'error',
      // fails if using object level read only: https://github.com/yannickcr/eslint-plugin-react/issues/2472
      'react/prefer-read-only-props': 'off',
      'react/prop-types': 'off',
      'react/require-default-props': 'off',
      'react/state-in-constructor': 'warn', // TODO: make error again and fix all
      'react/static-property-placement': 'error',
      'sort-destructure-keys/sort-destructure-keys': 'error',
      'sort-keys-fix/sort-keys-fix': 'error',
      'tidal-extras/no-get-artist': 'off',
      // These generate too much noise now:
      'valid-jsdoc': 'off',

      ...tsPlugin.configs['recommended-type-checked'].rules,
      ...tsPlugin.configs['stylistic-type-checked'].rules,
      ...importPlugin.configs.typescript.rules,

      '@typescript-eslint/array-type': ['error', { default: 'generic' }],
      '@typescript-eslint/await-thenable': 'error',
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/ban-types': [
        'warn',
        {
          /* Disable this for now, we need null more places than we first thought
          types: {
            null: "Use 'undefined' instead of 'null', or better yet '?' optional syntax",
          }, */
        },
      ],
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
      '@typescript-eslint/sort-type-constituents': 'error',
      '@typescript-eslint/triple-slash-reference': 'error',
      '@typescript-eslint/unbound-method': 'warn',

      // From typescript-eslint: We recommend you do not use the following rules, as TypeScript provides the same checks as part of standard type checking:
      // import/named, import/namespace, import/default, import/no-named-as-default-member
      'import/default': 'off',
      // Consistent file extensions on imports
      'import/extensions': [
        'error',
        'never',
        {
          js: 'ignorePackages',
        },
      ],
      'import/named': 'off',
      'import/namespace': 'off',
      //FIXME this line causes the stack to overflow?
      //'import/no-deprecated': 'warn',
      'import/no-named-as-default-member': 'off',
      'no-redeclare': 'off',
      'no-restricted-syntax': [
        'warn',
        // ban all enums
        {
          message:
            'Prefer string unions over enums, avoids possible Babel problems and: https://blog.bam.tech/developer-news/should-you-use-enums-or-union-types-in-typescript',
          selector: 'TSEnumDeclaration',
        },
      ],
      'no-shadow': 'off',
      'no-undef': 'off', // https://typescript-eslint.io/linting/troubleshooting/#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
      // note you must disable the base rule as it can report incorrect errors
      'no-unused-vars': 'off',
      'prettier/prettier': [
        'error',
        {
          arrowParens: 'avoid',
          singleQuote: true,
          trailingComma: 'all',
        },
      ],
      'typescript-sort-keys/interface': 'error',
      'typescript-sort-keys/string-enum': 'error',
    },
    settings: {
      'import/resolver': {
        typescript: {},
      },
    },
  },
];

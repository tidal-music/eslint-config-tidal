import globals from 'globals';

import tidal from './index.js';

/** @type { import("eslint").Linter.FlatConfig[] } */
// eslint-disable-next-line import/no-default-export
export default [
  ...tidal,
  {
    files: ['*.js', '**/*.js', '**/*.ts', '**/*.tsx'],
  },
  {
    ignores: ['test/cases/*'],
  },
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    settings: {
      'import/internal-regex': '^@tidal/',
    },
  },
];

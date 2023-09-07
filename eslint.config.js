import globals from 'globals';

import tidal from './index.js';

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
  ...tidal,
  {
    ignores: ['test/cases/*'],
  },
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
];

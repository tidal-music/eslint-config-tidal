// For Node.js scripts
import globals from 'globals';

/** @type { import("eslint").Linter.FlatConfig } */
export default {
  files: ['**/scripts/*'],
  languageOptions: {
    globals: {
      ...globals.node,
    },
  },
  rules: {
    'no-console': 'off',
  },
};

// For Node.js scripts
import globals from 'globals';

/** @type { import("eslint").Linter.Config } */
export const nodeRuleSet = {
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

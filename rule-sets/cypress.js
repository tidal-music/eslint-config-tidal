// Cypress
import cypress from 'eslint-plugin-cypress';

/** @type { import("eslint").Linter.FlatConfig } */
export const cypressRuleSet = {
  files: ['**/cypress/**/*'],
  languageOptions: {
    globals: cypress.environments.globals.globals,
  },
  plugins: {
    cypress,
  },
  rules: {
    ...cypress.configs.recommended.rules,
    'cypress/no-force': 'error',
    'cypress/unsafe-to-chain-command': 'warn',
  },
};

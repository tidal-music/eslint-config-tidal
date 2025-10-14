// Cypress
import cypress from 'eslint-plugin-cypress';

/** @type { import("eslint").Linter.Config } */
export const cypressRuleSet = {
  files: ['**/cypress/**/*'],
  languageOptions: cypress.configs?.recommended?.languageOptions
    ? { globals: cypress.configs.recommended.languageOptions.globals }
    : {},
  plugins: {
    cypress,
  },
  rules: {
    ...cypress.configs.recommended.rules,
    'cypress/no-force': 'error',
    'cypress/unsafe-to-chain-command': 'warn',
  },
};

// For unit tests
import vitest from 'eslint-plugin-vitest';

/** @type { import("eslint").Linter.FlatConfig } */
export default {
  files: ['**/*.test.ts', '**/*.test.tsx', '__mocks__/**/*.ts'],
  ignores: ['**/*.auto.test.tsx'],
  languageOptions: {
    globals: vitest.environments.env.globals,
  },
  plugins: { vitest },
  rules: {
    ...vitest.configs.recommended.rules,
    'vitest/prefer-to-be': 'off',
    'vitest/prefer-todo': 'error',
  },
};

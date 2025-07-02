// For unit tests
import vitest from '@vitest/eslint-plugin';

/** @type { import("eslint").Linter.Config } */
export const unitTestRuleSet = {
  files: ['**/*.test.ts', '**/*.test.tsx', '__mocks__/**/*.ts'],
  ignores: ['**/*.auto.test.tsx'],
  languageOptions: {
    globals: vitest.environments.env.globals,
  },
  // @ts-expect-error vitest plugin does not quite match expected type
  plugins: { vitest },
  rules: {
    ...vitest.configs.recommended.rules,
    'vitest/prefer-to-be': 'off',
    'vitest/prefer-todo': 'error',
  },
};

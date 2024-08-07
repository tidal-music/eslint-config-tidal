// Typescript type definitions

/** @type { import("eslint").Linter.Config } */
export const dtsRuleSet = {
  files: ['**/*.d.ts'],
  rules: {
    '@typescript-eslint/consistent-type-definitions': 'off',
    'no-var': 'off',
    'one-var': 'off',
    'vars-on-top': 'off',
  },
};

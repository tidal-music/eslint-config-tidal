// Typescript type definitions

/** @type { import("eslint").Linter.FlatConfig } */
export default {
  files: ['**/*.d.ts'],
  rules: {
    '@typescript-eslint/consistent-type-definitions': 'off',
    'no-var': 'off',
    'one-var': 'off',
    'vars-on-top': 'off',
  },
};

// Storybook
import storybook from 'eslint-plugin-storybook';

/** @type { import("eslint").Linter.Config } */
export const storybookRuleSet = {
  files: ['.storybook/*', '**/*.story.tsx'],
  plugins: {
    storybook,
  },
  rules: {
    ...storybook.configs.recommended.overrides[0].rules,
    'import/no-default-export': 'off',
  },
};

// Storybook
import storybook from 'eslint-plugin-storybook';

/** @type { import("eslint").Linter.Config } */
export const storybookRuleSet = {
  files: ['.storybook/*', '**/*.story.tsx'],
  plugins: {
    // @ts-expect-error plugin does not quite match expected type?
    storybook,
  },
  rules: {
    ...storybook.configs.recommended.overrides[0].rules,
    'import/no-default-export': 'off',
  },
};

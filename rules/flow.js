module.exports = {
  extends: ['plugin:flowtype/recommended', 'prettier/flowtype'],
  plugins: ['flowtype'],
  rules: {
    'flowtype/define-flow-type': 'warn',
    'flowtype/use-flow-type': 'warn',
    'flowtype/space-after-type-colon': [
      'warn',
      'always',
      { allowLineBreak: true },
    ],
    'flowtype/require-exact-type': 'error',
  },
};

module.exports = {
  extends: [
    './rules/jest',
    './rules/react',
    './rules/react-a11y',
    './rules/react-hooks',
  ].map(require.resolve),
  rules: {},
};

module.exports = {
  extends: ['./index', './rules/flow'].map(require.resolve),
  rules: {},
};

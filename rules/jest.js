module.exports = {
  env: {
    'jest/globals': true,
  },
  extends: ['plugin:jest/recommended'],
  plugins: ['jest'],
  rules: {
    'jest/no-standalone-expect': 'off',
    'jest/no-test-callback': 'off',
    'jest/no-disabled-tests': 'off',
  },
};

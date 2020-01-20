const path = require('path');

module.exports = {
  extends: path.join(__dirname, 'index.js'),
  rules: {
    'no-var': 2,
    'object-shorthand': [2, 'always'],
    'prefer-arrow-callback': 2,
    'prefer-const': [2, {
			destructuring: 'all'
		}],
    'prefer-numeric-literals': 2,
  },
  parserOptions: {
    ecmaVersion: 2019,
    ecmaFeatures: {
      jsx: false,
      arrowFunctions: true,
      destructuring: true,
      classes: true,
      defaultParams: true,
      blockBindings: true,
      modules: true,
      objectLiteralComputedProperties: true,
      objectLiteralShorthandMethods: true,
      objectLiteralShorthandProperties: true,
      restParams: true,
      spread: true,
      forOf: true,
      generators: true,
      templateStrings: true,
      superInFunctions: true
    }
  }
};

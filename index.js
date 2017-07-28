module.exports = {
  extends: 'xo',
  rules: {
    'indent': [
      2,
      2,
      {
        'SwitchCase': 0
      }
    ],
    'capitalized-comments': 0,
    'one-var': [2, {
      'var': 'always', // requires one var declaration per function
      'let': 'never', // requires multiple let declarations per block
      'const': 'never' // requires multiple const declarations per block
    }],
    'comma-style': [
      2,
      'first',
      {
        'exceptions': {
          'ArrayExpression': true,
          'ObjectExpression': true,
          'VariableDeclaration': false
        }
      }
    ],
    'curly': [
      2,
      'all'
    ],
    'dot-notation': [
      2,
      {
        'allowKeywords': true
      }
    ],
    'eqeqeq': [
      2,
      'allow-null'
    ],
    'no-bitwise': 2,
    'no-cond-assign': [
      2,
      'except-parens'
    ],
    'no-empty': 2,
    'no-shadow': 2,
    'no-undef': 2,
    'no-with': 2,
    'quotes': [
      2,
      'single'
    ],
    'semi': [
      2,
      'always'
    ],
    'strict': 2,
    'vars-on-top': 2,
    'object-curly-spacing': [2, 'always'],
    'space-before-function-paren': [2, {
      'anonymous': 'always',
      'named': 'always'
    }],
    'newline-after-var': 1,
    'newline-before-return': 1,
    'no-warning-comments': 1,
    'no-console': 1,
    'no-mixed-operators': 1,
    'no-prototype-builtins': 1,
    'quote-props': 0,
    'no-negated-condition' : 0,
    'func-names' : 0,
    'new-cap': 0
  }
};

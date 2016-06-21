'use strict';

module.exports = {
  extends: 'xo',
  rules: {
    "indent": [
      2,
      2,
      {
        "SwitchCase": 0
      }
    ],
    "one-var": [2, {
      "var": "always", // Exactly one var declaration per function
      "let": "always", // Exactly one let declaration per block
      "const": "never" // Exactly one declarator per const declaration per block
    }],
    "vars-on-top": 1,
    "comma-style": [
      2,
      "first",
      {
        "exceptions": {
          "ArrayExpression": true,
          "ObjectExpression": true,
          "VariableDeclaration": false
        }
      }
    ],
    "curly": [
      2,
      "all"
    ],
    "dot-notation": [
      2,
      {
        "allowKeywords": true
      }
    ],
    "eqeqeq": [
      2,
      "allow-null"
    ],
    "no-bitwise": 2,
    "no-cond-assign": [
      2,
      "except-parens"
    ],
    "no-empty": 2,
    "no-shadow": 2,
    "no-undef": 2,
    "no-with": 2,
    "quotes": [
      2,
      "single"
    ],
    "semi": [
      2,
      "always"
    ],
    "strict": 2,
    "newline-after-var": 1,
    "newline-before-return": 1,
    "no-warning-comments": 0,
    "no-negated-condition" : 0,
    "new-cap": 1,
    "object-curly-spacing": [2, "always"],
    "quote-props": 0,
    "no-console": 2,
    "space-before-function-paren": [2, {"anonymous": "always", "named": "always"}]
  }
};

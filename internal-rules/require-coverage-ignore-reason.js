'use strict';
// Extracted from: https://github.com/graphql/graphql-js/pull/3388 related to:
// https://github.com/istanbuljs/eslint-plugin-istanbul/pull/17
// Fixed reason length check and converted to ESM.

export function requireCoverageIgnoreReason(context) {
  const istanbulRegExp = /^\s*istanbul\s+ignore\s+(if|else|next|file)\s+/;
  return {
    Program() {
      const sourceCode = context.getSourceCode();

      for (const node of sourceCode.getAllComments()) {
        const comment = node.value;

        if (comment.match(istanbulRegExp)) {
          const reason = comment.replace(istanbulRegExp, '');
          if (reason.length === 0) {
            context.report({
              message: 'Add a reason why code coverage should be ignored',
              node,
            });
          }
        }
      }
    },
  };
}

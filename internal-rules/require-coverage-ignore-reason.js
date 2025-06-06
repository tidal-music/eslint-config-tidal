'use strict';
// Extracted from: https://github.com/graphql/graphql-js/pull/3388 related to:
// https://github.com/istanbuljs/eslint-plugin-istanbul/pull/17
// Fixed reason length check and converted to ESM.
// Switched to V8 reporter, with c8 comments.
// Docs: https://github.com/istanbuljs/v8-to-istanbul#ignoring-uncovered-lines

/**
 * @type {import("eslint").Rule.RuleModule}
 */
export const requireCoverageIgnoreReason = {
  create(context) {
    const coverageRegExp = /^\s*c8\s+ignore\s+(next|start)\s+/;
    return {
      Program() {
        const { sourceCode } = context;

        for (const node of sourceCode.getAllComments()) {
          const comment = node.value;

          if (coverageRegExp.exec(comment)) {
            const reason = comment.replace(coverageRegExp, '');
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
  },
  meta: {
    docs: {
      description: 'Ensure that all coverage ignore comments have a reason',
    },
    fixable: 'code',
    schema: [], // no options
    type: 'suggestion',
  },
};

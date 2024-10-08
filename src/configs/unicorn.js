import unicorn from 'eslint-plugin-unicorn';

import { files } from '../utils/helpers.js';

export default [
  {
    files: [...files.ts, ...files.js],
    ...unicorn.configs['flat/recommended'],
    rules: {
      ...unicorn.configs['flat/recommended'].rules,
      'unicorn/filename-case': 'off',
      'unicorn/no-array-callback-reference': 'off',
      'unicorn/no-array-for-each': 'off',
      'unicorn/no-array-reduce': 'off',
      'unicorn/no-document-cookie': 'warn',
      'unicorn/no-null': 'off',
      'unicorn/no-static-only-class': 'off',
      'unicorn/no-unused-properties': 'warn',
      'unicorn/numeric-separators-style': [
        'error',
        { onlyIfContainsSeparator: true },
      ],
      'unicorn/prefer-export-from': ['error', { ignoreUsedVariables: true }],
      'unicorn/prefer-module': 'warn',
      'unicorn/switch-case-braces': ['error', 'avoid'],
      'unicorn/prefer-object-from-entries': 'warn',
      'unicorn/catch-error-name': 'off',
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/relative-url-style': ['error', 'always'],
      'unicorn/consistent-function-scoping': 'warn',
      'unicorn/prefer-spread': 'off',
      'unicorn/no-negated-condition': 'warn',
      'unicorn/no-typeof-undefined': ['error', { checkGlobalVariables: false }],
      'unicorn/no-await-expression-member': 'off',
      'unicorn/explicit-length-check': 'off',
      'unicorn/prefer-logical-operator-over-ternary': 'warn',
      'unicorn/consistent-destructuring': 'warn',
      'unicorn/no-unreadable-iife': 'warn',
      'unicorn/prefer-event-target': 'warn',
      'unicorn/prefer-query-selector': 'off',
      'unicorn/prefer-string-slice': 'off',
      'unicorn/no-useless-undefined': ['error', { checkArguments: false }],

      // Style rules turned off due to prettier
      'unicorn/empty-brace-spaces': 'off',

      // This causes issues with some frameworks but is really rare to use
      'unicorn/no-array-method-this-argument': 'off',
    },
  },
  {
    files: files.test,
    rules: {
      'unicorn/no-duplicate-string': 'off',
    },
  },
];

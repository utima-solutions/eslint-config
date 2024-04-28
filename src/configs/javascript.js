import js from '@eslint/js';

import { files } from '../utils/helpers.js';

export default [
  {
    files: [...files.js],
    ...js.configs.recommended,
    rules: {
      ...js.configs.recommended.rules,
      'no-console': [
        'warn',
        {
          allow: ['warn', 'error'],
        },
      ],
      curly: ['error', 'all'],
      'dot-notation': ['error'],
      'no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          ignoreRestSiblings: true,
          args: 'none',
        },
      ],

      // Line spacing
      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          next: 'class',
          prev: '*',
        },
        {
          blankLine: 'always',
          next: '*',
          prev: 'class',
        },
        {
          blankLine: 'always',
          next: 'return',
          prev: '*',
        },
        {
          blankLine: 'always',
          next: 'case',
          prev: '*',
        },
        {
          blankLine: 'always',
          next: 'default',
          prev: '*',
        },
        {
          blankLine: 'always',
          next: 'export',
          prev: '*',
        },
        {
          blankLine: 'any',
          next: 'case',
          prev: 'case',
        },
        {
          blankLine: 'any',
          next: 'export',
          prev: 'export',
        },
        {
          blankLine: 'always',
          next: '*',
          prev: 'import',
        },
        {
          blankLine: 'any',
          next: 'import',
          prev: 'import',
        },
      ],
    },
  },
];

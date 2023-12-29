import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    ignores: [
      '**/out/**',
      '**/node_modules/**',
      '**/.next/**',
      '**/.expo/**',
      '**/dist/**',
      '**/build/**',
      '**/docs/**',
      '**/.docusaurus/**',
      '**/coverage/**',
    ],
  },
  {
    ...js.configs.recommended,
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      'no-console': [
        'error',
        {
          allow: ['warn', 'error'],
        },
      ],
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

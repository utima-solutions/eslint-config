import globals from 'globals';

import { files } from '../utils/helpers.js';

export default [
  {
    ignores: [
      '**/out/**',
      '**/*.gen.ts',
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
    files: [...files.js, ...files.ts],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
  },
];

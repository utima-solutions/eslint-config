import tsEslint from 'typescript-eslint';

import { files } from '../utils/helpers.js';

export default [
  {
    files: files.ts,
    languageOptions: {
      parserOptions: {
        project: [
          './tsconfig.eslint.json',
          './tsconfig.json',
          './apps/*/tsconfig.eslint.json',
          './apps/*/tsconfig.json',
          './packages/*/tsconfig.eslint.json',
          './packages/*/tsconfig.json',
        ],
      },
    },
    rules: {
      ...tsEslint.configs.recommendedTypeChecked.rules,
      ...tsEslint.configs.stylisticTypeChecked.rules,
      '@typescript-eslint/consistent-type-exports': 'error',
      'no-undef': 'off',
    },
  },
];

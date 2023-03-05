import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import reactJsxRuntime from 'eslint-plugin-react/configs/jsx-runtime.js';

export default [
  {
    files: ['**/*.jsx', '**/*.tsx'],
    ...reactRecommended,
    ...reactJsxRuntime,
  },
];

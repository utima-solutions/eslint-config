import tailwindcss from 'eslint-plugin-tailwindcss';

import { files } from '../utils/helpers.js';

export default [
  {
    files: [...files.jsx],
    plugins: { tailwindcss },
    rules: {
      ...tailwindcss.configs.recommended.rules,
    },
  },
];

import base from './src/configs/base.js';
import imprt from './src/configs/import.js';
import javascript from './src/configs/javascript.js';
import jest from './src/configs/jest.js';
import prettier from './src/configs/prettier.js';
import react from './src/configs/react.js';
import sonarjs from './src/configs/sonarjs.js';
import typescript from './src/configs/typescript.js';
import unicorn from './src/configs/unicorn.js';
import unusedImports from './src/configs/unusedImports.js';

export default [
  ...base,
  ...javascript,
  ...typescript,
  ...react,
  ...jest,
  ...imprt,
  ...sonarjs,
  ...unicorn,
  ...unusedImports,
  ...prettier,
];

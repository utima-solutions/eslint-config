import base from './src/configs/base.js';
import imprt from './src/configs/import.js';
import jest from './src/configs/jest.js';
import prettier from './src/configs/prettier.js';
import react from './src/configs/react.js';
import sonarjs from './src/configs/sonarjs.js';
import typescript from './src/configs/typescript.js';
import unusedImports from './src/configs/unusedImports.js';

export default [
  ...base,
  ...typescript,
  ...react,
  ...jest,
  ...imprt,
  ...sonarjs,
  ...unusedImports,
  ...prettier,
];

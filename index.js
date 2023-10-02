import base from './rules/base.js';
import imprt from './rules/import.js';
import jest from './rules/jest.js';
import next from './rules/next.js';
import prettier from './rules/prettier.js';
import react from './rules/react.js';
import typescript from './rules/typescript.js';
import unusedImports from './rules/unusedImports.js';

export default [
  ...base,
  ...typescript,
  ...react,
  ...next,
  ...jest,
  ...imprt,
  ...unusedImports,
  ...prettier,
];

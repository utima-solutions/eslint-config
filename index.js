import {
  base,
  imprt,
  javascript,
  jest,
  prettier,
  react,
  sonarjs,
  typescript,
  unicorn,
  unusedImports,
} from './src/configs/index.js';

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

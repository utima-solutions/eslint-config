import { nodeResolve } from '@rollup/plugin-node-resolve';

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
  input: 'index.js',
  external: [/node_modules/],
  output: [
    {
      dir: 'dist/cjs',
      format: 'cjs',
      preserveModules: true,
    },
  ],
  plugins: [nodeResolve()],
};

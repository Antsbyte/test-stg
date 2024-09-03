import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import nodeGlobals from 'rollup-plugin-node-globals';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'es'
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm'
    }
  ],
  external: ['fsevents', 'jest'],
  plugins: [
    resolve({
      browser: false,
      preferBuiltins: true,
    }),
    //nodeGlobals(),
    commonjs()
  ]
};
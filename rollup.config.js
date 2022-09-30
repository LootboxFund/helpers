import typescript from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import json from '@rollup/plugin-json'
import globals from 'rollup-plugin-node-globals'
import builtins from 'rollup-plugin-node-builtins'
import nodePolyfills from 'rollup-plugin-node-polyfills'

const configCJSLib = {
  input: ['src/index.ts'],
  output: {
    dir: 'lib',
    format: 'cjs',
    sourcemap: true,
  },
  plugins: [
    commonjs(), // enable CommonJS modules
    nodePolyfills(), // enable NodeJS polyfills
    resolve({ preferBuiltins: true, browser: true }), // enable importing from node_modules
    typescript({ resolveJsonModule: true }), // enable TypeScript
    json({ compact: true }), // enable JSON
    globals(), // allows globals to be imported (process.env)
    builtins(), // allows builtins to be imported via require/import
  ],
  external: ['react'],
}
if (process.env.NODE_ENV === 'production') {
  configCJSLib.plugins.push(terser()) // enable minification
}

export default [configCJSLib]

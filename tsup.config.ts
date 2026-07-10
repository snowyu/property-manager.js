import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/**/*.js'],
  format: ['esm', 'cjs'],
  dts: true,
  splitting: false,
  sourcemap: false,
  clean: true,
  outDir: 'lib',
  outExtension({ format }) {
    return {
      js: format === 'cjs' ? '.cjs' : '.js',
    }
  },
})

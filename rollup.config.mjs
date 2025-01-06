import del from 'rollup-plugin-delete'
import { dts } from 'rollup-plugin-dts'
import multi from '@rollup/plugin-multi-entry'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import nodeResolve from '@rollup/plugin-node-resolve'
import nodePolyfills from 'rollup-plugin-polyfill-node'
import nodeExternals from 'rollup-plugin-node-externals'

const inputs = {
  index: 'src/**/*.ts'
}

export default Object.entries(inputs).map(([name, input]) => ({
	input,
	output: [
    { format: 'es', file: `dist/${name}.js` }
  ],
  plugins: [
    multi(),
    nodePolyfills({ include: ['events'], sourceMap: true }),
    nodeExternals(), // Must always be before `nodeResolve()`.
    nodeResolve({
      extensions: ['.js', '.ts', '.ts'],
      exportConditions: ['node', 'import', 'require', 'default']
    }),
    typescript({
      noEmitOnError: true,
      tsconfig: './tsconfig.build.json',
    }),
    commonjs(),
  ]
})).concat([
  {
    input: ['dist/**/*.d.ts', 'types/*.d.ts'],
    output: [{ format: 'es' , file: 'dist/index.d.ts' }],
    plugins: [
      multi(),
      nodeExternals(), // Must always be before `nodeResolve()`.
      dts(),
      del({
        targets: [
          'dist/**/',
          'dist/**/*.d.ts',
          '!dist/index.d.ts'
        ],
        hook: 'buildEnd'
      })
    ],
  },
])
import vue from 'rollup-plugin-vue'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'

const destFile = 'dist/ReplaceMe'

export default [
    // ESM build to be used with webpack/rollup
    {
        //input: 'src/ReplaceMe.vue',
        input: 'src/index.ts',
        output: {
            format: 'esm',
            file: destFile + '.esm.js',
        },
        external: ['vue'],
        plugins: [
            nodeResolve(),
            typescript(/*{
              tsconfig: false,
              experimentalDecorators: true,
              module: 'es2015'
            }*/),
            vue(),
        ],
    },
    // SSR build
    {
        input: 'src/index.ts',
        output: {
            format: 'cjs',
            file: destFile + '.ssr.js',
        },
        external: ['vue'],
        plugins: [
            nodeResolve(),
            typescript(/*{
              tsconfig: false,
              experimentalDecorators: true,
              module: 'es2015'
            }*/),
            vue({ template: { optimizeSSR: true } }),
        ],
    },
    // Browser build
    {
        input: 'src/wrapper.js',
        output: {
            format: 'iife',
            file: destFile + '.iife.js',
            globals: {
                vue: 'Vue',
            },
        },
        external: ['vue'],
        plugins: [
            nodeResolve(),
            typescript(/*{
              tsconfig: false,
              experimentalDecorators: true,
              module: 'es2015'
            }*/),
            vue(),
        ],
    },
]
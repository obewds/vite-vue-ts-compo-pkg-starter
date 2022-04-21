import vue from 'rollup-plugin-vue'
import { nodeResolve } from '@rollup/plugin-node-resolve'

const destFile = 'dist/ReplaceMe'

export default [
    // ESM build to be used with webpack/rollup
    {
        input: 'src/ReplaceMe.vue',
        output: {
            format: 'esm',
            file: destFile + '.esm.js',
        },
        external: ['vue'],
        plugins: [
            nodeResolve(),
            vue(),
        ],
    },
    // SSR build
    {
        input: 'src/index.js',
        output: {
            format: 'cjs',
            file: destFile + '.ssr.js',
        },
        external: ['vue'],
        plugins: [
            nodeResolve(),
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
            vue(),
        ],
    },
]
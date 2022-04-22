/// <reference types="vitest"/>

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// import rollupVue from 'rollup-plugin-vue'
// import { nodeResolve } from '@rollup/plugin-node-resolve'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  resolve: {
      alias: {
          '@': resolve(__dirname, 'src'),
      },
  },
  server: {
      open: true,
  },
  test: {
      globals: true,
  },
  build: {
    outDir: './dist',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ViteVueTsCompoPkgStarter',
      formats: ['es','cjs','umd','iife'],
      fileName: (format: string) => `vite-vue-ts-compo-pkg-starter.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
      // plugins: [
      //     nodeResolve(),
      //     rollupVue(),
      // ],
      // input: {
      //   main: resolve(__dirname, 'index.html'),
      //   nested: resolve(__dirname, 'nested/index.html')
      // },
    },
  },
})

/*
const path = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "ReplaceMe",
      fileName: (format: string) => `replace-me.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
*/

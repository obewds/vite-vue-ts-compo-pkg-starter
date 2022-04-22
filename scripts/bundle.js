const fs = require('fs-extra')


fs.copySync('./src/ViteVueTsCompoPkgStarter.vue', './dist/src/ViteVueTsCompoPkgStarter.vue')
fs.copySync('./dist/ViteVueTsCompoPkgStarter.vue.d.ts', './dist/ViteVueTsCompoPkgStarter.cjs.d.ts')
fs.copySync('./dist/ViteVueTsCompoPkgStarter.vue.d.ts', './dist/ViteVueTsCompoPkgStarter.es.d.ts')
fs.copySync('./dist/ViteVueTsCompoPkgStarter.vue.d.ts', './dist/ViteVueTsCompoPkgStarter.iife.d.ts')
fs.copySync('./dist/ViteVueTsCompoPkgStarter.vue.d.ts', './dist/ViteVueTsCompoPkgStarter.umd.d.ts')


fs.remove('./dist/app')
fs.remove('./dist/favicon.ico')
fs.remove('./dist/index.d.ts')
fs.remove('./dist/main.d.ts')


fs.move('./dist/ViteVueTsCompoPkgStarter.vue.d.ts', './dist/src/ViteVueTsCompoPkgStarter.vue.d.ts')

console.log(' ')
console.log('*\\o/* ./scripts/bundle.js run complete! *\\o/*')
console.log(' ')

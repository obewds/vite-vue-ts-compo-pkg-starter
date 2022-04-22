// ./scripts/bundle.js

const fs = require('fs-extra')
const helpers = require('./helpers.js')


const compo = 'ViteVueTsCompoPkgStarter'


helpers.copyFileAndReplaceString('./src/index.ts', './dist/index.ts', compo + '.vue', 'src/' + compo + '.vue')
helpers.copyFileAndReplaceString('./src/index.js', './dist/index.js', compo + '.vue', 'src/' + compo + '.vue')


fs.copySync('./src/' + compo + '.vue', './dist/src/' + compo + '.vue')
fs.copySync('./dist/' + compo + '.vue.d.ts', './dist/' + compo + '.cjs.d.ts')
fs.copySync('./dist/' + compo + '.vue.d.ts', './dist/' + compo + '.es.d.ts')
fs.copySync('./dist/' + compo + '.vue.d.ts', './dist/' + compo + '.iife.d.ts')
fs.copySync('./dist/' + compo + '.vue.d.ts', './dist/' + compo + '.umd.d.ts')


fs.remove('./dist/app')
fs.remove('./dist/favicon.ico')
fs.remove('./dist/index.d.ts')
fs.remove('./dist/main.d.ts')


fs.move('./dist/' + compo + '.vue.d.ts', './dist/src/' + compo + '.vue.d.ts')


console.log(' ')
console.log('*\\o/* ./scripts/bundle.js run complete! *\\o/*')
console.log(' ')

// ./scripts/bundle.js

const fs = require('fs-extra')
// const helpers = require('./helpers.js')
// import fs from 'fs-extra'
// import helpers from './helpers.js'
// import packagejson from './package.json'



const compo = 'ViteVueTsCompoPkgStarter'
let pkg = require('../package.json')



// copy the entry files for the package - inserting the package src/ directory
// helpers.copyFileAndReplaceString('./src/dist/index.ts', './dist/index.ts', compo + '.vue', 'src/' + compo + '.vue')
// helpers.copyFileAndReplaceString('./src/dist/index.js', './dist/index.js', compo + '.vue', 'src/' + compo + '.vue')



// copy the already prepped entry files for the package
fs.copySync('./src/dist/index.ts', './dist/index.ts')
fs.copySync('./src/dist/index.js', './dist/index.js')



// copy the main package vue component itself
fs.copySync('./src/' + compo + '.vue', './dist/src/' + compo + '.vue')



// dupe the vue-tsc generated .d.ts file - adding extensions to match the generated files built by vite
fs.copySync('./dist/' + compo + '.vue.d.ts', './dist/' + compo + '.cjs.d.ts')
fs.copySync('./dist/' + compo + '.vue.d.ts', './dist/' + compo + '.es.d.ts')
fs.copySync('./dist/' + compo + '.vue.d.ts', './dist/' + compo + '.iife.d.ts')
fs.copySync('./dist/' + compo + '.vue.d.ts', './dist/' + compo + '.umd.d.ts')



// move the vue-tsc generated .d.ts file for the package vue file itself
// into the distribution directory adajecent to the ./dist/src/ .vue file
fs.move('./dist/' + compo + '.vue.d.ts', './dist/src/' + compo + '.vue.d.ts')



// add a key/value to the repo's package file to switch it to a module type
pkg.type = 'module'



// async/await func to handle all remaining changes for the build
const cleanUpAndCreateDistPackage = async function () {

    try {

        // remove unneded artifacts from vue-tsc prior to this script running in build processes
        await fs.remove('./dist/app')
        await fs.remove('./dist/app')
        await fs.remove('./dist/dist')
        await fs.remove('./dist/favicon.ico')
        await fs.remove('./dist/index.d.ts')
        await fs.remove('./dist/main.d.ts')

        // create a new package.json file for the dist files so they work as modules for clients
        await fs.writeJson('./dist/package.json', pkg, { spaces:2 })

        // output a message to the console when script ends run
        console.log(' ')
        console.log('*\\o/* ./scripts/bundle.js run complete! *\\o/*')
        console.log(' ')
        
    } catch (err) {

        console.error(err)

    }

}
// call the async/await func
cleanUpAndCreateDistPackage()

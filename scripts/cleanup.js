// ./scripts/cleanup.js

const fs = require('fs-extra')
const helpers = require('./helpers.js')

// remove unneded artifacts from vue-tsc prior to this script running in build processes
fs.remove('./dist/types/main.d.ts')
fs.remove('./dist/types/App.vue.d.ts')
fs.remove('./dist/types/app')

helpers.nodeScriptSuccessMsg('Package ./dist files were cleaned/prepped for publishing!')

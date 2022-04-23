// ./scripts/cleanup.js

const fs = require('fs-extra')

// remove unneded artifacts from vue-tsc prior to this script running in build processes
fs.remove('./dist/types/main.d.ts')
fs.remove('./dist/types/App.d.ts')
fs.remove('./dist/types/app')

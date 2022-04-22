// ./scripts/init.js

const helpers = require('./helpers.js')
// import helpers from './helpers.js'




// process.argv.forEach(function (val, index, array) {
//     console.log(index + ': ' + val);
// })

const scriptArguments = process.argv.slice(2)




let repoName = ''

if (scriptArguments[0] && (scriptArguments[0]).length > 0) {

    repoName = scriptArguments[0]

    // update all files
    if (repoName) {

        const pascalCompoName = helpers.pascalize(repoName)

        // 'test-completed'
        // testing code
        
        // rename filenames
        helpers.renameFileAndReplaceString('./ZedTest.vue', './' + pascalCompoName + '.vue', 'this-is-a-test', repoName)

        // replace all placeholder strings in files with kebob case repo name
        helpers.replaceStringOcccurances('./z-test.js', 'this-is-a-test', repoName)
        helpers.replaceStringOcccurances('./z-test.md', 'this-is-a-test', repoName)


        // actual prod code (careful when uncommenting!)

        /*
        const placeholderRepoName = 'vite-vue-ts-compo-pkg-starter'
        const placeholderCompoName = 'ViteVueTsCompoPkgStarter'
        const placeholderCompoNameKebob = 'vite-vue-ts-compo-pkg-starter'
        
        
        // STEP 1:
        //     Find & replace all occurances of the string:
        //         vite-vue-ts-compo-pkg-starter
        //     with the string:
        //         repoName
        //     in the following file(s):
        //         ./package.json
        //         ./README.md
        //         ./docs/.vitepress/config.js


        // replace all placeholder strings in files with kebob case repo name
        helpers.replaceStringOcccurances('./package.json', placeholderRepoName, repoName)
        helpers.replaceStringOcccurances('./README.md', placeholderRepoName, repoName)
        helpers.replaceStringOcccurances('./docs/.vitepress/config.js', placeholderRepoName, repoName)

        
        // STEP 2:
        //     Find & replace all occurances of the string:
        //         ViteVueTsCompoPkgStarter
        //     with the string:
        //         pascalCompoName
        //     in the following file(s):
        //         ./package.json
        //         ./rollup.config.js
        //         ./docs/component.md
        //         ./docs/index.md
        //         ./docs/.vitepress/config.js
        //         ./src/index.ts
        //         ./src/ViteVueTsCompoPkgStarter.vue
        //         ./src/app/Workspace.vue
        //         ./tests/ViteVueTsCompoPkgStarter.test.js
        

        helpers.replaceStringOcccurances('./package.json', placeholderCompoName, pascalCompoName)
        helpers.replaceStringOcccurances('./rollup.config.js', placeholderCompoName, pascalCompoName)
        helpers.replaceStringOcccurances('./docs/component.md', placeholderCompoName, pascalCompoName)
        helpers.replaceStringOcccurances('./docs/index.md', placeholderCompoName, pascalCompoName)
        helpers.replaceStringOcccurances('./docs/.vitepress/config.js', placeholderCompoName, pascalCompoName)
        helpers.replaceStringOcccurances('./src/index.ts', placeholderCompoName, pascalCompoName)
        // helpers.replaceStringOcccurances('./src/ViteVueTsCompoPkgStarter.vue', placeholderCompoName, pascalCompoName)
        helpers.replaceStringOcccurances('./src/app/Workspace.vue', placeholderCompoName, pascalCompoName)
        // helpers.replaceStringOcccurances('./tests/ViteVueTsCompoPkgStarter.test.js', placeholderCompoName, pascalCompoName)

        
        // STEP 3:
        //     Find & replace all occurances of the string:
        //         vite-vue-ts-compo-pkg-starter
        //     with the string:
        //         repoName
        //     in the following file(s):
        //         ./docs/index.md
        

        helpers.replaceStringOcccurances('./docs/index.md', placeholderCompoNameKebob, repoName)

        
        // STEP: 4
        //     Change the file names containing the string:
        //         ViteVueTsCompoPkgStarter
        //     to the string:
        //         pascalCompoName
        //     in the following file(s):
        //         ./src/ViteVueTsCompoPkgStarter.vue > ./src/TestRepoName.vue
        //         ./tests/ViteVueTsCompoPkgStarter.test.js > ./tests/TestRepoName.test.js
        
       
        helpers.renameFileAndReplaceString('./src/ViteVueTsCompoPkgStarter.vue', './' + pascalCompoName + '.vue', placeholderCompoName, pascalCompoName)
        helpers.renameFileAndReplaceString('./tests/ViteVueTsCompoPkgStarter.test.js', './' + pascalCompoName + '.test.js', placeholderCompoName, pascalCompoName)
        */
        
        
        /*
            STEP: 5
                Now do the testing driven component things to the newly updated ./tests/TestRepoName.text.js and ./src/TestRepoName.vue files!
                    Ensure 100% coverage in ./tests/TestRepoName.text.js
                    Complete component in ./src/TestRepoName.vue
        */

        /*
            STEP: 6
                Next, write up some docs covering all aspects of your tested component in the ./docs/index.md and ./docs/component.md files!
                    Document component fully in ./docs/index.md
                    Reference generated files in ./docs/component.md
        */

        /*
            STEP: 7
                Next, prep all generated files by running the npm run publish:prep command from the project's root directory.
                    Run publish:prep to generate component and docs files
        */

        /*
            STEP: 8
                Commit all finalized files to the repository in a PR, and merge them into the main branch to trigger the GitHub Action automation to create a new gh-pages branch (if it doesn't already exist), which will automatically copy the files generated in the ./docs/.vitepress/dist directory to the branch to push the files live to the world.
                    Commit all updates, make a PR, and merge to main branch
                    Ensure docs were published: https://obewds.github.io/test-repo-name
        */

        /*
            STEP: 9
                Lastly, use the npm run publish:package command, and follow the NPM authentication prompts. Once successful, the package will be pubished and ready for use as a dependency!
                    Ensure the package was published: https://www.npmjs.com/package/@obewds/test-repo-name
        */

    }

} else {

    console.log(' ')
    console.error('Please provide the kebob-case repo name for your component to proceed.')
    console.error('For example, the repo @oberocks/some-project should use the following command/arg syntax:')
    console.log('$ npm run init:as -- some-project')
    console.error('  ...or...')
    console.log('$ node scripts/init.js some-project')
    console.log(' ')

    process.exit(1)

}

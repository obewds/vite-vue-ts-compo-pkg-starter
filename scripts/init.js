// ./scripts/init.js

const helpers = require('./helpers.js')



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

        const placeholderRepoName = 'vite-vue-ts-compo-pkg-starter'
        const placeholderCompoName = 'ViteVueTsCompoPkgStarter'

        const runInit = async function () {

            // STEP 1:
            //     Find & replace all occurances of the strings:
            //         vite-vue-ts-compo-pkg-starter
            //         ViteVueTsCompoPkgStarter
            //     with the string values for:
            //         repoName
            //         pascalCompoName
            //     in the following file(s):
            //         ./package.json
            //         ./README.md
            //         ./vite.config.ts
            //         ./docs/.vitepress/config.js
            //         ./docs/component.md
            //         ./docs/index.md
            //         ./src/app/Workspace.vue


            //
            await helpers.replaceStringOcccurances('./package.json', [
                placeholderRepoName, placeholderCompoName,
            ], [
                repoName, pascalCompoName,
            ])
            await helpers.replaceStringOcccurances('./README.md', [
                placeholderRepoName, placeholderCompoName,
            ], [
                repoName, pascalCompoName,
            ])
            await helpers.replaceStringOcccurances('./vite.config.ts', [
                placeholderRepoName, placeholderCompoName,
            ], [
                repoName, pascalCompoName,
            ])
            await helpers.replaceStringOcccurances('./docs/.vitepress/config.js', [
                placeholderRepoName, placeholderCompoName,
            ], [
                repoName, pascalCompoName,
            ])
            await helpers.replaceStringOcccurances('./docs/component.md', [
                placeholderRepoName, placeholderCompoName,
            ], [
                repoName, pascalCompoName,
            ])
            await helpers.replaceStringOcccurances('./docs/index.md', [
                placeholderRepoName, placeholderCompoName,
            ], [
                repoName, pascalCompoName,
            ])
            await helpers.replaceStringOcccurances('./docs/tests.md', [
                placeholderRepoName, placeholderCompoName,
            ], [
                repoName, pascalCompoName,
            ])
            await helpers.replaceStringOcccurances('./docs/.vitepress/config.js', [
                placeholderRepoName, placeholderCompoName,
            ], [
                repoName, pascalCompoName,
            ])
            await helpers.replaceStringOcccurances('./src/index.ts', [
                placeholderRepoName, placeholderCompoName,
            ], [
                repoName, pascalCompoName,
            ])
            await helpers.replaceStringOcccurances('./src/app/Workspace.vue', [
                placeholderRepoName, placeholderCompoName,
            ], [
                repoName, pascalCompoName,
            ])

            
            // STEP 2:
            //     Find & replace all occurances of the string:
            //         ViteVueTsCompoPkgStarter
            //     with the string:
            //         pascalCompoName
            //     in the following file(s):
            //         ./package.json
            //         ./vite.config.ts
            //         ./docs/component.md
            //         ./docs/index.md
            //         ./docs/tests.md
            //         ./docs/.vitepress/config.js
            //         ./src/index.ts
            //         ./src/app/Workspace.vue
            

            //await helpers.replaceStringOcccurances('./package.json', [placeholderCompoName], [pascalCompoName])
            //await helpers.replaceStringOcccurances('./vite.config.ts', [placeholderCompoName], [pascalCompoName])
            //await helpers.replaceStringOcccurances('./docs/component.md', [placeholderCompoName], [pascalCompoName])
            //await helpers.replaceStringOcccurances('./docs/index.md', [placeholderCompoName], [pascalCompoName])
            //await helpers.replaceStringOcccurances('./docs/tests.md', [placeholderCompoName], [pascalCompoName])
            //await helpers.replaceStringOcccurances('./docs/.vitepress/config.js', [placeholderCompoName], [pascalCompoName])
            //await helpers.replaceStringOcccurances('./src/index.ts', [placeholderCompoName], [pascalCompoName])
            //await helpers.replaceStringOcccurances('./src/app/Workspace.vue', [placeholderCompoName], [pascalCompoName])

            
            // STEP: 3
            //     Change the file names containing the string:
            //         ViteVueTsCompoPkgStarter
            //     to the string:
            //         pascalCompoName
            //     in the following file(s):
            //         ./src/ViteVueTsCompoPkgStarter.vue > ./src/TestRepoName.vue
            //         ./tests/ViteVueTsCompoPkgStarter.test.js > ./tests/TestRepoName.test.js
            
        
            await helpers.renameFileAndReplaceString('./src/components/' + placeholderCompoName + '.vue', './src/components/' + pascalCompoName + '.vue', [
                placeholderRepoName,
                placeholderCompoName,
            ], [
                repoName,
                pascalCompoName,
            ])
            await helpers.renameFileAndReplaceString('./tests/' + placeholderCompoName + '.test.js', './tests/' + pascalCompoName + '.test.js', [
                placeholderRepoName,
                placeholderCompoName,
            ], [
                repoName,
                pascalCompoName,
            ])
            
            
            /*
                STEP: 5
                    Now do the testing driven component things to the newly updated ./tests/TestRepoName.text.js and ./src/TestRepoName.vue files!
                        Ensure 100% coverage in ./tests/TestRepoName.text.js
                        Complete component in ./src/TestRepoName.vue
                STEP: 6
                    Next, write up some docs covering all aspects of your tested component in the ./docs/index.md and ./docs/component.md files!
                        Document component fully in ./docs/index.md
                        Reference generated files in ./docs/component.md
                STEP: 7
                    Next, prep all generated files by running the npm run publish:prep command from the project's root directory.
                        Run publish:prep to generate component and docs files
                STEP: 8
                    Commit all finalized files to the repository in a PR, and merge them into the main branch to trigger the GitHub Action automation to create a new gh-pages branch (if it doesn't already exist), which will automatically copy the files generated in the ./docs/.vitepress/dist directory to the branch to push the files live to the world.
                        Commit all updates, make a PR, and merge to main branch
                        Ensure docs were published: https://obewds.github.io/test-repo-name
                STEP: 9
                    Lastly, use the npm run publish:package command, and follow the NPM authentication prompts. Once successful, the package will be pubished and ready for use as a dependency!
                        Ensure the package was published: https://www.npmjs.com/package/@obewds/test-repo-name
            */


            helpers.nodeScriptSuccessMsg('The package files to start developing your new ' + pascalCompoName + '.vue component were successfully updated for the ' + repoName + ' repo!')

        }

        runInit()

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

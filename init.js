const fs = require('fs-extra')




// process.argv.forEach(function (val, index, array) {
//     console.log(index + ': ' + val);
// })

const scriptArguments = process.argv.slice(2)




const replaceStringOcccurances = async function (filePathString, stringToReplace, replacementString) {
    
    fs.readFile(filePathString, 'utf8', function (err,data) {

        if (err) {
            console.log(err)
            return false
        }

        const regex = new RegExp(`\\b${stringToReplace}\\b`, 'g') // using boundries and case sensitive matching

        const result = data.replace(regex, replacementString);

        fs.writeFile(filePathString, result, 'utf8', function (err) {
            if (err) {
                console.log(err)
                return false
            }
            console.log(filePathString + ' was successfully modified!')
            return true
        })

    })

}

const renameFile = async function (filePathString, renamedFilePathString) {

    fs.rename(filePathString, renamedFilePathString, function(err) {

        if ( err ) {
            console.log('ERROR: ' + err)
            return false
        }

        console.log(filePathString + ' was successfully changed to ' + renamedFilePathString + '!')
        return true

    })

}

const renameFileAndReplaceString = async function (filePathString, renamedFilePathString, stringToReplace, replacementString) {
    try {
        await renameFile(filePathString, renamedFilePathString)
        replaceStringOcccurances(renamedFilePathString, stringToReplace, replacementString)
    } catch (err) {
        console.error(err)
    }
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function pascalize (string) {
    const words = string.split('-')
    const capitalized = words.map(word => capitalize(word))
    return capitalized.join('')
}




let repoName = ''

if (scriptArguments[0] && (scriptArguments[0]).length > 0) {

    repoName = scriptArguments[0]

    // update all files
    if (repoName) {

        const pascalCompoName = pascalize(repoName)

        // 'test-completed'
        // testing code
        
        // rename filenames
        renameFileAndReplaceString('./ZedTest.vue', './' + pascalCompoName + '.vue', 'this-is-a-test', repoName)

        // replace all placeholder strings in files with kebob case repo name
        replaceStringOcccurances('./z-test.js', 'this-is-a-test', repoName)
        replaceStringOcccurances('./z-test.md', 'this-is-a-test', repoName)


        // actual prod code (careful when uncommenting!)

        /*
        const placeholderRepoName = 'vite-vue-ts-compo-pkg-starter'
        const placeholderCompoName = 'ReplaceMe'
        const placeholderCompoNameKebob = 'replace-me'
        
        
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
        replaceStringOcccurances('./package.json', placeholderRepoName, repoName)
        replaceStringOcccurances('./README.md', placeholderRepoName, repoName)
        replaceStringOcccurances('./docs/.vitepress/config.js', placeholderRepoName, repoName)

        
        // STEP 2:
        //     Find & replace all occurances of the string:
        //         ReplaceMe
        //     with the string:
        //         pascalCompoName
        //     in the following file(s):
        //         ./package.json
        //         ./rollup.config.js
        //         ./docs/component.md
        //         ./docs/index.md
        //         ./docs/.vitepress/config.js
        //         ./src/index.ts
        //         ./src/ReplaceMe.vue
        //         ./src/app/Workspace.vue
        //         ./tests/ReplaceMe.test.js
        

        replaceStringOcccurances('./package.json', placeholderCompoName, pascalCompoName)
        replaceStringOcccurances('./rollup.config.js', placeholderCompoName, pascalCompoName)
        replaceStringOcccurances('./docs/component.md', placeholderCompoName, pascalCompoName)
        replaceStringOcccurances('./docs/index.md', placeholderCompoName, pascalCompoName)
        replaceStringOcccurances('./docs/.vitepress/config.js', placeholderCompoName, pascalCompoName)
        replaceStringOcccurances('./src/index.ts', placeholderCompoName, pascalCompoName)
        // replaceStringOcccurances('./src/ReplaceMe.vue', placeholderCompoName, pascalCompoName)
        replaceStringOcccurances('./src/app/Workspace.vue', placeholderCompoName, pascalCompoName)
        // replaceStringOcccurances('./tests/ReplaceMe.test.js', placeholderCompoName, pascalCompoName)

        
        // STEP 3:
        //     Find & replace all occurances of the string:
        //         replace-me
        //     with the string:
        //         repoName
        //     in the following file(s):
        //         ./docs/index.md
        

        replaceStringOcccurances('./docs/index.md', placeholderCompoNameKebob, repoName)

        
        // STEP: 4
        //     Change the file names containing the string:
        //         ReplaceMe
        //     to the string:
        //         pascalCompoName
        //     in the following file(s):
        //         ./src/ReplaceMe.vue > ./src/TestRepoName.vue
        //         ./tests/ReplaceMe.test.js > ./tests/TestRepoName.test.js
        
       
        renameFileAndReplaceString('./src/ReplaceMe.vue', './' + pascalCompoName + '.vue', placeholderCompoName, pascalCompoName)
        renameFileAndReplaceString('./tests/ReplaceMe.test.js', './' + pascalCompoName + '.test.js', placeholderCompoName, pascalCompoName)
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
    console.log('$ node init.js some-project')
    console.log(' ')

    process.exit(1)

}

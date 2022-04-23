// ./scripts/helpers.js

const fs = require('fs-extra')


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


const copyFileAndReplaceString = async function (filePathString, newFilePathString, stringToReplace, replacementString) {
    try {
        fs.copySync(filePathString, newFilePathString)
        replaceStringOcccurances(newFilePathString, stringToReplace, replacementString)
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


function nodeScriptSuccessMsg (string) {
    // output a message to the console when script ends run
    console.log(' ')
    console.log('*\\o/* ' + string + ' *\\o/*')
    console.log(' ')
}




module.exports = {
    replaceStringOcccurances: replaceStringOcccurances,
    renameFile: renameFile,
    renameFileAndReplaceString: renameFileAndReplaceString,
    copyFileAndReplaceString: copyFileAndReplaceString,
    capitalize: capitalize,
    pascalize: pascalize,
    nodeScriptSuccessMsg: nodeScriptSuccessMsg,
}

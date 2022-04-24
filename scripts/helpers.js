// ./scripts/helpers.js

const fs = require('fs-extra')


const replaceStringOcccurances = async function (filePathString, stringsToReplace, replacementStrings) {
    
    fs.readFile(filePathString, 'utf8', function (err,data) {

        if (err) {
            console.log(err)
            return false
        }

        let result = data

        for (let i=0; i < stringsToReplace.length; i++) {

            //const regex = new RegExp(`\\b${stringsToReplace[i]}\\b`, 'g') // using boundries and case sensitive matching
            const regex = new RegExp(stringsToReplace[i], 'g')

            result = result.replace(regex, replacementStrings[i]);

        }

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


const renameFileAndReplaceString = async function (filePathString, renamedFilePathString, stringsToReplace, replacementStrings) {

    fs.rename(filePathString, renamedFilePathString, async function(err) {

        if ( err ) {
            console.log('ERROR: ' + err)
            return false
        }

        const replacement = await replaceStringOcccurances(renamedFilePathString, stringsToReplace, replacementStrings)

        console.log(filePathString + ' was successfully changed to ' + renamedFilePathString + '!')
        return replacement

    })

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
    renameFileAndReplaceString: renameFileAndReplaceString,
    capitalize: capitalize,
    pascalize: pascalize,
    nodeScriptSuccessMsg: nodeScriptSuccessMsg,
}

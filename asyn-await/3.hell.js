const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const basePath = './assets/'

const readFileSync = promisify(fs.readFile)

console.log('Begin')

readFile(path.resolve(basePath, 's1.txt'), { encoding: 'utf-8' })
    .then((setence) => {
        console.log(setence, '\n')
        return readFileSync(path.resolve(basePath, 's2.txt'), { encoding: 'utf-8' })
    })
    .then((setence) => {
        console.log(setence, '\n')
        return readFileSync(path.resolve(basePath, 's3.txt'), { encoding: 'utf-8' })
    })
    .then((setence) => {
        console.log(setence, '\n')
        return readFileSync(path.resolve(basePath, 's4.txt'), { encoding: 'utf-8' })
    })
    .then(console.log)
    .finally(() => console.log('End'))

    // usando asyn-await
    (async function() {
        try {
            const sentence1 = await readFileAsync(path.resolve(basePath, 's1.txt'), { encoding: 'utf-8' })    
            console.log(sentence1, '\n')

            const sentence2 = await readFileAsync(path.resolve(basePath, 's2.txt'), { encoding: 'utf-8' })    
            console.log(sentence2, '\n')

            const sentence3 = await readFileAsync(path.resolve(basePath, 's3.txt'), { encoding: 'utf-8' })    
            console.log(sentence3, '\n')

            const sentence4 = await readFileAsync(path.resolve(basePath, 's4.txt'), { encoding: 'utf-8' })    
            console.log(sentence4)
        } catch(err) {
            console.error(err)
        }      
       
        console.log('End')
    })()


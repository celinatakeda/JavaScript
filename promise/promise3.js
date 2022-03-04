const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const basePath = './assets/'

const readFileSync = promisify(fs.readFile)

console.log('Begin')
/*
readFileSync(path.resolve(basePath, 'amizade.txt'), { encoding: 'utf-8' })
    .then(console.log)
    .catch(console.error)
    .finally(() => console.log('End'))
*/

function read (index) {
    return readFileSync(path.resolve(basePath, `s${index}.txt`), { encoding: 'utf-8' })
}
/*
function start (index, max) {
    if (index > max) return
    read(index).then((data) => {
        console.log(data, '\n')
        start(index + 1, max)
    })
}

start(1, 4)
*/

const promiseArray = []
for(let i = 1; i <= 4; i++) promiseArray[i - 1] = read(i)

Promise.all(promiseArray).then((arr) => console.log(arr.join('\n')))
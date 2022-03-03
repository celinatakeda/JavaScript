const fs = require('fs')
const path = require('path')
//const { start } = require('repl')
const basePath = './assets/'

// função callback
/*
function cb(err, data) {
    if (err) throw err
    console.log(data)
}
*/

function cb(err, data, index, max) {
    if (err) throw err
    console.log(data)
    return start(index + 1, max)
}

console.log('Begin')

/*
//função síncrona

const content = fs.readFileSync(path.resolve(basePath, 'amizade.txt'),)
console.log(content.toString())
*/
/*
const files = fs.readdirSync(path.resolve(basePath))

const sentences = files.filter((file) => /s[1-4].txt/gi.test(file))

for (const sentence of sentences) {
    const text = fs.readFileSync(path.resolve(basePath, sentence)).toString()
    console.log(text, '\n')
}
*/
// função assíncrona
/*
fs.readFile(path.resolve(basePath, 'amizade.txt'), { encoding: 'utf-8'}, cb)
*/
/*
const files = fs.readdirSync(path.resolve(basePath))

const sentences = files.filter((file) => /s[1-4].txt/gi.test(file))

for (const file of sentences) {
    fs.readFile(path.resolve(basePath, file), { encoding: 'utf-8' }, cb)
}
*/
/*
fs.readFile(path.resolve(basePath, 's1.txt'), { encoding: 'utf-8' }, (err, data) => {
    cb(err, data)
    fs.readFile(path.resolve(basePath, 's2.txt'), { encoding: 'utf-8' }, (err, data) => {
        cb(err, data)
        fs.readFile(path.resolve(basePath, 's3.txt'), { encoding: 'utf-8' }, (err, data) => {
            cb(err, data)
            fs.readFile(path.resolve(basePath, 's4.txt'), { encoding: 'utf-8' }, (err, data) => {
                cb(err, data)
            })
        })
    })
})
*/
/*
fs.readdir(path.resolve(basePath), (err, files) => {
    if (err) throw err
    files
        .filter((file) => /s[1-4].txt/gi.test(file)) // Filter the files
        .forEach((sentenceFile) => { // For each sentence, reads and prints (async)
            fs.readFile(path.resolve(basePath, sentenceFile), { encoding: 'utf-8' }, cb) // Will print unordered
        })
})
*/

start(1, 4)



function start(index, max) {
    if(index > max) return
    fs.readFile(
        path.resolve(basePath, `s${index}.txt`),
        { encoding: 'utf-8' },
        (err, data) => cb(err, data, index, max)
    )
}

console.log('End')
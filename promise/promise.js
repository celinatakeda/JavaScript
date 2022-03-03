const { resolve } = require("path");

const promise = new Promise((resolve, reject) => {
    //setTimeout(() => resolve('End'), 2000)
    setTimeout(() => reject('End'), 2000)
})

console.log('Begin')

// Para executar uma promise

promise.then((data) => console.log(data)).catch((err) => console.log('oops', err))
//promise.then(console.log)
/*
promise.then((res) => {}, (rej) => {})

promise.then((res) => {})
promise.catch((rej) => {})
*/


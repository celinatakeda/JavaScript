const { resolve } = require("path");

//const coinFlip = new Promise((resolve, reject) => Math.random() > 0.5 ? resolve('Yay') : reject('Oops'))

const coinFlip = new Promise(
    (resolve, reject) => setTimeout(() => Math.random() > 0.5 ? resolve('Yay') : reject('Oops'), 2000))

//coinFlip
    // Encadeando o catch com o then
    /*
    .then((data) => console.log(data, '1'))
    .then(() => console.log('End1'))
    .catch((err) => console.log('Erro 1'))
    */
    /*
    .then((data) => console.log(data, '1'))
    .catch((err) => console.log('Erro 1'))
    .then(() => { throw new Error( 'Erro 2') })
    .catch((err) => console.log(err.message))
    */

// Promise sem encadeamento
/*
coinFlip.then((data) => console.log('Yay 2').then(() => { throw new Error('xpto') })).catch(console.log)
coinFlip.catch((err) => console.error('Next then will not execute'))
coinFlip.then(() => console.log('End2'))
*/
/*
console.log('Begin')
coinFlip.then((data) => console.log(data))
    .catch((err) => { throw err })
    .then(() => console.log('End1'))

    new Promise((resolve) => setTimeout(() => resolve(), 2000)).then(() => console.log('Yay'))
*/
/*
coinFlip.then((data) => console.log('Yay 1'))
    .catch(() => console.log('First catch'))
    .then(() => console.log('Result'))
    .catch((err) => console.error('Error in first case, next will not execute'))
    .then(() => console.log('End1'))
*/
/*
coinFlip
    .then((data) => console.log('Yay 1'))
    .then(() => console.log('Result'))
    .then(() => console.log('End1'))

coinFlip
    //.catch(() => console.log('First catch'))
    .catch(() => { throw new Error('First catch') })
    .catch((err) => console.error('Error in first case, next will not execute'))
*/

const p = Promise.resolve('resolve').then(coinFlip)

p.then(console.log).catch(() => console.log('error'))


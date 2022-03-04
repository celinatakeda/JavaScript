const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('End'), 5000)
})
/*
// IIFE
(async function() {
    console.log('Olá mundo')
})()
// Or
// async faz a mesma coisa que a promise
(function () {
    return new Promise((resolve, reject) => {
        console.log('Olá mundo')
        resolve()
    })
})()
*/
/*
console.log('Begin')
promise.then((text) => console.log(text))
// Or
promise.then(console.log)
// Or
promise.then(
    (res) => setTimeout(() => console.log(res), 5000),
    (rej) => console.error(rej)
)
*/

// usando async-await
(async function () {
    console.log('Begin')

    const text = await promise
    console.log(text)

    // Or
    console.log(await promise)

    try {
        const res = await promise
        setTimeout(() => console.log(res), 5000)
    }catch (rej) {
        console.error(rej)
    }
})()
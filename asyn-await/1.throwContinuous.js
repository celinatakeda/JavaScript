const coinFlip = new Promise((resolve, reject) => Math.random() > 0.5 ? resolve(true) : reject(false))

console.log('Begin')

coinFlip.then((data) => console.log(data))
    .catch((err) => { throw err })
    .then(() => console.log('End1'))

new Promise((resolve) => setTimeout(() => resolve(), 2000)).then(() => console.log('Yay'))

// colocando o código no assíncrono

(async function() {
    //const result = await coinFlip.catch(err => err) //a promise que deu true como o que deu false será passado para o await e o await joga para o result
    const result = await coinFlip
        .then(result => `O resultado é: ${result}`)
        .then(text => `Alguém disse que ${text}`)

new Promise((resolve) => setTimeout(() => resolve(), 2000)).then(() => console.log('Yay'))
})()
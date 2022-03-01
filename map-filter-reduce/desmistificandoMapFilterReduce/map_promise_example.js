const items = ['a', 'b', 'c', 'd' ]

;(async function() {
    const promiseFunction = async (elment) => {
        return new Promise((resolve, reject) => {
            return resolve(`${elment} - promise`)
        })
    }

    /*
    const itemMapped = promiseFunction('x')
    console.log(itemMapped)
    console.log(await itemMapped)
    */
    /*
    const itemsMapped = items.map(promiseFunction)

    console.log(itemsMapped)
    */

    const itemsMappedPromises = items.map(promiseFunction)

    const itemsMapped = await Promise.all(itemsMappedPromises)

    console.log(itemsMapped)
})()
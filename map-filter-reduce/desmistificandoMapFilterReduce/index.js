const pets = [
    {
        type: 'dog',
        name: 'bolinha',
        age: 15,
        weight: 30
    },
    {
        type: 'cat',
        name: 'mingal',
        age: 6,
        weight: 2
    },
    {
        type: 'dog',
        name: 'rex',
        age: 4,
        weight: 5
    },
    {
        type: 'cat',
        name: 'marrom',
        age: 2,
        weight: 1
    },
    {
        type: 'fish',
        name: 'gulp',
        age: 1,
        weight: 1
    },
    {
        type: 'horse',
        name: 'pé de pano',
        age: 1,
        weight: 1
    }
    ]

    /*
    const totalWeight = pets.reduce((total, pet) => {
        //console.log(`Total: ${total}`)
        //console.log(`Pet: ${pet.name}`)

        return total + pet.weight
    }, 0)

    console.log(totalWeight)
    */

    const totalWeight = pets.reduce((total, pet) => {
        return {
            totalAge: total.totalAge + pet.age,
            totalWeight: total.totalWeight + pet.weight
        }
    }, { totalAge: 0, totalWeight: 0})

    const totalWeight2 = pets.reduce((total, pet) => {
        return total + pet.weight
    }, 0)

    const totalWeight3 = pets.reduce((total, pet) => {
        if(pet.type !== 'dog') return total
        return total + pet.weight
    }, 0)

    const totalWeight4 = pets.reduce((total, pet) => {
        return total + pet.weight
    }, 0)

    /*
    const dogs = pets.filter((pet) => {
        return pet.type === 'dog'
    })

    const totalWeightDogs = dogs.reduce((total, pet) => {
        return total + pet.weight
    }, 0)
    */

    //encadeando tudo

    const totalWeightDogs = pets.filter((pet) => {
        return pet.type === 'dog'
    }).reduce((total, pet) => {
        return total + pet.weight
    }, 0)

    //console.log(totalWeight)
    //console.log(totalWeight2)
    //console.log(totalWeight3)
    //console.log(totalWeight4)
    //console.log(dogs)
    console.log(totalWeightDogs)


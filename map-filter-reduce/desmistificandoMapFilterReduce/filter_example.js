const pets = [
    {
        mame: 'rex',
        type: 'dog',
        age: 10
    },
    {
        name:'miau',
        type: 'cat',
        age: 2
    },
    {
        name: 'gupl',
        type: 'fish',
        age: 1
    }
    ]
    
    const eMenorQueCinco = (numero) => {
        return numero < 5
    }
    
    //desconstruir o objeto
    const newPets = pets.filter(({ age }) => eMenorQueCinco(age))
    
    //const newPets = pets.filter((pet) =>  eMenorQueCinco(pet.age))
    
    //const newPets = pets.filter((pet) => {
     //   return pet.age < 5
    //})
    
    console.log(pets)
    console.log('filter')
    console.log(newPets)
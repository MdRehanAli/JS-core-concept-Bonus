const student = {
    name: 'Sakib Khan',
    id: 121,
    address: 'movie cinema',
    isSingle: true,
    friends: ['Apu', 'Raaz', 'Salman', 'Aamir'],
    movies: [{name: 'no. 1', year: 2015}, {name: 'King Khan', year: 2018}], 
    act: function(){
        console.log('Acting like Sakib Khan');
    },
    car: {
        brand: 'tesla',
        price: 50000000,
        model: 2025,
        manufacturer: {
            name: 'tesla',
            ceo: 'Elon Mask',
            country: 'USA'
        }
    }
}

// console.log(student);
console.log(student.act)


student.act();
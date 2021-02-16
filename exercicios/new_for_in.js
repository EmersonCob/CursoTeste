//for...in - cria um loop em cima de um object pegando as propriedades do object

let person = {
    name: 'Lupita',
    agr: 28,
    weight: 65.8
}

for(let property in person) {
    console.log(property)
}

// ####

for(let property in person) {
    console.log(property)
    console.log(person[property])
}
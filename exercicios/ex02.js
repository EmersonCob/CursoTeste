// Functions

function operacao(number1, number2){
    console.log(number1 * number2)
}

operacao(12, 10)

// Function anonima dentro de uma variável

let sum = function(number1, number2){
    let total = number1 - number2
    return total
}

let n1 = 2021
let n2 = 25

console.log(`Você nasceu em: ${sum(n1, n2)}`)

// Function scope exemplo 1


let subject

function createThink(subject){
   return subject
}
console.log(createThink(subject))


// Function scope exemplo 2


let subject1 = 'create video'

function createThink1(subject1){ // ao inserir o subject como pârametro,  
    subject1 = 'study'         // estou criando um novo subject dentro da função
    return subject1          // deixando o subject de fora do escopo com o valor inicial
}

console.log(createThink1(subject1))
console.log(subject1)


// arrow function

const arrowFunction = () => {} // estrutura de uma arrow function

// Exemplo 1

const sayMyname = () => { 
    console.log("Mayk")
}

sayMyname()

// Exemplo 2

const sayMyname1 = (name) => {
    console.log(name)
}

sayMyname1('Maik')
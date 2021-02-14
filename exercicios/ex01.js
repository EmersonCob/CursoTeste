// Exercicio

// 1. Declare uma variável de nome weight

let weight;

// 2. Que tipo de dado é a variável acima?

console.log(typeof weight)

/* 
    3. Declare uma variável e atribua valores para cada um dos dados:
        
        * name: String
        * age: Number
        * weight: (float)
        * isSubscribed: Boolean

*/

let name = 'Lupita';
let age = 28;
let weight1 = 65.4;
let isSubcribed = true;


/* 4. A variável student abaixo é de que tipo de dados?

   4.1 Atribua a ela as mesmas propriedades e valores do exervício 3.

   4.2 Mostre no console a seguinte mensagem:

   <name> de idade <age> pesa <weight> kg.

   Atenção, substitua <name> <age> e <weight> pelos 
   valores de cada propriedade do objeto

*/

let student = { // tipo object
    name: 'Lupita',
    age: 28,
    weight1: 65.4,
    isSubcribed: true,
}

console.log(`${student.name} tem ${student.age} de idade e pesa ${student.weight} kg.`)

// 5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja somente o Array vazio.

let students = []

/* 6. Reatribua valor para a variável acima, colocando dentro 
      dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
*/

students = [
    student
]

// 7. Coloque no console o valor da posição zero do Array acima.

console.log(students[0])

// 8. Crie um novo student e coloque na posição 1 do Array students.

const john = {
    name: "John",
    age: 37,
    weight: 78,
    insSubcribed: true,
}

// 1º metodo de atribuição de um novo dado dentro do array, não muito segura.

students[1] = john

// ou o 2º metodo de atrofção dentro de um novoa dado no array.

students = [
    student, 
    john,
]

console.log(students)

/* 9. Sem rodar o código responsa qual é o resultado do código 
    abaixo e por que? Após sua resposta, rode o código e veja se você acertou.
*/

console.log(a) // o resultado será "undefined", pois a variável VAR     // ainda não foi declarada antes do console.log e por ser global ela
// sofrerá o efeito hoisting sendo elevada para antes do console.log 
// e só após o console.log ela receberá o seu valor. 
var a = 1 // OBS.: Caso a variável fosse let ou const teriamos como
//retorno um erro de inicialização, pois elas não sofrem o efeito
//hoisting


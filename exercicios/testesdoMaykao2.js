/* Sistema de gastos familiar

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:

    * Receitas: []
    * Despesas: []

Agora, crie ua função que irá calcular o total de receitas e despesas e erá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo.

*/

// Exemplo simples

const receitas = [3500]
const despesas = [1700]



function gastosFamily (receitas, despesas) {
    
    let saldoFinal = receitas - despesas
    
    if(receitas > despesas){
        console.log(`Vocês estão com o saldo positivo em: R$ ${saldoFinal}`)
    } else {
        console.log(`Vocês estão com o saldo negativo em: R$ ${saldoFinal}`)
    }
    return saldoFinal


}

gastosFamily(receitas, despesas)


// exemplo completo

let family = { // object family 
    incomes: [3000, 5000, 480.90, 355.46], // array incomes
    expenses: [3800, 5000, 130.22, 385.89, 158.00, 600.00] // array expenses
}


function sum(array){ 
    let total = 0;

    for(let value of array){
        total += value
    }

    return total
    // Na função SUM usando o for...of ela vai pegar os valores do array e lançar na variavel value e apois esse passo vai somar o final e armazenar em na variavel total e por final a função vai retornar o resultado em total.
}

function calculateBalance(){
    const calculateIncomes = sum(family.incomes) // neste ponto a variavel calculateIncomes vai chamar a função SUM que fará a soma do objeto family propriedade incomes e armazenará esse valor em sua variavel.
    const calculateExpenses = sum(family.expenses) // neste ponto a variavel calculateExpenses vai chamar a função SUM que fará a soma do objeto family propriedade expenses e armazenará esse valor em sua variavel.


    const total = calculateIncomes - calculateExpenses // Essa variavel realiza o calculo das funções e o armazena

    const itsOk = total >= 0 // realiza a comparação do valor

    let balanceText = "negativo" // mensagem chamada quando valor é negativo

    if (itsOk) { // comparação para emitir a mensagem caso o valor seja positivo
        balanceText = "positivo" 
    }

    console.log(`Seu saldo é ${balanceText} em: R$ ${total.toFixed(2)} `) // impressão do valor com a menssagem já interpolada com o resultado final da função quando for chamada.
}


calculateBalance() // chamando a função 
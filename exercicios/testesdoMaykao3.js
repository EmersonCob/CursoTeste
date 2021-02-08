/* Celsius em Fahrenheit

    Criar uma função que receba uma string em celsius ou Fahrenheit e
    faça a faça a transformação de uma unidade para a outra.

    C=(F - 32) * 5/9

    F = C * 9/5 + 32


*/

// function transformDegree(50F)

function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C') 
    const fehrenheitExists = degree.toUpperCase().includes('F')

    // 1º Verificação de erro
    if(!celsiusExists && !fehrenheitExists) { 
        throw new Error('Grau não identificado!')
    }

    // 2º fluxo ideal,  F => C
    let updatedDegree = Number(degree.toUpperCase().replace("F",""));
    // Arrow function
    let formula = (fehrenheit) => (fehrenheit - 32) * 5 / 9
    // Atribuição de identificador
    let degreeSign = 'C'

    // 3º fluxo alternativo, C => F
    if(celsiusExists) {
        updatedDegree = Number(degree.toUpperCase().replace("C",""));
        formula = (celsius) => celsius * 9 / 5 + 32
        degreeSign = 'F'

    }

    return formula(updatedDegree).toFixed() + degreeSign
}

try { 
    console.log(transformDegree('150F'))
    console.log(transformDegree('50C'))
    transformDegree('50Z')
} catch (error) {
    console.log(error.message)
}


/* 
    O método includes() determina se um array contém um determinado 
    elemento, retornando true ou false apropriadamente. 
    O método toUpperCase() retorna o valor da string original convertido 
    em letras maiúsculas.

    1º - validando a entrada de dados caso contenham erro a aplicação 
    para e emiti a menssagem de erro. e será tratado em try / catch

    2º fluxo ideal, convertendo de graus celsius para fehrenheit F => C

    3º fluxo alternativo, convertendo de graus fehrenheit para celsius C => F

    Number vai converter os dados da String em número.
    O método replace() retorna uma nova string com algumas ou todas as 
    correspondências de um padrão substituídas por um determinado 
    caractere (ou caracteres).

*/
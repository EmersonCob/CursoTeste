// calculadora simples usando o switch com entrada de dados do usuario.

function calculate (number1, operate, number2) {
    let result = 0
    number1 = window.prompt("Informe um número: ");
    operate = window.prompt("Informe o operador: ");
    number2 = window.prompt("Informe outro número: ");


    switch (operate) {
        case '+':
            result = Number(number1) + Number(number2)
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
            break
        default:
             window.alert('Não implementado')
             break
        return 0;           
    }

    window.alert(`O resultado é: ${result}`)
}

calculate()

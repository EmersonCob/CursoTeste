let num = document.querySelector('input#fnum') // recebe o valor inserido no imput pelo usuario
let lista = document.querySelector('select#flista') // exibe o valor inserido no imput apos a função chamar a adicionar()
let res = document.querySelector('div#res') // exibe os valores da função finalizar().
let valores = [] // armazena no vetor valores, os números inseridos em num.

function isNumero(n){ // Essa função se encarrega de controlar a entreda de números iguais e maiores que 1 e menores ou iguais a 100.
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l){ // Essa função verifica se um determinado número está na lista e retorna verdadeiro ou falso conforme o resultado.
    if(l.indexOf(Number(n)) != -1) { // Se na lista de indexOf o Number de (n) for diferente de -1, o valor está na lista caso contrario não.
        return true                    // Quando o retorno for -1 indica que o valor de (n) não foi encontrado da lista.
    } else {
        return false
    }
}   

function adicionar(){ // Função para receber e tratar os valores
    if(isNumero(num.value) && !inLista(num.value, valores)){ // Só vai adicionar se os dois resultados forem true.
        valores.push(Number(num.value)) // Armazena o elemento no vetor usando o metodo .push
        let item = document.createElement('option') // cria um elemento e adiciona os elementos em uma tag no caso o select. 
        item.text = `Valor ${num.value} adicionado.` // tranforma o item em uma String com posibilidade de interpolação e adiciona na lista.
        lista.appendChild(item) 
        res.innerHTML = ''
    } else {
        window.alert('Valor invalido ou já encontrado na lista.')
    }
    num.value = '' // recebe o valor vazio para manter o imput limpo para o usuario
    num.focus() // da foco no imput com o cursor do mouse
}

function finalizar() { // função para o botão finalizar com todos os dados finais.
    if(valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}
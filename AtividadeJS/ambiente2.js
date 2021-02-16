// Trabalhando com funções

// Verificando se o número é par ou impar

function parimpar(n){
    if(n%2==0){
        return "Par"
    } else {
        return "Impar"
    }
}

let res = parimpar(6)

console.log(res)

// Função com parametros

function soma(n1 = 0, n2 = 0){ // O zero inicial é para evitar que ocorra algum erro
    return n1 + n2             // Caso não seja informado dois números como parametro
}

console.log(soma(7, 2)) // chmada da função com os parametros a serem executados na função SOMA

// Function fatorial

function fatorial(n) { 
    let fat = 1
    for(let c= n; c > 1; c--){
        fat *= c
    }
    return fat
}

console.log(fatorial(5)) 
// Neste exemplo o calculo será realizado da seguinte forma:
// 5! = 5 x 4 x 3 x 2 x 1 = 120
//          20 x 3 x 2 x 1 = 120
//                60 x 2 x 1 = 120
//                    120 x 1 = 120 


// Recursividade 

function fatorial1(n){
    if (n==1){
        return 1
    } else {
        return n * fatorial1(n-1)
    }
}

console.log(fatorial1(5)) 

/* Explicando a função:

5! = 5 x 4 x 3 x 2 x 1
5! = 5 x 4!

ou seja o fatorial de um número pode ser calculado baseado no 
fatorial de outro, usando o mesmo número -1 exemplo:

n! = n! x (n-1)! desde modo é possivel conseguir o fatorial 
                 do número usando o proprio valor subtraindo por 1

1! = 1 o fatorial de 1 será sempre 1


*/
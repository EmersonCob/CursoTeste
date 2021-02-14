// callback function

function sayMyname(callBack){ // o pârametro entre parenteses servirá para chamar a função dentro da função
    console.log("iniciou a função")

    callBack() // aqui está sendo chamado a arrow function que foi declarada fora da função sayMyname.

    console.log("encerrou a função")
}

sayMyname(
    () => { // essa arrow function será invocada dentro da função sayMyname atraves do parametro callBack
        console.log("callback está sendo chamada e está rodando dentro da função!")
    }
)
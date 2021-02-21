
var v100;
var divisao;


function sequenciamento (v100, divisao){
    let resultado = v100 + divisao 
    if(v100 == 0 && divisao == 0) {
        console.log("Parábens, sequenciamento realizado!")
    } else {
        console.log("Tente novamente no próximo mês!")
    }
    return resultado
}
sequenciamento(2, 1)
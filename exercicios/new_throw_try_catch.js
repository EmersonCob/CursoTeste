// throw

function sayMyname(name = ''){
    if(name === '') {
        // throw new Error("Nome é obrigatório") //1º o operador new vai criar um novo objeto do tipo erro
        throw "Nome é obrigatório" //2º pode ser nas duas formas. // Caso tenha algum erro será disparada a mensagem.
    }
    console.log("depois do erro") // Caso não haja erro a aplicação vai continuar exibindo essa mensagem.
}                                  // Caso seja identificado um erro a aplicação para no throw.


//try...catch
try { // o TRY vai tentar rodar a aplicação 
    sayMyname()
} catch(e) { // o catch vai pegar o erro enviando pelo throw atraves do (e)

}
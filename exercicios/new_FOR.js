// Estrutura de repetição
// For

for(let i = 0; i <= 10; i++) { // (inicialização, condição e incremento)
    console.log(i)
}

for(let i = 10; i >= 0; i--){
    console.log(i)
}

for(let i = 10; i >= 0; i--){ 
    if(i === 5) {
        break    // break para a execução do loop
    }
    console.log(i)
}

for(let i = 0; i <= 10; i++){ 
    if(i === 5){
        continue  // continue pula a execução do momento
    }
    console.log(i)
}

// testando loops

for(let num = 0; num <= 11; num++) {
   if(num === 3) {
       continue
   }
   console.log(num)
}



for(let num = 11; num >= 0; num--){
    if(num===7) {
        continue
    }
    console.log(num)
}

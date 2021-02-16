let valores = [8,1,7] // declarando um ARRAY com três elementos

valores[3]=6 // atribuindo um novo elemento ao ARRAY na posição 3

valores.push(5) // atribuindo um novo elemento na posição final do ARRAY
                // será criada um nova posição no final do ARRAY para esse novo elemento 

// verificando a quantidade de elementos dentro do ARRAY, utilizando o .length

console.log(valores.length)

// colocando em ordem crescente os elementos do ARRAY

valores.sort()

// Usando o laço FOR

for(let pos = 0; pos < valores.length; pos++){
   console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

// Usando o laço For..in

for(let contfor in valores) {
    console.log(`A posição ${contfor} tem o valor ${valores[contfor]}`)
}

console.log(`o Vetor possue ${valores.length} elementos!`)

// verificar se dentro do ARRAY existe um elemento especifico

let ver = valores.indexOf(6) // OBS.: Caso o valor informado no indexOf() 
                             // não seja localizado dentro do ARRAY o retorno será -1

console.log(`O valor 6 está na posição ${ver}`)

// Incrmentando com IF e ELSE

if (ver == 1) {
    console.log("O valor não foi encontrado")
} else {
    console.log(`O valor está na posição ${ver}`)
}
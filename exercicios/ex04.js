/* 
  
    Function() constructor 

    * expressão new
    * criar um novo objeto
    * this keyword

*/

 function Person(name) { // o name entre parenteses entra como pârametro da função
     this.name = name // o this aqui dentro da função sempre vai referenciar ao mayk que está fora
 }

 const mayk = new Person('Mayk') // ao criar uma nova persona será repassado como argumento o nome MAYK

 console.log(mayk) // esse mayk agora tem uma propriedade chamada name. 

// exemplo 2

 function Person1(name1) { // o name1 entre parenteses entra como pârametro da função
     this.name1 = name1 // o this aqui dentro da função sempre vai referenciar ao maykBrito que está fora
     this.walk = function() {
         return this.name1 + " está andando."
     }
 }

 const maykBrito = new Person1('Mayk Brito') // ao criar uma nova persona será repassado como argumento o nome Mayk
 const joaoBrito = new Person1('João Brito') // ao criar uma nova persona será repassado como argumento o nome João

 console.log(maykBrito.walk()) 
 console.log(joaoBrito.walk()) 

 // exemplo 3

 let name2 = new String("Mayk")

 console.log(name2)
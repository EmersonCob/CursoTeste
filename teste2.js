let alcohol = 0;
let gasoline = 0;
let diesel = 0;
let teste = true

while (teste) {
  const code = Number(1000);

  switch (code) {
    case 1:
      alcohol +=1;
      break;
    case 2:
      gasoline +=1;
      break;
    case 3:
      diesel +=1;
      break;
    case 4:
        teste = false
      break;
  }
}

console.log("MUITO OBRIGADO");
console.log("Alcool: " + alcohol);
console.log("Gasolina: " + gasoline);
console.log("Diesel: " + diesel);


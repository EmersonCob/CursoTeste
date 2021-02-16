

let temp = 36.9

if(temp >= 37 && temp <= 37.5) {
    console.log("Você está com febre moderada!")
} else if(temp >= 37.5 && temp <= 38) {
    console.log("Você está com febre um pouco elevada!")
} else if (temp > 39) {
    console.log("Você está com febre alta, procure atendimento medico!")
} else {
    console.log("Você está saudavel!")
}
/* Trasnformar notas escolares

criar um algoritmo que transforme as notas do sistema númerico para sistema de notas em caracteres tipo A B C

* de 90 para cima - A
* entre 80 - 89 - B
* entre 70 - 79 - C
* entre 60 - 69 - D
* menor que 60 - E

*/


function getGrade (nota) {


    let gradeA = nota >= 90 && nota <= 100
    let gradeB = nota >= 80 && nota <= 89
    let gradeC = nota >= 70 && nota <= 79
    let gradeD = nota >= 60 && nota <= 69
    let gradeF = nota < 60 && nota >= 0

    let gradeFinal;
   

    if (gradeA) {
        gradeFinal = "Nota A"
    } else if (gradeB) {
        gradeFinal = "Nota B"
    } else if (gradeC) {
        gradeFinal = "Nota C"
    } else if (gradeD) {
        gradeFinal = "Nota D"
    } else if (gradeF) {
        gradeFinal = "Nota F"
    } else {
        gradeFinal = "Nota inválida!"
    }
    return gradeFinal
}


console.log(getGrade(90))
console.log(getGrade(80))
console.log(getGrade(70))
console.log(getGrade(60))
console.log(getGrade(50))
console.log(getGrade(101))
console.log(getGrade(-1))
function menorNumero(num1, num2) {
    let numeroMenor = num1

    if (num2 < numeroMenor) {
        numeroMenor = num2
    }
    if (num1 < numeroMenor) {
        numeroMenor = num1
    }
    return numeroMenor
}
let menor = menorNumero(2, 1);
console.log(menor);
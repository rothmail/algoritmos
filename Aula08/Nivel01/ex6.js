function maiorNumero(num1, num2, num3, num4, num5) {
    let numeroMaior = num1;

    if (num2 > numeroMaior) {
        numeroMaior = num2;
    }
    if (num3 > numeroMaior) {
        numeroMaior = num3;
    }
    if (num4 > numeroMaior) {
        numeroMaior = num4;
    }
    if (num5 > numeroMaior) {
        numeroMaior = num5;
    }

    return numeroMaior;
}
let numeroMaior = maiorNumero(1, 2, 3, 4, 0);
console.log("O maior número é:", numeroMaior);
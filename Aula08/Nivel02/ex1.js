function menorIgualMaior(num1) {
    if (num1 > 0) {
        return "O número é positivo";
    } else if (num1 < 0) {
        return "O número é negativo";
    } else {
        return "O número é zero";
    }
}
console.log(menorIgualMaior(0));
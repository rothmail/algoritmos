const readlineSync = require('readline-sync');

const num1 = readlineSync.question('Insira um numero: ');
const num2 = readlineSync.question('Insira um numero: ');
const num3 = readlineSync.question('Insira um numero: ');
const num4 = readlineSync.question('Insira um numero: ');
const num5 = readlineSync.question('Insira um numero: ');

let soma = 0
while(soma >= 0) {
    soma = (Number(num1) + Number(num2) + Number(num3) + Number(num4) + Number(num5));
    if (Number(num1) != 0 && Number(num2) != 0 && Number(num3) != 0 && Number(num4) != 0 && Number(num5) != 0) {
        console.log(soma)
    }
}
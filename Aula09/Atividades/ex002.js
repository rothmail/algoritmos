const readlineSync = require('readline-sync');

const num1 = readlineSync.question('Digite o primeiro numero \n');
const num2 = readlineSync.question('Digite o segundo numero? \n');

if (Number(num1) % 2 == 0 || Number(num2) % 2 == 0) {
    console.log(Number(num1) * Number(num2))
} else  {
    console.log('Impossível calcular')
}
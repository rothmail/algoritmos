const readlineSync = require('readline-sync');
let soma = 0;
let pergunta;

while (pergunta !== 0) {
    pergunta = Number(readlineSync.question('Numero: \n'));
    soma += pergunta;
}

console.log(soma);
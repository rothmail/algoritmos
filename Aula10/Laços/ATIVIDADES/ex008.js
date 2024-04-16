const readlineSync = require('readline-sync');

pergunta = Number(readlineSync.question('Numero: '));

let maior = 0
let menor = 9999999999999999999999999999
for (let media = 0; media < 10 ; media++) {
pergunta = Number(readlineSync.question('Numero: '));
    if (pergunta > maior){
        maior = pergunta
    }
    if(pergunta < menor){
        menor =pergunta
    }
}
console.log(maior,menor)
const readlineSync = require('readline-sync');

let soma = 0;

pergunta = Number(readlineSync.question('Numero: \n'));
pergunta2 = Number(readlineSync.question('Numero: \n'));
pergunta3 = Number(readlineSync.question('Numero: \n'));
pergunta4 = Number(readlineSync.question('Numero: \n'));
pergunta5 = Number(readlineSync.question('Numero: \n'));

for (let media; media >= 0; media++) {
    soma += pergunta + pergunta2 + pergunta3 + pergunta4 + pergunta5;
    media = soma / 5;
    console.log(media);
}
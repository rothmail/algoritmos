const readlineSync = require('readline-sync');
pergunta = Number(readlineSync.question('Numero: '));
pergunta2 = Number(readlineSync.question('Numero: '));
pergunta3 = Number(readlineSync.question('Numero: '));
pergunta4 = Number(readlineSync.question('Numero: '));
pergunta5 = Number(readlineSync.question('Numero: '));
let soma = 0
for (let media = 0; media <= 10 ; media++) {
    soma = pergunta + pergunta2 + pergunta3 + pergunta4 + pergunta5 
    media = soma / 5
     console.log(media);
}
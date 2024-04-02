const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Escreva um frase curta: ', (frase) => {
    const novaFrase = frase.toUpperCase();;
    const novaFrase2 = novaFrase.replaceAll('o', 'i');
    const novaFrase3 = novaFrase2.length;

    console.log(novaFrase3)

    rl.close()
})
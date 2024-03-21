const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question('Digite um número', (num1) => {
    if (num1 > 0){
        console.log('Seu número é positivo');   
    } else if (num1 < 0) {
        console.log('Seu número é negativo');   
    } else {
        console.log('Seu número é igual a 0');
    rl.close();
    }
})
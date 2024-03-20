const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Digite um número: ', (num1) => {
    rl.question('Digite mais um numero: ', (num2) => {
        const total = Number(num1) + Number(num2);

        console.log(`A soma de ${num1} e ${num2} é ${total}`)
        rl.close();
    });
})
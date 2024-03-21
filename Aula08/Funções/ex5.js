const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Digite um número: ', (num1) => {
        rl.question('Digite mais um numero: ', (num2) => {
            function nums(num1, num2) {
            if (num1 % 2 === 0 && num2 % 2 === 0) {
                console.log('Seus números são pares')
            } else if (num1 % 2 === 0 && num2 % 2 != 0) {
                console.log(`${num1} é par e ${num2} é ímpar`);
            } else if (num2 % 2 === 0 && num1 % 2 != 0) {
               console.log(`${num2} é par e ${num1} é ímpar`);
            } else {
                console.log('Seus números são ímpares')
            }
        }
        if (num1 % 2 === 0 && num2 % 2 === 0) {
            console.log('Seus números são pares')
        } else if (num1 % 2 === 0 && num2 % 2 != 0) {
            console.log(`${num1} é par e ${num2} é ímpar`);
        } else if (num2 % 2 === 0 && num1 % 2 != 0) {
           console.log(`${num2} é par e ${num1} é ímpar`);
        } else {
            console.log('Seus números são ímpares')
        }
        nums(1,2)
        nums(2,3)
        nums(3,4)
        nums(4,5)
            rl.close();
        });
    });
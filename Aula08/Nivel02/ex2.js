const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Qual é a seu nome? ', (nome) => {
    rl.question('Qual é a sua idade? ', (idade) => {
        rl.question('Qual é a sua idade? ', (senha) => {

            rl.close()
          });
        rl.close()
      });
});
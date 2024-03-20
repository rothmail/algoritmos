const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


rl.question('Digite sua senha: ', (senha) => {
        if (senha === '1234') {
            console.log('!Login bem-sucedido!')
        } else {
            console.log('*Senha incorreta*')
        }
        rl.close();
})
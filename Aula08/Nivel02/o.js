const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let usuarios = [];

function cadastrarUsuario(nome, idade) {
    if (idade >= 18) {
        usuarios[usuarios.length] = { nome: nome, idade: idade };
        return "Usuário cadastrado com sucesso!";
    } else {
        return "Usuário deve ser maior de idade para se cadastrar.";
    }
}

function consultarUsuario(nome) {
    let encontrado = false;
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].nome === nome) {
            encontrado = true;
            return `Nome: ${usuarios[i].nome}, Idade: ${usuarios[i].idade}`;
        }
    }
    if (!encontrado) {
        return "Usuário não encontrado.";
    }
}

function removerUsuario(nome) {
    let encontrado = false;
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].nome === nome) {
            encontrado = true;

            for (let j = i; j < usuarios.length - 1; j++) {
                usuarios[j] = usuarios[j + 1];
            }
            usuarios.pop();
            return "Usuário removido com sucesso!";
        }
    }
    if (!encontrado) {
        return "Usuário não encontrado.";
    }
}

rl.question("Digite 'cadastrar', 'consultar' ou 'remover': ", function(operacao) {
    if (operacao === 'cadastrar') {
        rl.question("Digite o nome do usuário: ", function(nome) {
            rl.question("Digite a idade do usuário: ", function(idade) {
                console.log(cadastrarUsuario(nome, idade));
                rl.close();
            });
        });
    } else if (operacao === 'consultar') {
        rl.question("Digite o nome do usuário: ", function(nome) {
            console.log(consultarUsuario(nome));
            rl.close();
        });
    } else if (operacao === 'remover') {
        rl.question("Digite o nome do usuário: ", function(nome) {
            console.log(removerUsuario(nome));
            rl.close();
        });
    } else {
        console.log("Operação inválida.");
        rl.close();
    }
});
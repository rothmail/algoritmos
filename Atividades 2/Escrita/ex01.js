/*
const pessoa = {
    nome: 'Amanda',
    apelidos: ['Rothmann', 'Amenda', 'Amandioca']
}

function pessoaFrase(pessoa) {
    const frase = {
        ...pessoa
    }
    console.log(`Eu sou ${frase.nome}, mas pode me chamar de ${frase.apelidos[0]},${frase.apelidos[1]} ou ${frase.apelidos[2]}.`)
}
pessoaFrase(pessoa);
*/
const pessoa = {
    nome: 'Amanda',
    apelidos: ['Rothmann', 'Amenda', 'Amandioca']
}

function pessoaFrase(pessoa) {
    const fraseNova = {
        ...pessoa,
        apelidos: ['Rothmail', 'Rotimas', 'Mandica']
    }
    console.log(`Eu sou ${fraseNova.nome}, mas pode me chamar de ${fraseNova.apelidos[0]}, ${fraseNova.apelidos[1]} ou ${fraseNova.apelidos[2]}.`)
}
pessoaFrase(pessoa)
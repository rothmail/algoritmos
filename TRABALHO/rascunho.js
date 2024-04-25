const readlineSync = require('readline-sync');

let personagemPessoal = []

function adicionarPersonagem () {
    let nomePersonagem = readlineSync.question('Digite o nome do novo personagem: ');
    let chakraDoPersonagem = Number(readlineSync.question('Digite o chakra do personagem: '));
    let habilidadeDoPersonagem = readlineSync.question('Digite a habilidade do personagem: ');

    personagemPessoal.push({nome: nomePersonagem, chakra: chakraDoPersonagem, habilidades: [habilidadeDoPersonagem], missao: 0 });
}
adicionarPersonagem()
console.log()

function aumentoChakra(ninja){
    let aumentarChakra = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
    ninja.chakra += aumentarChakra;
    console.log(`${ninja.nome} treinou seu chakra e aumentou seu nível em: ${aumentarChakra}`)
}

aumentoChakra(personagemPessoal[0]);

function adicionarHabilidades(ninja){
    let novaHabilidade = readlineSync.question('Adicione ao arsenal: ');
    ninja.habilidades.push(novaHabilidade);
    console.log(`Foi adicionado ao ${ninja.nome} a habilidade: ${novaHabilidade}`)
}

adicionarHabilidades(personagemPessoal[0]);

function missoes(ninja){
    console.log('Missão concluída com sucesso!! Será acrescentado 1 ponto!!')
    ninja.missao += 1;
    console.log('Como recompensa, receba um aumento de chakra.')
    let aumentarChakra = Math.floor(Math.random() * 11) + 5;
    ninja.chakra += aumentarChakra;
    console.log(`${ninja.nome} aumentou ${aumentarChakra} pontos de chakra`)
}

missoes(personagemPessoal[0]);
let personagemPessoal = []
function exibirMenu () {
    console.log('Menu de opções');
    console.log('1. Adicionar Personagem');
    console.log('2. Treinar o Chakra');
    console.log('3. Adicionar Habilidade');
    console.log('4. Concluir Missoes');
    console.log('5. Progresso');
    console.log('6. Qual é o mais forte');
    console.log('7. Encerrar');
    console.log('IMPORTANTE! Seu personagem deve ser chamado pelo seu índice!')
}

const readlineSync = require('readline-sync');
function main () {
    let encerrar = false;
    while (!encerrar) {
        exibirMenu()       
         let opcao = readlineSync.question('Digite a opção desejada: ');
        encerrar = escolha(opcao)
    }
}

main();
function escolha (opcao) {
    switch (opcao) {
        case '1':
            adicionarPersonagem(personagemPessoal)
            break;
        case '2':
            treinarChakra(personagemPessoal)
            break;
        case '3':
            adicionarHabilidades(personagemPessoal)
            break
        case '4':
            missoes(personagemPessoal)
            break;
        case '5':
            progresso(personagemPessoal)
            break;
        case '6':
            maisForte()
            break;
        case '7':
            console.log('Encerrando programa...')
            return true;
        default:
            console.log('Opção inválida')
    }
    return false;
}

function adicionarPersonagem () {
    let nomePersonagem = readlineSync.question('Digite o nome do novo personagem: ');
    let chakraDoPersonagem = Number(readlineSync.question('Digite o chakra do personagem: '));
    let habilidadeDoPersonagem = readlineSync.question('Digite a habilidade do personagem: ');
    personagemPessoal.push({nome: nomePersonagem, chakra: chakraDoPersonagem, habilidades: [habilidadeDoPersonagem], missao: 0 });
}

function treinarChakra(ninja){
    let descobrir = Number(readlineSync.question('qual personagem você quer acessar para treinar o chakra: '));
    let aumentarChakra = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
    ninja[descobrir].chakra += aumentarChakra;
    console.log(${ninja[descobrir].nome} treinou seu chakra e aumentou seu nível em: ${ninja[descobrir].chakra})
    console.log(${ninja[descobrir].nome} tem ao total de Chakra: ${ninja[descobrir].chakra})
}

function adicionarHabilidades(ninja){
    let descobrir = Number(readlineSync.question('Qual personagem você quer adicionar uma habilidade: '));
    let novaHabilidade = readlineSync.question('Adicione uma nova habilidade ao personagem: ');
    ninja[descobrir].habilidades.push(novaHabilidade);
    console.log(Foi adicionado ao ${ninja[descobrir].nome} a habilidade: ${novaHabilidade})
    console.log(personagemPessoal[descobrir])
}

function missoes(ninja){
    let descobrir = Number(readlineSync.question('Qual personagem você quer Concluir uma missão: '));
    console.log(` ${ninja[descobrir].nome} concluiu uma Missão com sucesso!! Será acrescentado 1 ponto nas missoes!`)
    let aumentarMissoes = ninja[descobrir].missao += 1;
    console.log(Quantidade final de Missões: ${aumentarMissoes})
    console.log('Como recompensa de concluir a missão, você recebera uma recompensa de chakras!!')
    let aumentarChakra = Math.floor(Math.random() * 11) + 5;
    ninja[descobrir].chakra += aumentarChakra;
    console.log(`${ninja[descobrir].nome} aumentou: ${aumentarChakra}
    pontos de chakra`)
    console.log(Atualização dos Chakra: ${ninja[descobrir].chakra})
}

function progresso(ninja){
    console.log('o progresso de todos os ninja: ');    
    for (let i = 0; i < personagemPessoal.length; i++){
        console.log(Nome: ${ninja[i].nome}, Chakra: ${ninja[i].chakra}, Habilidades: ${ninja[i].habilidades}, Missões: ${ninja[i].missao}.)
    }
}

function maisForte() {
    let maior = 0 ;
    for (let i = 0; i < personagemPessoal.length; i++){
    if (personagemPessoal[i].chakra + personagemPessoal[i].habilidades.length > personagemPessoal[maior].chakra + personagemPessoal[maior].habilidades.length){
        maior = i
    }
}

console.log(O mais forte é: ${personagemPessoal[maior].nome})
}

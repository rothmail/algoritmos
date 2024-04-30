let doador = []
function exibirMenu () {
    console.log('SISTEMA DE CADASTRO DE DOADORES DE SANGUE');
    console.log('1. Cadastrar doador');
    console.log('2. Lista de doadores');
    console.log('3. Buscar doador por tipo sanguíneo');
    console.log('4. Buscar doador por data da última doação');
    console.log('5. Encerrar');
    console.log('Escolha uma opção: ')
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
            cadastroDoador(doador)
            break;
        case '2':
            listaDoadores(doador)
            break;
        case '3':
            buscarTipoSangue(doador)
            break
        case '4':
            buscarUltimaDoacao(doador)
            break;
        case '5':
            console.log('Encerrando programa...')
            return true;
        default:
            console.log('Opção inválida')
    }
    return false;
}

function cadastroDoador () {
    let nomeDoador = readlineSync.question('Qual seu nome? ');
    let idadeDoador = Number(readlineSync.question('Qual sua idade? '));
    let pesoDoador = Number(readlineSync.question('Qual seu peso? '));
    let sangueDoador = (readlineSync.question('Qual seu tipo sanguineo? (A+/B-/etc) '));
    let ultimaDoacao = (readlineSync.question('Quando foi sua ultima doacao? (dd/mm/aaaa) '));
    doador.push({nome: nomeDoador, idade: idadeDoador, peso: pesoDoador, tipoSangue: sangueDoador, doacao: ultimaDoacao});
    console.log(`Doador cadastrado: ${nomeDoador}`)
}

function listaDoadores(doador){
    console.log('LISTA DE DOADORES:')  
    console.log('=================================================================================================================')
    for (let i = 0; i < doador.length; i++){
        console.log(`Nome: ${doador[i].nome}    ||    Idade: ${doador[i].idade}    ||    Peso: ${doador[i].peso}    ||    Tipo sanguíneo: ${doador[i].tipoSangue}    ||   Última doação: ${doador[i].doacao}.`)
        console.log('=================================================================================================================')
    }
}
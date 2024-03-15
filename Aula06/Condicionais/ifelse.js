// if (condicional) {
//     console.log('Olá Mundo');
// }

// let idade = 15;
// if (idade >= 18) {
//     console.log('Maior de Idade');
// }
/*
const num1 = 1;
const num2 = 12;

if (num1 === num2) {
    console.log('Iguais');
} else {
    console.log('Diferentes')
}

const meuTime = 'Grêmio';
const timePerdedor = 'Inter';

if (meuTime === 'Grêmio') {
    console.log('Gremista');
} else {
    console.log('Perdedor');
}


const poderCidade = 800;
const poderJapones = 999;

if (poderCidade > poderJapones ) {
    console.log('Cidade tem mais poder!');
} else if (poderCidade < poderJapones) {
    console.log('Japonês tem mais poder');
} else {
    console.log('O poder é igual');
}
*/

let paisDeOrigem = 'Brasil'
if (paisDeOrigem === 'Brasil') {
    console.log('Brasileiro');
} else if (paisDeOrigem === 'EUA') {
    console.log('Norte Americano');
} else if (paisDeOrigem === 'Inglaterra') {
    console.log('Inglês')
} else if (paisDeOrigem === França) {
    console.log('Francês')
} else {
    console.log('Nacionalidade não encontrada')
}

let paisDeOrigem2 = 'Brasil'
switch (paisDeOrigem) {
    case 'Brasil':
    console.log('Brasileiro')
    break
    case 'EUA':
    console.log('Norte Americano')
    break
    case 'Ingleterra':
    console.log('Inglês')
    break
    case 'França':
    console.log('Francês')
    break
}
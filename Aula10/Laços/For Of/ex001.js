/*
const array = ['abacaxi', 'morango', 'uva'];

function frase(palavras) {
    let mensagem;
    mensagem
    for (let palavra of palavras) {
        console.log(palavra);
    }
}
*/

const array = ['oii', 'td', 'bom', '?'];

function frase(array) {
    let mensagem = ' ';
    for (let palavra of array) {
        mensagem += palavra + ' ';
    }
    console.log(mensagem);
}
frase(array);
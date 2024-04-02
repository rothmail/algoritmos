/*
const listaDeCompras = ['batata', 'alface', 'queijo']
const listaDeNumerosDaMega = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(listaDeCompras[1], listaDeNumerosDaMega[4])
*/
/*
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Escreva um número de 0 à 4: ', (cachorros) => {
    const lista = ['Vira-Lata', 'Pinscher', 'Golden', 'Husky', 'hottweiler'];
    const numeroEscolhido = lista[cachorros]
    console.log(numeroEscolhido);

    rl.close()
})
*/
/*
const pokemon = ['bulbassauro', 'squirtle', 'charmander'];
console.log(pokemon.length);

const seriesBoas = ['Breaking Bad', 'Blooklyn Nine-Nine'];
seriesBoas.includes('Breaking Bad');
seriesBoas.includes('Game of Thrones');

console.log(seriesBoas);
*/
/*
const meuPeixe = ['palhaço', 'mandarim', 'esturjão']
meuPeixe.pop()
console.log(meuPeixe)

const letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G' ,'H' ,'I', 'J'];
letras.splice(2, 1)

console.log(letras)
*/

let num = [1,2,3,4,5,6]
console.log(num.length)
num.push(7)
num.splice(3,2)
console.log(num)
console.log(num.length)
/*
INTERPRETAÇÃO

a - Undefined;
b - Null;
c - 11;
d - 3;
e - [3, 19,  5,  6,  7, 8,  9, 10, 11, 12, 13];
f - 9;

2 - Subi num ônibus em Marrocos
    SUBI NUM ÔNIBUS EM MIRROCOS 27
*/
/*
ESCRITA
*/
/*
const readlineSync = require('readline-sync');

const nomeDoUsuario = readlineSync.question('Qual o seu nome? ');
const emailDoUsuario = readlineSync.question('Qual o seu email ');

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`);
*/
/*
let comidas = ['batata', ' massa', ' chocolate', ' uva', ' morango'];

console.log(comidas);
console.log(`Essas são minhas comidas favoritas ${comidas.join("\n")}`)

const readlineSync = require('readline-sync');

const comidaFavorita = readlineSync.question('Qual a sua comida favorita? ')
comidas  = ['batata', comidaFavorita, ' chocolate', ' uva', ' morango'];

console.log(comidas)
*/
let listaDeTarefas = [];
const readlineSync = require('readline-sync');
const tarefas = readlineSync.question('Escreva 3 tarefas para realizar: ')

console.log(tarefas, listaDeTarefas);
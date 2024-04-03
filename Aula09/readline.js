const readlineSync = require('readline-sync');

const nome = readlineSync.question('Qual o seu nome? ');
const idade = readlineSync.question('Qual a sua idade? ');
const cidade = readlineSync.question('Qual a sua cidade? ');

console.log('Nome: ' + nome);
console.log('Idade: ' + idade);
console.log('Cidade: ' + cidade);
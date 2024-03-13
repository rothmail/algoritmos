/*
Faça um programa que receba o nome, ano de nascimento de uma pessoa e o ano atual e mostre:
O nome da pessoa
A idade dessa pessoa
Um true ou false que diz se ela é maior de idade
Quantos anos ela terá em 2050
*/

const nome = 'Amanda';
const nascimento = 2008
const idade = 15;
const idadeEm2050 = 2050 - nascimento;
const maiorDeIdade = 18 <= true;

console.log('Olá,', nome, 'sua idade é:', idade);
console.log('Maior de idade?', maiorDeIdade);
console.log('Em 2050 você terá', idadeEm2050, 'anos.');
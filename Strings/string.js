/*
const nome = "Mika";
const idade = 27;
const frase = 'Meu nome é ' + nome + ' e tenho ' + idade + ' anos';

console.log(frase)

const meuNome = 'Amanda';
const minhaIdade = 15;

console.log(`Meu nome é ${meuNome} e eu tenho ${minhaIdade} anos`)

const nomeAmigo = 'Dani';
const corFavorita = 'Branco';

console.log(`A cor favorita da ${nomeAmigo} é ${corFavorita}`)

const nomeCompleto = 'AmandaRothmannPiovesana';
const nomeSeparado = '        AmandaRothmannPiovesana      '
const nomeSeparado2 = 'A m a n d a R o t h m a n n P i o v e s a n a'
console.log(nomeCompleto.length, nomeCompleto.toLowerCase(), nomeCompleto.toUpperCase(), nomeSeparado.trim());

const frase = 'Hoje comi cenoura';
console.log(frase.includes('cenoura'), frase.includes('cebola'));
*/

const frase = 'Hoje comi cenoura, adoro batata';
const novaFrase = frase.replaceAll('cenoura', 'batata')
console.log(novaFrase);
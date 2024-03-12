// Escrita

let nomeUsuario
let idade
console.log(typeof nomeUsuario, typeof idade);

// Undefined significa que a variável não tem valor, não sendo: string, number nem boolean

nomeUsuario = 'Amanda';
idade = 15;

console.log('A: Qual seu nome e sua idade?');
console.log('B: Meu nome é', nomeUsuario, 'e eu teho', idade, 'anos.');
console.log('A: Olá, seu nome é', nomeUsuario, 'e você tem', idade, 'anos.');

let a = 10;
let b = 25;
let c = a
a = b;
b = c;
c = a;

console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10
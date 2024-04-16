const readlineSync = require('readline-sync');
numero = Number(readlineSync.question('Numero: '));
let faturação = 1
for (let i = 1; i <= numero ; i++) {
faturação = numero * i
}
console.log(faturação)
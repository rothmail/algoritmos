function parImpar(d) {
    if (d % 2 === 0){
        console.log(d, 'é par')
    } else if (d % 2 === 0) {
        console.log(d, 'é ímpar')
    } else {
        console.log('Não foi encontrado um resultado')
    }
    return d
}
let d = 2;
let resultado = d % 2 === 0;
console.log(resultado)
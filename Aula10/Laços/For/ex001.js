const numeros = [14, 6, 8, 15];
let maiorNumero = 0

function maiorNumero (array) {
    for (let i = 0; 1 < array.length; i++) {
        if (array[1] > maiorNumero) {
            maiorNumero = array[1]
        }
    }
}
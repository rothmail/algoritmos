function ultimoNumero(array) {
    if (array.lenght >= 2) {
        return array[array.length - 1]
    } else {
        return 'O array deve ter dois ou mais números'
    }
}
console.log(ultimoNumero([1, 2, 3, 4]));
console.log(ultimoNumero([9]));
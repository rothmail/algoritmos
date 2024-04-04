function imprimirVogais(str){
const vogaisLista = ['a', 'e', 'i', 'o', 'u'];
const lowerCase = str.toLowerCase();

return lowerCase.split('').filter(char => vogaisLista.includes(char).join(''));
}
console.log(imprimirVogais('Amanda'));
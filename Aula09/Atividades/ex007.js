function imprimirConsoantes(str){
    const vogaisLista = ['a', 'e', 'i', 'o', 'u'];
    const lowerCaseStr = str.toLowerCase();
    
    return lowerCaseStr.split('').filter(char => vogaisLista.includes(char).join(''));
    }
    console.log(imprimirConsoantes('Amanda'));
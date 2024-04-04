/*
let contagem = 10;
while(contagem >= 0) {
    console.log('Contagem', contagem);

    contagem--
}
*/
/*
if (contagem % 2 === 0) {
    console.log('tic');
} else if (contagem % 2 != 0) {
    console.log('tac');
} else if (contagem === 0) {
    console.log('BOOOOOOOOOOOOM')
} else {
    console.log('Resultado não encontrado')
}
*/
let contagem = 20
while (contagem >= 0) {
    if (contagem % 2 === 0) {
        console.log('tic');
    } else if (contagem % 2 != 0) {
        console.log('tac');
    } else if (contagem === 0) {
        console.log('BOOOOOOOOOOOOM')
    } else {
        console.log('Resultado não encontrado')
    }
    contagem--
}
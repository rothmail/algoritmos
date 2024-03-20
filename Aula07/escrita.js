const idade = 15;

if (idade >= 18) {
    console.log('Pode dirigir')
} else {
    console.log('Não pode dirigir')
}

let turno = "manha";
if (turno === "manha") {
    console.log('Bom dia')
} else if (turno === "tarde"){
    console.log('Boa tarde');
} else if (turno === "noite") {
    console.log('Boa noite');
} else {
    console.log("Turno não encontrado");
}

const generoFilme = "Fantasia";
let valorFilme = 14;

if (generoFilme === "Fantasia" && valorFilme < 15) {
    console.log("Bom filme");
} else {
    console.log("Escolha outro");
}
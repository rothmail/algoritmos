const usuario = {
    nome: 'Prof',
    idade: 25,
    email: 'prof@senacrs.com.br',
    cidade: 'São Leopoldo'
}

const novoUsuario = {
    ...usuario,
    nome: 'João',
    idade: 28
}
console.log(usuario);
console.log(novoUsuario);


const listaNomes = ['Amanda', 'Dani', 'Nati', 'Laureta'];
const copiaListaNomes = [...listaNomes];

console.log(copiaListaNomes);
const pessoa = {
    nome: 'Amanda',
    idade: 15,
}

function novaPessoa(pessoa) {
    const nova = {
        ...pessoa,
        comidasFavoritas: ['batata-frita', 'morango', 'chocolate'],
        nomeMelhorAmigo: 'Pedro',
        idadeMelhorAmigo: 15
    }

    console.log(`O nome da pessoa é ${pessoa.nome} e suas comidas favoritas são ${nova.comidasFavoritas[0]}, ${nova.comidasFavoritas[1]} e ${nova.comidasFavoritas[2]}. Seu melhor amigo se chama ${nova.nomeMelhorAmigo} e tem ${nova.idadeMelhorAmigo} anos.`)
}

novaPessoa(pessoa)
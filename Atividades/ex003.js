const filme = {
    nome: 'Bolt',
    direcao: ['Byron Howard', 'Chris Williams'],
    anoDeLancamento: 2009,
    elenco: ['John Travolta', 'Susie Essman', 'Miley Cyrus', 'Mark Walton', 'James Lipton'],
    assisti: true
}

filme.personagens = ['Bolt', 'Mittens', 'Penny', 'Rhino', 'Dr Calico'];

console.log(
'Dublador:' + filme.elenco[0] + 'Personagem:' + filme.personagens[0])
console.log('Dublador:' + filme.elenco[1] + 'Personagem:' + filme.personagens[1])
console.log('Dublador:' + filme.elenco[2] + 'Personagem:' + filme.personagens[2])

filme.personagens[0] = 'Xuxa'

console.log(filme)